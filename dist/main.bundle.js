webpackJsonp([1,4],{

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n        <h2> <span  class=\"glyphicon glyphicon-book\"></span> {{title}}</h2>\n    </div>\n  </div>\n</nav>\n\n<div class=\"well\">\n  <div *ngFor=\"let book of books\">\n    <app-book-detail [book]=\"book\" (deleteBook)=\"onDeleteBook($event)\"></app-book-detail>\n  </div>\n</div>\n"

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

module.exports = "<div class=\"media\" *ngIf=\"book\">\n  <div class=\"media-left\">\n    <a href=\"#\">\n      <img class=\"media-object\" src=\"../../assets/book.png\" alt=\"...\">\n    </a>\n  </div>\n  <div class=\"media-body\">\n\n    <!-- show book details without edit -->\n    <div *ngIf=\"!edit\">\n      <h4>{{book.title | bookName}}</h4>\n\n      <p><span >Author: {{book.author}}</span></p>\n\n      <p><span >Date: {{book.date}}</span></p>\n\n    </div>\n\n    <!-- show editable book details -->\n    <div *ngIf=\"edit\">\n\n\n      <form name=\"book\" [formGroup]=\"editBookForm\" class=\"form-horizontal\" (ngSubmit)=\"save(editBookForm.value)\" >\n\n        <div class=\"col-md-12\">\n          <div class=\"form-group\" [ngClass]=\"{'has-error':!editBookForm.controls['title'].valid}\">\n            <input type=\"text\" id=\"title\" class=\"form-control input-sm\"\n                   required\n                   [formControl]=\"editBookForm.controls['title']\"\n                   name=\"title\" [(ngModel)]=\"book.title\">\n            <div *ngIf=\"editBookForm.controls['title'].hasError('minlength') && editBookForm.controls['title'].touched\" class=\"alert alert-danger\">Title can not be empty.</div>\n          </div>\n          <div class=\"form-group\" [ngClass]=\"{'has-error':!editBookForm.controls['author'].valid}\">\n            <input type=\"text\" id=\"author\" class=\"form-control input-sm\"\n                   required\n                   [formControl]=\"editBookForm.controls['author']\"\n                   name=\"author\" [(ngModel)]=\"book.author\">\n            <div *ngIf=\"editBookForm.controls['author'].hasError('minlength') && editBookForm.controls['author'].touched\" class=\"alert alert-danger\">Author name can not be empty.</div>\n          </div>\n          <div class=\"form-group\" [ngClass]=\"{'has-error':!editBookForm.controls['date'].valid}\">\n            <input type=\"date\" id=\"date\" class=\"form-control input-sm\"\n                   required\n                   [formControl]=\"editBookForm.controls['date']\"\n                   name=\"date\" [(ngModel)]=\"book.date\">\n            <div *ngIf=\"editBookForm.controls['date'].hasError('minlength') && editBookForm.controls['date'].touched\" class=\"alert alert-danger\">Invalid Date.</div>\n          </div>\n\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-success btn-sm\" [disabled]=\"!editBookForm.valid\"><span class=\"glyphicon glyphicon-ok\"></span> Save</button>\n          </div>\n        </div>\n      </form>\n\n    </div>\n\n    <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"...\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"toggleEdit()\"><span [ngClass]=\"{'glyphicon glyphicon-edit' : !edit}\"></span> {{edit ? 'Cancel' : 'Edit'}}</button>\n      <button type=\"button\" class=\"btn btn-danger delete\"\n              (click)=\"modal.show(); $event.stopPropagation()\"><span class=\"glyphicon glyphicon-remove\"></span> Delete</button>\n    </div>\n\n  </div>\n<hr />\n\n  <app-modal>\n    <div class=\"app-modal-header\">\n      Delete Confirmation\n    </div>\n    <div class=\"app-modal-body\">\n      Are you sure you want to delete {{ book.title }}?\n    </div>\n    <div class=\"app-modal-footer\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"modal.hide()\">Cancel</button>\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"remove(book)\">Yes</button>\n    </div>\n  </app-modal>\n\n</div>\n"

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

module.exports = "<div (click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n     [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <ng-content select=\".app-modal-header\"></ng-content>\n      </div>\n      <div class=\"modal-body\">\n        <ng-content select=\".app-modal-body\"></ng-content>\n      </div>\n      <div class=\"modal-footer\">\n        <ng-content select=\".app-modal-footer\"></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(82);


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookService = (function () {
    function BookService(http) {
        this.http = http;
        this.booksUrl = 'api/books'; // URL to web api
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    BookService.prototype.getBooks = function () {
        return this.http.get(this.booksUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    BookService.prototype.update = function (book) {
        var url = this.booksUrl + "/" + book.id;
        return this.http
            .put(url, JSON.stringify(book), { headers: this.headers })
            .toPromise()
            .then(function () { return book; })
            .catch(this.handleError);
    };
    BookService.prototype.delete = function (id) {
        var url = this.booksUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    BookService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return BookService;
}());
BookService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["l" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["l" /* Http */]) === "function" && _a || Object])
], BookService);

var _a;
//# sourceMappingURL=book.service.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ModalComponent = (function () {
    function ModalComponent() {
        this.visible = false;
        this.visibleAnimate = false;
    }
    ModalComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    ModalComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    ModalComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    return ModalComponent;
}());
ModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-modal',
        template: __webpack_require__(158),
        styles: [__webpack_require__(153)]
    })
], ModalComponent);

