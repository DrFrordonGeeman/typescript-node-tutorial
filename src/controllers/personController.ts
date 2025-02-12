import { Request, Response } from 'express';
import { Person } from '../models/person';

let people: Person[] = []; // Simulierte Datenbank (in-memory)

export const getAllPeople = (req: Request, res: Response): void => {
  res.status(200).json(people);
};

export const createPerson = (req: Request, res: Response): void => {
  const { name, surname, email, telephone } = req.body;
  const newPerson = new Person(name, surname, email, telephone);
  people.push(newPerson);
  res.status(201).json(newPerson);
};
