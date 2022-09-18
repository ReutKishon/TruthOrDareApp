import { createSlice } from "@reduxjs/toolkit";
import { Player } from "./models";

interface GameState {
  players: Player[];
  bottleRotation: number;
  bottleAngle: number;
  bottleCoordinates?: { x: number; y: number };
  askingPlayer: number;
  askedPlayer: number;
  askedChoice: string;
  askingChoice: string;
}

const initialState: GameState = {
  players: [],
  bottleRotation: 0,
  bottleAngle: 0,
  bottleCoordinates: null,
  askingPlayer: null,
  askedPlayer: null,
  askedChoice: null,
  askingChoice: null,
};

export const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    initFakePlayers: (state) => {
      function generatePlayer() {
        const id = Math.floor(Math.random() * 100);
        return {
          name: "Player " + id,
          id,
        };
      }
      state.players = Array.from({ length: 6 }, () => generatePlayer());
    },
    setBottleRotation: (state, rotation) => {
      state.bottleRotation = rotation.payload;
      // console.log(state.bottleRotation)
    },
    setBottleAngle: (state, angle) => {
      state.bottleAngle = angle.payload;
      // console.log(state.bottleAngle)
    },
    putBottleCoordinates: (state, coordinates) => {
      if (state.bottleCoordinates) {
        return;
      }
      state.bottleCoordinates = coordinates.payload;
      // console.log(state.bottleCoordinates)
    },
    setAskingPlayer: (state, playerId) => {
      state.askingPlayer = playerId.payload;
      console.log("asking player:" + state.askingPlayer);
    },
    setAskedPlayer: (state, playerId) => {
      state.askedPlayer = playerId.payload;
      console.log("asked player:" + state.askedPlayer);
    },
    setAskedChoice: (state, choice) => {
      state.askedChoice = choice.payload;
      // console.log(state.askedChoice);
    },
    setAskingChoice: (state, choice) => {
      state.askingChoice = choice.payload;
      // console.log(state.askingChoice);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  initFakePlayers,
  setBottleRotation,
  setBottleAngle,
  putBottleCoordinates,
  setAskedPlayer,
  setAskingPlayer,
  setAskedChoice,
  setAskingChoice,
} = game.actions;
export default game.reducer;
