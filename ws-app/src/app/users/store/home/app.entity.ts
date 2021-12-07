import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { ICourseCatalog } from '../../../users/model';




export interface ICourseState extends EntityState<ICourseCatalog> {
    loading: boolean;
}
export const courseCatalogAdapter: EntityAdapter<ICourseCatalog> = createEntityAdapter<ICourseCatalog>();


