import React, { lazy, Suspense, useState } from 'react';
import TextComponent from './TextComponent';
import './App.css';

// Lazy load the ImageComponent
const ImageComponent = lazy(() => import('./ImageComponent'));

function App() {
  const [loadImage, setLoadImage] = useState(false);

  return (
    <div className="app-container">
      <h1 className="app-title">⚡ React Lazy Loading Demo</h1>
      <p className="app-subtitle">
        Demonstrating code-splitting and lazy loading in React
      </p>

      {/* Text Component - Loads Immediately */}
      <TextComponent />

      <button
        onClick={() => setLoadImage(true)}
        className="load-btn"
        disabled={loadImage}
      >
        {loadImage ? '✅ Component Loaded' : '🖼️ Load Image Component'}
      </button>

      {/* Image Component - Lazy Loaded */}
      {
        loadImage ? (
          <Suspense fallback={
            <div className="loading-fallback">
              <div className="spinner"></div>
              <h3>Loading Image Component... 🖼️</h3>
            </div>
          }>
            <ImageComponent />
          </Suspense>
        ) : null
      }
    </div>
  );
}

export default App;
