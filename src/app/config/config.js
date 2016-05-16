System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Config;
    return {
        setters:[],
        execute: function() {
            Config = (function () {
                function Config() {
                }
                Config.getEnvironmentVariable = function (value) {
                    var environment;
                    var data = {};
                    environment = window.location.hostname;
                    switch (environment) {
                        //                    endPoint: 'http://localhost:8181'
                        //                    endPoint: 'http://10.120.1.182:12100'
                        case 'localhost':
                            data = {
                                endPoint: 'http://10.120.1.182:12100'
                            };
                            break;
                        case '10.120.1.182':
                            data = {
                                endPoint: 'http://10.120.1.182:12100'
                            };
                            break;
                        case 'reingtest.portic.net':
                            data = {
                                endPoint: 'http://reingtest.portic.net'
                            };
                            break;
                        case 'app.portic.net':
                            data = {
                                endPoint: 'http://app.portic.net'
                            };
                            break;
                        default:
                            data = {
                                endPoint: 'http://10.120.1.182:12100'
                            };
                    }
                    return data[value];
                };
                return Config;
            }());
            exports_1("Config", Config);
        }
    }
});
//# sourceMappingURL=config.js.map