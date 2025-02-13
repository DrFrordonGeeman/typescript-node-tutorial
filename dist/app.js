"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// GET: Alle Personen abrufen
app.get("/persons", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const persons = yield (0, db_1.getPersons)();
    res.json(persons);
}));
// POST: Neue Person hinzufügen
app.post("/persons", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, surname, email, phone } = req.body;
    yield (0, db_1.addPerson)(name, surname, email, phone);
    res.status(201).json({ message: "Person hinzugefügt" });
}));
app.listen(3000, () => console.log("✅ Server läuft auf http://localhost:3000"));
