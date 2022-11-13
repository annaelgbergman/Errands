import './App.css';
import React, { useState  } from 'react';
import Form from './components/Form/Form'
import Card from './components/Card/Card'

function App() {

  const [showAll, setShowAll] = useState(false);

  return (
    <div className="App">
      <div className='container group-card'>
        <div className='btn-group'>
          <button onClick={() => setShowAll(true)} className={showAll ? 'btn btn-active' : 'btn'}>Add new errand</button>
          <button onClick={() => setShowAll(false)} className={showAll ? 'btn' : 'btn btn-active'}>All errands</button>
        </div>
        
      { showAll ? <Form/> : <Card/>}

      </div>
    </div>
  );
}


export default App;
