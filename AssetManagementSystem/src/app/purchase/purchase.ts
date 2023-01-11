import { Status } from "../shared/status";

export class Purchase {
   pdId :number=0;
   pdOrderNo :string='';
   adId:number=0;
   atId:number=0;
   qnt:number=0;
   vdId:number=0;
   pdOrderDate:Date=new Date();
   pdDeliveryDate:Date=new Date();
   statusId :number;
   status : Status = new Status();
   emailId:string='';
}
