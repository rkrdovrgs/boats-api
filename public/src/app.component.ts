import { Component } from '@angular/core';
import { BoatsService } from './services/boats.service';
import { Yacht } from './model/yacht';

@Component({
    selector : 'my-app',
    templateUrl: './app/app.component.html' ,
    styleUrls: ['./app/app.component.css'],
    providers: [BoatsService]
})

export class AppComponent{   
}