import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-200">
      <div className="max-w-6xl mx-auto py-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-slate-700">
          © {new Date().getFullYear()} User Management System. All rights reserved.
        </p>
        <ul className="flex gap-6 mt-3 sm:mt-0">
          <li>
            <a
              href="https://www.example.com/terms"
              className="text-slate-700 hover:text-slate-900 text-sm transition duration-200"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="https://www.example.com/privacy"
              className="text-slate-700 hover:text-slate-900 text-sm transition duration-200"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="https://www.example.com/contact"
              className="text-slate-700 hover:text-slate-900 text-sm transition duration-200"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
