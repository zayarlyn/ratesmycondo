use ratesmycondo;

SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `resident`;
DROP TABLE IF EXISTS `review`;
DROP TABLE IF EXISTS `rating_item`;
DROP TABLE IF EXISTS `review_rating_item`;
DROP TABLE IF EXISTS `user`;

CREATE TABLE resident (
    id VARCHAR(26) PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    map_url TEXT,
    country_code VARCHAR(5),
    images JSON, -- Assuming a JSON array for multiple images
    type ENUM('condo', 'apartment', 'house'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

CREATE TABLE review (
    id VARCHAR(26) PRIMARY KEY,
    content TEXT,
    rating TINYINT CHECK (rating BETWEEN 1 AND 10),
    room_type ENUM('studio', '1b', '2b'),
    room_size DECIMAL(10, 2), -- Assuming sqm can be fractional
    rented BOOLEAN,
    year INT CHECK (year >= 1900 AND year <= YEAR(CURRENT_TIMESTAMP)),
    resident_id VARCHAR(26),
    rating_id VARCHAR(26),
    images JSON, -- Assuming a JSON array for multiple images
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (resident_id) REFERENCES resident(id),
    FOREIGN KEY (rating_id) REFERENCES rating_item(id)
);

CREATE TABLE review_rating_item (
    id VARCHAR(26) PRIMARY KEY,
    rating TINYINT CHECK (rating BETWEEN 1 AND 10),
    review_id VARCHAR(26),
    rating_item_id VARCHAR(26),
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (review_id) REFERENCES review(id),
    FOREIGN KEY (rating_item_id) REFERENCES rating_item(id)
);

CREATE TABLE rating_item (
    id VARCHAR(26) PRIMARY KEY,
    name VARCHAR(255),
    code VARCHAR(50),
    rating TINYINT CHECK (rating BETWEEN 1 AND 10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

CREATE TABLE user (
    id VARCHAR(26) PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20),
    country_code VARCHAR(5),
    passport_id VARCHAR(50),
    auth_user_id VARCHAR(26),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);
