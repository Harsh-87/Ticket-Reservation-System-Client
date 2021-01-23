import React from "react";

const InjectFooter = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} Bus Reservation System
    </footer>
  );
};

export default InjectFooter;
