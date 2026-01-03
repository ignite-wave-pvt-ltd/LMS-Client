import { useState } from "react";
import { Brain, AlertCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import useAuth from "../../hooks/useAuth";

export default function Login() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const handleSuccess = (credentialResponse: any) => {
    setError("");
    setLoading(true);
    try {
      const token = credentialResponse?.credential;

      if (!token) throw new Error("No credential returned from Google");

      // Use centralized auth login which decodes and stores token
      login(token);

      // Navigate to intended page if any, else /home
      const from = (location.state as any)?.from?.pathname || "/home";
      navigate(from, { replace: true });
    } catch (err: any) {
      setError(err?.message || "Failed to sign in with Google");
    } finally {
      setLoading(false);
    }
  };

  const handleError = () => {
    setError("Google sign-in was cancelled or failed");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-indigo-600 to-purple-600 rounded-2xl mb-4">
            <Brain className="w-9 h-9 text-white" />
          </div>
          <h1 className="text-3xl text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">
            Sign in with your Google account to continue
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          {/* Error Message */}
          {error && (
            <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg mb-4">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          {/* Google Button */}
          <div className="flex flex-col items-center gap-4">
            <GoogleLogin onSuccess={handleSuccess} onError={handleError} />

            <div className="text-xs text-gray-500">
              Don't have a GenAI account? We'll create one using your Google
              email.
            </div>

            {loading && (
              <div className="text-sm text-gray-600">Signing in...</div>
            )}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          © 2025 GenAI Academy. All rights reserved.
        </p>
      </div>
    </div>
  );
}
