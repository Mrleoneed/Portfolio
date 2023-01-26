import React from 'react';
import style from "./Footer.module.css"
import styleContainer from "./../common/styles/Container.module.css"
import FooterSocialIcon from "./FooterSocialIcon";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={styleContainer.container}>
                <div className={style.footerContainer}>
                    <h2 className={style.title}>Leonid Khalabuda</h2>
                    <div className={style.socialBlock}>
                        <FooterSocialIcon icon={"VK"}/>
                        <FooterSocialIcon icon={"FB"}/>
                        <FooterSocialIcon icon={"IN"}/>
                        <FooterSocialIcon icon={"GIT"}/>
                    </div>
                    <div className={style.footerTitle}>
                        <p>© 2023 All Rights Reserved.</p>
                    </div>

                </div>
            </div>

        </div>
    )
        ;
};

export default Footer;