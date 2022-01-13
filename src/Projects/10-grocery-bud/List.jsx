import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, deleteEntry, editItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item, i) => (
        <article key={i} className="grocery-item">
          <p className="title">{item}</p>
          <div className="btn-container">
            <button className="edit-btn" onClick={() => editItem(i)}>
              <FaEdit />
            </button>
            <button className="delete-btn" onClick={() => deleteEntry(i)}>
              <FaTrash />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default List;
