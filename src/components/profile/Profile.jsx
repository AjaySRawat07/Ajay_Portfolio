/* eslint-disable react/no-unescaped-entities */
import Resume from "../../assets/Ajay-resume.pdf"
import "./profile.css"
import ajayPhoto from "../../assets/Ajay.png"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const ProfileSection = () => {


  const handleContactClick = () => {
    window.location.href = './#contact';
  };

  const handleLinkedInClick = () => {
    window.location.href = 'https://www.linkedin.com/in/ajay-singh-rawat-736044253';
  };

  const handleGithubClick = () => {
    window.location.href = 'https://github.com/AjaySRawat07';
  };
  

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={ajayPhoto} alt="ajay profile picture" className='ajayPic'/>
      </div>
      <div className="section__text">
        <p className="section__text__p1 text-slate-500 text-4xl">Hello, I'm</p>
        <h1 className="title text-white text-6xl">Ajay Singh Rawat</h1>
        <p className="section__text__p2 text-slate-500 text-4xl">Frontend Developer</p>
        <div className="btn-container">
          <a className="btn btn-color-2 text-white pt-2" download={Resume} >
            Download CV
          </a>
          <button className="btn btn-color-1 pt-2" onClick={handleContactClick}>
            <a href="#footer">Contact Info</a>
          </button>
        </div>
        <div id="socials-container">
        <FaLinkedin onClick={handleLinkedInClick} className='text-white object-cover w-16 h-10'/>
        <FaGithub onClick={handleGithubClick} className='text-white object-cover w-16 h-10'/>
      
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
