import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItems = (categoryy) => {
    if (categoryy === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === categoryy);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems}></Categories>
        <Menu items={menuItems}></Menu>
      </section>
    </main>
  );
}

export default App;
