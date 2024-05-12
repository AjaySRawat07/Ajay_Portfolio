import Zee5 from "../../assets/Zee-5.png"
import Trello from "../../assets/TrelloClone.png";
import Swiggy from "../../assets/Swiggy-clone.png";
import Foody from "../../assets/Food-App.png";
import { ProjectCard } from "./ProjectCard";


export function Projects() {
  const cards = [
    {
      id: 1,
      title: "Zee 5 Clone",
      thumbnail: Zee5,
      Demolink: "https://pransh013.github.io/Zee-5/src/Pransh-HomePage/index.html",
      Githublink: "https://github.com/AjaySRawat07/Zee-5?tab=readme-ov-file",
    },
    {
      id: 2,
      title: "Trello Clone",
      thumbnail: Trello,
      Githublink: "https://github.com/AjaySRawat07/trello-clone",
      Demolink: "https://ajaysrawat07.github.io/trello-clone/",
    },
    {
      id: 3,
      title: "Swiggy-Clone",
      thumbnail: Swiggy,
      Githublink: "https://github.com/AjaySRawat07/swiggy-medium-clone",
      Demolink: "https://swiggy-clone-alpha-pied.vercel.app/",
    },
    {
      id: 4,
      title: "Food App",
      thumbnail: Foody,
      Githublink: "https://github.com/AjaySRawat07/Food-App",
      Demolink: "https://hungrybear-ten.vercel.app/",
    },
  ];

  const openSnitchGithub = (link) => {
    window.open(link, "_blank");
  };

  const openSnitch = (link) => {
    window.open(link, "_blank");
  };



  return (
    <div
      className="py-10 w-full cursor-pointer z-100 bg-black"
    >
        <h1 className="text-white text-[4rem] text-center">Projects</h1>

      <ProjectCard
        projects={cards}
        openGithub={openSnitchGithub}
        openLive={openSnitch}
      />
    </div>
  );
}
