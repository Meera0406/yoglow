import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/contact', formData);
    alert('Submitted!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Edify Learning</h1>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded shadow-lg">
        <input className="w-full p-2 mb-4 border" placeholder="Name" onChange={e => setFormData({ ...formData, name: e.target.value })} />
        <input className="w-full p-2 mb-4 border" placeholder="Email" type="email" onChange={e => setFormData({ ...formData, email: e.target.value })} />
        <textarea className="w-full p-2 mb-4 border" placeholder="Message" onChange={e => setFormData({ ...formData, message: e.target.value })}></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
