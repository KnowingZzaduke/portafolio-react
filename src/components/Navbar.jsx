import VideoLogo from "/video/logo-black.mp4";
import { FaHouseDamage } from "react-icons/fa";
import { FaDna } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <div className="content_navbar">
      <nav className="navbar">
        <div className="navbar_left">
          <video src={VideoLogo} autoPlay loop muted className="video_logo" />
        </div>
        <div className="navbar_right">
          <div className="content_enlaces">
            <ul>
              <li>
                <Link title="Home">
                  <FaHouseDamage />
                </Link>
              </li>
              <li>
                <Link title="Proyects">
                  <FaDna />
                </Link>
              </li>
              <li>
                <Link title="GitHub">
                  <FaGithub />
                </Link>
              </li>
              <li>
                <Link title="Linkedin">
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link title="Curriculum">
                  <FaFileAlt />
                </Link>
              </li>
              <li>
                <Link title="Night">
                  <FaMoon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
