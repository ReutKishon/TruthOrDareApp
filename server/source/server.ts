import http from "http";
import express, { Express } from "express";
import morgan from "morgan";
import routes from "./routes/games";
import cors from "cors";
import { Server } from "socket.io";
import addPlayer from "../source/controllers/games";
import addGame from "../source/controllers/games";
const router: Express = express();

router.use(express.json());

router.use(cors());

router.use("/", routes);

/** Server */
const httpServer = http.createServer(router);

const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:19006"],
    methods: ["GET", "POST", "PUT"],
  },
});

io.on("connection", (socket) => {
  console.log("User connected:" + socket.id);

  socket.on("updateGame", (data) => {
    io.sockets.emit("updatedGame", data);
  });
});


const PORT: any = process.env.PORT ?? 3000;
httpServer.listen(PORT, () =>
  console.log(`The server is running on port ${PORT}`)
);
