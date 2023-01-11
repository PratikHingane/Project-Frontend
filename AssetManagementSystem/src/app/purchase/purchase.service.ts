import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Purchase } from './purchase';
import { Assettype } from '../shared/assettype';
import { Vendor } from '../shared/vendor';
import { Status } from '../shared/status';

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  // decalre variable --> global variable
  formPurchaseData: Purchase = new Purchase(); // Single purchase

  // list of purchases
  purchases: Purchase[]; // all purchases
  assetclass: Assettype[];
  vendors: Vendor[];
  status: Status[];
  constructor(private httpClient: HttpClient) {}

  // get all professors
  getAllPurchaseOrders() {
    this.httpClient
      .get(environment.apiUrl + 'purchaseorders')
      .toPromise()
      .then(
        (res) => {
          console.log(res);
          this.purchases = res as Purchase[];
        },
        (error) => {
          console.log(error);
        }
      );
  }

  //Add Purhase order

  insertPurchase(purchase: Purchase) {
    return this.httpClient.post(
      environment.apiUrl + 'purchaseorders',purchase);
  }

  //Update Professor
  updatePurchase(purchase: Purchase) {
    return this.httpClient.put(environment.apiUrl + 'purchaseorders', purchase);
  }

  //delete Professor
  deletePurchase(purchase: Purchase) {
    return this.httpClient.delete(
      environment.apiUrl + 'purchaseorders' + purchase.pdId
    );
  }

  //get all asset class

  getAssetTypes(): void {
    this.httpClient
      .get(environment.apiUrl + 'assettypes')

      .toPromise()

      .then(
        (response) => {
          console.log(response);

          this.assetclass = response as Assettype[];
        },

        (error) => {
          console.log(error);
        }
      );
  }

  //get all vendors

  getVendors(): void {
    this.httpClient
      .get(environment.apiUrl + 'vendors')

      .toPromise()

      .then(
        (response) => {
          console.log(response);

          this.vendors = response as Vendor[];
        },

        (error) => {
          console.log(error);
        }
      );
  }

  //get all status

  getStatus(): void {
    this.httpClient
      .get(environment.apiUrl + 'status')

      .toPromise()

      .then(
        (response) => {
          console.log(response);

          this.status = response as Status[];
        },

        (error) => {
          console.log(error);
        }
      );
  }
}
