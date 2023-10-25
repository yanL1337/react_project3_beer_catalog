import { useEffect, useState } from "react";
import Beer from "../components/Beer";
import NavBarFixed from "../components/NavBarFixed";

const Overview = () => {
  const url = "https://ih-beers-api2.herokuapp.com/beers/";
  const [beers, setBeer] = useState();

  useEffect(() => {
    fetch(url)
      .then((req) => req.json())
      .then((data) => setBeer(data))
      .catch((err) => console.error("Yan nicht schon wieder", err));
  }, []);

  return (
    <section className="overview">
      {beers?.map((item, index) => (
        <Beer key={index} beer={item} />
      ))}
      <NavBarFixed />
    </section>
  );
};

export default Overview;
