(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"details\">\n<div class=\"container\" *ngIf=\"details;else noData\">\n    <div>\n        <h1>{{details.title}} </h1>\n      \n        <p class=\"auther\"> By   <span *ngIf=\"details.author;else noAuther\">{{details.author}}</span>\n            <ng-template #noAuther><span>No Auther Name</span> </ng-template>\n            Published on {{details.publishedAt | date}}. </p>\n    </div>\n    <h5>{{details.name}} </h5>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-md-3 listed\">\n           <div class=\"shares\">\n                <div class=\"items shar\">\n                    <h1>23</h1>\n                    <p class=\"title\" style=\"color:#333\">shares</p>\n                </div>\n                <div class=\"items\">\n                    <p><i class=\"fa fa-envelope\"></i> Email </p>\n                </div>\n                <div class=\"items\">\n                    <p><i class=\"fa fa-facebook\"></i> FaceBook </p>\n                </div>\n                <div class=\"items\">\n                    <p><i class=\"fa fa-twitter\"></i> Twitter </p>\n                </div>\n                <div class=\"items\">\n                    <p><i class=\"fa fa-share\"></i> More </p>\n                </div>\n           </div>\n        </div>\n        <div class=\"col-md-9\">\n            <div class=\"body\">\n                <img  *ngIf=\"details.urlToImage\" [src]=\"details.urlToImage\">\n                <p class=\"desc\">\n                    {{details.content}}\n                </p>\n              <ng-container *ngFor=\"let ss of arr;let i=index\">\n                <h3 *ngIf=\"i==0\">Comments</h3>\n              <ng-container *ngIf=\"index == ss.index\">\n                <div class=\"comments\" >\n                    <div class=\"row\">\n                        <div class=\"col-lg-1\">\n                            <i class=\"fa fa-user\"></i>\n                        </div>\n                        <div class=\"col-lg-11\">\n                            <div>\n                                <span class=\"name\">{{ss.data.name}}</span>\n                                <span> {{ss.date | date:'MMM d, y, h:mm a'}} </span>                                \n                                <span>Reply</span>\n                            </div>\n                            <p>\n                               {{ss.data.message}}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </ng-container>\n            </ng-container>\n                <h3>Join the Conversation</h3>\n                <div class=\"Conversation\"> \n                    <form  #f=\"ngForm\"  (ngSubmit)=\"AddComents(f)\"> \n                        <div class=\"form-group\">\n                            <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Name\"\n                            ngModel #name=\"ngModel\" required minlength=\"7\">\n                        </div>\n                        <div *ngIf=\"name.invalid && name.touched\">\n                            <p *ngIf=\"name.errors?.minlength\">  min Length 7 Your Enter {{name.errors.minlength.actualLength}}</p>\n                            <p *ngIf=\"name.errors?.required\">Name Is Required </p>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\"\n                            ngModel #email=\"ngModel\" required email>\n                        </div>\n                        <p *ngIf=\"email.touched && email.errors?.required\">Email Is Required</p>\n                        <p *ngIf=\"email.touched &&  email.errors?.email\">Wrong Email Format</p>\n\n                        <div class=\"form-group\">\n                            <textarea class=\"form-control\" name=\"message\" placeholder=\"Message\"\n                            ngModel #message=\"ngModel\" required minlength=\"15\"></textarea>\n                        </div>\n                        <div *ngIf=\"message.invalid && message.touched\">\n                            <p *ngIf=\"message.errors?.minlength\">  min Length 15 Your Enter {{message.errors.minlength.actualLength}}</p>\n                            <p *ngIf=\"message.errors?.required\">Message Is Required </p>\n                        </div>\n\n                        <button type=\"submit\"  [disabled]=\"f.invalid\" class=\"btn btn-primary\">Send</button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<ng-template #noData>\n<h2 style=\"text-align: center;margin-top: 50px;\"><span style=\"color:red\">404</span> No Data In JSON that much this ID </h2>\n</ng-template>\n</section>\n\n<div class=\"topbtn\">   <i class=\"fa fa-arrow-up\"></i> </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer>\n    <div class=\"copy-right\">\n      &copy; 2020 Pan Arab Media Inc.\n    </div>  \n  </footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"last-news\">\n    <div class=\"container\">\n        <h2>Latest News</h2>\n    \n        <div class=\"row\">\n            <div class=\"col-md-8 \">\n                <div class=\"row\">\n                    <div class=\"col-sm-7\">\n                        <ng-container *ngFor=\"let r of details.articles;let i=index\">\n                        <div class=\"first-article\" *ngIf=\"i==0\">\n                            <a [routerLink]=\"['/details/',i]\"><img [src]=\"r.urlToImage\" alt=\"\"></a>\n                            <span class=\"firstSpan\">{{r.source.name}}</span>\n                            <p class=\"question\">{{r.title}}</p>\n                            <p class=\"desc\"> {{r.description | describePipe:150}}</p>\n                            <p class=\"author\">By <span *ngIf=\"r.author;else noAuther\">{{r.author}}</span>\n                                <ng-template #noAuther><span>No Auther Name</span> </ng-template> </p> \n                            <div class=\"share\">\n                                <i class=\"fa fa-share\"></i> <span>349</span>\n                                <i class=\"fa fa-comment\"></i> <span>15</span>\n                            </div>\n                        </div>\n                     </ng-container>\n                    </div>\n                    <div class=\"col-sm-5\">\n                        <div class=\"mostArticle\">\n                            <ng-container *ngFor=\"let r of details.articles;let i=index\">\n                                <div class=\"items\" *ngIf=\"i>0 && i<3\">\n                                    <a [routerLink]=\"['/details/',i]\"> <img [src]=\"r.urlToImage\" alt=\"\"></a>\n                                    <span class=\"firstSpan\">{{r.source.name}} </span>\n                                    <p class=\"desc\">  {{r.description | describePipe}}</p>\n                                    <div class=\"share\">\n                                        <i class=\"fa fa-share\"></i> <span>12</span>\n                                        <i class=\"fa fa-comment\"></i> <span>15</span>\n                                    </div>\n                                   \n                                </div>\n                           </ng-container>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row rowEdit\">\n                    <div class=\"container-fluid editors\">\n                        <h3>Editors Picks</h3>\n                        <ng-container *ngFor=\"let r of details.articles;let i=index\">\n                            <div class=\"row sdd\" *ngIf=\"i>2 && i< details.articles.length-1\">\n                                <div class=\"col-md-3\">\n                                    <div class=\"imageLast\">\n                                        <a [routerLink]=\"['/details/',i]\"><img [src]=\"r.urlToImage\" alt=\"\"></a>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-9\">\n                                    <div class=\"body\">\n                                        <span class=\"firstSpan\">{{r.source.name}}</span>\n                                        <p class=\"question\">{{r.title}}</p>\n                                        <p class=\"desc\">{{r.description |describePipe}}</p>\n                                       <p class=\"author\">By <span *ngIf=\"r.author;else noAuther\">{{r.author}}</span>\n                                         <ng-template #noAuther><span>No Auther Name</span> </ng-template> - {{r.publishedAt | timeAgo}} </p> \n                                    </div>\n                                </div>\n                                <hr >\n                            </div>\n                            <div class=\"row\" *ngIf=\"i == details.totalResults-1\">\n                                <div class=\"col-md-3\">\n                                    <div class=\"imageLast\">\n                                        <a [routerLink]=\"['/details/',i]\"><img [src]=\"r.urlToImage\" alt=\"\"></a>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-9\">\n                                    <div class=\"body\">\n                                        <span class=\"firstSpan\">{{r.source.name}}</span>\n                                        <p class=\"question\">{{r.title}}</p>\n                                        <p class=\"desc\">{{r.description | describePipe}}</p>\n                                       <p class=\"author\">By <span *ngIf=\"r.author;else noAuther\">{{r.author}}</span>\n                                         <ng-template #noAuther><span>No Auther</span> </ng-template> - {{r.publishedAt | timeAgo}} </p> \n                                    </div>\n                                </div>\n                            </div>\n                          \n                        </ng-container>\n                    </div>\n                    \n                   \n                </div>\n\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"recent-posts\">\n                    <h5>Recent Posts</h5>\n                    <div>\n                        <img src=\"https://www.westminster-abbey.org/media/4328/events.jpg?anchor=center&mode=crop&width=1024&height=512&rnd=132017882970000000\" alt=\"...\">\n                        <div>\n                            <p>\n                                Lots of people get rich Knowing nothing more than that.\n                            </p>\n                            <span>\n                                7:00 am on Feb 28\n                            </span>\n                        </div>\n                    </div>\n                    <hr>\n\n                    <div>\n                        <img src=\"https://poetsandquants.com/wp-content/uploads/sites/5/2018/03/2018-CentreCourt-London-MBA-Festival.jpeg\" alt=\"...\">\n                        <div>\n                            <p>\n                                Lots of people get rich Knowing nothing more than that.\n                            </p>\n                            <span>\n                                7:00 am on Feb 28\n                            </span>\n                        </div>\n                    </div>\n                    <hr>\n                    <div>\n                        <img src=\"https://i.ytimg.com/vi/cMXhcZTCF34/maxresdefault.jpg\" alt=\"...\">\n                        <div>\n                            <p>\n                                Lots of people get rich Knowing nothing more than that.\n                            </p>\n                            <span>\n                                7:00 am on Feb 28\n                            </span>\n                        </div>\n                    </div>\n\n                </div>\n\n                <!-- df -->\n\n                <div class=\"most-popular\">\n                    <h5>5 Most popular</h5>\n                    <div>\n                        <div class=\"indexNum\"><span>1</span></div>\n                        <div>\n                            <p>The World's Youngest Billonaire is Just 24 and She's From Kong.</p>\n                        </div>\n                    </div>\n                    <hr>\n\n                    <div>\n                        <div class=\"indexNum\"><span>2</span></div>\n                        <div>\n                            <p>The World's Youngest Billonaire is Just 24 and She's From Kong.</p>\n                        </div>\n                    </div>\n                    <hr>\n                    <div>\n                        <div class=\"indexNum\"><span>3</span></div>\n                        <div>\n                            <p>The World's Youngest Billonaire is Just 24 and She's From Kong.</p>\n                        </div>\n                    </div>\n                    <hr>\n                    <div>\n                        <div class=\"indexNum\"><span>4</span></div>\n                        <div>\n                            <p>The World's Youngest Billonaire is Just 24 and She's From Kong.</p>\n                        </div>\n                    </div>\n                    <hr>\n                    <div>\n                        <div class=\"indexNum\"><span>5</span></div>\n                        <div>\n                            <p>The World's Youngest Billonaire is Just 24 and She's From Kong.</p>\n                        </div>\n                    </div>\n                </div>\n                <!--  -->\n\n                <div class=\"newSetter\">\n                    <h5>Good News NewSitter</h5>\n                    <p>Subscribe to our email newSitter for good news, sent our every Monday. </p>\n                    <div>\n                        <form>\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Email\" required>\n                                <button class=\"btn btn-primary\" type=\"submit\">Subscribe</button>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n                <!--  -->\n                <div class=\"follow-us\">\n                  <h5>Follow Us</h5>\n                  <ul>\n                      <li class=\"facebook\"><i class=\"fa fa-facebook\"></i></li>\n                      <li class=\"twitter\"><i class=\"fa fa-twitter\"></i></li>\n                      <li class=\"google\"><i class=\"fa fa-google-plus\"></i></li>\n                      <li class=\"youtube\"><i class=\"fa fa-youtube\"></i></li>\n                      <li class=\"linkedin\"><i class=\"fa fa-linkedin\"></i></li>\n                      <li class=\"tumblr\"><i class=\"fa fa-tumblr\"></i></li>\n                  </ul>\n                </div>\n\n            </div>\n        </div>\n        <hr class=\"secHr\">\n        <div class=\"row\">\n            <div class=\"container-fluid trending\">\n                <h3>Trending</h3>\n                <div class=\"row\">\n                    <div class=\"col-lg-3 col-sm-6\">\n                        <div class=\"items\">\n                            <img src=\"https://fcclainc.org/sites/default/files/star-events.jpg\" alt=\"\">\n                            <div class=\"body\">\n                                <span>October 6 ,2013</span>\n                                <p>This pays especially well in technology, where you earn a premium for working fast. </p>\n                            </div>\n                            <div class=\"body\">\n                                <span>October 6, 2013</span>\n                                <p>Here is a brief sketch of the economic proposition. </p>\n                            </div>\n                            <div class=\"body\">\n                                <span>October 6, 2013</span>\n                                <p>Startups are not magic. </p>\n                            </div>\n                            <div class=\"body\">\n                                <span>October 6, 2013</span>\n                                <p> Like all back-of-the-envelope calculations, this one has a lot of wiggle room. </p>\n                            </div>\n                            <div class=\"body\">\n                                <span>October 6, 2013</span>\n                                <p>  Imagine the stress of working for the Post Office for fifty years. </p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-3 col-sm-6\">\n                        <div class=\"items\">\n                            <img src=\"https://www.wayne.k12.ms.us/images/gallery/_full_/docs/building/7/culinary%20arts%20fccla/img_7026.jpg?id=17860&thumbwidth=100&fullwidth=600\" alt=\"\">\n                            <div class=\"body\">\n                                <span>October 6 ,2013</span>\n                                <p> Lots of people get rich knowing nothing more than that.  </p>\n                            </div>\n                            <div class=\"body\">\n                                <span>October 6, 2013</span>\n                                <p>If you're a good hacker in your mid twenties, you can get a job paying about $80,000 per year. </p>\n                            </div>\n                            <div class=\"body\">\n                                <span>October 6, 2013</span>\n                                <p>They don't change the laws of wealth creation. </p>\n                            </div>\n                            <div class=\"body\">\n                                <span>October 6, 2013</span>\n                                <p> I wouldn't try to defend the actual numbers. But I stand by the structure of the calculation. </p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-3 col-sm-6\">\n                        <div class=\"items\">\n                            <img src=\"https://mnfccla.org/wp-content/uploads/2016/11/SAM_0982-1024x683.jpg\" alt=\"\">\n                            <div class=\"body\">\n                                <span>October 6 ,2013</span>\n                                <p>I think your best bet would be to start or join a startup.  </p>\n                            </div>\n                            <div class=\"body\">\n                                <span>October 6, 2013</span>\n                                <p>You could probably work twice as many hours as a corporate employee.  </p>\n                            </div>\n                            <div class=\"body\">\n                                <span>October 6, 2013</span>\n                                <p>Imagine the stress of working for the Post Office for fifty years. In a startup you compress all this stress into three or four years. </p>\n                            </div>\n                            <div class=\"body\">\n                                <span>October 6, 2013</span>\n                                <p> This pays especially well in technology, where you earn a premium for working fast. </p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-3 col-sm-6\">\n                        <div class=\"items\">\n                            <img src=\"https://www.g-i-events.com/s/img/emotionheader31081586.jpg?1536056459.920px.400px\" alt=\"\">\n                            <div class=\"body\">\n                                <span>October 6 ,2013</span>\n                                <p>That's been a reliable way to get rich for hundreds of years.  </p>\n                            </div>\n                            <div class=\"body\">\n                                <span>October 6, 2013</span>\n                                <p>Like all back-of-the-envelope calculations, this one has a lot of wiggle room.  </p>\n                            </div>\n                            <div class=\"body\">\n                                <span>October 6, 2013</span>\n                                <p>Three million? How do I get to be a billionaire, like Bill Gates?  </p>\n                            </div>\n                            <div class=\"body\">\n                                <span>October 6, 2013</span>\n                                <p>  If $3 million a year seems high to some people, it will seem low to others.  </p>\n                            </div>\n                        </div>\n                    </div>\n                  \n                </div>\n            </div>\n        </div>\n\n\n    </div>\n</section>\n\n\n<div class=\"topbtn\">   <i class=\"fa fa-arrow-up\"></i> </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header-nav\">\n    <div class=\"logo\">\n       <a routerLink=\"/\"><span>PAM</span><span class=\"sup\">INC.</span></a> \n    </div>\n    <div class=\"links\">\n        <button>Visit Our Website</button>\n    </div>\n</header>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'details/:id', component: _details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"] },
    { path: 'details/:anything', redirectTo: '/', pathMatch: 'full' },
    { path: ':anything', redirectTo: '/', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let AppComponent = class AppComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.subscribe = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])).subscribe(() => { window.scrollTo(0, 0); });
    }
    ngOnDestroy() {
        this.subscribe.unsubscribe();
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm2015/time-ago-pipe.js");
/* harmony import */ var _pipe_describe_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipe/describe.pipe */ "./src/app/pipe/describe.pipe.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _details_details_component__WEBPACK_IMPORTED_MODULE_5__["DetailsComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
            time_ago_pipe__WEBPACK_IMPORTED_MODULE_12__["TimeAgoPipe"],
            _pipe_describe_pipe__WEBPACK_IMPORTED_MODULE_13__["DescribePipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"]
        ],
        providers: [
            _services_main_service__WEBPACK_IMPORTED_MODULE_8__["MainService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input.ng-invalid.ng-touched,textarea.ng-invalid.ng-touched{\r\n    border:1px solid red;\r\n}\r\n.details h1{\r\n    font-size: 60px;\r\n    font-weight: 700;\r\n    color: #3a3a3a;\r\n    margin: 17px 0 30px 0;\r\n}\r\n.details .auther{\r\n    font-weight: 500;\r\n    color: #929192;\r\n    margin-bottom: 25px;\r\n}\r\n.details .shares{\r\n    border: 1px solid #e5e5e5;\r\n    border-bottom: 0;\r\n}\r\n.details .shares .shar{\r\n    text-align: center;\r\n}\r\n.details .shares p.title {\r\ncolor: #333;\r\nfont-size: 22px;\r\nfont-weight: 600;\r\n}\r\n.details .shares .items{\r\n    border-bottom: 1px solid #e5e5e5;\r\n    padding: 9px 15px;\r\n}\r\n.details .shares .items p{\r\n    margin: 0;\r\n    color:#969696;\r\n}\r\n.details .shares .items p i{\r\n    width:20px;\r\n    color:#b3b3b3;\r\n}\r\n.details .shares .shar{\r\n    text-align: center;\r\n}\r\n.details .shares h1{\r\n    margin-bottom: 0px;\r\n    font-weight: 700;\r\n}\r\n.details .shares .title {\r\nfont-size: 22px;\r\nfont-weight: 600;\r\n}\r\n.details .listed{\r\n    padding: 0 60px;\r\n    margin-bottom: 30px;\r\n}\r\n.details .auther span{\r\n    color:#f56a59;\r\n}\r\n.details .body img{\r\n    width: 100%;\r\n    height: 500px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n.details .body .desc{\r\nmargin-top: 20px;\r\nfont-size: 18px;\r\nfont-weight: 500;\r\ncolor: #5d5d5d;\r\n}\r\n.details .body .comments{\r\n    padding:35px 30px;\r\n    border: 1px solid #DDD;\r\n    margin: 20px 0 25px 0;\r\n}\r\n.details .body .comments i{\r\n    width: 55px;\r\n    height: 55px;\r\n    background: #dcdcdc;\r\n    text-align: center;\r\n    line-height: 55px;\r\n    color: #FFF;\r\n    font-size: 26px;\r\n    border-radius: 50%;\r\n    margin-top: -10px;\r\n}\r\n.details .body .comments .name{\r\n    font-weight: 700;\r\n    color: #333;\r\n    font-size: 19px;\r\n    margin-right: 5px;\r\n}\r\n.details .body .comments span{\r\n    color: #b3afae;\r\n    font-weight: 600;\r\n    margin-right: 8px;\r\n    font-size: 18px;\r\n}\r\n.details .body .comments p{\r\n    margin-top: 20px;\r\n    font-size: 17px;\r\n    font-weight: 500;\r\n    color: #5d5d5d;\r\n}\r\n.details .body .thumbs button{\r\n    border: 0;\r\n    padding: 5px 25px;\r\n    font-weight: 600;\r\n    margin: 15px 15px 20px 0;\r\n\r\n}\r\n.details .body .thumbs .thumbs-up{\r\n    background-color:#1ca458 ;\r\n    color: #FFF;\r\n}\r\n.details .body .thumbs i{\r\n    margin-right: 10px;\r\n}\r\n.details h3{\r\n    color: #484848;\r\n    margin-bottom: 15px;\r\n}\r\n.details .Conversation input{\r\n    width: 60%;\r\n}\r\n.details .Conversation textarea{\r\n    min-height: 200px;\r\n}\r\n.details .Conversation input:focus,.details .Conversation textarea:focus{\r\n    outline: 0;\r\n    box-shadow: none;\r\n}\r\n.details .Conversation button{\r\n    background: #c01e33;\r\n    border: 1px solid #c01e33;\r\n    padding: 8px 37px;\r\n    font-size: 17px;\r\n    font-weight: 500;\r\n}\r\nbutton:focus{\r\n    outline: 0;\r\n    box-shadow: none;\r\n}\r\n/*  */\r\n.topbtn {\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 35px;\r\n    font-size: 21px;\r\n    width: 45px;\r\n    height: 45px;\r\n    z-index: 999;\r\n    border-radius: 50%;\r\n    background:#FFF;\r\n    border: none;\r\n    color: #333;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    display: none;\r\n    box-shadow: 0 4px 10px 2px rgba(0,0,0,0.3);\r\n}\r\n.topbtn i{\r\n    line-height: 45px;\r\n}\r\n@media (max-width:768px){\r\n    .last-news .first-article .question{\r\n        font-size: 30px;\r\n    }\r\n    .last-news .editors .imageLast img{\r\n        width: 100%;\r\n        height: 200px;\r\n    }\r\n  \r\n}\r\n@media (max-width:576px){\r\n    .last-news  .mostArticle .items img,.last-news  .mostArticle .items2 img{\r\n        height: 200px;\r\n    }\r\n}\r\n@media (max-width:1200px) and (min-width:992px){\r\n    .details .listed{\r\n        padding: 0 30px;\r\n    }\r\n}\r\n@media (max-width:992px) and (min-width:768px){\r\n    .details .listed{\r\n        padding: 0 0px;\r\n    }\r\n}\r\n@media (max-width:360px){\r\n    .details h1{\r\n        font-size: 30px;;\r\n    }\r\n    .details .Conversation input{\r\n        width: 100%;\r\n    }\r\n}\r\n@media (max-width:992px) and (min-width:360px){\r\n    .details h1{\r\n        font-size: 40px;;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0FBQ0EsV0FBVztBQUNYLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEI7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG9CQUFpQjtPQUFqQixpQkFBaUI7QUFDckI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCLGNBQWM7QUFDZDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHdCQUF3Qjs7QUFFNUI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQztJQUNHLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFJQSxLQUFLO0FBQ0w7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLDBDQUEwQztBQUM5QztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBSUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFdBQVc7UUFDWCxhQUFhO0lBQ2pCOztBQUVKO0FBQ0E7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFdBQVc7SUFDZjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkLHRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlcjoxcHggc29saWQgcmVkO1xyXG59XHJcbi5kZXRhaWxzIGgxe1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjM2EzYTNhO1xyXG4gICAgbWFyZ2luOiAxN3B4IDAgMzBweCAwO1xyXG59XHJcbi5kZXRhaWxzIC5hdXRoZXJ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICM5MjkxOTI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbi5kZXRhaWxzIC5zaGFyZXN7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxufVxyXG4uZGV0YWlscyAuc2hhcmVzIC5zaGFye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5kZXRhaWxzIC5zaGFyZXMgcC50aXRsZSB7XHJcbmNvbG9yOiAjMzMzO1xyXG5mb250LXNpemU6IDIycHg7XHJcbmZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmRldGFpbHMgLnNoYXJlcyAuaXRlbXN7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICAgIHBhZGRpbmc6IDlweCAxNXB4O1xyXG59XHJcbi5kZXRhaWxzIC5zaGFyZXMgLml0ZW1zIHB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjojOTY5Njk2O1xyXG59XHJcbi5kZXRhaWxzIC5zaGFyZXMgLml0ZW1zIHAgaXtcclxuICAgIHdpZHRoOjIwcHg7XHJcbiAgICBjb2xvcjojYjNiM2IzO1xyXG59XHJcbi5kZXRhaWxzIC5zaGFyZXMgLnNoYXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmRldGFpbHMgLnNoYXJlcyBoMXtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLmRldGFpbHMgLnNoYXJlcyAudGl0bGUge1xyXG5mb250LXNpemU6IDIycHg7XHJcbmZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmRldGFpbHMgLmxpc3RlZHtcclxuICAgIHBhZGRpbmc6IDAgNjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLmRldGFpbHMgLmF1dGhlciBzcGFue1xyXG4gICAgY29sb3I6I2Y1NmE1OTtcclxufVxyXG4uZGV0YWlscyAuYm9keSBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4uZGV0YWlscyAuYm9keSAuZGVzY3tcclxubWFyZ2luLXRvcDogMjBweDtcclxuZm9udC1zaXplOiAxOHB4O1xyXG5mb250LXdlaWdodDogNTAwO1xyXG5jb2xvcjogIzVkNWQ1ZDtcclxufVxyXG4uZGV0YWlscyAuYm9keSAuY29tbWVudHN7XHJcbiAgICBwYWRkaW5nOjM1cHggMzBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEREQ7XHJcbiAgICBtYXJnaW46IDIwcHggMCAyNXB4IDA7XHJcbn1cclxuLmRldGFpbHMgLmJvZHkgLmNvbW1lbnRzIGl7XHJcbiAgICB3aWR0aDogNTVweDtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNkY2RjZGM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNTVweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuLmRldGFpbHMgLmJvZHkgLmNvbW1lbnRzIC5uYW1le1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuLmRldGFpbHMgLmJvZHkgLmNvbW1lbnRzIHNwYW57XHJcbiAgICBjb2xvcjogI2IzYWZhZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uZGV0YWlscyAuYm9keSAuY29tbWVudHMgcHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICM1ZDVkNWQ7XHJcbn1cclxuXHJcbi5kZXRhaWxzIC5ib2R5IC50aHVtYnMgYnV0dG9ue1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogNXB4IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luOiAxNXB4IDE1cHggMjBweCAwO1xyXG5cclxufVxyXG4uZGV0YWlscyAuYm9keSAudGh1bWJzIC50aHVtYnMtdXB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxY2E0NTggO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbn1cclxuLmRldGFpbHMgLmJvZHkgLnRodW1icyBpe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5kZXRhaWxzIGgze1xyXG4gICAgY29sb3I6ICM0ODQ4NDg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5kZXRhaWxzIC5Db252ZXJzYXRpb24gaW5wdXR7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcbi5kZXRhaWxzIC5Db252ZXJzYXRpb24gdGV4dGFyZWF7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxufVxyXG4uZGV0YWlscyAuQ29udmVyc2F0aW9uIGlucHV0OmZvY3VzLC5kZXRhaWxzIC5Db252ZXJzYXRpb24gdGV4dGFyZWE6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uZGV0YWlscyAuQ29udmVyc2F0aW9uIGJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6ICNjMDFlMzM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzAxZTMzO1xyXG4gICAgcGFkZGluZzogOHB4IDM3cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbiBidXR0b246Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG4vKiAgKi9cclxuLnRvcGJ0biB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICByaWdodDogMzVweDtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDojRkZGO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTBweCAycHggcmdiYSgwLDAsMCwwLjMpO1xyXG59XHJcbi50b3BidG4gaXtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgIC5sYXN0LW5ld3MgLmZpcnN0LWFydGljbGUgLnF1ZXN0aW9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuICAgIC5sYXN0LW5ld3MgLmVkaXRvcnMgLmltYWdlTGFzdCBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuICBcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDo1NzZweCl7XHJcbiAgICAubGFzdC1uZXdzICAubW9zdEFydGljbGUgLml0ZW1zIGltZywubGFzdC1uZXdzICAubW9zdEFydGljbGUgLml0ZW1zMiBpbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDoxMjAwcHgpIGFuZCAobWluLXdpZHRoOjk5MnB4KXtcclxuICAgIC5kZXRhaWxzIC5saXN0ZWR7XHJcbiAgICAgICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjk5MnB4KSBhbmQgKG1pbi13aWR0aDo3NjhweCl7XHJcbiAgICAuZGV0YWlscyAubGlzdGVke1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjM2MHB4KXtcclxuICAgIC5kZXRhaWxzIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDs7XHJcbiAgICB9XHJcbiAgICAuZGV0YWlscyAuQ29udmVyc2F0aW9uIGlucHV0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjk5MnB4KSBhbmQgKG1pbi13aWR0aDozNjBweCl7XHJcbiAgICAuZGV0YWlscyBoMXtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DetailsComponent = class DetailsComponent {
    constructor(mainServ, route) {
        this.mainServ = mainServ;
        this.route = route;
        this.details = [];
        this.resorce = [];
        this.arr = [];
    }
    ngOnInit() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 700) {
                $('.topbtn').fadeIn();
            }
            else {
                $('.topbtn').fadeOut();
            }
        });
        $('.topbtn').click(function () {
            $('html , body').animate({ scrollTop: 0 }, 800);
        });
        this.route.params.subscribe((params) => {
            if (params['id']) {
                this.index = +params['id'];
            }
        });
        this.arr = this.mainServ.getArr();
        this.mainServ.getData().subscribe(res => {
            let resources = res["articles"];
            this.details = resources[this.index];
        });
        this.UpdateComment();
    }
    UpdateComment() {
        this.mainServ.getData().subscribe(res => {
            let a = res["articles"];
            let p = a[this.index];
            this.resorce = p;
            if (!this.resorce.comment) {
                this.resorce.comment = [];
            }
            this.resorce["comment"].push(this.arr);
        });
    }
    AddComents(f) {
        this.mainServ.AddComents(this.index, f.value);
        this.UpdateComment();
        f.reset();
    }
};
DetailsComponent.ctorParameters = () => [
    { type: _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")).default]
    })
], DetailsComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nfooter{\r\n    margin-top: 60px;\r\n    padding: 10px 50px;\r\n    background-color: #1e1e1e;\r\n    color:#d6d6d6;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZm9vdGVye1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbiAgICBjb2xvcjojZDZkNmQ2O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rowEdit{\r\n    margin: 0;\r\n}\r\n\r\n.last-news h2{\r\n    text-align: center;\r\n    margin: 20px 0 35px 0;\r\n    font-weight: 700;\r\n}\r\n\r\n.recent-posts,.most-popular,.newSetter,.follow-us{\r\n    width: 100%;\r\n    border:1px solid #e5e5e5;\r\n    padding: 15px;\r\n}\r\n\r\n.recent-posts  h5,.most-popular h5,.newSetter h5 ,.follow-us h5{\r\n    color:#da5e61;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.recent-posts img{\r\n    width: 40%;\r\n    height: 90px;\r\n    float: left;\r\n    margin-right: 7px;\r\n}\r\n\r\n.recent-posts p{\r\n    margin: 0;\r\n}\r\n\r\n.recent-posts span{\r\n    margin-top: 0;\r\n    font-size: 15px;\r\n    font-weight: 400;\r\n    color: #989898;\r\n}\r\n\r\n.most-popular,.newSetter,.follow-us{\r\n    margin-top: 20px;\r\n}\r\n\r\n.most-popular .indexNum{\r\n    float: left;\r\n    height: 35px;\r\n    margin-right: 18px;\r\n    color: #da5e61;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n}\r\n\r\n.most-popular p{\r\n    margin: 0;\r\n}\r\n\r\n.most-popular  hr{\r\n    margin: 10px 0;\r\n}\r\n\r\n.newSetter input{\r\n    width: 70%;\r\n    float: left;\r\n    border-radius: 5px 0px 0px 5px;\r\n}\r\n\r\n.newSetter button{\r\n     width: 30%;\r\n     background-color: #c01e33;\r\n     color:#FFF;\r\n     border-radius:  0px 5px 5px 0px;\r\n     border: 1px solid #c01e33;\r\n}\r\n\r\n.newSetter input:focus{\r\n    box-shadow: none;\r\n    outline: 0;\r\n}\r\n\r\n.newSetter button:focus{\r\n    outline:0;\r\n    box-shadow: none;\r\n    background-color: #c01e33;\r\n    color:#FFF;\r\n    border-radius: 0;\r\n    border: 1px solid #c01e33;\r\n}\r\n\r\n.follow-us h5{\r\ncolor:#333;\r\n}\r\n\r\n.follow-us ul{\r\n    list-style: none;\r\n    display: inline-block;\r\n    padding: 0;\r\n\r\n}\r\n\r\n.follow-us li{\r\n    float: left;\r\n    margin-left: 6px;\r\n    border-radius: 5px;\r\n    width: 45px;\r\n    height: 45px;\r\n    text-align: center;\r\n    line-height: 45px;\r\n    cursor: pointer;\r\n    margin-top: 15px;\r\n}\r\n\r\n.follow-us .facebook{\r\nbackground-color:#3d5b9b ;\r\n}\r\n\r\n.follow-us .twitter{\r\n    background-color: #20c0f0;\r\n}\r\n\r\n.follow-us .youtube{\r\n    background-color:#ce1412 ;\r\n}\r\n\r\n.follow-us .google{\r\n    background-color:#df4a32 ;\r\n}\r\n\r\n.follow-us .linkedin{\r\n    background-color:#017cb8 ;\r\n}\r\n\r\n.follow-us .tumblr{\r\n    background-color:#2c4762 ;\r\n}\r\n\r\n.follow-us li i{\r\ncolor:#FFF;\r\nfont-size: 20px;\r\n}\r\n\r\n/* sdgbdfb */\r\n\r\n.last-news .editors{\r\n    margin-top: 25px;\r\n    padding: 0;\r\n}\r\n\r\n.last-news .editors h3{\r\n    margin-bottom: 15px;\r\n}\r\n\r\n/* .last-news .editors .col-lg-3{\r\n    padding: 0;\r\n} */\r\n\r\n.last-news .editors .row:hover .imageLast img,\r\n.last-news .mostArticle .items:hover  img,.last-news .first-article:hover img{\r\n   opacity: 0.8;\r\n    -webkit-filter: grayscale(100%); \r\n   filter: grayscale(100%);\r\n}\r\n\r\n.last-news .editors .imageLast img{\r\n    width: 110%;\r\n    height: 120px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n\r\n.last-news .editors .body .firstSpan{\r\n    color: #868686;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    margin: 0;\r\n}\r\n\r\n.last-news .editors .body .question{\r\n    margin: 0;\r\n    font-size: 18px;\r\n    color: #333;\r\n    font-weight: 600;\r\n}\r\n\r\n.last-news .editors .body .desc{\r\n    margin: 0;\r\n    font-size: 16px;\r\n\r\n}\r\n\r\n.last-news .editors .body .author{\r\n    color:#868686;\r\n    font-size: 14px;\r\n}\r\n\r\n.last-news .editors .body .author span,.last-news .first-article  .author span{\r\n    color:#ec5252;\r\n}\r\n\r\n.last-news .editors hr{\r\n    width: 96%;\r\n    margin: 0 auto;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.last-news .first-article .firstSpan,.last-news .mostArticle .firstSpan{\r\n    color: #868686;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    margin-top: 10px;\r\n    display: block;\r\n}\r\n\r\n.last-news .first-article img{\r\n    width: 100%;\r\n    height: 305px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n\r\n.last-news .first-article .question{\r\n    margin: 0;\r\n    font-size: 40px;\r\n    color: #272727;\r\n    font-weight: 700;\r\n    line-height: 43px;\r\n}\r\n\r\n.last-news .first-article .desc{\r\n    margin-top: 10px;\r\n    font-size: 16px;\r\n}\r\n\r\n.last-news .first-article  .author{\r\n    color:#868686 ;\r\n}\r\n\r\n.last-news .first-article .share,.last-news .mostArticle .share{\r\n    border: 1px solid #e5e5e5;\r\n    padding: 5px 15px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    border-radius: 5px;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.last-news .first-article .share i ,.last-news .mostArticle .share i{\r\nmargin-right: 10px;\r\ncolor:#cac8c8;\r\n}\r\n\r\n.last-news .first-article .share span,.last-news .mostArticle .share span{\r\n    margin-right: 15px;\r\n}\r\n\r\n.last-news  .mostArticle .items2{\r\nmargin-top: 50px;\r\n}\r\n\r\n.last-news  .mostArticle .items img,.last-news  .mostArticle .items2 img{\r\n    width: 100%;\r\n    height: 150px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n\r\n/* .last-news .col-lg-7{\r\n    padding: 0;\r\n} */\r\n\r\n/*  */\r\n\r\n.secHr{\r\n    height: 2px;\r\n    background: #e5e5e5;\r\n    width: 100%;\r\n}\r\n\r\n.trending{\r\n    margin: 0;\r\n}\r\n\r\n.trending .col-lg-3{\r\n    padding: 8px;\r\n}\r\n\r\n.trending .items img{\r\n    width: 100%;\r\n    height: 160px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\n.trending .items .body{\r\n    border-bottom:1px solid #e8e8e8;\r\n}\r\n\r\n.trending .items .body span{\r\n    margin-top: 10px;\r\n    display: block;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    color: #9e9e9e;\r\n}\r\n\r\n/*  */\r\n\r\n.topbtn {\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 35px;\r\n    font-size: 21px;\r\n    width: 45px;\r\n    height: 45px;\r\n    z-index: 999;\r\n    border-radius: 50%;\r\n    background:#FFF;\r\n    border: none;\r\n    color: #333;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    display: none;\r\n    box-shadow: 0 4px 10px 2px rgba(0,0,0,0.3);\r\n}\r\n\r\n.topbtn i{\r\n    line-height: 45px;\r\n}\r\n\r\n@media (max-width:768px){\r\n    .last-news .first-article .question{\r\n        font-size: 30px;\r\n    }\r\n    .last-news .editors .imageLast img{\r\n        width: 100%;\r\n        height: 200px;\r\n    }\r\n  \r\n}\r\n\r\n@media (max-width:576px){\r\n    .last-news  .mostArticle .items img,.last-news  .mostArticle .items2 img{\r\n        height: 200px;\r\n    }\r\n}\r\n\r\n@media (max-width:1200px) and (min-width:992px){\r\n    .newSetter button{\r\n        width: 40%;\r\n    }\r\n    .newSetter input{\r\n        width: 60%;\r\n    }\r\n}\r\n\r\n@media (max-width:992px) and (min-width:768px){\r\n    .newSetter button{\r\n        width: 40%;\r\n        font-size: 13px;\r\n        padding: 9px;\r\n    }\r\n    .newSetter input{\r\n        width: 60%;\r\n    }\r\n}\r\n\r\n@media (max-width:360px){\r\n    .newSetter button{\r\n        width: 40%;\r\n      \r\n    }\r\n    .newSetter input{\r\n        width: 60%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCw4QkFBOEI7QUFDbEM7O0FBQ0E7S0FDSyxVQUFVO0tBQ1YseUJBQXlCO0tBQ3pCLFVBQVU7S0FDViwrQkFBK0I7S0FDL0IseUJBQXlCO0FBQzlCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFDQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixVQUFVOztBQUVkOztBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7QUFDQSxVQUFVO0FBQ1YsZUFBZTtBQUNmOztBQUVBLFlBQVk7O0FBRVo7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBOztHQUVHOztBQUNIOztHQUVHLFlBQVk7SUFDWCwrQkFBK0I7R0FDaEMsdUJBQXVCO0FBQzFCOztBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLHdCQUFnQjtJQUFoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUNBO0lBQ0ksU0FBUztJQUNULGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksU0FBUztJQUNULGVBQWU7O0FBRW5COztBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBR0E7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsd0JBQWdCO0lBQWhCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLGFBQWE7QUFDYjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0FBQ3BCOztBQUNBOztHQUVHOztBQUVILEtBQUs7O0FBQ0w7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFDQTtJQUNJLFNBQVM7QUFDYjs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG9CQUFpQjtPQUFqQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFJQSxLQUFLOztBQUVMO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYiwwQ0FBMEM7QUFDOUM7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFdBQVc7UUFDWCxhQUFhO0lBQ2pCOztBQUVKOztBQUNBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBQ0E7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBQ0E7SUFDSTtRQUNJLFVBQVU7UUFDVixlQUFlO1FBQ2YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBQ0E7SUFDSTtRQUNJLFVBQVU7O0lBRWQ7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93RWRpdHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmxhc3QtbmV3cyBoMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjBweCAwIDM1cHggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5yZWNlbnQtcG9zdHMsLm1vc3QtcG9wdWxhciwubmV3U2V0dGVyLC5mb2xsb3ctdXN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2U1ZTVlNTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLnJlY2VudC1wb3N0cyAgaDUsLm1vc3QtcG9wdWxhciBoNSwubmV3U2V0dGVyIGg1ICwuZm9sbG93LXVzIGg1e1xyXG4gICAgY29sb3I6I2RhNWU2MTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLnJlY2VudC1wb3N0cyBpbWd7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxufVxyXG4ucmVjZW50LXBvc3RzIHB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLnJlY2VudC1wb3N0cyBzcGFue1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzk4OTg5ODtcclxufVxyXG5cclxuLm1vc3QtcG9wdWxhciwubmV3U2V0dGVyLC5mb2xsb3ctdXN7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5tb3N0LXBvcHVsYXIgLmluZGV4TnVte1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbiAgICBjb2xvcjogI2RhNWU2MTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLm1vc3QtcG9wdWxhciBwe1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5tb3N0LXBvcHVsYXIgIGhye1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuXHJcbi5uZXdTZXR0ZXIgaW5wdXR7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XHJcbn1cclxuLm5ld1NldHRlciBidXR0b257XHJcbiAgICAgd2lkdGg6IDMwJTtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAxZTMzO1xyXG4gICAgIGNvbG9yOiNGRkY7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogIDBweCA1cHggNXB4IDBweDtcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzAxZTMzO1xyXG59XHJcbi5uZXdTZXR0ZXIgaW5wdXQ6Zm9jdXN7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG4ubmV3U2V0dGVyIGJ1dHRvbjpmb2N1c3tcclxuICAgIG91dGxpbmU6MDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAxZTMzO1xyXG4gICAgY29sb3I6I0ZGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzAxZTMzO1xyXG59XHJcblxyXG4uZm9sbG93LXVzIGg1e1xyXG5jb2xvcjojMzMzO1xyXG59XHJcblxyXG4uZm9sbG93LXVzIHVse1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG59XHJcbi5mb2xsb3ctdXMgbGl7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmZvbGxvdy11cyAuZmFjZWJvb2t7XHJcbmJhY2tncm91bmQtY29sb3I6IzNkNWI5YiA7XHJcbn1cclxuLmZvbGxvdy11cyAudHdpdHRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMGMwZjA7XHJcbn1cclxuLmZvbGxvdy11cyAueW91dHViZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2NlMTQxMiA7XHJcbn1cclxuLmZvbGxvdy11cyAuZ29vZ2xle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZGY0YTMyIDtcclxufVxyXG4uZm9sbG93LXVzIC5saW5rZWRpbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAxN2NiOCA7XHJcbn1cclxuLmZvbGxvdy11cyAudHVtYmxye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMmM0NzYyIDtcclxufVxyXG4uZm9sbG93LXVzIGxpIGl7XHJcbmNvbG9yOiNGRkY7XHJcbmZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLyogc2RnYmRmYiAqL1xyXG5cclxuLmxhc3QtbmV3cyAuZWRpdG9yc3tcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5sYXN0LW5ld3MgLmVkaXRvcnMgaDN7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi8qIC5sYXN0LW5ld3MgLmVkaXRvcnMgLmNvbC1sZy0ze1xyXG4gICAgcGFkZGluZzogMDtcclxufSAqL1xyXG4ubGFzdC1uZXdzIC5lZGl0b3JzIC5yb3c6aG92ZXIgLmltYWdlTGFzdCBpbWcsXHJcbi5sYXN0LW5ld3MgLm1vc3RBcnRpY2xlIC5pdGVtczpob3ZlciAgaW1nLC5sYXN0LW5ld3MgLmZpcnN0LWFydGljbGU6aG92ZXIgaW1ne1xyXG4gICBvcGFjaXR5OiAwLjg7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpOyBcclxuICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbn1cclxuLmxhc3QtbmV3cyAuZWRpdG9ycyAuaW1hZ2VMYXN0IGltZ3tcclxuICAgIHdpZHRoOiAxMTAlO1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLmxhc3QtbmV3cyAuZWRpdG9ycyAuYm9keSAuZmlyc3RTcGFue1xyXG4gICAgY29sb3I6ICM4Njg2ODY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4ubGFzdC1uZXdzIC5lZGl0b3JzIC5ib2R5IC5xdWVzdGlvbntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ubGFzdC1uZXdzIC5lZGl0b3JzIC5ib2R5IC5kZXNje1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxufVxyXG4ubGFzdC1uZXdzIC5lZGl0b3JzIC5ib2R5IC5hdXRob3J7XHJcbiAgICBjb2xvcjojODY4Njg2O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5sYXN0LW5ld3MgLmVkaXRvcnMgLmJvZHkgLmF1dGhvciBzcGFuLC5sYXN0LW5ld3MgLmZpcnN0LWFydGljbGUgIC5hdXRob3Igc3BhbntcclxuICAgIGNvbG9yOiNlYzUyNTI7XHJcbn1cclxuLmxhc3QtbmV3cyAuZWRpdG9ycyBocntcclxuICAgIHdpZHRoOiA5NiU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcblxyXG4ubGFzdC1uZXdzIC5maXJzdC1hcnRpY2xlIC5maXJzdFNwYW4sLmxhc3QtbmV3cyAubW9zdEFydGljbGUgLmZpcnN0U3BhbntcclxuICAgIGNvbG9yOiAjODY4Njg2O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmxhc3QtbmV3cyAuZmlyc3QtYXJ0aWNsZSBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzA1cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuLmxhc3QtbmV3cyAuZmlyc3QtYXJ0aWNsZSAucXVlc3Rpb257XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBjb2xvcjogIzI3MjcyNztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogNDNweDtcclxufVxyXG4ubGFzdC1uZXdzIC5maXJzdC1hcnRpY2xlIC5kZXNje1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4ubGFzdC1uZXdzIC5maXJzdC1hcnRpY2xlICAuYXV0aG9ye1xyXG4gICAgY29sb3I6Izg2ODY4NiA7XHJcbn1cclxuLmxhc3QtbmV3cyAuZmlyc3QtYXJ0aWNsZSAuc2hhcmUsLmxhc3QtbmV3cyAubW9zdEFydGljbGUgLnNoYXJle1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5sYXN0LW5ld3MgLmZpcnN0LWFydGljbGUgLnNoYXJlIGkgLC5sYXN0LW5ld3MgLm1vc3RBcnRpY2xlIC5zaGFyZSBpe1xyXG5tYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbmNvbG9yOiNjYWM4Yzg7XHJcbn1cclxuLmxhc3QtbmV3cyAuZmlyc3QtYXJ0aWNsZSAuc2hhcmUgc3BhbiwubGFzdC1uZXdzIC5tb3N0QXJ0aWNsZSAuc2hhcmUgc3BhbntcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG4ubGFzdC1uZXdzICAubW9zdEFydGljbGUgLml0ZW1zMntcclxubWFyZ2luLXRvcDogNTBweDtcclxufVxyXG4ubGFzdC1uZXdzICAubW9zdEFydGljbGUgLml0ZW1zIGltZywubGFzdC1uZXdzICAubW9zdEFydGljbGUgLml0ZW1zMiBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuLyogLmxhc3QtbmV3cyAuY29sLWxnLTd7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59ICovXHJcblxyXG4vKiAgKi9cclxuLnNlY0hye1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRyZW5kaW5ne1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi50cmVuZGluZyAuY29sLWxnLTN7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuLnRyZW5kaW5nIC5pdGVtcyBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4udHJlbmRpbmcgLml0ZW1zIC5ib2R5e1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2U4ZThlODtcclxufVxyXG4udHJlbmRpbmcgLml0ZW1zIC5ib2R5IHNwYW57XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICM5ZTllOWU7XHJcbn1cclxuXHJcblxyXG5cclxuLyogICovXHJcblxyXG4udG9wYnRuIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIHJpZ2h0OiAzNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiNGRkY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMHB4IDJweCByZ2JhKDAsMCwwLDAuMyk7XHJcbn1cclxuLnRvcGJ0biBpe1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgIC5sYXN0LW5ld3MgLmZpcnN0LWFydGljbGUgLnF1ZXN0aW9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuICAgIC5sYXN0LW5ld3MgLmVkaXRvcnMgLmltYWdlTGFzdCBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuICBcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDo1NzZweCl7XHJcbiAgICAubGFzdC1uZXdzICAubW9zdEFydGljbGUgLml0ZW1zIGltZywubGFzdC1uZXdzICAubW9zdEFydGljbGUgLml0ZW1zMiBpbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDoxMjAwcHgpIGFuZCAobWluLXdpZHRoOjk5MnB4KXtcclxuICAgIC5uZXdTZXR0ZXIgYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9XHJcbiAgICAubmV3U2V0dGVyIGlucHV0e1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6OTkycHgpIGFuZCAobWluLXdpZHRoOjc2OHB4KXtcclxuICAgIC5uZXdTZXR0ZXIgYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDlweDtcclxuICAgIH1cclxuICAgIC5uZXdTZXR0ZXIgaW5wdXR7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDozNjBweCl7XHJcbiAgICAubmV3U2V0dGVyIGJ1dHRvbntcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIC5uZXdTZXR0ZXIgaW5wdXR7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/main.service */ "./src/app/services/main.service.ts");



let HomeComponent = class HomeComponent {
    constructor(mainServ) {
        this.mainServ = mainServ;
        this.details = [];
    }
    ngOnInit() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 700) {
                $('.topbtn').fadeIn();
            }
            else {
                $('.topbtn').fadeOut();
            }
        });
        $('.topbtn').click(function () {
            $('html , body').animate({ scrollTop: 0 }, 800);
        });
        this.mainServ.getData().subscribe(res => {
            this.details = res;
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.header-nav{\r\n    width: 100%;\r\n    height: 55px;\r\n    background-color: #c01e33;\r\n    color:#FFF;\r\n    padding: 0 60px;\r\n    line-height: 55px;\r\n}\r\n.header-nav .logo{\r\n    float: left;\r\n}\r\n.header-nav .logo a{\r\n    color:#FFF;\r\n    text-decoration: none;\r\n}\r\n.header-nav .logo span{\r\n    font-size: 25px;\r\n    font-weight: 700;\r\n\r\n}\r\n.header-nav .logo .sup{\r\n    font-size: 12px;\r\n    float: right;\r\n    margin-top: -4px;\r\n}\r\n.header-nav .links{\r\n    float: right;\r\n}\r\n.header-nav .links button{\r\n    padding: 0 15px;\r\n    color: red;\r\n    background: #FFF;\r\n    border: 0;\r\n    height: 31px;\r\n    line-height: 25px;\r\n}\r\n.header-nav .links button:hover{\r\n    color:#c01e33;\r\n}\r\n@media (max-width:360px){\r\n    .header-nav{\r\n        padding: 0 20px;\r\n    }  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93e1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4uaGVhZGVyLW5hdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MwMWUzMztcclxuICAgIGNvbG9yOiNGRkY7XHJcbiAgICBwYWRkaW5nOiAwIDYwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTVweDtcclxufVxyXG4uaGVhZGVyLW5hdiAubG9nb3tcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5oZWFkZXItbmF2IC5sb2dvIGF7XHJcbiAgICBjb2xvcjojRkZGO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5oZWFkZXItbmF2IC5sb2dvIHNwYW57XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG5cclxufVxyXG4uaGVhZGVyLW5hdiAubG9nbyAuc3Vwe1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxufVxyXG4uaGVhZGVyLW5hdiAubGlua3N7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmhlYWRlci1uYXYgLmxpbmtzIGJ1dHRvbntcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgaGVpZ2h0OiAzMXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuLmhlYWRlci1uYXYgLmxpbmtzIGJ1dHRvbjpob3ZlcntcclxuICAgIGNvbG9yOiNjMDFlMzM7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjM2MHB4KXtcclxuICAgIC5oZWFkZXItbmF2e1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIH0gIFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/pipe/describe.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipe/describe.pipe.ts ***!
  \***************************************/
/*! exports provided: DescribePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescribePipe", function() { return DescribePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DescribePipe = class DescribePipe {
    transform(value, limit) {
        if (!value)
            return null;
        let actual = (limit) ? limit : 100;
        return value.substr(0, actual) + '....';
    }
};
DescribePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'describePipe'
    })
], DescribePipe);



/***/ }),

/***/ "./src/app/services/main.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/main.service.ts ***!
  \******************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MainService = class MainService {
    constructor(http) {
        this.http = http;
        this.arr = [];
        this.url = "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=33ba70d6367648b49a76910dfad62ad4";
    }
    getData() {
        return this.http.get(this.url);
    }
    AddComents(id, data) {
        this.arr.push({ "index": id, "data": data, "date": new Date });
    }
    getArr() {
        return this.arr;
    }
    rtnData(id) {
        return this.http.get(this.url).subscribe(res => {
            let resources = res["articles"];
            let resource = resources[id];
            if (resource.comment == null) {
                resource.comment = [];
            }
            resource["comment"] = this.arr;
            console.log(resource["comment"]);
        });
    }
};
MainService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MainService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Web Design & Doveloper\Projects\New folder (2)\task\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map