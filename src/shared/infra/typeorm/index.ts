import { DataSource } from 'typeorm';

import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import Notification from '@modules/notifications/infra/typeorm/schemas/Notification';
import User from '@modules/users/infra/typeorm/entities/User';

export const AppDataSource = new DataSource({
  type: "mongodb",
  useUnifiedTopology: true,
  host: "localhost",
  port: 27017,
  synchronize: true,
  entities: [Appointment, Notification, User]
})

AppDataSource
    .initialize()
    .catch(function (error) {
        console.log("Error: ", error)
    })
