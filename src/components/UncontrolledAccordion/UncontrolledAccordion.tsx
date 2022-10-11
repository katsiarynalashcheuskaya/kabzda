import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string;
   /* collapsed: boolean;*/
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("UncontrolledRating rendering");
    let [collapsed, setCollapsed] = useState(false);

    return <div>
        <AccordionTitle title={props.titleValue} clickOnMenu={()=>{setCollapsed(!collapsed)}}/>
     {/*   <button onClick={()=>{setCollapsed(!collapsed)}}>toggle</button>*/}
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string;
    clickOnMenu: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={()=>{props.clickOnMenu()}}>{props.title}</h3>)
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UncontrolledAccordion;