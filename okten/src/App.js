import React, {useState} from "react";
import './App.css';
import { AutoCard } from "./componets/AutoCard/AutoCard"


let cars = [
  {id: 252, model : "auto", age  : 2000, power : 1000, color : "red"},
  {id: 842, model : "auto2", age  : 2002, power : 1500, color : "blue"}, 
  {id: 826, model : "auto3", age  : 2004, power : 1600, color : "green"},
  {id: 16, model : "auto4", age  : 2006, power : 2100, color : "gold"},
  {id: 94, model : "auto5", age  : 2008, power : 2300, color : "grey"},
  {id: 74, model : "auto6", age  : 2010, power : 2500, color : "silver"},
  {id: 4, model : "auto7", age  : 2012, power : 3000, color : "skyblue"},
  {id: 901, model : "auto8", age  : 2014, power : 4000, color : "#3298f2"},
  {id: 93, model : "auto9", age  : 2016, power : 21000, color : "#333333"},
  {id: 2, model : "auto10", age  : 2018, power : 3500, color : "#ff9638"}
];

function App() {

  const [arr,changeArr] = useState(cars);

    const remove = (itemRemove) => {
    if (itemRemove !== 'first' && itemRemove !== 'last' && itemRemove !== 'revert') return
    const newArr = [...arr];

    itemRemove === 'first' && newArr.shift();
    itemRemove === 'last' && newArr.pop();
    changeArr(newArr);

  }

    const onRevert = () => {
      const clone = [...cars];
      changeArr(clone);
    }

  return (
    <div className="App">

      <h3>Cars</h3>
      <button onClick={()=> remove('first')}>Скрыть первое авто</button>
      <button onClick={()=> remove('last')}>Скрыть последнее авто</button>
      <button onClick={onRevert}>Отобразить все авто</button>
      <ul>
      {
        arr.map (value => <li key={value.id}><AutoCard {...value}/></li>)

      
      }
      </ul>

      
    
    </div>
  );
}

export default App;
