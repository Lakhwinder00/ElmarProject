import { createAction, props } from '@ngrx/store';

export const courseCatalogList = createAction('[AppHome] Request CourseCatalog List');
export const loadCourseCatalogSuccess = createAction('[AppHome] Load CourseCatalog List Success', props<{ payload: any }>());
export const loadCourseCatalogListFailure = createAction('[AppHome] Load CourseCatalog List Failure');

export const addUser = createAction('[AppHome] Add User', props<{ payload: any }>());
export const editUser = createAction('[AppHome] Edit User', props<{ payload: any }>());
export const deleteUser = createAction('[AppHome] Delete User', props<{ payload: any }>());
export const deletealluser = createAction('[AppHome] Delte All User');
export const filterdata = createAction('[AppHome] filter data', props<{ payload: any }>());
