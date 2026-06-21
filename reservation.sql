CREATE TABLE tables (
id INT AUTO_INCREMENT PRIMARY KEY,
table_number INT,
capacity INT
);

INSERT INTO tables (table_number, capacity) VALUES
(1,4),(2,4),(3,4),(4,4),(5,4),
(6,4),(7,4),(8,4),(9,4),(10,4),
(11,8),(12,8),(13,8),(14,8),(15,8);

CREATE TABLE reservations (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100),
phone VARCHAR(20),
guests INT,
table_id INT,
reservation_date DATE,
reservation_time TIME,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);