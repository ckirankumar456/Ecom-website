import { T_Shirt } from "../tShirts";
function T_Shirts() {
  return (
    <>
      <div className="manShirts">
        {T_Shirt.map((tshirt, index) => {
          {
            return (
              <div className="man_container box">
                <img src={tshirt.image} alt="" />
                <p>
                  {tshirt.campany}
                  <i class="bi bi-heart"></i>
                </p>
                <h3>{tshirt.description}</h3>
                <h4>
                  {tshirt.price}
                  <span>{tshirt.pastPrice}</span> <h5>{tshirt.offer}</h5>
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

export default T_Shirts;
