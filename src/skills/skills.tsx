import React from 'react';
import style from "./Skills.module.css"
import styleContainer from "./../common/styles/Container.module.css"
import Skill from "./skill/Skill";


const Skills = () => {
        return (
            <div className={style.skillsBlock}>
                <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <h2 className={style.title}>Skills</h2>
                    <div className={style.skills}>
                        <Skill
                            title={"HTML&CSS"}
                            description={"procrastination / procrastination / procrastination / procrastination / procrastination"}/>
                        <Skill title={"JS"}
                               description={"laziness laziness laziness laziness laziness laziness laziness laziness laziness laziness laziness laziness "}/>
                        <Skill
                            title={"React"}
                            description={"Panic Panic Panic Panic Panic Panic Panic Panic  "}/>
                    </div>
                </div>
            </div>
        )
            ;
    }
;

export default Skills;