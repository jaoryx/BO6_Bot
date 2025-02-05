const Camo = require('../models/Camo');
const Weapon = require('../models/Weapon');
const WeaponType = require('../models/WeaponType');
const User = require('../models/User');

function Log(message) {
    let logMsg = `${new Date().toLocaleString("nl-BE", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" })} : ${message}`;
    console.log(logMsg);
}

async function GetUser(userId) {
    let userData = await User.findOne({ userId });
    if (!userData) {
        let weapons = await GetWeapons();
        userData = { userId, mp: [], zm: [] };
        weapons.forEach(weapon => {
            weapon.camos.forEach(camo => camo.obtained = false);
            let mpCamos = weapon.camos.filter(el => el.camoType === "Multiplayer");
            let zmCamos = weapon.camos.filter(el => el.camoType === "Zombies");
            userData.mp.push({ weaponName: weapon.weaponName, weaponType: weapon.weaponType, camos: mpCamos });
            userData.zm.push({ weaponName: weapon.weaponName, weaponType: weapon.weaponType, camos: zmCamos });
        });
        await User.create(userData);
    }
    return userData
}

async function AddCamo(name, requirement, camoType, weaponTypes) {
    await Camo.create({ camoName: name, camoRequirement: requirement, camoType, weaponTypes });
}

async function AddWeapon(name, weaponType, camos) {
    if (!name || !camos || typeof(name) !== 'string' || !Array.isArray(camos)) {
        return 'Not empty!';
    } else {
        await Weapon.create({ weaponName: name, camos: camos, weaponType: weaponType });
    }
}

async function AddWeaponType(name) {
    if (!name || typeof(name) !== 'string') {
        return 'Not empty!';
    } else {
        await WeaponType.create({ weaponType: name });
    }
}

async function GetWeapons() {
    return await Weapon.find({});
}

module.exports = { Log, AddWeapon, AddWeaponType, AddCamo, GetWeapons, GetUser }