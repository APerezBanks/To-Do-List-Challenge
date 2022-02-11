import './App.css';
import { useState } from 'react';

const App = () => {
  const [items, setItems] = useState([])
  const [inputText, setInputText] = useState("")


  const addHandler = () => {
    // duplicating the state array *items
    // have to do this so we can use all the array methods
    if  (inputText == "") {
      alert("write something")
    } else {

    let storedItems =[ ...items]
    storedItems.push(inputText)
    setItems(storedItems)

  }


    
  }
  const removeHandler = (index) => {
    let storedItems = [...items]
    // splice splice() method is an inbuilt method in JavaScript which 
    // is used to modify the contents of an array by removing the existing
    // elements and/or by adding new elements.
    storedItems.splice(index,1)
    setItems(storedItems)
  }


// everything bellow return is what will be displayed to the user
    return (
    <div className = "all">
    <div className = "header" >
    <h1>TO DO LIST</h1>
    </div>
    {items.map((item, index)=> {
      return ( 
        <div class = "box">
          <h1 key={index}>{item} </h1>
          <button className = "button" onClick = {() => removeHandler(index)}>Delete</button>
          <button className = "button" onClick = {() => removeHandler(index)}>Done</button>
  
        </div>
      )
    })}

      <div className = "box">
     <button className = "button" onClick = { addHandler }>Add Item</button>
     </div>
     <div className = "box">
        { <p> TYPE INSIDE THE BOX AND CLICK ADD ITEM TO ADD TO YOUR LIST --&gt; </p>}
        <input onChange = {(event) => setInputText(event.target.value) } />
        {/* <h2>{inputText}</h2> */}
     </div>
  
  </div>

 ) 

}

  

export default App



// I did really tried to make the button done once clicked to change the text next to it change color, 
// i tried doing new functions, called  edittext but I have no clue what to do..

// const editText = () => {
//   let storedItems = [...items]
//   storedItems <--------- Im guessing in this line is where  the text goes to, but no idea what
//                           i have to code to make the text imported here once clicked done to change color
//   setItems(storedItems)

// }

// after I assume we would have to write this after return 


// <button className = "button" onClick = {() => editText(index)}>Done</button>


//  all this never worked... Im so lost with react and javascript in general 
// future Alex will fix it probably.

