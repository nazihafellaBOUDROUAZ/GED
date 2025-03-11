import React, { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

import img from "../pictures/img.png";
import logo from "../pictures/logoo.png";
import home from "../pictures/home.png";
import Calendar from "../pictures/Calendar.png";
import todo from "../pictures/todo.png";
import check from "../pictures/check.png";
import notification from "../pictures/notification.png";
import Setting from "../pictures/Setting.png";
import support from "../pictures/support.png";
import report from "../pictures/report.png";

export default function Sidebar({ children }) {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const Menus = useMemo(() => [
    { title: "Dashboard", src: home, path: "/welcome" },
    { title: "Departements", src: todo, path: "/ProjectsList" },
    { title: "Documents ", src: check, path: "/Todo" },
    { title: "Utilisateurs", src: check, path: "/DailyNotes" },
    { title: "Calendar", src: Calendar, path: "/calendar" },
    { title: "Notifications", src: notification, gap: true, path: "/notifications" },
    { title: "Settings", src: Setting, path: "/settings" },
    { title: "Support", src: support, path: "/support" },
    { title: "Report", src: report, path: "/repport" },
  ], []);

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div className={`sidebar ${open ? "open" : "closed"}`}>
        <img
          src={img}
          alt="Toggle Sidebar"
          className={`toggle-btn ${!open ? "rotate" : ""}`}
          onClick={() => setOpen(!open)}
        />
        <div className="sidebar-logo-container">
          <img
            src={logo}
            alt="Logo"
            className={`sidebar-logo ${open ? "rotate" : ""}`}
          />
        </div>

        <hr className="separator" />

        <ul className="menu-list">
          {Menus.map((menu, index) => (
            <React.Fragment key={index}>
              {menu.title === "Notifications" && (
                <hr className="separator" />
              )}
              <Link to={menu.path} className={`menu-item ${location.pathname === menu.path ? "active" : ""} ${menu.gap ? "menu-gap" : ""}`}>
                <img src={menu.src} alt={menu.title} />
                <span className={`menu-text ${!open ? "hidden" : ""}`}>{menu.title}</span>
              </Link>
            </React.Fragment>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className={`main-content ${open ? "open" : "closed"}`}>
        {children}
      </div>
    </div>
  );
}
