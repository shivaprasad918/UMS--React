import React from "react";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="bg-gray-950 p-5 mx-auto text-center flex items-center justify-center min-h-screen">
        <div className="transform -translate-y-20">
          <h1 className="text-4xl text-white font-bold">
            Welcome to User Management System
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Easily manage users, track their information, and maintain records
            with our system.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
