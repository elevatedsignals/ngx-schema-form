/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var BindingRegistry = /** @class */ (function () {
    function BindingRegistry() {
        this.bindings = [];
    }
    /**
     * @return {?}
     */
    BindingRegistry.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.bindings = [];
    };
    /**
     * @param {?} path
     * @param {?} binding
     * @return {?}
     */
    BindingRegistry.prototype.register = /**
     * @param {?} path
     * @param {?} binding
     * @return {?}
     */
    function (path, binding) {
        this.bindings[path] = [].concat(binding);
    };
    /**
     * @param {?} path
     * @return {?}
     */
    BindingRegistry.prototype.get = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return this.bindings[path];
    };
    return BindingRegistry;
}());
export { BindingRegistry };
if (false) {
    /** @type {?} */
    BindingRegistry.prototype.bindings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZGluZ3JlZ2lzdHJ5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNjaGVtYS1mb3JtLyIsInNvdXJjZXMiOlsibGliL21vZGVsL2JpbmRpbmdyZWdpc3RyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7SUFBQTtRQUNFLGFBQVEsR0FBYyxFQUFFLENBQUM7SUFhM0IsQ0FBQzs7OztJQVhDLCtCQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVELGtDQUFROzs7OztJQUFSLFVBQVMsSUFBWSxFQUFFLE9BQTRCO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELDZCQUFHOzs7O0lBQUgsVUFBSSxJQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFkRCxJQWNDOzs7O0lBYkMsbUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCaW5kaW5nfSBmcm9tICcuL2JpbmRpbmcnO1xuXG5leHBvcnQgY2xhc3MgQmluZGluZ1JlZ2lzdHJ5IHtcbiAgYmluZGluZ3M6IEJpbmRpbmdbXSA9IFtdO1xuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuYmluZGluZ3MgPSBbXTtcbiAgfVxuXG4gIHJlZ2lzdGVyKHBhdGg6IHN0cmluZywgYmluZGluZzogQmluZGluZyB8IEJpbmRpbmdbXSkge1xuICAgIHRoaXMuYmluZGluZ3NbcGF0aF0gPSBbXS5jb25jYXQoYmluZGluZyk7XG4gIH1cblxuICBnZXQocGF0aDogc3RyaW5nKTogQmluZGluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5iaW5kaW5nc1twYXRoXTtcbiAgfVxufVxuIl19