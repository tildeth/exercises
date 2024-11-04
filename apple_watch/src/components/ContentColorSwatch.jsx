"use client";
import { useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import FooterUre from './FooterUre';
import Image from 'next/image';
import mint from "./../../public/mint.png"
import navy from "./../../public/navy.png"
import ocean from "./../../public/ocean.png"

const ContentColorSwatch = () => {
    // State til at holde styr på den valgte farve
    const [selectedColor, setSelectedColor] = useState(mint);

    // Return skal være inden for komponentfunktionen
    return (
     <div className="ContentColorSwatch">
        <div className="content_ur">
        <Image src={selectedColor} alt="Ur" width={300} height={300} />
        <div>
        <div className="cirkel_navy" onClick={() => setSelectedColor(navy)}></div>
        <BsThreeDotsVertical />
        <div className="cirkel_blue" onClick={() => setSelectedColor(mint)}></div>
        <BsThreeDotsVertical />
        <div className="cirkel_pink" onClick={() => setSelectedColor(ocean)}></div>
        </div>
        </div>
        <FooterUre setSelectedColor={setSelectedColor} />
    </div>
)
}

 
export default ContentColorSwatch;