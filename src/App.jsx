import React, { useState } from "react";
import Hero from "./Components/Landing-page/Hero/Hero.jsx";
import Navbar from "./Components/Landing-page/Navbar/Navbar.jsx";
import Services from "./Components/Landing-page/Services/Services.jsx";
import Chatbot from './Components/Chatbot.jsx';

function App() {
  const [view, setView] = useState("landing"); // 'landing', 'role-selection', 'login', 'register', 'officer-login', 'logged-in'
  const [currentUser, setCurrentUser] = useState(null);
  const [authMessage, setAuthMessage] = useState("");

  const handleSelectRole = (role) => {
    if (role === "resident") {
      setView("login");
    } else {
      setView("officer-login");
    }
  };

  const handleResidentLogin = (credentials) => {
    console.log("Resident Login Credentials:", credentials);
    setCurrentUser({ role: "resident", name: credentials.nic });
    setAuthMessage("Successfully logged in as Resident!");
    setView("logged-in");
  };

  const handleOfficerLogin = (credentials) => {
    console.log("Officer Login Credentials:", credentials);
    setCurrentUser({ role: "officer", name: credentials.officerId });
    setAuthMessage("Successfully logged in as GN Officer!");
    setView("logged-in");
  };

  const handleResidentRegister = (formData) => {
    console.log("Resident Registration Form Data:", formData);
    alert("Account created successfully! Redirecting you to login.");
    setView("login");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setAuthMessage("");
    setView("landing");
  };

  return (
    <>
      {view === "landing" && (
        <div className="App">
          <Navbar />
          <Hero onNavigate={setView} />
          <hr />
          <Services />
        </div>
      )}

      {view === "role-selection" && (
        <AuthLayout>
          <RoleSelection
            onSelectRole={handleSelectRole}
            onBack={() => setView("landing")}
          />
        </AuthLayout>
      )}

      {view === "login" && (
        <AuthLayout>
          <VillageResidentLogin
            onRegisterLink={() => setView("register")}
            onBack={() => setView("role-selection")}
            onSubmit={handleResidentLogin}
          />
        </AuthLayout>
      )}

      {view === "register" && (
        <AuthLayout>
          <VillageResidentRegister
            onLoginLink={() => setView("login")}
            onSubmit={handleResidentRegister}
          />
        </AuthLayout>
      )}

      {view === "officer-login" && (
        <AuthLayout>
          <GNOfficerLogin
            onBack={() => setView("role-selection")}
            onSubmit={handleOfficerLogin}
          />
        </AuthLayout>
      )}

      {view === "logged-in" && (
        <div className="min-h-screen bg-[#F3F7FA] flex flex-col justify-between">
          <Navbar />
          <main className="flex-grow flex items-center justify-center p-6">
            <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full border border-slate-100 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#1B365D] mb-2">Welcome Back!</h2>
              <p className="text-sm text-slate-500 mb-6">{authMessage}</p>
              <div className="bg-slate-50 rounded-2xl p-4 w-full text-left mb-6 border border-slate-100">
                <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider mb-1">User Identifier</span>
                <span className="text-sm font-bold text-[#1B365D] break-all">{currentUser?.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="w-full py-2.5 rounded-full bg-[#1B365D] hover:bg-[#152a4a] text-white font-bold text-sm tracking-wide shadow-md transition-colors cursor-pointer"
              >
                Log Out
              </button>
            </div>
          </main>
        </div>
      )}
    </>
  );
}

export default App;