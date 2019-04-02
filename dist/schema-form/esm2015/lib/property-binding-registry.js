/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * General purpose propery binding registry
 */
export class PropertyBindingRegistry {
    constructor() {
        this.bindings = {};
    }
    /**
     * @param {?} type
     * @return {?}
     */
    getPropertyBindings(type) {
        this.bindings[type] = this.bindings[type] || new PropertyBindings();
        return this.bindings[type];
    }
    /**
     * @return {?}
     */
    getPropertyBindingsVisibility() {
        return this.getPropertyBindings(PropertyBindingTypes.visibility);
    }
}
if (false) {
    /** @type {?} */
    PropertyBindingRegistry.prototype.bindings;
}
/** @enum {number} */
const PropertyBindingTypes = {
    visibility: 0,
};
export { PropertyBindingTypes };
PropertyBindingTypes[PropertyBindingTypes.visibility] = 'visibility';
/**
 * Storage that holds all bindings that are property paths related.<br/>
 */
export class PropertyBindings {
    constructor() {
        this.sourcesIndex = new SimplePropertyIndexer();
        this.dependenciesIndex = new SimplePropertyIndexer();
    }
    /**
     * @param {?} dependencyPath
     * @param {?} sourcePropertyPath
     * @return {?}
     */
    add(dependencyPath, sourcePropertyPath) {
        this.sourcesIndex.store(sourcePropertyPath, dependencyPath);
        this.dependenciesIndex.store(dependencyPath, sourcePropertyPath);
    }
    /**
     * @param {?} dependencyPath
     * @return {?}
     */
    findByDependencyPath(dependencyPath) {
        /** @type {?} */
        const result = this.dependenciesIndex.find(dependencyPath);
        result.results = result.results || [];
        /** @type {?} */
        let values = [];
        for (const res of result.results) {
            values = values.concat(Object.keys(res.value));
        }
        return result.found ? values : [];
    }
    /**
     * @param {?} sourcePropertyPath
     * @return {?}
     */
    getBySourcePropertyPath(sourcePropertyPath) {
        /** @type {?} */
        const result = this.sourcesIndex.find(sourcePropertyPath);
        result.results = result.results || [];
        /** @type {?} */
        let values = [];
        for (const res of result.results) {
            values = values.concat(Object.keys(res.value));
        }
        return result.found ? values : [];
    }
    /**
     * @param {?} path
     * @return {?}
     */
    createPathIndex(path) {
        return path.split('/');
    }
}
if (false) {
    /** @type {?} */
    PropertyBindings.prototype.sourcesIndex;
    /** @type {?} */
    PropertyBindings.prototype.dependenciesIndex;
}
/**
 * Simple indexer to store property paths
 */
