import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import * as appActions from "./app.action";
import { delay, map } from "rxjs/operators"
import { Action, Store, select } from "@ngrx/store";
import { preserveWhitespacesDefault } from "@angular/compiler";

@Injectable()
export class AppHomeEffect {

  constructor(
    private actions$: Actions, private store: Store<any>) {
  }

  @Effect()
  courseCatalogList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appActions.courseCatalogList),
      map(_ => {
        return appActions.loadCourseCatalogSuccess({
          payload: [
            {
              id: 1,
              name: "Claims Rx, January 2019 - Appr",
              creditstype: "1 Patient Safety/ Risk Management Hours",
              tag: "Opioids",
              sponser: "consultant",
              img:"https://s3.amazonaws.com/pamedsoc-prolearnfiles/5c02d1a2_3415_6731_aaf3_dc07b1abdf8a-images/stethoscope_book_cme.jpg",
              type: "Eng Course",
              expiration:'2021-11-12'
            },
            {
              id: 2,
              name: "Y1 Teams: Opioid Prescribing & the PA-PDMP",
              creditstype: "3 AMA PRA Category 1 Credits, 4 AMA PRA Category 2 Credits",
              tag: "ER",
              sponser: "Hire",
              img:"https://s3.us-east-1.amazonaws.com/pamedsoc-prolearnfiles/images/372b7285_33f7_4632_7d77_9f1e31ee08b4-cmeconsult2018_card_updated.jpg",
              type: "Ger Course",
              expiration: '2021-10-17'
            },
            {
              id: 3,
              name: "Prescribing Red Flags -Be Smart, Safe, Sure",
              creditstype: "3 AMA PRA Category 1 Credits, 4 AMA PRA Category 2 Credits",
              tag: "GMIWQ",
              sponser: "consumer",
              img: "https://s3.us-east-1.amazonaws.com/pamedsoc-prolearnfiles/images/372b7285_33f7_4632_7d77_9f1e31ee08b4-cmeconsult2018_card_updated.jpg",
              type: "UK Course",
              expiration: '2021-12-09'
            },
            {
              id: 4,
              name: "Prescribing Red Flags -Be Smart, Safe, Sure",
              creditstype: "3 AMA PRA Category 1 Credits, 4 AMA PRA Category 2 Credits",
              tag: "SMI",
              sponser: "Consumer",
              img: "https://s3.us-east-1.amazonaws.com/pamedsoc-prolearnfiles/images/372b7285_33f7_4632_7d77_9f1e31ee08b4-cmeconsult2018_card_updated.jpg",
              type: "UNA Course",
              expiration: '2021-12-22'
            },
            {
              id: 5,
              name: "Claims Rx, March 2018 - The Im",
              creditstype: "3 Patient Safety/ Risk Management Hours",
              tag: "JJHY",
              sponser: "EROPU",
              img: "https://s3.amazonaws.com/pamedsoc-prolearnfiles/ce4b77e0_37b1_3712_da2f_bae8de2fcc5f-images/chronicpain-250.png",
              type: "Ind Course",
              expiration: '2021-12-23'
            },
            {
              id: 6,
              name: "S1 2018 Regional Warm Handoff Summits",
              creditstype: "2 Patient Safety/ Risk Management Hours",
              tag: "YTR",
              sponser: "TREWDF",
              img: "https://s3.amazonaws.com/pamedsoc-prolearnfiles/10ffbee6_0f89_30fa_79e9_c3e101130521-images/6-alternative-treatments-opioids-cme.png",
              type: "MTYU Course",
              expiration: '2021-12-23'
            },
            {
              id: 7,
              name: "Pennsylvania Neurosurgical Society's 105th Annual Scientific Meeting ",
              creditstype: "3 AOA Category 1-A Hours",
              tag: "YTR",
              sponser: "OOPIT",
              img: "https://s3.amazonaws.com/pamedsoc-prolearnfiles/bef0dc8f_9416_e3f5_bd92_e9c9be0b1646-images/diabetes-250.png",
              type: "GHF Course",
              expiration: '2021-12-25'
            },
            {
              id: 8,
              name: "PMS0001- Recognition and Reporting of Child Abuse",
              creditstype: "2 Child Abuse Hours, 2 AMA PRA Category 1 Credits",
              tag: "Primary Care",
              sponser: "UYT",
              img: "https://s3.amazonaws.com/pamedsoc-prolearnfiles/bef0dc8f_9416_e3f5_bd92_e9c9be0b1646-images/diabetes-250.png",
              type: "AMG Course",
              expiration: '2021-12-25'
            },
            {
              id: 8,
              name: "PMS0001- Recognition and Reporting of Child Abuse",
              creditstype: "2 Child Abuse Hours, 2 AMA PRA Category 1 Credits",
              tag: "Primary Care",
              sponser: "UYT",
              img: "https://s3.amazonaws.com/pamedsoc-prolearnfiles/bef0dc8f_9416_e3f5_bd92_e9c9be0b1646-images/diabetes-250.png",
              type: "AMG Course",
              expiration: '2021-12-25'
            },
          ]
        });

      })
    )
  });

}
