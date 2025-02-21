const { Events, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

const defaultMpCamos = [
    'Granite',
    'Woodland',
    'Savanna',
    'Splinter',
    'Moss',
    'Saboteur',
    'Digital',
    'Tide',
    'Red Tiger',
    'Special',
    'Special',
    'Gold',
    'Diamond',
    'Dark Spine',
    'Dark Matter'
];

const defaultZmCamos = [
    'Slate',
    'Desert',
    'Evergreen',
    'Rugged',
    'Grim',
    'Stripe',
    'Oceanic',
    'Whiteout',
    'Purple Tiger',
    'Special',
    'Special',
    'Mystic Gold',
    'Opal',
    'Afterlife',
    'Nebula'
];
 
module.exports = {
    name: Events.InteractionCreate,
    once: false,
    async execute(interaction, client) {
        if (!interaction.isModalSubmit() && !interaction.isButton()) return;

        if (interaction.customId === 'addWeaponModal') {
            const weaponName = interaction.fields.getTextInputValue('weaponName');
            const weaponType = interaction.fields.getTextInputValue('weaponType');

            client.weaponDetails[interaction.user.id] = { name: weaponName, type: weaponType };

            const addMpCamosButton = new ButtonBuilder()
                .setCustomId('addMpCamosButton')
                .setLabel('Add MP Special Camos')
                .setStyle(ButtonStyle.Primary);

            const addZmCamosButton = new ButtonBuilder()
                .setCustomId('addZmCamosButton')
                .setLabel('Add ZM Special Camos')
                .setStyle(ButtonStyle.Primary);

            const addCamosRow = new ActionRowBuilder().addComponents(addMpCamosButton, addZmCamosButton);

            await interaction.reply({ content: `Currently adding ${weaponName}!`, components: [addCamosRow] });
            client.weaponDetails[interaction.user.id].msg = await interaction.fetchReply();
        } else if (interaction.customId === 'addMpCamosButton' || interaction.customId === 'addZmCamosButton') {
            const weaponDetails = client.weaponDetails[interaction.user.id];

            const isMp = interaction.customId === 'addMpCamosButton' ? true : false;

            const camoModal = new ModalBuilder()
                .setCustomId(isMp ? 'addMpCamosModal' : 'addZmCamosModal')
                .setTitle(`Add the ${isMp ? 'Multiplayer' : 'Zombies'} special camos for ${weaponDetails.name}`);

            let textFields = [];
        
            textFields.push(
                new TextInputBuilder()
                    .setCustomId('camo1name')
                    .setPlaceholder('Enter the first special camo name')
                    .setLabel('Camo name')
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short),
        
                new TextInputBuilder()
                    .setCustomId('camo1desc')
                    .setPlaceholder('Enter the requirement for the first special camo')
                    .setLabel('Camo requirement')
                    .setRequired(true)
                    .setStyle(TextInputStyle.Paragraph),

                new TextInputBuilder()
                    .setCustomId('camo2name')
                    .setPlaceholder('Enter the second special camo name')
                    .setLabel('Camo name')
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short),
        
                new TextInputBuilder()
                    .setCustomId('camo2desc')
                    .setPlaceholder('Enter the second for the first special camo')
                    .setLabel('Camo requirement')
                    .setRequired(true)
                    .setStyle(TextInputStyle.Paragraph)
            );
        
            let rows = [];

            textFields.forEach(txtField => {
                rows.push(new ActionRowBuilder().addComponents(txtField));
            });

            camoModal.addComponents(rows);

            weaponDetails.buttonId = interaction.customId;

            await interaction.showModal(camoModal);
        } else if (interaction.customId === 'addMpCamosModal' || interaction.customId === 'addZmCamosModal') {
            await interaction.deferUpdate();
            const isMp = interaction.customId === 'addMpCamosModal' ? true : false;

            const camo1name = interaction.fields.getTextInputValue('camo1name');
            const camo1desc = interaction.fields.getTextInputValue('camo1desc');
            const camo2name = interaction.fields.getTextInputValue('camo2name');
            const camo2desc = interaction.fields.getTextInputValue('camo2desc');

            const specialCamos = [
                { name: camo1name, desc: camo1desc, mode: isMp ? 'Multiplayer' : 'Zombies' },
                { name: camo2name, desc: camo2desc, mode: isMp ? 'Multiplayer' : 'Zombies' },
            ];

            let weaponDetails = client.weaponDetails[interaction.user.id];

            if (!weaponDetails.specialCamos) {
                weaponDetails.specialCamos = specialCamos;
                const oldRow = weaponDetails.msg.components[0];
                const newRow = new ActionRowBuilder();
    
                oldRow.components.map((button) => { 
                    const btn = ButtonBuilder.from(button);
                    btn.setDisabled(button.customId === weaponDetails.buttonId);
                    newRow.addComponents(btn);
                    return btn;
                });
    
                await weaponDetails.msg.edit({ content: `Currently adding ${weaponDetails.name}!`, components: [newRow] });
            } else {
                weaponDetails.specialCamos.push(...specialCamos);
                let mpCamos = weaponDetails.specialCamos.filter(el => el.mode === 'Multiplayer');
                let zmCamos = weaponDetails.specialCamos.filter(el => el.mode === 'Zombies');
                let embed = new EmbedBuilder()
                    .setTitle(`Overview of adding new weapon`)
                    .setDescription(`Name: ${weaponDetails.name}\nType: ${weaponDetails.type}\nSpecial camo's:`)
                    .addFields(
                        { name: 'Multiplayer Camos', value: `Name: ${mpCamos[0].name}\nRequirement: ${mpCamos[0].desc}\n\nName: ${mpCamos[1].name}\nRequirement: ${mpCamos[1].desc}` },
                        { name: 'Zombies Camos', value: `Name: ${zmCamos[0].name}\nRequirement: ${zmCamos[0].desc}\n\nName: ${zmCamos[1].name}\nRequirement: ${zmCamos[1].desc}` }
                    );
                
                let btnRow = new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId('confirmWeapon').setLabel('Save Weapon').setStyle(ButtonStyle.Success));

                weaponDetails.msg.edit({ embeds: [embed], components: [btnRow] });
            }
        } else if (interaction.customId === 'confirmWeapon') {
            let weaponDetails = client.weaponDetails[interaction.user.id];

            let mpCamos = weaponDetails.specialCamos.filter(el => el.mode === 'Multiplayer');
            let zmCamos = weaponDetails.specialCamos.filter(el => el.mode === 'Zombies');
        }
    },
};