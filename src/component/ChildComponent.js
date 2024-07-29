import { useState, useEffect } from 'react'
import Result from './Result';

const ChildComponent = () => {

    const[weight,setWeight] = useState(null);
    const[height,setHeight] = useState(null);
    const[result, setResult] = useState(null);

    const calculateBmi = () => {
        if( weight == null && height == null){
            return alert('enter valid height and weight')
        }
        const heightInMeter = height/100;
        const bmiResult = Math.round((weight/(2*heightInMeter))*100)/100;
        setResult(bmiResult)   
    } 

   const clearResult = () => {
      setHeight(currVal => currVal==height ? 0 : currVal);
      setWeight(currVal => currVal==weight ? 0 : currVal);
      setResult(null);
   }
 
    return (
        <>
         <div>
           <label htmlfor="weightIpt" className="font-semibold">Weight(Kg):</label>
           <input id="weightIpt" type="number" value={weight} onChange={(e)=> setWeight(e.target.value)} className="border-2 border-black m-2 px-1"></input>
          <br />
          <label htmlfor="heightIpt" className="font-semibold">Height(cm):</label>
          <input type="number" value={height} onChange={(e)=> setHeight(e.target.value)} className="border-2 border-black m-2 px-1"></input>
          <br/>
           <button className="text-white bg-black w-20 h-8 rounded-lg m-2" onClick={calculateBmi}>calculate</button>
           <button className="text-white bg-black w-20 h-8 rounded-lg m-2 " onClick={clearResult}>Reset</button>
        </div>
        <Result result={ result } clearResult={ clearResult } />
        </>
       
    )
}

export default ChildComponent 