import {Routes,RouterModule} from "@angular/router"
import {UserComponent} from "./components/user.component"
import {GalleryComponent} from "./components/gallery.component"
import {PostComponent} from "./components/post.component";
import {AppComponent} from "./app.component";

const APP_ROUTES : Routes = [
    {path:'',redirectTo:'user',pathMatch:'full'},
    {path:'user',component:UserComponent},
    {path:'post',component:PostComponent},
    {path:'gallery',component:GalleryComponent},
]

export const routing = RouterModule.forRoot(APP_ROUTES);
