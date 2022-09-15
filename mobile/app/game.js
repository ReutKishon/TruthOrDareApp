import { createSlice } from '@reduxjs/toolkit'

export const game = createSlice({
    name: 'game',
    initialState: {
        players: [],
        bottleRotation: 0,
        bottleAngle: 0,
    },
    reducers: {
        initFakePlayers: state => {
            function generatePlayer() {
                const id = Math.floor(Math.random() * 100)
                return {
                    name: "Player " + id,
                    id
                };
            }
            state.players = Array.from({length: 10}, () => generatePlayer());
        },
        setBottleRotation: (state, rotation) => {
            state.bottleRotation = rotation
            console.log(state.bottleRotation)
        },
        setBottleAngle: (state, angle) => {
            state.bottleAngle = angle
            console.log(state.bottleAngle)
        }
    }
})

// Action creators are generated for each case reducer function
export const { initFakePlayers, setBottleRotation, setBottleAngle } = game.actions

export default game.reducer