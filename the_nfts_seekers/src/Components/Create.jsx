import React from "react";

import { Web3Storage } from 'web3.storage'

function getAccessToken() {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDYyMTJhODAwMmUxQUEzMjFlMDgzRDkyN0ZDMURGZDdDZUIzMTYzNjMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjM3NTc0MTQwMDksIm5hbWUiOiJGaW5hbCJ9.torY9CkfKtAukN4X7QYDcPcFngLRMOMK83JQx_8v21Y';
}
function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() })
}
function getFiles() {
    const fileInput = document.querySelector('input[type="file"]')

    return [fileInput.files, fileInput.files[0].name];
}
async function mintNFTs() {

    let fn = getFiles();
    const client = makeStorageClient()
    const cid = await client.put(fn[0]);
    
    let URI = "https://ipfs.io/ipfs/" + cid + "/" + fn[1];
    let name = document.getElementById("n").value;
    let des = document.getElementById("d").value;
    let price = document.getElementById("p").value;
    console.log(URI,"    ", name, des,price,window.address)
    let txHash = await window.instance.mint(window.address, URI, name, des, price);
    txHash.wait();
    document.getElementById("1").innerHTML = "NFT created sucessfully!";
}

export default function Create() {
    return (<>
        <div>
            <br></br>
            <input className="form-control" type="file" id="file" placeholder="Enter URI"></input><br></br>
            <input className="form-control form-control-lg" id="n" placeholder="NFT Name" type="text"></input><br></br>
            <textarea className="form-control form-control-lg" id="d" placeholder="Description"></textarea><br></br>
            <input className="form-control form-control-lg" id="p" placeholder="Price" type="text"></input><br></br>
            <button className="btn btn-primary btn-lg" type="button" onClick={mintNFTs}>Create NFT</button><br></br><br></br>
            <label id="1">NFT Status</label>

        </div>



    </>);

}