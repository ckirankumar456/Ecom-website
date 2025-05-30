import { WatchesData } from "../watchesdata";
function Watches() {
  return (
    <>
      <div className="manShirts">
        {WatchesData.map((watch, index) => {
          {
            return (
              <div className="man_container box">
                <img src={watch.image} alt="" />
                <p>
                  {watch.company} <i class="bi bi-heart"></i>
                </p>
                <h3>{watch.description}</h3>
                <h4>
                  {watch.price}
                  <span>{watch.pastPrice}</span> <h5>{watch.offer}</h5>
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

export default Watches;
