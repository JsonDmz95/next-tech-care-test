import { Chart, registerables } from "chart.js";
import { useEffect, useState } from "react";
import Image from "next/image";

import DiagnosisItem from "./DiagnosisItem";
import PatientInfo from "./PatientInfo";
import DiagnosisList from "./DiagnosisList";
import LabResults from "./LabResults";

export default function PatientView({ patient, patientChartInfo }) {
  const [respiratoryRate, setRespiratoryRate] = useState({});
  const [bodyTemperature, setBodyTemperature] = useState({});
  const [heartRate, setHeartRate] = useState({});

  Chart.register(...registerables);
  const canvasId = "blood-pressure-chart";

  useEffect(() => {
    const c = Chart.getChart(canvasId);
    if (c) {
      c.destroy();
    }

    const data = {
      labels: patientChartInfo.yAxis,
      datasets: [
        {
          label: "Systolic",
          data: patientChartInfo.xSistolic,
          borderColor: "#E66FD2",
          fill: false,
          cubicInterpolationMode: "monotone",
          tension: 0.4,
          pointRadius: 6,
          pointBackgroundColor: "#E66FD2",
        },
        {
          label: "Diastolic",
          data: patientChartInfo.xDiastolic,
          borderColor: "#8C6FE6",
          fill: false,
          tension: 0.4,
          pointRadius: 6,
          pointBackgroundColor: "#8C6FE6",
        },
      ],
    };

    const config = {
      type: "line",
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
            },
            grid: {
              display: false,
            },
          },
          y: {
            display: true,
            title: {
              display: false,
            },
            suggestedMin: 60,
            suggestedMax: 180,
          },
        },
      },
    };
    new Chart(canvasId, config);
  }, [patientChartInfo]);

  useEffect(() => {
    console.log(patient);
    if (patient.diagnosis_history && patient.diagnosis_history.length > 0) {
      setRespiratoryRate(patient.diagnosis_history[0].respiratory_rate);
      setBodyTemperature(patient.diagnosis_history[0].temperature);
      setHeartRate(patient.diagnosis_history[0].heart_rate);
    }
  }, [patient]);

  return (
    <section className="patient-view">
      <div className="diagnosis-section card">
        <h2 className="card-title">Diagnosis History</h2>

        <div className="graph-container d-flex">
          <div className="left">
            <div className="chart-header d-flex">
              <h3 className="chart-title">Blood Pressure</h3>
              <div className="time-filter">
                <span>Last 6 months</span>
                <Image
                  src="/img/IconDown.svg"
                  alt="Down Arrow"
                  height={6}
                  width={11}
                />
              </div>
            </div>

            <canvas id={canvasId}></canvas>
          </div>

          <div className="right">
            <div className="limit-static">
              <h4 className="pink">Systolic</h4>
              <span className="limit-value">
                {patientChartInfo.xSistolic.slice(-1)}
              </span>
              <p className="limit-legend">
                <Image
                  src="/img/ArrowUp.svg"
                  alt="Arrow Up"
                  width={10}
                  height={5.5}
                />
                Higher than Average
              </p>
            </div>

            <div className="limit-static">
              <h4 className="purple">Diastolic</h4>
              <span className="limit-value">
                {patientChartInfo.xDiastolic.slice(-1)}
              </span>
              <p className="limit-legend">
                <Image
                  src="/img/ArrowDown.svg"
                  alt="Arrow Down"
                  width={10}
                  height={5.5}
                />
                Lower than Average
              </p>
            </div>
          </div>
        </div>

        <div className="diagnosis-info d-flex">
          <DiagnosisItem
            icon="/img/IconRespiratoryRate.svg"
            title="Respiratory Rate"
            value={`${respiratoryRate.value} bpm`}
            level={respiratoryRate.levels}
            color={"blue"}
          />

          <DiagnosisItem
            icon="/img/IconTemperature.svg"
            title="Temperature"
            value={`${bodyTemperature.value}°F`}
            level={bodyTemperature.levels}
            color={"red"}
          />

          <DiagnosisItem
            icon="/img/IconHeartRate.svg"
            title="Heart Rate"
            value={`${heartRate.value} bmp`}
            level={heartRate.levels}
            color={"pink"}
          />
        </div>
      </div>

      <PatientInfo
        name={patient.name}
        gender={patient.gender}
        profilePicture="/img/patient_pp.png"
        dateOfBirth={patient.date_of_birth}
        phone={patient.phone_number}
        emergencyContact={patient.emergency_contact}
        insuranceType={patient.insurance_type}
      />

      <DiagnosisList list={patient.diagnostic_list} />

      <LabResults list={patient.lab_results} />
    </section>
  );
}
