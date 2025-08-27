import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../service/Firebase";
import { loginWithEmail } from "../service/auth";

export default function Login() {
  const navigate = useNavigate();
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [form, setForm] = useState({ email: "", password: "" });
   const [err, setErr] = useState<string | null>(null);


   const onLogin = async () => {
    setErr(null);
    try {
      await loginWithEmail(email, password);
      navigate("/dashboard");
    } catch (e: any) {
      setErr(e.message);
    }
  };

  

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-bold text-slate-800 text-center">Welcome back</h1>
        <form onSubmit={onLogin} className="mt-6 space-y-4">
          <input
            type="email"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">Create one</Link>
        </p>
      </div>
    </div>
  );
}
