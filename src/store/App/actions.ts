import * as React from 'react'
import { typeName, StrongAction } from "../../common/StrongAction";
import { getDataSources } from '../../http/Api';
import { IDataSource } from '.';

const SUFFIX = '__APP';

@typeName('LOADING' + SUFFIX)
export class ToggleAppLoadingAction extends StrongAction {constructor(public loading: boolean) { super(); }
}

@typeName('UPDATE_DATA_SOURCES' + SUFFIX)
export class UpdateDataSourcesAction extends StrongAction { constructor(public source: IDataSource) { super(); }}

export interface Actions
{
  toggleAppLoading(loading: boolean);
  fetchAllDataSource();
}

const dataSource = {
  "demandData": {
    "demandsList": [
      {	
          "id": 1,
          "timestamp": "",
          "isVerified": true,
          "isFulfilled": false,
          "hospital": {
              "name": "Kaiser Permanente The San Francisco Medical Center",
              "state": "CA",
              "city": "San Francisco",
              "address": "2130 O'Farrell St. San Francisco CA 94115"
          },
          "delivery": {
              "contact": "415-833-2593",
              "details": "If you're dropping off donations, please use the phone at the loading doc to call 415-833-2593. A staff member will come out to accept your donation. If you have a large amount of goods to donate or need to make arrangements after the loading dock closes at 2:30pm, contact the hospital operator at 415-833-2000. The operator will get your contact information and you will be contacted within 24 hours to schedule a delivery."
          },
          "requestType": "",
          "supplyList": [
              {"type": "surgicalMask", "amount": "10", "standard": "113"},
              {"type": "n95", "amount": "30", "standard": "a111"},
              {"type": "goggle", "amount": "100", "standard": "b222"},
              {"type": "faceShield", "amount": "211", "standard": "yx3"}
          ]
      },
      {
          "id": 2,
          "timestamp": "",
          "isVerified": false,
          "isFulfilled": false,
          "hospital": {
              "name": "Berkeley hospitals (from Council member)",
              "state": "CA",
              "city": "Berkeley",
              "address": ""
          },
          "delivery": {
              "contact": "rkesarwani@cityofberkeley.info",
              "details": ""
          },
          "requestType": "",
          "supplyList": [
              {"type": "goggle", "amount": "100", "standard": "b222"},
              {"type": "faceShield", "amount": "211", "standard": "yx3"}
          ]
      },
      {
          "id": 3,
          "timestamp": "",
          "isVerified": true,
          "isFulfilled": false,
          "hospital": {
              "name": "Dignity Health Sequoia Hospital",
              "state": "CA",
              "city": "Redwood City",
              "address": "170 Alameda de las Pulgas, Redwood City, CA 94062"
          },
          "delivery": {
              "contact": "Jennifer Svihus 650-367-5712",
              "details": "Email jennifer.svihus@dignityhealth.org and dropoff"
          },
          "requestType": "",
          "supplyList": [
              {"type": "isolationGown", "amount": "322", "standard": "665"},
              {"type": "coverall", "amount": "200", "standard": "msss101"},
              {"type": "goggle", "amount": "200", "standard": "b222"},
              {"type": "n95", "amount": "30", "standard": "a111"}
          ]
      }
  ],
  "cities": ["Berkeley", "Redwood City", "San Francisco"],
  "supplyTypes": ["goggle", "surgicalMask", "n95Masks", "faceShield", "isolationGown", "coverall"],
  "requestTypes": ["hospital"]
  }
};

export const actionCreators = {
  toggleAppLoading: (loading: boolean): any => dispatch => {
    dispatch(new ToggleAppLoadingAction(loading));
  },
  fetchAllDataSource: (): any => async (dispatch) => {
    try {
      // const result = await getDataSources() as IDataSource;
      dispatch(new UpdateDataSourcesAction(dataSource));
    } catch (err) {
      console.error(err);
    } finally {
    }
  }
};