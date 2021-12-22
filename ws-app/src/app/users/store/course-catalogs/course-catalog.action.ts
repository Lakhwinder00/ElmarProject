import { createAction, props } from '@ngrx/store';
import { ICourseCatalog } from '../../model';

export const courseCatalogsList = createAction('[AppCourseCatalogs] Request CourseCatlogs List');
export const courseCatalogComplete = createAction('[AppCourseCatalogsComplete] Request Complete CourseCatalogs List');
export const loadCourseCatalogSuccess = createAction('[AppCourseCatalogs] Load CourseCatlogs List Success', props<{ payload: any }>());
export const loadCourseCatalogCompleteSuccess = createAction('[AppCourseCatalogs] Load CourseCatlogs Complete List Success', props<{ payload: any }>());
export const loadCourseCatalogListFailure = createAction('[AppCourseCatalogs] Load CourseCatlogs List Failure');

export const addCourseCatlog = createAction('[AppCourseCatalogs] Add User', props<{ payload: any }>());
export const editCourseCatlog = createAction('[AppCourseCatalogs] Edit User', props<{ payload: any }>());
export const deleteCourseCatlog = createAction('[AppCourseCatalogs] Delete User', props<{ payload: any }>());
export const deleteAllCourseCatlog = createAction('[AppCourseCatalogs] Delte All User');
export const filterCourseCatlog = createAction('[AppCourseCatalogs] filter data', props<{ payload: any }>());
