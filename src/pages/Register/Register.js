import React from "react"
import RegisterForm from "../../components/RegisterForm/RegisterForm.js"
import LeftBanner from "../../components/LeftBanner/LeftBanner.js"
import styles from "./Register.module.css"


export default 

function RegisterPage(){
    return (
        <div className={styles.page1}>
            <div className={styles.left}>
                <LeftBanner/>
            </div>
            <div className={styles.right}>
                <RegisterForm/>
            </div>            
        </div>
    )
}