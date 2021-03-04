import ListItem from "./ListItem";

function List({ dataList, showBy, orderBy, onToggle, onDelete }) {
  return (
    <section className="main-list">
      {dataList
        .filter((item) => {
          switch (showBy) {
            case "pending":
              return !item.done;
            case "completed":
              return item.done;
            default:
              return true;
          }
        })
        .sort((a, b) => (orderBy ? a[orderBy].localeCompare(b[orderBy]) : 0))
        .map((item) => (
          <ListItem
            key={item.id}
            onToggle={onToggle}
            onTrashClick={onDelete}
            {...item}
          />
          //React.createItem(<div />, {...item, key: item.id})
        ))}
    </section>
  );
}

export default List;
