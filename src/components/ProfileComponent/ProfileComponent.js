import React from "react";
import styles from "./ProfileComponent.module.css"
import ButtonComponents from "../ButtonComponents/BtnComponents";
export default
function ProfileComponent(){
    const formData = JSON.parse(localStorage.getItem('formData'));
    const name = formData.fullName;
    const email = formData.email;
    const userName = formData.userName;

    const cards = JSON.parse(localStorage.getItem('selectedCards'));
    const display = cards.filter((card)=>{
        if(card.on == true)
        return card;
    })
    console.log(display);

    const displayButtons = display.map((card) => {
        return (
            <ButtonComponents
                key={card.id}
                id={card.id}
                title={card.title}
                style = {'blue'}
            />
        )
    })

    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <img src="../../Images/profileImage.png"
                className={styles.image1}></img>
            </div>
            <div className={styles.right}>
                <div className={styles.top}>
                    <p className={styles.text1}>{name}</p>
                    <p className={styles.text2}>{email}</p>
                    <p className={styles.text3}>{userName}</p>
                </div>
                <div className={styles.bottom}>
                    {displayButtons}
                </div>
            </div>
        </div>
    )
}