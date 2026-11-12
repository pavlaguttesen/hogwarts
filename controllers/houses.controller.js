import * as housesRepository from "../repositories/houses.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";

export const getAllHousesController = async (req, res) => {
  const allHouses = await housesRepository.getAllHouses();

  if (allHouses.length === 0) {
    throw new HTTPError(404, "No houses found");
  }

  res.status(200).json(allHouses);
};

export const getHouseByIdController = async (req, res) => {
  const { id } = req.params;
  const house = await housesRepository.getHouseById(id);

  if (!house) {
    throw new HTTPError(404, "House not found");
  }

  res.status(200).json(house);
};
