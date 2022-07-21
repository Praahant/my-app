import React from "react";
const d = new Date();
var date =d.getFullYear();
function footer(){
    return(<footer><p>{date}</p></footer>)
}


export default footer;