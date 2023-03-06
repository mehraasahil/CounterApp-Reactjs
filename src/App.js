import './App.css';
import React,{ useEffect, useeffect ,usesate, useState} from 'react'
function App() {
  const [count,setCount] = useState(0)
  useEffect(() => {
    console.warn('useEffect')
  })

return (
  <div className='App'>
    <h1>useeffect in React{count}</h1>
    <button onClick={()=>setCount(count+1)} >Update count</button>
  </div>
  );
}


export default App;
