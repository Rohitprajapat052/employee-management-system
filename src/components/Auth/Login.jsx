import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-900">
      <div className="border-2 border-cyan-500 p-10 rounded-xl   bg-gray-800">
        <form onSubmit={(e) => submitHandler(e)} className="flex flex-col items-center justify-center space-y-6">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-80 text-white outline-none bg-transparent border-2 border-cyan-500 rounded-full py-3 px-5 placeholder:text-gray-400   "
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-80 text-white outline-none bg-transparent border-2 border-cyan-500 rounded-full py-3 px-5 placeholder:text-gray-400 "
            type="password"
            placeholder="Enter Your Password"
          />
          <button
            className="w-80 text-gray-900 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-600 hover:to-cyan-500 rounded-full py-3 px-5 mt-3  "
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
