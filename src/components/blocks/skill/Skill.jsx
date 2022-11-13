import React from 'react';
import './skill.scss';



const Skill = ({skill}) => {
    return(
        <div className="resume__skill">
            <h5>{skill.name}</h5>
            <div className="skill__graph">
                <span>{skill.percent}%</span>
                <div>
                    <div style={{width: `${skill.percent}%`}}></div>
                </div>
            </div>
        </div>
    )
}


export default Skill;