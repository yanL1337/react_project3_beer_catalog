import Arrow from "./Arrow";
import NavBarFixed from "./NavBarFixed";

const BeerDetail = (props) => {
  return (
    <section className="beer">
      <img src={props.beer?.image_url} alt="" />
      <article className="beerInfos">
        <h2>{props.beer?.name}</h2>
        <h3>{props.beer?.tagline}</h3>
        <div className="infos">
          <p>First brewed: </p>
          <p>{props.beer?.first_brewed}</p>
        </div>
        <div className="infos">
          <p>Attenuation level: </p>
          <p>{props.beer?.attenuation_level}</p>
        </div>
        <p>{props.beer?.description}</p>
        <Arrow />
      </article>
      <NavBarFixed />
    </section>
  );
};

export default BeerDetail;
