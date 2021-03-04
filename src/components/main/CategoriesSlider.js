import "./CategoriesSlider.css";
function CategoriesSlider({ className, categories, selected, onSelect }) {
  return (
    <div className={[className, "categories-container"].join(" ")}>
      <ul className="categories-list">
        {categories.map((category) => {
          const selectedCategory = selected || "All";
          const className =
            category.toLowerCase() === selectedCategory.toLowerCase()
              ? "selected"
              : "";
          return (
            <li
              key={category}
              onClick={() => onSelect(category)}
              className={className}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CategoriesSlider;
