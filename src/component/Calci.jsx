import React, { useState } from 'react';
import "./Calculator.css"

const Calci = () => {
  const [result, setResult] = useState("");

  const handleClick=(e) => {
    setResult(result.concat(e.target.name));
  }

  const clearDisplay=()=> {
    setResult("");
  }

  const calculate=()=> {
    try {
        setResult(eval(result).toString());
    } catch (error) {
        setResult("Error")
    }
  }

  return (
    <div>
        <div id="heading">
            <p>Calculator</p>
        </div>
        <div className="calculator">
          <div className="inner">
             <div className="card">
              <div>
                <input type="text" placeholder='0' value={result}/>
              </div>
              <button name="1" onClick={handleClick}>1</button>
              <button name="2" onClick={handleClick}>2</button>
              <button name="3" onClick={handleClick}>3</button>
              <button name="+" onClick={handleClick} className="black">+</button>
              <button name="4" onClick={handleClick}>4</button>
              <button name="5" onClick={handleClick}>5</button>
              <button name="6" onClick={handleClick}>6</button>
              <button name="-" onClick={handleClick} className="black">-</button>
              <button name="7" onClick={handleClick}>7</button>
              <button name="8" onClick={handleClick}>8</button>
              <button name="9" onClick={handleClick}>9</button>
              <button name="*" onClick={handleClick} className="black">x</button>
              <button name="C" onClick={clearDisplay} className="red">C</button>
              <button name="0" onClick={handleClick}>0</button>
              <button onClick={calculate} className="black">=</button>
              <button name="/" onClick={handleClick} className="black">/</button>
            </div> 
          </div>
        </div>
    </div>
  )
}

export default Calci