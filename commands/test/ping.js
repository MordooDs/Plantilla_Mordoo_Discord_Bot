module.exports = {
    name: 'ping',
    aliases: ['pong'],
    category: 'test',

    execute(client, message) {
        return message.channel.send(`🏓 | ${message.author.username}, la latencia del bot es de **${client.ws.ping}ms**.`);
    },
};