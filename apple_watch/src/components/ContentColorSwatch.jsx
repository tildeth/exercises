import { BsThreeDotsVertical } from "react-icons/bs";
import Image from 'next/image';

const ContentColorSwatch = () => {
    return <div className="ContentColorSwatch">
        <div className="content_ur">
        <Image src="/navy.png" alt="Ur" width={300} height={300} />
        <div>
        <div className="cirkel_navy"></div>
        <BsThreeDotsVertical />
        <div className="cirkel_blue"></div>
        <BsThreeDotsVertical />
        <div className="cirkel_pink"></div>
        </div>
        </div>
    </div>
}
 
export default ContentColorSwatch;