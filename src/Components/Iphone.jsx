import { iPhones } from "../iphones";
function Iphone() {
  return (
    <>
      <div className="womenDress">
        {iPhones.map((apple, index) => {
          {
            return (
              <div className="woman_container box">
                <img src={apple.image} alt="" />
                <p>
                  {apple.company}
                  <i class="bi bi-heart"></i>
                </p>
                <h3>{apple.description}</h3>
                <h4>
                  {apple.price}
                  <h5>{apple.internal}</h5>
                </h4>
                <p>free delivery</p>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default Iphone;
