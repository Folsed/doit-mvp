import { Action, combineSlices, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { postsApiSlice } from './features/posts/postsApiSlice'

const rootReducer = combineSlices(postsApiSlice)

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaulMiddleware => {
            return getDefaulMiddleware().concat(postsApiSlice.middleware)
        },
    })
}

export type TAppStore = ReturnType<typeof makeStore>
export type TRootState = ReturnType<typeof rootReducer>

export type TAppThunk<ThunkReturnType = void> = ThunkAction<
    ThunkReturnType,
    TRootState,
    unknown,
    Action
>
export type TAppDispatch = TAppStore['dispatch']
