import React from "react";
import Image from "next/image";

import NavItem from "./NavItem";

export default function Header() {
  return (
    <header className="d-flex">
      <a href="/" className="logo-container d-flex" title="Tech Care">
        <Image
          src="/TestLogo.svg"
          alt="Tech Care"
          className="logo hide show-lg"
          width={210}
          height={48}
        />
        <Image
          src="/TestLogoMobile.svg"
          alt="Tech Care"
          className="logo show hide-lg"
          height={35}
          width={35}
        />
      </a>

      <nav className="navigation">
        <ul className="navigation-list d-flex">
          <NavItem
            title="Overview"
            icon="/img/IconOverview.svg"
            active={false}
          />
          <NavItem
            title="Patients"
            icon="/img/IconPatients.svg"
            active={true}
          />
          <NavItem
            title="Schedule"
            icon="/img/IconSchedule.svg"
            active={false}
          />
          <NavItem
            title="Messages"
            icon="/img/IconMessage.svg"
            active={false}
          />
          <NavItem
            title="Transactions"
            icon="/img/IconTransactions.svg"
            active={false}
          />
        </ul>
      </nav>

      <div className="user-profile d-flex">
        <div className="left d-flex">
          <Image
            src="/img/pp.jpg"
            alt="Dr. Jose Simmons Avatar"
            height={44}
            width={44}
          />
          <div className="user-info hide show-xl">
            <span className="user-name">Dr. Jose Simmons</span>
            <span className="user-role">General Practitioner</span>
          </div>
        </div>

        <div className="right">
          <Image
            src="/img/IconSettings.svg"
            alt="Settings"
            height={20}
            width={19}
          />
          <Image
            src="/img/IconMoreVert.svg"
            alt="More Options"
            height={18}
            width={4}
          />
        </div>
      </div>
    </header>
  );
}
