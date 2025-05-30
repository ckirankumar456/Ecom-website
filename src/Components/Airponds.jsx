import { AirpondsData } from "../airpondsdata";
function Airponds() {
  return (
    <>
      <div className="manShirts">
        {AirpondsData.map((airponds, index) => {
          {
            return (
              <div className="man_container box">
                <img src={airponds.image} alt="" />
                <p>
                  {airponds.company}
                  <i class="bi bi-heart"></i>
                </p>
                <h3>{airponds.description}</h3>
                <h4>
                  {airponds.price}
                  <span>{airponds.pastPrice}</span> <h5>{airponds.offer}</h5>
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

export default Airponds;
