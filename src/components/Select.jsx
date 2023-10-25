import { Link } from "react-router-dom";

const Select = (props) => {
  return (
    <section>
      <article>
        <img src={props.items.pic} alt="" />
        <Link to={`/${props.items.to}`}>{props.items.text}</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maxime,
          reiciendis corrupti consectetur ad, quod quo amet laboriosam
          distinctio sed quibusdam ex nemo, error repellendus cum fugiat
          accusamus ipsam laborum.
        </p>
      </article>
    </section>
  );
};

export default Select;
