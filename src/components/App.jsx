// App.jsx
import React, { useState } from 'react';
import Menu from './Menu';
import ContentDisplay from './ContentDisplay';
import data from '../../data/data.json';
import "../styles/index.css";


function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleMenuSelect = (topico) => {
    setSelectedTopic(data.data[topico]);
  };

  return (
    <div className="absolute top-0 left-0 z-10 flex overflow-y-hidden">

    
      <Menu onSelect={handleMenuSelect} data={data} />
      
      <div className='p-8 w-screen'>
      {selectedTopic && <ContentDisplay dados={selectedTopic} />}
      </div>
      
    </div>
  );
}

export default App;
