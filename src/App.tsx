import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import Select from "./components/Select/Select";
import SelectWithoutValue from "./components/Select/SelectWithoutValue";

//function declaration
function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(true);
    let [value, setValue] = useState('2');
    let [value1, setValue1] = useState(null);

    const items = [
        {title: 'essggs', value: 'aafafaf'},
        {title: 'jtfjfj', value: 'rhdh'},
        {title: 'awdaafwa', value: 'uhsgfwa'}
    ]

    const onClick = (value: any) => console.log(value)

  return (
    <div className={"App"}>
        {/*/<input/>
        //<input type="date"/>*/}
        {/*<PageTitle title={'This is APP component'}/>
        <PageTitle title={'My friends'}/>
        Article 1*/}


        <Accordion items={items} titleValue={'Menu'} collapsed={accordionCollapsed} onChange={()=>setAccordionCollapsed(!accordionCollapsed)} onClickCallback={onClick}/>
        <UncontrolledAccordion titleValue={'Users'} />
        <Rating value={ratingValue} clickOnRating={setRatingValue}/>
        <UncontrolledRating/>
        {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
        <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
        <hr/>
        <Select value={value} onChange={setValue}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Slonim'},
                    {value: '3', title: 'Stolin'},

                ]}/>
        <hr/>
        {/*<SelectWithoutValue value={value1} onChange={setValue1}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Slonim'},
                    {value: '3', title: 'Stolin'},

                ]}/>*/}
    </div>
  );
}




/*type PageTitlePropsType = {
    title: string;
}*/

/*function PageTitle (props:PageTitlePropsType) {
    return <h1>{props.title}</h1>
}*/

/*function sum(a:number, b: number){
    alert(a+b);
}*/
//sum(100,300);


export default App;
