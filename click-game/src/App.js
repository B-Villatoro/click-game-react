import React from 'react';
import CharCard from "./components/charCard";
import Characters from "./characters.json";
import './App.css';

function App() {
  return (
    <div className="App">
      {Characters.map((item)=>{
        return (
        <CharCard
          key={item.id}
          name={item.name}
          image={item.image}
        />
      )
      })}


    </div>
  );
}

export default App;
