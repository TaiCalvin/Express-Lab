"use strict";

angular.module("app")
    .service("HomeService", function($http){
        const service = this;

        service.postData = (newStudent) => {
            return $http({
              method: "POST",
              url: "/cart",
              data: newStudent 
            });
          };
      
          
          service.updateData = (student) => {
            return $http({
              method: "PUT",
              url: `/cart/${cart.id}`, 
              data: student
            });
          };
      
        
          service.deleteData = (id) => {
            return $http({
              method: "DELETE",
              url: `/cart/${id}`
            });
          };
      
          service.getData = () => {
            return $http({
              method: "GET",
              url: "/cart"
            });
          };
    });