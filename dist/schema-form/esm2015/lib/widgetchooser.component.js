/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, ChangeDetectorRef, EventEmitter, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { TerminatorService } from './terminator.service';
import { WidgetFactory } from './widgetfactory';
export class WidgetChooserComponent {
    /**
     * @param {?=} widgetFactory
     * @param {?=} cdr
     * @param {?=} terminator
     */
    constructor(widgetFactory = null, cdr, terminator) {
        this.widgetFactory = widgetFactory;
        this.cdr = cdr;
        this.terminator = terminator;
        this.widgetInstanciated = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subs = this.terminator.onDestroy.subscribe(destroy => {
            if (destroy) {
                this.ref.destroy();
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.ref = this.widgetFactory.createWidget(this.container, this.widgetInfo.id);
        this.widgetInstanciated.emit(this.ref.instance);
        this.widgetInstance = this.ref.instance;
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
WidgetChooserComponent.decorators = [
    { type: Component, args: [{
                selector: 'sf-widget-chooser',
                template: `<div #target></div>`
            }] }
];
/** @nocollapse */
WidgetChooserComponent.ctorParameters = () => [
    { type: WidgetFactory },
    { type: ChangeDetectorRef },
    { type: TerminatorService }
];
WidgetChooserComponent.propDecorators = {
    widgetInfo: [{ type: Input }],
    widgetInstanciated: [{ type: Output }],
    container: [{ type: ViewChild, args: ['target', { read: ViewContainerRef },] }]
};
if (false) {
    /** @type {?} */
    WidgetChooserComponent.prototype.widgetInfo;
    /** @type {?} */
    WidgetChooserComponent.prototype.widgetInstanciated;
    /** @type {?} */
    WidgetChooserComponent.prototype.container;
    /** @type {?} */
    WidgetChooserComponent.prototype.widgetInstance;
    /** @type {?} */
    WidgetChooserComponent.prototype.ref;
    /** @type {?} */
    WidgetChooserComponent.prototype.subs;
    /** @type {?} */
    WidgetChooserComponent.prototype.widgetFactory;
    /** @type {?} */
    WidgetChooserComponent.prototype.cdr;
    /** @type {?} */
    WidgetChooserComponent.prototype.terminator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0Y2hvb3Nlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvd2lkZ2V0Y2hvb3Nlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxnQkFBZ0IsRUFHakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUWhELE1BQU0sT0FBTyxzQkFBc0I7Ozs7OztJQVlqQyxZQUNVLGdCQUErQixJQUFJLEVBQ25DLEdBQXNCLEVBQ3RCLFVBQTZCO1FBRjdCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQVg3Qix1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBWW5ELENBQUM7Ozs7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDeEQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNwQjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRSxxQkFBcUI7YUFDaEM7Ozs7WUFQUSxhQUFhO1lBWHBCLGlCQUFpQjtZQVVWLGlCQUFpQjs7O3lCQVd2QixLQUFLO2lDQUVMLE1BQU07d0JBRU4sU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBQzs7OztJQUo3Qyw0Q0FBeUI7O0lBRXpCLG9EQUF1RDs7SUFFdkQsMkNBQTJFOztJQUUzRSxnREFBNEI7O0lBQzVCLHFDQUErQjs7SUFDL0Isc0NBQTJCOztJQUd6QiwrQ0FBMkM7O0lBQzNDLHFDQUE4Qjs7SUFDOUIsNENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlcm1pbmF0b3JTZXJ2aWNlIH0gZnJvbSAnLi90ZXJtaW5hdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2lkZ2V0RmFjdG9yeSB9IGZyb20gJy4vd2lkZ2V0ZmFjdG9yeSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi13aWRnZXQtY2hvb3NlcicsXG4gIHRlbXBsYXRlOiBgPGRpdiAjdGFyZ2V0PjwvZGl2PmAsXG59KVxuZXhwb3J0IGNsYXNzIFdpZGdldENob29zZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICBASW5wdXQoKSB3aWRnZXRJbmZvOiBhbnk7XG5cbiAgQE91dHB1dCgpIHdpZGdldEluc3RhbmNpYXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3RhcmdldCcsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmfSkgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIHByaXZhdGUgd2lkZ2V0SW5zdGFuY2U6IGFueTtcbiAgcHJpdmF0ZSByZWY6IENvbXBvbmVudFJlZjxhbnk+O1xuICBwcml2YXRlIHN1YnM6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHdpZGdldEZhY3Rvcnk6IFdpZGdldEZhY3RvcnkgPSBudWxsLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHRlcm1pbmF0b3I6IFRlcm1pbmF0b3JTZXJ2aWNlLFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3VicyA9IHRoaXMudGVybWluYXRvci5vbkRlc3Ryb3kuc3Vic2NyaWJlKGRlc3Ryb3kgPT4ge1xuICAgICAgaWYgKGRlc3Ryb3kpIHtcbiAgICAgICAgdGhpcy5yZWYuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5yZWYgPSB0aGlzLndpZGdldEZhY3RvcnkuY3JlYXRlV2lkZ2V0KHRoaXMuY29udGFpbmVyLCB0aGlzLndpZGdldEluZm8uaWQpO1xuICAgIHRoaXMud2lkZ2V0SW5zdGFuY2lhdGVkLmVtaXQodGhpcy5yZWYuaW5zdGFuY2UpO1xuICAgIHRoaXMud2lkZ2V0SW5zdGFuY2UgPSB0aGlzLnJlZi5pbnN0YW5jZTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnMudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19