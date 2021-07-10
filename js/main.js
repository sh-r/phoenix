var waypoint = new Waypoint({
  element: document.getElementById('teamheading'),
  handler: function() {
    $("#fade").fadeIn(3000);
    $("#fade1").fadeIn(4000);
    $("#fade2").fadeIn(5000);
    $("#fade3").fadeIn(6000);
  }
})