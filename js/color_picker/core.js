// Compiled by ClojureScript 0.0-2322
goog.provide('color_picker.core');
goog.require('cljs.core');
goog.require('domina.css');
goog.require('domina.css');
goog.require('domina.events');
goog.require('domina.events');
goog.require('domina');
goog.require('domina');
/**
* convert H: [0, 360) S: [0 100] V: [0 100] A:[0 100] to RGBA [0 255]
*/
color_picker.core.hsl2rgb = (function hsl2rgb(hsla){var h = hsla.call(null,new cljs.core.Keyword(null,"h","h",1109658740));var s = (hsla.call(null,new cljs.core.Keyword(null,"s","s",1705939918)) / (100));var l = (hsla.call(null,new cljs.core.Keyword(null,"l","l",1395893423)) / (100));var a = (hsla.call(null,new cljs.core.Keyword(null,"a","a",-2123407586)) / (100));var c = (((1) - Math.abs.call(null,(((2) * l) - (1)))) * s);var hh = (h / (60));var x = (c * ((1) - Math.abs.call(null,(cljs.core.mod.call(null,hh,(2)) - (1)))));var vec__25655 = (function (){var G__25656 = (hh | (0));switch (G__25656) {
case (0):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,x,(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,c,(0)], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),c,x], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),x,c], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0),c], null);

