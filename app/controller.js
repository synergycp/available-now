/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;(function() {

  angular
    .module('dedicatedServers')
    .controller('MainController', MainController);

  MainController.$inject = ['API'];


  function MainController(API) {
    var ctr = this;

    ctr.serverGroups = []

    init()

    ////////

    function init() {
      API.getServers().then(function(res) {
        setGroupsFromServers(res.data);
      })
    }

    function setGroupsFromServers(servers) {

      var serverGroups = {};
      servers.forEach(function(server) {
        if(serverGroups[server.group.id]) {
          var data = serverGroups[server.group.id];
          var isSameAdded = false;
          for (var i = 0; i < data.serversCountData.length; i++) {
            if(areServersConfigsSame(server, data.serversCountData[i].server)) {
              isSameAdded = true;
              break;
            }
          }
          if(isSameAdded) {
              data.serversCountData[i].count++;
          } else {
            serverGroups[server.group.id].serversCountData.push({
              count: 1,
              server: server
            })
          }
        } else {
          serverGroups[server.group.id] = {
            group: server.group,
            serversCountData: [{
              count: 1, 
              server: server
            }]
          }
        }
      })
      ctr.serverGroups = serverGroups;
      console.log('serverGroups', serverGroups);

      //  SEPARATE SERVERS BY GROUPS FOR TESTING
      // var groups = [];
      // var groupToServers = {};
      // var matchedServersCountObj = {}; 
      // servers.forEach(function(server) {
      //   var groupName = server.group.name;
      //   if(groups.indexOf(groupName) == -1) {
      //     groups.push(groupName);
      //     groupToServers[groupName] = [];
      //   }
      //   groupToServers[groupName].push(server);
      // })
      // console.log('groups', groupToServers);
    }
  }

  function areServersConfigsSame(server1, server2) {
    return (server1.cpu.id == server2.cpu.id
      && server1.mem.id == server2.mem.id
      && areDisksTheSame(server1.hdd_counts, server2.hdd_counts))
  }

  function areDisksTheSame(disks1, disks2) {
    if(disks1.length != disks2.length) return false;

    var areSame = true;
    for (var i = 0; i < disks1.length; i++) {
      var isCurInDisks2 = false;
      for (var j = 0; j < disks2.length; j++) {
        if(disks1[i].value === disks2[j].value && disks1[i].key === disks2[i].key) {
          isCurInDisks2 = true;
          break;
        }
      }
      if(!isCurInDisks2) {
        areSame = false;
        break;
      }
    }
    return areSame;
  }


})();
