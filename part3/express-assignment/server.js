const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());

morgan.token("data", function getData(req) {
  return JSON.stringify(req.body);
});

app.use(morgan(":method :url :status :response-time ms :data"));
//app.use(morgan("tiny"));

const requestLogger = (req, res, next) => {
  console.log("Method: ", req.method);
  console.log("Path: ", req.path);
  console.log("Body: ", req.body);
  console.log("Headers: ", req.headers);
  next();
};

app.use(requestLogger);

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

const generatePersonId = () => {
  const id =
    Math.floor(Math.random() * (10000 - persons.length + 1)) + persons.length;
  return id;
};

app.post("/api/persons", (req, res) => {
  const person = req.body;
  const isName = persons.find((per) => per.name === person.name);
  if (!person.name || !person.number) {
    return res.status(404).json({ message: "name or number not found " });
  }

  if (isName) {
    return res.status(409).json({ error: "Name must be unique" });
  }

  const newPerson = {
    id: generatePersonId(),
    name: person.name,
    number: person.number,
  };

  persons = persons.concat(newPerson);
  res.status(200).json("Successfully added the person");
});

const unknownEndPoint = (req, res) => {
  res.status(404).json({ error: "Unknowkn Endpoint" });
};

app.use(unknownEndPoint);

const port = 3000;
app.listen(port, (req, res) =>
  console.log(`Server is listening on port ${port}`)
);
