
import {Component, ViewChild} from "@angular/core"
import {GalleryService} from "../services/gallery.service";
import { ModalDirective } from 'ng2-bootstrap';

@Component({
    moduleId:module.id,
    templateUrl:'gallery.component.html',
    providers: [ GalleryService]
})

export class GalleryComponent{
  @ViewChild('childModal') public childModal:ModalDirective;
    name = "Gallary Component";
    images:Image[];
  imageSource:string;
  constructor(private gallryService:GalleryService)
  {
    this.gallryService.getGallery().subscribe(images=>{
      this.images=images;
    })
  }
  public showChildModal(imagesource:string):void {
    console.log(imagesource);
    this.imageSource = imagesource;
    this.childModal.isAnimated = true;
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }
}

interface Image {
  id: number;
  tile: string;
  url: string;
  thumbnailUrl: string;

}
