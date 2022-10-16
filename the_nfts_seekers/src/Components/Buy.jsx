
import React from "react";

async function buy() {

    // let id = document.getElementById("i").value;
    // let adr = document.getElementById("adr").value;
    // let price = document.getElementById("p").value;

    
    // let txHash = await window.instance.buy(adr, price, id,{ gasLimit: 100000});
    // txHash.wait();
   
    let to = document.getElementById("adr").value;
    let id = document.getElementById("i").value;
    let from = await window.instance.ownerOf(id);
    //let txHash = await window.instance.safeTransferFrom(from,to,id);
   // txHash.wait();
    console.log(to,from,id);

}

export default function Buy() {

    return (<>

        <h1>welcome to buy page</h1>
        <input className="form-control form-control-lg" id="i" placeholder="Enter NFT ID " type="numbers"></input><br></br>
        <input className="form-control form-control-lg" id="adr" placeholder="Enter your wallat address" type="text"></input><br></br>
        <input className="form-control form-control-lg" id="p" placeholder="Enter Price" type="number"></input><br></br>

        <button className="btn btn-primary btn-lg" type="button" onClick={buy}>Create NFT</button><br></br><br></br>
        <label id="1">NFT Status</label>
    </>)
}