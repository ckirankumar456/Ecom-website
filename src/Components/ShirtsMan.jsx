// import { useEffect, useState } from "react";
import { Gents } from "../imagedata";
function ShirtsMan() {
  return (
    <>
      <div className="manShirts">
        {Gents.map((shirtMan, index) => {
          {
            return (
              <div className="man_container box">
                <img src={shirtMan.image} alt="" />
                <p>
                  {shirtMan.company} <i class="bi bi-heart"></i>
                </p>
                <h3>{shirtMan.description}</h3>
                <h4>
                  {shirtMan.price}
                  <span>{shirtMan.pastPrice}</span> <h5>{shirtMan.offer}</h5>
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

export default ShirtsMan;
