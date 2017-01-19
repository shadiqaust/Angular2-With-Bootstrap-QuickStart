/**
 * Created by BS157 on 1/19/2017.
 */
import { Component } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import {AutoCompleteService} from "../services/autocomplete.service";



@Component({
  moduleId:module.id,
  templateUrl:'autocomplete.component.html',
  styles: [`
    ng2-auto-complete, input {
      display: block; border: 1px solid #ccc; width: 300px;
    }
  `],
  providers : [AutoCompleteService]
})
export class AutoCompleteComponent {

  arrayOfNumbers: number[] = [100, 200, 300, 400, 500];

  arrayOfStrings: string[] =
    ["this", "is", "array", "of", "text", "with", "long", "and long", "and long", "list"];

  arrayOfKeyValues: any[] =
    [{id:1, value:"One"}, {id:2, value:"Two"}, {id:3, value:"Three"}, {id:4, value:"Four"}];

  arrayOfKeyValues2: any[] =
    [{key:1, name:"Key One"}, {key:2, name:"Key Two"}, {key:3, name:"Key Three"}, {key:4, name:"Key Four"}];

  googleGeoCode: string = "https://maps.googleapis.com/maps/api/geocode/json?address=:my_own_keyword";

  model1 = "is";
  model2 = {id:1, value: "One"};
  model3 = {key: 3, name: "Key Three"};

  constructor (
    public appSvc : AutoCompleteService,
    private _sanitizer: DomSanitizer ) {
  }

  myCallback(newVal:string) {
    console.log("value is changed to ", newVal);
    this.model1 = newVal;
  }

  renderHero = (data: any) : SafeHtml => {
    let html = `<b style='float:left;width:100%'>${data.name}</b>
                <img style="float: left;padding: 5px;" src="${data.thumbnail.path}/portrait_small.${data.thumbnail.extension}"> 
                <span>${data.description}</span>`;

    return this._sanitizer.bypassSecurityTrustHtml(html);
  }

  rightAligned = (data: any) : SafeHtml => {
    let html = `<div style="text-align:right">${data}.00</div>`;
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }

  json(obj:any) {
    return JSON.stringify(obj);
  }
}
