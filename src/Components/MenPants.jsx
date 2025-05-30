import { PantsData } from "../pantsdata";
function MenPants() {
  return (
    <>
      <div className="manShirts">
        {PantsData.map((pants, index) => {
          {
            return (
              <div className="man_container box">
                <img src={pants.image} alt="" />
                <p>
                  {pants.company} <i class="bi bi-heart"></i>
                </p>
                <h3>{pants.description}</h3>
                <h4>
                  {pants.price}
                  <span>{pants.pastPrice}</span> <h5>{pants.offer}</h5>
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

export default MenPants;
