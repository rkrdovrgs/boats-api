import { ModuleWithProviders } from "@angular/core";
import { Routes , RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { YachtListComponent } from "./yachtList/yachtList.component";

const appRoutes:Routes = [
    { path: '', component: HomeComponent },
    { path:'boats', component: YachtListComponent }

];

export const appRouting:ModuleWithProviders = RouterModule.forRoot(appRoutes);