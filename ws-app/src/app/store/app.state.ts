import { IRegistrationState, registrationAdapter } from "./app.entity";

export interface IAppState {
    registrationState: IRegistrationState
}

export const initialState: IAppState = {
    registrationState: registrationAdapter.getInitialState({ loading: false })
}
