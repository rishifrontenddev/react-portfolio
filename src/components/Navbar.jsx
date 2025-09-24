import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="mx-2 w-10">Rishi.dev</h1>
      </div>
      <div className="flex m-8 items-center justify-center gap-4  text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaTwitterSquare />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
