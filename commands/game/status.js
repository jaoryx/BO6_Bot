const { SlashCommandBuilder, EmbedBuilder, Colors } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('status')
		.setDescription('Shows how far you are collecting camos'),
	async execute(interaction) {
        const loadingEmbed = new EmbedBuilder()
            .setColor(Colors.DarkOrange)
            .setDescription(`<a:loading:1336992449071157260> Loading stats...`)

        await interaction.reply({ embeds: [loadingEmbed] });

        let userData = await interaction.client.GetUser(interaction.user.id);

        let totalWeapons = 0;
        let totalCamos = 0;
        let mpCamos = 0;
        let zmCamos = 0;

        let mpObtained = 0;
        let zmObtained = 0;
        let totalObtained = 0;
        
        let totalGoldCamos = 0;
        let totalDiamondCamos = 0;
        let totalDarkSpineCamos = 0;
        let totalDarkMatterCamos = 0;

        let goldObtained = 0;
        let diamondObtained = 0;
        let darkSpineObtained = 0;
        let darkMatterObtained = 0;

        let totalMysticGoldCamos = 0;
        let totalOpalCamos = 0;
        let totalAfterlifeCamos = 0;
        let totalNebulaCamos = 0;

        let mysticGoldObtained = 0;
        let opalObtained = 0;
        let afterlifeObtained = 0;
        let nebulaObtained = 0;

        userData.mp.forEach(weapon => {
            totalWeapons++;
            weapon.camos.forEach(camo => {
                mpCamos++;
                switch (camo.camoName) {
                    case "Gold":
                        totalGoldCamos++;
                        if (camo.obtained) goldObtained++;
                        break;

                    case "Diamond":
                        totalDiamondCamos++;
                        if (camo.obtained) diamondObtained++;
                        break;

                    case "Dark Spine":
                        totalDarkSpineCamos++;
                        if (camo.obtained) darkSpineObtained++;
                        break;
                
                    case "Dark Matter":
                        totalDarkMatterCamos++;
                        if (camo.obtained) darkMatterObtained++;
                        break;

                    default:
                        if (camo.obtained) mpObtained++;
                        break;
                }
            });
        });

        userData.zm.forEach(weapon => {
            weapon.camos.forEach(camo => {
                zmCamos++;
                switch (camo.camoName) {
                    case "Mystic Gold":
                        totalMysticGoldCamos++;
                        if (camo.obtained) mysticGoldObtained++;
                        break;

                    case "Opal":
                        totalOpalCamos++;
                        if (camo.obtained) opalObtained++;
                        break;

                    case "Afterlife":
                        totalAfterlifeCamos++;
                        if (camo.obtained) afterlifeObtained++;
                        break;
                
                    case "Nebula":
                        totalNebulaCamos++;
                        if (camo.obtained) nebulaObtained++;
                        break;

                    default:
                        if (camo.obtained) zmObtained++;
                        break;
                }
            });
        });

        mpObtained += (goldObtained + diamondObtained + darkSpineObtained + darkMatterObtained);
        zmObtained += (mysticGoldObtained + opalObtained + afterlifeObtained + nebulaObtained);

        totalCamos = mpCamos + zmCamos;
        totalObtained = mpObtained + zmObtained;

        let statusEmbed = new EmbedBuilder()
            .setTitle(`Black Ops 6 Tracking Status of ${interaction.user.username}`)
            .setColor(Colors.DarkOrange)
            .addFields(
                {
                    name: `Total Camo's:`,
                    value: `${totalObtained}/${totalCamos}`,
                },
                {
                    name: `Multiplayer Camo's:`,
                    value: `${mpObtained}/${mpCamos}`,
                    inline: true
                },
                {
                    name: `Zombies Camo's:`,
                    value: `${zmObtained}/${zmCamos}`,
                    inline: true
                },
                // MULTIPLAYER CAMO'S
                {
                    name: `\u200b`,
                    value: `**Multiplayer Mastery Camo's**`
                },
                {
                    name: `<:gold:1339210850413838346> Gold:`,
                    value: `${goldObtained}/${totalGoldCamos}`,
                    inline: true
                },
                {
                    name: `<:diamond:1339210856621150290> Diamond:`,
                    value: `${diamondObtained}/${totalDiamondCamos}`,
                    inline: true
                },
                {
                    name: `\u200b`,
                    value: `\u200b`,
                    inline: true
                },
                {
                    name: `<:darkspine:1339210854033391617> Dark Spine:`,
                    value: `${darkSpineObtained}/${totalDarkSpineCamos}`,
                    inline: true
                },
                {
                    name: `<:darkmatter:1339210852615716986> Dark Matter:`,
                    value: `${darkMatterObtained}/${totalDarkMatterCamos}`,
                    inline: true
                },
                {
                    name: `\u200b`,
                    value: `\u200b`,
                    inline: true
                },
                // ZOMBIES CAMO'S
                {
                    name: `\u200b`,
                    value: `**Zombies Mastery Camo's**`
                },
                {
                    name: `<:mysticgold:1339211022535233556> Mystic Gold:`,
                    value: `${mysticGoldObtained}/${totalMysticGoldCamos}`,
                    inline: true
                },
                {
                    name: `<:opal:1339211018500309026> Opal:`,
                    value: `${opalObtained}/${totalOpalCamos}`,
                    inline: true
                },
                {
                    name: `\u200b`,
                    value: `\u200b`,
                    inline: true
                },
                {
                    name: `<:afterlife:1339211020652118176> Afterlife:`,
                    value: `${afterlifeObtained}/${totalAfterlifeCamos}`,
                    inline: true
                },
                {
                    name: `<:nebula:1339211023999172639> Nebula:`,
                    value: `${nebulaObtained}/${totalNebulaCamos}`,
                    inline: true
                },
                {
                    name: `\u200b`,
                    value: `\u200b`,
                    inline: true
                },
            );

        await interaction.editReply({ embeds: [statusEmbed] });
    }
}