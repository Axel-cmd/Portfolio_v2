---
name: 'hexaNetFrameDecoder'
description: 'A python script to decode an hexadecimal network frame, use to print separately parts of the frame, and decode frame data from hexa to ascii. Useful for network analysis, debugging and protocol reverse-engineering.'
tags: ['python', 'network', 'cli', 'automation']
image: '../../../public/static/logo.svg'
link: 'https://github.com/Axel-cmd/hexaNetFrameDecoder'
startDate: '2023-04-16'
---
# hexaNetFrameDecoder

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

## 📝 Description

**hexaNetFrameDecoder** is a Python tool designed to decode and interpret hexadecimal network frames/data.
It helps convert raw hex-formatted frames into a readable, parsed structure — useful for network analysis, debugging, protocol reverse-engineering, security tests or embedded systems debugging.

This project aims to allow users and developers to quickly transform raw hex dumps into meaningful data without manual parsing.

---

## 📦 Requirements

Before using this tool, make sure you have:

- **Python 3.8+** (or whatever version your code supports)
- A valid hex frame input (file), correctly formatted

---

## 🛠 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Axel-cmd/hexaNetFrameDecoder.git
cd hexaNetFrameDecoder

# (Optional but recommended) create a virtual environment
python3 -m venv venv
source venv/bin/activate  # macOS / Linux
# venv\Scripts\activate   # Windows
```

## 🚀 Usage

Here is a basic example of how to use the decoder:

```bash
python main.py <input_hex_frame.txt>
```
