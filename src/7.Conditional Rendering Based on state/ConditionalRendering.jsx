import React, { useState } from 'react';

const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);

  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="flex flex-col items-center p-4">
      {isLoggedIn ? (
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
          <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded">
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="px-4 py-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="px-4 py-2 border rounded"
            />
            <button
              type="button"
              onClick={handleLogin}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ConditionalRendering;
