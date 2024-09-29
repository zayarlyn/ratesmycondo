DROP TABLE IF EXISTS review_rating_item;


DROP TABLE IF EXISTS review;

DROP TABLE IF EXISTS residence;

DROP TABLE IF EXISTS rating_item;

DROP TABLE IF EXISTS "user";

DROP TYPE IF EXISTS ROOM_TYPE;

DROP TYPE IF EXISTS RESIDENT_TYPE;

CREATE TYPE ROOM_TYPE AS ENUM('studio', '1b', '2b');

CREATE TYPE RESIDENT_TYPE AS ENUM('condo', 'apartment', 'house', 'townhouse');

CREATE TABLE
  residence (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255),
    description TEXT,
    map_url TEXT,
    country_code VARCHAR(2),
    type RESIDENT_TYPE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
  );

CREATE TABLE
  rating_item (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
  );

CREATE TABLE
  review (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    content TEXT,
    rating SMALLINT CHECK (rating BETWEEN 0 AND 10),
    room_type ROOM_TYPE,
    room_size DECIMAL(10, 2),
    rented BOOLEAN,
    year INT CHECK (year >= 2016),
    residence_id UUID,
    user_id UUID,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (residence_id) REFERENCES residence (id),
    FOREIGN KEY (user_id) REFERENCES "user" (id)
  );

CREATE TABLE
  review_rating_item (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    rating SMALLINT CHECK (rating BETWEEN 0 AND 10),
    content TEXT,
    review_id UUID,
    rating_item_id UUID,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (review_id) REFERENCES review (id),
    FOREIGN KEY (rating_item_id) REFERENCES rating_item (id)
  );


CREATE TABLE
  "user" (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20),
    country_code VARCHAR(2),
    passport_id VARCHAR(50),
    auth_user_id UUID,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
  );
