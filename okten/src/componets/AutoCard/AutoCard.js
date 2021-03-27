import React from "react";
import styles from "./AutoCard.module.css"
export const AutoCard = (props) =>{
    
    return (
      <div className={styles.card}>
        <h1>{props.model}</h1>
        <h3>{props.age}</h3>
        <p>{props.power}</p>
      </div>
    )
  
  }