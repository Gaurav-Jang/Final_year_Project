import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import AuthPage from "./Components/AuthPage/AuthPage";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import SideBar from "./Components/SideBar/SideBar";
import AdminDashboard from "./Components/Pages/Dashboard/AdminDashboard";
import MyAppointment from "./Components/Pages/MyAppointment/MyAppointment";
import "../src/index.css";
import { AuthContext } from "./Components/AuthPage/AuthProvider";
import { getLocalStorage } from "./AdminDetails/localStorage";
const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setloggedInUserData(userData.data);
    }
  }, []);
  const handleLogin = (email, password) => {
    const storedAdmin = getLocalStorage();
    const adminUser = storedAdmin.find(
      (admin) => admin.email === email && admin.password === password
    );

    if (adminUser) {
      console.log("Admin found:", adminUser);
      setUser("admin");
      setloggedInUserData(adminUser);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: adminUser })
      );
    }
    // else {
    //   console.log("Invalid credentials");
    //   alert("Invalid Credentials");
    // }
  };
  // locations
  const existPaths = ["/", "/MyAppointment"];

  const isexist = existPaths.includes(location.pathname);
  return (
    <>
      {!user ? <AuthPage handleLogin={handleLogin} /> : ""}
      {user === "admin" && (
        <div className="app-view">
          {/* Navbar */}
          {isexist && (
            <NavBar
              sidebarToggle={sidebarToggle}
              setSidebarToggle={setSidebarToggle}
            />
          )}

          {/* Main Content */}
          <div className="view-content">
            {isexist && (
              <SideBar
                sidebarToggle={sidebarToggle}
                changeUser={setUser}
                adminData={loggedInUserData}
              />
            )}
            <div className="pages">
              {/* Pages */}
              <Routes>
                {/* Dashboard */}
                <Route
                  path="/"
                  element={
                    <AdminDashboard
                      sidebarToggle={sidebarToggle}
                      setSidebarToggle={setSidebarToggle}
                    />
                  }
                />

                {/* My Appointment */}
                <Route
                  path="/MyAppointment"
                  element={
                    <MyAppointment
                      sidebarToggle={sidebarToggle}
                      setSidebarToggle={setSidebarToggle}
                    />
                  }
                />
              </Routes>
            </div>
          </div>

          {/* Footer */}
          {isexist && (
            <Footer
              sidebarToggle={sidebarToggle}
              setSidebarToggle={setSidebarToggle}
            />
          )}
        </div>
      )}
    </>
  );
};

export default App;
