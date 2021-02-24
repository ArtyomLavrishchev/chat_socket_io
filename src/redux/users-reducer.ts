import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Dispatch} from "redux";
import {imagesApi} from "../api/images-api";

const initialState: InitialState = {
    id: '',
    userName: '',
    photo: '',
    listOfUsers: []
};

const slice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        setUser(state, action: PayloadAction<string>) {
            state.userName = action.payload;
        },
        setPhoto(state, action: PayloadAction<string>) {
            state.photo = action.payload;
        },
        addUserToTheList(state, action: PayloadAction<UsersType>) {
            if (!state.listOfUsers.find(u => u.name === action.payload.name)) {
                state.listOfUsers.push({...action.payload});
            }
        },
        removeUser(state, action: PayloadAction<string>) {
            const index = state.listOfUsers.findIndex(u => u.name === action.payload);
            if (index > -1) {
                state.listOfUsers.splice(index, 1)
            }
        }
    }
})

export const usersReducer = slice.reducer;
export const {setUser, setPhoto, addUserToTheList, removeUser} = slice.actions;

export const getPhoto = () => async (dispatch: Dispatch) => {
    try {
        const data = await imagesApi.getImage()
        dispatch(setPhoto(data[0].img))
    } catch (err) {
        console.error(err)
    }
}

type InitialState = {
    id: string
    userName: string
    photo: string
    listOfUsers: Array<UsersType>
}

export type UsersType = {
    name: string
    photo: string
}