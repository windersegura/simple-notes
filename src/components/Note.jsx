
export function Note({note}){
    return(
        <li>{note.title} - {note.completed.toString()}</li>
    )
}