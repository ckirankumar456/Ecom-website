import { SandolsData } from "../sandolsdata";
function Sandols() {
  return (
    <>
      <div className="manShirts">
        {SandolsData.map((sandols, index) => {
          {
            return (
              <div className="man_container box">
                <img src={sandols.image} alt="" />
                <p>
                  {sandols.campany} <i class="bi bi-heart"></i>
                </p>
                <h3>{sandols.description}</h3>
                <h4>
                  {sandols.price}
                  <span>{sandols.pastPrice}</span> <h5>{sandols.offer}</h5>
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

export default Sandols;
