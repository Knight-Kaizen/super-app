import React from "react"
import styles from "./CategoryChip.module.css"
export default
function CategoryChip(props){
    // console.log(props.id);
    return (
        // Multiple classes , some coming from props.
        <div className= {`${styles.main} ${styles[props.color]} ${props.on?styles.borderOn:styles.borderOff}`}
            onClick={()=>{props.customClick(props.id)}}
        >
            <p className={styles.title}>{props.title}</p>
            <img className = {styles.pic} src={props.img} alt={props.title}/>
        </div>
    )
}