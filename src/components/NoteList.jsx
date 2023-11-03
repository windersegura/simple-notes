import { Note } from "./Note";

export function NoteList({ notes }) {
  return (
    <div>
      <h1>Notas</h1>
      <ul>
        {notes.map((n,index) => (
          <Note key={index} note = {n}/>
        ))}
      </ul>
    </div>
  );
}
