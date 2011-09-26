//全ページで使う共通スクリプト
/* Author: 

*/



$(document).ready(function(){
	$(".messageBox").click(function(){$(this).slideUp();});

	$("span.tooltip").tipsy({gravity:'s'});
	$("input.tooltip").tipsy({gravity:'w'});

});