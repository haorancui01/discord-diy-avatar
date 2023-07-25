import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Home } from './home'
import { ShapePicker } from './components/ShapePicker';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [color, setColor] = useState('#ff0000');

  const [shape, setShape] = useState('circle');

  return (
    // <>
    //   <Home/>      
    // </>
    <div className='container-fluid'>
      <div className="d-flex">
        <div className="w-50">
          {/* <Avatar color={color} shape={shape} /> */}
        </div>
        <div className="w-50">
          {/* <ColorPicker color={color} setColor={setColor} /> */}
          <ShapePicker shape={shape} setShape={setShape} />
        </div>
      </div>
    </div>

  );
}



export default App
