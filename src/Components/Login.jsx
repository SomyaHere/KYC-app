import React, { useState } from "react";

const Login = () => {
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile }),
      });

      const data = await response.json();
      setMessage(data.message || "OTP sent successfully!");
    } catch (error) {
      setMessage("Failed to send OTP.");
    }
  };

  return (
    <div className="container">
      <h1>KYC Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <button type="submit">Send OTP</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
