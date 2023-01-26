import React from 'react';
import style from "./Project.module.css"

type ProjectPropsType = {
    title: string
    description: string
}

const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.iconProject}>
                <div className={style.btnProject}>
                    <button>View</button>
                </div>


            </div>
            <div className={style.titleBlock}>
                <h3 className={style.title}>{props.title}</h3>
                <div className={style.description}>{props.description}</div>
            </div>

        </div>
    );
};

export default Project;