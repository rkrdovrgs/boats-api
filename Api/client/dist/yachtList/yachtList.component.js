"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var boats_service_1 = require("../services/boats.service");
var YachtListComponent = (function () {
    function YachtListComponent(boatsService) {
        var _this = this;
        this.boatsService = boatsService;
        this.boatsService.getBoats()
            .subscribe(function (boats) {
            _this.boats = boats;
        });
    }
    return YachtListComponent;
}());
YachtListComponent = __decorate([
    core_1.Component({
        selector: 'yacht-list',
        templateUrl: './app/yachtList/yachtList.component.html',
        styleUrls: ['./app/yachtList/yachtList.component.css']
    }),
    __metadata("design:paramtypes", [boats_service_1.BoatsService])
], YachtListComponent);
exports.YachtListComponent = YachtListComponent;
//# sourceMappingURL=yachtList.component.js.map