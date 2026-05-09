import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/products";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Products() {
  const dispatch = useDispatch();
  const { state } = useContext(ThemeContext);

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error</h2>;

  return (
    <div
      style={{
        padding: "20px",
        background: state.dark ? "#111" : "#fff",
        color: state.dark ? "#fff" : "#000",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: state.grid ? "repeat(3,1fr)" : "1fr",
          gap: "15px",
        }}
      >
        {data.products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <img src={p.thumbnail} width="100%" />
            <h4>{p.title}</h4>
            <p>${p.price}</p>

            <button onClick={() => dispatch(addToCart(p))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}