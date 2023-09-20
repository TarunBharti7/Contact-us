import React from 'react'
import styles from "./ContactForm.module.css";
import Button from '../Button/Button';
import {AiOutlineMessage} from 'react-icons/ai'
import {FcCallback} from 'react-icons/fc'
import {MdEmail} from 'react-icons/md'

const ContactForm = () => {
  return (
    <>
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                <Button text="VIA SUPPORT CHAT" icon={<AiOutlineMessage fontSize="24px"/>} />
                <Button text="VIA CALL" icon={<FcCallback fontSize="24px" />} />
                </div>
                <Button
                 isOutline={true}
                 text="VIA EMAIL FORM" 
                 icon={<MdEmail fontSize="24px"/>} />

                 <form>
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" name='email' />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="Text">Text</label>
                        <textarea name="text" rows={3.5}></textarea>
                    </div>
                    <Button text="Submit" />
                 </form>
            </div>

            <div className={styles.contact_image}>
                <img src="/image/contact.svg" alt="" />
            </div>
            
        </section>
    </>
  )
}

export default ContactForm