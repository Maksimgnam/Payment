import { createSlice } from "@reduxjs/toolkit";

export const popupSlice = createSlice(
    {
        name: 'Popupcount',
        initialState: {
            value: 0
        },

        reducers: {
            addHundret: state => {
                state.value += 100

            },
            addFiveHundret: state => {
                state.value += 500

            },
            addThoustand: state => {
                state.value += 1000

            },
            addSum: (state, action) => {
                state.value += action.payload
            }

        }



    }
)

export const { addHundret, addFiveHundret, addThoustand, addSum } = popupSlice.actions;
export default popupSlice.reducer