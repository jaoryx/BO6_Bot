const Camo = require('../models/Camos');
const Weapon = require('../models/Weapon');

function Log(message) {
    let logMsg = `${new Date().toLocaleString("nl-BE", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" })} : ${message}`;
    console.log(logMsg);
}

async function AddCamo(name, requirement) {
    if (!name || !requirement || typeof(name) !== 'string' || typeof(requirement) !== 'string') {
        return 'Not empty!';
    } else {
        let camoData = await Camo.findOne({ camoName: name });
        if (camoData) {
            return 'Already exists!'
        } else {
            await Camo.create({ camoName: name, camoRequirement: requirement });
        }
    }
}

async function AddWeapon(name, camos) {
    if (!name || !camos || typeof(name) !== 'string' || !Array.isArray(camos)) {
        return 'Not empty!';
    } else {
        let weaponData = await Weapon.findOne({ weaponName: name });
        if (weaponData) {
            return 'Already exists!'
        } else {
            await Weapon.create({ weaponName: name, camos: camos });
        }
    }
}

module.exports = { Log }