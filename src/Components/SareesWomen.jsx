import { LadiesSarees } from "../ladiesSarees";
function SareesWomen() {
  return (
    <>
      <div className="womenDress">
        {LadiesSarees.map((womenSarees, index) => {
          {
            return (
              <div className="woman_container box">
                <img src={womenSarees.image} alt="" />
                <p>
                  {womenSarees.company} <i class="bi bi-heart"></i>
                </p>
                <h3>{womenSarees.description}</h3>
                <h4>
                  {womenSarees.price}
                  <span>{womenSarees.postPrice}</span>{" "}
                  <h5>{womenSarees.offer}</h5>
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

export default SareesWomen;
