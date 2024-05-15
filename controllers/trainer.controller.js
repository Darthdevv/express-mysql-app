import { getTrainers, getTrainer, deleteTrainer, createTrainer, updateTrainer } from "../database.js";


export const allTrainers = async (req, res) => {
    const trainers = await getTrainers();
    console.log(trainers);
    res.end(JSON.stringify(trainers));
};


export const specificTrainer = async (req, res) => {
  const { id } = req.params;
  const trainer = await getTrainer(id);
  console.log(trainer);
  res.end(JSON.stringify(trainer));
};

export const removeTrainer = async (req, res) => {
  const { id } = req.params;
  const deletedTrainer = await deleteTrainer(id);
  console.log(deletedTrainer);
  res.status(204).send({
    status: "success",
    message: `trainer ${id} is deleted successfully`,
  });
}

export const addTrainer = async (req, res) => {
  console.log(req.body);
    const newTrainer = await createTrainer(
      req.body.Id,
      req.body.Name,
      req.body.Duration_from,
      req.body.Duration_to,
    );

    res.status(201).send({
      status: "success",
      data: newTrainer,
    });
}

export const modifyTrainer = async (req, res) => {
  const modifiedTrainer = await updateTrainer(
    req.body.Name,
    req.body.Duration_from,
    req.body.Duration_to,
    req.body.Id
  );

  res.status(200).send({
    status: "success",
    data: modifiedTrainer,
  });
}