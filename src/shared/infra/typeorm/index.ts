import { DataSource } from 'typeorm';

import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import Notification from '@modules/notifications/infra/typeorm/schemas/Notification';
import User from '@modules/users/infra/typeorm/entities/User';

export const PgDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  username: "postgres",
  password: "docker",
  database: "gobarber",
  port: 5432,
  synchronize: true,
  entities: [Appointment, User]
})

export const AppDataSource = new DataSource({
  type: "mongodb",
  useUnifiedTopology: true,
  host: "localhost",
  port: 27017,
  synchronize: true,
  entities: [Notification]
})

PgDataSource
  .initialize()
  .catch(function (error) {
      console.log("Error: ", error)
  })

AppDataSource
  .initialize()
  .catch(function (error) {
      console.log("Error: ", error)
  })
