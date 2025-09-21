import { useState } from "react";
import axios from "axios";

function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", form);
      setMsg(res.data.msg);
    } catch (err) {
      setMsg(err.response.data.msg || "Error");
    }
  };

  return (
    <div className="p-4">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} /><br/>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} /><br/>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br/>
        <button type="submit">Register</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}

export default Register;
