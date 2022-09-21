import { Request, Response, NextFunction } from "express";
import { generateCode } from "../utils";

class Player {
  static counter: number = 0;
  playerId: number;
  name: string;

  constructor(name: string) {
    this.playerId = Player.counter++;
    this.name = name;
  }
}
class Game {
  code: number;
  managerId: number;
  players: Map<number, Player>;

  constructor(code: number, managerId: number, players: Map<number, Player>) {
    this.code = code;
    this.managerId = managerId;
    this.players = players;
  }
}

let gamesMap = new Map<number, Game>();

//getting a game
const getGame = async (req: Request, res: Response, next: NextFunction) => {
  // get the game code from the req
  let gameCode: number = Number(req.params.code);

  const game: Game | undefined = gamesMap.get(gameCode);
  if (game === undefined) throw new Error("Game is not found!");

  return res.status(200).json({
    message: game,
  });
};

// add new player to the game
const addPlayer = async (req: Request, res: Response, next: NextFunction) => {
  let gameCode: number = Number(req.params.code);
  // get the player data
  let playerName: string = req.body.name ?? null;
  let playerId: number = req.body.id ?? null;

  const player: Player = new Player(playerName);
  let game: Game | undefined = gamesMap.get(gameCode);
  if (game === undefined) throw new Error("Game is not found!");
  game.players.set(playerId, player);

  return res.status(200).json({
    message: game,
  });
};

// delete player from the game
const deletePlayer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let gameCode: number = Number(req.params.code);

  let playerId: number = req.body.id ?? null;

  let game: Game | undefined = gamesMap.get(gameCode);
  if (game === undefined) throw new Error("Game is not found!");
  game.players.delete(playerId);
  return res.status(200).json({
    message: game,
  });
};

// deleting a post
const deleteGame = async (req: Request, res: Response, next: NextFunction) => {
  let gameCode: number = Number(req.params.code);

  gamesMap.delete(gameCode);

  return res.status(200).json({
    message: "game deleted successfully",
  });
};

// adding a game
const addGame = async (req: Request, res: Response, next: NextFunction) => {
  let gameCode = generateCode();
  while (gamesMap.has(gameCode)) {
    gameCode = generateCode();
  }
  // get the player data
  let managerName: string = req.body.name ?? null;
  let managerId: number = req.body.id ?? null;

  const manager: Player = new Player(managerName);
  let players: Map<number, Player> = new Map<number, Player>([
    [managerId, manager],
  ]);
  const game: Game = new Game(gameCode, managerId, players);
  // return response
  return res.status(200).json({
    message: game,
  });
};

export default { getGame, addPlayer, deletePlayer, deleteGame, addGame };
