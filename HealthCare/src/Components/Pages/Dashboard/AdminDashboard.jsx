import React from "react";
import "../../../index.css";

function AdminDashboard({ sidebarToggle, setSidebarToggle }) {
  return (
    <div className={sidebarToggle ? "partial-view" : "partial-view-expand"}>
      AdminDashboard
    </div>
  );
}

export default AdminDashboard;
