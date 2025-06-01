const express = require("express");

const app = express();

app.use(express.json());

const persons = [
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

const port = 3000;
app.listen(port, (req, res) =>
  console.log(`Server is listening on port ${port}`)
);
