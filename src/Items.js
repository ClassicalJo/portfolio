import React from "react"
import Simon from "./simon-dice.png"
import BarkingBoard from "./barking-board.png"
import Pokedex from "./pokedex.png"
import ContactInformation from "./contact-information.png"

function Items() {
    return (
        <div className="item-container">
            <div className="item itema">
                <a
                    href="https://classicaljo.github.io/simon-dice/"
                    target="_blank" rel="noopener noreferrer">
                    <img src={Simon} alt="Simon dice" />
                </a>
            </div>

            <div className="item itemb">
                <a
                    href="https://classicaljo.github.io/barking-board/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={BarkingBoard} alt="Barking board" />
                </a>
            </div>

            <div className="item itemc">
                <a
                    href="https://classicaljo.github.io/pokedex-v1.1/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={Pokedex} alt="Pokedex" />
                </a>
            </div>
            <div className="item itemd">
                <a
                    href="https://classicaljo.github.io/contact-information/index.html"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={ContactInformation} alt="Contact information" />
                </a>
            </div>
        </div>
    )
}

export default Items