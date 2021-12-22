import { Action, createReducer, on } from '@ngrx/store';
import * as appActions from '../../store/course-catalogs/course-catalog.action';
import { courseCatalogsAdaptor } from '../../store/course-catalogs/course-catalog.entity';
import { ICourseState, instialState } from '../../store/course-catalogs/course-catalog.state';

const _courseCatalogsReducer = createReducer(
  instialState,
  on(appActions.courseCatalogsList, (state) => {
    return {
      courseCatalogsState: {
        ...state.courseCatalogsState,
        loading: true
      }
    }
  }),
  on(appActions.courseCatalogComplete, (state) => {
    return {
      courseCatalogsState: {
        ...state.courseCatalogsState,
        loading: true
      }
    }
  }),
  on(appActions.loadCourseCatalogSuccess, (state, action) => {
    return {
      courseCatalogsState: courseCatalogsAdaptor.setAll(action.payload, {...state.courseCatalogsState,loading:false})
    }
  }),
  on(appActions.loadCourseCatalogCompleteSuccess, (state, action) => {
    return {
      courseCatalogsState: courseCatalogsAdaptor.setAll(action.payload, { ...state.courseCatalogsState, loading: false })
    }
  })
);
export function appCourseCatalogsReducer(state: any, action: any) {
  return _courseCatalogsReducer(state, action);
}
