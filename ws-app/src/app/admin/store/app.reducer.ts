import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import * as appActions from './app.action';
import { registrationAdapter } from './app.entity';
import { IAppState, initialState } from './app.state';



const _appReducer = createReducer(
  initialState,
  on(appActions.requestRegistrationList, (state) => {
    return {
      registrationState: {
        ...state.registrationState,
        loading: true
      }
    }
  }),
  on(appActions.loadRegistrationListSuccess, (state, action) => {
    return {
      registrationState: registrationAdapter.setAll(action.payload, { ...state.registrationState, loading: false })
    }
  }),
  on(appActions.loadRegistrationListFailure, (state) => {
    return {
      registrationState: {
        ...state.registrationState,
        loading: false
      }
    }
  }),
  on(appActions.addUser, (state, action) => {
    return {
      registrationState: registrationAdapter.addOne(action.payload, state.registrationState)
    }
  }),
  on(appActions.editUser, (state, action) => {
    return {
      registrationState: registrationAdapter.upsertOne(action.payload, state.registrationState)
    }
  }),
  on(appActions.deleteUser, (state, action) => {
    return {
      registrationState: registrationAdapter.removeOne(action.payload, state.registrationState)
    }
  }),

  on(appActions.deletealluser, (state, action) => {
    return {
      registrationState: registrationAdapter.removeAll(state.registrationState)
    }
  }),
  
);

export function appReducer(state: any, action: any) {
    return _appReducer(state, action);
}
