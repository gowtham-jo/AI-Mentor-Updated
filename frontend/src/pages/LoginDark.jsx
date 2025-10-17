import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
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

        {/* Login card */}
        <div className="absolute left-[811px] top-[165px] w-[578px] h-[718px] rounded-[20px] border border-white/20 bg-login-dark shadow-[4px_4px_38.7px_-4px_rgba(110,110,110,0.30)]">
        
          {/* Welcome header */}
          <div className="absolute left-[119px] top-[34px] w-[344px] h-[81px] flex flex-col justify-center items-center gap-[-6px]">
            <div className="text-white text-center font-lato text-[40px] font-black leading-normal tracking-[0.4px] h-[51px] w-full">
              Welcome Back
            </div>
            <div className="text-login-muted text-center font-inter text-[20px] font-medium leading-normal tracking-[0.2px] w-[314px]">
              Access your AI learning Journey
            </div>
          </div>

          {/* Form container */}
          <div className="absolute left-[21px] top-[136px] w-[536px] h-[280px] flex flex-col gap-[24px]">
            
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
                  placeholder="Enter your email address here"
                  className="flex-1 text-login-muted font-inter text-[18px] font-medium leading-[28px] bg-transparent border-none outline-none placeholder:text-login-muted"
                />
              </div>
            </div>

            {/* Password input */}
            <div className="flex flex-col gap-[12px] w-full min-h-[58px]">
              <label className="text-white font-inter text-[18px] font-medium leading-[28px] h-[30px] flex flex-col justify-end">
                Password
              </label>
              <div className="h-[58px] px-[16px] flex items-center gap-[12px] rounded-[12px] border border-login-border bg-login-input">
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
                  <svg width="25" height="26" viewBox="0 0 25 26" fill="none">
                    <g clipPath="url(#clip0_1_1188)">
                      <rect width="25" height="25" transform="translate(0 0.5)" fill="#171A21"/>
                      <path d="M18.6873 19.1875C16.9067 20.5448 14.7385 21.2967 12.4998 21.3333C5.20817 21.3333 1.0415 13 1.0415 13C2.33722 10.5853 4.13435 8.47562 6.31234 6.81249M10.3123 4.91666C11.0294 4.74882 11.7634 4.66493 12.4998 4.66666C19.7915 4.66666 23.9582 13 23.9582 13C23.3259 14.1829 22.5718 15.2966 21.7082 16.3229M14.7082 15.2083C14.4221 15.5154 14.0771 15.7616 13.6937 15.9324C13.3104 16.1032 12.8966 16.1951 12.477 16.2025C12.0574 16.2099 11.6406 16.1327 11.2515 15.9755C10.8624 15.8183 10.5089 15.5844 10.2122 15.2877C9.91543 14.9909 9.6815 14.6374 9.52433 14.2483C9.36716 13.8592 9.28997 13.4424 9.29737 13.0228C9.30478 12.6032 9.39662 12.1894 9.56742 11.8061C9.73822 11.4228 9.98448 11.0777 10.2915 10.7917M1.0415 1.54166L23.9582 24.4583" stroke="#757575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                  </svg>
                </button>
              </div>
            </div>

            {/* Remember me and forgot password */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-[16px] h-[32px]">
                <button
                  type="button"
                  onClick={() => setRememberMe(!rememberMe)}
                  className="w-[32px] h-[32px] rounded-[12px] bg-login-green flex items-center justify-center"
                >
                  {rememberMe && (
                    <svg width="20" height="17" viewBox="0 0 20 17" fill="none">
                      <g clipPath="url(#clip0_1_1197)">
                        <g filter="url(#filter0_d_1_1197)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M16.7313 0.613279C17.424 -0.147216 18.6096 -0.208866 19.3793 0.47558C20.149 1.16002 20.2114 2.33138 19.5187 3.09188L8.26867 15.4423C7.55003 16.2312 6.30878 16.2634 5.54917 15.513L0.549174 10.5728C-0.183058 9.84933 -0.183058 8.67634 0.549174 7.95286C1.28141 7.22939 2.46859 7.22939 3.20082 7.95286L6.80338 11.5123L16.7313 0.613279Z" fill="white"/>
                        </g>
                      </g>
                      <defs>
                        <filter id="filter0_d_1_1197" x="0" y="0" width="20" height="16.8055" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dy="0.75"/>
                          <feComposite in2="hardAlpha" operator="out"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1197"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1197" result="shape"/>
                        </filter>
                        <clipPath id="clip0_1_1197">
                          <rect width="20" height="17" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                </button>
                <span className="text-white font-inter text-[18px] font-medium leading-[28px]">
                  Keep me logged in
                </span>
              </div>
              <button className="text-white font-inter text-[16px] font-medium leading-[24px]">
                Forgot Password?
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="absolute left-[21px] top-[467px] w-[536px] h-[164px] flex flex-col gap-[16px]">
            
            {/* Login button */}
            <button className="h-[44px] px-[16px] flex items-center justify-center gap-[12px] rounded-[12px] border border-login-green bg-gradient-to-r from-login-green to-green-400">
              <span className="text-white text-center font-inter text-[18px] font-bold leading-[28px]">
                Log In
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

            {/* Sign up link */}
            <div className="flex justify-center items-center w-full h-[38px]">
              <span className="text-white font-inter text-[18px] font-medium leading-[28px] text-center">
                Don't have an account?{" "}
                <button
                  onClick={() => navigate('/signup')}
                  className="text-login-orange hover:underline"
                >
                  Sign Up!
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

          {/* Login form */}
          <div className="bg-login-dark border border-white/20 rounded-xl p-6 shadow-lg">
            {/* Welcome header */}
            <div className="text-center mb-6">
              <h1 className="text-white font-lato text-2xl md:text-3xl font-black mb-2">
                Welcome Back
              </h1>
              <p className="text-login-muted font-inter text-base">
                Access your AI learning Journey
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
                  placeholder="Enter your email address here"
                  className="w-full h-12 px-4 rounded-lg border border-login-border bg-login-input text-white font-inter text-base placeholder:text-login-muted outline-none focus:border-login-green"
                />
              </div>

              {/* Password input */}
              <div>
                <label className="block text-white font-inter text-base font-medium mb-2">
                  Password
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
                    <svg width="20" height="20" viewBox="0 0 25 26" fill="none">
                      <g clipPath="url(#clip0_1_1188)">
                        <path d="M18.6873 19.1875C16.9067 20.5448 14.7385 21.2967 12.4998 21.3333C5.20817 21.3333 1.0415 13 1.0415 13C2.33722 10.5853 4.13435 8.47562 6.31234 6.81249M10.3123 4.91666C11.0294 4.74882 11.7634 4.66493 12.4998 4.66666C19.7915 4.66666 23.9582 13 23.9582 13C23.3259 14.1829 22.5718 15.2966 21.7082 16.3229M14.7082 15.2083C14.4221 15.5154 14.0771 15.7616 13.6937 15.9324C13.3104 16.1032 12.8966 16.1951 12.477 16.2025C12.0574 16.2099 11.6406 16.1327 11.2515 15.9755C10.8624 15.8183 10.5089 15.5844 10.2122 15.2877C9.91543 14.9909 9.6815 14.6374 9.52433 14.2483C9.36716 13.8592 9.28997 13.4424 9.29737 13.0228C9.30478 12.6032 9.39662 12.1894 9.56742 11.8061C9.73822 11.4228 9.98448 11.0777 10.2915 10.7917M1.0415 1.54166L23.9582 24.4583" stroke="#757575" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Remember me and forgot password */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setRememberMe(!rememberMe)}
                    className="w-6 h-6 rounded-lg bg-login-green flex items-center justify-center"
                  >
                    {rememberMe && (
                      <svg width="14" height="12" viewBox="0 0 20 17" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.7313 0.613279C17.424 -0.147216 18.6096 -0.208866 19.3793 0.47558C20.149 1.16002 20.2114 2.33138 19.5187 3.09188L8.26867 15.4423C7.55003 16.2312 6.30878 16.2634 5.54917 15.513L0.549174 10.5728C-0.183058 9.84933 -0.183058 8.67634 0.549174 7.95286C1.28141 7.22939 2.46859 7.22939 3.20082 7.95286L6.80338 11.5123L16.7313 0.613279Z" fill="white"/>
                      </svg>
                    )}
                  </button>
                  <span className="text-white font-inter">Keep me logged in</span>
                </div>
                <button className="text-white font-inter">Forgot Password?</button>
              </div>

              {/* Action buttons */}
              <div className="space-y-3 pt-4">
                <button className="w-full h-11 rounded-lg border border-login-green bg-gradient-to-r from-login-green to-green-400 text-white font-inter font-bold">
                  Log In
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
                    Don't have an account?{" "}
                    <button
                      onClick={() => navigate('/signup')}
                      className="text-login-orange hover:underline"
                    >
                      Sign Up!
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
