const config = {
  database: {
    // connection: process.env.DATABASE_URL,
    connection: "postgres://postgres:123456@127.0.0.1:5432/openid",
  },
  api: {
    host: "0.0.0.0",
    port: 3009,
  },
  jwt: {
    secretKey: "secretKey123",
  },
  sendgrid: {
    secretKey: null,
    fromEmail: null,
  },
  webClient: {
    url: "http://localhost:3000",
  },
};

module.exports = config;
