import { Assetclass } from "../shared/assetclass";
import { Assettype } from "../shared/assettype";

export class Vendor {
    vdId: number = 0;
	vdName: string ="";
	vdType: string ="";
    atId: number = 0;
	vdFrom: Date=new Date;
    vdTo: Date=new Date;
	address: string ="";
	assetType: Assettype=new Assettype();
	assetClass: Assetclass=new Assetclass();

}
