import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Analytics = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
        activePage="analytics"
      />

      {/* Main Content */}
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${
        sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-80'
      }`}>
        <main className="flex-1 mt-16 overflow-x-hidden overflow-y-auto bg-gray-50 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
              {/* Attendance Card */}
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[#4B5563] text-sm mb-1">Attendance</div>
                    <div className="text-[#16A34A] text-2xl font-bold">94%</div>
                  </div>
                  <div className="w-12 h-12 bg-[#DCFCE7] rounded-lg flex items-center justify-center">
                    <svg className="w-[14px] h-4" viewBox="0 0 14 16" fill="none">
                      <path d="M4 0C4.55312 0 5 0.446875 5 1V2H9V1C9 0.446875 9.44687 0 10 0C10.5531 0 11 0.446875 11 1V2H12.5C13.3281 2 14 2.67188 14 3.5V5H0V3.5C0 2.67188 0.671875 2 1.5 2H3V1C3 0.446875 3.44688 0 4 0ZM0 6H14V14.5C14 15.3281 13.3281 16 12.5 16H1.5C0.671875 16 0 15.3281 0 14.5V6ZM10.2812 9.53125C10.575 9.2375 10.575 8.7625 10.2812 8.47188C9.9875 8.18125 9.5125 8.17813 9.22188 8.47188L6.25313 11.4406L4.78438 9.97188C4.49063 9.67813 4.01562 9.67813 3.725 9.97188C3.43437 10.2656 3.43125 10.7406 3.725 11.0312L5.725 13.0312C6.01875 13.325 6.49375 13.325 6.78438 13.0312L10.2812 9.53125Z" fill="#16A34A"/>
                    </svg>
                  </div>
                </div>
              </div>

            {/* Avg Marks Card */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[#4B5563] text-sm mb-1">Avg Marks</div>
                  <div className="text-[#2563EB] text-2xl font-bold">87.5</div>
                </div>
                <div className="w-12 h-12 bg-[#DBEAFE] rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path d="M2 2C2 1.44687 1.55313 1 1 1C0.446875 1 0 1.44687 0 2V12.5C0 13.8813 1.11875 15 2.5 15H15C15.5531 15 16 14.5531 16 14C16 13.4469 15.5531 13 15 13H2.5C2.225 13 2 12.775 2 12.5V2ZM14.7063 4.70625C15.0969 4.31563 15.0969 3.68125 14.7063 3.29063C14.3156 2.9 13.6812 2.9 13.2906 3.29063L10 6.58437L8.20625 4.79063C7.81563 4.4 7.18125 4.4 6.79063 4.79063L3.29063 8.29062C2.9 8.68125 2.9 9.31563 3.29063 9.70625C3.68125 10.0969 4.31563 10.0969 4.70625 9.70625L7.5 6.91563L9.29375 8.70938C9.68437 9.1 10.3188 9.1 10.7094 8.70938L14.7094 4.70937L14.7063 4.70625Z" fill="#2563EB"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Daily Hours Card */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[#4B5563] text-sm mb-1">Daily Hours</div>
                  <div className="text-[#9333EA] text-2xl font-bold">4.2h</div>
                </div>
                <div className="w-12 h-12 bg-[#F3E8FF] rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path d="M8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0ZM7.25 3.75V8C7.25 8.25 7.375 8.48438 7.58437 8.625L10.5844 10.625C10.9281 10.8562 11.3938 10.7625 11.625 10.4156C11.8562 10.0687 11.7625 9.60625 11.4156 9.375L8.75 7.6V3.75C8.75 3.33437 8.41562 3 8 3C7.58437 3 7.25 3.33437 7.25 3.75Z" fill="#9333EA"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Courses Card */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[#4B5563] text-sm mb-1">Courses</div>
                  <div className="text-[#EA580C] text-2xl font-bold">12</div>
                </div>
                <div className="w-12 h-12 bg-[#FFEDD5] rounded-lg flex items-center justify-center">
                  <svg className="w-[14px] h-4" viewBox="0 0 14 16" fill="none">
                    <path d="M3 0C1.34375 0 0 1.34375 0 3V13C0 14.6562 1.34375 16 3 16H12H13C13.5531 16 14 15.5531 14 15C14 14.4469 13.5531 14 13 14V12C13.5531 12 14 11.5531 14 11V1C14 0.446875 13.5531 0 13 0H12H3ZM3 12H11V14H3C2.44688 14 2 13.5531 2 13C2 12.4469 2.44688 12 3 12ZM4 4.5C4 4.225 4.225 4 4.5 4H10.5C10.775 4 11 4.225 11 4.5C11 4.775 10.775 5 10.5 5H4.5C4.225 5 4 4.775 4 4.5ZM4.5 6H10.5C10.775 6 11 6.225 11 6.5C11 6.775 10.775 7 10.5 7H4.5C4.225 7 4 6.775 4 6.5C4 6.225 4.225 6 4.5 6Z" fill="#EA580C"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Certificates Card */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[#4B5563] text-sm mb-1">Certificates</div>
                  <div className="text-[#CA8A04] text-2xl font-bold">8</div>
                </div>
                <div className="w-12 h-12 bg-[#FEF9C3] rounded-lg flex items-center justify-center">
                  <svg className="w-3 h-4" viewBox="0 0 12 16" fill="none">
                    <path d="M5.4314 0.171826C5.77515 -0.0562988 6.22515 -0.0562988 6.5689 0.171826L7.12515 0.537451C7.31265 0.659326 7.5314 0.718701 7.75328 0.706201L8.4189 0.665576C8.8314 0.640576 9.2189 0.865576 9.40328 1.23433L9.70328 1.8312C9.80328 2.0312 9.96578 2.19058 10.1627 2.29058L10.7658 2.5937C11.1345 2.77808 11.3595 3.16558 11.3345 3.57808L11.2939 4.2437C11.2814 4.46558 11.3408 4.68745 11.4627 4.87183L11.8314 5.42808C12.0595 5.77183 12.0595 6.22183 11.8314 6.56558L11.4627 7.12495C11.3408 7.31245 11.2814 7.5312 11.2939 7.75308L11.3345 8.4187C11.3595 8.8312 11.1345 9.2187 10.7658 9.40308L10.1689 9.70308C9.9689 9.80308 9.80953 9.96558 9.70953 10.1625L9.4064 10.7656C9.22203 11.1343 8.83453 11.3593 8.42203 11.3343L7.7564 11.2937C7.53453 11.2812 7.31265 11.3406 7.12828 11.4625L6.57203 11.8312C6.22828 12.0593 5.77828 12.0593 5.43453 11.8312L4.87515 11.4625C4.68765 11.3406 4.4689 11.2812 4.24703 11.2937L3.5814 11.3343C3.1689 11.3593 2.7814 11.1343 2.59703 10.7656L2.29703 10.1687C2.19703 9.9687 2.03453 9.80933 1.83765 9.70933L1.23453 9.4062C0.865777 9.22183 0.640777 8.83433 0.665776 8.42183L0.706402 7.7562C0.718902 7.53433 0.659527 7.31245 0.537652 7.12808L0.172027 6.5687C-0.0560985 6.22495 -0.0560985 5.77495 0.172027 5.4312L0.537652 4.87495C0.659527 4.68745 0.718902 4.4687 0.706402 4.24683L0.665776 3.5812C0.640777 3.1687 0.865777 2.7812 1.23453 2.59683L1.8314 2.29683C2.0314 2.1937 2.1939 2.0312 2.2939 1.8312L2.5939 1.23433C2.77828 0.865576 3.16578 0.640576 3.57828 0.665576L4.2439 0.706201C4.46578 0.718701 4.68765 0.659326 4.87203 0.537451L5.4314 0.171826ZM8.50015 5.99995C8.50015 5.33691 8.23676 4.70103 7.76792 4.23218C7.29908 3.76334 6.66319 3.49995 6.00015 3.49995C5.33711 3.49995 4.70123 3.76334 4.23238 4.23218C3.76354 4.70103 3.50015 5.33691 3.50015 5.99995C3.50015 6.66299 3.76354 7.29888 4.23238 7.76772C4.70123 8.23656 5.33711 8.49995 6.00015 8.49995C6.66319 8.49995 7.29908 8.23656 7.76792 7.76772C8.23676 7.29888 8.50015 6.66299 8.50015 5.99995ZM0.0407765 13.8062L1.38765 10.6031C1.3939 10.6062 1.39703 10.6093 1.40015 10.6156L1.70015 11.2125C2.06578 11.9375 2.82515 12.3781 3.63765 12.3312L4.30328 12.2906C4.30953 12.2906 4.3189 12.2906 4.32515 12.2968L4.8814 12.6656C5.04078 12.7687 5.20953 12.85 5.38453 12.9062L4.20953 15.6968C4.13765 15.8687 3.97828 15.9843 3.7939 16C3.60953 16.0156 3.4314 15.9312 3.3314 15.775L2.32515 14.2343L0.572026 14.4937C0.393901 14.5187 0.215777 14.4468 0.103277 14.3062C-0.00922346 14.1656 -0.0310985 13.9718 0.0376515 13.8062H0.0407765ZM7.79078 15.6937L6.61578 12.9062C6.79078 12.85 6.95953 12.7718 7.1189 12.6656L7.67515 12.2968C7.6814 12.2937 7.68765 12.2906 7.69703 12.2906L8.36265 12.3312C9.17515 12.3781 9.93453 11.9375 10.3002 11.2125L10.6002 10.6156C10.6033 10.6093 10.6064 10.6062 10.6127 10.6031L11.9627 13.8062C12.0314 13.9718 12.0064 14.1625 11.897 14.3062C11.7877 14.45 11.6064 14.5218 11.4283 14.4937L9.67515 14.2343L8.6689 15.7718C8.5689 15.9281 8.39078 16.0125 8.2064 15.9968C8.02203 15.9812 7.86265 15.8625 7.79078 15.6937Z" fill="#CA8A04"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
</div>
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Left Column - Calendar */}
            <div className="xl:col-span-2">
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-[#111827]">Class Calendar</h3>
                  <div className="flex items-center space-x-2">
                    <button className="w-[26px] h-10 bg-[#F3F4F6] rounded-lg flex items-center justify-center">
                      <svg className="w-[10px] h-4" viewBox="0 0 11 16" fill="none">
                        <path d="M1.21582 7.29365C0.825195 7.68428 0.825195 8.31865 1.21582 8.70928L7.21582 14.7093C7.60645 15.0999 8.24082 15.0999 8.63145 14.7093C9.02207 14.3187 9.02207 13.6843 8.63145 13.2937L3.3377 7.9999L8.62832 2.70615C9.01895 2.31553 9.01895 1.68115 8.62832 1.29053C8.2377 0.899902 7.60332 0.899902 7.2127 1.29053L1.2127 7.29053L1.21582 7.29365Z" fill="#4B5563"/>
                      </svg>
                    </button>
                    <span className="text-lg text-[#111827] font-medium px-2">December 2024</span>
                    <button className="w-[26px] h-10 bg-[#F3F4F6] rounded-lg flex items-center justify-center">
                      <svg className="w-[10px] h-4" viewBox="0 0 10 16" fill="none">
                        <path d="M9.70615 7.29365C10.0968 7.68428 10.0968 8.31865 9.70615 8.70928L3.70615 14.7093C3.31553 15.0999 2.68115 15.0999 2.29053 14.7093C1.8999 14.3187 1.8999 13.6843 2.29053 13.2937L7.58428 7.9999L2.29365 2.70615C1.90303 2.31553 1.90303 1.68115 2.29365 1.29053C2.68428 0.899902 3.31865 0.899902 3.70928 1.29053L9.70928 7.29053L9.70615 7.29365Z" fill="#4B5563"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Calendar Days Header */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="h-9 flex items-center justify-center">
                      <span className="text-sm text-[#6B7280] font-medium">{day}</span>
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1">
                  {/* Previous month days */}
                  <div className="h-[104px] flex items-start justify-center pt-2">
                    <span className="text-sm text-[#9CA3AF]">1</span>
                  </div>
                  <div className="h-[104px] flex items-start justify-center pt-2">
                    <span className="text-sm text-[#9CA3AF]">2</span>
                  </div>

                  {/* Current month days */}
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                    let bgColor = '';
                    if ([3, 16].includes(day)) bgColor = 'bg-[#EFF6FF]';
                    else if ([5, 9, 19].includes(day)) bgColor = 'bg-[#F0FDF4]';
                    else if ([12, 23].includes(day)) bgColor = 'bg-[#FEF2F2]';
                    
                    return (
                      <div key={day} className={`h-[104px] flex items-start justify-center pt-2 ${bgColor} ${bgColor ? 'rounded-lg' : ''}`}>
                        <span className="text-sm text-[#111827]">{day}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Calendar Legend */}
                <div className="flex items-center space-x-4 mt-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-[#3B82F6] rounded-full"></div>
                    <span className="text-[#4B5563]">Upcoming</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-[#22C55E] rounded-full"></div>
                    <span className="text-[#4B5563]">Completed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-[#EF4444] rounded-full"></div>
                    <span className="text-[#4B5563]">Missed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - AI Insights & Schedule */}
            <div className="space-y-6">
              {/* AI Insights */}
              <div className="bg-gradient-to-r from-[#FFF4F0] to-[#E7FFFC] border border-[#FFDACC] rounded-xl p-6 shadow-[0_0_20px_rgba(102,126,234,0.3)]">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-[#FE6C34] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-4" viewBox="0 0 20 16" fill="none">
                      <path d="M10 0C10.5531 0 11 0.446875 11 1V3H14.75C15.9937 3 17 4.00625 17 5.25V13.75C17 14.9937 15.9937 16 14.75 16H5.25C4.00625 16 3 14.9937 3 13.75V5.25C3 4.00625 4.00625 3 5.25 3H9V1C9 0.446875 9.44687 0 10 0ZM6.5 12C6.225 12 6 12.225 6 12.5C6 12.775 6.225 13 6.5 13H7.5C7.775 13 8 12.775 8 12.5C8 12.225 7.775 12 7.5 12H6.5ZM9.5 12C9.225 12 9 12.225 9 12.5C9 12.775 9.225 13 9.5 13H10.5C10.775 13 11 12.775 11 12.5C11 12.225 10.775 12 10.5 12H9.5ZM12.5 12C12.225 12 12 12.225 12 12.5C12 12.775 12.225 13 12.5 13H13.5C13.775 13 14 12.775 14 12.5C14 12.225 13.775 12 13.5 12H12.5ZM8.25 8C8.25 7.66848 8.1183 7.35054 7.88388 7.11612C7.64946 6.8817 7.33152 6.75 7 6.75C6.66848 6.75 6.35054 6.8817 6.11612 7.11612C5.8817 7.35054 5.75 7.66848 5.75 8C5.75 8.33152 5.8817 8.64946 6.11612 8.88388C6.35054 9.1183 6.66848 9.25 7 9.25C7.33152 9.25 7.64946 9.1183 7.88388 8.88388C8.1183 8.64946 8.25 8.33152 8.25 8ZM13 9.25C13.3315 9.25 13.6495 9.1183 13.8839 8.88388C14.1183 8.64946 14.25 8.33152 14.25 8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75C12.6685 6.75 12.3505 6.8817 12.1161 7.11612C11.8817 7.35054 11.75 7.66848 11.75 8C11.75 8.33152 11.8817 8.64946 12.1161 8.88388C12.3505 9.1183 12.6685 9.25 13 9.25ZM1.5 7H2V13H1.5C0.671875 13 0 12.3281 0 11.5V8.5C0 7.67188 0.671875 7 1.5 7ZM18.5 7C19.3281 7 20 7.67188 20 8.5V11.5C20 12.3281 19.3281 13 18.5 13H18V7H18.5Z" fill="white"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#111827]">AI Insights</h3>
                </div>
                <div className="space-y-3 text-sm text-[#374151]">
                  <p>Your performance in Machine Learning has improved by 15% this week!</p>
                  <p>Consider reviewing Data Structures - your quiz scores suggest more practice needed.</p>
                  <p>Great consistency! You've maintained 4+ hours daily for 2 weeks.</p>
                </div>
              </div>

              {/* Today's Schedule */}
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
                <h3 className="text-lg font-semibold text-[#111827] mb-4">Today's Schedule</h3>
                <div className="space-y-3">
                  <div className="bg-[#EFF6FF] rounded-lg p-3 flex items-center space-x-3">
                    <div className="w-2 h-8 bg-[#3B82F6] rounded-full"></div>
                    <div>
                      <div className="font-medium text-[#111827]">Machine Learning</div>
                      <div className="text-sm text-[#4B5563]">10:00 AM - 11:30 AM</div>
                    </div>
                  </div>
                  <div className="bg-[#F0FDF4] rounded-lg p-3 flex items-center space-x-3">
                    <div className="w-2 h-8 bg-[#22C55E] rounded-full"></div>
                    <div>
                      <div className="font-medium text-[#111827]">React Development</div>
                      <div className="text-sm text-[#4B5563]">2:00 PM - 3:30 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Charts */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">
            {/* Learning Hours Chart */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-[#111827]">Learning Hours</h3>
                <div className="flex space-x-2">
                  <button className="px-4 py-1 bg-[#FA946D] text-white text-sm rounded-lg">Week</button>
                  <button className="px-4 py-1 bg-[#E5E7EB] text-[#374151] text-sm rounded-lg">Month</button>
                </div>
              </div>
              <div className="h-64 flex items-end justify-between space-x-2">
                {[9, 2, 3, 4, 1.5, 2, 6].map((height, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-[#FA946D] opacity-80 rounded-t" style={{ height: `${height * 20}px` }}></div>
                    <div className="text-xs text-gray-600 mt-2">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][index]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Distribution Chart */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
              <h3 className="text-lg font-semibold text-[#111827] mb-6">Course Distribution</h3>
              <div className="flex items-center justify-center h-64">
                <div className="relative">
                  {/* Simplified pie chart representation */}
                  <div className="w-40 h-40 rounded-full bg-gradient-to-r from-[#3CC3DF] to-[#FA946D] flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">15</div>
                      <div className="text-xs text-gray-600">Total course</div>
                    </div>
                  </div>
                </div>
                <div className="ml-8 space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#3CC3DF] rounded"></div>
                    <span className="text-gray-700">Code</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#FA946D] rounded"></div>
                    <span className="text-gray-700">Data</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#9333EA] rounded"></div>
                    <span className="text-gray-700">Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course Performance */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 mt-8">
            <h3 className="text-lg font-semibold text-[#111827] mb-6">Course Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Machine Learning */}
              <div className="bg-[#F9FAFB] rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-[#111827]">Machine Learning</span>
                  <span className="text-[#16A34A] text-sm font-medium">92%</span>
                </div>
                <div className="w-full bg-[#E5E7EB] rounded-full h-2 mb-3">
                  <div className="bg-[#16A34A] h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="text-[#4B5563]">Quiz Score: 89% | Hours: 24h</div>
                  <div className="text-[#2563EB]">AI Tip: Focus on neural networks</div>
                </div>
              </div>

              {/* React Development */}
              <div className="bg-[#F9FAFB] rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-[#111827]">React Development</span>
                  <span className="text-[#2563EB] text-sm font-medium">87%</span>
                </div>
                <div className="w-full bg-[#E5E7EB] rounded-full h-2 mb-3">
                  <div className="bg-[#2563EB] h-2 rounded-full" style={{ width: '87%' }}></div>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="text-[#4B5563]">Quiz Score: 85% | Hours: 18h</div>
                  <div className="text-[#2563EB]">AI Tip: Practice hooks more</div>
                </div>
              </div>

              {/* Data Structures */}
              <div className="bg-[#F9FAFB] rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-[#111827]">Data Structures</span>
                  <span className="text-[#6B7280] text-sm font-medium">--</span>
                </div>
                <div className="text-center text-[#6B7280] text-sm pt-8">
                  Not started
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Analytics
