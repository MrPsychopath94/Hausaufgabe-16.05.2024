const express = require("express");
const fs = require("fs"); // Zum Schreiben in eine Datei
const app = express();
const port = 3003;

// Middleware zur Verarbeitung von URL-kodierten Daten
app.use(express.urlencoded({ extended: true }));

// GET-Endpunkt zum Anzeigen des Formulars
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// POST-Route zum Verarbeiten der Registrierungsdaten
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  // Hier würden normalerweise Validierungen stattfinden

  // Daten in eine Datei schreiben (hier: 'registrations.txt')
  const data = `Name: ${name}, E-Mail: ${email}, Passwort: ${password}\n`;
  fs.appendFile("registrations.txt", data, (err) => {
    if (err) throw err;
    console.log("Registrierungsdaten gespeichert!");
  });

  res.send("Registrierung erfolgreich!");
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
