import { useState } from 'react';

function App() {
  // const [name, setName] = useState('Arnold')

  // setTimeout(() => {
  //   setName('charles')
  // }, 3500)

  // const people = ['Nick', 'Cjay',"Thomas"]
  // const me = 'Arnold'
  // const display = people.map(person => {
  //   return <p>{person}</p>
  // })

  const [counter,setCounter] = useState(0)
  
  const increment = () => {
    setCounter(currVal => {
      setCounter(currVal +1)
    })
  }
  const decrease = () => {
    if(counter === 0) return
    setCounter(currVal => {
      setCounter(currVal -1)
    })
  }
  return (
    <div>
      <h1>GET TO THA CHOPPAH </h1>
      <p>counter: {counter}</p>
      <button onClick={decrease}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
// onClick, onChange, onSubmit
// dont manipulate the DOM directly
//  dont ever ever ever ever change a stateful variable directly