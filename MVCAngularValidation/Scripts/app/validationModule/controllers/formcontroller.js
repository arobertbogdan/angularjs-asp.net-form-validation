/// <reference path="../_paths.ts" />
var ember;
(function (ember) {
    var validationModule;
    (function (validationModule) {
        'use strict';
        var FormController = (function () {
            function FormController($scope, $element) {
                this.$scope = $scope;
                this.$element = $element;
                console.log("controller");
                $scope.vm = this;
                $scope.formElement = $(this.$element);
                this.$scope.$on('onFormValidationComplete', function (event, args) {
                    alert(args ? "Form submited!" : "Form has errors! ");
                });
            }
            FormController.prototype.submit = function () {
                this.$scope.$broadcast('runFormValidation', { form: $(this.$element) });
            };
            FormController.$inject = ['$scope', '$element'];
            return FormController;
        })();
        validationModule.FormController = FormController;
    })(validationModule = ember.validationModule || (ember.validationModule = {}));
})(ember || (ember = {}));
//# sourceMappingURL=formcontroller.js.map