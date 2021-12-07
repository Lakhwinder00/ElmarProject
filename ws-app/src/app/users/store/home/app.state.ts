import { ICourseState, courseCatalogAdapter } from "./app.entity";

export interface IAppState {
  courseCatalogState: ICourseState
}

export const initialState: IAppState = {
  courseCatalogState: courseCatalogAdapter.getInitialState({ loading: false })
}
