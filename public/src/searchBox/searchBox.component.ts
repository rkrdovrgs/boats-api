import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'search-box',
    templateUrl: './app/searchBox/searchBox.component.html',
    styleUrls: ['./app/searchBox/searchBox.component.css']
})
export class SearchBoxComponent {
    constructor(private router: Router) { }

    search() {
        this.router.navigate(["/boats"]);
    }
}