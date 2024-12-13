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

    //======================== MULTIPLAYER ========================//

    // MILITARY CAMO'S PRIMARY WEAPONS //////////////////////////////////////////////////////
    await client.AddCamo('Granite', 'Get 5 headshots', 'Multiplayer', primarys.concat(['pistol']));
    await client.AddCamo('Woodland', 'Get 10 headshots', 'Multiplayer', primarys.concat(['pistol']));
    await client.AddCamo('Savanna ', 'Get 15 headshots', 'Multiplayer', primarys.concat(['pistol']));
    await client.AddCamo('Splinter', 'Get 20 headshots', 'Multiplayer', primarys.concat(['pistol']));
    await client.AddCamo('Moss', 'Get 30 headshots', 'Multiplayer', primarys.concat(['pistol']));
    await client.AddCamo('Shade', 'Get 40 headshots', 'Multiplayer', primarys.concat(['pistol']));
    await client.AddCamo('Digital', 'Get 50 headshots', 'Multiplayer', primarys.concat(['pistol']));
    await client.AddCamo('Tide', 'Get 75 headshots', 'Multiplayer', primarys.concat(['pistol']));
    await client.AddCamo('Red Tiger', 'Get 100 headshots', 'Multiplayer', primarys.concat(['pistol']));
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
    await client.AddCamo('Heatwave', 'Get 30 kills shortly after sprinting with the C9', 'Multiplayer', ['C9']);
    await client.AddCamo('Panther', 'Get 50 kills with a suppressor equipped on the C9', 'Multiplayer', ['C9']);

    await client.AddCamo('Kakapo', 'Get 2 kills without reloading 10 times with the KSV', 'Multiplayer', ['KSV']);
    await client.AddCamo('Throwback', 'Get 50 kills while moving with the KSV', 'Multiplayer', ['KSV']);

    await client.AddCamo('Amorphous', 'Get 50 kills while moving with the Tanto. 22', 'Multiplayer', ['Tanto. 22']);
    await client.AddCamo('Go Bananas', 'Get a kill without taking any damage 30 times with the Tanto .22', 'Multiplayer', ['Tanto. 22']);

    await client.AddCamo('Radiant Bath', 'Get 30 Hipfire Kills with the PP-919', 'Multiplayer', ['PP-919']);
    await client.AddCamo('Midnight Prowl', 'Get 50 Kills with the Strategist Combat Specialty is active with the PP-919', 'Multiplayer', ['PP-919']);

    await client.AddCamo('Deep End', 'Get 30 Kills shortly after sprinting with the Jackal PDW', 'Multiplayer', ['Jackal PDW']);
    await client.AddCamo('Dread', 'Get 30 Point Blank kills with the Jackal PDW', 'Multiplayer', ['Jackal PDW']);
    
    await client.AddCamo('Kingfisher', 'Get 30 Hipfire Kills with the Kompakt 92', 'Multiplayer', ['Kompakt 92']);
    await client.AddCamo('Blackthorn', 'Get 30 kills shortly after sprinting with the Kompakt 92', 'Multiplayer', ['Kompakt 92']);

    // SHOTGUNS
    await client.AddCamo('Blueberry Lime', 'Get 30 hipfire kills with the Marine SP', 'Multiplayer', ['Marine SP']);
    await client.AddCamo('Chromed Out', 'Get 30 kills shortly after sprinting with the Marine SP', 'Multiplayer', ['Marine SP']);

    await client.AddCamo('Night Terror', 'Get 30 Point Blank kills with the ASG-89', 'Multiplayer', ['ASG-89']);
    await client.AddCamo('Drive-In', 'Get 50 kills while moving with the ASG-89', 'Multiplayer', ['ASG-89']);

    // LMGS
    await client.AddCamo('Neon Bath', 'Get 30 kills shortly after sprinting with the PU-21', 'Multiplayer', ['PU-21']);
    await client.AddCamo('Vigilance', 'Get 2 kills without reloading 10 times with the PU-21', 'Multiplayer', ['PU-21']);

    await client.AddCamo('Buzz', 'Get 2 kills without releasing the trigger 5 times with the XMG', 'Multiplayer', ['XMG']);
    await client.AddCamo('Snakebite', 'Get 50 kills while moving with the XMG', 'Multiplayer', ['XMG']);

    await client.AddCamo('Brush Stroke', 'Get 50 kills with the Strategist Combat Specialty active with the GPMG-7', 'Multiplayer', ['GPMG-7']);
    await client.AddCamo('Idyllic', 'Get 30 Point Blank kills with the GPMG-7', 'Multiplayer', ['GPMG-7']);

    // MARKSMAN RIFLES
    await client.AddCamo('Ectoplasm', 'Get 50 kills with a 4.0x or higher magnification scope attached to the SWAT 5.56', 'Multiplayer', ['SWAT 5.56']);
    await client.AddCamo('Lumberjack', 'Get 50 kills with the Enforcer Combat Specialty active with the SWAT 5.56', 'Multiplayer', ['SWAT 5.56']);

    await client.AddCamo('Clear Water', 'Get 15 Longshot Kills with the Tsarkov 7.62', 'Multiplayer', ['Tsarkov 7.62']);
    await client.AddCamo('Concrete Jungle', 'Get 50 kills with the Strategist Combat Specialty active with the Tsarkov 7.62', 'Multiplayer', ['Tsarkov 7.62']);

    await client.AddCamo('Ablaze', 'Get 2 kills without reloading 10 times with the AEK-973', 'Multiplayer', ['AEK-973']);
    await client.AddCamo('Mirage', 'Get 50 kills with a 4.0x or higher magnification scope attached to the AEK-973', 'Multiplayer', ['AEK-973']);

    await client.AddCamo('Mellowbloom', 'Get 50 kills with a suppressor equipped to the DM-10', 'Multiplayer', ['DM-10']);
    await client.AddCamo('Cobalt', 'Get 15 longshot kills with the DM-10', 'Multiplayer', ['DM-10']);

    // SNIPER RIFLES
    await client.AddCamo('Copper', 'Get 50 kills while the Recon Combat Specialty is active with the LW3A1 Frostline', 'Multiplayer', ['LW3A1 Frostline']);
    await client.AddCamo('Permafrost', 'Get 2 kills without reloading 10 times with the LW3A1 Frostline', 'Multiplayer', ['LW3A1 Frostline']);

    await client.AddCamo('Pixelized', 'Get 50 kills while the Recon Combat Specialty is active with the SVD', 'Multiplayer', ['SVD']);
    await client.AddCamo('Patchwork', 'Get 50 kills with a 4.0x or higher magnification scope attached to the SVD', 'Multiplayer', ['SVD']);

    await client.AddCamo('Chaparral', 'Get 30 One Shot Kills with the LR 7.62', 'Multiplayer', ['LR 7.62']);
    await client.AddCamo('Nimbus', 'Get 15 Longshot Kills with the LR 7.62', 'Multiplayer', ['LR 7.62']);
    /////////////////////////////////////////////////////////////////////////////////////////

    // MASTERY CAMO'S PRIMARY WEAPONS ///////////////////////////////////////////////////////
    await client.AddCamo('Gold', 'Get 10 Double Kills or better with the specific weapon', 'Multiplayer', primarys);
    await client.AddCamo('Diamond', 'Get 3 kills without dying 10 times with the specific weapon', 'Multiplayer', primarys);
    await client.AddCamo('Dark Spine', 'Get three triple kills or better with the specific weapon', 'Multiplayer', primarys);
    await client.AddCamo('Dark Matter', 'Get 5 kills without dying three times with the specific weapon', 'Multiplayer', primarys);
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

    // SPECIAL CAMO'S SECONDARY WEAPONS /////////////////////////////////////////////////////
    // PISTOLS
    await client.AddCamo('Exabyte', 'Get 15 kills shortly after switching weapons with the 9mm PM', 'Multiplayer', ['9mm PM']);
    await client.AddCamo('Blue Ring', 'Get 50 kills with a suppressor equipped on the 9mm PM', 'Multiplayer', ['9mm PM']);

    await client.AddCamo('Spin', 'Get 30 Hipfire Kills with the Grekhova', 'Multiplayer', ['Grekhova']);
    await client.AddCamo('Demeter', 'Get 50 kills while the Enforcer Combat Specialty is active with the Grekhova', 'Multiplayer', ['Grekhova']);

    await client.AddCamo('Thistlevine', 'Get 30 Point Blank kills with the GS45', 'Multiplayer', ['GS45']);
    await client.AddCamo('Ragamuffin', 'Get 15 kills shortly after switching weapons with the GS45', 'Multiplayer', ['GS45']);

    await client.AddCamo('Ritual', 'Get 50 kills while moving with the Stryder .22', 'Multiplayer', ['Stryder .22']);
    await client.AddCamo('Transcend', 'Get 50 kills while the Recon Combat Specilaty is active with the Stryder .22', 'Multiplayer', ['Stryder .22']);

    // LAUNCHERS
    await client.AddCamo('Policia', 'Get 10 Direct Hit Kills with the Cigma 2B', 'Multiplayer', ['CIGMA 2B']);
    await client.AddCamo('Abstract', 'Destroy 10 Aerial Scorestreaks with the CIGMA 2B', 'Multiplayer', ['CIGMA 2B']);

    await client.AddCamo('Reboot', 'Get 10 Direct Hit Kills with the HE-1', 'Multiplayer', ['HE-1']);
    await client.AddCamo('Dreamer', 'Destroy 10 scorestreaks or enemy equipment with the HE-1', 'Multiplayer', ['HE-1']);

    // SPECIALS
    //await client.AddCamo('Nebulon', 'Get 30 kills shortly after sprinting with the Sirin 9mm', 'Multiplayer', ['Sirin 9mm']);
    //await client.AddCamo('Enchanted', 'Get 50 kills while moving with the Sirin 9mm', 'Multiplayer', ['Sirin 9mm']);
    /////////////////////////////////////////////////////////////////////////////////////////

    // MASTERY CAMO'S PRIMARY WEAPONS ///////////////////////////////////////////////////////
    await client.AddCamo('Gold', 'Get 10 Double Kills or better with the specific weapon', 'Multiplayer', ['Pistol', 'Special']);
    await client.AddCamo('Diamond', 'Get 3 kills without dying 10 times with the specific weapon', 'Multiplayer', ['Pistol', 'Special']);
    await client.AddCamo('Dark Spine', 'Get three triple kills or better with the specific weapon', 'Multiplayer', ['Pistol', 'Special']);
    await client.AddCamo('Dark Matter', 'Get 5 kills without dying three times with the specific weapon', 'Multiplayer', ['Pistol', 'Special']);
    
    await client.AddCamo('Gold', 'Get 3 Destructions (Scorestreak or Vehicle) in a single match 10 times', 'Multiplayer', ['Launcher']);
    await client.AddCamo('Diamond', 'Get 3 kills in a single match 10 times', 'Multiplayer', ['Launcher']);
    await client.AddCamo('Dark Spine', 'Get 5 destructions (Scorestreak or Vehicle) in a single match three times with the specific weapon.', 'Multiplayer', ['Launcher']);
    await client.AddCamo('Dark Matter', 'Get 5 kills in a single match 3 times with the specific weapon.', 'Multiplayer', ['Launcher']);
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

    // SPECIAL CAMO'S MELEE WEAPONS /////////////////////////////////////////////////////////
    await client.AddCamo('Dying Envy', 'Get 50 kills while the Enforcer Combat Specialty is active with the Knife', 'Multiplayer', ['Knife']);
    await client.AddCamo('Tropical Leopard', 'Get a kill without taking any damage 30 times with the Knife', 'Multiplayer', ['Knife']);

    await client.AddCamo('Torment', 'Get 15 kills shortly after switching weapons with the Baseball Bat', 'Multiplayer', ['Baseball Bat']);
    await client.AddCamo('Slip', 'Get a kill without taking any damage 30 times with the Baseball Bat', 'Multiplayer', ['Baseball Bat']);

    await client.AddCamo('Twilgiht Toadstool', 'Get 50 kills while the Recon Combat Specialty is active with the Power Drill', 'Multiplayer', ['Power Drill']);
    await client.AddCamo('Thermal', 'Get 15 kills shortly after sprinting with the Power Drill', 'Multiplayer', ['Power Drill']);
    /////////////////////////////////////////////////////////////////////////////////////////

    // MASTERY CAMO'S MELEE WEAPONS /////////////////////////////////////////////////////////
    await client.AddCamo('Gold', 'Get 10 Double Kills or better with the specific weapon', 'Multiplayer', melee);
    await client.AddCamo('Diamond', 'Get 3 kills without dying 10 times with the specific weapon', 'Multiplayer', melee);
    await client.AddCamo('Dark Spine', 'Get three triple kills or better with the specific weapon', 'Multiplayer', primarys);
    await client.AddCamo('Dark Matter', 'Get 5 kills without dying three times with the specific weapon', 'Multiplayer', melee);
    /////////////////////////////////////////////////////////////////////////////////////////




    //======================== ZOMBIES ========================//
    // MILITARY CAMO'S PRIMARY WEAPONS //////////////////////////////////////////////////////
    await client.AddCamo('Slate', 'Get 100 critical kills', 'Zombies', primarys);
    await client.AddCamo('Desert', 'Get 200 critical kills', 'Zombies', primarys);
    await client.AddCamo('Evergreen', 'Get 300 critical kills', 'Zombies', primarys);
    await client.AddCamo('Rugged', 'Get 400 critical kills', 'Zombies', primarys);
    await client.AddCamo('Grim', 'Get 600 critical kills', 'Zombies', primarys);
    await client.AddCamo('Stripe', 'Get 800 critical kills', 'Zombies', primarys);
    await client.AddCamo('Oceanic', 'Get 1000 critical kills', 'Zombies', primarys);
    await client.AddCamo('Whiteout', 'Get 1500 critical kills', 'Zombies', primarys);
    await client.AddCamo('Purple Tiger', 'Get 2000 critical kills', 'Zombies', primarys);
    /////////////////////////////////////////////////////////////////////////////////////////

    // SPECIAL CAMO'S PRIMARY WEAPONS ///////////////////////////////////////////////////////
    // ASSAULT RIFLES
    await client.AddCamo('Liquify', 'Get 300 kills with Napalm Burst ammo installed.', 'Zombies', ['XM4']);
    await client.AddCamo('Mainframe', 'Kill 30 Vermin.', 'Zombies', ['XM4']);

    await client.AddCamo('Chlorine', 'Get 5 critical kills rapidly 15 times.', 'Zombies', ['AK-47']);
    await client.AddCamo('Haunted', `Get 300 kills with this weapon while it's Pack-A-Punched.`, 'Zombies', ['AK-47']);

    await client.AddCamo('Hyperion', 'Get 300 kills with a Rare+ variant.', 'Zombies', ['AMES 85']);
    await client.AddCamo('Graveyard', 'Get 300 kills with Brain Rot ammo installed.', 'Zombies', ['AMES 85']);

    await client.AddCamo('Night Stalker', 'Get 300 kills with Cryo Freeze ammo installed.', 'Zombies', ['GPR 91']);
    await client.AddCamo('Frostblossom', 'Kill 100 enemies affected by your tactical.', 'Zombies', ['GPR 91']);

    await client.AddCamo('Ghost Blossom', 'Kill 75 armored zombies.', 'Zombies', ['Model L']);
    await client.AddCamo('Walnut', 'Get 5 critical kills rapidly 15 times.', 'Zombies', ['Model L']);

    await client.AddCamo('Astral Pride', 'Kill 10 Manglers.', 'Zombies', ['Goblin MK2']);
    await client.AddCamo('Blood Scent', 'Get 5 critical kills rapidly 15 times.', 'Zombies', ['Goblin MK2']);

    await client.AddCamo('Malachite Steppes', 'Kill 30 Parasites.', 'Zombies', ['AS VAL']);
    await client.AddCamo('Mountain Goat', 'Get 300 kills with Dead Wire ammo installed.', 'Zombies', ['AS VAL']);

    await client.AddCamo('Sunny Splash', 'Get 300 kills with Cryo Freeze ammo installed.', 'Zombies', ['Krig C']);
    await client.AddCamo('Crowsbane', 'Kill 100 enemies affected by your tactical.', 'Zombies', ['Krig C']);

    // SMG'S
    await client.AddCamo('Infrared', 'Kill 30 Parasites.', 'Zombies', ['C9']);
    await client.AddCamo('Lynx', `Get 300 kills while it's Pack-A-Punched.`, 'Zombies', ['C9']);

    await client.AddCamo('Phoenix', 'Get 300 kills with Dead Wire ammo installed.', 'Zombies', ['KSV']);
    await client.AddCamo('Throttle', 'Get 300 hipfire kills.', 'Zombies', ['KSV']);

    await client.AddCamo('Solemn', 'Get 5 critical kills rapidly 15 times.', 'Zombies', ['Tanto .22']);
    await client.AddCamo('Aloha', `Get 300 kills while it's Pack-A-Punched.`, 'Zombies', ['Tanto .22']);

    await client.AddCamo('Solvent', 'Get 300 kills with Cryo Freeze ammo installed.', 'Zombies', ['PP-919']);
    await client.AddCamo('Stalking Shadow', `Get 10 kills without reloading 15 times.`, 'Zombies', ['PP-919']);

    await client.AddCamo('Plunge', 'Get 300 kills with Napalm Burst ammo installed.', 'Zombies', ['Jackal PDW']);
    await client.AddCamo('Distress', 'Get 300 hipfire kills.', 'Zombies', ['Jackal PDW']);

    await client.AddCamo('Tequila Sunrise', 'Get 300 kills with a Rare+ variant.', 'Zombies', ['Kompakt 92']);
    await client.AddCamo('Voidthorn', 'Get 300 point blank kills.', 'Zombies', ['Kompakt 92']);

    await client.AddCamo('Whisper', 'Get 300 kills with Dead Wire ammo installed.', 'Zombies', ['Saug']);
    await client.AddCamo('Limewave', 'Get 300 point blank kills.', 'Zombies', ['Saug']);

    // SHOTGUNS
    await client.AddCamo('Strawberry Mint', 'Get 300 kills with a Rare+ variant.', 'Zombies', ['Marine SP']);
    await client.AddCamo('Peel Out', 'Get 300 hipfire kills.', 'Zombies', ['Marine SP']);

    await client.AddCamo('Dream Eater', 'Kill 100 enemies affected by your tactical.', 'Zombies', ['ASG-89']);
    await client.AddCamo('Coin-Op', 'Kill 30 Parasites.', 'Zombies', ['ASG-89']);

    //await client.AddCamo('Cinder Surge', 'Get 10 kills without reloading 15 times.', 'Zombies', ['Maelstrom']);
    //await client.AddCamo('Lunar Flutter', 'Get 300 hipfire kills.', 'Zombies', ['Maelstrom']);

    // LMGS
    await client.AddCamo('Vivid', 'Kill 10 Manglers.', 'Zombies', ['PU-21']);
    await client.AddCamo('Justice', 'Get 300 hipfire kills.', 'Zombies', ['PU-21']);

    await client.AddCamo('Hiss', 'Get 10 kills without reloading 15 times.', 'Zombies', ['XMG']);
    await client.AddCamo('Acid Slide', 'Get 300 kills with Brain Rot ammo installed.', 'Zombies', ['XMG']);

    await client.AddCamo('Impressionist', 'Get 300 point blank kills.', 'Zombies', ['GPMG-7']);
    await client.AddCamo('Other World', 'Get 10 kills without reloading 15 times.', 'Zombies', ['GPMG-7']);

    // MARKSMAN RIFLES
    await client.AddCamo('Hyperspace', 'Kill 100 enemies affected by your tactical.', 'Zombies', ['SWAT 5.56']);
    await client.AddCamo('Wrangler', 'Kill 75 armored zombies.', 'Zombies', ['SWAT 5.56']);

    await client.AddCamo('Harvest', 'Kill 100 enemies affected by your tactical.', 'Zombies', ['Tsarkov 7.62']);
    await client.AddCamo('Desert Sunset', 'Kill 300 enemies with Dead Wire ammo installed.', 'Zombies', ['Tsarkov 7.62']);

    await client.AddCamo('Voidflame', 'Get 300 kills with Cryo Freeze ammo installed.', 'Zombies', ['AEK-973']);
    await client.AddCamo('Blood Moon', 'Get 300 kills with Napalm Burst ammo installed.', 'Zombies', ['AEK-973']);

    await client.AddCamo('Furybloom', 'Get 5 critical kills rapidly 15 times.', 'Zombies', ['DM-10']);
    await client.AddCamo('Manta', 'Get 300 kills with a Rare+ variant.', 'Zombies', ['DM-10']);

    // SNIPER RIFLES
    await client.AddCamo('Strata', 'Get 300 kills with a Rare+ variant.', 'Zombies', ['LW3A1 Frostline']);
    await client.AddCamo('Eventide', 'Kill 30 Parasites.', 'Zombies', ['LW3A1 Frostline']);

    await client.AddCamo('Cartridge', 'Kill 300 zombies.', 'Zombies', ['SVD']);
    await client.AddCamo('Integration', 'Get 5 critical kills rapidly 15 times.', 'Zombies', ['SVD']);

    await client.AddCamo('Foxglove', 'Kill 10 Manglers.', 'Zombies', ['LR 7.62']);
    await client.AddCamo('Overcast', 'Get 300 kills with Brain Rot ammo installed.', 'Zombies', ['LR 7.62']);
    /////////////////////////////////////////////////////////////////////////////////////////

    // MILITARY CAMO'S SECONDARY WEAPONS ////////////////////////////////////////////////////
    await client.AddCamo('Slate', 'Get 100 kills', 'Zombies', ['Launcher', 'Melee']);
    await client.AddCamo('Desert', 'Get 200 kills', 'Zombies', ['Launcher', 'Melee']);
    await client.AddCamo('Evergreen', 'Get 300 kills', 'Zombies', ['Launcher', 'Melee']);
    await client.AddCamo('Rugged', 'Get 400 kills', 'Zombies', ['Launcher', 'Melee']);
    await client.AddCamo('Grim', 'Get 600 kills', 'Zombies', ['Launcher', 'Melee']);
    await client.AddCamo('Stripe', 'Get 800 kills', 'Zombies', ['Launcher', 'Melee']);
    await client.AddCamo('Oceanic', 'Get 1000 kills', 'Zombies', ['Launcher', 'Melee']);
    await client.AddCamo('Whiteout', 'Get 1500 kills', 'Zombies', ['Launcher', 'Melee']);
    await client.AddCamo('Purple Tiger', 'Get 2000 kills', 'Zombies', ['Launcher', 'Melee']);
    /////////////////////////////////////////////////////////////////////////////////////////
    
    // SPECIAL CAMO'S SECONDARY WEAPONS /////////////////////////////////////////////////////
    // PISTOLS
    await client.AddCamo('Yottabyte', 'Get 300 kills with Cryo Freeze ammo installed.', 'Zombies', ['9mm PM']);
    await client.AddCamo('Red Ring', 'Get 300 kills with Dead Wire ammo installed.', 'Zombies', ['9mm PM']);

    await client.AddCamo('Hi-Fi', 'Kill 10 Manglers.', 'Zombies', ['Grekhova']);
    await client.AddCamo('Ceres', 'Get 5 critical kills rapidly 15 times.', 'Zombies', ['Grekhova']);

    await client.AddCamo('Velvetvine', 'Kill 300 zombies with a Rare+ variant.', 'Zombies', ['GS45']);
    await client.AddCamo('Siamese', 'Get 300 hipfire kills.', 'Zombies', ['GS45']);

    await client.AddCamo('Wavy', 'Get 300 point blank kills.', 'Zombies', ['Stryder .22']);
    await client.AddCamo('Condemn', 'Kill 30 Vermin.', 'Zombies', ['Stryder .22']);
    
    // LAUNCHERS
    await client.AddCamo('Cbrne', `Get 300 kills while the weapon is Pack-A-Punched.`, 'Zombies', ['Cigma 28']);
    await client.AddCamo('Technique', 'Kill 75 armored zombies.', 'Zombies', ['Cigma 28']);

    await client.AddCamo('Decrypt', 'Kill 30 Vermin.', 'Zombies', ['HE-1']);
    await client.AddCamo('Demeter', 'Get 300 kills with a Rare+ variant.', 'Zombies', ['HE-1']);

    // MELEES
    await client.AddCamo('Dying Bloom', 'Get 300 kills with Brain Rot ammo installed.', 'Zombies', ['Knife']);
    await client.AddCamo('Vacation Legend', 'Kill 75 armored zombies.', 'Zombies', ['Knife']);

    await client.AddCamo('Banished', 'Get 300 kills with a Rare+ variant.', 'Zombies', ['Baseball Bat']);
    await client.AddCamo('Contort', 'Kill 30 Vermin.', 'Zombies', ['Baseball Bat']);

    await client.AddCamo('Glimmering Grove', 'Get 300 kills with a Rare+ variant.', 'Zombies', ['Power Drill']);
    await client.AddCamo('Shimmer', 'Kill 10 Manglers.', 'Zombies', ['Power Drill']);
    /////////////////////////////////////////////////////////////////////////////////////////

    // MASTERY CAMO'S ALL WEAPONS ///////////////////////////////////////////////////////////
    await client.AddCamo('Mystic Gold', 'Get 10 kills rapidly 15 times.', 'Zombies', primarys.concat(secondarys).concat(melee));
    await client.AddCamo('Opal', 'Kill 30 special zombies.', 'Zombies', primarys.concat(secondarys).concat(melee));
    await client.AddCamo('Afterlife', 'Get 20 consecutive kills 10 times without taking damage.', 'Zombies', primarys.concat(secondarys).concat(melee));
    await client.AddCamo('Nebula', 'Kill 10 elite zombies.', 'Zombies', primarys.concat(secondarys).concat(melee));
    /////////////////////////////////////////////////////////////////////////////////////////

    client.Log('All data has been created and added to the database!');
};