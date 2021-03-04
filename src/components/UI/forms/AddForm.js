import "./AddForm.css";

function AddForm({ onCancel, onSubmit }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const { description, category } = e.target;
        onSubmit(description.value, category.value);
      }}
      className="add-form"
    >
      <div className="add-form__container">
        <div className="add-form__field">
          <label>Description</label>
          <input name="description" placeholder="Do my homework" />
        </div>
        <div className="add-form__field">
          <label>Category</label>
          <input name="category" placeholder="Home" />
        </div>
        <footer className="add-form__footer">
          <a
            onClick={(e) => {
              e.preventDefault();
              onCancel();
            }}
            className="link"
            href="#cancel"
          >
            Cancel
          </a>
          <button type="submit" className="link">
            Add new Todo
          </button>
        </footer>
      </div>
    </form>
  );
}

export default AddForm;
