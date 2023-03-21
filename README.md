# Node.js and MongoDB MVC Boilerplate

This boilerplate code is designed to speed up project development. It includes user registration, user login, and admin login functionality, with protected admin routes.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

To run this project, you'll need to have the following software installed on your system:

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)

### Installation

1. Clone the repository to your local machine:

```
git clone https://github.com/bbhupen/MVC-boilerplate.git
cd MVC-boilerplate
```


2. Install the dependencies:

```
npm install

```
### Environment Variables

Rename the `.env.example` file to `.env` and update the values as required:

```
PORT=3000
MONGODB_URI=your_mongo_uri
SESSION_SECRET=your_secret_key
```


## Usage

Start the application with the following command:

```
npm run dev
```


The server will be listening on `http://localhost:3000`. You can access the app on your browser by visiting this URL.

## Contributing

If you find any bugs, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
