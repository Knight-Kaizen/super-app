import React from "react"
import backgroundImg from "./background.png"
import styles from "./LeftBanner.module.css"
export default 
function LeftBanner(){
    return (
        <div className = {styles.main}>
            <div className={styles.top}>
                <div className={styles.text1}>
                    Already have an account?
                </div>
                <button className={styles.loginBtn}>LOGIN</button>
            </div>
            <div className={styles.bottom}>
                <h1>
                Discover new things on Superapp
                </h1>
            </div>
        </div>
    )
}