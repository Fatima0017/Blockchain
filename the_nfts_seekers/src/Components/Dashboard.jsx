import React from "react";
import { useEffect } from "react";

async function getBalance() {

    let balance = await window.instance.balanceOf(window.address);
    let owner = await window.instance.owner();

    document.getElementById("p1").innerHTML = "No of NFTs minted : " + balance + ".";
    document.getElementById("p2").innerHTML = "Owner address : " + owner + ".";
}

export default function Dashboard() {
    useEffect(() => {
       
        getBalance();
        
    })

    return (<>
        <div className="bkg">
            <h1>Dashboard</h1>
            <br></br>
           
            <div className="callout-info">
                <p id="p1"></p>
                <p id="p2"></p>
            </div>

        </div>


    </>);
}