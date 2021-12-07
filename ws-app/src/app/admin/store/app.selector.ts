import { createFeatureSelector, createSelector } from "@ngrx/store";
import { registrationAdapter } from "./app.entity";
import { IAppState } from "./app.state";

const appState = createFeatureSelector<IAppState>("app");
const registrationState = createSelector(appState, state => state.registrationState);
export const selectAllRegistrationSelector = createSelector(registrationState, registrationAdapter.getSelectors().selectAll);
export const selectUserEntites = createSelector(registrationState, registrationAdapter.getSelectors().selectEntities)
export const selectUser = (id: any) => {
    return createSelector(selectUserEntites, entities => {
        return entities[id]
    })
};;
export const selectRegistrationLoading = createSelector(registrationState, state => state.loading);


