INSERT INTO institutions (institution, location)
VALUES
('Laval','Quebec City'),
('UBC','Vancouver'),
('UofT','Toronto'),
('UofA','Edmonton');

INSERT INTO users (name, email, password, picture, mentor, institution_id, bio, last_active)
VALUES
('Alison Becker', 'alibec@gmail.com', 'myPassword', 'client/src/components/images/alison.png', false, NULL, 'JS, React', '2022-01-15'),
('Malia Blake', '@mabla.com', 'myPassword2', 'https://i.postimg.cc/SQDLB3NW/student2.png', true, 1,'Ruby, python', '2022-01-16'),
('Luka Modric', 'luka@lukam.com', 'password123', 'https://i.postimg.cc/vZ1vLhy5/nana.png', false, NULL,'i like plants', '2022-01-15'),
('Mike McClean', 'mikey@mikestesting.com', 'myP@22w0rd', 'https://i.postimg.cc/rmGjRpkb/Josh-Lee.png', true, 2,'Mathematics, Chemistry and Python', '2021-01-15'),
('May Knotwork', 'may@break.com', 'testing', 'https://i.postimg.cc/YCXJjb3g/alison.png', true, 3,'C language', '2022-01-14'),
('Hope Allswell', 'hope@fully.com', 'workinghard', 'https://images.unsplash.com/photo-1517256673644-36ad11246d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', false, NULL,'JS, React', '2022-01-09'),
('John Smith', 'a@name.com', 'johnsmith', 'https://i.postimg.cc/DzN0QQ24/unsplash-CTd5-C7p-8.png', true, 4,'marine biology', '2022-01-15');

INSERT INTO specializations (id, name, description)
VALUES 
(1, 'computer science', 'any languages'),
(2, 'biology', 'biology'),
(3, 'music', 'theory and practical'),
(4, 'math', 'any level');

INSERT INTO users_specializations (user_id, specialization_id)
VALUES
(1, 1),
(1, 3),
(2, 1),
(3, 1),
(4, 2),
(5, 1),
(6, 2),
(6, 3),
(7, 3);