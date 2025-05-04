import React, { useState } from "react";
//logout 
const Logout = ({ setUser }) => {
  const handleLogout = async () => {
    try {
      const response = await fetch("https://booktopia-app-e99a.onrender.com/logout", {
        method: "POST",
        credentials: "include", // cookies will be sent
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Logout successful:", data);
        setUser(null); // clear session
      } else {
        console.error(data.error || "Error logging out");
      }
    } catch (err) {
      console.error("Error during logout:", err);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
    >
      Log Out
    </button>
  );
};

//Login 
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);


  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      console.error("Both email and password are required!");
      return;
    }

    try {
      const response = await fetch("https://booktopia-app-e99a.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        // Saving user in state 
        setUser(data);  // sample: setUser({email: data.email, userId: data.user_id})
      } else {
        console.error(data.error || "Invalid credentials");
      }
    } catch (err) {
      console.error("Error during login:", err);
    }
  };


return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      {user ? (
        <div>
          <div>Welcome, {user.email}</div>
          <Logout setUser={setUser} /> {/* buttn logout */}
        </div>
      ) : (
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Log In
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
