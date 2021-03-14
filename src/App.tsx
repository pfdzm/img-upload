// import React from 'react'
import './App.css'
import ImageUpload from 'components/ImageUpload'
import InfoBox from 'components/InfoBox'

function App() {
  return (
    <div className="App">
      <InfoBox contentBody="Hello there, General Kenobi!" />
      <InfoBox
        type="error"
        contentBody="Oops! I sense a major disturbance in the force"
        showContent={false}
        contentHeader="Oops!"
      />
      <ImageUpload />
    </div>
  )
}

export default App
