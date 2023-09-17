import React from 'react';
import Navbar from './Navbar';
import MainHeader from './MainHeader';
import NotesList from './NotesList';
import { getInitialData, showFormattedDate } from '../utils';
import ButtonMainAction from './ButtonMainAction';
import FormInput from './FormInput';
import Footer from './Footer';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData() || [],
      pageArchived: false,
      pageFormInput: false,
      keyword: ''
    }

    this.onTogglePageChangHandler = this.onTogglePageChangHandler.bind(this);
    this.onArchivedNoteHandler = this.onArchivedNoteHandler.bind(this);
    this.onTogglePageFormInputChangeHandler = this.onTogglePageFormInputChangeHandler.bind(this);
    this.onCancelFormHandler = this.onCancelFormHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this)
  }

  onArchivedNoteHandler(id) {
    this.setState((prevState) => {
      const notes = prevState.notes.map((note) => {
        if (note.id === id) {
          return {
            ...note, archived: !note.archived
          }
        }
        return note
      });

      return {
        notes: notes
      }
    });
    console.log(this.state.notes)
  }

  getArchivedNotes() {
    if (this.state.pageArchived) {
      return this.state.notes.filter((note) => note.archived === true)
    } else {
      return this.state.notes.filter((note) => note.archived === false)
    }
  }

  onTogglePageChangHandler() {
    this.setState((prevState) => {
      if (prevState.pageArchived === this.state.pageArchived) {
        return {
          pageArchived: !this.state.pageArchived
        }
      }
    })
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword
      }
    })
  }

  onTogglePageFormInputChangeHandler() {
    this.setState((prevState) => {
      if (prevState.pageFormInput === this.state.pageFormInput) {
        return {
          pageFormInput: !this.state.pageFormInput
        }
      }
    })
  }

  onCancelFormHandler() {
    this.setState(() => {
      return {
        pageFormInput: !this.state.pageFormInput
      }
    })
  }

  onSubmitHandler({ title, body }) {
    const now = new Date()
    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createAt: showFormattedDate(now.toISOString())
    }
    console.log(newNote)
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          newNote
        ],
        pageFormInput: false
      }
    })
  }

  onDeleteNoteHandler(id) {
    this.setState(() => {
      const notes = this.state.notes.filter((note) => note.id !== id);

      return {
        notes
      }
    })
  }

  render() {
    const notesFiltered = this.getArchivedNotes();
    const notesResultQuery = notesFiltered.filter((note) => note.title.toLowerCase().includes(this.state.keyword.toLowerCase()));
    return (
      <>
        <header>
          <Navbar />
        </header>
        <main>
          <MainHeader onKeywordChange={this.onKeywordChangeHandler}/>

          {
            this.state.pageFormInput ? (
              <section className='input-section'>
                <h2>Buat Catatan Baru</h2>
                <FormInput onCancel={this.onCancelFormHandler} onSubmit={this.onSubmitHandler}/>
              </section>
            ) : (
              <section className='note-shelf'>
                <h2>{this.state.pageArchived ? 'Catatan Arsip' : 'Catatan Aktif'}</h2>
                {
                  notesResultQuery.length ? (
                    <NotesList notes={notesResultQuery} onArhived={this.onArchivedNoteHandler} onDelete={this.onDeleteNoteHandler} />
                  ) : (
                    <h2 className='not-available'>Tidak ada catatan</h2>
                  )
                }
              </section>
            )
          }
          <ButtonMainAction onToggleChangePage={this.onTogglePageChangHandler} onPageFormInput={this.onTogglePageFormInputChangeHandler} pageArchived={this.state.pageArchived}/>
        </main>

        <footer>
          <Footer />
        </footer>
      </>
    )
  }
}

export default NotesApp