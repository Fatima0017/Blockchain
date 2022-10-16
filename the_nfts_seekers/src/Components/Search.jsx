import React from "react";
import { useEffect } from "react";
function search() {

    let id = window.id;
    //let s = await window.instance.tokenURI(id);
    console.log(id);
}
export default function Search(){

    useEffect(() => {
       
        search();
        
    })
return(<>
<h1>seacrh items</h1>
</>);
}