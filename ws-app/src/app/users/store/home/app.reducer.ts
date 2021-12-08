import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import * as appActions from './app.action';
import { courseCatalogAdapter } from './app.entity';
import { IAppState, initialState } from './app.state';



const _appHomeReducer = createReducer(
  initialState,
  on(appActions.courseCatalogList, (state) => {
    return {
      courseCatalogState: {
        ...state.courseCatalogState,
        loading: true
      }
    }
  }),
  on(appActions.loadCourseCatalogSuccess, (state, action) => {
    return {
      courseCatalogState: courseCatalogAdapter.setAll(action.payload, { ...state.courseCatalogState, loading: false })
    }
  }),
  on(appActions.loadCourseCatalogListFailure, (state) => {
    return {
      courseCatalogState: {
        ...state.courseCatalogState,
        loading: false
      }
    }
  }),
  on(appActions.addUser, (state, action) => {
    return {
      courseCatalogState: courseCatalogAdapter.addOne(action.payload, state.courseCatalogState)
    }
  }),
  on(appActions.editUser, (state, action) => {
    return {
      courseCatalogState: courseCatalogAdapter.upsertOne(action.payload, state.courseCatalogState)
    }
  }),
  on(appActions.deleteUser, (state, action) => {
    return {
      courseCatalogState: courseCatalogAdapter.removeOne(action.payload, state.courseCatalogState)
    }
  }),

  on(appActions.deletealluser, (state, action) => {
    return {
      courseCatalogState: courseCatalogAdapter.removeAll(state.courseCatalogState)
    }
  }),
  
);

export function appHomeReducer(state: any, action: any) {
  return _appHomeReducer(state, action);
}
