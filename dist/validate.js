"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ajv_1 = __importDefault(require("ajv"));
var schema_1 = __importDefault(require("./schema"));
var ajv = new ajv_1.default({ allErrors: true });
/**
 * Validates given data structure to the official
 * Kaliningrad Graph Schema
 *
 * @param data Kaliningrad Graph Structure
 * @returns `isValid` — `true` or `false`
 */
function default_1(data) {
    var isValid = ajv.validate(schema_1.default, data);
    return isValid;
}
exports.default = default_1;
