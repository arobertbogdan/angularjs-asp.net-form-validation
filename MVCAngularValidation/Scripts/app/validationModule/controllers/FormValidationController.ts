/// <reference path="../_paths.ts" />
module ember.validationModule {
    'use strict';

    export class FormValidationController {
        static $inject = ['$scope','$element','formValidationService'];

        constructor(private $scope: FormControllerScope, private $element, private formValidationService: FormValidationService) {
            $scope.vm = this;
            $scope.formElement = this.$element;

            this.$scope.$on('onFormValidationComplete', (event, args) => {
                alert(args ? "Form submited!" : "Form has errors! ");
            });
        }

        submit(event) {
            var form = $(event.currentTarget).parents('form:first');
            this.formValidationService.validateForm(form);
        }

    }
}