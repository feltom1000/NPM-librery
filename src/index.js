const messages = [
    "Tomas",
    "Ana Laura",
    "Claudio",
    "Marcela",
    "Eugenio",
    "Iara",
    "Gonzalo",
    "Lucas"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };