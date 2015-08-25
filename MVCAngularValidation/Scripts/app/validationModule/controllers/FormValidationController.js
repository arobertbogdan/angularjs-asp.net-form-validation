/// <reference path="../_paths.ts" />
var ember;
(function (ember) {
    var validationModule;
    (function (validationModule) {
        'use strict';
        var FormValidationController = (function () {
            function FormValidationController($scope, $element, formValidationService) {
                this.$scope = $scope;
                this.$element = $element;
                this.formValidationService = formValidationService;
                $scope.vm = this;
                $scope.formElement = this.$element;
                this.$scope.$on('onFormValidationComplete', function (event, args) {
                    alert(args ? "Form submited!" : "Form has errors! ");
                });
            }
            FormValidationController.prototype.submit = function (event) {
                var form = $(event.currentTarget).parents('form:first');
                this.formValidationService.validateForm(form);
            };
            FormValidationController.$inject = ['$scope', '$element', 'formValidationService'];
            return FormValidationController;
        })();
        validationModule.FormValidationController = FormValidationController;
    })(validationModule = ember.validationModule || (ember.validationModule = {}));
})(ember || (ember = {}));
//# sourceMappingURL=formvalidationcontroller.js.map