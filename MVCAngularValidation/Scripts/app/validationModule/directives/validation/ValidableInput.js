/// <reference path="../../_paths.ts" />
var ember;
(function (ember) {
    var validationModule;
    (function (validationModule) {
        'use strict';
        var ValidableInput = (function () {
            function ValidableInput(formValidationService) {
                var _this = this;
                this.formValidationService = formValidationService;
                this.restrict = "E";
                this.require = ["^validate"];
                this.scope = true;
                this.link = function ($scope, $element, $attrs, $ctrl) {
                    if ($attrs.type === 'submit') {
                    }
                    else {
                        var validationObject = new validationModule.ValidationObject($scope, $element, $attrs);
                        _this.formValidationService.addInputValidation($ctrl[0].$element, $attrs.id, validationObject);
                        $element.bind('keyup', function () {
                            var validationObject = new validationModule.ValidationObject($scope, $element, $attrs);
                            _this.formValidationService.getValidationDispatcher().validateInput(validationObject);
                        });
                    }
                };
            }
            ValidableInput.$inject = ["formValidationService"];
            return ValidableInput;
        })();
        validationModule.ValidableInput = ValidableInput;
    })(validationModule = ember.validationModule || (ember.validationModule = {}));
})(ember || (ember = {}));
//# sourceMappingURL=ValidableInput.js.map