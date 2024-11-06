import Accordian from "./Accordian";

const AccordianContainer = () => {
    const sections = [
        {title: "spg1", content: "jjj"},
        {title: "spg1", content: "jjj"},
        {title: "spg1", content: "jjj"}
        ]
    return ( <div>
        <Accordian sections={sections} />
    </div> );
}
 
export default AccordianContainer;