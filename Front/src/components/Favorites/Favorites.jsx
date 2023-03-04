import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import Card from "../Cards/Card/Card";

export default function Favorites() {
  const myFavorites = useSelector((state) => state.myFavorites); // seleccionar el estado de redux
  const dispatch = useDispatch();
  const orderFav = (event) => {
    dispatch(orderCards(event.target.value));
  };
  const filterFav = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="selector">
        <select name="order" onChange={orderFav}>
          <option disabled>Order by</option>
          <option value="ascendente">Ascendente</option>
          <option value="descendente">Descendente</option>
        </select>
      </div>

      <div className="selector">
        <select name="filter" onChange={filterFav}>
          <option disabled>Filter by gender</option>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>

      {myFavorites.map((elem) => (
        <Card
          name={elem.name}
          species={elem.species}
          gender={elem.gender}
          image={elem.image}
          id={elem.id}
          onClose={() => alert("Para eliminar toca el corazon")}
          key={elem.id}
        />
      ))}
    </div>
  );
}
