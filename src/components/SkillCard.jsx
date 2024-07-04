import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SkillCard = ({ icon, texte }) => {
    return (
        <div className="skill_card">
            <FontAwesomeIcon icon={icon} className="skill_icon"/>
            <p>{texte}</p>
        </div>
    );
};

export default SkillCard;