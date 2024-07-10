import React from "react";
import Image from "next/image";

export default function PatientsList({list}) {
  return (
    <div className="patients-list card d-flex">
      <div className="card-header d-flex">
        <h3 className="card-title">Patients</h3>
        <Image src="/img/IconSearch.svg" alt="Search" width={18} height={18}/>
      </div>

      <div className="card-body">

        <ul>
          {
            list.map((item, index) => (
              <li key={index} className={item.name === 'Jessica Taylor' ? 'active' : ''}>
                <div className="left">
                  <Image src={item.profile_picture} alt={item.name} height={48} width={48} style={{visibility: `${item.profile_picture ? 'visible' : 'hidden'}`}}/>
                  <div className="text">
                    <b>{item.name}</b>
                    <span>{`${item.gender}, ${item.age}`}</span>
                  </div>
                </div>
                
                <Image src="/img/IconMoreHor.svg" alt="More" height={4} width={18}/>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}
