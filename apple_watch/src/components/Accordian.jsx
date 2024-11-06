"use client"
import { useState } from "react";

const Accordion = ({sections}) => {
    const [openSections, setOpenSections]= useState(Array(sections.length).fill(false));

    const toggleSection = (index) => {
        const updatedSections = [...openSections];
        updatedSections[index] =!updatedSections[index];
        setOpenSections(updatedSections)
    }
    return ( <div>
        {sections.map((section, index) => (
            <div key={index}>
                <button onClick={() => toggleSection(index)}>
                    {section.title}
                </button>
                {openSections[index] &&(
                    <div className="text_accor">
                        <p>{section.content}</p>
                    </div>
                )}
                </div>
        )
    )}
    </div> );
};
 
export default Accordion;
