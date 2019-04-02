/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { WidgetRegistry } from './widgetregistry';
export class WidgetFactory {
    /**
     * @param {?} registry
     * @param {?} resolver
     */
    constructor(registry, resolver) {
        this.registry = registry;
        this.resolver = resolver;
    }
    /**
     * @param {?} container
     * @param {?} type
     * @return {?}
     */
    createWidget(container, type) {
        /** @type {?} */
        let componentClass = this.registry.getWidgetType(type);
        /** @type {?} */
        let componentFactory = this.resolver.resolveComponentFactory(componentClass);
        return container.createComponent(componentFactory);
    }
}
WidgetFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
WidgetFactory.ctorParameters = () => [
    { type: WidgetRegistry },
    { type: ComponentFactoryResolver }
];
if (false) {
    /** @type {?} */
    WidgetFactory.prototype.resolver;
    /** @type {?} */
    WidgetFactory.prototype.registry;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0ZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zY2hlbWEtZm9ybS8iLCJzb3VyY2VzIjpbImxpYi93aWRnZXRmYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBR0wsd0JBQXdCLEVBQ3hCLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHbEQsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBS3hCLFlBQVksUUFBd0IsRUFBRSxRQUFrQztRQUN0RSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDOzs7Ozs7SUFFRCxZQUFZLENBQUMsU0FBMkIsRUFBRSxJQUFZOztZQUNoRCxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDOztZQUVsRCxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLGNBQWMsQ0FBQztRQUM1RSxPQUFPLFNBQVMsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7WUFoQkYsVUFBVTs7OztZQUZGLGNBQWM7WUFKckIsd0JBQXdCOzs7O0lBU3hCLGlDQUEyQzs7SUFDM0MsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ29tcG9uZW50UmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEluamVjdGFibGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFdpZGdldFJlZ2lzdHJ5IH0gZnJvbSAnLi93aWRnZXRyZWdpc3RyeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXaWRnZXRGYWN0b3J5IHtcblxuICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI7XG4gIHByaXZhdGUgcmVnaXN0cnk6IFdpZGdldFJlZ2lzdHJ5O1xuXG4gIGNvbnN0cnVjdG9yKHJlZ2lzdHJ5OiBXaWRnZXRSZWdpc3RyeSwgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xuICAgIHRoaXMucmVnaXN0cnkgPSByZWdpc3RyeTtcbiAgICB0aGlzLnJlc29sdmVyID0gcmVzb2x2ZXI7XG4gIH1cblxuICBjcmVhdGVXaWRnZXQoY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCB0eXBlOiBzdHJpbmcpOiBDb21wb25lbnRSZWY8YW55PiB7XG4gICAgbGV0IGNvbXBvbmVudENsYXNzID0gdGhpcy5yZWdpc3RyeS5nZXRXaWRnZXRUeXBlKHR5cGUpO1xuXG4gICAgbGV0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudENsYXNzKTtcbiAgICByZXR1cm4gY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcbiAgfVxufVxuIl19