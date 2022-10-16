//import logo from './logo.svg';
import './App.css';
import Nfts from './Components/Nfts';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Connection from './Components/MyConnection';
import Create from './Components/Create';
import { ethers } from "ethers";
import Dashboard from './Components/Dashboard';
import Transowner from './Components/Transowner';
import Transnft from './Components/Transnft';
import Buy from './Components/Buy';
import Search from './Components/Search';

const ContractAddress = "0x5daC47bcD5FC8aBBEF99AA8Acc6528C40A1DF076";
let ABI = [
  "function mint(address recipents, string memory _uri, string memory _n, string memory _des,uint _p) public",
  "function getAlltoken() public view returns((uint256, string,string,string,uint)[] memory)",
  "function balanceOf(address) public view returns(uint256)",
  "function owner() public view virtual returns (address)",
  "function transferOwnership(address newOwner) external",
  "function transferFrom( address from,address to,uint256 tokenId) external",
  "function tokenURI(uint256 tokenId) public view returns (string memory)",
  "function ownerOf(uint256 tokenId)public view virtual returns (address)",

];
let mnemonic =
  "return happy milk ability moment bench input alien arrive success ritual present";
let wallet = ethers.Wallet.fromMnemonic(mnemonic);
let provider = new ethers.providers.InfuraProvider(
  "rinkeby",
  "d45d013ff4d24c6f89aac01e98e07cf8"
);
wallet = wallet.connect(provider);
window.address = wallet.address;
console.log(window.address,"app.js")
window.instance = new ethers.Contract(ContractAddress, ABI, wallet);

function App() {
  let compo;
  switch (window.location.pathname) {
    case "/":
      compo = <Home></Home>
      break;
    case "/Nfts":
      compo = <Nfts></Nfts>
      break;
    case "/Connection":
      compo = <Connection></Connection>
      break;
    case "/Create":
      compo = <Create></Create>
      break;
    case "/Transowner":
      compo = <Transowner></Transowner>
      break;
    case "/Dashboard":
      compo = <Dashboard></Dashboard>
      break;
    case "/Transnft":
      compo = <Transnft></Transnft>
      break;
    case "/Buy":
      compo = <Buy></Buy>
      break;
    case "/Search":
      compo = <Search></Search>
      break;
    default:
      compo = "More Features are coming soon!";
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      {compo}
    </div>

  );
}

export default App;
