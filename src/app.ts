import express from "express";
import cors from "cors";
import helmet from "helmet";
import Routes from './routes';
const app = express();

//Middleware Intitialization
app.use(cors());
//Parsing  JSON request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

Routes.init(app);

const errorTypes = ["unhandledRejection", "uncaughtException"];
const signalTraps: ("SIGTERM" | "SIGINT" | "SIGUSR2")[] = [
  "SIGTERM",
  "SIGINT",
  "SIGUSR2",
];

errorTypes.map((type) => {
  process.on(type, async (e) => {
    try {
      //handle database connection
      process.exit(0);
    } catch (_) {
      process.exit(1);
    }
  });
});

signalTraps.map((type) => {
  process.on(type, async (e) => {
    try {
      //handle database connection
      process.exit(0);
    } catch (_) {
      process.exit(1);
    }
  });
});

export default app;
