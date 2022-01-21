import './App.css';
import menu from './data'
import { useState } from 'react'
import Category from './Category';

const categories = ["all", ...new Set(menu.map(item => item.category))]
console.log(categories)
function App() {
  const [items, setItems] = useState(menu)

  const filterItems = (category) => {
    if (category === 'all') {
      setItems(menu)
      return;
    }
    const newItem = menu.filter(item => item.category === category)
    setItems(newItem)

  }
  return (
    <div className="App">
      <header>
        <h1>Our Menu</h1>
        <div className="underline"></div>
      </header>
      <main>
        <div className="category-button">
          {categories.map(category => <Category category={category} filterItems={filterItems} />)}
        </div>
        <div className="content">
          {items.map(item => {
            return (
              <div className="item-content" key={item.id}>
                <img src={item.img} alt={item.title} />
                <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '300px' }}>
                  <h4>{item.title}</h4>
                  <h4 style={{ float: 'right', color: 'orange' }}>${item.price}</h4>
                </div>
                <hr />
                <div>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                <p>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
