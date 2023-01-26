import React from 'react';
import style from "./RemoteWork.module.css"
import styleContainer from "./../common/styles/Container.module.css"

const RemoteWork = () => {
    return (
        <div className={style.remoteBlock}>
            <div className={styleContainer.container}>
                <div className={style.remoteContainer}>
                    <h2 className={style.title}>Ready for remote work</h2>
                    <button className={style.btnHire}>Hire Me</button>
                </div>

            </div>

        </div>
    );
};

export default RemoteWork;