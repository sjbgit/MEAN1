/**
 * Created by sbunke on 1/16/2015.
 */

angular.module('app').service('PostsSvc', function ($http) {
    this.fetch = function () {
        return $http.get('/api/posts')
    }

    this.create = function (post) {
        return $http.post('/api/posts', post)
    }

})