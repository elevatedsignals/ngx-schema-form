/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var ActionRegistry = /** @class */ (function () {
    function ActionRegistry() {
        this.actions = {};
    }
    /**
     * @return {?}
     */
    ActionRegistry.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.actions = {};
    };
    /**
     * @param {?} actionId
     * @param {?} action
     * @return {?}
     */
    ActionRegistry.prototype.register = /**
     * @param {?} actionId
     * @param {?} action
     * @return {?}
     */
    function (actionId, action) {
        this.actions[actionId] = action;
    };
    /**
     * @param {?} actionId
     * @return {?}
     */
    ActionRegistry.prototype.get = /**
     * @param {?} actionId
     * @return {?}
     */
    function (actionId) {
        return this.actions[actionId];
    };
    return ActionRegistry;
}());
export { ActionRegistry };
if (false) {
    /** @type {?} */
    ActionRegistry.prototype.actions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucmVnaXN0cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvbW9kZWwvYWN0aW9ucmVnaXN0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0lBQUE7UUFDRSxZQUFPLEdBQTRCLEVBQUUsQ0FBQztJQWF4QyxDQUFDOzs7O0lBWEMsOEJBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7O0lBRUQsaUNBQVE7Ozs7O0lBQVIsVUFBUyxRQUFnQixFQUFFLE1BQWM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCw0QkFBRzs7OztJQUFILFVBQUksUUFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFkRCxJQWNDOzs7O0lBYkMsaUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnLi9hY3Rpb24nO1xuXG5leHBvcnQgY2xhc3MgQWN0aW9uUmVnaXN0cnkge1xuICBhY3Rpb25zOiB7W2tleTogc3RyaW5nXTogQWN0aW9ufSA9IHt9O1xuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuYWN0aW9ucyA9IHt9O1xuICB9XG5cbiAgcmVnaXN0ZXIoYWN0aW9uSWQ6IHN0cmluZywgYWN0aW9uOiBBY3Rpb24pIHtcbiAgICB0aGlzLmFjdGlvbnNbYWN0aW9uSWRdID0gYWN0aW9uO1xuICB9XG5cbiAgZ2V0KGFjdGlvbklkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25zW2FjdGlvbklkXTtcbiAgfVxufVxuIl19