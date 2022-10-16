import React from "react";

async function connectMetmask() {
    if (typeof window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        const account = accounts[0];
        window.address = account;
        console.log(window.address," connection time");
        document.getElementById("address").innerHTML = "Your wallat has been succesfully connected with address : " + account;
    } else {
        document.getElementById("address").innerHTML = "Please install Metamask";
    }
}

export default function Connection() {

    return (<>
        <br></br>
        <h3>Welcome to ConnectWallat page</h3><br></br>
        <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-primary" type="button" onClick={connectMetmask}>Connect with my wallat</button>
        </div>
        <br></br>
        <div>

            <p className="fs-4" id="address"></p>

        </div>

    </>);
}