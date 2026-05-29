import React from 'react';
import logoImage from '../../assets/SmartGN logo/3.png';

function RoleSelection({ onSelectRole, onBack }) {
  return (
    <div className="w-full bg-[#F5F8FC]/90 backdrop-blur-md rounded-[32px] shadow-2xl p-6 sm:p-10 md:p-12 border border-white/50 flex flex-col items-center max-w-[550px] transition-all duration-300 hover:shadow-3xl">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-[#1B365D] tracking-tight mb-2 text-center">
        Welcome to SmartGN
      </h2>
      <p className="text-sm sm:text-base text-[#2D3748]/70 mb-8 text-center font-medium">
        Please select your profile to continue
      </p>

      {/* Role Grid */}
      <div className="w-full flex flex-col gap-4 mb-8">
        {/* Village Resident Card */}
        <button
          onClick={() => onSelectRole('resident')}
          className="group w-full flex items-center p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-[#DF9526] hover:bg-[#DF9526]/[0.02] text-left transition-all duration-300 hover:shadow-md active:scale-[0.99] cursor-pointer"
        >
          <div className="w-12 h-12 rounded-xl bg-[#DF9526]/10 text-[#DF9526] flex items-center justify-center mr-4 group-hover:bg-[#DF9526]/20 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-[#1B365D] group-hover:text-[#DF9526] transition-colors duration-300">
              Village Resident
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Request certificates, book appointments, and track allowances.
            </p>
          </div>
        </button>

        {/* GN Officer Card */}
        <button
          onClick={() => onSelectRole('officer')}
          className="group w-full flex items-center p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-[#1B365D] hover:bg-[#1B365D]/[0.02] text-left transition-all duration-300 hover:shadow-md active:scale-[0.99] cursor-pointer"
        >
          <div className="w-12 h-12 rounded-xl bg-[#1B365D]/10 text-[#1B365D] flex items-center justify-center mr-4 group-hover:bg-[#1B365D]/20 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-[#1B365D] group-hover:text-[#1B365D] transition-colors duration-300">
              Grama Niladhari Officer
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Review and approve requests, manage divisions, and post notices.
            </p>
          </div>
        </button>
      </div>

      {/* Back to landing link */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-[#1B365D] transition-colors duration-200 mb-8 cursor-pointer group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        Back to Home
      </button>

      {/* Brand logo */}
      <div className="flex flex-col items-center">
        <img src={logoImage} alt="SmartGN Logo" className="h-10 object-contain mb-1" />
        <span className="text-[9px] text-slate-400 font-medium tracking-wider text-center uppercase">
          Digital Grama Niladhari Service Management System
        </span>
      </div>
    </div>
  );
}

export default RoleSelection;
