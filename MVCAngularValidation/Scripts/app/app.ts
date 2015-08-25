/// <reference path="_all.ts" />
module ember {
    "use strict";

    angular.module('angularMvc', ['ember.ValidationModule'])
        .config((validationBootstrapProvider: validationModule.ValidationBootstrap) => {
            validationBootstrapProvider.setBootstraper(new CustomBootstraper());
        });
}