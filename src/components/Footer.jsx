import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="flex justify-between items-center shadow-md bg-white dark:bg-gray-900 py-4 px-2">
        <p className="font-medium text-sm text-link dark:text-white">
          Copyright © 2024 - Developed by
          <span className="font-bold text-primary"> Anugrah Prastyo</span>. All
          rights reserved.
        </p>
        <p className="font-medium text-sm text-link dark:text-white">
          <span className="font-bold">Version</span> 1.1.0
        </p>
      </footer>
    </>
  );
};
