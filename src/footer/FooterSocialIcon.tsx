import React from 'react';
import style from "./SocialFooter.module.css"

type SocialPropsType = {
    icon: string
}


const FooterSocialIcon = (props: SocialPropsType) => {
    return (
        <div className={style.socialBlock}>
            <div className={style.iconSocial}>
                {props.icon}
            </div>
        </div>
    );
};


export default FooterSocialIcon;
