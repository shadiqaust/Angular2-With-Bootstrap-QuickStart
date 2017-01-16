import { Component } from '@angular/core';
import { PostsService } from "../services/posts.service";
import { GalleryService } from "../services/gallery.service";
import {AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
})

export class UserComponent {
    name: string;
    phone: string;
    address: Address;
    hobbies: string[];
    isHobbiesVisible: boolean;

    constructor() {
        this.name = "John Devid.";
        this.phone = '01812703';
        this.address = {
            road: "4",
            house: "4",
            block: "A"
        };
        this.hobbies = ['Reading', 'Fishing', 'Gaming'];
        this.isHobbiesVisible = false;

    }
    troggleHobbies() {
        this.isHobbiesVisible = !this.isHobbiesVisible;
    }
    addHobby(hobby:string) {
        this.hobbies.push(hobby);
    }
    deleteHobby(i:number) {
        console.log(i);
        this.hobbies.splice(i, 1);
    }
}

interface Address {
    road: string;
    house: string;
    block: string;
}



