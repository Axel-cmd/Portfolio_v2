---
name: 'ScriptAutomatizationEc2Aws'
description: 'Python script that automates the creation of an EC2 instance on AWS along with its associated Key Pair. Fast, simple and fully automated way to deploy an EC2 instance without using the AWS console. Developed during a hackathon.'
tags: ['python', 'aws', 'ec2', 'boto3', 'devops']
image: '../../../public/static/aws.png'
link: 'https://github.com/Axel-cmd/ScriptAutomatizationEc2Aws'
startDate: '2022-04-20'
endDate: '2022-06-25'
---
# ScriptAutomatizationEc2Aws

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

## 📝 Description

**ScriptAutomatizationEc2Aws** is a Python script that automates the creation of an **EC2 instance** on AWS along with its associated **Key Pair**.
The goal of this project is to provide a fast, simple, and fully automated way to deploy an EC2 instance without using the AWS console.
It was originally developed during a hackathon to simplify and speed up AWS EC2 setup for quick deployments.

---

## 📦 Requirements

Before using the script, make sure you have:

- **Python 3.8+**
- An **AWS account** with the following permissions:
 - `ec2:CreateKeyPair`
 - `ec2:RunInstances`
 - `ec2:DescribeInstances`
- AWS CLI configured or credentials stored in:
 `~/.aws/credentials`
- Python dependency: **boto3**

---

## 🛠 Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Axel-cmd/ScriptAutomatizationEc2Aws.git
cd ScriptAutomatizationEc2Aws

# (Optional but recommended) create a virtual environment
python3 -m venv venv
source venv/bin/activate  # macOS / Linux
# venv\Scripts\activate   # Windows

# Install dependencies
pip install boto3
```

## ⚙️ Configuration

Before running the script, you must configure the settings in the `config.json` file.

### 1️⃣ Create your configuration file
Start by copying the example file:

```bash
cp config.json.example config.json
```

### 2️⃣ Edit config.json

Open the file and fill in the required fields:

```json
{
  "region": "your-aws-region",
  "instance_type": "t2.micro",
  "ami_id": "your-ami-id",
  "key_name": "your-keypair-name",
  "private_key_path": "path/to/save/your-key.pem"
}
```

🔍 Field Description

| Field | Description |
| ------------------ | --------------------------------------------------------------------- |
| `region` | AWS region where the EC2 instance will be created (e.g. `eu-west-3`). |
| `instance_type` | Type of EC2 instance to launch (e.g. `t2.micro`). |
| `ami_id` | ID of the AMI to use when launching the instance. |
| `key_name` | Name of the Key Pair to create or use. |
| `private_key_path` | Local path where the generated `.pem` key will be saved. |
