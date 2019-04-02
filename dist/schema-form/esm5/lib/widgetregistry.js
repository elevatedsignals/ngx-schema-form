/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var WidgetRegistry = /** @class */ (function () {
    function WidgetRegistry() {
        this.widgets = {};
    }
    /**
     * @param {?} widget
     * @return {?}
     */
    WidgetRegistry.prototype.setDefaultWidget = /**
     * @param {?} widget
     * @return {?}
     */
    function (widget) {
        this.defaultWidget = widget;
    };
    /**
     * @return {?}
     */
    WidgetRegistry.prototype.getDefaultWidget = /**
     * @return {?}
     */
    function () {
        return this.defaultWidget;
    };
    /**
     * @param {?} type
     * @return {?}
     */
    WidgetRegistry.prototype.hasWidget = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this.widgets.hasOwnProperty(type);
    };
    /**
     * @param {?} type
     * @param {?} widget
     * @return {?}
     */
    WidgetRegistry.prototype.register = /**
     * @param {?} type
     * @param {?} widget
     * @return {?}
     */
    function (type, widget) {
        this.widgets[type] = widget;
    };
    /**
     * @param {?} type
     * @return {?}
     */
    WidgetRegistry.prototype.getWidgetType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (this.hasWidget(type)) {
            return this.widgets[type];
        }
        return this.defaultWidget;
    };
    return WidgetRegistry;
}());
export { WidgetRegistry };
if (false) {
    /** @type {?} */
    WidgetRegistry.prototype.widgets;
    /** @type {?} */
    WidgetRegistry.prototype.defaultWidget;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cmVnaXN0cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvd2lkZ2V0cmVnaXN0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0lBTUU7UUFKUSxZQUFPLEdBQTRCLEVBQUUsQ0FBQztJQUk5QixDQUFDOzs7OztJQUVqQix5Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsTUFBVztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQseUNBQWdCOzs7SUFBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxrQ0FBUzs7OztJQUFULFVBQVUsSUFBWTtRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUVELGlDQUFROzs7OztJQUFSLFVBQVMsSUFBWSxFQUFFLE1BQVc7UUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxzQ0FBYTs7OztJQUFiLFVBQWMsSUFBWTtRQUN4QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7Ozs7SUE1QkMsaUNBQThDOztJQUU5Qyx1Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgV2lkZ2V0UmVnaXN0cnkge1xuXG4gIHByaXZhdGUgd2lkZ2V0czogeyBbdHlwZTogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICBwcml2YXRlIGRlZmF1bHRXaWRnZXQ6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHNldERlZmF1bHRXaWRnZXQod2lkZ2V0OiBhbnkpIHtcbiAgICB0aGlzLmRlZmF1bHRXaWRnZXQgPSB3aWRnZXQ7XG4gIH1cblxuICBnZXREZWZhdWx0V2lkZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRXaWRnZXQ7XG4gIH1cblxuICBoYXNXaWRnZXQodHlwZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkZ2V0cy5oYXNPd25Qcm9wZXJ0eSh0eXBlKTtcbiAgfVxuXG4gIHJlZ2lzdGVyKHR5cGU6IHN0cmluZywgd2lkZ2V0OiBhbnkpIHtcbiAgICB0aGlzLndpZGdldHNbdHlwZV0gPSB3aWRnZXQ7XG4gIH1cblxuICBnZXRXaWRnZXRUeXBlKHR5cGU6IHN0cmluZyk6IGFueSB7XG4gICAgaWYgKHRoaXMuaGFzV2lkZ2V0KHR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy53aWRnZXRzW3R5cGVdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0V2lkZ2V0O1xuICB9XG59XG4iXX0=