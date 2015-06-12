// Compiled by ClojureScript 0.0-2322
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_6410 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_6411 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_6412 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_6412,opt_wrapper_6410,table_section_wrapper_6411,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_6410,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_6411,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_6411,cell_wrapper_6412,table_section_wrapper_6411,table_section_wrapper_6411]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3548__auto__ = div.firstChild;if(cljs.core.truth_(and__3548__auto__))
{return div.firstChild.childNodes;
} else
{return and__3548__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__6417 = cljs.core.seq.call(null,tbody);var chunk__6418 = null;var count__6419 = (0);var i__6420 = (0);while(true){
if((i__6420 < count__6419))
{var child = cljs.core._nth.call(null,chunk__6418,i__6420);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__6421 = seq__6417;
var G__6422 = chunk__6418;
var G__6423 = count__6419;
var G__6424 = (i__6420 + (1));
seq__6417 = G__6421;
chunk__6418 = G__6422;
count__6419 = G__6423;
i__6420 = G__6424;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6417);if(temp__4126__auto__)
{var seq__6417__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6417__$1))
{var c__4316__auto__ = cljs.core.chunk_first.call(null,seq__6417__$1);{
var G__6425 = cljs.core.chunk_rest.call(null,seq__6417__$1);
var G__6426 = c__4316__auto__;
var G__6427 = cljs.core.count.call(null,c__4316__auto__);
var G__6428 = (0);
seq__6417 = G__6425;
chunk__6418 = G__6426;
count__6419 = G__6427;
i__6420 = G__6428;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__6417__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__6429 = cljs.core.next.call(null,seq__6417__$1);
var G__6430 = null;
var G__6431 = (0);
var G__6432 = (0);
seq__6417 = G__6429;
chunk__6418 = G__6430;
count__6419 = G__6431;
i__6420 = G__6432;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__6434 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__6434,(0),null);var start_wrap = cljs.core.nth.call(null,vec__6434,(1),null);var end_wrap = cljs.core.nth.call(null,vec__6434,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__6435 = wrapper.lastChild;
var G__6436 = (level - (1));
wrapper = G__6435;
level = G__6436;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3548__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3548__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3548__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj6438 = {};return obj6438;
})();
domina.nodes = (function nodes(content){if((function (){var and__3548__auto__ = content;if(and__3548__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3548__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4187__auto__ = (((content == null))?null:content);return (function (){var or__3560__auto__ = (domina.nodes[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (domina.nodes["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3548__auto__ = nodeseq;if(and__3548__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3548__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4187__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3560__auto__ = (domina.single_node[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (domina.single_node["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3548__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3548__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3548__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__6439){
var mesg = cljs.core.seq(arglist__6439);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__6440){
var mesg = cljs.core.seq(arglist__6440);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__6441){
var contents = cljs.core.seq(arglist__6441);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__6442_SHARP_){return p1__6442_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__6443_SHARP_,p2__6444_SHARP_){return goog.dom.insertChildAt(p1__6443_SHARP_,p2__6444_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__6446_SHARP_,p2__6445_SHARP_){return goog.dom.insertSiblingBefore(p2__6445_SHARP_,p1__6446_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__6448_SHARP_,p2__6447_SHARP_){return goog.dom.insertSiblingAfter(p2__6447_SHARP_,p1__6448_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__6450_SHARP_,p2__6449_SHARP_){return goog.dom.replaceNode(p2__6449_SHARP_,p1__6450_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__6455_6459 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6456_6460 = null;var count__6457_6461 = (0);var i__6458_6462 = (0);while(true){
if((i__6458_6462 < count__6457_6461))
{var n_6463 = cljs.core._nth.call(null,chunk__6456_6460,i__6458_6462);goog.style.setStyle(n_6463,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__6464 = seq__6455_6459;
var G__6465 = chunk__6456_6460;
var G__6466 = count__6457_6461;
var G__6467 = (i__6458_6462 + (1));
seq__6455_6459 = G__6464;
chunk__6456_6460 = G__6465;
count__6457_6461 = G__6466;
i__6458_6462 = G__6467;
continue;
}
} else
{var temp__4126__auto___6468 = cljs.core.seq.call(null,seq__6455_6459);if(temp__4126__auto___6468)
{var seq__6455_6469__$1 = temp__4126__auto___6468;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6455_6469__$1))
{var c__4316__auto___6470 = cljs.core.chunk_first.call(null,seq__6455_6469__$1);{
var G__6471 = cljs.core.chunk_rest.call(null,seq__6455_6469__$1);
var G__6472 = c__4316__auto___6470;
var G__6473 = cljs.core.count.call(null,c__4316__auto___6470);
var G__6474 = (0);
seq__6455_6459 = G__6471;
chunk__6456_6460 = G__6472;
count__6457_6461 = G__6473;
i__6458_6462 = G__6474;
continue;
}
} else
{var n_6475 = cljs.core.first.call(null,seq__6455_6469__$1);goog.style.setStyle(n_6475,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__6476 = cljs.core.next.call(null,seq__6455_6469__$1);
var G__6477 = null;
var G__6478 = (0);
var G__6479 = (0);
seq__6455_6459 = G__6476;
chunk__6456_6460 = G__6477;
count__6457_6461 = G__6478;
i__6458_6462 = G__6479;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__6480){
var content = cljs.core.first(arglist__6480);
arglist__6480 = cljs.core.next(arglist__6480);
var name = cljs.core.first(arglist__6480);
var value = cljs.core.rest(arglist__6480);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__6485_6489 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6486_6490 = null;var count__6487_6491 = (0);var i__6488_6492 = (0);while(true){
if((i__6488_6492 < count__6487_6491))
{var n_6493 = cljs.core._nth.call(null,chunk__6486_6490,i__6488_6492);n_6493.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__6494 = seq__6485_6489;
var G__6495 = chunk__6486_6490;
var G__6496 = count__6487_6491;
var G__6497 = (i__6488_6492 + (1));
seq__6485_6489 = G__6494;
chunk__6486_6490 = G__6495;
count__6487_6491 = G__6496;
i__6488_6492 = G__6497;
continue;
}
} else
{var temp__4126__auto___6498 = cljs.core.seq.call(null,seq__6485_6489);if(temp__4126__auto___6498)
{var seq__6485_6499__$1 = temp__4126__auto___6498;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6485_6499__$1))
{var c__4316__auto___6500 = cljs.core.chunk_first.call(null,seq__6485_6499__$1);{
var G__6501 = cljs.core.chunk_rest.call(null,seq__6485_6499__$1);
var G__6502 = c__4316__auto___6500;
var G__6503 = cljs.core.count.call(null,c__4316__auto___6500);
var G__6504 = (0);
seq__6485_6489 = G__6501;
chunk__6486_6490 = G__6502;
count__6487_6491 = G__6503;
i__6488_6492 = G__6504;
continue;
}
} else
{var n_6505 = cljs.core.first.call(null,seq__6485_6499__$1);n_6505.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__6506 = cljs.core.next.call(null,seq__6485_6499__$1);
var G__6507 = null;
var G__6508 = (0);
var G__6509 = (0);
seq__6485_6489 = G__6506;
chunk__6486_6490 = G__6507;
count__6487_6491 = G__6508;
i__6488_6492 = G__6509;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__6510){
var content = cljs.core.first(arglist__6510);
arglist__6510 = cljs.core.next(arglist__6510);
var name = cljs.core.first(arglist__6510);
var value = cljs.core.rest(arglist__6510);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__6515_6519 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6516_6520 = null;var count__6517_6521 = (0);var i__6518_6522 = (0);while(true){
if((i__6518_6522 < count__6517_6521))
{var n_6523 = cljs.core._nth.call(null,chunk__6516_6520,i__6518_6522);n_6523.removeAttribute(cljs.core.name.call(null,name));
{
var G__6524 = seq__6515_6519;
var G__6525 = chunk__6516_6520;
var G__6526 = count__6517_6521;
var G__6527 = (i__6518_6522 + (1));
seq__6515_6519 = G__6524;
chunk__6516_6520 = G__6525;
count__6517_6521 = G__6526;
i__6518_6522 = G__6527;
continue;
}
} else
{var temp__4126__auto___6528 = cljs.core.seq.call(null,seq__6515_6519);if(temp__4126__auto___6528)
{var seq__6515_6529__$1 = temp__4126__auto___6528;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6515_6529__$1))
{var c__4316__auto___6530 = cljs.core.chunk_first.call(null,seq__6515_6529__$1);{
var G__6531 = cljs.core.chunk_rest.call(null,seq__6515_6529__$1);
var G__6532 = c__4316__auto___6530;
var G__6533 = cljs.core.count.call(null,c__4316__auto___6530);
var G__6534 = (0);
seq__6515_6519 = G__6531;
chunk__6516_6520 = G__6532;
count__6517_6521 = G__6533;
i__6518_6522 = G__6534;
continue;
}
} else
{var n_6535 = cljs.core.first.call(null,seq__6515_6529__$1);n_6535.removeAttribute(cljs.core.name.call(null,name));
{
var G__6536 = cljs.core.next.call(null,seq__6515_6529__$1);
var G__6537 = null;
var G__6538 = (0);
var G__6539 = (0);
seq__6515_6519 = G__6536;
chunk__6516_6520 = G__6537;
count__6517_6521 = G__6538;
i__6518_6522 = G__6539;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__6541 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__6541,(0),null);var v = cljs.core.nth.call(null,vec__6541,(1),null);if(cljs.core.truth_((function (){var and__3548__auto__ = k;if(cljs.core.truth_(and__3548__auto__))
{return v;
} else
{return and__3548__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__6542_SHARP_){var attr = attrs__$1.item(p1__6542_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__6549_6555 = cljs.core.seq.call(null,styles);var chunk__6550_6556 = null;var count__6551_6557 = (0);var i__6552_6558 = (0);while(true){
if((i__6552_6558 < count__6551_6557))
{var vec__6553_6559 = cljs.core._nth.call(null,chunk__6550_6556,i__6552_6558);var name_6560 = cljs.core.nth.call(null,vec__6553_6559,(0),null);var value_6561 = cljs.core.nth.call(null,vec__6553_6559,(1),null);domina.set_style_BANG_.call(null,content,name_6560,value_6561);
{
var G__6562 = seq__6549_6555;
var G__6563 = chunk__6550_6556;
var G__6564 = count__6551_6557;
var G__6565 = (i__6552_6558 + (1));
seq__6549_6555 = G__6562;
chunk__6550_6556 = G__6563;
count__6551_6557 = G__6564;
i__6552_6558 = G__6565;
continue;
}
} else
{var temp__4126__auto___6566 = cljs.core.seq.call(null,seq__6549_6555);if(temp__4126__auto___6566)
{var seq__6549_6567__$1 = temp__4126__auto___6566;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6549_6567__$1))
{var c__4316__auto___6568 = cljs.core.chunk_first.call(null,seq__6549_6567__$1);{
var G__6569 = cljs.core.chunk_rest.call(null,seq__6549_6567__$1);
var G__6570 = c__4316__auto___6568;
var G__6571 = cljs.core.count.call(null,c__4316__auto___6568);
var G__6572 = (0);
seq__6549_6555 = G__6569;
chunk__6550_6556 = G__6570;
count__6551_6557 = G__6571;
i__6552_6558 = G__6572;
continue;
}
} else
{var vec__6554_6573 = cljs.core.first.call(null,seq__6549_6567__$1);var name_6574 = cljs.core.nth.call(null,vec__6554_6573,(0),null);var value_6575 = cljs.core.nth.call(null,vec__6554_6573,(1),null);domina.set_style_BANG_.call(null,content,name_6574,value_6575);
{
var G__6576 = cljs.core.next.call(null,seq__6549_6567__$1);
var G__6577 = null;
var G__6578 = (0);
var G__6579 = (0);
seq__6549_6555 = G__6576;
chunk__6550_6556 = G__6577;
count__6551_6557 = G__6578;
i__6552_6558 = G__6579;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__6586_6592 = cljs.core.seq.call(null,attrs);var chunk__6587_6593 = null;var count__6588_6594 = (0);var i__6589_6595 = (0);while(true){
if((i__6589_6595 < count__6588_6594))
{var vec__6590_6596 = cljs.core._nth.call(null,chunk__6587_6593,i__6589_6595);var name_6597 = cljs.core.nth.call(null,vec__6590_6596,(0),null);var value_6598 = cljs.core.nth.call(null,vec__6590_6596,(1),null);domina.set_attr_BANG_.call(null,content,name_6597,value_6598);
{
var G__6599 = seq__6586_6592;
var G__6600 = chunk__6587_6593;
var G__6601 = count__6588_6594;
var G__6602 = (i__6589_6595 + (1));
seq__6586_6592 = G__6599;
chunk__6587_6593 = G__6600;
count__6588_6594 = G__6601;
i__6589_6595 = G__6602;
continue;
}
} else
{var temp__4126__auto___6603 = cljs.core.seq.call(null,seq__6586_6592);if(temp__4126__auto___6603)
{var seq__6586_6604__$1 = temp__4126__auto___6603;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6586_6604__$1))
{var c__4316__auto___6605 = cljs.core.chunk_first.call(null,seq__6586_6604__$1);{
var G__6606 = cljs.core.chunk_rest.call(null,seq__6586_6604__$1);
var G__6607 = c__4316__auto___6605;
var G__6608 = cljs.core.count.call(null,c__4316__auto___6605);
var G__6609 = (0);
seq__6586_6592 = G__6606;
chunk__6587_6593 = G__6607;
count__6588_6594 = G__6608;
i__6589_6595 = G__6609;
continue;
}
} else
{var vec__6591_6610 = cljs.core.first.call(null,seq__6586_6604__$1);var name_6611 = cljs.core.nth.call(null,vec__6591_6610,(0),null);var value_6612 = cljs.core.nth.call(null,vec__6591_6610,(1),null);domina.set_attr_BANG_.call(null,content,name_6611,value_6612);
{
var G__6613 = cljs.core.next.call(null,seq__6586_6604__$1);
var G__6614 = null;
var G__6615 = (0);
var G__6616 = (0);
seq__6586_6592 = G__6613;
chunk__6587_6593 = G__6614;
count__6588_6594 = G__6615;
i__6589_6595 = G__6616;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__6621_6625 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6622_6626 = null;var count__6623_6627 = (0);var i__6624_6628 = (0);while(true){
if((i__6624_6628 < count__6623_6627))
{var node_6629 = cljs.core._nth.call(null,chunk__6622_6626,i__6624_6628);goog.dom.classes.add(node_6629,class$);
{
var G__6630 = seq__6621_6625;
var G__6631 = chunk__6622_6626;
var G__6632 = count__6623_6627;
var G__6633 = (i__6624_6628 + (1));
seq__6621_6625 = G__6630;
chunk__6622_6626 = G__6631;
count__6623_6627 = G__6632;
i__6624_6628 = G__6633;
continue;
}
} else
{var temp__4126__auto___6634 = cljs.core.seq.call(null,seq__6621_6625);if(temp__4126__auto___6634)
{var seq__6621_6635__$1 = temp__4126__auto___6634;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6621_6635__$1))
{var c__4316__auto___6636 = cljs.core.chunk_first.call(null,seq__6621_6635__$1);{
var G__6637 = cljs.core.chunk_rest.call(null,seq__6621_6635__$1);
var G__6638 = c__4316__auto___6636;
var G__6639 = cljs.core.count.call(null,c__4316__auto___6636);
var G__6640 = (0);
seq__6621_6625 = G__6637;
chunk__6622_6626 = G__6638;
count__6623_6627 = G__6639;
i__6624_6628 = G__6640;
continue;
}
} else
{var node_6641 = cljs.core.first.call(null,seq__6621_6635__$1);goog.dom.classes.add(node_6641,class$);
{
var G__6642 = cljs.core.next.call(null,seq__6621_6635__$1);
var G__6643 = null;
var G__6644 = (0);
var G__6645 = (0);
seq__6621_6625 = G__6642;
chunk__6622_6626 = G__6643;
count__6623_6627 = G__6644;
i__6624_6628 = G__6645;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__6650_6654 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6651_6655 = null;var count__6652_6656 = (0);var i__6653_6657 = (0);while(true){
if((i__6653_6657 < count__6652_6656))
{var node_6658 = cljs.core._nth.call(null,chunk__6651_6655,i__6653_6657);goog.dom.classes.remove(node_6658,class$);
{
var G__6659 = seq__6650_6654;
var G__6660 = chunk__6651_6655;
var G__6661 = count__6652_6656;
var G__6662 = (i__6653_6657 + (1));
seq__6650_6654 = G__6659;
chunk__6651_6655 = G__6660;
count__6652_6656 = G__6661;
i__6653_6657 = G__6662;
continue;
}
} else
{var temp__4126__auto___6663 = cljs.core.seq.call(null,seq__6650_6654);if(temp__4126__auto___6663)
{var seq__6650_6664__$1 = temp__4126__auto___6663;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6650_6664__$1))
{var c__4316__auto___6665 = cljs.core.chunk_first.call(null,seq__6650_6664__$1);{
var G__6666 = cljs.core.chunk_rest.call(null,seq__6650_6664__$1);
var G__6667 = c__4316__auto___6665;
var G__6668 = cljs.core.count.call(null,c__4316__auto___6665);
var G__6669 = (0);
seq__6650_6654 = G__6666;
chunk__6651_6655 = G__6667;
count__6652_6656 = G__6668;
i__6653_6657 = G__6669;
continue;
}
} else
{var node_6670 = cljs.core.first.call(null,seq__6650_6664__$1);goog.dom.classes.remove(node_6670,class$);
{
var G__6671 = cljs.core.next.call(null,seq__6650_6664__$1);
var G__6672 = null;
var G__6673 = (0);
var G__6674 = (0);
seq__6650_6654 = G__6671;
chunk__6651_6655 = G__6672;
count__6652_6656 = G__6673;
i__6653_6657 = G__6674;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__6679_6683 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6680_6684 = null;var count__6681_6685 = (0);var i__6682_6686 = (0);while(true){
if((i__6682_6686 < count__6681_6685))
{var node_6687 = cljs.core._nth.call(null,chunk__6680_6684,i__6682_6686);goog.dom.classes.toggle(node_6687,class$);
{
var G__6688 = seq__6679_6683;
var G__6689 = chunk__6680_6684;
var G__6690 = count__6681_6685;
var G__6691 = (i__6682_6686 + (1));
seq__6679_6683 = G__6688;
chunk__6680_6684 = G__6689;
count__6681_6685 = G__6690;
i__6682_6686 = G__6691;
continue;
}
} else
{var temp__4126__auto___6692 = cljs.core.seq.call(null,seq__6679_6683);if(temp__4126__auto___6692)
{var seq__6679_6693__$1 = temp__4126__auto___6692;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6679_6693__$1))
{var c__4316__auto___6694 = cljs.core.chunk_first.call(null,seq__6679_6693__$1);{
var G__6695 = cljs.core.chunk_rest.call(null,seq__6679_6693__$1);
var G__6696 = c__4316__auto___6694;
var G__6697 = cljs.core.count.call(null,c__4316__auto___6694);
var G__6698 = (0);
seq__6679_6683 = G__6695;
chunk__6680_6684 = G__6696;
count__6681_6685 = G__6697;
i__6682_6686 = G__6698;
continue;
}
} else
{var node_6699 = cljs.core.first.call(null,seq__6679_6693__$1);goog.dom.classes.toggle(node_6699,class$);
{
var G__6700 = cljs.core.next.call(null,seq__6679_6693__$1);
var G__6701 = null;
var G__6702 = (0);
var G__6703 = (0);
seq__6679_6683 = G__6700;
chunk__6680_6684 = G__6701;
count__6681_6685 = G__6702;
i__6682_6686 = G__6703;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_6712__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__6708_6713 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6709_6714 = null;var count__6710_6715 = (0);var i__6711_6716 = (0);while(true){
if((i__6711_6716 < count__6710_6715))
{var node_6717 = cljs.core._nth.call(null,chunk__6709_6714,i__6711_6716);goog.dom.classes.set(node_6717,classes_6712__$1);
{
var G__6718 = seq__6708_6713;
var G__6719 = chunk__6709_6714;
var G__6720 = count__6710_6715;
var G__6721 = (i__6711_6716 + (1));
seq__6708_6713 = G__6718;
chunk__6709_6714 = G__6719;
count__6710_6715 = G__6720;
i__6711_6716 = G__6721;
continue;
}
} else
{var temp__4126__auto___6722 = cljs.core.seq.call(null,seq__6708_6713);if(temp__4126__auto___6722)
{var seq__6708_6723__$1 = temp__4126__auto___6722;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6708_6723__$1))
{var c__4316__auto___6724 = cljs.core.chunk_first.call(null,seq__6708_6723__$1);{
var G__6725 = cljs.core.chunk_rest.call(null,seq__6708_6723__$1);
var G__6726 = c__4316__auto___6724;
var G__6727 = cljs.core.count.call(null,c__4316__auto___6724);
var G__6728 = (0);
seq__6708_6713 = G__6725;
chunk__6709_6714 = G__6726;
count__6710_6715 = G__6727;
i__6711_6716 = G__6728;
continue;
}
} else
{var node_6729 = cljs.core.first.call(null,seq__6708_6723__$1);goog.dom.classes.set(node_6729,classes_6712__$1);
{
var G__6730 = cljs.core.next.call(null,seq__6708_6723__$1);
var G__6731 = null;
var G__6732 = (0);
var G__6733 = (0);
seq__6708_6713 = G__6730;
chunk__6709_6714 = G__6731;
count__6710_6715 = G__6732;
i__6711_6716 = G__6733;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__6738_6742 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6739_6743 = null;var count__6740_6744 = (0);var i__6741_6745 = (0);while(true){
if((i__6741_6745 < count__6740_6744))
{var node_6746 = cljs.core._nth.call(null,chunk__6739_6743,i__6741_6745);goog.dom.setTextContent(node_6746,value);
{
var G__6747 = seq__6738_6742;
var G__6748 = chunk__6739_6743;
var G__6749 = count__6740_6744;
var G__6750 = (i__6741_6745 + (1));
seq__6738_6742 = G__6747;
chunk__6739_6743 = G__6748;
count__6740_6744 = G__6749;
i__6741_6745 = G__6750;
continue;
}
} else
{var temp__4126__auto___6751 = cljs.core.seq.call(null,seq__6738_6742);if(temp__4126__auto___6751)
{var seq__6738_6752__$1 = temp__4126__auto___6751;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6738_6752__$1))
{var c__4316__auto___6753 = cljs.core.chunk_first.call(null,seq__6738_6752__$1);{
var G__6754 = cljs.core.chunk_rest.call(null,seq__6738_6752__$1);
var G__6755 = c__4316__auto___6753;
var G__6756 = cljs.core.count.call(null,c__4316__auto___6753);
var G__6757 = (0);
seq__6738_6742 = G__6754;
chunk__6739_6743 = G__6755;
count__6740_6744 = G__6756;
i__6741_6745 = G__6757;
continue;
}
} else
{var node_6758 = cljs.core.first.call(null,seq__6738_6752__$1);goog.dom.setTextContent(node_6758,value);
{
var G__6759 = cljs.core.next.call(null,seq__6738_6752__$1);
var G__6760 = null;
var G__6761 = (0);
var G__6762 = (0);
seq__6738_6742 = G__6759;
chunk__6739_6743 = G__6760;
count__6740_6744 = G__6761;
i__6741_6745 = G__6762;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__6767_6771 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6768_6772 = null;var count__6769_6773 = (0);var i__6770_6774 = (0);while(true){
if((i__6770_6774 < count__6769_6773))
{var node_6775 = cljs.core._nth.call(null,chunk__6768_6772,i__6770_6774);goog.dom.forms.setValue(node_6775,value);
{
var G__6776 = seq__6767_6771;
var G__6777 = chunk__6768_6772;
var G__6778 = count__6769_6773;
var G__6779 = (i__6770_6774 + (1));
seq__6767_6771 = G__6776;
chunk__6768_6772 = G__6777;
count__6769_6773 = G__6778;
i__6770_6774 = G__6779;
continue;
}
} else
{var temp__4126__auto___6780 = cljs.core.seq.call(null,seq__6767_6771);if(temp__4126__auto___6780)
{var seq__6767_6781__$1 = temp__4126__auto___6780;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6767_6781__$1))
{var c__4316__auto___6782 = cljs.core.chunk_first.call(null,seq__6767_6781__$1);{
var G__6783 = cljs.core.chunk_rest.call(null,seq__6767_6781__$1);
var G__6784 = c__4316__auto___6782;
var G__6785 = cljs.core.count.call(null,c__4316__auto___6782);
var G__6786 = (0);
seq__6767_6771 = G__6783;
chunk__6768_6772 = G__6784;
count__6769_6773 = G__6785;
i__6770_6774 = G__6786;
continue;
}
} else
{var node_6787 = cljs.core.first.call(null,seq__6767_6781__$1);goog.dom.forms.setValue(node_6787,value);
{
var G__6788 = cljs.core.next.call(null,seq__6767_6781__$1);
var G__6789 = null;
var G__6790 = (0);
var G__6791 = (0);
seq__6767_6771 = G__6788;
chunk__6768_6772 = G__6789;
count__6769_6773 = G__6790;
i__6770_6774 = G__6791;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3548__auto__ = allows_inner_html_QMARK_;if(and__3548__auto__)
{var and__3548__auto____$1 = (function (){var or__3560__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3548__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3548__auto____$1;
}
} else
{return and__3548__auto__;
}
})()))
{var value_6802 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__6798_6803 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6799_6804 = null;var count__6800_6805 = (0);var i__6801_6806 = (0);while(true){
if((i__6801_6806 < count__6800_6805))
{var node_6807 = cljs.core._nth.call(null,chunk__6799_6804,i__6801_6806);node_6807.innerHTML = value_6802;
{
var G__6808 = seq__6798_6803;
var G__6809 = chunk__6799_6804;
var G__6810 = count__6800_6805;
var G__6811 = (i__6801_6806 + (1));
seq__6798_6803 = G__6808;
chunk__6799_6804 = G__6809;
count__6800_6805 = G__6810;
i__6801_6806 = G__6811;
continue;
}
} else
{var temp__4126__auto___6812 = cljs.core.seq.call(null,seq__6798_6803);if(temp__4126__auto___6812)
{var seq__6798_6813__$1 = temp__4126__auto___6812;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6798_6813__$1))
{var c__4316__auto___6814 = cljs.core.chunk_first.call(null,seq__6798_6813__$1);{
var G__6815 = cljs.core.chunk_rest.call(null,seq__6798_6813__$1);
var G__6816 = c__4316__auto___6814;
var G__6817 = cljs.core.count.call(null,c__4316__auto___6814);
var G__6818 = (0);
seq__6798_6803 = G__6815;
chunk__6799_6804 = G__6816;
count__6800_6805 = G__6817;
i__6801_6806 = G__6818;
continue;
}
} else
{var node_6819 = cljs.core.first.call(null,seq__6798_6813__$1);node_6819.innerHTML = value_6802;
{
var G__6820 = cljs.core.next.call(null,seq__6798_6813__$1);
var G__6821 = null;
var G__6822 = (0);
var G__6823 = (0);
seq__6798_6803 = G__6820;
chunk__6799_6804 = G__6821;
count__6800_6805 = G__6822;
i__6801_6806 = G__6823;
continue;
}
}
} else
{}
}
break;
}
}catch (e6797){if((e6797 instanceof Error))
{var e_6824 = e6797;domina.replace_children_BANG_.call(null,content,value_6802);
} else
{throw e6797;

}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3548__auto__ = bubble;if(cljs.core.truth_(and__3548__auto__))
{return (value == null);
} else
{return and__3548__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3560__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__6831_6835 = cljs.core.seq.call(null,children);var chunk__6832_6836 = null;var count__6833_6837 = (0);var i__6834_6838 = (0);while(true){
if((i__6834_6838 < count__6833_6837))
{var child_6839 = cljs.core._nth.call(null,chunk__6832_6836,i__6834_6838);frag.appendChild(child_6839);
{
var G__6840 = seq__6831_6835;
var G__6841 = chunk__6832_6836;
var G__6842 = count__6833_6837;
var G__6843 = (i__6834_6838 + (1));
seq__6831_6835 = G__6840;
chunk__6832_6836 = G__6841;
count__6833_6837 = G__6842;
i__6834_6838 = G__6843;
continue;
}
} else
{var temp__4126__auto___6844 = cljs.core.seq.call(null,seq__6831_6835);if(temp__4126__auto___6844)
{var seq__6831_6845__$1 = temp__4126__auto___6844;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6831_6845__$1))
{var c__4316__auto___6846 = cljs.core.chunk_first.call(null,seq__6831_6845__$1);{
var G__6847 = cljs.core.chunk_rest.call(null,seq__6831_6845__$1);
var G__6848 = c__4316__auto___6846;
var G__6849 = cljs.core.count.call(null,c__4316__auto___6846);
var G__6850 = (0);
seq__6831_6835 = G__6847;
chunk__6832_6836 = G__6848;
count__6833_6837 = G__6849;
i__6834_6838 = G__6850;
continue;
}
} else
{var child_6851 = cljs.core.first.call(null,seq__6831_6845__$1);frag.appendChild(child_6851);
{
var G__6852 = cljs.core.next.call(null,seq__6831_6845__$1);
var G__6853 = null;
var G__6854 = (0);
var G__6855 = (0);
seq__6831_6835 = G__6852;
chunk__6832_6836 = G__6853;
count__6833_6837 = G__6854;
i__6834_6838 = G__6855;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__6825_SHARP_,p2__6826_SHARP_){return f.call(null,p1__6825_SHARP_,p2__6826_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3548__auto__ = obj;if(cljs.core.truth_(and__3548__auto__))
{var and__3548__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3548__auto____$1)
{return obj.length;
} else
{return and__3548__auto____$1;
}
} else
{return and__3548__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__6857 = list_thing;if(G__6857)
{var bit__4210__auto__ = (G__6857.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4210__auto__) || (G__6857.cljs$core$ISeqable$))
{return true;
} else
{if((!G__6857.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__6857);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__6857);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__6858 = content;if(G__6858)
{var bit__4210__auto__ = (G__6858.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4210__auto__) || (G__6858.cljs$core$ISeqable$))
{return true;
} else
{if((!G__6858.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__6858);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__6858);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__6859 = content;if(G__6859)
{var bit__4210__auto__ = (G__6859.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4210__auto__) || (G__6859.cljs$core$ISeqable$))
{return true;
} else
{if((!G__6859.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__6859);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__6859);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}

//# sourceMappingURL=domina.js.map