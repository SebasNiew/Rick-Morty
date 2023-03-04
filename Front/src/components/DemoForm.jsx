import React, { useState } from "react";

// Este es el Form con inputs dinamicos que armamos en el README.md de la teoria.

function DinamicInputs() {
  const modeloFamiliar = { nombre: "" };
  const [familiar, setFamiliar] = useState([{ ...modeloFamiliar }]);

  const [persona, setPersona] = useState({
    nombre: "",
    mail: "",
  });

  const [errors, setErrors] = useState({});

  const agregaFamiliar = () => {
    setFamiliar([...familiar, persona]);
    console.log(familiar);
  };

  const handlePersonaChange = (e) => {
    console.log({ ...persona, [e.target.name]: e.target.value });

    if (e.target.value.length < 3) {
      if (
        e.target.name === "mail" &&
        !/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(e.target.value)
      ) {
        // esta mal :(
        setErrors({ ...errors, [e.target.name]: "Debe ser un mail" });
      }
      setErrors({ [e.target.name]: "Debe contener mas de 3 letras" });
      // {nombre: "Debe contener mas de 3 letras"}
      setPersona({
        ...persona,

        [e.target.name]: e.target.value,
        // "nombre" : "35 cé"

        // Acceso > obj["email"] y obj.email
        // Escritura > obj.email = "example@mail.com" y obj["email"] = "example"

        // Crearlo > { name: "Her", email : "example@mail.com"  }
      });
    } else {
      setPersona({
        ...persona,

        [e.target.name]: e.target.value,
        // "nombre" : "35 cé"

        // Acceso > obj["email"] y obj.email
        // Escritura > obj.email = "example@mail.com" y obj["email"] = "example"

        // Crearlo > { name: "Her", email : "example@mail.com"  }
      });
      setErrors({});
    }
  };

  const handleFamiliarChange = (e) => {
    const familiares = [...familiar];
    console.log(familiares[e.target.id][e.target.dataset.name]);
    familiares[e.target.id][e.target.dataset.name] = e.target.value;
    setFamiliar(familiares);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(familiar);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        name="nombre"
        value={persona.nombre}
        onChange={handlePersonaChange}
      />
      {errors.nombre && <span>{errors.nombre}</span>}
      <label htmlFor="nombre">Mail:</label>
      <input
        type="text"
        name="mail"
        value={persona.mail}
        onChange={handlePersonaChange}
      />
      {errors.mail && <span>{errors.mail}</span>}

      <input
        type="button"
        value="Agrega un Familiar"
        onClick={agregaFamiliar}
        disabled={errors.nombre ? true : false}
      />
      {familiar.map((el, i) => (
        <div key={`persona-${i}`}>
          <label htmlFor={`nombre-${i}`}>{`Familiar #${i + 1}`}</label>
          <input
            type="text"
            name={`nombre-${i}`}
            id={i}
            data-name="nombre"
            value={el.nombre}
            onChange={handleFamiliarChange}
          />
        </div>
      ))}
      <input type="submit" value="Submit" />
    </form>
  );
}

export default DinamicInputs;
