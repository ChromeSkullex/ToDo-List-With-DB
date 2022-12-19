CREATE TABLE IF NOT EXISTS todos(
	id INT NOT NULL PRIMARY KEY NOT NULL AUTO_INCREMENT,
    content VARCHAR(255),
    toggle BOOL

);
INSERT INTO todos (content, toggle)
VALUES ('I really like pie', false);