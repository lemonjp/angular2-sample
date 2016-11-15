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
//import { Component } from '@angular/core';
var core_1 = require("@angular/core");
var angular2_modal_1 = require("angular2-modal");
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var AppComponent = (function () {
    function AppComponent(overlay, vcRef, modal) {
        this.modal = modal;
        this.title = 'Tour of Heroes';
        overlay.defaultViewContainer = vcRef;
    }
    AppComponent.prototype.onClick = function () {
        this.modal.alert()
            .size('lg')
            .showClose(true)
            .title('A simple Alert style modal window')
            .body("\n            <h4>Alert is a classic (title/body/footer) 1 button modal window that\n            does not block.</h4>\n            <b>Configuration:</b>\n            <ul>\n                <li>Non blocking (click anywhere outside to dismiss)</li>\n                <li>Size large</li>\n                <li>Dismissed with default keyboard key (ESC)</li>\n                <li>Close wth button click</li>\n                <li>HTML content</li>\n            </ul>")
            .open();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <button (click)=\"onClick()\">Alert</button>\n    <nav>\n      <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n      <a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
        styleUrls: ['app.component.css']
    }),
    __metadata("design:paramtypes", [angular2_modal_1.Overlay, core_1.ViewContainerRef, bootstrap_1.Modal])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map