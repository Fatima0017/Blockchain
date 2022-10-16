import React from "react";
async function transferNft() {
    
    let to = document.getElementById("t").value;
    let id = document.getElementById("i").value;
    let f=await window.instance.ownerOf(id);
    console.log(to, id , f)
    let txHash = await window.instance.transferFrom(f,to,id,{ gasLimit: 100000});
    txHash.wait();
}
export default function Transnft(){
return(<>
  <div>
            <br></br>
            <input className="form-control form-control-lg" id="t" placeholder="Your(address)" type="text"></input><br></br>
            <input className="form-control form-control-lg" id="i" placeholder="token id (uint256)" type="number"></input><br></br>
            <button className="btn btn-primary btn-lg" type="button" onClick={transferNft}>Buy NFT</button><br></br><br></br>
        </div>
</>);

}