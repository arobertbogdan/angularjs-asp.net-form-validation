/// <reference path="../_paths.ts" />
var ember;
(function (ember) {
    var validationModule;
    (function (validationModule) {
        "use strict";
        var ValidationBootstrap = (function () {
            function ValidationBootstrap() {
            }
            ValidationBootstrap.prototype.setBootstraper = function (bootstraper) {
                this.validationBootstraper = bootstraper;
            };
            ValidationBootstrap.prototype.$get = function () {
                var _this = this;
                return {
                    getBootstraper: function () { return _this.validationBootstraper; }
                };
            };
            return ValidationBootstrap;
        })();
        validationModule.ValidationBootstrap = ValidationBootstrap;
    })(validationModule = ember.validationModule || (ember.validationModule = {}));
})(ember || (ember = {}));
//# sourceMappingURL=validationbootstrap.js.map