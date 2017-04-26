// store filter for each group
if ($(".places").length > 0) {
  var filters = {};

  $demo = $(".masonry")
  $grid = $(".masonry__container")

  $demo.on( 'click', '.input-select', function() {
    var $this = $(this);
    // get group key
    var filterGroup = $this.attr('data-filter-group');
    // set filter for group
    filters[ filterGroup ] = $this[0].children[0].value;
    // combine filters
    var filterValue = concatValues( filters );
    $grid.isotope({ filter: filterValue });
  });

  // flatten object by concatting values
  function concatValues( obj ) {
    var value = '';
    for ( var prop in obj ) {
      value += obj[ prop ];
    }
    return value;
  }
}
