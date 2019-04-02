/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as ZSchema from 'z-schema';
/**
 * @abstract
 */
var /**
 * @abstract
 */
SchemaValidatorFactory = /** @class */ (function () {
    function SchemaValidatorFactory() {
    }
    /**
     * Override this method to reset the schema validator instance.<br/>
     * This may be required since some schema validators keep a deep copy<br/>
     * of your schemas and changes at runtime are not recognized by the schema validator.<br/>
     * In this method you should either re-instantiate the schema validator or
     * clear its cache.<br/>
     * Example of re-instantiating schema validator
     * <code>
     *     reset(){
     *         this.zschema = new ZSchema({})
     *     }
     * </code>
     * <br/>
     * Since this method it self does nothing there is <br/>
     * no need to call the <code>super.reset()</code>
     */
    /**
     * Override this method to reset the schema validator instance.<br/>
     * This may be required since some schema validators keep a deep copy<br/>
     * of your schemas and changes at runtime are not recognized by the schema validator.<br/>
     * In this method you should either re-instantiate the schema validator or
     * clear its cache.<br/>
     * Example of re-instantiating schema validator
     * <code>
     *     reset(){
     *         this.zschema = new ZSchema({})
     *     }
     * </code>
     * <br/>
     * Since this method it self does nothing there is <br/>
     * no need to call the <code>super.reset()</code>
     * @return {?}
     */
    SchemaValidatorFactory.prototype.reset = /**
     * Override this method to reset the schema validator instance.<br/>
     * This may be required since some schema validators keep a deep copy<br/>
     * of your schemas and changes at runtime are not recognized by the schema validator.<br/>
     * In this method you should either re-instantiate the schema validator or
     * clear its cache.<br/>
     * Example of re-instantiating schema validator
     * <code>
     *     reset(){
     *         this.zschema = new ZSchema({})
     *     }
     * </code>
     * <br/>
     * Since this method it self does nothing there is <br/>
     * no need to call the <code>super.reset()</code>
     * @return {?}
     */
    function () {
    };
    return SchemaValidatorFactory;
}());
/**
 * @abstract
 */
