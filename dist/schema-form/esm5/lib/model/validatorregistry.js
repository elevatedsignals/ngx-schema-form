/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var ValidatorRegistry = /** @class */ (function () {
    function ValidatorRegistry() {
        this.validators = [];
    }
    /**
     * @param {?} path
     * @param {?} validator
     * @return {?}
     */
    ValidatorRegistry.prototype.register = /**
     * @param {?} path
     * @param {?} validator
     * @return {?}
     */
    function (path, validator) {
        this.validators[path] = validator;
    };
    /**
     * @param {?} path
     * @return {?}
     */
    ValidatorRegistry.prototype.get = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return this.validators[path];
    };
    /**
     * @return {?}
     */
    ValidatorRegistry.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.validators = [];
    };
    return ValidatorRegistry;
}());
export { ValidatorRegistry };
if (false) {
    /** @type {?} */
    ValidatorRegistry.prototype.validators;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycmVnaXN0cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvbW9kZWwvdmFsaWRhdG9ycmVnaXN0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0lBQUE7UUFDVSxlQUFVLEdBQWdCLEVBQUUsQ0FBQztJQWF2QyxDQUFDOzs7Ozs7SUFYQyxvQ0FBUTs7Ozs7SUFBUixVQUFTLElBQVksRUFBRSxTQUFvQjtRQUN6QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELCtCQUFHOzs7O0lBQUgsVUFBSSxJQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxpQ0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQzs7OztJQWJDLHVDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gJy4vdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvclJlZ2lzdHJ5IHtcbiAgcHJpdmF0ZSB2YWxpZGF0b3JzOiBWYWxpZGF0b3JbXSA9IFtdO1xuXG4gIHJlZ2lzdGVyKHBhdGg6IHN0cmluZywgdmFsaWRhdG9yOiBWYWxpZGF0b3IpIHtcbiAgICB0aGlzLnZhbGlkYXRvcnNbcGF0aF0gPSB2YWxpZGF0b3I7XG4gIH1cblxuICBnZXQocGF0aDogc3RyaW5nKTogVmFsaWRhdG9yIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3JzW3BhdGhdO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy52YWxpZGF0b3JzID0gW107XG4gIH1cbn1cbiJdfQ==