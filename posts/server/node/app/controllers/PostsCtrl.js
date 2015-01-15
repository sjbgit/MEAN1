/**
 * Created by sbunke on 1/15/2015.
 */
(function() {

    angular.module('app', []);

})();

(function() {


    angular.module('app').controller('PostsCtrl', ['$scope', '$http', PostsCtrl]);

    function PostsCtrl($scope, $http) {
        var vm = this;
        vm.info = 'test info';

        function getPosts() {

            $http.get('http://localhost:3000/api/posts')
                .success(function(posts) {
                    vm.posts = posts;
                })
                .error(function(err) {
                    console.log(err);
                });

        }

        getPosts();

        vm.posts = [
            {
                username: 'dickeyxxx---------------------',
                body: 'Node rules!'
            },
            {
                username: 'jeffdickey',
                body: 'trying out angular.js...'
            }
        ]


        vm.add = function() {

            var post = {
                username: 'new',
                body: vm.postBody
            };

            $http.post('http://localhost:3000/api/posts', post)
                .success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    getPosts();//or just add data to list?
                    vm.postBody = '';
                }).
                error(function(data, status, headers, config) {
                    var x = status;
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
        }

    };

})();