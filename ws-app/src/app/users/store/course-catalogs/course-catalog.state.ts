import { ICourseCatalogState, courseCatalogsAdaptor } from '../course-catalogs/course-catalog.entity';
export interface ICourseState {
  courseCatalogsState:ICourseCatalogState
}
export const instialState: ICourseState = {
  courseCatalogsState: courseCatalogsAdaptor.getInitialState({loading:false})
}
