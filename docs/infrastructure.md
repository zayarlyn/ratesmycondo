## Tech Stack

- db - postgres/mongodb
- server nodejs(nestjs)
- web - nextjs, tailwindcss
- auth - aws cognito/firebase/clerk
- hosting - vercel, heroku, neon.dev, (can consider aws)
- dockerize everything??

## db schema

- tables: resident, review, review_rating_item, rating_item, user

### resident

- name
- description
- map_url
- country_code
- images
- type ('condo','apartment','house')

### review

- content
- rating (1-10)
- room_type (studio, 1b, 2b)
- room_size (sqm)
- rented (true/false)
- year (2021)
- resident_id
- rating_id
- images

### review_rating_item

- rating (1-10)
- review_id
- rating_item_id
- content

### rating_item

- name
- type
- rating

### user

- name
- email
- phone
- country_code
- passport_id
- auth_user_id
