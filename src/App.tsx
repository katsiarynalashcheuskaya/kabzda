import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";

//function declaration
function App(props:any) {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean>(true);
  return (
    <div className={"App"}>
        {/*/<input/>
        //<input type="date"/>*/}
        {/*<PageTitle title={'This is APP component'}/>
        <PageTitle title={'My friends'}/>
        Article 1*/}
        <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onChange={()=>setAccordionCollapsed(!accordionCollapsed)}/>
        <UncontrolledAccordion titleValue={'Menu'} />
        <UncontrolledAccordion titleValue={'bla-bla'} />
        <Rating value={ratingValue} clickOnRating={setRatingValue}/>
        <UncontrolledRating/>
        {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
        <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
    </div>
  );
}

type PageTitlePropsType = {
    title: string;
}

function PageTitle (props:PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

function sum(a:number, b: number){
    alert(a+b);
}
//sum(100,300);


export default App;
