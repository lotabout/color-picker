// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj10799 = {};return obj10799;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3548__auto__ = evt;if(and__3548__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3548__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4187__auto__ = (((evt == null))?null:evt);return (function (){var or__3560__auto__ = (domina.events.prevent_default[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (domina.events.prevent_default["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3548__auto__ = evt;if(and__3548__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3548__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4187__auto__ = (((evt == null))?null:evt);return (function (){var or__3560__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3548__auto__ = evt;if(and__3548__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3548__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4187__auto__ = (((evt == null))?null:evt);return (function (){var or__3560__auto__ = (domina.events.target[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (domina.events.target["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3548__auto__ = evt;if(and__3548__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3548__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4187__auto__ = (((evt == null))?null:evt);return (function (){var or__3560__auto__ = (domina.events.current_target[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (domina.events.current_target["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3548__auto__ = evt;if(and__3548__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3548__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4187__auto__ = (((evt == null))?null:evt);return (function (){var or__3560__auto__ = (domina.events.event_type[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (domina.events.event_type["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3548__auto__ = evt;if(and__3548__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3548__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4187__auto__ = (((evt == null))?null:evt);return (function (){var or__3560__auto__ = (domina.events.raw_event[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (domina.events.raw_event["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t10803 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t10803 = (function (evt,f,create_listener_function,meta10804){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta10804 = meta10804;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t10803.cljs$lang$type = true;
domina.events.t10803.cljs$lang$ctorStr = "domina.events/t10803";
domina.events.t10803.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"domina.events/t10803");
});
domina.events.t10803.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t10803.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3560__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return not_found;
}
});
domina.events.t10803.prototype.domina$events$Event$ = true;
domina.events.t10803.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t10803.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t10803.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t10803.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t10803.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t10803.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t10803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10805){var self__ = this;
var _10805__$1 = this;return self__.meta10804;
});
domina.events.t10803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10805,meta10804__$1){var self__ = this;
var _10805__$1 = this;return (new domina.events.t10803(self__.evt,self__.f,self__.create_listener_function,meta10804__$1));
});
domina.events.__GT_t10803 = (function __GT_t10803(evt__$1,f__$1,create_listener_function__$1,meta10804){return (new domina.events.t10803(evt__$1,f__$1,create_listener_function__$1,meta10804));
});
}
return (new domina.events.t10803(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4285__auto__ = ((function (f,t){
return (function iter__10810(s__10811){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__10811__$1 = s__10811;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10811__$1);if(temp__4126__auto__)
{var s__10811__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10811__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__10811__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__10813 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__10812 = (0);while(true){
if((i__10812 < size__4284__auto__))
{var node = cljs.core._nth.call(null,c__4283__auto__,i__10812);cljs.core.chunk_append.call(null,b__10813,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__10814 = (i__10812 + (1));
i__10812 = G__10814;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10813),iter__10810.call(null,cljs.core.chunk_rest.call(null,s__10811__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10813),null);
}
} else
{var node = cljs.core.first.call(null,s__10811__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__10810.call(null,cljs.core.rest.call(null,s__10811__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4285__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__10823 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10824 = null;var count__10825 = (0);var i__10826 = (0);while(true){
if((i__10826 < count__10825))
{var node = cljs.core._nth.call(null,chunk__10824,i__10826);goog.events.removeAll(node);
{
var G__10831 = seq__10823;
var G__10832 = chunk__10824;
var G__10833 = count__10825;
var G__10834 = (i__10826 + (1));
seq__10823 = G__10831;
chunk__10824 = G__10832;
count__10825 = G__10833;
i__10826 = G__10834;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10823);if(temp__4126__auto__)
{var seq__10823__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10823__$1))
{var c__4316__auto__ = cljs.core.chunk_first.call(null,seq__10823__$1);{
var G__10835 = cljs.core.chunk_rest.call(null,seq__10823__$1);
var G__10836 = c__4316__auto__;
var G__10837 = cljs.core.count.call(null,c__4316__auto__);
var G__10838 = (0);
seq__10823 = G__10835;
chunk__10824 = G__10836;
count__10825 = G__10837;
i__10826 = G__10838;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__10823__$1);goog.events.removeAll(node);
{
var G__10839 = cljs.core.next.call(null,seq__10823__$1);
var G__10840 = null;
var G__10841 = (0);
var G__10842 = (0);
seq__10823 = G__10839;
chunk__10824 = G__10840;
count__10825 = G__10841;
i__10826 = G__10842;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__10827 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10828 = null;var count__10829 = (0);var i__10830 = (0);while(true){
if((i__10830 < count__10829))
{var node = cljs.core._nth.call(null,chunk__10828,i__10830);goog.events.removeAll(node,type__$1);
{
var G__10843 = seq__10827;
var G__10844 = chunk__10828;
var G__10845 = count__10829;
var G__10846 = (i__10830 + (1));
seq__10827 = G__10843;
chunk__10828 = G__10844;
count__10829 = G__10845;
i__10830 = G__10846;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10827);if(temp__4126__auto__)
{var seq__10827__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10827__$1))
{var c__4316__auto__ = cljs.core.chunk_first.call(null,seq__10827__$1);{
var G__10847 = cljs.core.chunk_rest.call(null,seq__10827__$1);
var G__10848 = c__4316__auto__;
var G__10849 = cljs.core.count.call(null,c__4316__auto__);
var G__10850 = (0);
seq__10827 = G__10847;
chunk__10828 = G__10848;
count__10829 = G__10849;
i__10830 = G__10850;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__10827__$1);goog.events.removeAll(node,type__$1);
{
var G__10851 = cljs.core.next.call(null,seq__10827__$1);
var G__10852 = null;
var G__10853 = (0);
var G__10854 = (0);
seq__10827 = G__10851;
chunk__10828 = G__10852;
count__10829 = G__10853;
i__10830 = G__10854;
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
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){return ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4124__auto__ = n.parentNode;if(cljs.core.truth_(temp__4124__auto__))
{var parent = temp__4124__auto__;{
var G__10855 = parent;
var G__10856 = cljs.core.cons.call(null,parent,so_far);
n = G__10855;
so_far = G__10856;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){evt.target = domina.single_node.call(null,source);
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__10865_10873 = cljs.core.seq.call(null,ancestors);var chunk__10866_10874 = null;var count__10867_10875 = (0);var i__10868_10876 = (0);while(true){
if((i__10868_10876 < count__10867_10875))
{var n_10877 = cljs.core._nth.call(null,chunk__10866_10874,i__10868_10876);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_10877;
goog.events.fireListeners(n_10877,evt.type,true,evt);
}
{
var G__10878 = seq__10865_10873;
var G__10879 = chunk__10866_10874;
var G__10880 = count__10867_10875;
var G__10881 = (i__10868_10876 + (1));
seq__10865_10873 = G__10878;
chunk__10866_10874 = G__10879;
count__10867_10875 = G__10880;
i__10868_10876 = G__10881;
continue;
}
} else
{var temp__4126__auto___10882 = cljs.core.seq.call(null,seq__10865_10873);if(temp__4126__auto___10882)
{var seq__10865_10883__$1 = temp__4126__auto___10882;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10865_10883__$1))
{var c__4316__auto___10884 = cljs.core.chunk_first.call(null,seq__10865_10883__$1);{
var G__10885 = cljs.core.chunk_rest.call(null,seq__10865_10883__$1);
var G__10886 = c__4316__auto___10884;
var G__10887 = cljs.core.count.call(null,c__4316__auto___10884);
var G__10888 = (0);
seq__10865_10873 = G__10885;
chunk__10866_10874 = G__10886;
count__10867_10875 = G__10887;
i__10868_10876 = G__10888;
continue;
}
} else
{var n_10889 = cljs.core.first.call(null,seq__10865_10883__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_10889;
goog.events.fireListeners(n_10889,evt.type,true,evt);
}
{
var G__10890 = cljs.core.next.call(null,seq__10865_10883__$1);
var G__10891 = null;
var G__10892 = (0);
var G__10893 = (0);
seq__10865_10873 = G__10890;
chunk__10866_10874 = G__10891;
count__10867_10875 = G__10892;
i__10868_10876 = G__10893;
continue;
}
}
} else
{}
}
break;
}
var seq__10869_10894 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__10870_10895 = null;var count__10871_10896 = (0);var i__10872_10897 = (0);while(true){
if((i__10872_10897 < count__10871_10896))
{var n_10898 = cljs.core._nth.call(null,chunk__10870_10895,i__10872_10897);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_10898;
goog.events.fireListeners(n_10898,evt.type,false,evt);
}
{
var G__10899 = seq__10869_10894;
var G__10900 = chunk__10870_10895;
var G__10901 = count__10871_10896;
var G__10902 = (i__10872_10897 + (1));
seq__10869_10894 = G__10899;
chunk__10870_10895 = G__10900;
count__10871_10896 = G__10901;
i__10872_10897 = G__10902;
continue;
}
} else
{var temp__4126__auto___10903 = cljs.core.seq.call(null,seq__10869_10894);if(temp__4126__auto___10903)
{var seq__10869_10904__$1 = temp__4126__auto___10903;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10869_10904__$1))
{var c__4316__auto___10905 = cljs.core.chunk_first.call(null,seq__10869_10904__$1);{
var G__10906 = cljs.core.chunk_rest.call(null,seq__10869_10904__$1);
var G__10907 = c__4316__auto___10905;
var G__10908 = cljs.core.count.call(null,c__4316__auto___10905);
var G__10909 = (0);
seq__10869_10894 = G__10906;
chunk__10870_10895 = G__10907;
count__10871_10896 = G__10908;
i__10872_10897 = G__10909;
continue;
}
} else
{var n_10910 = cljs.core.first.call(null,seq__10869_10904__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_10910;
goog.events.fireListeners(n_10910,evt.type,false,evt);
}
{
var G__10911 = cljs.core.next.call(null,seq__10869_10904__$1);
var G__10912 = null;
var G__10913 = (0);
var G__10914 = (0);
seq__10869_10894 = G__10911;
chunk__10870_10895 = G__10912;
count__10871_10896 = G__10913;
i__10872_10897 = G__10914;
continue;
}
}
} else
{}
}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3548__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3548__auto__))
{return o.dispatchEvent;
} else
{return and__3548__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__10921_10927 = cljs.core.seq.call(null,evt_map);var chunk__10922_10928 = null;var count__10923_10929 = (0);var i__10924_10930 = (0);while(true){
if((i__10924_10930 < count__10923_10929))
{var vec__10925_10931 = cljs.core._nth.call(null,chunk__10922_10928,i__10924_10930);var k_10932 = cljs.core.nth.call(null,vec__10925_10931,(0),null);var v_10933 = cljs.core.nth.call(null,vec__10925_10931,(1),null);(evt[k_10932] = v_10933);
{
var G__10934 = seq__10921_10927;
var G__10935 = chunk__10922_10928;
var G__10936 = count__10923_10929;
var G__10937 = (i__10924_10930 + (1));
seq__10921_10927 = G__10934;
chunk__10922_10928 = G__10935;
count__10923_10929 = G__10936;
i__10924_10930 = G__10937;
continue;
}
} else
{var temp__4126__auto___10938 = cljs.core.seq.call(null,seq__10921_10927);if(temp__4126__auto___10938)
{var seq__10921_10939__$1 = temp__4126__auto___10938;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10921_10939__$1))
{var c__4316__auto___10940 = cljs.core.chunk_first.call(null,seq__10921_10939__$1);{
var G__10941 = cljs.core.chunk_rest.call(null,seq__10921_10939__$1);
var G__10942 = c__4316__auto___10940;
var G__10943 = cljs.core.count.call(null,c__4316__auto___10940);
var G__10944 = (0);
seq__10921_10927 = G__10941;
chunk__10922_10928 = G__10942;
count__10923_10929 = G__10943;
i__10924_10930 = G__10944;
continue;
}
} else
{var vec__10926_10945 = cljs.core.first.call(null,seq__10921_10939__$1);var k_10946 = cljs.core.nth.call(null,vec__10926_10945,(0),null);var v_10947 = cljs.core.nth.call(null,vec__10926_10945,(1),null);(evt[k_10946] = v_10947);
{
var G__10948 = cljs.core.next.call(null,seq__10921_10939__$1);
var G__10949 = null;
var G__10950 = (0);
var G__10951 = (0);
seq__10921_10927 = G__10948;
chunk__10922_10928 = G__10949;
count__10923_10929 = G__10950;
i__10924_10930 = G__10951;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__10952_SHARP_){return goog.events.getListeners(p1__10952_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map