/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { WidgetRegistry } from './widgetregistry';
var WidgetFactory = /** @class */ (function () {
    function WidgetFactory(registry, resolver) {
        this.registry = registry;
        this.resolver = resolver;
    }
    /**
     * @param {?} container
     * @param {?} type
     * @return {?}
     */
    WidgetFactory.prototype.createWidget = /**
     * @param {?} container
     * @param {?} type
     * @return {?}
     */
    function (container, type) {
        /** @type {?} */
        var componentClass = this.registry.getWidgetType(type);
        /** @type {?} */
        var componentFactory = this.resolver.resolveComponentFactory(componentClass);
        return container.createComponent(componentFactory);
    };
    WidgetFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    WidgetFactory.ctorParameters = function () { return [
        { type: WidgetRegistry },
        { type: ComponentFactoryResolver }
    ]; };
    return WidgetFactory;
}());
export { WidgetFactory };
if (false) {
    /** @type {?} */
    WidgetFactory.prototype.resolver;
    /** @type {?} */
    WidgetFactory.prototype.registry;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0ZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zY2hlbWEtZm9ybS8iLCJzb3VyY2VzIjpbImxpYi93aWRnZXRmYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBR0wsd0JBQXdCLEVBQ3hCLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFbEQ7SUFNRSx1QkFBWSxRQUF3QixFQUFFLFFBQWtDO1FBQ3RFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7Ozs7OztJQUVELG9DQUFZOzs7OztJQUFaLFVBQWEsU0FBMkIsRUFBRSxJQUFZOztZQUNoRCxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDOztZQUVsRCxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLGNBQWMsQ0FBQztRQUM1RSxPQUFPLFNBQVMsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNyRCxDQUFDOztnQkFoQkYsVUFBVTs7OztnQkFGRixjQUFjO2dCQUpyQix3QkFBd0I7O0lBdUIxQixvQkFBQztDQUFBLEFBakJELElBaUJDO1NBaEJZLGFBQWE7OztJQUV4QixpQ0FBMkM7O0lBQzNDLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbXBvbmVudFJlZixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBJbmplY3RhYmxlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBXaWRnZXRSZWdpc3RyeSB9IGZyb20gJy4vd2lkZ2V0cmVnaXN0cnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2lkZ2V0RmFjdG9yeSB7XG5cbiAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyO1xuICBwcml2YXRlIHJlZ2lzdHJ5OiBXaWRnZXRSZWdpc3RyeTtcblxuICBjb25zdHJ1Y3RvcihyZWdpc3RyeTogV2lkZ2V0UmVnaXN0cnksIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcbiAgICB0aGlzLnJlZ2lzdHJ5ID0gcmVnaXN0cnk7XG4gICAgdGhpcy5yZXNvbHZlciA9IHJlc29sdmVyO1xuICB9XG5cbiAgY3JlYXRlV2lkZ2V0KGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgdHlwZTogc3RyaW5nKTogQ29tcG9uZW50UmVmPGFueT4ge1xuICAgIGxldCBjb21wb25lbnRDbGFzcyA9IHRoaXMucmVnaXN0cnkuZ2V0V2lkZ2V0VHlwZSh0eXBlKTtcblxuICAgIGxldCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnRDbGFzcyk7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG4gIH1cbn1cbiJdfQ==