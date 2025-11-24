import { createClient } from "redis";

const redisSettings = JSON.parse(process.env.redisConnection)
const redis = createClient({
    username: redisSettings.username,
    password: redisSettings.password,
    socket: {
        host: redisSettings.host,
        port: redisSettings.port
    }
});


export async function connectRedis() {
    await redis.connect().then(() => console.log('Redis Client, Connected'));
    
    redis.on('error', err => console.log('Redis Client Error', err));
}


export default redis