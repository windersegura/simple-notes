import { useState } from "react"

export function NotesForm(props) {
    const {action, handle} = props

    // const submitNote = (e) => {
    //     e.preventDefault()
    //     console.log(note);
    // }

    // const handleChangeInput = (e) =>{
    //     setNote(e.target.value)
    // }
    return(
        <div>
            <div>
                <h1>New Note</h1>
            </div>
            <div>
                <form onSubmit={action}>
                    <div>
                        <label>Note Title</label>
                        <input name="title" id="title" onChange={handle}/>
                    </div>
                    <div>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}