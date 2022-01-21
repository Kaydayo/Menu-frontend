import './App.css';
import menu from './data'
import { useState } from 'react'
import Category from './Category';



function App() {
  const [items, setItems] = useState(menu)
  return (
    <div className="App">
      <header>
        <h1>Our Menu</h1>
        <div className="underline"></div>
      </header>
      <main>
        <h2>All</h2>
        <div className="content">
          {items.map(item => {
            return (
              <div className="item-content">
                <img src={item.img} alt={item.title} />
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                  <h5>{item.title}</h5>
                  <h5 style={{ float: 'right', color: 'orange' }}>${item.price}</h5>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
