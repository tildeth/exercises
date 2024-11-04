"use client";
import Image from 'next/image';
import mint from "./../../public/mint.png"


const UrBlue = ({setSelectedColor}) => {
    return ( <div onClick={() => setSelectedColor(mint)} className='ur_container'>
        <Image className='ur_pic' src={mint} alt="Ur" width={90} height={90} />
        <div className='bg_box_blue'></div>
    </div> );
}
 
export default UrBlue;