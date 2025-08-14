var player = videojs('my-video');

  // Add markers
  player.markers({
    markerStyle: { 'width':'8px', 'background-color': 'red' },
    markers: [
      {time: 9.5, text: "this"},
      {time: 16,  text: "is"},
      {time: 23.6,text: "so"},
      {time: 28,  text: "cool"}
    ]
  });

  // Smart refresh function
  function smartRefresh() {
    if (window.top === window.self) {
      // Not in iframe
      location.reload();
    } else {
      // In iframe → refresh parent page
      window.top.location.reload();
    }
  }
