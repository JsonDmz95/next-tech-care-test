import React from "react";

export default function DiagnosisList({ list }) {
  return (
    <div className="diagnosis-list-section card">
      <h2 className="card-title">Diagnosis History</h2>
      <div className="table-container">
        {!list || list.lenght <= 0 ? null : (
          <table>
            {Object.keys(list[0]).map((key) => {
              return (
                <th key={key}>{key === "name" ? "Problem/Diagnosis" : key}</th>
              );
            })}

            <tbody>
              {list.map((item, index) => (
                <tr key={index}>
                  {Object.values(item).map((val, index) => (
                    <td key={index}>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
