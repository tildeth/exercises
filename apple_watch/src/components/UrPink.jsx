"use client";
import Image from 'next/image';
import ocean from "./../../public/ocean.png"

const UrPink = ({setSelectedColor}) => {
    return ( <div onClick={()=> setSelectedColor(ocean)} className='ur_container'>
        <div className='bg_box_pink'></div>
        <Image className='ur_pic' src={ocean} alt="Ur" width={90} height={90} />
        
    </div> );
}
 
export default UrPink;