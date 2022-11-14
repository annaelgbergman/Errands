import './App.css';
import React, { useState, useEffect  } from 'react';
import Form from './components/Form/Form'
import Card from './components/Card/Card'

function App() {
  const [showAll, setShowAll] = useState(false);
  const [issues, setIssues] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://localhost:7272/api/Issues')
      setIssues(await res.json())
    }

    fetchData()
  }, [issues])

  return (
    <div className="App">
      <div className='container group-card'>
        <div className='btn-group'>
          <button onClick={() => setShowAll(true)} className={showAll ? 'btn btn-active' : 'btn'}>Add new errand</button>
          <button onClick={() => setShowAll(false)} className={showAll ? 'btn' : 'btn btn-active'}>All errands</button>
        </div>
        
      { showAll ? <Form/> :  [...issues].reverse().map(issue => <Card issue={issue} key={issue.id}/>)}

      </div>
    </div>
  );
}


export default App;
