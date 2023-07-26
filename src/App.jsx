import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleClick = (e) => {
    setCurrentTabIndex(e.target.id - 1);
  }

  return (
    <div>
      <div className="tabs">
        <div className="tabs-titles">
          <div id="1" className="tab" onClick={handleClick}>
            Tab 1
          </div>
          <div id="2" className="tab" onClick={handleClick}>
            Tab 2
          </div>
          <div id="3" className="tab" onClick={handleClick}>
            Tab 3
          </div>
        </div>

        <div className="tabs-content">
          {currentTabIndex === 0 && (
            <div id="tab-content-1" className="tab-content">
              Content for tab 1
            </div>
          )}
          {currentTabIndex === 1 && (
            <div id="tab-content-2" className="tab-content">
              Content for tab 2
            </div>
          )}
          {currentTabIndex === 2 && (
            <div id="tab-content-3" className="tab-content">
              Content for tab 3
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default App
