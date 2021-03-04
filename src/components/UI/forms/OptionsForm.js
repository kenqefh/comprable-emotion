import "./OptionsForm.css";

function OptionsForm({
  showBySelected,
  setShowBy,
  orderBySelected,
  setOrderBy,
}) {
  return (
    <form className="options-form">
      <div className="options-form__container">
        <div className="options-form__option">
          <span>Show</span>
          <div>
            <input
              onChange={() => setShowBy("pending")}
              checked={showBySelected === "pending"}
              value="pending"
              name="show"
              type="radio"
            />
            <label>Pending</label>
            <input
              onChange={() => setShowBy("completed")}
              checked={showBySelected === "completed"}
              value="completed"
              name="show"
              type="radio"
            />
            <label>Completed</label>
            <input
              onChange={() => setShowBy("all")}
              checked={showBySelected === "all"}
              value="all"
              name="show"
              type="radio"
            />
            <label>All</label>
          </div>
        </div>
        <div className="options-form__option">
          <span>Order by</span>
          <div>
            <input
              onChange={() => setOrderBy("description")}
              checked={orderBySelected === "description"}
              value="description"
              name="orderby"
              type="radio"
            />
            <label>Description</label>
            <input
              onChange={() => setOrderBy("category")}
              checked={orderBySelected === "category"}
              value="category"
              name="orderby"
              type="radio"
            />
            <label>Category</label>
          </div>
        </div>
      </div>
    </form>
  );
}

export default OptionsForm;
