import React from "react";


type ItemType = {
    title: string,
    value: any
}

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean
    onChange: () => void;
    items: Array<ItemType>
    onClickCallback: (value:any) => void
}

function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody onClickCallback={props.onClickCallback} items={props.items}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string;
    onChange: () => void;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onChange}>{props.title}</h3>)
}

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClickCallback: (value:any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {

    return <ul>
        {props.items.map((i, index)=><li onClick={()=>{props.onClickCallback(i.value)}} key={index}>{i.value}</li>)}
    </ul>
}

export default Accordion;