/// <reference path="_all.ts" />
var ember;
(function (ember) {
    "use strict";
    angular.module('angularMvc', ['ember.ValidationModule'])
        .config(function (validationBootstrapProvider) {
        validationBootstrapProvider.setBootstraper(new ember.CustomBootstraper());
    });
})(ember || (ember = {}));
//# sourceMappingURL=app.js.map