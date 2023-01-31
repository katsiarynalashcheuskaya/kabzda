import React, {useReducer} from "react";
import {AccordionReducer} from "./AccordionReducer";

type AccordionPropsType = {
    titleValue: string;
}

function UncontrolledAccordion(props: AccordionPropsType) {
  //  let [collapsed, setCollapsed] = useState(false);
    let [state, dispatch] = useReducer(AccordionReducer, {collapsed: false});

    return <div>
    {/*    <AccordionTitle title={props.titleValue} clickOnMenu={()=>{setCollapsed(!collapsed)}}/>*/}
        <AccordionTitle title={props.titleValue} clickOnMenu={()=>{dispatch({type: 'TOGGLE-COLLAPSED'})}}/>
        {!state.collapsed && <AccordionBody/>}
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