import React ,{useState} from 'react';


import './App.css';

function App() {

  const [newItem , setNewItem] = useState("");
  const [items , setItems] = useState([]);


  function addItem() {

    if(!newItem){
      alert("lütfen bir görev ekleyin")
      return;
    }
    const item ={
      id: Math.floor(Math.random()*1000),
      value: newItem
    }
    setItems(oldItems => [...oldItems,item])
    setNewItem("");
  }

  function deleteItem(id){
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);

  }

  return (
   <div className="App">
    <h1>Yapılacaklar Listesi</h1> 

    <input type="text"
    placeholder="Bir görev ekle"
    value= {newItem}
    onChange={e => setNewItem(e.target.value)}
    />

    <button onClick={() => addItem()}>Ekle</button>

    <ul>
     {items.map(item =>{
      return(
        <li key={item.id}>{item.value} <button onClick={()=>deleteItem(item.id)}>X</button>  </li>
      )
     })}
    </ul>


   </div>
  );
}

export default App;
