import React from 'react';

const SkillCardIcon = ({src_icon, texte}) => {
    return (

    <div className="skill_card">
            <img src={src_icon} alt={"icone de" + texte} className="skill_icon"/>
            <p>{texte}</p>
        </div>

    );
};

export default SkillCardIcon;