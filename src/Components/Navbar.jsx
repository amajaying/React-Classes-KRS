import React from "react";
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <div className="flex justify-between py-3 px-24 items-center w-full fixed bg-white shadow">
        <div>
            <img src="https://krs.kiit.ac.in/assets/KRS.b5e08628.png" alt="krs-logo" className="w-auto max-h-12"/>
        </div>
      <nav className="flex gap-8 text-sm">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <a href="#contact">Contact Us</a>
      </nav>
      <div className="flex gap-2 text-sm">
        <button className="bg-blue-500 text-white px-8 py-1.5 rounded-sm hover:bg-blue-600">
            <Link to="/login">Login</Link>
        </button>
        <button className="px-6 py-0.5 rounded-sm border border-gray-500">
          <Link to="/register">Register</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;