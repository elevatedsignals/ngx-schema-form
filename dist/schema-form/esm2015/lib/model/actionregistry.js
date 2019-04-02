/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
export class ActionRegistry {
    constructor() {
        this.actions = {};
    }
    /**
     * @return {?}
     */
    clear() {
        this.actions = {};
    }
    /**
     * @param {?} actionId
     * @param {?} action
     * @return {?}
     */
    register(actionId, action) {
        this.actions[actionId] = action;
    }
    /**
     * @param {?} actionId
     * @return {?}
     */
    get(actionId) {
        return this.actions[actionId];
    }
}
if (false) {
    /** @type {?} */
    ActionRegistry.prototype.actions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucmVnaXN0cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvbW9kZWwvYWN0aW9ucmVnaXN0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU0sT0FBTyxjQUFjO0lBQTNCO1FBQ0UsWUFBTyxHQUE0QixFQUFFLENBQUM7SUFheEMsQ0FBQzs7OztJQVhDLEtBQUs7UUFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsUUFBZ0IsRUFBRSxNQUFjO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLFFBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBQ0Y7OztJQWJDLGlDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJy4vYWN0aW9uJztcblxuZXhwb3J0IGNsYXNzIEFjdGlvblJlZ2lzdHJ5IHtcbiAgYWN0aW9uczoge1trZXk6IHN0cmluZ106IEFjdGlvbn0gPSB7fTtcblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmFjdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHJlZ2lzdGVyKGFjdGlvbklkOiBzdHJpbmcsIGFjdGlvbjogQWN0aW9uKSB7XG4gICAgdGhpcy5hY3Rpb25zW2FjdGlvbklkXSA9IGFjdGlvbjtcbiAgfVxuXG4gIGdldChhY3Rpb25JZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9uc1thY3Rpb25JZF07XG4gIH1cbn1cbiJdfQ==