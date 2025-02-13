import express, { Application } from 'express';
import { addPerson, getPersons } from "./db";

const app = express();
app.use(express.json());

// GET: Alle Personen abrufen
app.get("/persons", async (req, res) => {
  const persons = await getPersons();
  res.json(persons);
});

// POST: Neue Person hinzufügen
app.post("/persons", async (req, res) => {
  const { name, surname, email, phone } = req.body;
  await addPerson(name, surname, email, phone);
  res.status(201).json({ message: "Person hinzugefügt" });
});

app.listen(3000, () => console.log("✅ Server läuft auf http://localhost:3000"));