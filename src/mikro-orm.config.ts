import { __prod__ } from "./constants";
import { Post } from "./enteties/Post";
import { MikroORM } from "@mikro-orm/core";
import  path from 'path';

console.log('dirname:', __dirname);

export default {
    entities: [Post],
    migrations: {
        path: path.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    dbName: 'pic-by',
    user: 'postgres',
    password: 'admin',
    type: 'postgresql',
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];