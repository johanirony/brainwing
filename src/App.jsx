
import './App.css'
import { useState } from 'react'
import Scene3D from './components/Scene3D'
import Navbar from './components/Navbar'

function App() {
  const [selectedPoi, setSelectedPoi] = useState(null)
  const handleSelectPoi = (poi) => {
    console.log('App: setSelectedPoi', poi)
    setSelectedPoi(poi)
  }
  return (
    <div className="app" style={{ display: 'flex', width: '100%', height: '100vh', position: 'relative' }}>
      <Navbar />
      <div style={{ flex: '1 1 64%', position: 'relative', minWidth: 0 }}>
        <Scene3D onSelectPoi={handleSelectPoi} selectedPoi={selectedPoi} />
      </div>
      {selectedPoi && (
        <aside style={{ width: '36%', maxWidth: 520, minWidth: 380, background: '#f3eee9', borderLeft: '1px solid #e6dfd8', padding: 24, overflowY: 'auto', position: 'relative', zIndex: 2000 }}>
          <button onClick={() => setSelectedPoi(null)} style={{ float: 'right', background: 'transparent', border: 'none', fontSize: 18, cursor: 'pointer' }}>✕</button>
          <div style={{ marginTop: 24 }}>
            <div style={{ color: '#c98e7a', fontSize: 48, lineHeight: '1' }}>{selectedPoi.eta || 5}</div>
            <h2 style={{ margin: '16px 0 8px', fontWeight: 700 }}>{selectedPoi.title || 'Point of Interest'}</h2>
            {selectedPoi.image && (
              <img src={selectedPoi.image} alt="" style={{ width: '100%', borderRadius: 8, margin: '12px 0' }} />
            )}
            <p style={{ color: '#333' }}>{selectedPoi.description || 'Details about this location appear here.'}</p>
          </div>
        </aside>
      )}
      
    </div>
  )
}

export default App
