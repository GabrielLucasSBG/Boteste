module.exports = {
    name: 'criacao',
	description: 'Criação do servidor!',
	execute(message, args) {
		message.channel.send(`Criado em: ${message.guild.createdAt}`);
	},
}