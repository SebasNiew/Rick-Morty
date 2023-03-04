import Card from "./Card/Card";
import React from "react";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters, onClose } = props; // props.characters y props.algo

  return (
    <div className={styles.container}>
      {characters ? (
        characters.map((element) => (
          <Card
            name={element.name}
            species={element.species}
            gender={element.gender}
            image={element.image}
            onClose={() => onClose(element.id)}
            key={element.id}
            id={element.id} 
          />
        ))
      ) : (
        <h3>No hay personajes</h3>
      )}
    </div>
  );
}

// characters > [{}, {}]
//                   e

// const params = useParams();
// console.log("params > ", params);

// const navigate = useNavigate();
// console.log("navigate>", navigate);
// var isLogged = false;

// React.useEffect(() => {
//   if (!isLogged) {
//     // si NO esta logueado
//     navigate("/about");
//   } else {
//     // si esta logueado
//     navigate("/home");
//   }
// }, [isLogged]);
