import "reflect-metadata"
import { DataSource } from "typeorm"

import { Chat } from "../models/Chat"
import { Product } from "../models/Product"
import { User } from "../models/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5436,
    username: "admin",
    password: "admin",
    database: "agrodigital",
    synchronize: true,
    logging: false,
    entities: [User, Product, Chat],
    migrations: [__dirname + '/migration/**/*.ts'],
    subscribers: true,
})
