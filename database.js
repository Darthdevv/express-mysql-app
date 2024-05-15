import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();


const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user:  process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise();


export async function getTrainers() {
  const [trainerRows] = await pool.query("SELECT * FROM trainer");

  return trainerRows;
}

export async function getMembers() {
  const [memberRows] = await pool.query("SELECT * FROM member");

  return memberRows;
}

export async function getTrainer(Id) {
  const [trainerRows] = await pool.query("SELECT * FROM trainer WHERE Id = ?", Id);

  return trainerRows[0];
}

export async function getMember(Id) {
  const [memberRows] = await pool.query(
    "SELECT * FROM member WHERE Id = ?",
    Id
  );

  return memberRows[0];
}

export async function createTrainer(Id, Name, Duration_from, Duration_to) {
  const [result] = await pool.query(
    "INSERT INTO trainer (Id, Name, Duration_from, Duration_to) VALUES (?, ?, ?, ?);",
    [Id, Name, Duration_from, Duration_to]
  );
  return result;
}

export async function createMember(Id, Name, National_Id,Phone_Number,Membership_from,Membership_to,Membership_cost,Status,Trainer_Id) {
  const [result] = await pool.query(
    "INSERT INTO member (Id, Name, National_Id,Phone_Number,Membership_from,Membership_to,Membership_cost,Status,Trainer_Id) VALUES (?,?,?,?,?,?,?,?,?)",
    [Id, Name, National_Id,Phone_Number,Membership_from,Membership_to,Membership_cost,Status,Trainer_Id]
  );
  return result;
}

export async function deleteTrainer(Id) {
  const [result] = await pool.query(
      `DELETE FROM trainer WHERE Id = ?`,Id);
  return result;
}

export async function deleteMember(Id) {
  const [result] = await pool.query("DELETE FROM member WHERE Id  = ?", Id);
  return result;
}

export async function updateTrainer(Name, Duration_from, Duration_to, Id) {
  const [result] = await pool.query(
    "UPDATE trainer SET Name = ?, Duration_from = ?, Duration_to = ? WHERE Id = ?",
    [Name, Duration_from, Duration_to, Id]
  );

  return result;
}

export async function updateMember(Name, National_Id,Phone_Number,Membership_from,Membership_to,Membership_cost,Status,Trainer_Id, Id) {
  const [result] = await pool.query(
    "UPDATE member SET Name = ?,  National_Id =?, Phone_Number = ?, Membership_from = ?, Membership_to = ?,Membership_cost = ?,Status = ?,Trainer_Id = ? WHERE Id = ?",
    [Name, National_Id,Phone_Number,Membership_from,Membership_to,Membership_cost,Status,Trainer_Id,Id]
  );

  return result;
}

export async function getRevenues(){
  const [rows] = await pool.query(
    "SELECT SUM(Membership_cost) AS TotalRevenues FROM member"
  );

  return rows[0];
}

export async function getTrainerRevenues(Trainer_id) {
  const [rows] = await pool.query(
    "SELECT SUM(Membership_cost) AS TotalTrainerRevenues FROM member WHERE Trainer_id = ?", Trainer_id
  );

  return rows[0];
}


// const trainers = await getTrainers();
// console.log(trainers);

// const members = await getMembers();
// console.log(members);

// const trainer = await getTrainer(2);
// console.log(trainer);

// const member = await getMember(2);
// console.log(member);

// const revenues = await getRevenues();
// console.log(revenues);

// const trainerRevenues = await getTrainerRevenues(4);
// console.log(trainerRevenues);

// const newTrainer = await createTrainer(4, 'Bradely Martin', '2023-05-01', '2024-09-01');
// console.log(newTrainer);

// const deletedTrainer = await deleteTrainer(4);
// console.log(deletedTrainer);

// const updatedTrainer = await updateTrainer('John Doe', '1999-05-01', '2000-05-01', 1);
// console.log(updatedTrainer);

// const deletedMember = await deleteMember(4);
// console.log(deletedMember);

// const newMember = await createMember(4, 'Willy Wonka', '1234567899', '222-1234', '2022-02-02', '2023-03-30', 2222.00, 'active', 4);
// console.log(newMember);

// const updatedMember = await updateMember('Walter White', '1224466699', '2226969', '1977-01-01', '1978-01-01', '1599.00','freeze',4,2);
// console.log(updatedMember);