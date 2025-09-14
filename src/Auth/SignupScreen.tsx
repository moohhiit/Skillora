
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { signupWithEmail } from "../service/auth";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState<string | null>(null);
  const [loading, setloading] = useState(false)


  const onSignup = async () => {
    setloading(true)
    setErr(null);
    try {
      console.log("Clicked")
      await signupWithEmail(email, password, name);
      navigate("/dashboard");
      console.log("Clicked After")
    } catch (e: any) {
      setErr(e.message);
    } finally {
      setloading(false)
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          <img src="./src/assets/logo.svg" className="mx-auto w-25 h-25 " ></img>
        <h1 className="text-2xl font-bold text-slate-800 text-center">Create account</h1>
        {err && <p className="text-red-600 text-sm">{err}</p>}
        <form className="mt-6 space-y-4">
          <input
            className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          {
            loading ?
              <div className="flex items-center justify-center ">
                <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
              </div> :
              <button
                type="button"
                onClick={onSignup}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition"
                style={{backgroundColor:'#00ADB5'}}
              >
                Sign Up
              </button>}
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}
