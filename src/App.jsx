import { useState } from 'react'
import './App.css'
import useCounter from './hooks/useCounter'
import useToggle from './hooks/useToggle'
import useCopyToClipboard from './hooks/useCopyToClipboard'

function App() {
   
    //const {count , increase, decrease} = useCounter();
    
    //const {open , change} = useToggle();
    
    const [copied, copy] = useCopyToClipboard("Pes etme çalış");

  return (
     <div>
        {/* <div>{count}</div>
        <button onClick={increase}>Arttır</button>
        <button onClick={decrease}>Azalt</button> */}
      
        {/* {open && <div style={{width: '100px', height: '100px',backgroundColor: 'pink'}}>kutu</div>}
        <button onClick={change}>{open ? 'Gizle' : 'Göster'}</button>
        */}

        {copied && 'kopyalandı'}
        <button onClick={copy}>Kopyala</button>

     </div>
  )
}

export default App
