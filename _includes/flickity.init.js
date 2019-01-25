<script>
    var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: false,
  on: {
    ready: function() {
      console.log('Flickity ready');
    }
  }
});


</script>