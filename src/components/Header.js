import React from "react";
import Image from "next/image";

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
        <img
          src="/TestLogoMobile.svg"
          alt="Tech Care"
          className="logo show hide-lg"
          width={210}
          height={48}
        />
      </a>

      <nav className="navigation">
        <ul className="navigation-list d-flex"></ul>
      </nav>

      <div className='user-profile d-flex'>
        <div className='left d-flex'>
          <Image src="/img/pp.jpg" alt='Dr. Jose Simmons Avatar' height={44} width={44}/>
          <div className='user-info hide show-xxl'>
            <span className='user-name'>Dr. Jose Simmons</span>
            <span className='user-role'>General Practitioner</span>
          </div>
        </div>

        <div className='right'>
          <Image src="/img/IconSettings.svg" alt='Settings' height={20} width={19}/>
          <Image src="/img/IconMoreVert.svg" alt='More Options' height={18} width={4}/>
        </div>
      </div>
    </header>
  );
}
