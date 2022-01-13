import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  document.title = "Grocery Bud";
  require("./index.css");
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const submit = (e) => {
    e.preventDefault();
    if (!name) {
      //display alert
      showAlert(true, "please enter value", "danger");
    } else if (name && isEditing) {
      //deal with edit
      showAlert(true, "element edited", "success");

      setList((prev) => {
        prev[editID] = name;
        return prev;
      });
      setIsEditing(false);
      setEditID(null);
      setName("");
    } else {
      showAlert(true, "element added", "success");

      setList([...list, name]);
      setName("");
    }
  };
  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };
  const clearList = () => {
    showAlert(true, "list cleared", "danger");
    setList([]);
  };

  const deleteEntry = (id) => {
    showAlert(true, "element removed", "danger");
    const newlist = list;
    newlist.splice(id, 1);
    console.log(newlist);
    setList(newlist);
  };

  const editItem = (id) => {
    const item = list[id];
    setIsEditing(true);
    setEditID(id);
    setName(item);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={submit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="eg. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-btn">{isEditing ? "edit" : "submit"}</button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} deleteEntry={deleteEntry} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  return list ? JSON.parse(list) : [];
};
