const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'información',

    execute(client, message) {
        const categories = [];
        client.commands.forEach((command) => categories.includes(command.category) ? false : categories.push(command.category));

        const embed = new MessageEmbed();

        embed.setColor('RANDOM');
        embed.setTitle('Help');
        embed.setThumbnail(client.user.avatarURL());
        embed.setDescription('Encuentra todos los comandos aquí');
        embed.setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }));

        categories.map((category) => {
            const cmd = client.commands.filter((cmd) => cmd.category === category);

            embed.addField(category.charAt(0).toUpperCase() + category.slice(1), cmd.map((x) => '`' + x.name + '`').join(', '));
        });

        embed.setTimestamp();
        embed.setFooter('Bot programado por Mordoo');

        message.channel.send(embed);
    },
};