// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj5336 = {};return obj5336;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t5340 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t5340 = (function (evt,f,create_listener_function,meta5341){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta5341 = meta5341;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t5340.cljs$lang$type = true;
domina.events.t5340.cljs$lang$ctorStr = "domina.events/t5340";
domina.events.t5340.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"domina.events/t5340");
});
domina.events.t5340.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t5340.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3560__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return not_found;
}
});
domina.events.t5340.prototype.domina$events$Event$ = true;
domina.events.t5340.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t5340.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t5340.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t5340.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t5340.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t5340.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t5340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5342){var self__ = this;
var _5342__$1 = this;return self__.meta5341;
});
domina.events.t5340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5342,meta5341__$1){var self__ = this;
var _5342__$1 = this;return (new domina.events.t5340(self__.evt,self__.f,self__.create_listener_function,meta5341__$1));
});
domina.events.__GT_t5340 = (function __GT_t5340(evt__$1,f__$1,create_listener_function__$1,meta5341){return (new domina.events.t5340(evt__$1,f__$1,create_listener_function__$1,meta5341));
});
}
return (new domina.events.t5340(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4285__auto__ = ((function (f,t){
return (function iter__5347(s__5348){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__5348__$1 = s__5348;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5348__$1);if(temp__4126__auto__)
{var s__5348__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5348__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__5348__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__5350 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__5349 = (0);while(true){
if((i__5349 < size__4284__auto__))
{var node = cljs.core._nth.call(null,c__4283__auto__,i__5349);cljs.core.chunk_append.call(null,b__5350,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__5351 = (i__5349 + (1));
i__5349 = G__5351;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5350),iter__5347.call(null,cljs.core.chunk_rest.call(null,s__5348__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5350),null);
}
} else
{var node = cljs.core.first.call(null,s__5348__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__5347.call(null,cljs.core.rest.call(null,s__5348__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__5360 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__5361 = null;var count__5362 = (0);var i__5363 = (0);while(true){
if((i__5363 < count__5362))
{var node = cljs.core._nth.call(null,chunk__5361,i__5363);goog.events.removeAll(node);
{
var G__5368 = seq__5360;
var G__5369 = chunk__5361;
var G__5370 = count__5362;
var G__5371 = (i__5363 + (1));
seq__5360 = G__5368;
chunk__5361 = G__5369;
count__5362 = G__5370;
i__5363 = G__5371;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5360);if(temp__4126__auto__)
{var seq__5360__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5360__$1))
{var c__4316__auto__ = cljs.core.chunk_first.call(null,seq__5360__$1);{
var G__5372 = cljs.core.chunk_rest.call(null,seq__5360__$1);
var G__5373 = c__4316__auto__;
var G__5374 = cljs.core.count.call(null,c__4316__auto__);
var G__5375 = (0);
seq__5360 = G__5372;
chunk__5361 = G__5373;
count__5362 = G__5374;
i__5363 = G__5375;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__5360__$1);goog.events.removeAll(node);
{
var G__5376 = cljs.core.next.call(null,seq__5360__$1);
var G__5377 = null;
var G__5378 = (0);
var G__5379 = (0);
seq__5360 = G__5376;
chunk__5361 = G__5377;
count__5362 = G__5378;
i__5363 = G__5379;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__5364 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__5365 = null;var count__5366 = (0);var i__5367 = (0);while(true){
if((i__5367 < count__5366))
{var node = cljs.core._nth.call(null,chunk__5365,i__5367);goog.events.removeAll(node,type__$1);
{
var G__5380 = seq__5364;
var G__5381 = chunk__5365;
var G__5382 = count__5366;
var G__5383 = (i__5367 + (1));
seq__5364 = G__5380;
chunk__5365 = G__5381;
count__5366 = G__5382;
i__5367 = G__5383;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5364);if(temp__4126__auto__)
{var seq__5364__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5364__$1))
{var c__4316__auto__ = cljs.core.chunk_first.call(null,seq__5364__$1);{
var G__5384 = cljs.core.chunk_rest.call(null,seq__5364__$1);
var G__5385 = c__4316__auto__;
var G__5386 = cljs.core.count.call(null,c__4316__auto__);
var G__5387 = (0);
seq__5364 = G__5384;
chunk__5365 = G__5385;
count__5366 = G__5386;
i__5367 = G__5387;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__5364__$1);goog.events.removeAll(node,type__$1);
{
var G__5388 = cljs.core.next.call(null,seq__5364__$1);
var G__5389 = null;
var G__5390 = (0);
var G__5391 = (0);
seq__5364 = G__5388;
chunk__5365 = G__5389;
count__5366 = G__5390;
i__5367 = G__5391;
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
var G__5392 = parent;
var G__5393 = cljs.core.cons.call(null,parent,so_far);
n = G__5392;
so_far = G__5393;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__5402_5410 = cljs.core.seq.call(null,ancestors);var chunk__5403_5411 = null;var count__5404_5412 = (0);var i__5405_5413 = (0);while(true){
if((i__5405_5413 < count__5404_5412))
{var n_5414 = cljs.core._nth.call(null,chunk__5403_5411,i__5405_5413);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_5414;
goog.events.fireListeners(n_5414,evt.type,true,evt);
}
{
var G__5415 = seq__5402_5410;
var G__5416 = chunk__5403_5411;
var G__5417 = count__5404_5412;
var G__5418 = (i__5405_5413 + (1));
seq__5402_5410 = G__5415;
chunk__5403_5411 = G__5416;
count__5404_5412 = G__5417;
i__5405_5413 = G__5418;
continue;
}
} else
{var temp__4126__auto___5419 = cljs.core.seq.call(null,seq__5402_5410);if(temp__4126__auto___5419)
{var seq__5402_5420__$1 = temp__4126__auto___5419;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5402_5420__$1))
{var c__4316__auto___5421 = cljs.core.chunk_first.call(null,seq__5402_5420__$1);{
var G__5422 = cljs.core.chunk_rest.call(null,seq__5402_5420__$1);
var G__5423 = c__4316__auto___5421;
var G__5424 = cljs.core.count.call(null,c__4316__auto___5421);
var G__5425 = (0);
seq__5402_5410 = G__5422;
chunk__5403_5411 = G__5423;
count__5404_5412 = G__5424;
i__5405_5413 = G__5425;
continue;
}
} else
{var n_5426 = cljs.core.first.call(null,seq__5402_5420__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_5426;
goog.events.fireListeners(n_5426,evt.type,true,evt);
}
{
var G__5427 = cljs.core.next.call(null,seq__5402_5420__$1);
var G__5428 = null;
var G__5429 = (0);
var G__5430 = (0);
seq__5402_5410 = G__5427;
chunk__5403_5411 = G__5428;
count__5404_5412 = G__5429;
i__5405_5413 = G__5430;
continue;
}
}
} else
{}
}
break;
}
var seq__5406_5431 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__5407_5432 = null;var count__5408_5433 = (0);var i__5409_5434 = (0);while(true){
if((i__5409_5434 < count__5408_5433))
{var n_5435 = cljs.core._nth.call(null,chunk__5407_5432,i__5409_5434);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_5435;
goog.events.fireListeners(n_5435,evt.type,false,evt);
}
{
var G__5436 = seq__5406_5431;
var G__5437 = chunk__5407_5432;
var G__5438 = count__5408_5433;
var G__5439 = (i__5409_5434 + (1));
seq__5406_5431 = G__5436;
chunk__5407_5432 = G__5437;
count__5408_5433 = G__5438;
i__5409_5434 = G__5439;
continue;
}
} else
{var temp__4126__auto___5440 = cljs.core.seq.call(null,seq__5406_5431);if(temp__4126__auto___5440)
{var seq__5406_5441__$1 = temp__4126__auto___5440;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5406_5441__$1))
{var c__4316__auto___5442 = cljs.core.chunk_first.call(null,seq__5406_5441__$1);{
var G__5443 = cljs.core.chunk_rest.call(null,seq__5406_5441__$1);
var G__5444 = c__4316__auto___5442;
var G__5445 = cljs.core.count.call(null,c__4316__auto___5442);
var G__5446 = (0);
seq__5406_5431 = G__5443;
chunk__5407_5432 = G__5444;
count__5408_5433 = G__5445;
i__5409_5434 = G__5446;
continue;
}
} else
{var n_5447 = cljs.core.first.call(null,seq__5406_5441__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_5447;
goog.events.fireListeners(n_5447,evt.type,false,evt);
}
{
var G__5448 = cljs.core.next.call(null,seq__5406_5441__$1);
var G__5449 = null;
var G__5450 = (0);
var G__5451 = (0);
seq__5406_5431 = G__5448;
chunk__5407_5432 = G__5449;
count__5408_5433 = G__5450;
i__5409_5434 = G__5451;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__5458_5464 = cljs.core.seq.call(null,evt_map);var chunk__5459_5465 = null;var count__5460_5466 = (0);var i__5461_5467 = (0);while(true){
if((i__5461_5467 < count__5460_5466))
{var vec__5462_5468 = cljs.core._nth.call(null,chunk__5459_5465,i__5461_5467);var k_5469 = cljs.core.nth.call(null,vec__5462_5468,(0),null);var v_5470 = cljs.core.nth.call(null,vec__5462_5468,(1),null);(evt[k_5469] = v_5470);
{
var G__5471 = seq__5458_5464;
var G__5472 = chunk__5459_5465;
var G__5473 = count__5460_5466;
var G__5474 = (i__5461_5467 + (1));
seq__5458_5464 = G__5471;
chunk__5459_5465 = G__5472;
count__5460_5466 = G__5473;
i__5461_5467 = G__5474;
continue;
}
} else
{var temp__4126__auto___5475 = cljs.core.seq.call(null,seq__5458_5464);if(temp__4126__auto___5475)
{var seq__5458_5476__$1 = temp__4126__auto___5475;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5458_5476__$1))
{var c__4316__auto___5477 = cljs.core.chunk_first.call(null,seq__5458_5476__$1);{
var G__5478 = cljs.core.chunk_rest.call(null,seq__5458_5476__$1);
var G__5479 = c__4316__auto___5477;
var G__5480 = cljs.core.count.call(null,c__4316__auto___5477);
var G__5481 = (0);
seq__5458_5464 = G__5478;
chunk__5459_5465 = G__5479;
count__5460_5466 = G__5480;
i__5461_5467 = G__5481;
continue;
}
} else
{var vec__5463_5482 = cljs.core.first.call(null,seq__5458_5476__$1);var k_5483 = cljs.core.nth.call(null,vec__5463_5482,(0),null);var v_5484 = cljs.core.nth.call(null,vec__5463_5482,(1),null);(evt[k_5483] = v_5484);
{
var G__5485 = cljs.core.next.call(null,seq__5458_5476__$1);
var G__5486 = null;
var G__5487 = (0);
var G__5488 = (0);
seq__5458_5464 = G__5485;
chunk__5459_5465 = G__5486;
count__5460_5466 = G__5487;
i__5461_5467 = G__5488;
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
return (function (p1__5489_SHARP_){return goog.events.getListeners(p1__5489_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map