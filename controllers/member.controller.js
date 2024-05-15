import { getMembers, getMember, deleteMember, createMember, updateMember } from "../database.js";

export const allMembers = async (req, res) => {
    const members = await getMembers();
    console.log(members);
    res.end(JSON.stringify(members));
}

export const specificMember = async (req, res) => {
  const { id } = req.params;
  const member = await getMember(id);
  console.log(member);
  res.end(JSON.stringify(member));
};

export const removeMember = async (req, res) => {
  const { id } = req.params;
  const deletedMember = await deleteMember(id);
  console.log(deletedMember);
  res.status(204).send({
    status: "success",
    message: `member ${id} is deleted successfully`,
  });
};

export const addMember = async (req, res) => {
  console.log(req.body);
  const newMember = await createMember(
    req.body.Id,
    req.body.Name,
    req.body.National_Id,
    req.body.Phone_Number,
    req.body.Membership_from,
    req.body.Membership_to,
    req.body.Membership_cost,
    req.body.Status,
    req.body.Trainer_Id
  );

  res.status(201).send({
    status: "success",
    data: newMember,
  });
};

export const modifyMember = async (req, res) => {
  const modifiedMember = await updateMember(
    req.body.Name,
    req.body.National_Id,
    req.body.Phone_Number,
    req.body.Membership_from,
    req.body.Membership_to,
    req.body.Membership_cost,
    req.body.Status,
    req.body.Trainer_Id,
    req.body.Id
  );

  res.status(200).send({
    status: "success",
    data: modifiedMember,
  });
};