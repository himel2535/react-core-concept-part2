
import './App.css'
import './counter'
import Counter from './counter'
import Batsman from './Batsman'

function App() {

  function handleClick(){
    alert('I am clicked')
  }
  const handleClicked3=()=>{
    alert('clicked3')
  }

  const handleAdd5=(num)=>{
    const newNum = num+5;
    alert(newNum);
  }

  return (
    <>
      <h3>Vite + React</h3>

      <Batsman></Batsman>

      <Counter></Counter>

      <button onClick={handleClick}>click me</button>

      <button onClick={function handleClick2(){alert('clicked 2')}}>click me</button>

      <button onClick={handleClicked3}>click me 3</button>

      <button onClick={()=>alert('clicked 4')}>click me 4</button>

      <button onClick={()=>handleAdd5(10)}>click me 5</button>


      {/* normal js onclick function handing difference */}
      {/* <button onclick="handleClick()">click me</button> */}

    </>
  )
}

export default App
