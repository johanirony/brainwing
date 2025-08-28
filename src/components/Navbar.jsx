import React from 'react'

export default function Navbar() {
  return (
    <nav style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '70px',
      background: 'rgba(248, 246, 243, 0)',
      borderBottom: '1px solid rgba(230, 223, 216, 0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      zIndex: 1000,
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backdropFilter: 'blur(8px)'
    }}>
      {/* Left Section - Menu and Action Buttons */}
      {/* <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 16px',
          background: '#f0ede8',
          border: '1px solid #d4cbc0',
          borderRadius: '8px',
          color: '#2c1810',
          fontSize: '12px',
          fontWeight: '600',
          cursor: 'pointer',
          textTransform: 'uppercase'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <div style={{ width: '16px', height: '2px', background: '#2c1810' }}></div>
            <div style={{ width: '16px', height: '2px', background: '#2c1810' }}></div>
            <div style={{ width: '16px', height: '2px', background: '#2c1810' }}></div>
          </div>
          Menu
        </button>
        
        <button style={{
          padding: '10px 16px',
          background: '#f0ede8',
          border: '1px solid #d4cbc0',
          borderRadius: '8px',
          color: '#2c1810',
          fontSize: '12px',
          fontWeight: '600',
          cursor: 'pointer',
          textTransform: 'uppercase'
        }}>
          Select Apartment
        </button>
        
        <button style={{
          padding: '10px 16px',
          background: '#f0ede8',
          border: '1px solid #d4cbc0',
          borderRadius: '8px',
          color: '#2c1810',
          fontSize: '12px',
          fontWeight: '600',
          cursor: 'pointer',
          textTransform: 'uppercase'
        }}>
          Virtual Tour
        </button>
      </div> */}

      {/* Center Section - ERA Logo */}
      <div style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '24px',
        fontWeight: '600',
        color: '#2c1810',
        fontFamily: 'Georgia, serif'
      }}>
        BRAINWING
      </div>

      {/* Right Section - Icons and Request Call Button */}
      {/* <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button style={{
          width: '40px',
          height: '40px',
          background: 'transparent',
          border: '1px solid #d4cbc0',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2c1810" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
        
        <button style={{
          padding: '12px 20px',
          background: '#d4a574',
          border: 'none',
          borderRadius: '8px',
          color: 'white',
          fontSize: '12px',
          fontWeight: '600',
          cursor: 'pointer',
          textTransform: 'uppercase'
        }}>
          Request a Call
        </button>
        
        <button style={{
          width: '40px',
          height: '40px',
          background: 'transparent',
          border: '1px solid #d4cbc0',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2c1810" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </button>
      </div> */}
    </nav>
  )
}
