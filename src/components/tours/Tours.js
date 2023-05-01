



function Tours(props) {

    return (
      <div>
        {props.DATA1.map((tour) => (
          <div key={tour.id}>
            <h2>{tour.name}</h2>
            <img src={tour.image} alt={tour.name} />
          </div>
        ))}
      </div>
    );
  }
  export default Tours;
