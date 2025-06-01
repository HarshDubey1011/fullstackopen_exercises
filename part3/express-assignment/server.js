const express = require("express");

const app = express();

app.use(express.json());

let persons = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (req, res) => {
  res.json({ message: "Successfully!", persons });
});
const d = new Date();
app.get("/info", (req, res) => {
  res.send(`<h1>PhoneBook has info for ${persons.length} people</h1>
            <p>${d}</p>
        `);
});

app.get("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  const person = persons.find((person) => person.id == id);
  if (person === undefined) {
    return res.status(404).json({ error: "Not Found!" });
  }
  res.status(201).json(person);
});

app.delete("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  const isFound = persons.find((person) => person.id === id);
  console.log(isFound);
  if (!isFound) {
    return res.status(404).json({ error: "ID not found!" });
  }
  persons = persons.filter((person) => person.id != id);

  res.status(201).json({ message: "Person successfully deleted!" });
});

const port = 3000;
app.listen(port, (req, res) =>
  console.log(`Server is listening on port ${port}`)
);
