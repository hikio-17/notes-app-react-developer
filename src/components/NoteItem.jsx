import React from 'react';
import { FaArrowDown, FaArrowUp, FaTrash } from 'react-icons/fa'
import { showFormattedDate } from '../utils';

function NoteItem({ title, body, createdAt, id, archived, onDelete, onArhived }) {
   const date = showFormattedDate(createdAt)
   return (
      <article className='note-item'>
         <h3 className='note-item__title'>{ title }</h3>
         <p className='note-item__date'>{ date }</p>
         <div className="horizontal-line"></div>
         <p className='note-item__body'>{ body }</p>

         <div className="note-item__action">
            <button className="warning" onClick={() => onDelete(id)}><FaTrash /></button>
            <button className="green" onClick={() => onArhived(id)}>{archived ? <FaArrowUp /> : <FaArrowDown />}</button>
         </div>
      </article>
   )
}

export default NoteItem