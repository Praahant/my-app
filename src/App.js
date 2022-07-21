import React from "react";
import Header from './component/Header';
import Footer from './component/Footer';
import Note from "./component/Note";
import notes from "./component/data";

function AllNotes(notes){
 return <Note
 key={notes.id}
    title={notes.title}
    content={notes.content}
 />
}

function App(){
    return (<React.StrictMode><Header />
    
    {notes.map(AllNotes)}<Footer/>
    </React.StrictMode>);
}
export default App;