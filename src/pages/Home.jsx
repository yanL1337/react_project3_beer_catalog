import { useState, useEffect } from "react";

import Select from "../components/Select";
import firstImg from "../assets/img/first.jpeg";
import secondImg from "../assets/img/random.jpeg";

const Home = () => {
  const url = "https://ih-beers-api2.herokuapp.com/beers/random";
  const [beers, setBeer] = useState();

  useEffect(() => {
    fetch(url)
      .then((req) => req.json())
      .then((data) => setBeer(data))
      .catch((err) => console.error("Yan nicht schon wieder", err));
  }, []);

  const values = [
    { text: "All Beers", pic: firstImg, to: "beers" },
    { text: "Random Beer", pic: secondImg, to: `beers/${beers?._id}` },
  ];
  return (
    <main>
      <Select items={values[0]} />
      <Select items={values[1]} />
    </main>
  );
};

export default Home;
