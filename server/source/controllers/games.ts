import {Request, Response, NextFunction} from "express";
import {generateCode} from "../utils";

const playerCounter = 0;
let gamesCache: Record<number, Game> = {};

interface Player {
    playerId: number;
    name: string;
}

interface Game {
    code: number;
    managerId: number;
    players: Record<number, Player>;
}


//getting a game
const getGame = async (req: Request, res: Response, next: NextFunction) => {
    // get the game code from the req
    const gameCode = Number(req.params.code);

    const game = gamesCache[gameCode]

    if (!game) {
        console.log(gameCode);
        console.log(gamesCache);
        return res.status(404).json({
            message: "Game is not found!",
        });
    }

    return res.status(200).json({
        game,
    });
};

// add new player to the game
const addPlayer = async (req: Request, res: Response, next: NextFunction) => {
    let gameCode: number = Number(req.params.code);
    // get the player data
    let playerName: string = req.body.name ?? null;
    let playerId: number = generateCode();

    const player: Player = {name: playerName, playerId: playerId};
    let game = gamesCache[gameCode]

    if (!game) {
        console.log(gameCode);
        console.log(gamesCache);
        return res.status(404).json({
            message: "Game is not found!",
        });
    }
    game.players[playerId] = player;

    console.log(game)
    return res.status(200).json({
        game,
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

    let game = gamesCache[gameCode]
    if (!game) {
        return res.status(404).json({
            message: "Game is not found!",
        });
    }
    delete game.players[playerId];
    return res.status(200).json({
        message: game,
    });
};

// deleting a post
const deleteGame = async (req: Request, res: Response, next: NextFunction) => {
    let gameCode: number = Number(req.params.code);

    delete gamesCache[gameCode];

    return res.status(200).json({
        message: "game deleted successfully",
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

    const manager: Player = {name: managerName, playerId: managerId};
    let players = {
        [managerId]: manager
    }
    const game: Game = {managerId, players, code: gameCode};
    gamesCache[gameCode] = game;

    // return response
    return res.status(200).json({
        game,
    });
};

export default {getGame, addPlayer, deletePlayer, deleteGame, addGame};
