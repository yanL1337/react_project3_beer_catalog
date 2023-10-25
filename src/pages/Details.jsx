import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BeerDetail from "../components/BeerDetail";

const Details = () => {
  const url = "https://ih-beers-api2.herokuapp.com/beers/";
  const [beers, setBeer] = useState([]);
  const beerID = useParams();

  useEffect(() => {
    fetch(url)
      .then((req) => req.json())
      .then((data) => setBeer(data))
      .catch((err) => console.error("Yan nicht schon wieder", err));
  }, []);

  const beer = beers?.filter((item) => item._id.toString() === beerID.id)[0];

  return <BeerDetail beer={beer} />;
};

export default Details;
