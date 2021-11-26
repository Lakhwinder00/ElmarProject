import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { IRegistration } from "../app.model";




export interface IRegistrationState extends EntityState<IRegistration> {
    loading: boolean;
}
export const registrationAdapter: EntityAdapter<IRegistration> = createEntityAdapter<IRegistration>();


