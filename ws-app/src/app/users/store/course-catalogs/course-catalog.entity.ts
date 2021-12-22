import { ICourseCatalog } from '../../../users/model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity'

export interface ICourseCatalogState extends EntityState<ICourseCatalog> {
  loading: boolean;
} 
export const courseCatalogsAdaptor: EntityAdapter<ICourseCatalog>=createEntityAdapter<ICourseCatalog>()
