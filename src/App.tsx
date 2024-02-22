import { loadProducts } from "./store/slice/productsSlice";
import { useDispatch } from "react-redux";
import { RootDispatch } from "./store/store";
import ProductList from "./components/ProductList/ProductList";

function App() {

  const dispatch = useDispatch<RootDispatch>();

  return (
    <div>
      <button onClick={() => dispatch(loadProducts())}>download!</button>
      <ProductList/>
    </div>
  );
}

export default App;
