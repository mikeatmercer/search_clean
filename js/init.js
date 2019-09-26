function init() {
  glFilterDropdowns();
  glTabs();
  $("#search-filters-toggle").on('click',function(e){
    e.preventDefault();
    var filterClass = 'ms-l-filters',
        openClass = filterClass+'__opened';
    var filters = $('.'+filterClass);
    if($(filters).hasClass(openClass)) {
      $(filters).removeClass(openClass);
      $(this).removeClass('gl-btn--raised__toggled-on');
      $(this).text('Show Search Controls')
    } else {
      $(filters).addClass(openClass);
      $(this).addClass('gl-btn--raised__toggled-on');
      $(this).text('Hide Search Filters')
    }

  });
  $(".ms-grid-filter-options a").each(function(i,e){
    if($(e).hasClass('selected')) {
      $(e).prepend('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');
    } else {
      $(e).prepend('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
    }
  });
  $(".ms-doc-icon").each(function(i,e){
    var ext = $(e).attr('data-initials')
    var ok = ['xls','doc'];
    if($.inArray(ext,ok) === -1) {
      $(e).addClass('gl-avatar--noimage');
    }
    switch(ext) {
      case "xls" : 
        $(e).append('<svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="M10.401 61.569v380.797l280.129 49.767V11.802L10.401 61.569zm160.983 270.574l-23.519-61.703-23.065 58.466H92.688l37.539-81.576-34.825-79.956h33.017l21.257 55.231 25.327-59.853 31.66-1.618-39.574 85.505 41.158 88.274-36.863-2.77zM489.281 61.133H300.015v27.811h71.249v50.15h-71.249v15.081h71.249v50.15h-71.249v15.082h71.249v50.15h-71.249v15.08h71.249v50.151h-71.249v15.395h71.249v50.149h-71.249v32.182h189.267c5.357 0 9.739-4.514 9.739-10.034V71.168c0-5.52-4.382-10.035-9.74-10.035zm-23.068 339.199h-80.269v-50.149h80.269v50.149zm0-65.544h-80.269v-50.151h80.269v50.151zm0-65.231h-80.269v-50.15h80.269v50.15zm0-65.232h-80.269v-50.15h80.269v50.15zm0-65.231h-80.269v-50.15h80.269v50.15z"/></svg>');
        break;
    }
  });



  //UI DEMO PURPOSES ONLY
  $("#UIToggler button").on('click',function(e){
    e.preventDefault();
    var el = "#"+$(this).attr('data-el');
    if($(this).attr('data-type') === "loading") {
      $('html').removeClass('html__loading');
      $('#UIToggler button[data-type=loading]').removeClass('selected');
      if($(this).attr('data-state') === "on") {
        $('html').addClass('html__loading');
      }
      $(this).addClass('selected');
      return;
    }
    if($(this).attr('data-type') === "visToggle") {
      if($(this).attr('data-attr-state') === "Show") {
        $(el).show();
        $(this).text('Hide').attr('data-attr-state', "Hide");
      } else {
        $(el).hide();
        $(this).text('Show').attr('data-attr-state', "Show");
      }
      return ;
    }
    if($(this).hasClass('selected')) {
      return;
    }
    var blocks = $('#UIToggler button[data-block='+$(this).attr('data-block')+']');
    $(blocks).removeClass('selected');
    $(blocks).each(function(i,e){
      if(!$(this).attr('data-el')) {
        return;
      }
      $('#'+$(this).attr('data-el')).hide();
    });
    $(el).show();
    $(this).addClass('selected');
  })
}
