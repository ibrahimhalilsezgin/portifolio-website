import { createClient } from "redis";


const redis = createClient({
    username: 'default',
    password: 'Rb5tXnnD7WyMZHrJbNRnm7381AEbykWg',
    socket: {
        host: 'redis-10635.crce177.me-south-1-1.ec2.cloud.redislabs.com',
        port: 10635
    }
});


export async function connectRedis() {
    await redis.connect().then(() => console.log('Redis Client, Connected'));
    
    redis.on('error', err => console.log('Redis Client Error', err));
}


export default redis