import Button from './Button/Button';
import Card from './Card';
import Student from './Student';
import UserGreeting from './UserGreeting';
import List from './list';
import MyComponent from './MyComponent';
import Counter from './Counter';
import OnChangeComponent from './OnChangeComponent';
import ColorPicker from './ColorPicker';
import Car from './car';
import Food from './Food';
import Cars from './Cars';
import Todo from './Todo';
import WindowHeightWidth from './WindowHeightWidth';
import DigitalClock from './DigitalClock';
import ComponentA from './ComponentA';
import StopWatch from './StopWatch';

function App() {
  let fruit_list= ["mango","apple","banana"]
  let fruits = [
    {id:1,name:"apple", calories:45},
    {id:2,name:"mango", calories:80},
    {id:3,name:"banana", calories:25},
    {id:4,name:"pineapple", calories:35},
    {id:5,name:"coconut", calories:60}
    ];

  let vegetables = [
    {id:1,name:"potato", calories:32},
    {id:2,name:"lady-finger", calories:10},
    {id:3,name:"brinjal", calories:80},
    {id:4,name:"cabbage", calories:120},
    {id:5,name:"cauliflower", calories:90}
    ];  

  return(
    <>
    {/* <Card></Card>
    <Button name="rushisonar"></Button>
    <Button></Button>
    <Student name="Kartik" age={22} isStudent={true}></Student>
    <Student></Student>
    <Student name="Ritik"></Student>
    <UserGreeting isLoggedIn= {true} user="Rushi"></UserGreeting>
    <UserGreeting isLoggedIn={true}></UserGreeting>
    <UserGreeting></UserGreeting> */}
    {/* {fruits.length>0 ? <List items= {fruits} category="Fruits"></List> : null}
    {vegetables.length>0 ? <List items= {vegetables} category="Vegetables"></List>:null}
    <MyComponent name="Ritik"/> */}
    {/* <OnChangeComponent/> */}
    {/* <ColorPicker/> */}
    {/* <Car/> */}
    {/* <Food item_list={fruit_list}/> */}
    {/* <Cars/> */}
    {/* <Todo/> */}
    {/* <Counter/> */}
    {/* <WindowHeightWidth/> */}
    {/* <DigitalClock/> */}
    {/* <ComponentA/> */}
    <StopWatch/>
    </>
  );
}

export default App
