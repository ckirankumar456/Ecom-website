import { OnePluses } from "../OnePlus";
function OnePlus() {
  return (
    <>
      <div className="womenDress">
        {OnePluses.map((onePlus, index) => {
          {
            return (
              <div className="woman_container box">
                <img src={onePlus.image} alt="" />
                <p>
                  {onePlus.company} <i class="bi bi-heart"></i>
                </p>
                <h3>{onePlus.description}</h3>
                <h4>
                  {onePlus.price}
                  <span>{onePlus.postPrice}</span> <h5>{onePlus.offer}</h5>
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

export default OnePlus;
