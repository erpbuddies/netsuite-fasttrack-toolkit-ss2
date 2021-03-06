/**
 * Represents a Return Authorization (returnauthorization) transaction type in NetSuite
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Record", "N/record", "./Transaction", "./Sublist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReturnAuthorizationBase = exports.ItemSublist = void 0;
    var Record_1 = require("./Record");
    var record = require("N/record");
    var Transaction_1 = require("./Transaction");
    var Sublist_1 = require("./Sublist");
    /**
     * Return Authorization Items (item) sublist
     */
    var ItemSublist = /** @class */ (function (_super) {
        __extends(ItemSublist, _super);
        function ItemSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ItemSublist.prototype, "amount", void 0);
        __decorate([
            Sublist_1.SublistFieldType.textarea
        ], ItemSublist.prototype, "description", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ItemSublist.prototype, "istaxable", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "item", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "itemtype", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], ItemSublist.prototype, "linenumber", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "price", void 0);
        __decorate([
            Sublist_1.SublistFieldType.float
        ], ItemSublist.prototype, "quantity", void 0);
        __decorate([
            Sublist_1.SublistFieldType.float
        ], ItemSublist.prototype, "rate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], ItemSublist.prototype, "revrecstartdate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], ItemSublist.prototype, "revrecenddate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "taxcode", void 0);
        __decorate([
            Sublist_1.SublistFieldType.percent
        ], ItemSublist.prototype, "taxrate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "units", void 0);
        return ItemSublist;
    }(Sublist_1.SublistLine));
    exports.ItemSublist = ItemSublist;
    /**
     * Return Authorization Base Type
     */
    var ReturnAuthorizationBase = /** @class */ (function (_super) {
        __extends(ReturnAuthorizationBase, _super);
        function ReturnAuthorizationBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ReturnAuthorizationBase.recordType = record.Type.RETURN_AUTHORIZATION;
        __decorate([
            Record_1.FieldType.select
        ], ReturnAuthorizationBase.prototype, "class", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ReturnAuthorizationBase.prototype, "createdfrom", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ReturnAuthorizationBase.prototype, "discountitem", void 0);
        __decorate([
            Record_1.FieldType.textarea
        ], ReturnAuthorizationBase.prototype, "message", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ReturnAuthorizationBase.prototype, "messagesel", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ReturnAuthorizationBase.prototype, "orderstatus", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ReturnAuthorizationBase.prototype, "tobeemailed", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], ReturnAuthorizationBase.prototype, "subtotal", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], ReturnAuthorizationBase.prototype, "total", void 0);
        __decorate([
            Record_1.FieldType.sublist(ItemSublist)
        ], ReturnAuthorizationBase.prototype, "item", void 0);
        return ReturnAuthorizationBase;
    }(Transaction_1.TransactionBase));
    exports.ReturnAuthorizationBase = ReturnAuthorizationBase;
});
