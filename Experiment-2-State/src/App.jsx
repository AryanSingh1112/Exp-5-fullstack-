<<<<<<< HEAD
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      <h1>Learning State in React</h1>

      <div className="section">
        <h2>Counter Example</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
=======
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      <h1>Learning State in React</h1>

      <div className="section">
        <h2>Counter Example</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
>>>>>>> 53d1e463bc7962ac1705ca7a1c856756cd30a6b7
