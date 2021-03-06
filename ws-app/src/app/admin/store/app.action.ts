import { createAction, props } from '@ngrx/store';

export const requestRegistrationList = createAction('[App] Request Registration List');
export const loadRegistrationListSuccess = createAction('[App] Load Registration List Success', props<{ payload: any }>());
export const loadRegistrationListFailure = createAction('[App] Load Registration List Failure');

export const addUser = createAction('[App] Add User', props<{ payload: any }>());
export const editUser = createAction('[App] Edit User', props<{ payload: any }>());
export const deleteUser = createAction('[App] Delete User', props<{ payload: any }>());
export const deletealluser = createAction('[App] Delte All User');
export const filterdata = createAction('[App] filter data', props<{ payload: any }>());
