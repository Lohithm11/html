var name; // declaring a variable
name = "lohith"; // assiging a value

var name = "lohith";
var name = "loh";

console.log(name);

HelloWorld..JS
import React from "react"
import styles from "./HelloWorld.module.css";

const HelloWorld = () => {
    
    return (
    <div className={styles["header-green"]}>

    <h1>Hello World </h1>
    <hr/>
    <h2> Styling Summary</h2>
    <ol style={{fontSize:"20px" }}>
    <li>Inline</li>
    <li>CSS in Js</li>
    <li>External CSS files</li>
    <li>CSS modules</li>
    <li>-- Styled components--</li>
    
    
    </ol>
    
    </div>);
  };

  //CSS in JS
  const headerStyle = {
    color: "white", backgroundColor: "black",};
  
  export default HelloWorld;



  