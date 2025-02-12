"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPerson = exports.getAllPeople = void 0;
const person_1 = require("../models/person");
let people = []; // Simulierte Datenbank (in-memory)
const getAllPeople = (req, res) => {
    res.status(200).json(people);
};
exports.getAllPeople = getAllPeople;
const createPerson = (req, res) => {
    const { name, surname, email, telephone } = req.body;
    const newPerson = new person_1.Person(name, surname, email, telephone);
    people.push(newPerson);
    res.status(201).json(newPerson);
};
exports.createPerson = createPerson;
