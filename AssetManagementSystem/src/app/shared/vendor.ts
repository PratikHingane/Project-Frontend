
import {Assettype} from '../shared/assettype';

export class Vendor {
    vdId:number;
	vdName:string;
	vdType:string;
	atId:number;
	assettype:Assettype =new Assettype();
	vdFrom : Date = new Date();
	vdTo: Date = new Date();
	address:string;
}
