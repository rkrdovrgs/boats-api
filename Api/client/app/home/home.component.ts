import { Component } from '@angular/core';
import { BoatsService } from '../services/boats.service';
import { Yacht } from '../model/yacht';

@Component({
    selector: 'home-page',
    templateUrl: './app/home/home.component.html',
    styleUrls: ['./app/home/home.component.css']
})

export class HomeComponent{
    boats:Yacht[];
    constructor(private boatService: BoatsService)
    {
        this.boatService.getBoats()
            .subscribe(boats => {
                console.log(boats);
                this.boats = boats;
            });
    }

}