import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import * as appActions from "../course-catalogs/course-catalog.action";
import { delay, map } from "rxjs/operators"
import { Action, Store, select } from "@ngrx/store";
import { ICourseCatalog } from '../../model'

@Injectable()
export class CourseCatalogEffect {

  constructor(private actions$: Actions, private store: Store<any>) {

  }
  @Effect()
  courseCatalogsList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appActions.courseCatalogsList),
      map(_ => {
        return appActions.loadCourseCatalogSuccess(
          {
            payload:
              [
                {
                  id: 1,
                  name: 'Online Course on Alabama Law - 2018 Edition',
                  price: 0.00,
                  activity: '14 Activities',
                  creditstype: ''
                },
                {
                  id: 2,
                  name: 'Embracing Health & Wellness in the Legal Profession',
                  price: 0.00,
                  activity: '1 Activities',
                  creditstype: '1 CLE Credits, 1 Ethics Credits'
                },
                {
                  id: 3,
                  name: 'What Every Divorce Lawyer Needs to Know - Social Security, Divorce & Domestic Violence',
                  price: 0.00,
                  activity: '1 Activities',
                  creditstype: '1 CLE Credits'
                },
                {
                  id: 4,
                  name: 'Bankruptcy & Your Pro Bono Client',
                  price: 0.00,
                  activity: '1 Activities',
                  creditstype: '1 CLE Credits'
                },
                {
                  id: 5,
                  name: "Landlord & Tenant Law - A View from Both the Landlord's & Tenant's Perspective",
                  price: 0.00,
                  activity: '1 Activities',
                  creditstype: '1 CLE Credits'
                },
                {
                  id: 6,
                  name: "Social Security Disability for Beginners",
                  price: 0.00,
                  activity: '1 Activities',
                  creditstype: '1 CLE Credits'
                },
                {
                  id: 7,
                  name: "Disability Rights During the COVID-19 Pandemic",
                  price: 0.00,
                  activity: '1 Activities',
                  creditstype: '1 CLE Credits'
                }

              ]
          }
        )
      }));

  })
  courseCatalogsComplete = createEffect(() => {
    return this.actions$.pipe(ofType(appActions.courseCatalogComplete), map(_ => {
      return appActions.loadCourseCatalogCompleteSuccess({
        payload: [
          {
            id: 1,
            name: "When Home Isn't safe -Domestic Violance During a Pandmic",
            price: 0.00,
            creditstype: '1 CLE Credits',
            localCountry: 'Courtesy of Legal Services Alabama',
            sponser: 'Presenter: Kelly F. McTear',
          },
          {
            id: 2,
            name: "Defending Third Party Debt Buyer Cases",
            price: 0.00,
            creditstype: '1 CLE Credits',
            localCountry: 'Courtesy of Legal Services Alabama',
            sponser: 'Presenter: John G. Watts',
          },
          {
            id: 3,
            name: "ERISA Survival Kit",
            price: 0.00,
            creditstype: '1 CLE Credits',
            localCountry: 'Courtesy of Legal Services Alabama',
            sponser: 'Presenter: David P. Martin',
          },
          {
            id: 4,
            name: "ERISA Survival Kit",
            price: 0.00,
            creditstype: '1 CLE Credits',
            localCountry: 'Courtesy of Legal Services Alabama',
            sponser: 'Presenter: David P. Martin',
          },
          {
            id: 5,
            name: "Representing Clients with Criminal Court Debt",
            price: 0.00,
            creditstype: '1 CLE Credits',
            localCountry: 'Courtesy of Legal Services Alabama',
            sponser: 'Presenters: Leah Nelson & Martha Morgan',
          },
        ]
      })
    }));
  })
}
