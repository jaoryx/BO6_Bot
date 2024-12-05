const Camo = require('../models/Camo');
const Weapon = require('../models/Weapon');
const WeaponType = require('../models/WeaponType');

function Log(message) {
    let logMsg = `${new Date().toLocaleString("nl-BE", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" })} : ${message}`;
    console.log(logMsg);
}

async function AddCamo(name, requirement) {
    if (!name || !requirement || typeof(name) !== 'string' || typeof(requirement) !== 'string') {
        return 'Not empty!';
    } else {
        await Camo.create({ camoName: name, camoRequirement: requirement });
    }
}

async function AddWeapon(name, camos) {
    if (!name || !camos || typeof(name) !== 'string' || !Array.isArray(camos)) {
        return 'Not empty!';
    } else {
        await Weapon.create({ weaponName: name, camos: camos });
    }
}

async function AddWeaponType(name) {
    if (!name || typeof(name) !== 'string') {
        return 'Not empty!';
    } else {
        await Camo.create({ camoName: name, camoRequirement: requirement });
    }
}

module.exports = { Log }