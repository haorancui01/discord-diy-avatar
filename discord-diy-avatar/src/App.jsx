import { useState } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css'
import { Home } from './home'
import { Avatar } from './components/Avatar';
import { ShapePicker } from './components/ShapePicker';
import { ColorChooser } from './components/ColorChooser'
import { ShapeChooser } from './components/ShapeChooser';
import { SelectableList } from './components/SelectableList';
import './App.css'

function App() {
  const [color, setColor] = useState('#ff0000');

  const [shape, setShape] = useState('circle');

  const [ selected_bg_color, set_selected_bg_color ] = useState('white');


  return (
  
    <div className='container'>
      <div className='row'>
          <Avatar color={ selected_bg_color} shape={shape} />
          <ShapePicker shape={shape} setShape={setShape} />
          <ColorChooser set_selected_bg_color={set_selected_bg_color}/>
          <ShapeChooser />
          {/* <ColorPicker color={color} setColor={setColor} /> */}
      </div>
    </div>

  );
}



export default App
