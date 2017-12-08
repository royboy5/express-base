# Express Base

REST API base project using Express JS.

Uses passport-local for authentication with JWT

## Setup

```
$ git clone https://github.com/royboy5/express-base.git <proj_name>
$ cd <proj_name> && npm i
```

## Usage

To run locally

```
$ npm run dev
```

### Routes

/signup - POST - email / password will be stored in the Db and returns a JWT

/signin - POST - email / password will be verified in the Db and returns a JWT

### Headers

To access authenticated routes,

```
auth: <token>
```
