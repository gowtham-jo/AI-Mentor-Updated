import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full min-h-screen bg-login-dark overflow-hidden relative">
      {/* Desktop Layout - Hidden on mobile/tablet */}
      <div className="hidden xl:block">
        {/* Logo */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/d6ea2c5fb6a69fed41f417eefc841b47975430bb?width=568"
          alt="Logo"
          className="absolute left-[38px] top-[28px] w-[284px] h-[70px]"
        />

        {/* Background decorative image */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/5615f379868151923c16a3a779e3fab3707033e4?width=1574"
          alt="Background decoration"
          className="absolute left-[-46px] top-[469px] w-[787px] h-[517px]"
        />

        {/* Left side content */}
        <div className="absolute left-[38px] top-[165px] w-[900px] h-[312px] flex flex-col gap-[-17px]">
          <div className="flex flex-col gap-[-53px] w-[837px]">
            {/* AI Learning with gradient */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/88765f4a24da3678859b4a3c918f3404f0d372e4?width=1674"
              alt="AI Learning"
              className="h-[149px] w-full object-cover"
            />
            
            {/* Platform text */}
            <div className="text-white font-inter text-[96px] font-bold leading-normal tracking-[0.96px] h-[134px]">
              Platform
            </div>
          </div>

          {/* Description */}
          <div className="text-login-muted font-inter text-[26px] font-medium leading-normal tracking-[0.26px] h-[99px] w-full">
            Unlock the future of education with AI-powered courses<br />
            designed to accelerate your learning journey
          </div>
        </div>

        {/* Signup card */}
        <div className="absolute left-[811px] top-[117px] w-[578px] h-[829px] rounded-[20px] border border-white/20 bg-login-dark shadow-[4px_4px_38.7px_-4px_rgba(110,110,110,0.30)]">
        
          {/* Welcome header */}
          <div className="absolute left-[37px] top-[36px] w-[504px] h-[107px] flex flex-col gap-[12px]">
            <div className="text-white font-inter text-[40px] font-bold leading-[42px] w-full">
              Join Us Today!
            </div>
            <div className="text-login-muted font-inter text-[20px] font-medium leading-[28px] h-[53px] flex flex-col justify-end w-full">
              Create your account for an enhanced experience at your fingertips.
            </div>
          </div>

          {/* Form container */}
          <div className="absolute left-[37px] top-[164px] w-[504px] h-[412px] flex flex-col gap-[32px]">
            
            {/* Email input */}
            <div className="flex flex-col gap-[12px] w-full min-h-[58px]">
              <label className="text-white font-inter text-[18px] font-medium leading-[28px] h-[30px] flex flex-col justify-end">
                Email Address
              </label>
              <div className="h-[58px] px-[16px] flex items-center gap-[12px] rounded-[12px] border border-login-border bg-login-input">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email here"
                  className="flex-1 text-login-muted font-inter text-[18px] font-medium leading-[28px] bg-transparent border-none outline-none placeholder:text-login-muted"
                />
              </div>
            </div>

            {/* Username input */}
            <div className="flex flex-col gap-[12px] w-full min-h-[58px]">
              <label className="text-white font-inter text-[18px] font-medium leading-[28px] h-[30px] flex flex-col justify-end">
                Choose a Username
              </label>
              <div className="h-[58px] px-[16px] flex items-center gap-[12px] rounded-[12px] border border-login-border bg-login-input">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username here"
                  className="flex-1 text-login-muted font-inter text-[18px] font-medium leading-[28px] bg-transparent border-none outline-none placeholder:text-login-muted"
                />
              </div>
            </div>

            {/* Password input */}
            <div className="flex flex-col gap-[12px] w-full">
              <label className="text-white font-inter text-[18px] font-medium leading-[28px] h-[30px] flex flex-col justify-end">
                Create a Password
              </label>
              <div className="h-[58px] px-[16px] flex items-center gap-[12px] rounded-[12px] border border-login-border bg-login-input relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  className="flex-1 text-white font-inter text-[18px] font-medium leading-[28px] bg-transparent border-none outline-none placeholder:text-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="w-[25px] h-[25px] flex items-center justify-center"
                >
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <g clipPath="url(#clip0_1_1275)">
                      <rect width="25" height="25" fill="#171A21"/>
                      <path d="M18.6876 18.6875C16.9069 20.0448 14.7387 20.7968 12.5001 20.8334C5.20842 20.8334 1.04175 12.5 1.04175 12.5C2.33747 10.0853 4.1346 7.97565 6.31258 6.31252M10.3126 4.41669C11.0296 4.24885 11.7637 4.16496 12.5001 4.16669C19.7917 4.16669 23.9584 12.5 23.9584 12.5C23.3261 13.6829 22.572 14.7966 21.7084 15.8229M14.7084 14.7084C14.4223 15.0154 14.0773 15.2616 13.694 15.4324C13.3107 15.6032 12.8969 15.6951 12.4773 15.7025C12.0577 15.7099 11.6409 15.6327 11.2518 15.4755C10.8626 15.3184 10.5092 15.0844 10.2124 14.7877C9.91568 14.4909 9.68174 14.1375 9.52457 13.7483C9.3674 13.3592 9.29021 12.9424 9.29762 12.5228C9.30502 12.1032 9.39686 11.6894 9.56766 11.3061C9.73846 10.9228 9.98472 10.5778 10.2917 10.2917M1.04175 1.04169L23.9584 23.9584" stroke="#757575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_1275">
                        <rect width="25" height="25" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
              
              {/* Password requirements */}
              <div className="flex items-center gap-[8px] pt-[8px]">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.16667 9.33333C8.16667 6.11067 10.7773 3.5 14 3.5C17.2227 3.5 19.8333 6.11067 19.8333 9.33333V10.5H22.1667C23.9167 10.5 24.5 11.34 24.5 12.3667V23.45C24.5 24.7387 23.4553 25.7833 22.1667 25.7833H5.83333C4.54467 25.7833 3.5 24.7387 3.5 23.45V12.3667C3.5 11.34 4.08333 10.5 5.65833 10.5H8.16667V9.33333ZM17.5 9.33333V10.5H10.5V9.33333C10.5 7.39933 12.066 5.83333 14 5.83333C15.934 5.83333 17.5 7.39933 17.5 9.33333ZM14 14C12.7113 14 11.6014 15.0463 11.6667 16.3333C11.7099 17.1848 12.1436 17.8508 12.8333 18.1785V19.8333C12.8333 20.3166 13.0401 21.5833 14 21.5833C14.9599 21.5833 15.1667 20.3166 15.1667 19.8333V18.1785C15.8564 17.8508 16.2901 17.1848 16.3333 16.3333C16.3986 15.0463 15.2887 14 14 14Z" fill="white"/>
                </svg>
                <span className="text-white font-inter text-[18px] font-medium leading-[28px]">
                  Minimum 8 characters required
                </span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="absolute left-[21px] top-[599px] w-[536px] h-[164px] flex flex-col gap-[16px]">
            
            {/* Signup button */}
            <button className="h-[44px] px-[16px] flex items-center justify-center gap-[12px] rounded-[12px] border border-login-green bg-gradient-to-r from-login-green to-green-400">
              <span className="text-white text-center font-inter text-[18px] font-bold leading-[28px]">
                Sign Up
              </span>
            </button>

            {/* Google sign in */}
            <button className="h-[44px] px-[16px] flex items-center justify-center gap-[12px] rounded-[12px] border border-login-border bg-white">
              <img
                src="/AI_Tutor_New_UI/Signup_login_page/google_icon.svg"
                alt="Google"
                className="w-[24px] h-[24px]"
              />
              <span className="text-black text-center font-inter text-[18px] font-bold leading-[28px]">
                Sign in with Google
              </span>
            </button>

            {/* Apple sign in */}
            <button className="h-[44px] px-[16px] flex items-center justify-center gap-[16px] rounded-[12px] border border-login-border bg-white">
              <img
                src="/AI_Tutor_New_UI/Signup_login_page/apple_icon.svg"
                alt="Apple"
                className="w-[24px] h-[24px]"
              />
              <span className="text-black text-center font-inter text-[18px] font-bold leading-[28px]">
                Sign in with Apple
              </span>
            </button>

            {/* Login link */}
            <div className="flex justify-center items-center w-full h-[38px]">
              <span className="text-white font-inter text-[18px] font-medium leading-[28px] text-center">
                Already have an account?{" "}
                <button 
                  onClick={() => window.location.href = '/'}
                  className="text-login-orange hover:underline"
                >
                  Log In!
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout - Hidden on desktop */}
      <div className="xl:hidden flex flex-col min-h-screen p-6">
        {/* Logo */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/d6ea2c5fb6a69fed41f417eefc841b47975430bb?width=568"
          alt="Logo"
          className="w-48 h-auto mb-8"
        />

        {/* Mobile content */}
        <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
          {/* AI Learning Platform text */}
          <div className="mb-8 text-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/88765f4a24da3678859b4a3c918f3404f0d372e4?width=1674"
              alt="AI Learning"
              className="w-full h-16 object-contain mb-2"
            />
            <div className="text-white font-inter text-4xl md:text-5xl font-bold mb-4">
              Platform
            </div>
            <div className="text-login-muted font-inter text-lg leading-relaxed">
              Unlock the future of education with AI-powered courses designed to accelerate your learning journey
            </div>
          </div>

          {/* Signup form */}
          <div className="bg-login-dark border border-white/20 rounded-xl p-6 shadow-lg">
            {/* Welcome header */}
            <div className="text-center mb-6">
              <h1 className="text-white font-inter text-2xl md:text-3xl font-bold mb-2">
                Join Us Today!
              </h1>
              <p className="text-login-muted font-inter text-base">
                Create your account for an enhanced experience at your fingertips.
              </p>
            </div>

            {/* Form */}
            <div className="space-y-4">
              {/* Email input */}
              <div>
                <label className="block text-white font-inter text-base font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email here"
                  className="w-full h-12 px-4 rounded-lg border border-login-border bg-login-input text-white font-inter text-base placeholder:text-login-muted outline-none focus:border-login-green"
                />
              </div>

              {/* Username input */}
              <div>
                <label className="block text-white font-inter text-base font-medium mb-2">
                  Choose a Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username here"
                  className="w-full h-12 px-4 rounded-lg border border-login-border bg-login-input text-white font-inter text-base placeholder:text-login-muted outline-none focus:border-login-green"
                />
              </div>

              {/* Password input */}
              <div>
                <label className="block text-white font-inter text-base font-medium mb-2">
                  Create a Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••"
                    className="w-full h-12 px-4 pr-12 rounded-lg border border-login-border bg-login-input text-white font-inter text-base placeholder:text-white outline-none focus:border-login-green"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
                  >
                    <svg width="20" height="20" viewBox="0 0 25 25" fill="none">
                      <g clipPath="url(#clip0_1_1275)">
                        <path d="M18.6876 18.6875C16.9069 20.0448 14.7387 20.7968 12.5001 20.8334C5.20842 20.8334 1.04175 12.5 1.04175 12.5C2.33747 10.0853 4.1346 7.97565 6.31258 6.31252M10.3126 4.41669C11.0296 4.24885 11.7637 4.16496 12.5001 4.16669C19.7917 4.16669 23.9584 12.5 23.9584 12.5C23.3261 13.6829 22.572 14.7966 21.7084 15.8229M14.7084 14.7084C14.4223 15.0154 14.0773 15.2616 13.694 15.4324C13.3107 15.6032 12.8969 15.6951 12.4773 15.7025C12.0577 15.7099 11.6409 15.6327 11.2518 15.4755C10.8626 15.3184 10.5092 15.0844 10.2124 14.7877C9.91568 14.4909 9.68174 14.1375 9.52457 13.7483C9.3674 13.3592 9.29021 12.9424 9.29762 12.5228C9.30502 12.1032 9.39686 11.6894 9.56766 11.3061C9.73846 10.9228 9.98472 10.5778 10.2917 10.2917M1.04175 1.04169L23.9584 23.9584" stroke="#757575" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                    </svg>
                  </button>
                </div>
                
                {/* Password requirements */}
                <div className="flex items-center gap-2 mt-2 text-sm">
                  <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.16667 9.33333C8.16667 6.11067 10.7773 3.5 14 3.5C17.2227 3.5 19.8333 6.11067 19.8333 9.33333V10.5H22.1667C23.9167 10.5 24.5 11.34 24.5 12.3667V23.45C24.5 24.7387 23.4553 25.7833 22.1667 25.7833H5.83333C4.54467 25.7833 3.5 24.7387 3.5 23.45V12.3667C3.5 11.34 4.08333 10.5 5.65833 10.5H8.16667V9.33333ZM17.5 9.33333V10.5H10.5V9.33333C10.5 7.39933 12.066 5.83333 14 5.83333C15.934 5.83333 17.5 7.39933 17.5 9.33333ZM14 14C12.7113 14 11.6014 15.0463 11.6667 16.3333C11.7099 17.1848 12.1436 17.8508 12.8333 18.1785V19.8333C12.8333 20.3166 13.0401 21.5833 14 21.5833C14.9599 21.5833 15.1667 20.3166 15.1667 19.8333V18.1785C15.8564 17.8508 16.2901 17.1848 16.3333 16.3333C16.3986 15.0463 15.2887 14 14 14Z" fill="white"/>
                  </svg>
                  <span className="text-white font-inter">Minimum 8 characters required</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="space-y-3 pt-4">
                <button className="w-full h-11 rounded-lg border border-login-green bg-gradient-to-r from-login-green to-green-400 text-white font-inter font-bold">
                  Sign Up
                </button>
                
                <button className="w-full h-11 rounded-lg border border-login-border bg-white text-black font-inter font-bold flex items-center justify-center gap-3">
                  <img src="/AI_Tutor_New_UI/Signup_login_page/google_icon.svg" alt="Google" className="w-5 h-5" />
                  Sign in with Google
                </button>
                
                <button className="w-full h-11 rounded-lg border border-login-border bg-white text-black font-inter font-bold flex items-center justify-center gap-3">
                  <img src="/AI_Tutor_New_UI/Signup_login_page/apple_icon.svg" alt="Apple" className="w-5 h-5" />
                  Sign in with Apple
                </button>
                
                <div className="text-center pt-2">
                  <span className="text-white font-inter">
                    Already have an account?{" "}
                    <button 
                      onClick={() => window.location.href = '/'}
                      className="text-login-orange hover:underline"
                    >
                      Log In!
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
