
import express from 'express';
import  bodyParser from'body-parser';
import crypto from 'crypto';
import http from 'http';
import fs from 'fs';

//body-parser – middleware для Express для работы с телом запроса;
//Node.js body parsing middleware.

//createReadStream, – функция из стандартного модуля fs.
//The function fs.createReadStream() allows you to open up a readable stream in a very simple manner
//crypto, http – стандартные модули node's

import appexp from './app.js';
const PORT = process.env.PORT || 4321;
const app=appexp(express,bodyParser,fs,crypto,http);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
