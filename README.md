# Barber API

## About

Barber API is a REST API built in Node.js + Typescript that helps barbers and customers to schedule and manage their appointments.

## Resources

- Appointments
  - Create an appointment
  - Get appointments of a given user
- Providers
  - List providers
  - Show month and day availability
- Users
  - Create user
  - Edit user infos
- Sessions
  - Login
- Password
  - Send forgot password email
  - Reset password
- Profile
  - Show profile info
  - Edit profile

## Docs

- Click [here]("https://github.com/cp-yago/barber-backend/blob/master/docs/api.json") to open openApi specification or see in "/docs"

## How to execute this project

```bash
# clone this repo

$ git clone https://github.com/cp-yago/barber-backend.git

# or ssh
$ git clone git@github.com:cp-yago/barber-backend.git

# install dependencies

$ yarn

# Run docker compose
$ docker-compose up -d

# Run migrations

$ yarn typeorm migration:run

# Run project

$ yarn dev:server
```


