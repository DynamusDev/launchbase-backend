console.log('APP running on Database ==> ', process.env.DATABASE_URL)
if (process.env.EXTENSION === 'ts') {
  module.exports = {
    "type": "postgres",
    "port": 5432,
    "url": process.env.DATABASE_URL,
    "migrations": [
      `./${process.env.ROUTE}/database/migrations/*.{ts,js}`
    ],
    "entities": [`./${process.env.ROUTE}/models/*.{ts,js}`],
    "cli": {
      "migrationsDir": `./${process.env.ROUTE}/database/migrations`
    }
  }
} else {
  module.exports = {
    "type": "postgres",
    "port": 5432,
    "url": process.env.DATABASE_URL,
    "ssl": true,
    "extra": {
      "ssl": {
        "rejectUnauthorized": false
      }
    },
    "migrations": [
      `./${process.env.ROUTE}/database/migrations/*.{ts,js}`
    ],
    "entities": [`./${process.env.ROUTE}/models/*.{ts,js}`],
    "cli": {
      "migrationsDir": `./${process.env.ROUTE}/database/migrations`
    }
  }
}