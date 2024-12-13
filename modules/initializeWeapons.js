const Camo = require('../models/Camo');

module.exports = async (client) => {
    let camos = await Camo.find({});
    
    const arWeapons = ['XM4', 'AK-47', 'AMES 85', 'GPR 91', 'Model L', 'Goblin MK2', 'AS VAL'];
    const smgWeapons = ['C9', 'KSV', 'Tanto .22', 'PP-919', 'Jackal PDW', 'Kompakt 92'];
    const shotgunWeapons = ['Marine SP', 'ASG-89'];
    const lmgWeapons = ['PU-21', 'XMG', 'GPMG-7'];
    const marksmanWeapons = ['SWAT 5.56', 'Tsarkov 7.62', 'AEK-973', 'DM-10'];
    const sniperWeapons = ['LW3A1 Frostline', 'SVD', 'LR 7.62'];
    const pistolWeapons = ['9mm PM', 'Grekhova', 'GS45', 'Stryder .22'];
    const launcherWeapons = ['CIGMA 2B', 'HE-1'];
    const meleeWeapons = ['Knife', 'Baseball Bat', 'Power Drill'];

    arWeapons.forEach(async weapon => {
        let weaponCamos = camos.filter(el => el.weaponTypes.includes('Assault Rifle') || el.weaponTypes.includes(weapon));
        await client.AddWeapon(weapon, 'Assault Rifle', weaponCamos)
    });

    smgWeapons.forEach(async weapon => {
        let weaponCamos = camos.filter(el => el.weaponTypes.includes('SMG') || el.weaponTypes.includes(weapon));
        await client.AddWeapon(weapon, 'SMG', weaponCamos)
    });

    shotgunWeapons.forEach(async weapon => {
        let weaponCamos = camos.filter(el => el.weaponTypes.includes('Shotgun') || el.weaponTypes.includes(weapon));
        await client.AddWeapon(weapon, 'Shotgun', weaponCamos)
    });

    lmgWeapons.forEach(async weapon => {
        let weaponCamos = camos.filter(el => el.weaponTypes.includes('LMG') || el.weaponTypes.includes(weapon));
        await client.AddWeapon(weapon, 'LMG', weaponCamos)
    });

    marksmanWeapons.forEach(async weapon => {
        let weaponCamos = camos.filter(el => el.weaponTypes.includes('Marksman Rifle') || el.weaponTypes.includes(weapon));
        await client.AddWeapon(weapon, 'Marksman Rifle', weaponCamos)
    });

    sniperWeapons.forEach(async weapon => {
        let weaponCamos = camos.filter(el => el.weaponTypes.includes('Sniper Rifle') || el.weaponTypes.includes(weapon));
        await client.AddWeapon(weapon, 'Sniper Rifle', weaponCamos)
    });

    pistolWeapons.forEach(async weapon => {
        let weaponCamos = camos.filter(el => el.weaponTypes.includes('Pistol') || el.weaponTypes.includes(weapon));
        await client.AddWeapon(weapon, 'Pistol', weaponCamos)
    });

    launcherWeapons.forEach(async weapon => {
        let weaponCamos = camos.filter(el => el.weaponTypes.includes('Launcher') || el.weaponTypes.includes(weapon));
        await client.AddWeapon(weapon, 'Launcher', weaponCamos)
    });

    meleeWeapons.forEach(async weapon => {
        let weaponCamos = camos.filter(el => el.weaponTypes.includes('Melee') || el.weaponTypes.includes(weapon));
        await client.AddWeapon(weapon, 'Melee', weaponCamos)
    });

    client.Log('All data has been created and added to the database!');
}