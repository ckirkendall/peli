// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22431_22445 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22432_22446 = null;
var count__22433_22447 = (0);
var i__22434_22448 = (0);
while(true){
if((i__22434_22448 < count__22433_22447)){
var f_22449 = cljs.core._nth.call(null,chunk__22432_22446,i__22434_22448);
cljs.core.println.call(null,"  ",f_22449);

var G__22450 = seq__22431_22445;
var G__22451 = chunk__22432_22446;
var G__22452 = count__22433_22447;
var G__22453 = (i__22434_22448 + (1));
seq__22431_22445 = G__22450;
chunk__22432_22446 = G__22451;
count__22433_22447 = G__22452;
i__22434_22448 = G__22453;
continue;
} else {
var temp__4425__auto___22454 = cljs.core.seq.call(null,seq__22431_22445);
if(temp__4425__auto___22454){
var seq__22431_22455__$1 = temp__4425__auto___22454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22431_22455__$1)){
var c__17133__auto___22456 = cljs.core.chunk_first.call(null,seq__22431_22455__$1);
var G__22457 = cljs.core.chunk_rest.call(null,seq__22431_22455__$1);
var G__22458 = c__17133__auto___22456;
var G__22459 = cljs.core.count.call(null,c__17133__auto___22456);
var G__22460 = (0);
seq__22431_22445 = G__22457;
chunk__22432_22446 = G__22458;
count__22433_22447 = G__22459;
i__22434_22448 = G__22460;
continue;
} else {
var f_22461 = cljs.core.first.call(null,seq__22431_22455__$1);
cljs.core.println.call(null,"  ",f_22461);

var G__22462 = cljs.core.next.call(null,seq__22431_22455__$1);
var G__22463 = null;
var G__22464 = (0);
var G__22465 = (0);
seq__22431_22445 = G__22462;
chunk__22432_22446 = G__22463;
count__22433_22447 = G__22464;
i__22434_22448 = G__22465;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22466 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16330__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16330__auto__)){
return or__16330__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_22466);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_22466)))?cljs.core.second.call(null,arglists_22466):arglists_22466));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22435 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22436 = null;
var count__22437 = (0);
var i__22438 = (0);
while(true){
if((i__22438 < count__22437)){
var vec__22439 = cljs.core._nth.call(null,chunk__22436,i__22438);
var name = cljs.core.nth.call(null,vec__22439,(0),null);
var map__22440 = cljs.core.nth.call(null,vec__22439,(1),null);
var map__22440__$1 = ((((!((map__22440 == null)))?((((map__22440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22440):map__22440);
var doc = cljs.core.get.call(null,map__22440__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__22440__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__22467 = seq__22435;
var G__22468 = chunk__22436;
var G__22469 = count__22437;
var G__22470 = (i__22438 + (1));
seq__22435 = G__22467;
chunk__22436 = G__22468;
count__22437 = G__22469;
i__22438 = G__22470;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22435);
if(temp__4425__auto__){
var seq__22435__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22435__$1)){
var c__17133__auto__ = cljs.core.chunk_first.call(null,seq__22435__$1);
var G__22471 = cljs.core.chunk_rest.call(null,seq__22435__$1);
var G__22472 = c__17133__auto__;
var G__22473 = cljs.core.count.call(null,c__17133__auto__);
var G__22474 = (0);
seq__22435 = G__22471;
chunk__22436 = G__22472;
count__22437 = G__22473;
i__22438 = G__22474;
continue;
} else {
var vec__22442 = cljs.core.first.call(null,seq__22435__$1);
var name = cljs.core.nth.call(null,vec__22442,(0),null);
var map__22443 = cljs.core.nth.call(null,vec__22442,(1),null);
var map__22443__$1 = ((((!((map__22443 == null)))?((((map__22443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22443):map__22443);
var doc = cljs.core.get.call(null,map__22443__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__22443__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__22475 = cljs.core.next.call(null,seq__22435__$1);
var G__22476 = null;
var G__22477 = (0);
var G__22478 = (0);
seq__22435 = G__22475;
chunk__22436 = G__22476;
count__22437 = G__22477;
i__22438 = G__22478;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1446810622330