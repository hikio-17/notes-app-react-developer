import React from 'react';

class FormInput extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         title: '',
         body: '',
      }

      this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
      this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
      this.onSubmitForm = this.onSubmitForm.bind(this)
   }

   onTitleChangeHandler(event) {
      const title = event.target.value;
      if (title.length <= 50) {
         this.setState(() => {
            return {
               title
            }
         })
      }
   }

   onBodyChangeHandler(event) {
      this.setState(() => {
         return {
            body: event.target.value
         }
      })
   }

   onSubmitForm(event) {
      event.preventDefault()
      this.props.onSubmit({ 
         title: this.state.title,
         body: this.state.body
      })
   }

   render() {
      return (
         <form className="input-note" onSubmit={this.onSubmitForm}>
          <div className="input">
            <label>Title </label>
            <input id="noteTitle" type="text" required value={this.state.title} onChange={this.onTitleChangeHandler} />
            <span id='countInputTitle' style={this.state.title.length >= 40 ? { color: 'red'} : { color: 'white'}}>Sisa karakter: {50 - this.state.title.length}</span>
          </div>
          <div className="input">
            <label>Description</label>
            <textarea id="noteBody" type="text" required value={this.state.body} onChange={this.onBodyChangeHandler} />
          </div>
          <div className="formAction">
            <button id="noteSubmit" type="submit">Tambah Buku</button>
            <button id="noteCancel" onClick={this.props.onCancel}>Cancel</button>
          </div>
        </form>
      )
   }
}

export default FormInput;