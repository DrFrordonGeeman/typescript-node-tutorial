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
exports.addPerson = addPerson;
exports.getPersons = getPersons;
const oracledb_1 = __importDefault(require("oracledb"));
const dbConfig = {
    user: "SYSTEM",
    password: "!MeBe190E!",
    connectString: "localhost/XEPDB1", // Falls du eine Cloud-DB nutzt, ersetze dies mit der Verbindungs-URL
};
// Testen der Verbindung
function testConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection(dbConfig);
            console.log("✅ Erfolgreich mit Oracle DB verbunden!");
        }
        catch (err) {
            console.error("❌ Fehler bei der Verbindung:", err);
        }
        finally {
            if (connection) {
                yield connection.close();
            }
        }
    });
}
// Person hinzufügen
function addPerson(name, surname, email, phone) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield oracledb_1.default.getConnection(dbConfig);
        yield connection.execute(`INSERT INTO PERSON (name, surname, email, phone) VALUES (:name, :surname, :email, :phone)`, { name, surname, email, phone });
        yield connection.commit();
        console.log(`✅ Person ${name} ${surname} wurde hinzugefügt.`);
        yield connection.close();
    });
}
// Alle Personen abrufen
function getPersons() {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield oracledb_1.default.getConnection(dbConfig);
        const result = yield connection.execute(`SELECT * FROM PERSON`);
        console.log(result.rows);
        yield connection.close();
    });
}
testConnection();
