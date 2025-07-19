import { useState } from 'react'

function App() {
  const [horizontalPx, setHorizontalPx] = useState(0);
  const [verticalPx, setVerticalPx] = useState(0);
  const [blurRadius, setBlurRadius] = useState(0);
  const [spreadRadius, setSpreadRadius] = useState(0);
  const [boxColor, setBoxColor] = useState('#000000');
  const [opacity, setOpacity] = useState(0.75);
  const [inset, setInset] = useState(false);
  const [copy, setCopy] = useState(false);

  const toggleInset = () => setInset(prev => !prev);

  const boxShadow = `${inset ? 'inset ' : ''}${horizontalPx}px ${verticalPx}px ${blurRadius}px ${spreadRadius}px rgba(${parseInt(boxColor.slice(1, 3), 16)},${parseInt(boxColor.slice(3, 5), 16)},${parseInt(boxColor.slice(5, 7), 16)},${opacity})`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(`box-shadow: ${boxShadow};`);
    setCopy(true);
    setTimeout(() => setCopy(false), 3000);
  }

  return (
    <section className='box-shadow-section'>

      <div className='box-user'>
        <input type="range" min='-200' max='200' value={horizontalPx} onChange={e => setHorizontalPx(Number(e.target.value))} />
        <p>Horizontal Shadow Length: {horizontalPx}px</p>

        <input type="range" min='-200' max='200' value={verticalPx} onChange={e => setVerticalPx(Number(e.target.value))} />
        <p>Vertical Shadow Length: {verticalPx}px</p>

        <input type="range" min='0' max='400' value={blurRadius} onChange={e => setBlurRadius(Number(e.target.value))} />
        <p>Blur Radius: {blurRadius}px</p>

        <input type="range" min='-200' max='200' value={spreadRadius} onChange={e => setSpreadRadius(Number(e.target.value))} />
        <p>Spread Radius: {spreadRadius}px</p>

        <input type="color" value={boxColor} onChange={e => setBoxColor(e.target.value)} />
        <p>Shadow Color: {boxColor}</p>

        <input type="range" min='0' max='1' step='0.01' value={opacity} onChange={e => setOpacity(Number(e.target.value))} />
        <p>Shadow Color Opacity: {opacity}</p>

        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <input type='checkbox' checked={inset} onChange={toggleInset} />
          Inset: {inset ? 'ON' : 'OFF'}
        </label>
      </div>

      <div className='box-reference' style={{ boxShadow: boxShadow }}>
      </div>

      <div className='box-css'>
        <code>box-shadow: {boxShadow};</code>
        <button onClick={handleCopy}>{copy ? 'Copied!' : 'Copy'}</button>
      </div>

    </section>
  )
}

export default App
