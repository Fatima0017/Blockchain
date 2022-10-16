import React from "react";

function Card(props) {

    return (<>
       
            <div className="cards">

                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt="..." />
                    <div className="card__info">
                         <h5 className="card__title" id="i"><b>ID:</b>{props.id}</h5>
                        <h5 className="card__title"><b>Title:</b>{props.title}</h5>
                        <p className="card-text"><b>Description:</b><br></br>{props.description}</p>
                        <p className="card-text" id="p"><b>Price:</b>{props.price}<br></br></p>
                        <a href="/Transnft">
                            <button type="button" className="btn btn-outline-dark">Buy</button>
                        </a>

                    </div>
                

            </div>

        </div>

    </>);

}
export default Card;