import React, { useState, useEffect } from "react";
import Image from "next/image";

import { format, parse } from "date-fns";

export default function PatientInfo({
  name,
  gender,
  profilePicture,
  dateOfBirth,
  phone,
  emergencyContact,
  insuranceType,
}) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    if (dateOfBirth && dateOfBirth !== null) {
      const date = parse(dateOfBirth, "MM/dd/yyyy", new Date());
      setFormattedDate(format(date, "MMMM dd, yyyy"));
    }
  }, [dateOfBirth]);

  return (
    <div className="patient-info-section card">
      <Image
        src={profilePicture}
        alt={name}
        className="patient-avatar"
        width={200}
        height={200}
      />
      <h1 className="patient-name">{name}</h1>

      <div className="patient-info">
        <div className="patient-info-item d-flex">
          <div className="left">
            <Image
              src="./img/IconInfoDate.svg"
              alt="Date of Birth"
              height={42}
              width={42}
            />
          </div>

          <div className="right">
            <span className="info-title">Date of Birth</span>
            <span className="info-value">{formattedDate}</span>
          </div>
        </div>

        <div className="patient-info-item d-flex">
          <div className="left">
            <Image
              src={
                gender && gender === "male"
                  ? "./img/IconInfoMale.svg"
                  : "./img/IconInfoFemale.svg"
              }
              alt="Gender"
              height={42}
              width={42}
            />
          </div>

          <div className="right">
            <span className="info-title">Gender</span>
            <span className="info-value">{gender}</span>
          </div>
        </div>

        <div className="patient-info-item d-flex">
          <div className="left">
            <Image
              src="./img/IconInfoPhone.svg"
              alt="Contact Info."
              width={42}
              height={42}
            />
          </div>

          <div className="right">
            <span className="info-title">Contact Info.</span>
            <span className="info-value">{phone}</span>
          </div>
        </div>

        <div className="patient-info-item d-flex">
          <div className="left">
            <Image
              src="./img/IconInfoPhone.svg"
              alt="Emergency Contacts"
              width={42}
              height={42}
            />
          </div>

          <div className="right">
            <span className="info-title">Emergency Contacts</span>
            <span className="info-value">{emergencyContact}</span>
          </div>
        </div>

        <div className="patient-info-item d-flex">
          <div className="left">
            <Image
              src="./img/IconInfoInsurance.svg"
              alt="Insurance Provider"
              height={42}
              width={42}
            />
          </div>

          <div className="right">
            <span className="info-title">Insurance Provider</span>
            <span className="info-value">{insuranceType}</span>
          </div>
        </div>
      </div>

      <button className="btn btn-primary">Show All Information</button>
    </div>
  );
}
