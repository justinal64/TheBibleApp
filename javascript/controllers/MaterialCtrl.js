"use strict";

// var app = angular.module('TheBibleApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

  $scope.firstName="Paul";

  $scope.toggleExpansion = function toggleExpansion(sectionId){
    var sectionToToggle = $("#"+sectionId);
    if(sectionToToggle.css("display")==="none"){
      $scope.expandSection(sectionToToggle);
    } else {
      $scope.collapseSection(sectionToToggle);
    }
  };

  $scope.collapseSectionById = function collapseSectionById(sectionId){
    var sectionToCollapse = $("#"+sectionId);
    sectionToCollapse.css("display","none");

  };

  $scope.collapseSection = function collapseSection(section){
    section.css("display","none");
  };

  $scope.expandSectionById = function expandSectionById(sectionId){
    var sectionToExpand = $("#"+sectionId);
    sectionToExpand.css("display", "inline");
  };

  $scope.expandSection = function expandSection(section){
    section.css("display", "inline");
  };

}]);