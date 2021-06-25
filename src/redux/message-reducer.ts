import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: InitialStateType = {
    messages: [],
};

const slice = createSlice({
    name: 'messages',
    initialState: initialState,
    reducers: {
        addMessage(state, action: PayloadAction<MessageType>) {
            state.messages.push({...action.payload})
        },
        removeMessage(state, action: PayloadAction<string>) {
            const index = state.messages.findIndex(m => m.id === action.payload);
            if (index > -1) {
                state.messages.splice(index, 1)
            }
        }
    }
})

export const messageReducer = slice.reducer;
export const {addMessage, removeMessage} = slice.actions;

type InitialStateType = {
    messages: Array<MessageType>
}

export type MessageType = {
    id: string
    message: string
    name: string
    photo: string
    newImage: string
}