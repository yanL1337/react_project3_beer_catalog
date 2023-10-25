import { Link } from "react-router-dom";

const Beer = (props) => {
  return (
    <article>
      <img src={props.beer.image_url} alt="" />
      <div className="content">
        <h2>{props.beer.name}</h2>
        <h3>{props.beer.tagline}</h3>
        <p>Created by: {props.beer.name}</p>
        <Link to={`/beers/${props.beer._id}`}>Details</Link>
      </div>
    </article>
  );
};

export default Beer;
