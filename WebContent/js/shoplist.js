$(function () {
	  $('[data-toggle="popover"]').popover()
	})

$("#searchbar").headroom({
	"tolerance": 2,
	"offset": 205,
	"classes": {
		"initial": "animated",
		"pinned": "swingOutX",
		"unpinned": "swingInX"
	  }
});

function LoadPage(){
	alert("你已经滚动到了页面底部");
}

$(function(){
	  $(window).scroll(function() {
		  //当内容滚动到底部时加载新的内容
		  if ($(this).scrollTop() + $(window).height() + 20 >= $(document).height() && $(this).scrollTop() > 20) {
			  //当前要加载的页码
			  LoadPage();
		  }
	  });
});

