"use client";
import Image from 'next/image';
import navy from "./../../public/navy.png"


const UrGrey = ({setSelectedColor}) => {
    return ( <div onClick={() => setSelectedColor(navy)} className='ur_container'>
         <Image className='ur_pic' src={navy} alt="Ur" width={90} height={90} />
        <div className='bg_box_grey'></div>
    </div> );
}
 
export default UrGrey;