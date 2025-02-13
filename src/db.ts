import oracledb from "oracledb";
import fs from "fs";

const dbConfig = {
  user: "SYSTEM",
  password: "!MeBe190E!",
  connectString: "localhost/XEPDB1", // Falls du eine Cloud-DB nutzt, ersetze dies mit der Verbindungs-URL
};

// Testen der Verbindung
async function testConnection() {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    console.log("✅ Erfolgreich mit Oracle DB verbunden!");
  } catch (err) {
    console.error("❌ Fehler bei der Verbindung:", err);
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

// Person hinzufügen
export async function addPerson(name: string, surname: string, email: string, phone: string) {
  const connection = await oracledb.getConnection(dbConfig);
  await connection.execute(
    `INSERT INTO PERSON (name, surname, email, phone) VALUES (:name, :surname, :email, :phone)`,
    { name, surname, email, phone }
  );
  await connection.commit();
  console.log(`✅ Person ${name} ${surname} wurde hinzugefügt.`);
  await connection.close();
}

// Alle Personen abrufen
export async function getPersons() {
  const connection = await oracledb.getConnection(dbConfig);
  const result = await connection.execute(`SELECT * FROM SYSTEM.PERSON`);
  console.log(result.rows);
  await connection.close();
}

testConnection();