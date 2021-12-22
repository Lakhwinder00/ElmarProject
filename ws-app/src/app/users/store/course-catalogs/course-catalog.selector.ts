import { createFeatureSelector, createSelector } from "@ngrx/store";
import { courseCatalogsAdaptor} from '../course-catalogs/course-catalog.entity';
import { ICourseState } from '../course-catalogs/course-catalog.state';

const appState = createFeatureSelector<ICourseState>("appcourseCatlogs");
const courseCatlogsState = createSelector(appState, state => state.courseCatalogsState);
export const selectAllCourseCatalogsSelector = createSelector(courseCatlogsState, courseCatalogsAdaptor.getSelectors().selectAll);
export const selectEntites = createSelector(courseCatlogsState, courseCatalogsAdaptor.getSelectors().selectEntities);
export const selectCourseCatlogEntites = createSelector(courseCatlogsState, courseCatalogsAdaptor.getSelectors().selectEntities)
export const selectCourseCatlog = (id: any) => {
  return createSelector(selectCourseCatlogEntites, entities => {
    return entities[id]
  })
};
export const selectCourseCatlogsLoading = createSelector(courseCatlogsState, state => state.loading);
