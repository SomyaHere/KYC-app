import React, { useState } from "react";
import "./Login.css";

const selectOptions = [
  "Self",
  "Spouse",
  "Child Dependent",
  "Child Dependent 2",
  "Parents Dependent",
  "Parent Dependent 2",
];

const Login = () => {
  const [mobile, setMobile] = useState("");
  const [relation, setRelation] = useState("");
  const [message, setMessage] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();

  // try {
    console.log("API Called")
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mobile, relation }),
    });
    console.log("API Called")

    const data = await response.json();
    setMessage(data.message || "Login successful!");
  // } catch (error) {
  //   setMessage("Server error. Please try again.");
  // }
};


  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="title">KYC MOBILE APP</h2>
        <p className="subtitle">KYC mobile allows users to certify</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />

          <select
            value={relation}
            onChange={(e) => setRelation(e.target.value)}
            required
          >
            <option value="">Select Relation</option>
            {selectOptions.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button type="submit">LOGIN</button>
        </form>

        {message && <p className="message">{message}</p>}

        <p className="footer-text">
          Don’t have an account? <span>Create Now</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
