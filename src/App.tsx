import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

//function declaration
function App(props:any) {
    console.log("App rendering");
  return (
    <div>
        {/*/<input/>
        //<input type="date"/>*/}

        {/*<PageTitle title={'This is APP component'}/>
        <PageTitle title={'My friends'}/>
        Article 1
        <Rating value={1}/>*/}
        <Accordion titleValue={'Menu'} collapsed={true}/>
        <Accordion titleValue={'Users'} collapsed={true}/>
        {/*Article 2
        <Rating value={2}/>
        <Rating value={props.rating}/>
        <Rating value={4}/>
        <Rating value={5}/>*/}
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
