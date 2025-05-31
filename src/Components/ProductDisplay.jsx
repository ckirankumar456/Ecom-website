import { useDispatch, useSelector } from "react-redux";
import { SetClickedItem } from "./SelectSlice";
import { useState } from "react";
import { addToWishlist, removeFromWishlist } from "./WishlistSlice";

// import { Link } from "react-router-dom";
function ProductDisplay() {
  const dispatch = useDispatch();
  const selectProduct = useSelector((state) => state.selected.select);
  const wishlist = useSelector((state) => state.wishlist.items);

  const [heartedItems, setHeartedItems] = useState({});

  const products = selectProduct.product || [];
  function ClickById(Details) {
    dispatch(SetClickedItem(Details));
  }
  function toggleHeart(index) {
    setHeartedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  }

  const handleHeartClick = (item) => {
    const itemExists = wishlist.find(
      (wishlistItem) => wishlistItem.id === item.id
    );

    if (itemExists) {
      // Remove from wishlist
      dispatch(removeFromWishlist(item));
    } else {
      // Add to wishlist
      dispatch(addToWishlist(item));
    }
  };
  return (
    <div className="manShirts">
      {products.map((item, index) => {
        {
          return (
            // <Link to="/PriceDisplay" onClick={() => ClickById(item)}>
            <div className="man_container box" onClick={() => ClickById(item)}>
              <img src={item.image} alt="" />
              <p>
                {item.company}
                <i
                  className="bi"
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleHeart(index);
                    handleHeartClick(item);
                  }}
                >
                  {heartedItems[index] ? "❤️" : "🤍"}
                </i>
              </p>
              <h3>{item.description}</h3>
              <h4>
                ₹{item.price}
                <span>₹{item.pastPrice}</span> <h5>{item.offer}</h5>
              </h4>
              <p>free delivery</p>
            </div>
            // </Link>
          );
        }
      })}
    </div>
  );
}

export default ProductDisplay;
