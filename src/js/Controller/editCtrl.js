angular.module('app')
.controller('editCtrl', function($rootScope, $scope, Restangular, $location){
    $scope.task = $rootScope.task
    $scope.editedTask = $scope.task
    $scope.edit = function(){
        if($scope.editedTask.task_name!=""&& $scope.editedTask.task_name!=undefined){
        let task = $rootScope.task
        let i = $rootScope.tasks.indexOf(this.task)
            let _task = $rootScope.tasks[i]
            let copyTask = Restangular.copy(_task)
            copyTask.task_name = $scope.editedTask.task_name
            copyTask.put()
                 .then((res) => {
                     _task.task_name = $scope.editedTask.task_name
                    $location.path('')
                })
        }else{
            console.log('can not change to nothing')
        }
    }
    
})