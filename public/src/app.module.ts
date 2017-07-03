import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRouting } from "./app.routing";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchBoxComponent } from './searchBox/searchBox.component';
import { YachtListComponent } from './yachtList/yachtList.component';

@NgModule({
    imports: [ 
        BrowserModule,
        FormsModule,
        HttpModule,
        appRouting 
    ],
    declarations: [ 
        AppComponent,
        HomeComponent,
        SearchBoxComponent,
        YachtListComponent 
    ],
    bootstrap : [ AppComponent ]
})

export class AppModule{
    
}