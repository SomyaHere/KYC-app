import React, { useState } from "react";
import axios from "axios";
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

    try {
      console.log("API Called");
      const response = await axios.post("http://localhost:8000/api/login", {
  mobile,
  relation,
});

      console.log("API Response:", response.data);
      setMessage(response.data.message);
    } catch (error) {
      console.error(error.response?.data || error.message);
      setMessage(error.response?.data?.message || "Server error. Please try again.");
    }
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
// import React, { useState } from "react";
// import axios from "axios";
// import "./Login.css";

// const selectOptions = [
//   "Self",
//   "Spouse",
//   "Child Dependent",
//   "Child Dependent 2",
//   "Parents Dependent",
//   "Parent Dependent 2",
// ];

// const Login = () => {
//   const [mobile, setMobile] = useState("");
//   const [relation, setRelation] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:5000/api/login", {
//         mobile,
//         relation,
//       });

//       setMessage(response.data.message);
//     } catch (error) {
//       setMessage("Server Error");
//     }
//   };

//   return (
//     <div>
//       <h2>KYC MOBILE APP</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter Your Number"
//           value={mobile}
//           onChange={(e) => setMobile(e.target.value)}
//           required
//         />

//         <select
//           value={relation}
//           onChange={(e) => setRelation(e.target.value)}
//           required
//         >
//           <option value="">Select Relation</option>
//           {selectOptions.map((option, i) => (
//             <option key={i} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>

//         <button type="submit">LOGIN</button>
//       </form>

//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default Login;
