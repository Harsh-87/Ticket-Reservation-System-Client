import React from "react";

const InjectFooter = () => {
  return (
    <footer className="bg-secondary text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} Movie Reservation System
    </footer>
  );
};

export default InjectFooter;
