import React from "react";

const Menu = ({ items }) => {
  return <div className="section-center">{items.map((i) => itemHtml(i))}</div>;
};

const itemHtml = (item) => {
  return (
    <div key={item.id} className="menu-item">
      <img src={"./5" + item.img} alt={item.title} className="photo" />
      <div className="item-info">
        <header>
          <h4>{item.title}</h4>
          <div className="price">${item.price}</div>
        </header>
        <div className="item-text">{item.desc}</div>
      </div>
    </div>
  );
};

export default Menu;
