import { LaptopData } from "../laptopdata";
function Laptops() {
  return (
    <>
      <div className="manShirts">
        {LaptopData.map((laptops, index) => {
          {
            return (
              <div className="man_container box">
                <img src={laptops.image} alt="" />
                <p>
                  {laptops.company} <i class="bi bi-heart"></i>
                </p>
                <h3>{laptops.description}</h3>
                <h4>
                  {laptops.price}
                  <span>{laptops.pastPrice}</span> <h5>{laptops.offer}</h5>
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

export default Laptops;
