import { Ladies } from "../dressWomen";
function DressWomen() {
  return (
    <>
      <div className="womenDress">
        {Ladies.map((dressLadies, index) => {
          {
            return (
              <div className="woman_container box">
                <img src={dressLadies.image} alt="" />
                <p>
                  {dressLadies.company}
                  <i class="bi bi-heart"></i>
                </p>
                <h3>{dressLadies.description}</h3>
                <h4>
                  {dressLadies.price}
                  <span>{dressLadies.postPrice}</span>{" "}
                  <h5>{dressLadies.offer}</h5>
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

export default DressWomen;
