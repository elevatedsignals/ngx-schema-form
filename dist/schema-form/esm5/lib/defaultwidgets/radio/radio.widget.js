/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
var RadioWidget = /** @class */ (function (_super) {
    tslib_1.__extends(RadioWidget, _super);
    function RadioWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadioWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-radio-widget',
                    template: "<div class=\"widget form-group\">\n\t<label>{{schema.title}}</label>\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n\t<div *ngFor=\"let option of schema.oneOf\" class=\"radio\">\n\t\t<label class=\"horizontal control-label\">\n\t\t\t<input [formControl]=\"control\" [attr.name]=\"name\" value=\"{{option.enum[0]}}\" type=\"radio\"  [disabled]=\"schema.readOnly\">\n\t\t\t{{option.description}}\n\t\t</label>\n\t</div>\n\t<input *ngIf=\"schema.readOnly\" [attr.name]=\"name\" type=\"hidden\" [formControl]=\"control\">\n</div>"
                }] }
    ];
    return RadioWidget;
}(ControlWidget));
export { RadioWidget };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8ud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNjaGVtYS1mb3JtLyIsInNvdXJjZXMiOlsibGliL2RlZmF1bHR3aWRnZXRzL3JhZGlvL3JhZGlvLndpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUU3QztJQWNpQyx1Q0FBYTtJQWQ5Qzs7SUFjZ0QsQ0FBQzs7Z0JBZGhELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsMGpCQVVMO2lCQUNOOztJQUMrQyxrQkFBQztDQUFBLEFBZGpELENBY2lDLGFBQWEsR0FBRztTQUFwQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1yYWRpby13aWRnZXQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ3aWRnZXQgZm9ybS1ncm91cFwiPlxuXHQ8bGFiZWw+e3tzY2hlbWEudGl0bGV9fTwvbGFiZWw+XG4gICAgPHNwYW4gKm5nSWY9XCJzY2hlbWEuZGVzY3JpcHRpb25cIiBjbGFzcz1cImZvcm1IZWxwXCI+e3tzY2hlbWEuZGVzY3JpcHRpb259fTwvc3Bhbj5cblx0PGRpdiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHNjaGVtYS5vbmVPZlwiIGNsYXNzPVwicmFkaW9cIj5cblx0XHQ8bGFiZWwgY2xhc3M9XCJob3Jpem9udGFsIGNvbnRyb2wtbGFiZWxcIj5cblx0XHRcdDxpbnB1dCBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiIFthdHRyLm5hbWVdPVwibmFtZVwiIHZhbHVlPVwie3tvcHRpb24uZW51bVswXX19XCIgdHlwZT1cInJhZGlvXCIgIFtkaXNhYmxlZF09XCJzY2hlbWEucmVhZE9ubHlcIj5cblx0XHRcdHt7b3B0aW9uLmRlc2NyaXB0aW9ufX1cblx0XHQ8L2xhYmVsPlxuXHQ8L2Rpdj5cblx0PGlucHV0ICpuZ0lmPVwic2NoZW1hLnJlYWRPbmx5XCIgW2F0dHIubmFtZV09XCJuYW1lXCIgdHlwZT1cImhpZGRlblwiIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCI+XG48L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCB7fVxuIl19