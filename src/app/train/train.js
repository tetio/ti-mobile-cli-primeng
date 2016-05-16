System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ITrainService;
    return {
        setters:[],
        execute: function() {
            ITrainService = (function () {
                function ITrainService() {
                }
                ITrainService.prototype.value = function () {
                    return this.codigo;
                };
                ITrainService.prototype.label = function () {
                    return this.descripcion;
                };
                return ITrainService;
            }());
            exports_1("ITrainService", ITrainService);
        }
    }
});
//# sourceMappingURL=train.js.map