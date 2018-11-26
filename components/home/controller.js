"use strict";

angular
  .module("App")
  .controller("HomeController", function(HomeService) {
    const $ctrl = this;
    
    function changes(response) {
      $ctrl.students = response.data;
    }

    $ctrl.updateData = (cart) => {
      HomeService.updateData(cart).then(changes);
    };

    HomeService.getData().then(changes);
    
    $ctrl.deleteData = (id) => {
      HomeService.deleteData(id).then(changes);
    };
    
    $ctrl.postData = (newStudent) => {
      HomeService.postData(newStudent).then(changes);
    };
  });