import { useRef, useState, useEffect} from 'react';
import './App.css';

function App() {

  const screen = useRef( initialValue:null)

  useEffect( effect: () => {
    screen.current.focus()
  }, deps: [])

  const handleKeyup = (e) => {
    if (e.key === 'c'){
      console.log('comment mode aktif!')
    }
  }

  return (
    <div ref={screen} tabIndex={0} onKeyup={handleKeyup} className='screen'>
      test
    </div>
  );
}
export default App;
