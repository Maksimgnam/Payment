import { configureStore } from '@reduxjs/toolkit'
import PopupReducer from './Popup/PopupSlice'
export default configureStore({
    reducer: {
        Popupcount: PopupReducer
    }
})