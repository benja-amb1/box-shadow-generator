import { useState } from 'react'

function App() {
  const [box, setBox] = useState();
  const [horizontalPx, setHorizontalPx] = useState(0);
  const [verticalPx, setVerticalPx] = useState(0);
  const [blurRadius, setBlurRadius] = useState(0);
  const [spreadRadius, setSpreadRadius] = useState(0);
  const [boxColor, setBoxColor] = useState('#000000');
  const [opacity, setOpacity] = useState(0.75);
  const [inset, setInset] = useState(false);

  const toggleInset = () => {
    setInset(prev => !prev)
  }

  const boxShadow = `${inset ? 'inset ' : ''}${horizontalPx}px ${verticalPx}px ${blurRadius}px ${spreadRadius}px rgba(${parseInt(boxColor.slice(1, 3), 16)},${parseInt(boxColor.slice(3, 5), 16)},${parseInt(boxColor.slice(5, 7), 16)},${opacity})`;


  return (
    <>
      <section className='box-shadow-section'>


        <div className='box-user'>
          <input type="range" min='-200' max='200' onChange={e => setHorizontalPx(e.target.value)} />

          <p>Horizontal Shadow Length: {horizontalPx}px</p>

          <input type="range" min='-200' max='200' onChange={e => setVerticalPx(e.target.value)} />

          <p>Vertical Shadow Length: {verticalPx}px</p>


          <input type="range" min='0' max='400' onChange={e => setBlurRadius(e.target.value)} />

          <p>Blur Radius: {blurRadius}px</p>


          <input type="range" min='-200' max='200' onChange={e => setSpreadRadius(e.target.value)} />

          <p>Spread Radius: {spreadRadius}px</p>

          <input type="color" onChange={e => setBoxColor(e.target.value)} />
          <p>Shadow Color: {boxColor}</p>

          <input type="range" min='0' max='1' onChange={e => setOpacity(e.target.value)} step='0.01' />

          <p>Shadow Color Opacity: {opacity}</p>

          <input type='checkbox' onClick={toggleInset} />
          <p>{inset ? 'ON' : 'OFF'}</p>

        </div>


        <div className='box-reference'>
        </div>

        <div className='box-css'>

          <button>Copy</button>
        </div>



      </section>
    </>
  )
}

export default App
