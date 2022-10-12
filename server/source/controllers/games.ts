import { Request, Response, NextFunction } from "express";
import { generateCode } from "../utils";

const playerCounter = 0;
let gamesCache: Record<number, Game> = {};

export interface Player {
  playerId: number;
  name: string;
}

interface Game {
  code: number;
  managerId: number;
  players: Record<number, Player>;
}

// add new player to the game
const addPlayer = async (req: Request, res: Response, next: NextFunction) => {
  let gameCode: number = Number(req.params.code);
  // get the player data
  let playerName: string = req.body.name ?? null;
  let playerId: number = generateCode();

  const player: Player = { name: playerName, playerId: playerId };
  let game = gamesCache[gameCode];

  if (!game) {
    console.log(gameCode);
    console.log(gamesCache);
    return res.status(404).json({
      message: "Game is not found!",
    });
  }
  game.players[playerId] = player;

  // console.log(game);
  return res.status(200).json({
    game,
  });
};

// adding a game
const addGame = async (req: Request, res: Response, next: NextFunction) => {
  let gameCode = generateCode();
  while (gamesCache[gameCode]) {
    gameCode = generateCode();
  }
  // get the player data
  let managerName: string = req.body.name ?? null;
  let managerId: number = generateCode();

  const manager: Player = { name: managerName, playerId: managerId };
  let players = {
    [managerId]: manager,
  };
  const game: Game = { managerId, players, code: gameCode };
  gamesCache[gameCode] = game;

  // return response
  return res.status(200).json({
    game,
  });
};

export default { addPlayer, addGame };
