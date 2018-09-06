/**
 * NetSuite generic Entity, meant to be inherited by concrete record types to avoid duplicating effort on fields
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "./Record"], function (require, exports, Record_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Fields common to all 'entity' records in NS
     */
    var Entity = /** @class */ (function (_super) {
        __extends(Entity, _super);
        function Entity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Record_1.FieldType.freeformtext
        ], Entity.prototype, "accountnumber", void 0);
        __decorate([
            Record_1.FieldType.email
        ], Entity.prototype, "altemail", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], Entity.prototype, "altphone", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], Entity.prototype, "balance", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], Entity.prototype, "billpay", void 0);
        __decorate([
            Record_1.FieldType.select
        ], Entity.prototype, "category", void 0);
        __decorate([
            Record_1.FieldType.textarea
        ], Entity.prototype, "comments", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], Entity.prototype, "companyname", void 0);
        __decorate([
            Record_1.FieldType.select
        ], Entity.prototype, "currency", void 0);
        __decorate([
            Record_1.FieldType.select
        ], Entity.prototype, "customform", void 0);
        __decorate([
            Record_1.FieldType.datetime
        ], Entity.prototype, "datecreated", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], Entity.prototype, "email", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], Entity.prototype, "entityid", void 0);
        __decorate([
            Record_1.FieldType.select
        ], Entity.prototype, "entitystatus", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], Entity.prototype, "externalid", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], Entity.prototype, "fax", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], Entity.prototype, "firstname", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], Entity.prototype, "isinactive", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], Entity.prototype, "isperson", void 0);
        __decorate([
            Record_1.FieldType.datetime
        ], Entity.prototype, "lastmodifieddate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], Entity.prototype, "language", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], Entity.prototype, "lastname", void 0);
        __decorate([
            Record_1.FieldType.select
        ], Entity.prototype, "parent", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], Entity.prototype, "phone", void 0);
        __decorate([
            Record_1.FieldType.select
        ], Entity.prototype, "subsidiary", void 0);
        __decorate([
            Record_1.FieldType.select
        ], Entity.prototype, "taxitem", void 0);
        __decorate([
            Record_1.FieldType.select
        ], Entity.prototype, "terms", void 0);
        return Entity;
    }(Record_1.NetsuiteRecord));
    exports.Entity = Entity;
});