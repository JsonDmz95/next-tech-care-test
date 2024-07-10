import React from "react";
import Image from "next/image";

export default function DiagnosisItem({ icon, title, value, level, color }) {
  return (
    <div className={`diagnosis-item ${color}`}>
      <Image src={icon} alt={title} height={96} width={96}/>
      <h4 className="diagnosis-title">{title}</h4>
      <p className="value">{value}</p>
      <p className="legend">{level}</p>
    </div>
  );
}
