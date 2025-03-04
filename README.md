# telegram-bulk-sender
backend/
│── config/
│   ├── config.js             # Configuration file for environment variables
│── models/
│   ├── Account.js            # MongoDB model for Telegram accounts
│   ├── User.js               # MongoDB model for users
│   ├── MessageLog.js         # MongoDB model for message logs
│── routes/
│   ├── accounts.js           # API routes for managing Telegram accounts
│   ├── users.js              # API routes for users
│   ├── messages.js           # API for sending bulk messages
│── index.js                  # Main Express server
│── package.json              # Backend dependencies
│── Dockerfile                # Docker setup for Koyeb deployment
│── .env.example              # Example environment variables
│── .gitignore                # Ignore unnecessary files
