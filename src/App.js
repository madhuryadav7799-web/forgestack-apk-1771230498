import React from 'react';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀 ForgeStack App</h1>
      <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Built with AI • Powered by ForgeStack</p>
    </div>
  );
}

export default App;