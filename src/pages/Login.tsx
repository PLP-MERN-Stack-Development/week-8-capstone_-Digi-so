// src/pages/Login.tsx
import { useState } from 'react';
import { loginUser } from '../api/auth';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData);
      console.log('Logged in:', res.data);
      // Save token or redirect
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mt-10">
      <input name="email" onChange={handleChange} placeholder="Email" className="input" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" className="input" />
      <button type="submit" className="btn">Login</button>
    </form>
  );
};

export default Login;
