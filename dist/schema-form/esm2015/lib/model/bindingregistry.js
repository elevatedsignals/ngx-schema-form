/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
export class BindingRegistry {
    constructor() {
        this.bindings = [];
    }
    /**
     * @return {?}
     */
    clear() {
        this.bindings = [];
    }
    /**
     * @param {?} path
     * @param {?} binding
     * @return {?}
     */
    register(path, binding) {
        this.bindings[path] = [].concat(binding);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    get(path) {
        return this.bindings[path];
    }
}
if (false) {
    /** @type {?} */
    BindingRegistry.prototype.bindings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZGluZ3JlZ2lzdHJ5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNjaGVtYS1mb3JtLyIsInNvdXJjZXMiOlsibGliL21vZGVsL2JpbmRpbmdyZWdpc3RyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTSxPQUFPLGVBQWU7SUFBNUI7UUFDRSxhQUFRLEdBQWMsRUFBRSxDQUFDO0lBYTNCLENBQUM7Ozs7SUFYQyxLQUFLO1FBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLElBQVksRUFBRSxPQUE0QjtRQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsSUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7OztJQWJDLG1DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmluZGluZ30gZnJvbSAnLi9iaW5kaW5nJztcblxuZXhwb3J0IGNsYXNzIEJpbmRpbmdSZWdpc3RyeSB7XG4gIGJpbmRpbmdzOiBCaW5kaW5nW10gPSBbXTtcblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmJpbmRpbmdzID0gW107XG4gIH1cblxuICByZWdpc3RlcihwYXRoOiBzdHJpbmcsIGJpbmRpbmc6IEJpbmRpbmcgfCBCaW5kaW5nW10pIHtcbiAgICB0aGlzLmJpbmRpbmdzW3BhdGhdID0gW10uY29uY2F0KGJpbmRpbmcpO1xuICB9XG5cbiAgZ2V0KHBhdGg6IHN0cmluZyk6IEJpbmRpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuYmluZGluZ3NbcGF0aF07XG4gIH1cbn1cbiJdfQ==