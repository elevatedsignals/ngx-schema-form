/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { FormProperty } from './formproperty';
/**
 * @abstract
 */
export class AtomicProperty extends FormProperty {
    /**
     * @param {?} value
     * @param {?=} onlySelf
     * @return {?}
     */
    setValue(value, onlySelf = false) {
        this._value = value;
        this.updateValueAndValidity(onlySelf, true);
    }
    /**
     * @param {?=} value
     * @param {?=} onlySelf
     * @return {?}
     */
    reset(value = null, onlySelf = true) {
        this.resetValue(value);
        this.updateValueAndValidity(onlySelf, true);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    resetValue(value) {
        if (value === null) {
            if (this.schema.default !== undefined) {
                value = this.schema.default;
            }
            else {
                value = this.fallbackValue();
            }
        }
        this._value = value;
    }
    /**
     * @return {?}
     */
    _hasValue() {
        return this.fallbackValue() !== this.value;
    }
    /**
     * @return {?}
     */
    _updateValue() {
    }
}
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    AtomicProperty.prototype.fallbackValue = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRvbWljcHJvcGVydHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvbW9kZWwvYXRvbWljcHJvcGVydHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUU1QyxNQUFNLE9BQWdCLGNBQWUsU0FBUSxZQUFZOzs7Ozs7SUFFdkQsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLEdBQUcsS0FBSztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7OztJQUVELEtBQUssQ0FBQyxRQUFhLElBQUksRUFBRSxRQUFRLEdBQUcsSUFBSTtRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBVTtRQUNuQixJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDbEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7Z0JBQ3JDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUM3QjtpQkFBTTtnQkFDTCxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQzlCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7O0lBRU0sU0FBUztRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDN0MsQ0FBQzs7OztJQUlNLFlBQVk7SUFDbkIsQ0FBQztDQUNGOzs7Ozs7SUFKQyx5REFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Zvcm1Qcm9wZXJ0eX0gZnJvbSAnLi9mb3JtcHJvcGVydHknO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQXRvbWljUHJvcGVydHkgZXh0ZW5kcyBGb3JtUHJvcGVydHkge1xuXG4gIHNldFZhbHVlKHZhbHVlLCBvbmx5U2VsZiA9IGZhbHNlKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IGFueSA9IG51bGwsIG9ubHlTZWxmID0gdHJ1ZSkge1xuICAgIHRoaXMucmVzZXRWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxuXG4gIHJlc2V0VmFsdWUodmFsdWU6IGFueSk6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5zY2hlbWEuZGVmYXVsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5zY2hlbWEuZGVmYXVsdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5mYWxsYmFja1ZhbHVlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgX2hhc1ZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZhbGxiYWNrVmFsdWUoKSAhPT0gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGFic3RyYWN0IGZhbGxiYWNrVmFsdWUoKTogYW55O1xuXG4gIHB1YmxpYyBfdXBkYXRlVmFsdWUoKSB7XG4gIH1cbn1cbiJdfQ==