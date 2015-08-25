/// <reference path="_all.ts" />
var ember;
(function (ember) {
    "use strict";
    var CustomBootstraper = (function () {
        function CustomBootstraper() {
        }
        CustomBootstraper.prototype.configValidationFLows = function (validationFlowService) {
            validationFlowService.atForm("TestForm").forValidationObject("Password").continueWith("ConfirmPassword");
        };
        return CustomBootstraper;
    })();
    ember.CustomBootstraper = CustomBootstraper;
})(ember || (ember = {}));
//# sourceMappingURL=custombootstraper.js.map