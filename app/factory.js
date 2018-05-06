;(function() {


  /**
   * Sample factory
   *
   * You can fetch here some data from API and the use them
   * in controller
   * 
   */
  angular
    .module('dedicatedServers')
    .service('API', API);

  API.$inject = ['$http'];


  ////////////


  function API($http) {
    this.getServers = function() {
      return $http.get('servers.php')
        .then(function(res) {
          return res.data.data;
        })
        .catch(function(err) {
          return err;
        })

    } 
  }


})();
