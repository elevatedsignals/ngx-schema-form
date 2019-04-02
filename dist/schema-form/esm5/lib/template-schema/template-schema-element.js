/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TemplateSchemaElement = /** @class */ (function () {
    function TemplateSchemaElement() {
    }
    /**
     * @param {?} elementRef
     * @return {?}
     */
    TemplateSchemaElement.prototype.getTextContent = /**
     * @param {?} elementRef
     * @return {?}
     */
    function (elementRef) {
        /** @type {?} */
        var nodes = Array.from(elementRef.nativeElement.childNodes);
        /** @type {?} */
        var node = (/** @type {?} */ (nodes.filter(function (el) {
            return el.nodeType === el.TEXT_NODE;
        }).pop()));
        if (!node || !node.nodeValue) {
            return '';
        }
        return node.nodeValue.trim();
    };
    return TemplateSchemaElement;
}());
export { TemplateSchemaElement };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtc2NoZW1hLWVsZW1lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvdGVtcGxhdGUtc2NoZW1hL3RlbXBsYXRlLXNjaGVtYS1lbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTtJQUFBO0lBZUEsQ0FBQzs7Ozs7SUFiQyw4Q0FBYzs7OztJQUFkLFVBQWUsVUFBc0I7O1lBQzdCLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDOztZQUN2RCxJQUFJLEdBQUcsbUJBQWEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEVBQWU7WUFDckQsT0FBTyxFQUFFLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUE7UUFFUixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFSCw0QkFBQztBQUFELENBQUMsQUFmRCxJQWVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVTY2hlbWFFbGVtZW50IHtcblxuICBnZXRUZXh0Q29udGVudChlbGVtZW50UmVmOiBFbGVtZW50UmVmKTogc3RyaW5nIHtcbiAgICBjb25zdCBub2RlcyA9IEFycmF5LmZyb20oZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMpO1xuICAgIGNvbnN0IG5vZGUgPSA8SFRNTEVsZW1lbnQ+bm9kZXMuZmlsdGVyKChlbDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBlbC5ub2RlVHlwZSA9PT0gZWwuVEVYVF9OT0RFO1xuICAgIH0pLnBvcCgpO1xuXG4gICAgaWYgKCFub2RlIHx8ICFub2RlLm5vZGVWYWx1ZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlLm5vZGVWYWx1ZS50cmltKCk7XG4gIH1cblxufVxuIl19