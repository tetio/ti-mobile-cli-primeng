System.register(['rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1;
    var Service;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            Service = (function () {
                function Service(_http) {
                    this._http = _http;
                }
                Service.prototype.generateQueryString = function (payload) {
                    var qs = "";
                    var prefix = "?";
                    for (var key in payload) {
                        qs += prefix + key + "=" + payload[key];
                        if (prefix == '?') {
                            prefix = '&';
                        }
                    }
                    return qs;
                };
                Service.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                return Service;
            }());
            exports_1("Service", Service);
        }
    }
});
//# sourceMappingURL=service.js.map