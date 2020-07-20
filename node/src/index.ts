import {createConnection} from "typeorm";
import app from './app';
const port = process.env.PORT || 3000;

createConnection().then(async connection => {
  app.listen(port);
  console.log(`listening on http://localhost:${port}`);
}).catch(error => console.log("TypeORM connection error: ", error));
