import React, { useState } from 'react'
import styles from './ContactForm.module.css';
import Button from '../Button/Button';
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
const ContactForm = () => {
const [name, setName]= useState("kuldeep");
const [email, setEmail]= useState("kuldeep@gmail.com");
const [text, setText]= useState("hello, form my side");

    const onViaCallSubmit = () =>{
        console.log("hello form submit");
    }
const onSubmit = (event) =>{
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
    console.dir(event.target[0].value);
    console.dir(event.target[1].value);
    console.dir(event.target[2].value);
};


  return (
    <div className={styles.container}>
        <div className={styles.contactForm}>
            <div className={styles.topBtn}>
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>} />
            <Button onClick={onViaCallSubmit} text="VIA CHAT" icon={<FaPhoneAlt fontSize="24px"/>} />
            </div>
            <Button isOutLine = {true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px" />} />

            <form onSubmit={onSubmit} >
                <div className={styles.formControl}>
                    <label htmlFor='name'>name</label>
                    <input type="text" name= "name"></input>
                <div className={styles.formControl}>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name= "email"></input>
                </div>
                <div className={styles.formControl}>
                    <label htmlFor='textarea'>Text</label>
                    <textarea name= "text" rows="8"/>
                </div>

                </div>
                <div style={{
                    display:'flex',
                    justifyContent:'end',
                    marginTop:'20px'
                }}>
                <Button text="Submit"/>

                </div>
                <div>
                    <h2>{name}<br/>{email}<br/>{text}</h2>
                </div>
            </form>


        </div>

        <div className={styles.contactImage}>
            <img src="./image/contact.svg" alt='contact-img'></img>
        </div>
    </div>
  )
}

export default ContactForm;