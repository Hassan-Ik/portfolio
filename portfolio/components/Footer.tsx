import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/hassanikram08/" // Replace with your Instagram link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition duration-300"
          >
            <FaInstagram size={30} />
          </a>

          {/* GitHub Link */}
          <a
            href="http://github.com/Hassan-Ik" // Replace with your GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500 transition duration-300"
          >
            <FaGithub size={30} />
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/hassan-ikram-1a33ab1b3/" // Replace with your LinkedIn link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
        
        <p className="text-sm text-gray-400">
          &copy; 2025 Hassan Ikram. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;