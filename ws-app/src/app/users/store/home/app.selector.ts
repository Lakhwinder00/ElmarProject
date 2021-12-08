import { createFeatureSelector, createSelector } from "@ngrx/store";
import { courseCatalogAdapter } from "./app.entity";
import { IAppState } from "./app.state";

const appState = createFeatureSelector<IAppState>("apphome");
const courseCatalogState = createSelector(appState, state => state.courseCatalogState);
export const selectAllCourseCatalogSelector = createSelector(courseCatalogState, courseCatalogAdapter.getSelectors().selectAll);
export const selectUserEntites = createSelector(courseCatalogState, courseCatalogAdapter.getSelectors().selectEntities)
export const selectUser = (id: any) => {
    return createSelector(selectUserEntites, entities => {
        return entities[id]
    })
};;
export const selectCourseCatalogLoading = createSelector(courseCatalogState, state => state.loading);


