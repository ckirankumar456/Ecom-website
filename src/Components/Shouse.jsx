import { Shoueses } from "../shouse";
function Shouse() {
  return (
    <>
      <div className="manShirts">
        {Shoueses.map((shouse, index) => {
          {
            return (
              <div className="man_container box">
                <img src={shouse.image} alt="" />
                <p>
                  {shouse.company}
                  <i class="bi bi-heart"></i>
                </p>
                <h3>{shouse.description}</h3>
                <h4>
                  {shouse.price}
                  <span>{shouse.pastPrice}</span> <h5>{shouse.offer}</h5>
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

export default Shouse;
