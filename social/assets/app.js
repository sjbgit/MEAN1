/**
 * Created by sbunke on 1/16/2015.
 */
var app = angular.module('app', []);

app.controller('PostsCtrl', function ($scope, PostsSvc) {
    $scope.addPost = function () {
        if ($scope.postBody) {
            PostsSvc.create({
                username: 'new',
                body: $scope.postBody
            }).success(function (post) {
                $scope.posts.unshift(post)
                $scope.postBody = null
            })
        }
    }

    PostsSvc.fetch().success(function (posts) {
        $scope.posts = posts
    })

})
