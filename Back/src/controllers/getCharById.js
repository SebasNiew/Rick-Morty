const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

async function getCharById(req, res) {
  const { id } = req.params; // {id: 12}
  // "https://rickandmortyapi.com/api/character/12"

  try {
    const response = await axios(URL + id);
    const character = {
      id: response.data.id,
      name: response.data.name,
      species: response.data.species,
      image: response.data.image,
      gender: response.data.gender,
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).send(error.message);
  }

  // axios(URL + id).then(
  //   (response) => {
  //     const character = {
  //       id: response.data.id,
  //       name: response.data.name,
  //       species: response.data.species,
  //       image: response.data.image,
  //       gender: response.data.gender,
  //     };
  //     res.status(200).json(character);
  //   },
  //   (err) => {
  //     res.status(500).send(err.message);
  //   }
  // );
}

module.exports = { getCharById };
