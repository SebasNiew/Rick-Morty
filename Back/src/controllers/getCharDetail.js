const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = async (req, res) => {
  const { detailId } = req.params;

  if (detailId) {
    try {
      const response = await axios(URL + detailId);
      const character = {
        id: response.data.id,
        name: response.data.name,
        species: response.data.species,
        image: response.data.image,
        gender: response.data.gender,
        status: response.data.status,
        origin: response.data.origin.name,
      };
      return res.status(200).json(character);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } else {
    return res.status(500).send("Debes proveer un id por parametro");
  }
};

module.exports = { getCharDetail };

// const character = {
//   image: data.image,
//   name: data.name,
//   gender: data.gender,
//   species: data.species,
//   status: data.status,
//   origin: data.origin.name,
//   id: data.id,
// };
