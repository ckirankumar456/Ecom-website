import { useDispatch } from "react-redux";
import { setProducts } from "./ProductSlice";
import { OnePluses } from "../OnePlus";

const products = {
  onePlusData: { products: OnePluses, id: "onePlus", name: "OnePlus" },
};

const DisComponent = () => {
  const dispatch = useDispatch();

  const handleStoreProducts = () => {
    dispatch(setProducts(products));
  };

  return <button onClick={handleStoreProducts}>Store Products</button>;
};

export default DisComponent;
