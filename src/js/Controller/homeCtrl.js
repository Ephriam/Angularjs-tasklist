angular.module('app')
.controller('homeCtrl', function($rootScope, $scope, Restangular, $location){
        $scope.tasks
        var task = Restangular.all("/")
        task.getList().then(function(tasks) {
            $scope.tasks = tasks;
            $rootScope.tasks = $scope.tasks
        })
        
        $scope.getTasks = function(){
            task.getList().then(function(tasks) {
            $scope.tasks = tasks;
            })
        }

        var newTask = {}

        $scope.addTask = function (){
            if($scope.newTask!=undefined && $scope.newTask.task_name!=undefined && $scope.newTask.task_name!=""){
                task.post(this.newTask)
                    .then((res) => {
                        $scope.tasks.push(res)
                        $scope.newTask = {}
                    })
            }else{
                console.log('enter task')
            }
        }

        $scope.deleteTask = function(task){
            let i = $scope.tasks.indexOf(task)
            let _task = $scope.tasks[i]
            _task.remove()
                 .then((res) => {
                     $scope.tasks.splice(i, 1)
                 })
        }

        $scope.editTask = function(task){
            $rootScope.task = task
            $location.path('/edit')
        }
    }
)
