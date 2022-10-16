import { createSlice } from "@reduxjs/toolkit";
import { Player } from "../../../server/source/controllers/games";
import _ from "lodash";

interface GameState {
  code: number;
  players: { [key: number]: Player };
  managerId: number;
  askedChoice: number;
  bottleRotation: number;
  bottleAngle: number;
  bottleCoordinates?: { x: number; y: number };
}

const initialState: GameState = {
  code: null,
  managerId: null,
  players: {},
  askedChoice: null,
  bottleRotation: 0,
  bottleAngle: 0,
  bottleCoordinates: null,
};

export const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGame: (state, { payload: game }) => {
      state.code = game.code;
      state.players = game.players;
    },
    setAskedChoice: (state, choice) => {
      state.askedChoice = choice.payload;
    },
    setBottleRotation: (state, rotation) => {
      state.bottleRotation = rotation.payload;
    },
    setBottleAngle: (state, angle) => {
      state.bottleAngle = angle.payload;
    },
    setBottleCoordinates: (state, coordinates) => {
      state.bottleCoordinates = coordinates.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setGame,
  setAskedChoice,
  setBottleRotation,
  setBottleAngle,
  setBottleCoordinates,
} = game.actions;
export default game.reducer;
