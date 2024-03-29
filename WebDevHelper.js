var r_element_padding_top = 0;
var r_element_padding_bottom = 0;
var r_element_padding_left = 0;
var r_element_padding_right = 0;
var r_element_margin_top = 0;
var r_element_margin_bottom = 0;
var r_element_margin_left = 0;
var r_element_margin_right = 0;

$('html').append("<div style='position:fixed;top:0px;left:0px;font-size:10px;color:#000;background:rgba(255, 255, 255, 0.7);z-index:200;' id='webdev_stats_js'><b>WebDev_Helper.js</b><br/>Window Height:<span id='webdev_stats_js-height'>"+$(window).height()+"</span>px<br/>Window Width:<span id='webdev_stats_js-width'>"+$(window).width()+"</span>px<br/>element height:<span id='webdev_stats_js-element_height'>0</span>px<br/>element width:<span id='webdev_stats_js-element_width'>0</span>px</div>");

$("*").hover(function(event){
  event.stopPropagation();
  r_element_padding_top = $(this).css("padding-top");
  r_element_padding_bottom = $(this).css("padding-bottom");
  r_element_padding_left = $(this).css("padding-left");
  r_element_padding_right = $(this).css("padding-right");
  r_element_margin_top = $(this).css("margin-top");
  r_element_margin_bottom = $(this).css("margin-bottom");
  r_element_margin_left = $(this).css("margin-left");
  r_element_margin_right = $(this).css("margin-right");

  $(this).css( "outline", "2px solid red" );
  $(this).css( "cursor", "pointer" );
  $(this).parents().css("outline", "none");
  $('#webdev_stats_js-element_height').text($(this).height());
  $('#webdev_stats_js-element_width').text($(this).width());

  if(r_element_padding_top!="0px"){
    $(this).append("<div id='element_padding_top_id' style='position:absolute;top:0px;left:0px;width:100%;height:"+r_element_padding_top+";background:rgba(46, 204, 113,0.7);color:white;text-align:center;'><div>"+r_element_padding_top+"</div></div>");
  }
  if(r_element_padding_bottom!="0px"){
    $(this).append("<div id='element_padding_bottom_id' style='position:absolute;bottom:0px;left:0px;width:100%;height:"+r_element_padding_bottom+";background:rgba(46, 204, 113,0.7);color:white;text-align:center;'><div>"+r_element_padding_bottom+"</div></div>");
  }
  if(r_element_padding_left!="0px"){
    $(this).append("<div id='element_padding_left_id' style='position:absolute;top:0px;left:0px;height:100%;width:"+r_element_padding_left+";background:rgba(46, 204, 113,0.7);color:white;text-align:center;'><div style='position:absolute;top:40%;'>"+r_element_padding_left+"</div></div>");
  }
  if(r_element_padding_right!="0px"){
    $(this).append("<div id='element_padding_right_id' style='position:absolute;top:0px;right:0px;height:100%;width:"+r_element_padding_right+";background:rgba(46, 204, 113,0.7);color:white;text-align:center;'><div style='position:absolute;top:40%;'>"+r_element_padding_right+"</div></div>");
  }

  if(r_element_margin_top!="0px"){
    $(this).append("<div id='element_margin_top_id' style='position:absolute;top:-"+r_element_margin_top+";left:0px;width:100%;height:"+r_element_margin_top+";background:rgba(241, 196, 15,0.7);color:white;text-align:center;'><div>"+r_element_margin_top+"</div></div>");
  }
  if(r_element_margin_bottom!="0px"){
    $(this).append("<div id='element_margin_top_id' style='position:absolute;bottom:-"+r_element_margin_bottom+";left:0px;width:100%;height:"+r_element_margin_bottom+";background:rgba(241, 196, 15,0.7);color:white;text-align:center;'><div>"+r_element_margin_top+"</div></div>");
  }
  if(r_element_margin_left!="0px"){
    $(this).append("<div id='element_margin_left_id' style='position:absolute;top:0px;left:-"+r_element_margin_left+";height:100%;width:"+r_element_margin_left+";background:rgba(241, 196, 15,0.7);color:white;text-align:center;'><div style='position:absolute;top:40%;'>"+r_element_margin_left+"</div></div>");
  }
  if(r_element_margin_right!="0px"){
    $(this).append("<div id='element_margin_left_id' style='position:absolute;top:0px;right:-"+r_element_margin_right+";height:100%;width:"+r_element_margin_right+";background:rgba(241, 196, 15,0.7);color:white;text-align:center;'><div style='position:absolute;top:40%;'>"+r_element_margin_right+"</div></div>");
  }


  $('#element_class_list').text(""); 
  $('html').append("<div id='element_class_list' style='position:fixed;top:0px;right:0px;font-size:10px;color:#000;background:rgba(255, 255, 255, 0.7);'><b>Class List: </b>"+$(this).attr('class')+"</div>");

},function(){
  $('#element_padding_top_id').remove();    
  $('#element_padding_bottom_id').remove();    
  $('#element_padding_left_id').remove();    
  $('#element_padding_right_id').remove(); 
  $('#element_margin_top_id').remove();    
  $('#element_margin_bottom_id').remove();    
  $('#element_margin_left_id').remove();    
  $('#element_margin_right_id').remove();      
  $('#element_class_list').remove();    
  $(this).css( "outline", "none" );
  $(this).css( "cursor", "auto" );

});

$(window).resize(function() {
    $('#webdev_stats_js-height').text($(window).height());
    $('#webdev_stats_js-width').text($(window).width());
});