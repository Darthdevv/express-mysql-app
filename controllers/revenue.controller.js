import { getRevenues, getTrainerRevenues } from "../database.js";


export const allRevenues = async (req, res) => {
  const revenues = await getRevenues();
  console.log(revenues);
  res.end(JSON.stringify(revenues));
};


export const trainerRevenues = async (req, res) => {
  const { id } = req.params;
  const trainerRevenues = await getTrainerRevenues(id);
  console.log(trainerRevenues);
  res.end(JSON.stringify(trainerRevenues));
}