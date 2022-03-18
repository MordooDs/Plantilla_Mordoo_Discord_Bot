module.exports = (client) => {
    console.log(`${client.user.username} Se contectó correctamente.`);

    client.user.setActivity(client.config.data.activity);
};