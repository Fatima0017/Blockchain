import React from "react";
function NavScrollExample() {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        The NFTs Seekers </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/Explore" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Explore
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/Nfts">All NFTs</a></li>

                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/Transowner">TransferOwnership</a></li>
                                   
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Dashboard">Dashboard</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/Nfts" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Collections
                                </a>
                                <ul className="dropdown-menu">

                                    <li><a className="dropdown-item" href="/Create">Create</a></li>
                                    <li><a className="dropdown-item" href="/Nfts">My Collection</a></li>

                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Connection" >Connect Wallat</a>
                            </li>

                        </ul>

                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="numbers" placeholder="Search by NFT id" aria-label="Search" id="s" ></input>
                            <a href="/Search">
                                <button className="btn btn-outline-success" type="submit" >Search</button>
                            </a>
                        </form>

                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavScrollExample;