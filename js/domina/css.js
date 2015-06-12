// Compiled by ClojureScript 0.0-2322
goog.provide('domina.css');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('domina');
domina.css.root_element = (function root_element(){return (goog.dom.getElementsByTagNameAndClass("html")[(0)]);
});
/**
* Returns content based on a css selector expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
*/
domina.css.sel = (function() {
var sel = null;
var sel__1 = (function (expr){return sel.call(null,domina.css.root_element.call(null),expr);
});
var sel__2 = (function (base,expr){if(typeof domina.css.t5332 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.css.t5332 = (function (expr,base,sel,meta5333){
this.expr = expr;
this.base = base;
this.sel = sel;
this.meta5333 = meta5333;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.css.t5332.cljs$lang$type = true;
domina.css.t5332.cljs$lang$ctorStr = "domina.css/t5332";
domina.css.t5332.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"domina.css/t5332");
});
domina.css.t5332.prototype.domina$DomContent$ = true;
domina.css.t5332.prototype.domina$DomContent$nodes$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__5327_SHARP_){return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__5327_SHARP_));
});})(___$1))
,domina.nodes.call(null,self__.base));
});
domina.css.t5332.prototype.domina$DomContent$single_node$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__5328_SHARP_){return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__5328_SHARP_));
});})(___$1))
,domina.nodes.call(null,self__.base))));
});
domina.css.t5332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5334){var self__ = this;
var _5334__$1 = this;return self__.meta5333;
});
domina.css.t5332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5334,meta5333__$1){var self__ = this;
var _5334__$1 = this;return (new domina.css.t5332(self__.expr,self__.base,self__.sel,meta5333__$1));
});
domina.css.__GT_t5332 = (function __GT_t5332(expr__$1,base__$1,sel__$1,meta5333){return (new domina.css.t5332(expr__$1,base__$1,sel__$1,meta5333));
});
}
return (new domina.css.t5332(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case 1:
return sel__1.call(this,base);
case 2:
return sel__2.call(this,base,expr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sel.cljs$core$IFn$_invoke$arity$1 = sel__1;
sel.cljs$core$IFn$_invoke$arity$2 = sel__2;
return sel;
})()
;

//# sourceMappingURL=css.js.map