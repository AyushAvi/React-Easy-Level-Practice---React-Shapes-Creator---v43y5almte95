import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {

  const [shape, setShape] = useState("square")
  const [listShape, setListShape] = useState([]);

  const handleChange = (e) => {
    setShape(e.target.value)
  }

  const handleClicked =() => {
    setListShape([...listShape, shape]);
  }
  
  return (
    <div id="main">
      <div id="shape-creator">
        <select name="selectShape" id="selectShape" onChange={handleChange}>
          <option value="square" selected>Square</option>
          <option value="circle">Circle</option>
        </select>
        <button onClick={handleClicked}>Add shape</button>
      </div>
      <div id="shapes-holder">
        {listShape.map((x)=>{
          return(
            <div className={x}></div>
          )
        })}
      </div>
    </div>
  )
}


export default App;
