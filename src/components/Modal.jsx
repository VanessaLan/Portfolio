import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({ close, title, presentation, objectifs, picture, tags, gitHub_link, site_link }) => {

  return (
    <>
  
      <div className="modal_header">
        <FontAwesomeIcon icon={faXmark} onClick={close} className="icon_close" />
        <h5>{title}</h5>
      </div>

      <p>
        <span className="span_modal_content">Présentation :</span> {presentation}
        <br />
        <span className="span_modal_content">Objectifs :</span> {objectifs}
      </p>

      <img src={picture} alt={"Photo du projet" + title}></img>

      <div className="tags">
        {tags && tags.map((tag, index) => <span key={index}>{tag}</span>)}
      </div>

      <div className="link">
        <a href={gitHub_link} target="_blank" rel="noreferrer" aria-label="Lien vers le repo GitHub">
          <FontAwesomeIcon icon={faGithub} className="icon_link" />
        </a>

        {site_link && (  
        <a href={site_link} target="_blank" rel="noreferrer" aria-label="Lien vers le site">
          <FontAwesomeIcon icon={faLink} className="icon_link"/>
        </a>
        )}

      </div>

    </>
  );
};

export default Modal;


