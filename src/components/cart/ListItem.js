import "./ListItem.css";

function ListItem({ id, done, description, category, onToggle, onTrashClick }) {
  return (
    <div className="main-list__item">
      <div
        className={[
          "main-list__item-content",
          done ? "main-list__item-content--done" : "",
        ].join(" ")}
      >
        <input
          checked={done}
          onChange={(e) => {
            onToggle(id, !done);
          }}
          type="checkbox"
        />
        <span>{description}</span>
      </div>
      <div className="main-list__item-options">
        <span className="tag">{category}</span>
        {done && (
          <a
            onClick={(e) => {
              e.preventDefault();
              onTrashClick(id);
            }}
            href="#delete"
          >
            <i className="ri-delete-bin-line"></i>
          </a>
        )}
      </div>
    </div>
  );
}

export default ListItem;
