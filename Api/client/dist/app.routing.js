"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var yachtList_component_1 = require("./yachtList/yachtList.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'boats', component: yachtList_component_1.YachtListComponent }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map