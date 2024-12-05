module.exports = async (client) => {
    const primarys = ['Assault Rifle', 'SMG', 'Shotgun', 'LMG', 'Marksman Rifle', 'Sniper Rifle'];
    const secondarys = ['Pistol', 'Launcher', 'Special'];
    const melee = ['Melee'];

    const weaponTypes = [
        primarys,
        secondarys,
        melee
    ];

    weaponTypes.forEach(typeOfWeapons => {
        typeOfWeapons.forEach(async name => {
            await client.AddWeaponType(name);
        });
    });

    // MILITARY CAMO'S PRIMARY WEAPONS //////////////////////////////////////////////////////
    await client.AddCamo('Granite', 'Get 5 headshots', 'Multiplayer', primarys);
    await client.AddCamo('Woodland', 'Get 10 headshots', 'Multiplayer', primarys);
    await client.AddCamo('Savanna ', 'Get 15 headshots', 'Multiplayer', primarys);
    await client.AddCamo('Splinter', 'Get 20 headshots', 'Multiplayer', primarys);
    await client.AddCamo('Moss', 'Get 30 headshots', 'Multiplayer', primarys);
    await client.AddCamo('Shade', 'Get 40 headshots', 'Multiplayer', primarys);
    await client.AddCamo('Digital', 'Get 50 headshots', 'Multiplayer', primarys);
    await client.AddCamo('Tide', 'Get 75 headshots', 'Multiplayer', primarys);
    await client.AddCamo('Red Tiger', 'Get 100 headshots', 'Multiplayer', primarys);
    /////////////////////////////////////////////////////////////////////////////////////////

    // SPECIAL CAMO'S PRIMARY WEAPONS ///////////////////////////////////////////////////////
    // ASSAULT RIFLES
    await client.AddCamo('Muddled', 'Get 30 kills shortly after sprinting with the XM4', 'Multiplayer', ['XM4']);
    await client.AddCamo('Machina', 'Get a kill without taking any damage 30 times with the XM4', 'Multiplayer', ['XM4']);

    await client.AddCamo('Whitecap', 'Get 50 eliminations with the AK-74 while the Strategist Combat Specialty is active', 'Multiplayer', ['AK-47']);
    await client.AddCamo('Vengeance', 'Get 20 kills with the underbarrel launcher attached to the AK-74', 'Multiplayer', ['AK-47']);

    await client.AddCamo('Heatstroke', 'Get a kill without taking any damage 30 times with the AMES 85', 'Multiplayer', ['AMES 85']);
    await client.AddCamo('Burial', 'Get two kills without reloading 10 times with the AMES 85', 'Multiplayer', ['AMES 85']);

    await client.AddCamo('Ambush', 'Get thirty kills shortly after sprinting with the GPR 91', 'Multiplayer', ['GPR 91']);
    await client.AddCamo('Cacti Cathode', 'Get 50 kills while moving with the GPR 91', 'Multiplayer', ['GPR 91']);

    await client.AddCamo('Cherry Blossom', 'Get 50 kills while the Enforcer Combat Specialty is active with the Model LGet 50 kills while the Enforcer Combat Specialty is active with the Model L', 'Multiplayer', ['Model L']);
    await client.AddCamo('Cedar', 'Get 50 kills with a suppressor equipped on the Model L', 'Multiplayer', ['Model L']);

    await client.AddCamo('Astral Cry', 'Get a kill without taking any damage 30 times with the Goblin Mk2', 'Multiplayer', ['Goblin Mk2']);
    await client.AddCamo('Hammerhead', 'Get 20 kills with the underbarrel launcher attached to the Goblin Mk2', 'Multiplayer', ['Goblin Mk2']);

    await client.AddCamo('Crimson Steppes', 'Get 50 kills with the Recon Combat Specialty is active with the AS VAL', 'Multiplayer', ['AS VAL']);
    await client.AddCamo('Elk', 'Get 30 Hipfire Kills with the AS VAL', 'Multiplayer', ['AS VAL']);
    // SMGS
    // https://www.oneesports.gg/call-of-duty/bo6-multiplayer-camo-challenges/
    /////////////////////////////////////////////////////////////////////////////////////////
    
    // MILITARY CAMO'S SECONDARY WEAPONS ////////////////////////////////////////////////////
    await client.AddCamo('Granite', 'Get 2 kills or scorestreak destructions', 'Multiplayer', secondarys);
    await client.AddCamo('Woodland', 'Get 5 kills or scorestreak destructions', 'Multiplayer', secondarys);
    await client.AddCamo('Savanna ', 'Get 10 kills or scorestreak destructions', 'Multiplayer', secondarys);
    await client.AddCamo('Splinter', 'Get 15 kills or scorestreak destructions', 'Multiplayer', secondarys);
    await client.AddCamo('Moss', 'Get 20 kills or scorestreak destructions', 'Multiplayer', secondarys);
    await client.AddCamo('Shade', 'Get 25 kills or scorestreak destructions', 'Multiplayer', secondarys);
    await client.AddCamo('Digital', 'Get 30 kills or scorestreak destructions', 'Multiplayer', secondarys);
    await client.AddCamo('Tide', 'Get 40 kills or scorestreak destructions', 'Multiplayer', secondarys);
    await client.AddCamo('Red Tiger', 'Get 50 kills or scorestreak destructions', 'Multiplayer', secondarys);
    /////////////////////////////////////////////////////////////////////////////////////////
    
    // MILITARY CAMO'S MELEE WEAPONS ////////////////////////////////////////////////////////
    await client.AddCamo('Granite', 'Get 5 kills', 'Multiplayer', melee);
    await client.AddCamo('Woodland', 'Get 10 kills', 'Multiplayer', melee);
    await client.AddCamo('Savanna ', 'Get 15 kills', 'Multiplayer', melee);
    await client.AddCamo('Splinter', 'Get 20 kills', 'Multiplayer', melee);
    await client.AddCamo('Moss', 'Get 30 kills', 'Multiplayer', melee);
    await client.AddCamo('Shade', 'Get 40 kills', 'Multiplayer', melee);
    await client.AddCamo('Digital', 'Get 50 kills', 'Multiplayer', melee);
    await client.AddCamo('Tide', 'Get 75 kills', 'Multiplayer', melee);
    await client.AddCamo('Red Tiger', 'Get 100 kills', 'Multiplayer', melee);
    /////////////////////////////////////////////////////////////////////////////////////////
};