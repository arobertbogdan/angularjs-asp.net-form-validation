/// <reference path="../../_paths.ts" />
module ember.validationModule {
    'use strict';

    export class ValidableInput implements ng.IDirective {
        public restrict: string = "E";
        public require = ["^validate"];
        public scope = true;

        static $inject = ["formValidationService"];

        constructor(private formValidationService: FormValidationService) {
        }
        public link = ($scope, $element, $attrs, $ctrl) => {
            if ($attrs.type === 'submit') {

            } else {
                var validationObject = new ValidationObject($scope, $element, $attrs);
                this.formValidationService.addInputValidation($ctrl[0].$element, $attrs.id, validationObject);

                $element.bind('keyup', () => {
                    var validationObject = new ValidationObject($scope, $element, $attrs);
                    this.formValidationService.getValidationDispatcher().validateInput(validationObject);
                });
            }
        };
    }
}