import React from 'react';
import style from "./Projects.module.css"
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project";


const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project title={"Google"} description={"The best project in the world"}/>
                    <Project title={"Mail.ru"} description={"Bad project"}/>
                </div>
            </div>

        </div>
    );
};

export default Projects;