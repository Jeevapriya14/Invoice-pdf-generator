import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../images/home.png';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state for form submission

  const navigate = useNavigate(); // Used for navigation after successful registration

  // Validate email format
  const validateEmail = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setError(''); // Clear previous errors
    setLoading(true); // Start loading when form is being submitted

    try {
      // API request to register the user
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorDetails = await response.json(); // Extract error details if available
        throw new Error(errorDetails.message || 'Registration failed');
      }

      // Redirect to Add Product page after successful registration
      navigate('/add-products');
    } catch (error: any) {
      console.error('Error during registration:', error); // Log error for debugging
      setError(error.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false); // Stop loading when request is done
    }
  };

  return (
    <div className="flex justify-left items-center min-h-screen bg-black bg-opacity-80">
      {/* Light black background for the whole page */}
      <div className="text-white p-8 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign up to begin journey</h2>
        <h5 className="text-1xxl font-small mb-1 text-left space-x-16">
          This is basic signup page which is used for levitation assignment purpose.
        </h5>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="input-group">
            <label htmlFor="name" className="block text-sm font-medium text-white">Enter your name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-black bg-opacity-10 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>

          <h6 className="text-gray-100 text-[12px] mt-10 font-small mb-0 text-left space-x-16">
            This name will be displayed with your inquiry
          </h6>

          <div className="input-group">
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-black bg-opacity-10 text-black mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <h6 className="text-[12px] mt-10 font-small mb-0 text-left space-x-16 text-gray-100">
            This email will be displayed with your inquiry
          </h6>

          <div className="input-group">
            <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter the Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-black bg-opacity-10 text-black mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <h6 className="text-gray-100 text-[12px] mt-10 font-small mb-0 text-left space-x-16">
            Any further updates will be forwarded on this Email ID
          </h6>

          {error && <div className="text-red-500 text-sm">{error}</div>}
          {loading && <div className="text-blue-500 text-sm">Processing...</div>}

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-black bg-opacity-80 text-lime-300 w-[80px] py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>

            <div className="ml-4">
              <p className="text-sm">
                Already have an account?{' '}
                <a href="/login" className="text-white hover:underline">Login here</a>
              </p>
            </div>
          </div>
        </form>
      </div>

      <div className="hidden md:block flex justify-left ml-20">
        <img
          src={img}
          alt="Cover"
          className="w-[830px] h-[733px] bg-cover bg-center rounded-tl-[60px] rounded-bl-[60px]"
        />
      </div>
    </div>
  );
};

export default Register;