export { SchemaValidatorFactory };
if (false) {
    /**
     * @abstract
     * @param {?} schema
     * @return {?}
     */
    SchemaValidatorFactory.prototype.createValidatorFn = function (schema) { };
    /**
     * @abstract
     * @param {?} schema
     * @param {?} ref
     * @return {?}
     */
    SchemaValidatorFactory.prototype.getSchema = function (schema, ref) { };
}
var ZSchemaValidatorFactory = /** @class */ (function (_super) {
    tslib_1.__extends(ZSchemaValidatorFactory, _super);
    function ZSchemaValidatorFactory() {
        var _this = _super.call(this) || this;
        _this.createSchemaValidator();
        return _this;
    }
    /**
     * @return {?}
     */
    ZSchemaValidatorFactory.prototype.createSchemaValidator = /**
     * @return {?}
     */
    function () {
        this.zschema = new ZSchema({
            breakOnFirstError: false
        });
    };
    /**
     * @return {?}
     */
    ZSchemaValidatorFactory.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.createSchemaValidator();
    };
    /**
     * @param {?} schema
     * @return {?}
     */
    ZSchemaValidatorFactory.prototype.createValidatorFn = /**
     * @param {?} schema
     * @return {?}
     */
    function (schema) {
        var _this = this;
        return function (value) {
            if (schema.type === 'number' || schema.type === 'integer') {
                value = +value;
            }
            _this.zschema.validate(value, schema);
            /** @type {?} */
            var err = _this.zschema.getLastErrors();
            _this.denormalizeRequiredPropertyPaths(err);
            return err || null;
        };
    };
    /**
     * @param {?} schema
     * @param {?} ref
     * @return {?}
     */
    ZSchemaValidatorFactory.prototype.getSchema = /**
     * @param {?} schema
     * @param {?} ref
     * @return {?}
     */
    function (schema, ref) {
        // check definitions are valid
        /** @type {?} */
        var isValid = this.zschema.compileSchema(schema);
        if (isValid) {
            return this.getDefinition(schema, ref);
        }
        else {
            throw this.zschema.getLastError();
        }
    };
    /**
     * @param {?} err
     * @return {?}
     */
    ZSchemaValidatorFactory.prototype.denormalizeRequiredPropertyPaths = /**
     * @param {?} err
     * @return {?}
     */
    function (err) {
        if (err && err.length) {
            err = err.map(function (error) {
                if (error.path === '#/' && error.code === 'OBJECT_MISSING_REQUIRED_PROPERTY') {
                    error.path = "" + error.path + error.params[0];
                }
                return error;
            });
        }
    };
    /**
     * @param {?} schema
     * @param {?} ref
     * @return {?}
     */
    ZSchemaValidatorFactory.prototype.getDefinition = /**
     * @param {?} schema
     * @param {?} ref
     * @return {?}
     */
    function (schema, ref) {
        /** @type {?} */
        var foundSchema = schema;
        ref.split('/').slice(1).forEach(function (ptr) {
            if (ptr) {
                foundSchema = foundSchema[ptr];
            }
        });
        return foundSchema;
    };
    return ZSchemaValidatorFactory;
}(SchemaValidatorFactory));
export { ZSchemaValidatorFactory };
if (false) {
    /** @type {?} */
    ZSchemaValidatorFactory.prototype.zschema;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hdmFsaWRhdG9yZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zY2hlbWEtZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9zY2hlbWF2YWxpZGF0b3JmYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7Ozs7QUFFcEM7Ozs7SUFBQTtJQXdCQSxDQUFDO0lBbkJDOzs7Ozs7Ozs7Ozs7Ozs7T0FlRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ0gsc0NBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUw7SUFFQSxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDOzs7Ozs7Ozs7OztJQXZCQywyRUFBd0Q7Ozs7Ozs7SUFFeEQsd0VBQXFDOztBQXVCdkM7SUFBNkMsbURBQXNCO0lBSWpFO1FBQUEsWUFDRSxpQkFBTyxTQUVSO1FBREMsS0FBSSxDQUFDLHFCQUFxQixFQUFFLENBQUE7O0lBQzlCLENBQUM7Ozs7SUFFTyx1REFBcUI7OztJQUE3QjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUksSUFBSSxPQUFPLENBQUM7WUFDMUIsaUJBQWlCLEVBQUUsS0FBSztTQUN6QixDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsdUNBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUE7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxtREFBaUI7Ozs7SUFBakIsVUFBa0IsTUFBVztRQUE3QixpQkFjQztRQWJDLE9BQU8sVUFBQyxLQUFLO1lBRVgsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVEsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtnQkFDekQsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDO2FBQ2hCO1lBRUQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDOztnQkFDakMsR0FBRyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFO1lBRXRDLEtBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUUzQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUM7UUFDckIsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsMkNBQVM7Ozs7O0lBQVQsVUFBVSxNQUFXLEVBQUUsR0FBVzs7O1lBRTFCLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDbEQsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDTCxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDbkM7SUFDSCxDQUFDOzs7OztJQUVPLGtFQUFnQzs7OztJQUF4QyxVQUF5QyxHQUFVO1FBQ2pELElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDckIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLO2dCQUNqQixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssa0NBQWtDLEVBQUU7b0JBQzVFLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFHLENBQUM7aUJBQ2hEO2dCQUNELE9BQU8sS0FBSyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7OztJQUVPLCtDQUFhOzs7OztJQUFyQixVQUFzQixNQUFXLEVBQUUsR0FBVzs7WUFDeEMsV0FBVyxHQUFHLE1BQU07UUFDeEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztZQUNqQyxJQUFJLEdBQUcsRUFBRTtnQkFDUCxXQUFXLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2hDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLEFBakVELENBQTZDLHNCQUFzQixHQWlFbEU7Ozs7SUEvREMsMENBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgWlNjaGVtYSBmcm9tICd6LXNjaGVtYSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IHtcbiAgYWJzdHJhY3QgY3JlYXRlVmFsaWRhdG9yRm4oc2NoZW1hKTogKHZhbHVlOiBhbnkpID0+IGFueTtcblxuICBhYnN0cmFjdCBnZXRTY2hlbWEoc2NoZW1hLCByZWYpOiBhbnk7XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHJlc2V0IHRoZSBzY2hlbWEgdmFsaWRhdG9yIGluc3RhbmNlLjxici8+XG4gICAqIFRoaXMgbWF5IGJlIHJlcXVpcmVkIHNpbmNlIHNvbWUgc2NoZW1hIHZhbGlkYXRvcnMga2VlcCBhIGRlZXAgY29weTxici8+XG4gICAqIG9mIHlvdXIgc2NoZW1hcyBhbmQgY2hhbmdlcyBhdCBydW50aW1lIGFyZSBub3QgcmVjb2duaXplZCBieSB0aGUgc2NoZW1hIHZhbGlkYXRvci48YnIvPlxuICAgKiBJbiB0aGlzIG1ldGhvZCB5b3Ugc2hvdWxkIGVpdGhlciByZS1pbnN0YW50aWF0ZSB0aGUgc2NoZW1hIHZhbGlkYXRvciBvclxuICAgKiBjbGVhciBpdHMgY2FjaGUuPGJyLz5cbiAgICogRXhhbXBsZSBvZiByZS1pbnN0YW50aWF0aW5nIHNjaGVtYSB2YWxpZGF0b3JcbiAgICogPGNvZGU+XG4gICAqICAgICByZXNldCgpe1xuICAgKiAgICAgICAgIHRoaXMuenNjaGVtYSA9IG5ldyBaU2NoZW1hKHt9KVxuICAgKiAgICAgfVxuICAgKiA8L2NvZGU+XG4gICAqIDxici8+XG4gICAqIFNpbmNlIHRoaXMgbWV0aG9kIGl0IHNlbGYgZG9lcyBub3RoaW5nIHRoZXJlIGlzIDxici8+XG4gICAqIG5vIG5lZWQgdG8gY2FsbCB0aGUgPGNvZGU+c3VwZXIucmVzZXQoKTwvY29kZT5cbiAgICovXG4gIHJlc2V0KCkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFpTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IGV4dGVuZHMgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB7XG5cbiAgcHJvdGVjdGVkIHpzY2hlbWE7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNyZWF0ZVNjaGVtYVZhbGlkYXRvcigpXG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVNjaGVtYVZhbGlkYXRvcigpIHtcbiAgICB0aGlzLnpzY2hlbWEgPSAgbmV3IFpTY2hlbWEoe1xuICAgICAgYnJlYWtPbkZpcnN0RXJyb3I6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmNyZWF0ZVNjaGVtYVZhbGlkYXRvcigpXG4gIH1cblxuICBjcmVhdGVWYWxpZGF0b3JGbihzY2hlbWE6IGFueSkge1xuICAgIHJldHVybiAodmFsdWUpOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9PiB7XG5cbiAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJykge1xuICAgICAgICB2YWx1ZSA9ICt2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy56c2NoZW1hLnZhbGlkYXRlKHZhbHVlLCBzY2hlbWEpO1xuICAgICAgbGV0IGVyciA9IHRoaXMuenNjaGVtYS5nZXRMYXN0RXJyb3JzKCk7XG5cbiAgICAgIHRoaXMuZGVub3JtYWxpemVSZXF1aXJlZFByb3BlcnR5UGF0aHMoZXJyKTtcblxuICAgICAgcmV0dXJuIGVyciB8fCBudWxsO1xuICAgIH07XG4gIH1cblxuICBnZXRTY2hlbWEoc2NoZW1hOiBhbnksIHJlZjogc3RyaW5nKSB7XG4gICAgLy8gY2hlY2sgZGVmaW5pdGlvbnMgYXJlIHZhbGlkXG4gICAgY29uc3QgaXNWYWxpZCA9IHRoaXMuenNjaGVtYS5jb21waWxlU2NoZW1hKHNjaGVtYSk7XG4gICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldERlZmluaXRpb24oc2NoZW1hLCByZWYpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyB0aGlzLnpzY2hlbWEuZ2V0TGFzdEVycm9yKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZW5vcm1hbGl6ZVJlcXVpcmVkUHJvcGVydHlQYXRocyhlcnI6IGFueVtdKSB7XG4gICAgaWYgKGVyciAmJiBlcnIubGVuZ3RoKSB7XG4gICAgICBlcnIgPSBlcnIubWFwKGVycm9yID0+IHtcbiAgICAgICAgaWYgKGVycm9yLnBhdGggPT09ICcjLycgJiYgZXJyb3IuY29kZSA9PT0gJ09CSkVDVF9NSVNTSU5HX1JFUVVJUkVEX1BST1BFUlRZJykge1xuICAgICAgICAgIGVycm9yLnBhdGggPSBgJHtlcnJvci5wYXRofSR7ZXJyb3IucGFyYW1zWzBdfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWZpbml0aW9uKHNjaGVtYTogYW55LCByZWY6IHN0cmluZykge1xuICAgIGxldCBmb3VuZFNjaGVtYSA9IHNjaGVtYTtcbiAgICByZWYuc3BsaXQoJy8nKS5zbGljZSgxKS5mb3JFYWNoKHB0ciA9PiB7XG4gICAgICBpZiAocHRyKSB7XG4gICAgICAgIGZvdW5kU2NoZW1hID0gZm91bmRTY2hlbWFbcHRyXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZm91bmRTY2hlbWE7XG4gIH1cbn1cblxuIl19