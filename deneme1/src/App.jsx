import { useState } from "react";
import "./App.css";

function App() {
 const [notes, setNotes] = useState([])
  const [state,setstate] = useState({
    title: "",
    note: "",
    id: Math.random()*10,
  });

const handleDelete = (id)=>{
const leftNotes = notes.filter(note => note.id !== id)
setNotes(leftNotes)
}
  const handleChange = (e)=>{
    setstate({...state, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
   setNotes([...notes, state])
   setstate({title:"", note: ""})

  }
  return (
  <div className="App bg-blue-100 h-screen">
    <h1 className="text-center text-5xl p-5">My Notes</h1>
    <div className="create-note w-[400px] mx-auto">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input type="text" placeholder="title" name="title" className="border-2 border-blue-200 p-2 " onChange={handleChange} value={state.note}/>
        <textarea name="note" id="" cols="30" rows="5" placeholder="note" className="border-2 border-blue-200 p-2"></textarea>

        <button type="submit"  className=" bg-blue-5000 px-5 py-3 text-white mt-4">Add Note</button>
      </form>
    </div>

    <div className="notes-container border-t-2 border-blue-300 px-5 m-10 flex flex-wrap">
      {
        notes.map((note, i)=>{
          return(
            <div className="note bg-white mt-5 mr-5 w-[300px] p-4 py-10 relative " key={i}>
              <button className="delete-note absolute right-2 top-0 font-bold text-2*l text-red-500" onClick={()=> handleDelete(note.id)}>*</button>
              <h3 className="font-bold text-1*l pb-2">{note.title}</h3>
              <p>
                {note.note}
              </p>
            </div>
          )
        })
      }
    </div>
  </div>
)}

export default App;
