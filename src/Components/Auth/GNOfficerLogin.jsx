import React, { useState } from 'react';
import logoImage from '../../assets/SmartGN logo/3.png';

function GNOfficerLogin({ onBack, onSubmit }) {
  const [officerId, setOfficerId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!officerId || !password) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    if (onSubmit) {
      onSubmit({ officerId, password });
    }
  };

  return (
    <div className="w-full bg-[#F5F8FC]/95 backdrop-blur-md rounded-[32px] shadow-2xl p-6 sm:p-10 md:p-12 border border-white/50 flex flex-col items-center max-w-[550px] transition-all duration-300">
      
      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-bold text-[#1B365D] mb-8 text-center">
        GN Officer Login
      </h2>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="w-full flex flex-col">
        
        {/* Error message */}
        {error && (
          <div className="mb-4 text-xs font-semibold text-red-500 bg-red-50 p-3 rounded-xl border border-red-100 text-center">
            {error}
          </div>
        )}

        {/* Officer ID Field */}
        <div className="mb-5">
          <label className="block text-xs sm:text-sm font-medium text-[#1B365D] mb-1.5 pl-1">
            Enter your Officer ID or Email
          </label>
          <input
            type="text"
            value={officerId}
            onChange={(e) => setOfficerId(e.target.value)}
            placeholder="e.g. GN-48209"
            className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-[#EBF1FA] text-[#1B365D] text-sm font-medium placeholder:text-slate-400 focus:outline-none focus:border-[#DF9526] focus:ring-1 focus:ring-[#DF9526] transition-all"
          />
        </div>

        {/* Password Field */}
        <div className="mb-2">
          <label className="block text-xs sm:text-sm font-medium text-[#1B365D] mb-1.5 pl-1">
            Enter Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-[#EBF1FA] text-[#1B365D] text-sm font-medium placeholder:text-slate-400 focus:outline-none focus:border-[#DF9526] focus:ring-1 focus:ring-[#DF9526] transition-all"
          />
        </div>

        {/* Forgot Password & Contact Admin Links */}
        <div className="flex items-center justify-between text-xs font-bold mb-6 pl-1 pr-1">
          <button
            type="button"
            className="text-[#DF9526] hover:text-[#c7821d] transition-colors cursor-pointer"
          >
            Forgot Password ?
          </button>
          <button
            type="button"
            className="text-[#DF9526] hover:text-[#c7821d] transition-colors cursor-pointer"
          >
            Contact Admin Support
          </button>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full h-11 rounded-full bg-[#1B365D] text-white font-bold text-sm tracking-wide shadow-md shadow-[#1B365D]/30 hover:bg-[#152a4a] hover:shadow-lg transition-all duration-200 active:scale-[0.98] cursor-pointer mb-8"
        >
          Officer Secure Login
        </button>
      </form>

      {/* Footer Nav & Logo */}
      <div className="w-full flex items-center justify-between pt-4 border-t border-slate-100 relative min-h-[40px]">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-slate-500 hover:text-[#1B365D] font-bold text-xs gap-1.5 transition-colors absolute left-0 group cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-3.5 h-3.5 transform group-hover:-translate-x-0.5 transition-transform"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back
        </button>

        {/* Logo and Subtitle */}
        <div className="w-full flex flex-col items-center">
          <img src={logoImage} alt="SmartGN Logo" className="h-8 object-contain mb-0.5" />
          <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider text-center">
            Digital Grama Niladhari Service Management System
          </span>
        </div>
      </div>

    </div>
  );
}

export default GNOfficerLogin;