export class SimplePropertyIndexer {
    constructor() {
        this.index = {};
        this.findOnlyWithValue = true;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    _createPathIndex(path) {
        return path
            .replace(new RegExp('//', 'g'), '/')
            .replace(new RegExp('^/', 'g'), '')
            .split('/').filter(item => item);
    }
    /**
     * @param {?} propertyPath
     * @param {?=} value
     * @return {?}
     */
    store(propertyPath, value) {
        this._storeIndex(this._createPathIndex(propertyPath), value);
    }
    /**
     * @param {?} pathIndex
     * @param {?=} value
     * @return {?}
     */
    _storeIndex(pathIndex, value) {
        /** @type {?} */
        let indexPos = this.index;
        for (const key of pathIndex) {
            indexPos[key] = indexPos[key] || {};
            indexPos = indexPos[key];
        }
        if (indexPos && value) {
            indexPos[SimplePropertyIndexer.MARKER] = indexPos[SimplePropertyIndexer.MARKER] || {};
            indexPos[SimplePropertyIndexer.MARKER][value] = value;
        }
    }
    /**
     * Find path in index.<br/>
     * Will find path like:<br/>
     * <ul>
     *     <li>/property/0/prop</li>
     *     <li>/property/0/prop/2/test</li>
     *     <li>/property/0/prop/&#42;/test</li>
     *     <li>/property/&#42;/prop/1/test</li>
     *     <li>/property/&#42;/prop/&#42;/test</li>
     *     <li>/property/1/prop/&#42;/test</li>
     *  </ul>
     * @param {?} path
     * @return {?}
     */
    find(path) {
        return this._findInIndex(this._createPathIndex(path));
    }
    /**
     * @param {?} path
     * @return {?}
     */
    _findInIndex(path) {
        /** @type {?} */
        const ixRes = { target: path, found: false, results: [] };
        this.__findIndex(ixRes, path, this.index, []);
        return ixRes;
    }
    /**
     * @param {?} indexerResults
     * @param {?} path
     * @param {?} index
     * @param {?=} parent
     * @return {?}
     */
    __findIndex(indexerResults, path, index, parent) {
        /** @type {?} */
        const p = parent || [];
        /** @type {?} */
        const segment = path[0];
        /** @type {?} */
        const wild = ('*' === segment) ? Object.keys(index) : [];
        /** @type {?} */
        const _keys = ((/** @type {?} */ ((Array.isArray(segment) ? segment : [segment])))).concat(wild);
        /** @type {?} */
        const keys = _keys.filter((item, pos) => '*' !== item && _keys.indexOf(item) === pos);
        if (index['*']) {
            keys.push('*');
        }
        /** @type {?} */
        let paths = [];
        for (const key of keys) {
            /** @type {?} */
            const restPath = path.slice(1);
            /** @type {?} */
            const restIndex = index[key];
            /** @type {?} */
            const restParent = p.concat(key);
            if (path.length === 1) { // collect only the full paths
                if (!this.findOnlyWithValue || (restIndex && restIndex[SimplePropertyIndexer.MARKER])) {
                    indexerResults.results = indexerResults.results || [];
                    indexerResults.results.push({
                        path: restParent,
                        value: restIndex[SimplePropertyIndexer.MARKER]
                    });
                    paths.push(restParent);
                    indexerResults.found = indexerResults.results.length > 0;
                }
            }
            if (!restPath || !restPath.length || !restIndex) {
                break;
            }
            /** @type {?} */
            const restPaths = this.__findIndex(indexerResults, restPath, restIndex, restParent);
            paths = paths.concat(restPaths);
        }
        return paths;
    }
}
SimplePropertyIndexer.MARKER = '$____value';
if (false) {
    /** @type {?} */
    SimplePropertyIndexer.MARKER;
    /** @type {?} */
    SimplePropertyIndexer.prototype.index;
    /** @type {?} */
    SimplePropertyIndexer.prototype.findOnlyWithValue;
}
/**
 * @record
 */
export function IndexerResult() { }
if (false) {
    /**
     * The path originally searched for
     * @type {?}
     */
    IndexerResult.prototype.target;
    /**
     * Flag for the status of found or not found.<br/>
     * Usually <code>results</code> will be empty if no matches found.
     * @type {?}
     */
    IndexerResult.prototype.found;
    /**
     * The result path and values from the index search.<br/>
     * Usually <code>results</code> will be empty if no matches found.
     * @type {?}
     */
    IndexerResult.prototype.results;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHktYmluZGluZy1yZWdpc3RyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zY2hlbWEtZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9wcm9wZXJ0eS1iaW5kaW5nLXJlZ2lzdHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxNQUFNLE9BQU8sdUJBQXVCO0lBQXBDO1FBRVUsYUFBUSxHQUF3QyxFQUFFLENBQUM7SUFVN0QsQ0FBQzs7Ozs7SUFSQyxtQkFBbUIsQ0FBQyxJQUEwQjtRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3BFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsNkJBQTZCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Q0FDRjs7O0lBVkMsMkNBQTJEOzs7O0lBaUIzRCxhQUFVOzs7Ozs7O0FBTVosTUFBTSxPQUFPLGdCQUFnQjtJQUE3QjtRQUNFLGlCQUFZLEdBQTBCLElBQUkscUJBQXFCLEVBQUUsQ0FBQztRQUNsRSxzQkFBaUIsR0FBMEIsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO0lBOEJ6RSxDQUFDOzs7Ozs7SUE1QkMsR0FBRyxDQUFDLGNBQXNCLEVBQUUsa0JBQTBCO1FBQ3BELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxjQUFzQjs7Y0FDbkMsTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FB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QixzQ0FBbUI7O0lBQ25CLGtEQUF5Qjs7Ozs7QUEwRjNCLG1DQXlCQzs7Ozs7O0lBckJDLCtCQUFpQjs7Ozs7O0lBS2pCLDhCQUFlOzs7Ozs7SUFLZixnQ0FVSSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogR2VuZXJhbCBwdXJwb3NlIHByb3BlcnkgYmluZGluZyByZWdpc3RyeVxuICovXG5leHBvcnQgY2xhc3MgUHJvcGVydHlCaW5kaW5nUmVnaXN0cnkge1xuXG4gIHByaXZhdGUgYmluZGluZ3M6IHsgW2tleTogc3RyaW5nXTogUHJvcGVydHlCaW5kaW5ncyB9ID0ge307XG5cbiAgZ2V0UHJvcGVydHlCaW5kaW5ncyh0eXBlOiBQcm9wZXJ0eUJpbmRpbmdUeXBlcyk6IFByb3BlcnR5QmluZGluZ3Mge1xuICAgIHRoaXMuYmluZGluZ3NbdHlwZV0gPSB0aGlzLmJpbmRpbmdzW3R5cGVdIHx8IG5ldyBQcm9wZXJ0eUJpbmRpbmdzKCk7XG4gICAgcmV0dXJuIHRoaXMuYmluZGluZ3NbdHlwZV07XG4gIH1cblxuICBnZXRQcm9wZXJ0eUJpbmRpbmdzVmlzaWJpbGl0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eUJpbmRpbmdzKFByb3BlcnR5QmluZGluZ1R5cGVzLnZpc2liaWxpdHkpO1xuICB9XG59XG5cbi8qKlxuICogRGVmaW5lcyB0aGUgdHlwZXMgb2Ygc3VwcG9ydGVkIHByb3BlcnR5IGJpbmRpbmdzLjxici8+XG4gKiBGb3Igbm93IG9ubHkgPGNvZGU+dmlzaWJpbGl0eTwvY29kZT4gaXMgc3VwcG9ydGVkLjxici8+XG4gKi9cbmV4cG9ydCBlbnVtIFByb3BlcnR5QmluZGluZ1R5cGVzIHtcbiAgdmlzaWJpbGl0eVxufVxuXG4vKipcbiAqIFN0b3JhZ2UgdGhhdCBob2xkcyBhbGwgYmluZGluZ3MgdGhhdCBhcmUgcHJvcGVydHkgcGF0aHMgcmVsYXRlZC48YnIvPlxuICovXG5leHBvcnQgY2xhc3MgUHJvcGVydHlCaW5kaW5ncyB7XG4gIHNvdXJjZXNJbmRleDogU2ltcGxlUHJvcGVydHlJbmRleGVyID0gbmV3IFNpbXBsZVByb3BlcnR5SW5kZXhlcigpO1xuICBkZXBlbmRlbmNpZXNJbmRleDogU2ltcGxlUHJvcGVydHlJbmRleGVyID0gbmV3IFNpbXBsZVByb3BlcnR5SW5kZXhlcigpO1xuXG4gIGFkZChkZXBlbmRlbmN5UGF0aDogc3RyaW5nLCBzb3VyY2VQcm9wZXJ0eVBhdGg6IHN0cmluZykge1xuICAgIHRoaXMuc291cmNlc0luZGV4LnN0b3JlKHNvdXJjZVByb3BlcnR5UGF0aCwgZGVwZW5kZW5jeVBhdGgpO1xuICAgIHRoaXMuZGVwZW5kZW5jaWVzSW5kZXguc3RvcmUoZGVwZW5kZW5jeVBhdGgsIHNvdXJjZVByb3BlcnR5UGF0aCk7XG4gIH1cblxuICBmaW5kQnlEZXBlbmRlbmN5UGF0aChkZXBlbmRlbmN5UGF0aDogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZGVwZW5kZW5jaWVzSW5kZXguZmluZChkZXBlbmRlbmN5UGF0aCk7XG4gICAgcmVzdWx0LnJlc3VsdHMgPSByZXN1bHQucmVzdWx0cyB8fCBbXTtcbiAgICBsZXQgdmFsdWVzID0gW107XG4gICAgZm9yIChjb25zdCByZXMgb2YgcmVzdWx0LnJlc3VsdHMpIHtcbiAgICAgIHZhbHVlcyA9IHZhbHVlcy5jb25jYXQoT2JqZWN0LmtleXMocmVzLnZhbHVlKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQuZm91bmQgPyB2YWx1ZXMgOiBbXTtcbiAgfVxuXG4gIGdldEJ5U291cmNlUHJvcGVydHlQYXRoKHNvdXJjZVByb3BlcnR5UGF0aDogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc291cmNlc0luZGV4LmZpbmQoc291cmNlUHJvcGVydHlQYXRoKTtcbiAgICByZXN1bHQucmVzdWx0cyA9IHJlc3VsdC5yZXN1bHRzIHx8IFtdO1xuICAgIGxldCB2YWx1ZXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHJlcyBvZiByZXN1bHQucmVzdWx0cykge1xuICAgICAgdmFsdWVzID0gdmFsdWVzLmNvbmNhdChPYmplY3Qua2V5cyhyZXMudmFsdWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdC5mb3VuZCA/IHZhbHVlcyA6IFtdO1xuICB9XG5cbiAgY3JlYXRlUGF0aEluZGV4KHBhdGg6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gcGF0aC5zcGxpdCgnLycpO1xuICB9XG59XG5cbi8qKlxuICogU2ltcGxlIGluZGV4ZXIgdG8gc3RvcmUgcHJvcGVydHkgcGF0aHNcbiAqL1xuZXhwb3J0IGNsYXNzIFNpbXBsZVByb3BlcnR5SW5kZXhlciB7XG5cbiAgc3RhdGljIE1BUktFUiA9ICckX19fX3ZhbHVlJztcbiAgaW5kZXg6IG9iamVjdCA9IHt9O1xuICBmaW5kT25seVdpdGhWYWx1ZSA9IHRydWU7XG5cbiAgcHJpdmF0ZSBfY3JlYXRlUGF0aEluZGV4KHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiBwYXRoXG4gICAgICAucmVwbGFjZShuZXcgUmVnRXhwKCcvLycsICdnJyksICcvJylcbiAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoJ14vJywgJ2cnKSwgJycpXG4gICAgICAuc3BsaXQoJy8nKS5maWx0ZXIoaXRlbSA9PiBpdGVtKTtcbiAgfVxuXG4gIHN0b3JlKHByb3BlcnR5UGF0aDogc3RyaW5nLCB2YWx1ZT86IGFueSkge1xuICAgIHRoaXMuX3N0b3JlSW5kZXgodGhpcy5fY3JlYXRlUGF0aEluZGV4KHByb3BlcnR5UGF0aCksIHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3N0b3JlSW5kZXgocGF0aEluZGV4OiBzdHJpbmdbXSwgdmFsdWU/OiBzdHJpbmcpIHtcbiAgICBsZXQgaW5kZXhQb3MgPSB0aGlzLmluZGV4O1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhdGhJbmRleCkge1xuICAgICAgaW5kZXhQb3Nba2V5XSA9IGluZGV4UG9zW2tleV0gfHwge307XG4gICAgICBpbmRleFBvcyA9IGluZGV4UG9zW2tleV07XG4gICAgfVxuICAgIGlmIChpbmRleFBvcyAmJiB2YWx1ZSkge1xuICAgICAgaW5kZXhQb3NbU2ltcGxlUHJvcGVydHlJbmRleGVyLk1BUktFUl0gPSBpbmRleFBvc1tTaW1wbGVQcm9wZXJ0eUluZGV4ZXIuTUFSS0VSXSB8fCB7fTtcbiAgICAgIGluZGV4UG9zW1NpbXBsZVByb3BlcnR5SW5kZXhlci5NQVJLRVJdW3ZhbHVlXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHBhdGggaW4gaW5kZXguPGJyLz5cbiAgICogV2lsbCBmaW5kIHBhdGggbGlrZTo8YnIvPlxuICAgKiA8dWw+XG4gICAqICAgICA8bGk+L3Byb3BlcnR5LzAvcHJvcDwvbGk+XG4gICAqICAgICA8bGk+L3Byb3BlcnR5LzAvcHJvcC8yL3Rlc3Q8L2xpPlxuICAgKiAgICAgPGxpPi9wcm9wZXJ0eS8wL3Byb3AvJiM0MjsvdGVzdDwvbGk+XG4gICAqICAgICA8bGk+L3Byb3BlcnR5LyYjNDI7L3Byb3AvMS90ZXN0PC9saT5cbiAgICogICAgIDxsaT4vcHJvcGVydHkvJiM0MjsvcHJvcC8mIzQyOy90ZXN0PC9saT5cbiAgICogICAgIDxsaT4vcHJvcGVydHkvMS9wcm9wLyYjNDI7L3Rlc3Q8L2xpPlxuICAgKiAgPC91bD5cbiAgICogQHBhcmFtIHBhdGhcbiAgICovXG4gIGZpbmQocGF0aDogc3RyaW5nKTogSW5kZXhlclJlc3VsdCB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbmRJbkluZGV4KHRoaXMuX2NyZWF0ZVBhdGhJbmRleChwYXRoKSk7XG4gIH1cblxuICBfZmluZEluSW5kZXgocGF0aDogc3RyaW5nW10pOiBJbmRleGVyUmVzdWx0IHtcbiAgICBjb25zdCBpeFJlczogSW5kZXhlclJlc3VsdCA9IHt0YXJnZXQ6IHBhdGgsIGZvdW5kOiBmYWxzZSwgcmVzdWx0czogW119O1xuICAgIHRoaXMuX19maW5kSW5kZXgoaXhSZXMsIHBhdGgsIHRoaXMuaW5kZXgsIFtdKTtcbiAgICByZXR1cm4gaXhSZXM7XG4gIH1cblxuICBfX2ZpbmRJbmRleChpbmRleGVyUmVzdWx0czogSW5kZXhlclJlc3VsdCwgcGF0aDogc3RyaW5nW10sIGluZGV4OiBvYmplY3QsIHBhcmVudD86IHN0cmluZ1tdKSB7XG5cbiAgICBjb25zdCBwID0gcGFyZW50IHx8IFtdO1xuICAgIGNvbnN0IHNlZ21lbnQgPSBwYXRoWzBdO1xuICAgIGNvbnN0IHdpbGQgPSAoJyonID09PSBzZWdtZW50KSA/IE9iamVjdC5rZXlzKGluZGV4KSA6IFtdO1xuICAgIGNvbnN0IF9rZXlzID0gKChBcnJheS5pc0FycmF5KHNlZ21lbnQpID8gc2VnbWVudCA6IFtzZWdtZW50XSkgYXMgc3RyaW5nW10pLmNvbmNhdCh3aWxkKTtcbiAgICBjb25zdCBrZXlzID0gX2tleXMuZmlsdGVyKChpdGVtLCBwb3MpID0+ICcqJyAhPT0gaXRlbSAmJiBfa2V5cy5pbmRleE9mKGl0ZW0pID09PSBwb3MpOyAvLyByZW1vdmUgZHVwbGljYXRlc1xuXG4gICAgaWYgKGluZGV4WycqJ10pIHtcbiAgICAgIGtleXMucHVzaCgnKicpO1xuICAgIH1cblxuICAgIGxldCBwYXRocyA9IFtdO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgIGNvbnN0IHJlc3RQYXRoID0gcGF0aC5zbGljZSgxKTtcbiAgICAgIGNvbnN0IHJlc3RJbmRleCA9IGluZGV4W2tleV07XG4gICAgICBjb25zdCByZXN0UGFyZW50ID0gcC5jb25jYXQoa2V5KTtcblxuICAgICAgaWYgKHBhdGgubGVuZ3RoID09PSAxKSB7Ly8gY29sbGVjdCBvbmx5IHRoZSBmdWxsIHBhdGhzXG4gICAgICAgIGlmICghdGhpcy5maW5kT25seVdpdGhWYWx1ZSB8fCAocmVzdEluZGV4ICYmIHJlc3RJbmRleFtTaW1wbGVQcm9wZXJ0eUluZGV4ZXIuTUFSS0VSXSkpIHtcbiAgICAgICAgICBpbmRleGVyUmVzdWx0cy5yZXN1bHRzID0gaW5kZXhlclJlc3VsdHMucmVzdWx0cyB8fCBbXTtcbiAgICAgICAgICBpbmRleGVyUmVzdWx0cy5yZXN1bHRzLnB1c2goe1xuICAgICAgICAgICAgcGF0aDogcmVzdFBhcmVudCxcbiAgICAgICAgICAgIHZhbHVlOiByZXN0SW5kZXhbU2ltcGxlUHJvcGVydHlJbmRleGVyLk1BUktFUl1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBwYXRocy5wdXNoKHJlc3RQYXJlbnQpO1xuICAgICAgICAgIGluZGV4ZXJSZXN1bHRzLmZvdW5kID0gaW5kZXhlclJlc3VsdHMucmVzdWx0cy5sZW5ndGggPiAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghcmVzdFBhdGggfHwgIXJlc3RQYXRoLmxlbmd0aCB8fCAhcmVzdEluZGV4KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzdFBhdGhzID0gdGhpcy5fX2ZpbmRJbmRleChpbmRleGVyUmVzdWx0cywgcmVzdFBhdGgsIHJlc3RJbmRleCwgcmVzdFBhcmVudCk7XG5cbiAgICAgIHBhdGhzID0gcGF0aHMuY29uY2F0KHJlc3RQYXRocyk7XG4gICAgfVxuICAgIHJldHVybiBwYXRocztcbiAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5kZXhlclJlc3VsdCB7XG4gIC8qKlxuICAgKiBUaGUgcGF0aCBvcmlnaW5hbGx5IHNlYXJjaGVkIGZvclxuICAgKi9cbiAgdGFyZ2V0OiBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIEZsYWcgZm9yIHRoZSBzdGF0dXMgb2YgZm91bmQgb3Igbm90IGZvdW5kLjxici8+XG4gICAqIFVzdWFsbHkgPGNvZGU+cmVzdWx0czwvY29kZT4gd2lsbCBiZSBlbXB0eSBpZiBubyBtYXRjaGVzIGZvdW5kLlxuICAgKi9cbiAgZm91bmQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBUaGUgcmVzdWx0IHBhdGggYW5kIHZhbHVlcyBmcm9tIHRoZSBpbmRleCBzZWFyY2guPGJyLz5cbiAgICogVXN1YWxseSA8Y29kZT5yZXN1bHRzPC9jb2RlPiB3aWxsIGJlIGVtcHR5IGlmIG5vIG1hdGNoZXMgZm91bmQuXG4gICAqL1xuICByZXN1bHRzOiB7XG4gICAgLyoqXG4gICAgICogVGhlIHBhdGggdGhhdCBtYXRjaGVkIHRoZSA8Y29kZT50YXJnZXQ8L2NvZGU+XG4gICAgICogc2VwYXJhdGVkIGluIHNlZ21lbnRzXG4gICAgICovXG4gICAgcGF0aDogc3RyaW5nW10sXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIHN0b3JlZCBhdCB0aGUgPGNvZGU+cGF0aDwvY29kZT5cbiAgICAgKi9cbiAgICB2YWx1ZTogYW55XG4gIH1bXTtcbn1cbiJdfQ==