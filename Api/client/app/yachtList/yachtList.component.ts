import { Component } from '@angular/core';
import { BoatsService } from '../services/boats.service';
import { Yacht } from '../model/yacht';

@Component({
    selector: 'yacht-list',
    templateUrl: './app/yachtList/yachtList.component.html',
    styleUrls: ['./app/yachtList/yachtList.component.css']

})

export class YachtListComponent{
    boats: Yacht[];

    constructor(private boatsService:BoatsService){
     this.boatsService.getBoats()
        .subscribe(boats => {
            this.boats = boats;
        });  
    }

}