import React, { useState, useEffect } from "react";
import { BigNumber } from "ethers";

import Card from "./Card";


const Nfts = () => {
    const [tokens, setTokens] = useState([]);

    useEffect(() => {
        if (tokens.length > 0) return;
        const getAllTokens = async () => {
            setTokens(await window.instance.getAlltoken())
        }
        getAllTokens();


    }, [tokens])

    useEffect(() => {

        if (tokens.length === 0) return;
    }, [tokens])

    return (<>
        <div className="bgcolor">
            <br></br>
            <h1>Welcome to all nfts</h1>
            <div className="cards-container">
                {tokens.map((token) => {

                    return (

                        <>
                            <Card
                                id={(BigNumber.from(token[0])).toString()}
                                imgsrc={token[2]}
                                title={token[1]}
                                description={token[3]}
                                price={(BigNumber.from(token[4])).toString()}

                            />

                        </>

                    )

                })}
            </div>





        </div>
    </>

    );

}
export default Nfts;
