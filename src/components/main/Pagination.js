import "./Pagination.css";

function Pagination({ className, total, limit, page, onSelectPage }) {
  const pages = Math.ceil(total / limit);
  const listItems = [];

  if (pages > 1 && page > 1) {
    listItems.push(
      <li key="left" onClick={() => onSelectPage(page - 1)}>
        <i className="ri-arrow-left-s-line"></i>
      </li>
    );
  } else {
    listItems.push(<li key="left" />);
  }
  for (let i = 1; i <= pages; i++) {
    const className = i === page ? "selected" : "";
    listItems.push(
      <li key={i} onClick={() => onSelectPage(i)} className={className}>
        {i}
      </li>
    );
  }
  if (pages > 1 && page < pages) {
    listItems.push(
      <li key="right" onClick={() => onSelectPage(page + 1)}>
        <i className="ri-arrow-right-s-line"></i>
      </li>
    );
  } else {
    listItems.push(<li key="right" />);
  }
  return (
    <div className={[className, "pagination"].join(" ")}>
      <ul>{listItems}</ul>
    </div>
  );
}

export default Pagination;
