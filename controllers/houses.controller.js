import * as housesRepo from "../repos/houses.repo.js";

export const getAllHousesController = async (req, res) => {
    try {
        const allHouses = await housesRepo.getAllHouses();

        res.status(200).json(allHouses);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

export const getHouseByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const house = await housesRepo.getHouseById(id);

        if (!house) {
            return res.status(404).json({
                error: "House not found"
            });
        }

        res.status(200).json(house);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};