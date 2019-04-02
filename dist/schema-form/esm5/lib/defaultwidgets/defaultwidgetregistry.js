/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ArrayWidget } from './array/array.widget';
import { ButtonWidget } from './button/button.widget';
import { CheckboxWidget } from './checkbox/checkbox.widget';
import { FileWidget } from './file/file.widget';
import { IntegerWidget } from './integer/integer.widget';
import { ObjectWidget } from './object/object.widget';
import { RadioWidget } from './radio/radio.widget';
import { RangeWidget } from './range/range.widget';
import { SelectWidget } from './select/select.widget';
import { StringWidget } from './string/string.widget';
import { TextAreaWidget } from './textarea/textarea.widget';
import { WidgetRegistry } from '../widgetregistry';
var DefaultWidgetRegistry = /** @class */ (function (_super) {
    tslib_1.__extends(DefaultWidgetRegistry, _super);
    function DefaultWidgetRegistry() {
        var _this = _super.call(this) || this;
        _this.register('array', ArrayWidget);
        _this.register('object', ObjectWidget);
        _this.register('string', StringWidget);
        _this.register('search', StringWidget);
        _this.register('tel', StringWidget);
        _this.register('url', StringWidget);
        _this.register('email', StringWidget);
        _this.register('password', StringWidget);
        _this.register('color', StringWidget);
        _this.register('date', StringWidget);
        _this.register('date-time', StringWidget);
        _this.register('time', StringWidget);
        _this.register('integer', IntegerWidget);
        _this.register('number', IntegerWidget);
        _this.register('range', RangeWidget);
        _this.register('textarea', TextAreaWidget);
        _this.register('file', FileWidget);
        _this.register('select', SelectWidget);
        _this.register('radio', RadioWidget);
        _this.register('boolean', CheckboxWidget);
        _this.register('checkbox', CheckboxWidget);
        _this.register('button', ButtonWidget);
        _this.setDefaultWidget(StringWidget);
        return _this;
    }
    return DefaultWidgetRegistry;
}(WidgetRegistry));
export { DefaultWidgetRegistry };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdHdpZGdldHJlZ2lzdHJ5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNjaGVtYS1mb3JtLyIsInNvdXJjZXMiOlsibGliL2RlZmF1bHR3aWRnZXRzL2RlZmF1bHR3aWRnZXRyZWdpc3RyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5EO0lBQTJDLGlEQUFjO0lBQ3ZEO1FBQUEsWUFDRSxpQkFBTyxTQStCUjtRQTdCQyxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRyxXQUFXLENBQUMsQ0FBQztRQUNyQyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRyxZQUFZLENBQUMsQ0FBQztRQUV2QyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN0QyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN0QyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNuQyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNuQyxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNyQyxLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN4QyxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNyQyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNwQyxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN6QyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztRQUVwQyxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN4QyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN2QyxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUVwQyxLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUUxQyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNsQyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN0QyxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNwQyxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUN6QyxLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUUxQyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUV0QyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7O0lBQ3RDLENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUFsQ0QsQ0FBMkMsY0FBYyxHQWtDeEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcnJheVdpZGdldCB9IGZyb20gJy4vYXJyYXkvYXJyYXkud2lkZ2V0JztcbmltcG9ydCB7IEJ1dHRvbldpZGdldCB9IGZyb20gJy4vYnV0dG9uL2J1dHRvbi53aWRnZXQnO1xuaW1wb3J0IHsgQ2hlY2tib3hXaWRnZXQgfSBmcm9tICcuL2NoZWNrYm94L2NoZWNrYm94LndpZGdldCc7XG5pbXBvcnQgeyBGaWxlV2lkZ2V0IH0gZnJvbSAnLi9maWxlL2ZpbGUud2lkZ2V0JztcbmltcG9ydCB7IEludGVnZXJXaWRnZXQgfSBmcm9tICcuL2ludGVnZXIvaW50ZWdlci53aWRnZXQnO1xuaW1wb3J0IHsgT2JqZWN0V2lkZ2V0IH0gZnJvbSAnLi9vYmplY3Qvb2JqZWN0LndpZGdldCc7XG5pbXBvcnQgeyBSYWRpb1dpZGdldCB9IGZyb20gJy4vcmFkaW8vcmFkaW8ud2lkZ2V0JztcbmltcG9ydCB7IFJhbmdlV2lkZ2V0IH0gZnJvbSAnLi9yYW5nZS9yYW5nZS53aWRnZXQnO1xuaW1wb3J0IHsgU2VsZWN0V2lkZ2V0IH0gZnJvbSAnLi9zZWxlY3Qvc2VsZWN0LndpZGdldCc7XG5pbXBvcnQgeyBTdHJpbmdXaWRnZXQgfSBmcm9tICcuL3N0cmluZy9zdHJpbmcud2lkZ2V0JztcbmltcG9ydCB7IFRleHRBcmVhV2lkZ2V0IH0gZnJvbSAnLi90ZXh0YXJlYS90ZXh0YXJlYS53aWRnZXQnO1xuXG5pbXBvcnQgeyBXaWRnZXRSZWdpc3RyeSB9IGZyb20gJy4uL3dpZGdldHJlZ2lzdHJ5JztcblxuZXhwb3J0IGNsYXNzIERlZmF1bHRXaWRnZXRSZWdpc3RyeSBleHRlbmRzIFdpZGdldFJlZ2lzdHJ5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucmVnaXN0ZXIoJ2FycmF5JywgIEFycmF5V2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdvYmplY3QnLCAgT2JqZWN0V2lkZ2V0KTtcblxuICAgIHRoaXMucmVnaXN0ZXIoJ3N0cmluZycsIFN0cmluZ1dpZGdldCk7XG4gICAgdGhpcy5yZWdpc3Rlcignc2VhcmNoJywgU3RyaW5nV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCd0ZWwnLCBTdHJpbmdXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3VybCcsIFN0cmluZ1dpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignZW1haWwnLCBTdHJpbmdXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3Bhc3N3b3JkJywgU3RyaW5nV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdjb2xvcicsIFN0cmluZ1dpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignZGF0ZScsIFN0cmluZ1dpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignZGF0ZS10aW1lJywgU3RyaW5nV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCd0aW1lJywgU3RyaW5nV2lkZ2V0KTtcblxuICAgIHRoaXMucmVnaXN0ZXIoJ2ludGVnZXInLCBJbnRlZ2VyV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdudW1iZXInLCBJbnRlZ2VyV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdyYW5nZScsIFJhbmdlV2lkZ2V0KTtcblxuICAgIHRoaXMucmVnaXN0ZXIoJ3RleHRhcmVhJywgVGV4dEFyZWFXaWRnZXQpO1xuXG4gICAgdGhpcy5yZWdpc3RlcignZmlsZScsIEZpbGVXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3NlbGVjdCcsIFNlbGVjdFdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigncmFkaW8nLCBSYWRpb1dpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignYm9vbGVhbicsIENoZWNrYm94V2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdjaGVja2JveCcsIENoZWNrYm94V2lkZ2V0KTtcblxuICAgIHRoaXMucmVnaXN0ZXIoJ2J1dHRvbicsIEJ1dHRvbldpZGdldCk7XG5cbiAgICB0aGlzLnNldERlZmF1bHRXaWRnZXQoU3RyaW5nV2lkZ2V0KTtcbiAgfVxufVxuIl19