import {Routes,RouterModule} from "@angular/router"
import {UserComponent} from "./components/user.component"
import {GalleryComponent} from "./components/gallery.component"
import {PostComponent} from "./components/post.component";
import {AppComponent} from "./app.component";
import {AutoCompleteComponent} from "./components/autocomplete.component";

const APP_ROUTES : Routes = [
    {path:'',redirectTo:'user',pathMatch:'full'},
    {path:'user',component:UserComponent},
    {path:'post',component:PostComponent},
    {path:'gallery',component:GalleryComponent},
    {path:'autocomplete',component:AutoCompleteComponent},
]

export const routing = RouterModule.forRoot(APP_ROUTES);
