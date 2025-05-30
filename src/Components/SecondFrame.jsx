function SecondFrame(props) {
  return (
    <>
      <div className="icon">
        <i class="bi bi-heart"></i>
      </div>
      <div className="second_container">
        <img src={props.image} alt="" />
        <p>{props.title}</p>
        <p>{props.cost}</p>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-half"></i> <br />
        <button className="btn">Buy</button>
      </div>
    </>
  );
}

export default SecondFrame;
