import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import * as appActions from "./app.action";
import { delay, map } from "rxjs/operators"
import { UserService } from '../services/user.service'
import { Action, Store, select } from "@ngrx/store";
import { preserveWhitespacesDefault } from "@angular/compiler";

@Injectable()
export class AppEffect {

  constructor(private service: UserService,
    private actions$: Actions, private store: Store<any>) {
  }

  @Effect()
    requestRegistrationList$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(appActions.requestRegistrationList),
            map(_ => {
                return appActions.loadRegistrationListSuccess({
                    payload:[
                        {
                            id:1,
                            firstName:"Test",
                            customerMemberId:"EREI123123",
                            lastName:"Test",
                            email:"test@gmail.com"
                        },
                        {
                            id:2,
                            firstName:"Test1",
                            customerMemberId:"TestEREI123123",
                            lastName:"Test1",
                            email:"test1@gmail.com"
                        },
                        {
                            id:3,
                            firstName:"Test11",
                            customerMemberId:"Tes11tEREI123123",
                            lastName:"Test11",
                            email:"test11@gmail.com"
                        }
                    ]
                });
              
            })
        )
    });
  @Effect()
  addUserRegistration$ =
    this.actions$.pipe(ofType(appActions.addUser),
      map(load => {
        return this.service.saveUser(load.payload).subscribe(res => res);
      })
  )
    
}
