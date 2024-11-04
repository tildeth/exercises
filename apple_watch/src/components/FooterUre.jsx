"use client";
import UrBlue from "./UrBlue";
import UrGrey from "./UrGrey";
import UrPink from "./UrPink";

const FooterUre = ({setSelectedColor}) => {
    
    return <div className="FooterUre">
        <UrGrey setSelectedColor={setSelectedColor} />
        <UrBlue setSelectedColor={setSelectedColor} />
        <UrPink setSelectedColor={setSelectedColor} />
    </div>
}
 
export default FooterUre;