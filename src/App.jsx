import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./redux/cartSlice";

const products = [
  {
    id: 1,
    title: "iPhone 15",
    price: 1200,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.qgZdkEqX3dlNg9Awu95eYwHaD8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 2,
    title: "Gaming Laptop",
    price: 2200,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.JdqSG1esSQ1KtYsKF_SWxQHaHa?r=0&w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 3,
    title: "Headphones",
    price: 250,
    image:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp",
  },
  {
    id: 4,
    title: "Smart Watch",
    price: 400,
    image:
      "https://tse3.mm.bing.net/th/id/OIP.q9051_A_ccfIrf48-gZ4CgHaEJ?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 5,
    title: "Perfume",
    price: 80,
    image:
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
  },
  {
    id: 6,
    title: "Sunglasses",
    price: 150,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.MAO1LERQOeEp6z_BB3V-vwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 7,
    title: "Handbag",
    price: 320,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.HBE6RmWw0smnZ9sKnZ3VuAHaFj?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 8,
    title: "Shoes",
    price: 180,
    image:
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/1.webp",
  },
  {
    id: 9,
    title: "Lipstick",
    price: 45,
    image:
      "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp",
  },
  {
    id: 10,
    title: "Synthetic Hair",
    price: 300,
    image:
      "https://tse3.mm.bing.net/th/id/OIP.VUkmlkassazr3q1HbMn8uwHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

export default function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        fontFamily: "Arial",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          background: "linear-gradient(90deg,#4f46e5,#7c3aed)",
          color: "white",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ margin: 0 }}>🛍 Product Store</h1>

        <div
          style={{
            background: "white",
            color: "#333",
            padding: "10px 15px",
            borderRadius: "30px",
            fontWeight: "bold",
          }}
        >
          Cart: {cart.length}
        </div>
      </div>

      {/* PRODUCTS */}
      <div style={{ padding: "30px" }}>
        <h2 style={{ marginBottom: "20px" }}>Featured Products</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                background: "white",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                transition: "0.3s",
              }}
            >
              <img
                src={p.image}
                alt={p.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "15px" }}>
                <h3>{p.title}</h3>

                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#4f46e5",
                  }}
                >
                  ${p.price}
                </p>

                <button
                  onClick={() => dispatch(addToCart(p))}
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "#4f46e5",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CART */}
        <div
          style={{
            marginTop: "40px",
            background: "white",
            padding: "20px",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h2>🛒 Shopping Cart</h2>

          {cart.length === 0 && (
            <p style={{ color: "#777" }}>Your cart is empty</p>
          )}

          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 0",
                borderBottom: "1px solid #eee",
              }}
            >
              <div>
                <h4 style={{ margin: 0 }}>{item.title}</h4>
                <p style={{ margin: 0, color: "#666" }}>${item.price}</p>
              </div>

              <button
                onClick={() => dispatch(removeFromCart(index))}
                style={{
                  background: "#ef4444",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <h3 style={{ marginTop: "20px" }}>
            Total: <span style={{ color: "#4f46e5" }}>${total}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}