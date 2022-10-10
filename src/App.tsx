import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";

//function declaration
function App(props:any) {
    console.log("App rendering");
  return (
    <div className={"App"}>
        {/*/<input/>
        //<input type="date"/>*/}
       {/* <PageTitle title={'This is APP component'}/>
        <PageTitle title={'My friends'}/>
        Article 1
        <UncontrolledRating titleValue={'Menu'} collapsed={true}/>
        <UncontrolledRating titleValue={'Users'} collapsed={false}/>
        Article 2
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>*/}
        <UncontrolledRating/>
        <OnOff />
        <UncontrolledAccordion titleValue={'Menu'} />
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
