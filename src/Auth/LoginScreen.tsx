import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginWithEmail } from "../service/auth";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState<string | null>(null);
  const [loading, setloading] = useState(false)

  const onLogin = async () => {
    setloading(true)
    setErr(null);
    try {
      await loginWithEmail(email, password);
      navigate("/dashboard");
    } catch (e: any) {
      setErr(e.message);
    } finally {
      setloading(false)
    }
  };



  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {err && <p className="text-red-600 text-sm">{err}</p>}
        <h1 className="text-2xl font-bold text-slate-800 text-center">Welcome back</h1>
        <form className="mt-6 space-y-4">
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
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
                onClick={onLogin}
              >
                Login
              </button>
          }
        </form>

        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">Create one</Link>
        </p>
      </div>
    </div>
  );
}