//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 81;


/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(94);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_service__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(bookService) {
        this.bookService = bookService;
        this.title = 'Simple Angular Book List';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    AppComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks().then(function (books) { return _this.books = books; });
    };
    AppComponent.prototype.onDeleteBook = function (book) {
        this.books = this.books.filter(function (h) { return h !== book; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(156),
        styles: [__webpack_require__(151)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__in_memory_data_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__book_detail_book_detail_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__book_name_pipe__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modal_modal_component__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Imports for loading & configuring the in-memory web api






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__book_detail_book_detail_component__["a" /* BookDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_8__book_name_pipe__["a" /* BookNamePipe */],
            __WEBPACK_IMPORTED_MODULE_9__modal_modal_component__["a" /* ModalComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__in_memory_data_service__["a" /* InMemoryDataService */], { delay: 500 }),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_modal_component__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookDetailComponent = (function () {
    function BookDetailComponent(bookService, fb) {
        this.bookService = bookService;
        this.edit = false;
        this.deleteBook = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.editBookForm = fb.group({
            // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
            'title': ['title', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(1)])],
            'author': ['author', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(1)])],
            'date': ['date', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    }
    BookDetailComponent.prototype.toggleEdit = function () {
        this.edit = !this.edit;
    };
    BookDetailComponent.prototype.save = function () {
        var _this = this;
        this.bookService.update(this.book)
            .then(function () { return _this.toggleEdit(); });
    };
    BookDetailComponent.prototype.remove = function (book) {
        var _this = this;
        this.bookService
            .delete(book.id)
            .then(function () {
            _this.deleteBook.emit(book);
        });
    };
    return BookDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__book__["a" /* Book */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__book__["a" /* Book */]) === "function" && _a || Object)
], BookDetailComponent.prototype, "book", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]) === "function" && _b || Object)
], BookDetailComponent.prototype, "deleteBook", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__modal_modal_component__["a" /* ModalComponent */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__modal_modal_component__["a" /* ModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__modal_modal_component__["a" /* ModalComponent */]) === "function" && _c || Object)
], BookDetailComponent.prototype, "modal", void 0);
BookDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-book-detail',
        template: __webpack_require__(157),
        styles: [__webpack_require__(152)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__book_service__["a" /* BookService */]]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__book_service__["a" /* BookService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _e || Object])
], BookDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=book-detail.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookNamePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BookNamePipe = (function () {
    function BookNamePipe() {
    }
    BookNamePipe.prototype.transform = function (value, args) {
        // convert all characters to lower
        var lower = value.toLowerCase();
        // replace special characters
        var regEx = lower.replace(/[^A-Za-z0-9 .]/g, "");
        return regEx.replace(/(^| )(\w)/g, function (x) {
            // make first letter of each word uppercase
            return x.toUpperCase();
        });
    };
    return BookNamePipe;
}());
BookNamePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Pipe */])({
        name: 'bookName'
    })
], BookNamePipe);

//# sourceMappingURL=book-name.pipe.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
/**
 * Created by guy on 09/05/17.
 */
var Book = (function () {
    function Book() {
    }
    return Book;
}());

//# sourceMappingURL=book.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var books = [
            { id: 1, author: 'John', date: '2013-10-22', title: 'Alice in wonderland' },
            { id: 2, author: 'John', date: '2013-10-22', title: 'Alice in wonderland' },
            { id: 3, author: 'John', date: '2013-10-22', title: 'Alice in wonderland' },
            { id: 4, author: 'John', date: '2013-10-22', title: 'Alice in wonderland' },
            { id: 5, author: 'John', date: '2013-10-22', title: 'Alice in wonderland' },
            { id: 6, author: 'John', date: '2013-10-22', title: 'Alice in wonderland' },
            { id: 7, author: 'John', date: '2013-10-22', title: 'Alice in wonderland' },
            { id: 8, author: 'John', date: '2013-10-22', title: 'Alice in wonderland' },
            { id: 9, author: 'John', date: '2013-10-22', title: 'Alice in wonderland' },
            { id: 10, author: 'John', date: '2013-10-22', title: 'Alice in wonderland' }
        ];
        return { books: books };
    };
    return InMemoryDataService;
}());

//# sourceMappingURL=in-memory-data.service.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.bundle.js.map