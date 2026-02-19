import React from "react";
import logoGoogle from "../../assets/images/google.jpg";
import logoApple from "../../assets/images/apple.png";
import { auth, googleProvider, signInWithPopup } from "../../firebase"; // Adjust path if needed
import { useAuth } from "../../context/AuthContext";

const SocialLogin = () => {
  const { login } = useAuth();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const idToken = await user.getIdToken();

      // Call backend to exchange Google token for your JWT
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/google-login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ idToken }),
        }
      );

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Google login failed");
      }

      // Use existing AuthContext login
      login(data, true);
    } catch (err) {  // ✅ FIXED: Removed TypeScript ": any"
      alert(err.message || "Google sign-in error");
    }
  };

  return (
    <div className="d-grid gap-2 mt-4">
      <button
        className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
        type="button"
        onClick={handleGoogleLogin}
      >
        <img
          src={logoGoogle}
          alt="Google"
          style={{ width: "20px", height: "20px" }}
          className="me-2"
        />
        <span>Sign in with Google</span>
      </button>

      <button
        className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
        type="button"
        disabled
      >
        <img
          src={logoApple}
          alt="Apple"
          style={{ width: "20px", height: "20px" }}
          className="me-2"
        />
        <span>Sign in with Apple</span>
      </button>
    </div>
  );
};

export default SocialLogin;
