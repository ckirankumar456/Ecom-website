import { useDispatch, useSelector } from "react-redux";
import { SelectedAddtoCart } from "./AddToCartSlice";
import { useState, useEffect } from "react";
import { RemoveFromCart } from "./AddToCartSlice";

function PriceDisplay() {
  const dispatch = useDispatch();
  const clickedItem = useSelector((state) => state.selected.clickedItem);
  const cartItems = useSelector((state) => state.addtocart.addSelected);
  const [addedToCart, setAddedToCart] = useState(false);
  const [showCartItems, setShowCartItems] = useState(false);
  useEffect(() => {
    setAddedToCart(false);
    setShowCartItems(false);
  }, [clickedItem]);
  if (!clickedItem) return null;
  function handleAddToCart() {
    if (!addedToCart) {
      dispatch(SelectedAddtoCart(clickedItem));
      setAddedToCart(true);
    }
  }
  function handleGoToCart() {
    setShowCartItems(true);
  }
  function handleDeleteItems(item) {
    dispatch(RemoveFromCart(item));
  }
  return (
    <>
      <div className="price_Details">
        <div className="detail_img">
          <img src={clickedItem.image} alt="Product" />
          <i class="bi bi-heart"></i>
          <br />
          <div className="button_group">
            <button
              id="btn2"
              onClick={addedToCart ? handleGoToCart : handleAddToCart}
            >
              <i class="fa-solid fa-cart-shopping"></i>
              {addedToCart ? "Go to Cart" : "Add Cart"}
            </button>
            <button id="btn1">
              <i class="fa-solid fa-bolt-lightning"></i>
              Buy Now
            </button>
          </div>
        </div>
        <div>
          <p>{clickedItem.company}</p>
          <h3>{clickedItem.description}</h3>
          <h4>
            ₹{clickedItem.price}&nbsp;&nbsp;
            <span>₹{clickedItem.pastPrice}</span>&nbsp;&nbsp;
            <h5> {clickedItem.offer}</h5>
          </h4>
          <div className="first_container">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-half"></i>
          </div>
        </div>
      </div>

      {showCartItems && (
        <div className="cart_items_container">
          <div className="cart_items_list">
            {cartItems.map((item, index) => (
              <div key={index} className="cart_item_card">
                <img src={item.image} alt={item.description} width="80" />
                <div>
                  <p>{item.description}</p>
                  <strong>₹{item.price}</strong>

                  <div className="btns">
                    <button id="buybtn">Buy</button>
                    <button
                      id="deletebtn"
                      onClick={() => handleDeleteItems(item)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default PriceDisplay;
