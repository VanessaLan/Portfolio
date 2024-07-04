import React, { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SkillCard from "../components/SkillCard";
import { faCss3Alt, faFigma, faGit, faGithub, faHtml5, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import img_about from "../assets/avatar.webp";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import ReactModal from "react-modal";
import data from "../data/data.json"
import SkillCardIcon from "../components/SkillCardIcon";
import redux_icon from "../assets/redux_icon.png"

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setIsOpen(true);
    setSelectedProject(project);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };


  return (
    <>
      <Header />

      <Banner
        title_banner={"Vanessa Langlois"}
        text_banner={"Développeuse front-end junior"}/>

      <section id="a_propos">
        <h3>A propos</h3>
        <hr/>
        <div className="about_container">
          <img src={img_about} alt="image_about"/>
          <p>
            Bonjour !<br /> 
            Je suis Vanessa, une passionnée d'informatique et de jeux vidéo ayant récemment effectuée une
            reconversion professionnelle vers le développement web. Formée chez OpenClassrooms en intégration et
            développement, je possède maintenant des compétences solides en HTML, CSS, Sass, JavaScript et React.
            </p>
        </div>
      </section>

      <section id="competences">
        <h3>Compétences</h3>
        <hr/>

        <div className="skill_card_container">
          <SkillCard icon={faHtml5} texte={"HTML"} />
          <SkillCard icon={faCss3Alt} texte={"CSS"} />
          <SkillCard icon={faSass} texte={"Sass"} />
          <SkillCard icon={faJs} texte={"JavaScript"} />
          <SkillCard icon={faReact} texte={"React"} />
          <SkillCardIcon src_icon={redux_icon} texte={"Redux"}/>
          <SkillCard icon={faGit} texte={"Git"}/>
          <SkillCard icon={faGithub} texte={"GitHub"} />
          <SkillCard icon={faFigma} texte={"Figma"} />
        </div>

      </section>

      <section id="projets">
        <h3>Projets</h3>
        <hr/>
        <div className="project_card_container">

        {data.map((project) => (
            <div key={project.id} onClick={() => handleOpenModal(project)}>
              <ProjectCard  title={project.title} 
                            source={require(`../assets/${project.cover}`)} 
                            alt={`Projet ${project.title}`} />
            </div>
          ))}

          <ReactModal isOpen={isOpen} onRequestClose={handleClose} className="modal">
            {selectedProject && 
            ( <Modal  close={handleClose} 
                      title={selectedProject.title}
                      presentation={selectedProject.presentation}
                      objectifs={selectedProject.objectifs}
                      picture={require(`../assets/${selectedProject.picture}`)}
                      tags={selectedProject.tags}
                      gitHub_link={selectedProject.gitHub}
                      site_link={selectedProject.site}/>)}
          </ReactModal>
  
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;