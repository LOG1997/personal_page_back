const mysql = require("mysql2");
const {
  MYSQL_CONNECT_HOST,
  MYSQL_CONNECT_PORT,
  MYSQL_CONNECT_USER,
  MYSQL_CONNECT_PASSWORD,
  MYSQL_CONNECT_DATABASE,
} = require("../config/sql_connect_config");
console.log(
  "MYSQL_CONNECT_HOSTπππ",
  MYSQL_CONNECT_HOST,
  MYSQL_CONNECT_PORT,
  MYSQL_CONNECT_USER,
  MYSQL_CONNECT_PASSWORD,
  MYSQL_CONNECT_DATABASE
);
exports.query = (sql, data, callback) => {
  let connection = mysql.createConnection({
    host: MYSQL_CONNECT_HOST,
    user: MYSQL_CONNECT_USER,
    password: MYSQL_CONNECT_PASSWORD,
    port: MYSQL_CONNECT_PORT,
    database: MYSQL_CONNECT_DATABASE,
    multipleStatements: true,
  });
  // εΌε―θΏζ₯
  connection.connect();
  // ζ§θ‘ζδ½
  connection.query(sql, data, callback);
  connection.end();
};
