import React from "react";
import Image from "next/image";

export default function NavItem({ title, icon, active }) {
  return (
    <li className="navigation-item">
      <a href="#" title={title} className={active ? "active d-flex" : "d-flex"}>
        <Image
          src={icon}
          alt={title}
          className="nav-item-icon"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <span className="hide show-xl">{title}</span>
      </a>
    </li>
  );
}
