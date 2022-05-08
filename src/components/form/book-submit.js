import React from 'react';

class Form extends React.PureComponent {
  render() {
    return (
      <>
        <h2>Add New Book</h2>
        <form action="#">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="author"
              placeholder="Author"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Book
          </button>
        </form>
      </>
    );
  }
}

export default Form;
