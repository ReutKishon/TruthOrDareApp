import { createSlice } from "@reduxjs/toolkit";
import { Player } from "../../../server/source/controllers/games";
import _ from "lodash";

interface GameState {
  code: number;
  players: { [key: number]: Player };
  managerId: number;
  bottleRotation: number;
  bottleAngle: number;
  bottleCoordinates?: { x: number; y: number };
}

const initialState: GameState = {
  code: null,
  managerId: null,
  players: {},
  bottleRotation: 0,
  bottleAngle: 0,
  bottleCoordinates: null,
};

export const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    setPlayers: (state, players) => {
      state.players = _.cloneDeep(players.payload);

      // state.players = { ...players.payload };

      // console.log("players:" + JSON.stringify(state.players));
    },
    setCode: (state, code) => {
      state.code = code.payload;
    },
    setManagerId: (state, managerId) => {
      state.managerId = managerId.payload;
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
  },
});

// Action creators are generated for each case reducer function
export const {
  setCode,
  setPlayers,
  setManagerId,
  setBottleRotation,
  setBottleAngle,
  putBottleCoordinates,
} = game.actions;
export default game.reducer;
