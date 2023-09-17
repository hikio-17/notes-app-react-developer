import React from 'react'
import {
  FaPlusCircle,
  FaArrowAltCircleDown,
  FaArrowAltCircleUp
} from 'react-icons/fa'

function ButtonMainAction ({
  pageArchived,
  onToggleChangePage,
  onPageFormInput
}) {
  return (
    <section className='btn-main-action'>
      {pageArchived ? (
        <FaArrowAltCircleUp
          id='togglePage'
          onClick={onToggleChangePage}
        />
      ) : (
        <FaArrowAltCircleDown
          id='togglePage'
          onClick={onToggleChangePage}
        />
      )}
      <FaPlusCircle id='addNote' onClick={onPageFormInput} />
    </section>
  )
}

export default ButtonMainAction
