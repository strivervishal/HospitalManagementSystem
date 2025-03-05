import React from "react";
import {
  FaHome,
  FaUserMd,
  FaCalendarCheck,
  FaUser,
  FaPills,
  FaChartBar,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* Menu Items */}
      <nav className="menu">
        <MenuItem icon={<FaHome />} label="Dashboard" active />
        <MenuItem icon={<FaUserMd />} label="Doctors" />
        <MenuItem icon={<FaCalendarCheck />} label="Appointments" />
        <MenuItem icon={<FaUser />} label="Patients" />
        <MenuItem icon={<FaPills />} label="Pharmacy" />
        <MenuItem icon={<FaChartBar />} label="Charts" />
      </nav>

      {/* Spacer */}
      <div className="spacer"></div>

      {/* Bottom Items */}
      <nav className="bottom-menu">
        <MenuItem icon={<FaCog />} label="Settings" />
        <MenuItem icon={<FaQuestionCircle />} label="Help Center" />
        <MenuItem icon={<FaSignOutAlt />} label="Log Out" />
      </nav>

      <style jsx>{`
        .sidebar {
          height: 100vh;
          width: 16rem;
          background: #e6faf9;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          color: #2d3e50;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          font-family: sans-serif;
          position: fixed;
          left: 0;
          top: 0;
        }
        .menu,
        .bottom-menu {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          font-size: 1.125rem;
        }
        .bottom-menu {
          border-top: 1px solid #ccc;
          padding-top: 1rem;
        }
        .spacer {
          flex-grow: 1;
        }
      `}</style>
    </div>
  );
}

function MenuItem({ icon, label, active }) {
  return (
    <div className={`menu-item ${active ? "active" : ""}`}>
      <span className="icon">{icon}</span>
      <span className="label">{label}</span>
      <style jsx>{`
        .menu-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s;
          font-weight: 500;
        }
        .menu-item:hover {
          background: #d1f5f0;
        }
        .menu-item.active {
          background: #00b6b6;
          color: white;
        }
        .icon {
          font-size: 1.25rem;
          width: 1.5rem;
          flex-shrink: 0;
        }
        .label {
          flex-grow: 1;
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
}
