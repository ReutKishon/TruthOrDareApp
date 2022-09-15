import { createSlice } from '@reduxjs/toolkit'

export const game = createSlice({
    name: 'game',
    initialState: {
        players: [],
        bottleRotation: 0,
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
        }
    }
})

// Action creators are generated for each case reducer function
export const { initFakePlayers, setBottleRotation } = game.actions

export default game.reducer