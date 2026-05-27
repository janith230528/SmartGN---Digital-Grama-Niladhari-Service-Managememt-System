import React from 'react';

function AuthLayout({ children }) {
  return (
    <div className="min-h-screen w-full bg-[#F3F7FA] flex items-center justify-center relative overflow-hidden p-4 sm:p-6 md:p-8 font-sans selection:bg-[#E28A2B]/30">
      {/* Decorative Floating Glowing Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full bg-[#DF9526]/10 blur-[80px] sm:blur-[120px] pointer-events-none animate-pulse duration-[6000ms]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-[#1B365D]/10 blur-[100px] sm:blur-[140px] pointer-events-none animate-pulse duration-[8000ms]" />
      
      {/* Central horizontal band to mimic mockup backdrop */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[280px] sm:h-[350px] bg-black/[0.03] backdrop-blur-[6px] border-y border-black/[0.02] pointer-events-none hidden md:block" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-lg md:max-w-2xl lg:max-w-3xl flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
