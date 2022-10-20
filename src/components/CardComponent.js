import React from 'react'
import "./CardComponent.css"


function CardComponent(props) {

    return (
        <div className="card card1">
            <div className="container">
                <img src={props.imgUrl} alt="las vegas" />
            </div>
            <div className="details">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )

}

export default CardComponent