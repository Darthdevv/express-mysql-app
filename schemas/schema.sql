CREATE DATABASE gym_app;
USE gym_app;

CREATE TABLE trainer (
    Id INT PRIMARY KEY,
    Name VARCHAR(255),
    Duration_from DATE,
    Duration_to DATE
);

CREATE TABLE member (
    Id INT PRIMARY KEY,
    Name VARCHAR(255),
    National_Id VARCHAR(255),
    Phone_Number VARCHAR(50),
    Membership_from DATE,
    Membership_to DATE,
    Membership_cost DECIMAL(10, 2),
    Status ENUM('active', 'freeze'),
    Trainer_Id INT,
    FOREIGN KEY (Trainer_Id) REFERENCES trainer(Id)
);


INSERT INTO trainer (Id, Name, Duration_from, Duration_to)
VALUES
(1, 'John Smith', '2023-01-01', '2023-12-31'),
(2, 'Sara Lee', '2023-02-01', '2023-12-31'),
(3, 'Mark Davis', '2023-03-01', '2024-03-01');

INSERT INTO member (Id, Name, National_Id, Phone_Number, Membership_from, Membership_to, Membership_cost, Status, Trainer_Id)
VALUES
(1, 'Alice Johnson', '1234567890', '555-1234', '2023-05-01', '2024-04-30', 1200.00, 'active', 1),
(2, 'Bob White', '2345678901', '555-5678', '2023-05-01', '2024-04-30', 1100.00, 'freeze', 2),
(3, 'Charlie Brown', '3456789012', '555-8765', '2023-06-01', '2024-05-31', 1000.00, 'active', 1),
(4, 'Diana Prince', '4567890123', '555-4321', '2023-07-01', '2024-06-30', 1300.00, 'active', 3);



-- had to update foreign key to allow deleting members along with trainer

SELECT CONSTRAINT_NAME
FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE TABLE_NAME = 'member'
AND TABLE_SCHEMA = 'gym_app'
AND REFERENCED_TABLE_NAME = 'trainer';


ALTER TABLE member DROP FOREIGN KEY member_ibfk_1;

ALTER TABLE member
ADD CONSTRAINT fk_member_trainer
FOREIGN KEY (Trainer_Id) REFERENCES trainer(Id)
ON DELETE CASCADE
ON UPDATE CASCADE;