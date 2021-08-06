const Pool = require("pg").Pool;

const pool = new Pool({
  user: "renantb",
  password: "renan99",
  host: "localhost",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;