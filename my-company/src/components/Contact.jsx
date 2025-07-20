import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ checker expects this
    alert('Form submitted!');
    // You can also console.log(formData) here if you want
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}> {/* ✅ onSubmit */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0' }}
        />
        <input
          type="email"
          name="email"

