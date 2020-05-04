(
    function () {
        angular.module('LunchCheck',[])
        .controller('LunchCheckController', function1 );
        function1.$inject = ['$scope'];
        function function1($scope) {
            $scope.lunch = '';
            $scope.message = '';
            $scope.function2 = function (){
                let arrayOfItems = $scope.lunch.split(',');
                let counter = 0;

                arrayOfItems.forEach((item)=> {
                    if (item != false) {
                        counter++;
                    }
                });


                if (counter > 0 && counter < 4){
                    $scope.message = 'Enjoy!';

                }else if(counter >= 4){
                    $scope.message = 'Too much!';


                }else{
                    $scope.message = 'Please enter data first';

                }
            }
        }

    }
)()
