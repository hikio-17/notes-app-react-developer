import React from 'react'
import NoteItem from './NoteItem'

function NotesList ({ notes, onArchived, onDelete }) {
  return (
    <div className='note-list'>
      {notes.map(note => (
        <NoteItem
          {...note}
          key={note?.id}
          onArhived={onArchived}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default NotesList
