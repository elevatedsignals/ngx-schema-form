/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
export class TemplateSchemaElement {
    /**
     * @param {?} elementRef
     * @return {?}
     */
    getTextContent(elementRef) {
        /** @type {?} */
        const nodes = Array.from(elementRef.nativeElement.childNodes);
        /** @type {?} */
        const node = (/** @type {?} */ (nodes.filter((el) => {
            return el.nodeType === el.TEXT_NODE;
        }).pop()));
        if (!node || !node.nodeValue) {
            return '';
        }
        return node.nodeValue.trim();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtc2NoZW1hLWVsZW1lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvdGVtcGxhdGUtc2NoZW1hL3RlbXBsYXRlLXNjaGVtYS1lbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNLE9BQU8scUJBQXFCOzs7OztJQUVoQyxjQUFjLENBQUMsVUFBc0I7O2NBQzdCLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDOztjQUN2RCxJQUFJLEdBQUcsbUJBQWEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQWUsRUFBRSxFQUFFO1lBQ3pELE9BQU8sRUFBRSxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFBO1FBRVIsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDNUIsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0NBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVNjaGVtYUVsZW1lbnQge1xuXG4gIGdldFRleHRDb250ZW50KGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5vZGVzID0gQXJyYXkuZnJvbShlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlcyk7XG4gICAgY29uc3Qgbm9kZSA9IDxIVE1MRWxlbWVudD5ub2Rlcy5maWx0ZXIoKGVsOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIGVsLm5vZGVUeXBlID09PSBlbC5URVhUX05PREU7XG4gICAgfSkucG9wKCk7XG5cbiAgICBpZiAoIW5vZGUgfHwgIW5vZGUubm9kZVZhbHVlKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGUubm9kZVZhbHVlLnRyaW0oKTtcbiAgfVxuXG59XG4iXX0=