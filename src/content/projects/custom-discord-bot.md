---
name: 'Custom Discord Bot'
description: 'A flexible and modular Discord bot built with JavaScript (Node.js) using discord.js. Extensible, configurable via environment variables, ideal for personal servers or learning bot development.'
tags: ['javascript', 'nodejs', 'discord.js', 'discord-bot']
image: '../../../public/static/discord-logo.webp'
link: 'https://github.com/Axel-cmd/Custom-Discord-Bot'
startDate: '2021-12-08'
endDate: '2021-12-29'
---
# Custom Discord Bot 🤖

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

## 📝 Project Overview

**Custom Discord Bot** is a flexible and modular Discord bot built with **JavaScript (Node.js)** using **discord.js**.

This bot can be extended easily, supports configuration through environment variables, and is ideal for personal servers, communities, or learning bot development.

---

## 🛠️ Features

✅ Modular command system
✅ Easy configuration with environment variables
✅ Ready for hosting locally or on a server

---

## 📦 Technologies Used

This bot is built using:

- **Node.js** — Runtime
- **discord.js** — Discord API wrapper
- **JavaScript (ES Modules)** — Code structure
- **dotenv** — Environment configuration

---

## ⚙️ Setup & Installation

### 📥 Clone the Repository

```bash
git clone https://github.com/Axel-cmd/Custom-Discord-Bot.git
cd Custom-Discord-Bot
```

## 📌 Install Dependencies

Make sure you have Node.js v16+ installed (required for discord.js v14+):

```bash
npm install
```

## 🔐 Configuration

Duplicate the example config:

```bash
cp .env.example .env
```

Open .env and fill in your values:

```env
DISCORD_TOKEN=your_discord_bot_token
CLIENT_ID=your_bot_client_id
GUILD_ID=your_guild_id
```

## 🚀 Running the Bot
### 🧪 Development Mode

```bash
npm run dev
```

### 🌐 Production Mode

```bash
node index.js
```

## 📜 License

This project is licensed under the MIT License.
Feel free to use, modify, and adapt the code for your own Discord server or community
