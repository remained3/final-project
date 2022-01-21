INSERT INTO institutions (name, location)
VALUES
('Laval','Quebec City'),
('UBC','Vancouver'),
('UofT','Toronto'),
('UofA','Edmonton');

INSERT INTO users (name, email, password, picture, mentor, institution_id, bio, last_active)
VALUES
('Anne', 'anne@example.com', 'myPassword', 'https://unsplash.com/photos/Fsgzm8N0hIY', false, NULL, 'JS, React', '2022-01-15'),
('John Mayer', 'john@mayer.com', 'myPassword2', 'https://unsplash.com/photos/c_GmwfHBDzk', true, 1,'Ruby, python', '2022-01-16'),
('Luka Modric', 'luka@lukam.com', 'password123', 'https://unsplash.com/photos/jmURdhtm7Ng', false, NULL,'i like plants', '2022-01-15'),
('Mike Test', 'mikey@mikestesting.com', 'myP@22w0rd', 'https://unsplash.com/photos/Fsgzm8N0hIY', true, 2,'mic testing', '2021-01-15'),
('May Knotwork', 'may@break.com', 'testing', 'https://unsplash.com/photos/TzVN0xQhWaQ', true, 3,'C', '2022-01-14'),
('Hope Allswell', 'hope@fully.com', 'workinghard', 'https://unsplash.com/photos/mEZ3PoFGs_k', false, NULL,'JS, React', '2022-01-09'),
('John Smith', 'a@name.com', 'johnsmith', 'https://unsplash.com/photos/pAtA8xe_iVM', true, 4,'marine biology', '2022-01-15');

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