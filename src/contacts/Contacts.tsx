import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import style from "./Contacts.module.css"


const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            < div className={styleContainer.container}>
                <div className={style.contactsContainer}>
                    <div className={style.title}>
                        Contacts
                    </div>
                    <form className={style.formBlock}>
                        <input type="text" value={"input"}/>
                        <input type="text" value={"input"}/>
                        <textarea rows={4}>textarea</textarea>
                    </form>
                    <div>
                        <button className={style.buttonSend}>Send Message</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contacts;