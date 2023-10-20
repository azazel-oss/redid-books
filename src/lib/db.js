import { createClient } from 'redis';

console.log(process.env, "------------------------------------------")

const client = createClient({
    password: process.env.REDIS_PW,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});

client.on('error', (err) => console.log(err))

if(!client.isOpen) {
    client.connect()
}

export { client }

