import {
  Redirect,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import CardItem from "../../components/main/CardItem";
import CategoriesSlider from "../../components/main/CategoriesSlider";
import Pagination from "../../components/main/Pagination";

function Categories({ products, onBuy }) {
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();
  const queryParser = (searchString) => {
    if (!searchString) return {};
    return searchString
      .slice(1)
      .split("&")
      .reduce((queryparams, filter) => {
        const [key, value] = filter.split("=");
        queryparams[key] = value;
        return queryparams;
      }, {});
  };
  const queryObject = queryParser(location.search);
  const limit = 4;
  const currentCategory = match.params.category || "All";
  const currentPage = parseInt(queryObject.page) || 1;
  // const categories = Object.keys(
  //   products
  //     .map((product) => product.category)
  //     .reduce((unique, category) => {
  //       unique[category] = true;
  //       return unique;
  //     }, {})
  // );
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category.toLowerCase())),
  ];

  if (!categories.includes(currentCategory)) {
    return <Redirect to="/products" />;
  }

  console.log(match.params, location.search, currentCategory, products);
  const filteredProducts = products.filter(
    (item) =>
      item.category.toLowerCase() === currentCategory ||
      currentCategory === "All"
  );

  return (
    <>
      <CategoriesSlider
        selected={currentCategory}
        categories={categories}
        onSelect={(category) => {
          if (category === "All") {
            history.push("/products");
          } else {
            history.push(`/products/${category.toLowerCase()}`);
          }
        }}
        className="main__categories"
      />
      <div className="main__gallery">
        <h2>{currentCategory}</h2>
        <div className="main__cards">
          {filteredProducts
            .slice((currentPage - 1) * limit, currentPage * limit)
            .map((product) => (
              <CardItem
                key={product.id}
                {...product}
                className="main__card"
                onCartClick={() => onBuy(product)}
              />
            ))}
        </div>
        <Pagination
          total={filteredProducts.length}
          limit={limit}
          page={currentPage}
          onSelectPage={(pageNum) => {
            if (currentCategory === "All") {
              history.push(`/products?page=${pageNum}`);
            } else {
              history.push(`/products/${currentCategory}?page=${pageNum}`);
            }
          }}
          className="main__pagination"
        />
      </div>
    </>
  );
}

export default Categories;
