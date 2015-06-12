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
var opt_wrapper_5149 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_5150 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_5151 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_5151,opt_wrapper_5149,table_section_wrapper_5150,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_5149,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_5150,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_5150,cell_wrapper_5151,table_section_wrapper_5150,table_section_wrapper_5150]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3548__auto__ = div.firstChild;if(cljs.core.truth_(and__3548__auto__))
{return div.firstChild.childNodes;
} else
{return and__3548__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__5156 = cljs.core.seq.call(null,tbody);var chunk__5157 = null;var count__5158 = (0);var i__5159 = (0);while(true){
if((i__5159 < count__5158))
{var child = cljs.core._nth.call(null,chunk__5157,i__5159);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__5160 = seq__5156;
var G__5161 = chunk__5157;
var G__5162 = count__5158;
var G__5163 = (i__5159 + (1));
seq__5156 = G__5160;
chunk__5157 = G__5161;
count__5158 = G__5162;
i__5159 = G__5163;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5156);if(temp__4126__auto__)
{var seq__5156__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5156__$1))
{var c__4316__auto__ = cljs.core.chunk_first.call(null,seq__5156__$1);{
var G__5164 = cljs.core.chunk_rest.call(null,seq__5156__$1);
var G__5165 = c__4316__auto__;
var G__5166 = cljs.core.count.call(null,c__4316__auto__);
var G__5167 = (0);
seq__5156 = G__5164;
chunk__5157 = G__5165;
count__5158 = G__5166;
i__5159 = G__5167;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__5156__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__5168 = cljs.core.next.call(null,seq__5156__$1);
var G__5169 = null;
var G__5170 = (0);
var G__5171 = (0);
seq__5156 = G__5168;
chunk__5157 = G__5169;
count__5158 = G__5170;
i__5159 = G__5171;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__5173 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__5173,(0),null);var start_wrap = cljs.core.nth.call(null,vec__5173,(1),null);var end_wrap = cljs.core.nth.call(null,vec__5173,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__5174 = wrapper.lastChild;
var G__5175 = (level - (1));
wrapper = G__5174;
level = G__5175;
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
domina.DomContent = (function (){var obj5177 = {};return obj5177;
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
log_debug.cljs$lang$applyTo = (function (arglist__5178){
var mesg = cljs.core.seq(arglist__5178);
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
log.cljs$lang$applyTo = (function (arglist__5179){
var mesg = cljs.core.seq(arglist__5179);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__5180){
var contents = cljs.core.seq(arglist__5180);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__5181_SHARP_){return p1__5181_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__5182_SHARP_,p2__5183_SHARP_){return goog.dom.insertChildAt(p1__5182_SHARP_,p2__5183_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__5185_SHARP_,p2__5184_SHARP_){return goog.dom.insertSiblingBefore(p2__5184_SHARP_,p1__5185_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__5187_SHARP_,p2__5186_SHARP_){return goog.dom.insertSiblingAfter(p2__5186_SHARP_,p1__5187_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__5189_SHARP_,p2__5188_SHARP_){return goog.dom.replaceNode(p2__5188_SHARP_,p1__5189_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__5194_5198 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__5195_5199 = null;var count__5196_5200 = (0);var i__5197_5201 = (0);while(true){
if((i__5197_5201 < count__5196_5200))
{var n_5202 = cljs.core._nth.call(null,chunk__5195_5199,i__5197_5201);goog.style.setStyle(n_5202,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__5203 = seq__5194_5198;
var G__5204 = chunk__5195_5199;
var G__5205 = count__5196_5200;
var G__5206 = (i__5197_5201 + (1));
seq__5194_5198 = G__5203;
chunk__5195_5199 = G__5204;
count__5196_5200 = G__5205;
i__5197_5201 = G__5206;
continue;
}
} else
{var temp__4126__auto___5207 = cljs.core.seq.call(null,seq__5194_5198);if(temp__4126__auto___5207)
{var seq__5194_5208__$1 = temp__4126__auto___5207;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5194_5208__$1))
{var c__4316__auto___5209 = cljs.core.chunk_first.call(null,seq__5194_5208__$1);{
var G__5210 = cljs.core.chunk_rest.call(null,seq__5194_5208__$1);
var G__5211 = c__4316__auto___5209;
var G__5212 = cljs.core.count.call(null,c__4316__auto___5209);
var G__5213 = (0);
seq__5194_5198 = G__5210;
chunk__5195_5199 = G__5211;
count__5196_5200 = G__5212;
i__5197_5201 = G__5213;
continue;
}
} else
{var n_5214 = cljs.core.first.call(null,seq__5194_5208__$1);goog.style.setStyle(n_5214,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__5215 = cljs.core.next.call(null,seq__5194_5208__$1);
var G__5216 = null;
var G__5217 = (0);
var G__5218 = (0);
seq__5194_5198 = G__5215;
chunk__5195_5199 = G__5216;
count__5196_5200 = G__5217;
i__5197_5201 = G__5218;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__5219){
var content = cljs.core.first(arglist__5219);
arglist__5219 = cljs.core.next(arglist__5219);
var name = cljs.core.first(arglist__5219);
var value = cljs.core.rest(arglist__5219);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__5224_5228 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__5225_5229 = null;var count__5226_5230 = (0);var i__5227_5231 = (0);while(true){
if((i__5227_5231 < count__5226_5230))
{var n_5232 = cljs.core._nth.call(null,chunk__5225_5229,i__5227_5231);n_5232.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__5233 = seq__5224_5228;
var G__5234 = chunk__5225_5229;
var G__5235 = count__5226_5230;
var G__5236 = (i__5227_5231 + (1));
seq__5224_5228 = G__5233;
chunk__5225_5229 = G__5234;
count__5226_5230 = G__5235;
i__5227_5231 = G__5236;
continue;
}
} else
{var temp__4126__auto___5237 = cljs.core.seq.call(null,seq__5224_5228);if(temp__4126__auto___5237)
{var seq__5224_5238__$1 = temp__4126__auto___5237;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5224_5238__$1))
{var c__4316__auto___5239 = cljs.core.chunk_first.call(null,seq__5224_5238__$1);{
var G__5240 = cljs.core.chunk_rest.call(null,seq__5224_5238__$1);
var G__5241 = c__4316__auto___5239;
var G__5242 = cljs.core.count.call(null,c__4316__auto___5239);
var G__5243 = (0);
seq__5224_5228 = G__5240;
chunk__5225_5229 = G__5241;
count__5226_5230 = G__5242;
i__5227_5231 = G__5243;
continue;
}
} else
{var n_5244 = cljs.core.first.call(null,seq__5224_5238__$1);n_5244.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__5245 = cljs.core.next.call(null,seq__5224_5238__$1);
var G__5246 = null;
var G__5247 = (0);
var G__5248 = (0);
seq__5224_5228 = G__5245;
chunk__5225_5229 = G__5246;
count__5226_5230 = G__5247;
i__5227_5231 = G__5248;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__5249){
var content = cljs.core.first(arglist__5249);
arglist__5249 = cljs.core.next(arglist__5249);
var name = cljs.core.first(arglist__5249);
var value = cljs.core.rest(arglist__5249);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__5254_5258 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__5255_5259 = null;var count__5256_5260 = (0);var i__5257_5261 = (0);while(true){
if((i__5257_5261 < count__5256_5260))
{var n_5262 = cljs.core._nth.call(null,chunk__5255_5259,i__5257_5261);n_5262.removeAttribute(cljs.core.name.call(null,name));
{
var G__5263 = seq__5254_5258;
var G__5264 = chunk__5255_5259;
var G__5265 = count__5256_5260;
var G__5266 = (i__5257_5261 + (1));
seq__5254_5258 = G__5263;
chunk__5255_5259 = G__5264;
count__5256_5260 = G__5265;
i__5257_5261 = G__5266;
continue;
}
} else
{var temp__4126__auto___5267 = cljs.core.seq.call(null,seq__5254_5258);if(temp__4126__auto___5267)
{var seq__5254_5268__$1 = temp__4126__auto___5267;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5254_5268__$1))
{var c__4316__auto___5269 = cljs.core.chunk_first.call(null,seq__5254_5268__$1);{
var G__5270 = cljs.core.chunk_rest.call(null,seq__5254_5268__$1);
var G__5271 = c__4316__auto___5269;
var G__5272 = cljs.core.count.call(null,c__4316__auto___5269);
var G__5273 = (0);
seq__5254_5258 = G__5270;
chunk__5255_5259 = G__5271;
count__5256_5260 = G__5272;
i__5257_5261 = G__5273;
continue;
}
} else
{var n_5274 = cljs.core.first.call(null,seq__5254_5268__$1);n_5274.removeAttribute(cljs.core.name.call(null,name));
{
var G__5275 = cljs.core.next.call(null,seq__5254_5268__$1);
var G__5276 = null;
var G__5277 = (0);
var G__5278 = (0);
seq__5254_5258 = G__5275;
chunk__5255_5259 = G__5276;
count__5256_5260 = G__5277;
i__5257_5261 = G__5278;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__5280 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__5280,(0),null);var v = cljs.core.nth.call(null,vec__5280,(1),null);if(cljs.core.truth_((function (){var and__3548__auto__ = k;if(cljs.core.truth_(and__3548__auto__))
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
return (function (p1__5281_SHARP_){var attr = attrs__$1.item(p1__5281_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__5288_5294 = cljs.core.seq.call(null,styles);var chunk__5289_5295 = null;var count__5290_5296 = (0);var i__5291_5297 = (0);while(true){
if((i__5291_5297 < count__5290_5296))
{var vec__5292_5298 = cljs.core._nth.call(null,chunk__5289_5295,i__5291_5297);var name_5299 = cljs.core.nth.call(null,vec__5292_5298,(0),null);var value_5300 = cljs.core.nth.call(null,vec__5292_5298,(1),null);domina.set_style_BANG_.call(null,content,name_5299,value_5300);
{
var G__5301 = seq__5288_5294;
var G__5302 = chunk__5289_5295;
var G__5303 = count__5290_5296;
var G__5304 = (i__5291_5297 + (1));
seq__5288_5294 = G__5301;
chunk__5289_5295 = G__5302;
count__5290_5296 = G__5303;
i__5291_5297 = G__5304;
continue;
}
} else
{var temp__4126__auto___5305 = cljs.core.seq.call(null,seq__5288_5294);if(temp__4126__auto___5305)
{var seq__5288_5306__$1 = temp__4126__auto___5305;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5288_5306__$1))
{var c__4316__auto___5307 = cljs.core.chunk_first.call(null,seq__5288_5306__$1);{
var G__5308 = cljs.core.chunk_rest.call(null,seq__5288_5306__$1);
var G__5309 = c__4316__auto___5307;
var G__5310 = cljs.core.count.call(null,c__4316__auto___5307);
var G__5311 = (0);
seq__5288_5294 = G__5308;
chunk__5289_5295 = G__5309;
count__5290_5296 = G__5310;
i__5291_5297 = G__5311;
continue;
}
} else
{var vec__5293_5312 = cljs.core.first.call(null,seq__5288_5306__$1);var name_5313 = cljs.core.nth.call(null,vec__5293_5312,(0),null);var value_5314 = cljs.core.nth.call(null,vec__5293_5312,(1),null);domina.set_style_BANG_.call(null,content,name_5313,value_5314);
{
var G__5315 = cljs.core.next.call(null,seq__5288_5306__$1);
var G__5316 = null;
var G__5317 = (0);
var G__5318 = (0);
seq__5288_5294 = G__5315;
chunk__5289_5295 = G__5316;
count__5290_5296 = G__5317;
i__5291_5297 = G__5318;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__5325_5331 = cljs.core.seq.call(null,attrs);var chunk__5326_5332 = null;var count__5327_5333 = (0);var i__5328_5334 = (0);while(true){
if((i__5328_5334 < count__5327_5333))
{var vec__5329_5335 = cljs.core._nth.call(null,chunk__5326_5332,i__5328_5334);var name_5336 = cljs.core.nth.call(null,vec__5329_5335,(0),null);var value_5337 = cljs.core.nth.call(null,vec__5329_5335,(1),null);domina.set_attr_BANG_.call(null,content,name_5336,value_5337);
{
var G__5338 = seq__5325_5331;
var G__5339 = chunk__5326_5332;
var G__5340 = count__5327_5333;
var G__5341 = (i__5328_5334 + (1));
seq__5325_5331 = G__5338;
chunk__5326_5332 = G__5339;
count__5327_5333 = G__5340;
i__5328_5334 = G__5341;
continue;
}
} else
{var temp__4126__auto___5342 = cljs.core.seq.call(null,seq__5325_5331);if(temp__4126__auto___5342)
{var seq__5325_5343__$1 = temp__4126__auto___5342;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5325_5343__$1))
{var c__4316__auto___5344 = cljs.core.chunk_first.call(null,seq__5325_5343__$1);{
var G__5345 = cljs.core.chunk_rest.call(null,seq__5325_5343__$1);
var G__5346 = c__4316__auto___5344;
var G__5347 = cljs.core.count.call(null,c__4316__auto___5344);
var G__5348 = (0);
seq__5325_5331 = G__5345;
chunk__5326_5332 = G__5346;
count__5327_5333 = G__5347;
i__5328_5334 = G__5348;
continue;
}
} else
{var vec__5330_5349 = cljs.core.first.call(null,seq__5325_5343__$1);var name_5350 = cljs.core.nth.call(null,vec__5330_5349,(0),null);var value_5351 = cljs.core.nth.call(null,vec__5330_5349,(1),null);domina.set_attr_BANG_.call(null,content,name_5350,value_5351);
{
var G__5352 = cljs.core.next.call(null,seq__5325_5343__$1);
var G__5353 = null;
var G__5354 = (0);
var G__5355 = (0);
seq__5325_5331 = G__5352;
chunk__5326_5332 = G__5353;
count__5327_5333 = G__5354;
i__5328_5334 = G__5355;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__5360_5364 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__5361_5365 = null;var count__5362_5366 = (0);var i__5363_5367 = (0);while(true){
if((i__5363_5367 < count__5362_5366))
{var node_5368 = cljs.core._nth.call(null,chunk__5361_5365,i__5363_5367);goog.dom.classes.add(node_5368,class$);
{
var G__5369 = seq__5360_5364;
var G__5370 = chunk__5361_5365;
var G__5371 = count__5362_5366;
var G__5372 = (i__5363_5367 + (1));
seq__5360_5364 = G__5369;
chunk__5361_5365 = G__5370;
count__5362_5366 = G__5371;
i__5363_5367 = G__5372;
continue;
}
} else
{var temp__4126__auto___5373 = cljs.core.seq.call(null,seq__5360_5364);if(temp__4126__auto___5373)
{var seq__5360_5374__$1 = temp__4126__auto___5373;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5360_5374__$1))
{var c__4316__auto___5375 = cljs.core.chunk_first.call(null,seq__5360_5374__$1);{
var G__5376 = cljs.core.chunk_rest.call(null,seq__5360_5374__$1);
var G__5377 = c__4316__auto___5375;
var G__5378 = cljs.core.count.call(null,c__4316__auto___5375);
var G__5379 = (0);
seq__5360_5364 = G__5376;
chunk__5361_5365 = G__5377;
count__5362_5366 = G__5378;
i__5363_5367 = G__5379;
continue;
}
} else
{var node_5380 = cljs.core.first.call(null,seq__5360_5374__$1);goog.dom.classes.add(node_5380,class$);
{
var G__5381 = cljs.core.next.call(null,seq__5360_5374__$1);
var G__5382 = null;
var G__5383 = (0);
var G__5384 = (0);
seq__5360_5364 = G__5381;
chunk__5361_5365 = G__5382;
count__5362_5366 = G__5383;
i__5363_5367 = G__5384;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__5389_5393 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__5390_5394 = null;var count__5391_5395 = (0);var i__5392_5396 = (0);while(true){
if((i__5392_5396 < count__5391_5395))
{var node_5397 = cljs.core._nth.call(null,chunk__5390_5394,i__5392_5396);goog.dom.classes.remove(node_5397,class$);
{
var G__5398 = seq__5389_5393;
var G__5399 = chunk__5390_5394;
var G__5400 = count__5391_5395;
var G__5401 = (i__5392_5396 + (1));
seq__5389_5393 = G__5398;
chunk__5390_5394 = G__5399;
count__5391_5395 = G__5400;
i__5392_5396 = G__5401;
continue;
}
} else
{var temp__4126__auto___5402 = cljs.core.seq.call(null,seq__5389_5393);if(temp__4126__auto___5402)
{var seq__5389_5403__$1 = temp__4126__auto___5402;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5389_5403__$1))
{var c__4316__auto___5404 = cljs.core.chunk_first.call(null,seq__5389_5403__$1);{
var G__5405 = cljs.core.chunk_rest.call(null,seq__5389_5403__$1);
var G__5406 = c__4316__auto___5404;
var G__5407 = cljs.core.count.call(null,c__4316__auto___5404);
var G__5408 = (0);
seq__5389_5393 = G__5405;
chunk__5390_5394 = G__5406;
count__5391_5395 = G__5407;
i__5392_5396 = G__5408;
continue;
}
} else
{var node_5409 = cljs.core.first.call(null,seq__5389_5403__$1);goog.dom.classes.remove(node_5409,class$);
{
var G__5410 = cljs.core.next.call(null,seq__5389_5403__$1);
var G__5411 = null;
var G__5412 = (0);
var G__5413 = (0);
seq__5389_5393 = G__5410;
chunk__5390_5394 = G__5411;
count__5391_5395 = G__5412;
i__5392_5396 = G__5413;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__5418_5422 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__5419_5423 = null;var count__5420_5424 = (0);var i__5421_5425 = (0);while(true){
if((i__5421_5425 < count__5420_5424))
{var node_5426 = cljs.core._nth.call(null,chunk__5419_5423,i__5421_5425);goog.dom.classes.toggle(node_5426,class$);
{
var G__5427 = seq__5418_5422;
var G__5428 = chunk__5419_5423;
var G__5429 = count__5420_5424;
var G__5430 = (i__5421_5425 + (1));
seq__5418_5422 = G__5427;
chunk__5419_5423 = G__5428;
count__5420_5424 = G__5429;
i__5421_5425 = G__5430;
continue;
}
} else
{var temp__4126__auto___5431 = cljs.core.seq.call(null,seq__5418_5422);if(temp__4126__auto___5431)
{var seq__5418_5432__$1 = temp__4126__auto___5431;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5418_5432__$1))
{var c__4316__auto___5433 = cljs.core.chunk_first.call(null,seq__5418_5432__$1);{
var G__5434 = cljs.core.chunk_rest.call(null,seq__5418_5432__$1);
var G__5435 = c__4316__auto___5433;
var G__5436 = cljs.core.count.call(null,c__4316__auto___5433);
var G__5437 = (0);
seq__5418_5422 = G__5434;
chunk__5419_5423 = G__5435;
count__5420_5424 = G__5436;
i__5421_5425 = G__5437;
continue;
}
} else
{var node_5438 = cljs.core.first.call(null,seq__5418_5432__$1);goog.dom.classes.toggle(node_5438,class$);
{
var G__5439 = cljs.core.next.call(null,seq__5418_5432__$1);
var G__5440 = null;
var G__5441 = (0);
var G__5442 = (0);
seq__5418_5422 = G__5439;
chunk__5419_5423 = G__5440;
count__5420_5424 = G__5441;
i__5421_5425 = G__5442;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_5451__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__5447_5452 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__5448_5453 = null;var count__5449_5454 = (0);var i__5450_5455 = (0);while(true){
if((i__5450_5455 < count__5449_5454))
{var node_5456 = cljs.core._nth.call(null,chunk__5448_5453,i__5450_5455);goog.dom.classes.set(node_5456,classes_5451__$1);
{
var G__5457 = seq__5447_5452;
var G__5458 = chunk__5448_5453;
var G__5459 = count__5449_5454;
var G__5460 = (i__5450_5455 + (1));
seq__5447_5452 = G__5457;
chunk__5448_5453 = G__5458;
count__5449_5454 = G__5459;
i__5450_5455 = G__5460;
continue;
}
} else
{var temp__4126__auto___5461 = cljs.core.seq.call(null,seq__5447_5452);if(temp__4126__auto___5461)
{var seq__5447_5462__$1 = temp__4126__auto___5461;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5447_5462__$1))
{var c__4316__auto___5463 = cljs.core.chunk_first.call(null,seq__5447_5462__$1);{
var G__5464 = cljs.core.chunk_rest.call(null,seq__5447_5462__$1);
var G__5465 = c__4316__auto___5463;
var G__5466 = cljs.core.count.call(null,c__4316__auto___5463);
var G__5467 = (0);
seq__5447_5452 = G__5464;
chunk__5448_5453 = G__5465;
count__5449_5454 = G__5466;
i__5450_5455 = G__5467;
continue;
}
} else
{var node_5468 = cljs.core.first.call(null,seq__5447_5462__$1);goog.dom.classes.set(node_5468,classes_5451__$1);
{
var G__5469 = cljs.core.next.call(null,seq__5447_5462__$1);
var G__5470 = null;
var G__5471 = (0);
var G__5472 = (0);
seq__5447_5452 = G__5469;
chunk__5448_5453 = G__5470;
count__5449_5454 = G__5471;
i__5450_5455 = G__5472;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__5477_5481 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__5478_5482 = null;var count__5479_5483 = (0);var i__5480_5484 = (0);while(true){
if((i__5480_5484 < count__5479_5483))
{var node_5485 = cljs.core._nth.call(null,chunk__5478_5482,i__5480_5484);goog.dom.setTextContent(node_5485,value);
{
var G__5486 = seq__5477_5481;
var G__5487 = chunk__5478_5482;
var G__5488 = count__5479_5483;
var G__5489 = (i__5480_5484 + (1));
seq__5477_5481 = G__5486;
chunk__5478_5482 = G__5487;
count__5479_5483 = G__5488;
i__5480_5484 = G__5489;
continue;
}
} else
{var temp__4126__auto___5490 = cljs.core.seq.call(null,seq__5477_5481);if(temp__4126__auto___5490)
{var seq__5477_5491__$1 = temp__4126__auto___5490;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5477_5491__$1))
{var c__4316__auto___5492 = cljs.core.chunk_first.call(null,seq__5477_5491__$1);{
var G__5493 = cljs.core.chunk_rest.call(null,seq__5477_5491__$1);
var G__5494 = c__4316__auto___5492;
var G__5495 = cljs.core.count.call(null,c__4316__auto___5492);
var G__5496 = (0);
seq__5477_5481 = G__5493;
chunk__5478_5482 = G__5494;
count__5479_5483 = G__5495;
i__5480_5484 = G__5496;
continue;
}
} else
{var node_5497 = cljs.core.first.call(null,seq__5477_5491__$1);goog.dom.setTextContent(node_5497,value);
{
var G__5498 = cljs.core.next.call(null,seq__5477_5491__$1);
var G__5499 = null;
var G__5500 = (0);
var G__5501 = (0);
seq__5477_5481 = G__5498;
chunk__5478_5482 = G__5499;
count__5479_5483 = G__5500;
i__5480_5484 = G__5501;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__5506_5510 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__5507_5511 = null;var count__5508_5512 = (0);var i__5509_5513 = (0);while(true){
if((i__5509_5513 < count__5508_5512))
{var node_5514 = cljs.core._nth.call(null,chunk__5507_5511,i__5509_5513);goog.dom.forms.setValue(node_5514,value);
{
var G__5515 = seq__5506_5510;
var G__5516 = chunk__5507_5511;
var G__5517 = count__5508_5512;
var G__5518 = (i__5509_5513 + (1));
seq__5506_5510 = G__5515;
chunk__5507_5511 = G__5516;
count__5508_5512 = G__5517;
i__5509_5513 = G__5518;
continue;
}
} else
{var temp__4126__auto___5519 = cljs.core.seq.call(null,seq__5506_5510);if(temp__4126__auto___5519)
{var seq__5506_5520__$1 = temp__4126__auto___5519;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5506_5520__$1))
{var c__4316__auto___5521 = cljs.core.chunk_first.call(null,seq__5506_5520__$1);{
var G__5522 = cljs.core.chunk_rest.call(null,seq__5506_5520__$1);
var G__5523 = c__4316__auto___5521;
var G__5524 = cljs.core.count.call(null,c__4316__auto___5521);
var G__5525 = (0);
seq__5506_5510 = G__5522;
chunk__5507_5511 = G__5523;
count__5508_5512 = G__5524;
i__5509_5513 = G__5525;
continue;
}
} else
{var node_5526 = cljs.core.first.call(null,seq__5506_5520__$1);goog.dom.forms.setValue(node_5526,value);
{
var G__5527 = cljs.core.next.call(null,seq__5506_5520__$1);
var G__5528 = null;
var G__5529 = (0);
var G__5530 = (0);
seq__5506_5510 = G__5527;
chunk__5507_5511 = G__5528;
count__5508_5512 = G__5529;
i__5509_5513 = G__5530;
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
{var value_5541 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__5537_5542 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__5538_5543 = null;var count__5539_5544 = (0);var i__5540_5545 = (0);while(true){
if((i__5540_5545 < count__5539_5544))
{var node_5546 = cljs.core._nth.call(null,chunk__5538_5543,i__5540_5545);node_5546.innerHTML = value_5541;
{
var G__5547 = seq__5537_5542;
var G__5548 = chunk__5538_5543;
var G__5549 = count__5539_5544;
var G__5550 = (i__5540_5545 + (1));
seq__5537_5542 = G__5547;
chunk__5538_5543 = G__5548;
count__5539_5544 = G__5549;
i__5540_5545 = G__5550;
continue;
}
} else
{var temp__4126__auto___5551 = cljs.core.seq.call(null,seq__5537_5542);if(temp__4126__auto___5551)
{var seq__5537_5552__$1 = temp__4126__auto___5551;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5537_5552__$1))
{var c__4316__auto___5553 = cljs.core.chunk_first.call(null,seq__5537_5552__$1);{
var G__5554 = cljs.core.chunk_rest.call(null,seq__5537_5552__$1);
var G__5555 = c__4316__auto___5553;
var G__5556 = cljs.core.count.call(null,c__4316__auto___5553);
var G__5557 = (0);
seq__5537_5542 = G__5554;
chunk__5538_5543 = G__5555;
count__5539_5544 = G__5556;
i__5540_5545 = G__5557;
continue;
}
} else
{var node_5558 = cljs.core.first.call(null,seq__5537_5552__$1);node_5558.innerHTML = value_5541;
{
var G__5559 = cljs.core.next.call(null,seq__5537_5552__$1);
var G__5560 = null;
var G__5561 = (0);
var G__5562 = (0);
seq__5537_5542 = G__5559;
chunk__5538_5543 = G__5560;
count__5539_5544 = G__5561;
i__5540_5545 = G__5562;
continue;
}
}
} else
{}
}
break;
}
}catch (e5536){if((e5536 instanceof Error))
{var e_5563 = e5536;domina.replace_children_BANG_.call(null,content,value_5541);
} else
{throw e5536;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__5570_5574 = cljs.core.seq.call(null,children);var chunk__5571_5575 = null;var count__5572_5576 = (0);var i__5573_5577 = (0);while(true){
if((i__5573_5577 < count__5572_5576))
{var child_5578 = cljs.core._nth.call(null,chunk__5571_5575,i__5573_5577);frag.appendChild(child_5578);
{
var G__5579 = seq__5570_5574;
var G__5580 = chunk__5571_5575;
var G__5581 = count__5572_5576;
var G__5582 = (i__5573_5577 + (1));
seq__5570_5574 = G__5579;
chunk__5571_5575 = G__5580;
count__5572_5576 = G__5581;
i__5573_5577 = G__5582;
continue;
}
} else
{var temp__4126__auto___5583 = cljs.core.seq.call(null,seq__5570_5574);if(temp__4126__auto___5583)
{var seq__5570_5584__$1 = temp__4126__auto___5583;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5570_5584__$1))
{var c__4316__auto___5585 = cljs.core.chunk_first.call(null,seq__5570_5584__$1);{
var G__5586 = cljs.core.chunk_rest.call(null,seq__5570_5584__$1);
var G__5587 = c__4316__auto___5585;
var G__5588 = cljs.core.count.call(null,c__4316__auto___5585);
var G__5589 = (0);
seq__5570_5574 = G__5586;
chunk__5571_5575 = G__5587;
count__5572_5576 = G__5588;
i__5573_5577 = G__5589;
continue;
}
} else
{var child_5590 = cljs.core.first.call(null,seq__5570_5584__$1);frag.appendChild(child_5590);
{
var G__5591 = cljs.core.next.call(null,seq__5570_5584__$1);
var G__5592 = null;
var G__5593 = (0);
var G__5594 = (0);
seq__5570_5574 = G__5591;
chunk__5571_5575 = G__5592;
count__5572_5576 = G__5593;
i__5573_5577 = G__5594;
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
return (function (p1__5564_SHARP_,p2__5565_SHARP_){return f.call(null,p1__5564_SHARP_,p2__5565_SHARP_);
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
{if((function (){var G__5596 = list_thing;if(G__5596)
{var bit__4210__auto__ = (G__5596.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4210__auto__) || (G__5596.cljs$core$ISeqable$))
{return true;
} else
{if((!G__5596.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__5596);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__5596);
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
{if((function (){var G__5597 = content;if(G__5597)
{var bit__4210__auto__ = (G__5597.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4210__auto__) || (G__5597.cljs$core$ISeqable$))
{return true;
} else
{if((!G__5597.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__5597);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__5597);
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
{if((function (){var G__5598 = content;if(G__5598)
{var bit__4210__auto__ = (G__5598.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4210__auto__) || (G__5598.cljs$core$ISeqable$))
{return true;
} else
{if((!G__5598.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__5598);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__5598);
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