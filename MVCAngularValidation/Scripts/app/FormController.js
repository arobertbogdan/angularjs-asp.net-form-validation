var ember;
(function (ember) {
    'use strict';
    var FormController = (function () {
        function FormController($scope) {
        }
        FormController.prototype.submit = function () {
            console.log("submited");
        };
        FormController.$inject = [];
        return FormController;
    })();
    ember.FormController = FormController;
})(ember || (ember = {}));
//# sourceMappingURL=FormController.js.map