break;
case (5):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(0),x], null);

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);

}
})();var r1 = cljs.core.nth.call(null,vec__25655,(0),null);var g1 = cljs.core.nth.call(null,vec__25655,(1),null);var b1 = cljs.core.nth.call(null,vec__25655,(2),null);var m = (l - (c * 0.5));return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4285__auto__ = ((function (vec__25655,r1,g1,b1,m,h,s,l,a,c,hh,x){
return (function iter__25657(s__25658){return (new cljs.core.LazySeq(null,((function (vec__25655,r1,g1,b1,m,h,s,l,a,c,hh,x){
return (function (){var s__25658__$1 = s__25658;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25658__$1);if(temp__4126__auto__)
{var s__25658__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25658__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__25658__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__25660 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__25659 = (0);while(true){
if((i__25659 < size__4284__auto__))
{var vec__25663 = cljs.core._nth.call(null,c__4283__auto__,i__25659);var k = cljs.core.nth.call(null,vec__25663,(0),null);var v = cljs.core.nth.call(null,vec__25663,(1),null);cljs.core.chunk_append.call(null,b__25660,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((v * (255)) | (0))], null));
{
var G__25666 = (i__25659 + (1));
i__25659 = G__25666;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25660),iter__25657.call(null,cljs.core.chunk_rest.call(null,s__25658__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25660),null);
}
} else
{var vec__25664 = cljs.core.first.call(null,s__25658__$2);var k = cljs.core.nth.call(null,vec__25664,(0),null);var v = cljs.core.nth.call(null,vec__25664,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((v * (255)) | (0))], null),iter__25657.call(null,cljs.core.rest.call(null,s__25658__$2)));
}
} else
{return null;
}
break;
}
});})(vec__25655,r1,g1,b1,m,h,s,l,a,c,hh,x))
,null,null));
});})(vec__25655,r1,g1,b1,m,h,s,l,a,c,hh,x))
;return iter__4285__auto__.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),(r1 + m),new cljs.core.Keyword(null,"g","g",1738089905),(g1 + m),new cljs.core.Keyword(null,"b","b",1482224470),(b1 + m),new cljs.core.Keyword(null,"a","a",-2123407586),a], null));
})());
});
/**
* iterate over every pixel in the imageData
* func should be (func imageData row col)
*/
color_picker.core.iterate_2d_BANG_ = (function iterate_2d_BANG_(imageData,func){var width = imageData.width;var height = imageData.height;var row = (0);var col = (0);while(true){
var next_row = ((cljs.core._EQ_.call(null,col,width))?(row + (1)):row);var next_col = ((cljs.core._EQ_.call(null,col,width))?(0):(col + (1)));if(((col >= width)) && ((row >= height)))
{return null;
} else
{func.call(null,imageData,row,col);
{
var G__25667 = next_row;
var G__25668 = next_col;
row = G__25667;
col = G__25668;
continue;
}
}
break;
}
});
color_picker.core.get_limit = (function get_limit(type){var G__25670 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__25670) {
case "a":
return (100);

break;
case "l":
return (100);

break;
case "s":
return (100);

break;
case "h":
return (360);

break;
default:
return (100);

}
});
color_picker.core.get_step = (function get_step(length,type){return (color_picker.core.get_limit.call(null,type) / length);
});
/**
* draw a point in the palette
*/
color_picker.core.generate_draw_palette_func = (function generate_draw_palette_func(hsla,width,height,type_x,type_y){var step_x = color_picker.core.get_step.call(null,width,type_x);var step_y = color_picker.core.get_step.call(null,height,type_y);return ((function (step_x,step_y){
return (function (imageData,row,col){var new_hsla = cljs.core.conj.call(null,hsla,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_x,(col * step_x)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_y,(row * step_y)], null));var start_point = (((row * width) + col) * (4));var map__25673 = color_picker.core.hsl2rgb.call(null,new_hsla);var map__25673__$1 = ((cljs.core.seq_QMARK_.call(null,map__25673))?cljs.core.apply.call(null,cljs.core.hash_map,map__25673):map__25673);var a = cljs.core.get.call(null,map__25673__$1,new cljs.core.Keyword(null,"a","a",-2123407586));var b = cljs.core.get.call(null,map__25673__$1,new cljs.core.Keyword(null,"b","b",1482224470));var g = cljs.core.get.call(null,map__25673__$1,new cljs.core.Keyword(null,"g","g",1738089905));var r = cljs.core.get.call(null,map__25673__$1,new cljs.core.Keyword(null,"r","r",-471384190));(imageData.data[start_point] = r);
(imageData.data[(start_point + (1))] = g);
(imageData.data[(start_point + (2))] = b);
return (imageData.data[(start_point + (3))] = a);
});
;})(step_x,step_y))
});
/**
* modify the imageData to the palette
* (draw-2d-palette imageData {:h 90 :s 90 :l 90 :a 100} [:s :l])
*/
color_picker.core.draw_2d_palette_BANG_ = (function draw_2d_palette_BANG_(imageData,hsla,types){var width = imageData.width;var height = imageData.height;return color_picker.core.iterate_2d_BANG_.call(null,imageData,color_picker.core.generate_draw_palette_func.call(null,hsla,width,height,types.call(null,(0)),types.call(null,(1))));
});
color_picker.core.draw_palette_by_pixel = (function draw_palette_by_pixel(id,hsla,types){var canvas = domina.by_id.call(null,id);var ctx = canvas.getContext("2d");var imageData = ctx.getImageData((0),(0),canvas.width,canvas.height);color_picker.core.draw_2d_palette_BANG_.call(null,imageData,hsla,types);
return ctx.putImageData(imageData,(0),(0));
});
color_picker.core.hsla_map_to_string = (function hsla_map_to_string(hsla){return ("hsla("+cljs.core.str.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(hsla))))+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(hsla))))+"%, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(hsla))))+"%, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(hsla) / (100)))))+")");
});
color_picker.core.rgba_map_to_string = (function rgba_map_to_string(rgba){return ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(rgba))))+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"g","g",1738089905).cljs$core$IFn$_invoke$arity$1(rgba))))+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(rgba))))+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((Math.round.call(null,((new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(rgba) * (100)) / (255))) / (100)))))+")");
});
/**
* construct a gradient line with 1px height
*/
color_picker.core.draw_gradient_column_BANG_ = (function draw_gradient_column_BANG_(context,row,width,hsla,type_x){var gradient = context.createLinearGradient((0),row,(width - (1)),row);var limit = color_picker.core.get_limit.call(null,type_x);var seq__25678_25682 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),(1),((1) / (limit / (10)))));var chunk__25679_25683 = null;var count__25680_25684 = (0);var i__25681_25685 = (0);while(true){
if((i__25681_25685 < count__25680_25684))
{var stop_25686 = cljs.core._nth.call(null,chunk__25679_25683,i__25681_25685);gradient.addColorStop(stop_25686,color_picker.core.hsla_map_to_string.call(null,cljs.core.conj.call(null,hsla,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_x,(stop_25686 * limit)], null))));
{
var G__25687 = seq__25678_25682;
var G__25688 = chunk__25679_25683;
var G__25689 = count__25680_25684;
var G__25690 = (i__25681_25685 + (1));
seq__25678_25682 = G__25687;
chunk__25679_25683 = G__25688;
count__25680_25684 = G__25689;
i__25681_25685 = G__25690;
continue;
}
} else
{var temp__4126__auto___25691 = cljs.core.seq.call(null,seq__25678_25682);if(temp__4126__auto___25691)
{var seq__25678_25692__$1 = temp__4126__auto___25691;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25678_25692__$1))
{var c__4316__auto___25693 = cljs.core.chunk_first.call(null,seq__25678_25692__$1);{
var G__25694 = cljs.core.chunk_rest.call(null,seq__25678_25692__$1);
var G__25695 = c__4316__auto___25693;
var G__25696 = cljs.core.count.call(null,c__4316__auto___25693);
var G__25697 = (0);
seq__25678_25682 = G__25694;
chunk__25679_25683 = G__25695;
count__25680_25684 = G__25696;
i__25681_25685 = G__25697;
continue;
}
} else
{var stop_25698 = cljs.core.first.call(null,seq__25678_25692__$1);gradient.addColorStop(stop_25698,color_picker.core.hsla_map_to_string.call(null,cljs.core.conj.call(null,hsla,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_x,(stop_25698 * limit)], null))));
{
var G__25699 = cljs.core.next.call(null,seq__25678_25692__$1);
var G__25700 = null;
var G__25701 = (0);
var G__25702 = (0);
seq__25678_25682 = G__25699;
chunk__25679_25683 = G__25700;
count__25680_25684 = G__25701;
i__25681_25685 = G__25702;
continue;
}
}
} else
{}
}
break;
}
context.fillStyle = gradient;
return context.fillRect((0),row,width,(1));
});
/**
* draw a gradient rect
*/
color_picker.core.draw_gradient_row_BANG_ = (function draw_gradient_row_BANG_(context,width,height,hsla,types,draw_line_func){var type_x = types.call(null,(0));var type_y = types.call(null,(1));var step = color_picker.core.get_step.call(null,height,type_y);var seq__25707 = cljs.core.seq.call(null,cljs.core.range.call(null,height));var chunk__25708 = null;var count__25709 = (0);var i__25710 = (0);while(true){
if((i__25710 < count__25709))
{var row = cljs.core._nth.call(null,chunk__25708,i__25710);draw_line_func.call(null,context,row,width,cljs.core.conj.call(null,hsla,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_y,(row * step)], null)),type_x);
{
var G__25711 = seq__25707;
var G__25712 = chunk__25708;
var G__25713 = count__25709;
var G__25714 = (i__25710 + (1));
seq__25707 = G__25711;
chunk__25708 = G__25712;
count__25709 = G__25713;
i__25710 = G__25714;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25707);if(temp__4126__auto__)
{var seq__25707__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25707__$1))
{var c__4316__auto__ = cljs.core.chunk_first.call(null,seq__25707__$1);{
var G__25715 = cljs.core.chunk_rest.call(null,seq__25707__$1);
var G__25716 = c__4316__auto__;
var G__25717 = cljs.core.count.call(null,c__4316__auto__);
var G__25718 = (0);
seq__25707 = G__25715;
chunk__25708 = G__25716;
count__25709 = G__25717;
i__25710 = G__25718;
continue;
}
} else
{var row = cljs.core.first.call(null,seq__25707__$1);draw_line_func.call(null,context,row,width,cljs.core.conj.call(null,hsla,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_y,(row * step)], null)),type_x);
{
var G__25719 = cljs.core.next.call(null,seq__25707__$1);
var G__25720 = null;
var G__25721 = (0);
var G__25722 = (0);
seq__25707 = G__25719;
chunk__25708 = G__25720;
count__25709 = G__25721;
i__25710 = G__25722;
continue;
}
}
} else
{return null;
}
}
break;
}
});
color_picker.core.draw_palette_gradient_BANG_ = (function draw_palette_gradient_BANG_(context,hsla,types){var width = context.canvas.clientWidth;var height = context.canvas.clientHeight;return color_picker.core.draw_gradient_row_BANG_.call(null,context,width,height,hsla,types,color_picker.core.draw_gradient_column_BANG_);
});
color_picker.core.draw_palette_by_gradient = (function draw_palette_by_gradient(id,hsla,types){var canvas = domina.by_id.call(null,id);var ctx = canvas.getContext("2d");var width = ctx.canvas.clientWidth;var height = ctx.canvas.clientHeight;ctx.clearRect((0),(0),width,height);
return color_picker.core.draw_palette_gradient_BANG_.call(null,ctx,hsla,types);
});
color_picker.core.left_context = cljs.core.atom.call(null,domina.by_id.call(null,"d2").getContext("2d"));
color_picker.core.right_context = cljs.core.atom.call(null,domina.by_id.call(null,"d1").getContext("2d"));
color_picker.core.get_current_hsla = (function get_current_hsla(){var h = (domina.value.call(null,domina.by_id.call(null,"h")) | (0));var s = (domina.value.call(null,domina.by_id.call(null,"s")) | (0));var l = (domina.value.call(null,domina.by_id.call(null,"l")) | (0));var a = (domina.value.call(null,domina.by_id.call(null,"a")) | (0));return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"h","h",1109658740),((((h >= (0))) && ((h < (360))))?h:(((h < (0)))?(0):(((h > (360)))?(359):null))),new cljs.core.Keyword(null,"s","s",1705939918),((((s >= (0))) && ((s <= (100))))?s:(((s < (0)))?(0):(((s > (100)))?(100):null))),new cljs.core.Keyword(null,"l","l",1395893423),((((l >= (0))) && ((l <= (100))))?l:(((l < (0)))?(0):(((l > (100)))?(100):null))),new cljs.core.Keyword(null,"a","a",-2123407586),((((a >= (0))) && ((a <= (100))))?a:(((a < (0)))?(0):(((a > (100)))?(100):null)))], null);
});
color_picker.core.get_current_types = (function get_current_types(){if(cljs.core.truth_(domina.by_id.call(null,"radio_h").checked))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"l","l",1395893423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword(null,"h","h",1109658740)], null)], null);
} else
{if(cljs.core.truth_(domina.by_id.call(null,"radio_s").checked))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"l","l",1395893423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword(null,"s","s",1705939918)], null)], null);
} else
{if(cljs.core.truth_(domina.by_id.call(null,"radio_l").checked))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"s","s",1705939918)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword(null,"l","l",1395893423)], null)], null);
} else
{return null;
}
}
}
});
color_picker.core.canvas_fit_to_container = (function canvas_fit_to_container(canvas){canvas.style.height = "100%";
canvas.style.width = "100%";
canvas.width = canvas.offsetWidth;
return canvas.height = canvas.offsetHeight;
});
/**
* pick color of context at (x, y)
*/
color_picker.core.pick_color = (function pick_color(context,x,y){var imageData = context.getImageData(x,y,(1),(1)).data;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),(imageData[(0)]),new cljs.core.Keyword(null,"g","g",1738089905),(imageData[(1)]),new cljs.core.Keyword(null,"b","b",1482224470),(imageData[(2)]),new cljs.core.Keyword(null,"a","a",-2123407586),(imageData[(3)])], null);
});
/**
* pick color from the left context at (x, y) and change the background color of preview
*/
color_picker.core.pick_color_left = (function pick_color_left(x,y){var rgb_preview = domina.by_id.call(null,"RGB-preview");var rgb_string = color_picker.core.rgba_map_to_string.call(null,color_picker.core.pick_color.call(null,cljs.core.deref.call(null,color_picker.core.left_context),x,y));domina.set_text_BANG_.call(null,rgb_preview,rgb_string);
return domina.set_styles_BANG_.call(null,rgb_preview,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),rgb_string], null));
});
color_picker.core.left_reset_pointer = (function left_reset_pointer(context,x,y){var horizontal_line = domina.css.sel.call(null,"#d2-div > div.horizontal-line");var vertical_line = domina.css.sel.call(null,"#d2-div > div.vertical-line");var width_of_canvas = context.canvas.width;var height_of_canvas = context.canvas.height;var x__$1 = (((x < (0)))?(0):(((x < width_of_canvas))?x:width_of_canvas
));var y__$1 = (((y < (0)))?(0):(((y < height_of_canvas))?y:height_of_canvas
));var vec__25724 = color_picker.core.get_current_types.call(null);var left_types = cljs.core.nth.call(null,vec__25724,(0),null);var right_types = cljs.core.nth.call(null,vec__25724,(1),null);var input_box_1 = domina.by_id.call(null,cljs.core.name.call(null,left_types.call(null,(0))));var input_box_2 = domina.by_id.call(null,cljs.core.name.call(null,left_types.call(null,(1))));domina.set_styles_BANG_.call(null,horizontal_line,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((y__$1 - (3)))+"px")], null));
domina.set_styles_BANG_.call(null,vertical_line,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((x__$1 - (3)))+"px")], null));
input_box_1.value = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((x__$1 * color_picker.core.get_limit.call(null,left_types.call(null,(0)))) / width_of_canvas) | (0))));
input_box_2.value = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((y__$1 * color_picker.core.get_limit.call(null,left_types.call(null,(1)))) / height_of_canvas) | (0))));
if((cljs.core._EQ_.call(null,left_types.call(null,(0)),new cljs.core.Keyword(null,"h","h",1109658740))) || (cljs.core._EQ_.call(null,left_types.call(null,(1)),new cljs.core.Keyword(null,"h","h",1109658740))))
{color_picker.core.draw_palette_by_gradient.call(null,"d1",color_picker.core.get_current_hsla.call(null),right_types);
} else
{}
return color_picker.core.pick_color_left.call(null,x__$1,y__$1);
});
color_picker.core.right_reset_pointer = (function right_reset_pointer(context,x,y){var horizontal_line = domina.css.sel.call(null,"#d1-div > div.horizontal-line");var length_of_canvas = context.canvas.height;var y__$1 = (((y < (0)))?(0):(((y < length_of_canvas))?y:length_of_canvas
));var vec__25727 = color_picker.core.get_current_types.call(null);var left_types = cljs.core.nth.call(null,vec__25727,(0),null);var vec__25728 = cljs.core.nth.call(null,vec__25727,(1),null);var unknown = cljs.core.nth.call(null,vec__25728,(0),null);var right_type = cljs.core.nth.call(null,vec__25728,(1),null);var input_box = domina.by_id.call(null,cljs.core.name.call(null,right_type));domina.set_styles_BANG_.call(null,horizontal_line,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((y__$1 - (3)))+"px")], null));
input_box.value = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((y__$1 * color_picker.core.get_limit.call(null,right_type)) / length_of_canvas) | (0))));
return color_picker.core.draw_palette_by_gradient.call(null,"d2",color_picker.core.get_current_hsla.call(null),left_types);
});
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"d2"),new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),(function (evt){var this$ = this;var x = new cljs.core.Keyword(null,"offsetX","offsetX",-2005135414).cljs$core$IFn$_invoke$arity$1(evt);var y = new cljs.core.Keyword(null,"offsetY","offsetY",-230567873).cljs$core$IFn$_invoke$arity$1(evt);color_picker.core.left_reset_pointer.call(null,cljs.core.deref.call(null,color_picker.core.left_context),x,y);
domina.events.listen_BANG_.call(null,document,new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),((function (x,y,this$){
return (function (evt__$1){var parent = domina.by_id.call(null,"d2-div");var offset_left = (parent.offsetLeft + parent.clientLeft);var offset_top = (parent.offsetTop + parent.clientTop);var x__$1 = (new cljs.core.Keyword(null,"clientX","clientX",1931278917).cljs$core$IFn$_invoke$arity$1(evt__$1) - offset_left);var y__$1 = (new cljs.core.Keyword(null,"clientY","clientY",-1350333697).cljs$core$IFn$_invoke$arity$1(evt__$1) - offset_top);return color_picker.core.left_reset_pointer.call(null,cljs.core.deref.call(null,color_picker.core.left_context),x__$1,y__$1);
});})(x,y,this$))
);
return domina.events.listen_BANG_.call(null,document,new cljs.core.Keyword(null,"mouseup","mouseup",350619456),((function (x,y,this$){
return (function (e){return domina.events.unlisten_BANG_.call(null,document,new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734));
});})(x,y,this$))
);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"d1"),new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),(function (evt){var this$ = this;var x = new cljs.core.Keyword(null,"offsetX","offsetX",-2005135414).cljs$core$IFn$_invoke$arity$1(evt);var y = new cljs.core.Keyword(null,"offsetY","offsetY",-230567873).cljs$core$IFn$_invoke$arity$1(evt);color_picker.core.right_reset_pointer.call(null,cljs.core.deref.call(null,color_picker.core.right_context),x,y);
domina.events.listen_BANG_.call(null,document,new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),((function (x,y,this$){
return (function (evt__$1){var parent = domina.by_id.call(null,"d1-div");var offset_left = (parent.offsetLeft + parent.clientLeft);var offset_top = (parent.offsetTop + parent.clientTop);var x__$1 = (new cljs.core.Keyword(null,"clientX","clientX",1931278917).cljs$core$IFn$_invoke$arity$1(evt__$1) - offset_left);var y__$1 = (new cljs.core.Keyword(null,"clientY","clientY",-1350333697).cljs$core$IFn$_invoke$arity$1(evt__$1) - offset_top);return color_picker.core.right_reset_pointer.call(null,cljs.core.deref.call(null,color_picker.core.right_context),x__$1,y__$1);
});})(x,y,this$))
);
return domina.events.listen_BANG_.call(null,document,new cljs.core.Keyword(null,"mouseup","mouseup",350619456),((function (x,y,this$){
return (function (e){return domina.events.unlisten_BANG_.call(null,document,new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734));
});})(x,y,this$))
);
}));
color_picker.core.draw_hsv = (function draw_hsv(){var hsla = color_picker.core.get_current_hsla.call(null);var rgb_preview = domina.by_id.call(null,"RGB-preview");var vec__25730 = (cljs.core.truth_(domina.by_id.call(null,"radio_h").checked)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"l","l",1395893423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword(null,"h","h",1109658740)], null)], null):(cljs.core.truth_(domina.by_id.call(null,"radio_s").checked)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"l","l",1395893423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword(null,"s","s",1705939918)], null)], null):(cljs.core.truth_(domina.by_id.call(null,"radio_l").checked)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"s","s",1705939918)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword(null,"l","l",1395893423)], null)], null):null)));var types_left = cljs.core.nth.call(null,vec__25730,(0),null);var types_right = cljs.core.nth.call(null,vec__25730,(1),null);var width_of_canvas = cljs.core.deref.call(null,color_picker.core.left_context).canvas.width;var height_of_canvas = cljs.core.deref.call(null,color_picker.core.left_context).canvas.height;var length_of_canvas = cljs.core.deref.call(null,color_picker.core.right_context).canvas.height;color_picker.core.draw_palette_by_gradient.call(null,"d2",hsla,types_left);
color_picker.core.draw_palette_by_gradient.call(null,"d1",hsla,types_right);
color_picker.core.right_reset_pointer.call(null,cljs.core.deref.call(null,color_picker.core.right_context),(0),(((hsla.call(null,types_right.call(null,(1))) * length_of_canvas) / color_picker.core.get_limit.call(null,types_right.call(null,(1)))) | (0)));
return color_picker.core.left_reset_pointer.call(null,cljs.core.deref.call(null,color_picker.core.left_context),(((hsla.call(null,types_left.call(null,(0))) * width_of_canvas) / color_picker.core.get_limit.call(null,types_left.call(null,(0)))) | (0)),(((hsla.call(null,types_left.call(null,(1))) * height_of_canvas) / color_picker.core.get_limit.call(null,types_left.call(null,(1)))) | (0)));
});
domina.events.listen_BANG_.call(null,domina.by_class.call(null,"hsl_radio"),new cljs.core.Keyword(null,"click","click",1912301393),(function (evt){return color_picker.core.draw_hsv.call(null);
}));
cljs.core.doall.call(null,cljs.core.map.call(null,color_picker.core.canvas_fit_to_container,document.getElementsByTagName("canvas")));
domina.append_BANG_.call(null,domina.by_id.call(null,"d2-div"),"<div class='horizontal-line'></div>");
domina.append_BANG_.call(null,domina.by_id.call(null,"d2-div"),"<div class='vertical-line'></div>");
domina.append_BANG_.call(null,domina.by_id.call(null,"d1-div"),"<div class='horizontal-line'></div>");
color_picker.core.draw_hsv.call(null);

//# sourceMappingURL=core.js.map