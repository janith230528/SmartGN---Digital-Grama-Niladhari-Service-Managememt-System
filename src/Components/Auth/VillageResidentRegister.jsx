import React, { useState } from 'react';
import logoImage from '../../assets/SmartGN logo/3.png';

const GN_DIVISIONS = [
  'Colombo North - Division 01',
  'Colombo South - Division 02',
  'Kandy Central - Division 12',
  'Galle Fort - Division 05',
  'Jaffna Town - Division 08',
  'Negombo Beach - Division 03',
  'Gampaha Udugampola - Division 15',
  'Trincomalee Harbour - Division 04',
];

function VillageResidentRegister({ onLoginLink, onSubmit }) {
  const [formData, setFormData] = useState({
    nic: '',
    household: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    gender: '',
    mobile: '',
    division: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check required fields
    const requiredFields = [
      'nic', 'household', 'firstName', 'lastName', 
      'email', 'dob', 'gender', 'mobile', 'division', 
      'password', 'confirmPassword'
    ];
    
    const isAnyEmpty = requiredFields.some((field) => !formData[field]);
    if (isAnyEmpty) {
      setError('Please fill in all fields.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="w-full bg-[#F5F8FC]/95 backdrop-blur-md rounded-[32px] shadow-2xl p-6 sm:p-8 md:p-10 border border-white/50 flex flex-col items-center max-w-[650px] transition-all duration-300">
      
      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-bold text-[#1B365D] mb-6 text-center">
        Create your account
      </h2>

      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="w-full flex flex-col">
        
        {/* Error message */}
        {error && (
          <div className="mb-4 text-xs font-semibold text-red-500 bg-red-50 p-3 rounded-xl border border-red-100 text-center">
            {error}
          </div>
        )}

        {/* Input Fields Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3.5 mb-6">
          
          {/* NIC Number */}
          <div>
            <label className="block text-xs font-semibold text-[#1B365D] mb-1 pl-1">
              NIC Number
            </label>
            <input
              type="text"
              name="nic"
              value={formData.nic}
              onChange={handleChange}
              placeholder="e.g. 199912345678"
              className="w-full h-10 px-4 rounded-xl border border-slate-200 bg-[#EBF1FA] text-[#1B365D] text-xs font-medium placeholder:text-slate-400 focus:outline-none focus:border-[#DF9526] focus:ring-1 focus:ring-[#DF9526] transition-all"
            />
          </div>

          {/* Household Number */}
          <div>
            <label className="block text-xs font-semibold text-[#1B365D] mb-1 pl-1">
              Household Number
            </label>
            <input
              type="text"
              name="household"
              value={formData.household}
              onChange={handleChange}
              placeholder="e.g. HH-9082"
              className="w-full h-10 px-4 rounded-xl border border-slate-200 bg-[#EBF1FA] text-[#1B365D] text-xs font-medium placeholder:text-slate-400 focus:outline-none focus:border-[#DF9526] focus:ring-1 focus:ring-[#DF9526] transition-all"
            />
          </div>

          {/* First Name */}
          <div>
            <label className="block text-xs font-semibold text-[#1B365D] mb-1 pl-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              className="w-full h-10 px-4 rounded-xl border border-slate-200 bg-[#EBF1FA] text-[#1B365D] text-xs font-medium placeholder:text-slate-400 focus:outline-none focus:border-[#DF9526] focus:ring-1 focus:ring-[#DF9526] transition-all"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-xs font-semibold text-[#1B365D] mb-1 pl-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              className="w-full h-10 px-4 rounded-xl border border-slate-200 bg-[#EBF1FA] text-[#1B365D] text-xs font-medium placeholder:text-slate-400 focus:outline-none focus:border-[#DF9526] focus:ring-1 focus:ring-[#DF9526] transition-all"
            />
          </div>

          {/* email Address - Full Width */}
          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-[#1B365D] mb-1 pl-1">
              email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john.doe@example.com"
              className="w-full h-10 px-4 rounded-xl border border-slate-200 bg-[#EBF1FA] text-[#1B365D] text-xs font-medium placeholder:text-slate-400 focus:outline-none focus:border-[#DF9526] focus:ring-1 focus:ring-[#DF9526] transition-all"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-xs font-semibold text-[#1B365D] mb-1 pl-1">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full h-10 px-4 rounded-xl border border-slate-200 bg-[#EBF1FA] text-[#1B365D] text-xs font-medium placeholder:text-slate-400 focus:outline-none focus:border-[#DF9526] focus:ring-1 focus:ring-[#DF9526] transition-all"
            />
          </div>

          {/* Gender Select */}
          <div>
            <label className="block text-xs font-semibold text-[#1B365D] mb-1 pl-1">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full h-10 px-4 rounded-xl border border-slate-200 bg-[#EBF1FA] text-[#1B365D] text-xs font-medium focus:outline-none focus:border-[#DF9526] focus:ring-1 focus:ring-[#DF9526] transition-all appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%231B365D%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px_16px] bg-[right_16px_center] bg-no-repeat"
            >
              <option value="" disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-xs font-semibold text-[#1B365D] mb-1 pl-1">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="e.g. 0771234567"
              className="w-full h-10 px-4 rounded-xl border border-slate-200 bg-[#EBF1FA] text-[#1B365D] text-xs font-medium placeholder:text-slate-400 focus:outline-none focus:border-[#DF9526] focus:ring-1 focus:ring-[#DF9526] transition-all"
            />
          </div>

          {/* Select GN Division Select */}
          <div>
            <label className="block text-xs font-semibold text-[#1B365D] mb-1 pl-1">
              Select GN Division
            </label>
            <select
              name="division"
              value={formData.division}
              onChange={handleChange}
              className="w-full h-10 px-4 rounded-xl border border-slate-200 bg-[#EBF1FA] text-[#1B365D] text-xs font-medium focus:outline-none focus:border-[#DF9526] focus:ring-1 focus:ring-[#DF9526] transition-all appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%231B365D%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px_16px] bg-[right_16px_center] bg-no-repeat"
            >
              <option value="" disabled>Select GN Division</option>
              {GN_DIVISIONS.map((div) => (
                <option key={div} value={div}>{div}</option>
              ))}
            </select>
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-semibold text-[#1B365D] mb-1 pl-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full h-10 px-4 rounded-xl border border-slate-200 bg-[#EBF1FA] text-[#1B365D] text-xs font-medium placeholder:text-slate-400 focus:outline-none focus:border-[#DF9526] focus:ring-1 focus:ring-[#DF9526] transition-all"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-semibold text-[#1B365D] mb-1 pl-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full h-10 px-4 rounded-xl border border-slate-200 bg-[#EBF1FA] text-[#1B365D] text-xs font-medium placeholder:text-slate-400 focus:outline-none focus:border-[#DF9526] focus:ring-1 focus:ring-[#DF9526] transition-all"
            />
          </div>

        </div>

        {/* Create Account Button */}
        <button
          type="submit"
          className="w-full h-11 rounded-full bg-[#1B365D] text-white font-bold text-sm tracking-wide shadow-md shadow-[#1B365D]/30 hover:bg-[#152a4a] hover:shadow-lg transition-all duration-200 active:scale-[0.98] cursor-pointer mb-4"
        >
          Create Account
        </button>

        {/* Already have an account redirect */}
        <div className="text-center text-xs font-semibold text-slate-500 mb-6">
          Already have an account ?{' '}
          <button
            type="button"
            onClick={onLoginLink}
            className="text-[#DF9526] hover:text-[#c7821d] font-bold transition-colors cursor-pointer ml-1"
          >
            Login here
          </button>
        </div>
      </form>

      {/* Footer Nav & Logo */}
      <div className="w-full flex flex-col items-center pt-4 border-t border-slate-100">
        <img src={logoImage} alt="SmartGN Logo" className="h-8 object-contain mb-0.5" />
        <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider text-center">
          Digital Grama Niladhari Service Management System
        </span>
      </div>

    </div>
  );
}

export default VillageResidentRegister;
