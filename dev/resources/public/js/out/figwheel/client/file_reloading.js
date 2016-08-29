// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16330__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16330__auto__){
return or__16330__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16330__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16330__auto__)){
return or__16330__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22483_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22483_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__22488 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22489 = null;
var count__22490 = (0);
var i__22491 = (0);
while(true){
if((i__22491 < count__22490)){
var n = cljs.core._nth.call(null,chunk__22489,i__22491);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22492 = seq__22488;
var G__22493 = chunk__22489;
var G__22494 = count__22490;
var G__22495 = (i__22491 + (1));
seq__22488 = G__22492;
chunk__22489 = G__22493;
count__22490 = G__22494;
i__22491 = G__22495;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22488);
if(temp__4425__auto__){
var seq__22488__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22488__$1)){
var c__17133__auto__ = cljs.core.chunk_first.call(null,seq__22488__$1);
var G__22496 = cljs.core.chunk_rest.call(null,seq__22488__$1);
var G__22497 = c__17133__auto__;
var G__22498 = cljs.core.count.call(null,c__17133__auto__);
var G__22499 = (0);
seq__22488 = G__22496;
chunk__22489 = G__22497;
count__22490 = G__22498;
i__22491 = G__22499;
continue;
} else {
var n = cljs.core.first.call(null,seq__22488__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22500 = cljs.core.next.call(null,seq__22488__$1);
var G__22501 = null;
var G__22502 = (0);
var G__22503 = (0);
seq__22488 = G__22500;
chunk__22489 = G__22501;
count__22490 = G__22502;
i__22491 = G__22503;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__22542_22549 = cljs.core.seq.call(null,deps);
var chunk__22543_22550 = null;
var count__22544_22551 = (0);
var i__22545_22552 = (0);
while(true){
if((i__22545_22552 < count__22544_22551)){
var dep_22553 = cljs.core._nth.call(null,chunk__22543_22550,i__22545_22552);
topo_sort_helper_STAR_.call(null,dep_22553,(depth + (1)),state);

var G__22554 = seq__22542_22549;
var G__22555 = chunk__22543_22550;
var G__22556 = count__22544_22551;
var G__22557 = (i__22545_22552 + (1));
seq__22542_22549 = G__22554;
chunk__22543_22550 = G__22555;
count__22544_22551 = G__22556;
i__22545_22552 = G__22557;
continue;
} else {
var temp__4425__auto___22558 = cljs.core.seq.call(null,seq__22542_22549);
if(temp__4425__auto___22558){
var seq__22542_22559__$1 = temp__4425__auto___22558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22542_22559__$1)){
var c__17133__auto___22560 = cljs.core.chunk_first.call(null,seq__22542_22559__$1);
var G__22561 = cljs.core.chunk_rest.call(null,seq__22542_22559__$1);
var G__22562 = c__17133__auto___22560;
var G__22563 = cljs.core.count.call(null,c__17133__auto___22560);
var G__22564 = (0);
seq__22542_22549 = G__22561;
chunk__22543_22550 = G__22562;
count__22544_22551 = G__22563;
i__22545_22552 = G__22564;
continue;
} else {
var dep_22565 = cljs.core.first.call(null,seq__22542_22559__$1);
topo_sort_helper_STAR_.call(null,dep_22565,(depth + (1)),state);

var G__22566 = cljs.core.next.call(null,seq__22542_22559__$1);
var G__22567 = null;
var G__22568 = (0);
var G__22569 = (0);
seq__22542_22549 = G__22566;
chunk__22543_22550 = G__22567;
count__22544_22551 = G__22568;
i__22545_22552 = G__22569;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22546){
var vec__22548 = p__22546;
var x = cljs.core.nth.call(null,vec__22548,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22548,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22548,x,xs,get_deps__$1){
return (function (p1__22504_SHARP_){
return clojure.set.difference.call(null,p1__22504_SHARP_,x);
});})(vec__22548,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__22582 = cljs.core.seq.call(null,provides);
var chunk__22583 = null;
var count__22584 = (0);
var i__22585 = (0);
while(true){
if((i__22585 < count__22584)){
var prov = cljs.core._nth.call(null,chunk__22583,i__22585);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22586_22594 = cljs.core.seq.call(null,requires);
var chunk__22587_22595 = null;
var count__22588_22596 = (0);
var i__22589_22597 = (0);
while(true){
if((i__22589_22597 < count__22588_22596)){
var req_22598 = cljs.core._nth.call(null,chunk__22587_22595,i__22589_22597);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22598,prov);

var G__22599 = seq__22586_22594;
var G__22600 = chunk__22587_22595;
var G__22601 = count__22588_22596;
var G__22602 = (i__22589_22597 + (1));
seq__22586_22594 = G__22599;
chunk__22587_22595 = G__22600;
count__22588_22596 = G__22601;
i__22589_22597 = G__22602;
continue;
} else {
var temp__4425__auto___22603 = cljs.core.seq.call(null,seq__22586_22594);
if(temp__4425__auto___22603){
var seq__22586_22604__$1 = temp__4425__auto___22603;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22586_22604__$1)){
var c__17133__auto___22605 = cljs.core.chunk_first.call(null,seq__22586_22604__$1);
var G__22606 = cljs.core.chunk_rest.call(null,seq__22586_22604__$1);
var G__22607 = c__17133__auto___22605;
var G__22608 = cljs.core.count.call(null,c__17133__auto___22605);
var G__22609 = (0);
seq__22586_22594 = G__22606;
chunk__22587_22595 = G__22607;
count__22588_22596 = G__22608;
i__22589_22597 = G__22609;
continue;
} else {
var req_22610 = cljs.core.first.call(null,seq__22586_22604__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22610,prov);

var G__22611 = cljs.core.next.call(null,seq__22586_22604__$1);
var G__22612 = null;
var G__22613 = (0);
var G__22614 = (0);
seq__22586_22594 = G__22611;
chunk__22587_22595 = G__22612;
count__22588_22596 = G__22613;
i__22589_22597 = G__22614;
continue;
}
} else {
}
}
break;
}

var G__22615 = seq__22582;
var G__22616 = chunk__22583;
var G__22617 = count__22584;
var G__22618 = (i__22585 + (1));
seq__22582 = G__22615;
chunk__22583 = G__22616;
count__22584 = G__22617;
i__22585 = G__22618;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22582);
if(temp__4425__auto__){
var seq__22582__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22582__$1)){
var c__17133__auto__ = cljs.core.chunk_first.call(null,seq__22582__$1);
var G__22619 = cljs.core.chunk_rest.call(null,seq__22582__$1);
var G__22620 = c__17133__auto__;
var G__22621 = cljs.core.count.call(null,c__17133__auto__);
var G__22622 = (0);
seq__22582 = G__22619;
chunk__22583 = G__22620;
count__22584 = G__22621;
i__22585 = G__22622;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22582__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22590_22623 = cljs.core.seq.call(null,requires);
var chunk__22591_22624 = null;
var count__22592_22625 = (0);
var i__22593_22626 = (0);
while(true){
if((i__22593_22626 < count__22592_22625)){
var req_22627 = cljs.core._nth.call(null,chunk__22591_22624,i__22593_22626);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22627,prov);

var G__22628 = seq__22590_22623;
var G__22629 = chunk__22591_22624;
var G__22630 = count__22592_22625;
var G__22631 = (i__22593_22626 + (1));
seq__22590_22623 = G__22628;
chunk__22591_22624 = G__22629;
count__22592_22625 = G__22630;
i__22593_22626 = G__22631;
continue;
} else {
var temp__4425__auto___22632__$1 = cljs.core.seq.call(null,seq__22590_22623);
if(temp__4425__auto___22632__$1){
var seq__22590_22633__$1 = temp__4425__auto___22632__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22590_22633__$1)){
var c__17133__auto___22634 = cljs.core.chunk_first.call(null,seq__22590_22633__$1);
var G__22635 = cljs.core.chunk_rest.call(null,seq__22590_22633__$1);
var G__22636 = c__17133__auto___22634;
var G__22637 = cljs.core.count.call(null,c__17133__auto___22634);
var G__22638 = (0);
seq__22590_22623 = G__22635;
chunk__22591_22624 = G__22636;
count__22592_22625 = G__22637;
i__22593_22626 = G__22638;
continue;
} else {
var req_22639 = cljs.core.first.call(null,seq__22590_22633__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22639,prov);

var G__22640 = cljs.core.next.call(null,seq__22590_22633__$1);
var G__22641 = null;
var G__22642 = (0);
var G__22643 = (0);
seq__22590_22623 = G__22640;
chunk__22591_22624 = G__22641;
count__22592_22625 = G__22642;
i__22593_22626 = G__22643;
continue;
}
} else {
}
}
break;
}

var G__22644 = cljs.core.next.call(null,seq__22582__$1);
var G__22645 = null;
var G__22646 = (0);
var G__22647 = (0);
seq__22582 = G__22644;
chunk__22583 = G__22645;
count__22584 = G__22646;
i__22585 = G__22647;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__22652_22656 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22653_22657 = null;
var count__22654_22658 = (0);
var i__22655_22659 = (0);
while(true){
if((i__22655_22659 < count__22654_22658)){
var ns_22660 = cljs.core._nth.call(null,chunk__22653_22657,i__22655_22659);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22660);

var G__22661 = seq__22652_22656;
var G__22662 = chunk__22653_22657;
var G__22663 = count__22654_22658;
var G__22664 = (i__22655_22659 + (1));
seq__22652_22656 = G__22661;
chunk__22653_22657 = G__22662;
count__22654_22658 = G__22663;
i__22655_22659 = G__22664;
continue;
} else {
var temp__4425__auto___22665 = cljs.core.seq.call(null,seq__22652_22656);
if(temp__4425__auto___22665){
var seq__22652_22666__$1 = temp__4425__auto___22665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22652_22666__$1)){
var c__17133__auto___22667 = cljs.core.chunk_first.call(null,seq__22652_22666__$1);
var G__22668 = cljs.core.chunk_rest.call(null,seq__22652_22666__$1);
var G__22669 = c__17133__auto___22667;
var G__22670 = cljs.core.count.call(null,c__17133__auto___22667);
var G__22671 = (0);
seq__22652_22656 = G__22668;
chunk__22653_22657 = G__22669;
count__22654_22658 = G__22670;
i__22655_22659 = G__22671;
continue;
} else {
var ns_22672 = cljs.core.first.call(null,seq__22652_22666__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22672);

var G__22673 = cljs.core.next.call(null,seq__22652_22666__$1);
var G__22674 = null;
var G__22675 = (0);
var G__22676 = (0);
seq__22652_22656 = G__22673;
chunk__22653_22657 = G__22674;
count__22654_22658 = G__22675;
i__22655_22659 = G__22676;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16330__auto__ = goog.require__;
if(cljs.core.truth_(or__16330__auto__)){
return or__16330__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__22677__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22677 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22678__i = 0, G__22678__a = new Array(arguments.length -  0);
while (G__22678__i < G__22678__a.length) {G__22678__a[G__22678__i] = arguments[G__22678__i + 0]; ++G__22678__i;}
  args = new cljs.core.IndexedSeq(G__22678__a,0);
} 
return G__22677__delegate.call(this,args);};
G__22677.cljs$lang$maxFixedArity = 0;
G__22677.cljs$lang$applyTo = (function (arglist__22679){
var args = cljs.core.seq(arglist__22679);
return G__22677__delegate(args);
});
G__22677.cljs$core$IFn$_invoke$arity$variadic = G__22677__delegate;
return G__22677;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22681 = cljs.core._EQ_;
var expr__22682 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22681.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22682))){
var path_parts = ((function (pred__22681,expr__22682){
return (function (p1__22680_SHARP_){
return clojure.string.split.call(null,p1__22680_SHARP_,/[\/\\]/);
});})(pred__22681,expr__22682))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22681,expr__22682){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e22684){if((e22684 instanceof Error)){
var e = e22684;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22684;

}
}})());
});
;})(path_parts,sep,root,pred__22681,expr__22682))
} else {
if(cljs.core.truth_(pred__22681.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22682))){
return ((function (pred__22681,expr__22682){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22681,expr__22682){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22681,expr__22682))
);

return deferred.addErrback(((function (deferred,pred__22681,expr__22682){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22681,expr__22682))
);
});
;})(pred__22681,expr__22682))
} else {
return ((function (pred__22681,expr__22682){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22681,expr__22682))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22685,callback){
var map__22688 = p__22685;
var map__22688__$1 = ((((!((map__22688 == null)))?((((map__22688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22688):map__22688);
var file_msg = map__22688__$1;
var request_url = cljs.core.get.call(null,map__22688__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22688,map__22688__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22688,map__22688__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19446__auto__){
return (function (){
var f__19447__auto__ = (function (){var switch__19425__auto__ = ((function (c__19446__auto__){
return (function (state_22712){
var state_val_22713 = (state_22712[(1)]);
if((state_val_22713 === (7))){
var inst_22708 = (state_22712[(2)]);
var state_22712__$1 = state_22712;
var statearr_22714_22734 = state_22712__$1;
(statearr_22714_22734[(2)] = inst_22708);

(statearr_22714_22734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22713 === (1))){
var state_22712__$1 = state_22712;
var statearr_22715_22735 = state_22712__$1;
(statearr_22715_22735[(2)] = null);

(statearr_22715_22735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22713 === (4))){
var inst_22692 = (state_22712[(7)]);
var inst_22692__$1 = (state_22712[(2)]);
var state_22712__$1 = (function (){var statearr_22716 = state_22712;
(statearr_22716[(7)] = inst_22692__$1);

return statearr_22716;
})();
if(cljs.core.truth_(inst_22692__$1)){
var statearr_22717_22736 = state_22712__$1;
(statearr_22717_22736[(1)] = (5));

} else {
var statearr_22718_22737 = state_22712__$1;
(statearr_22718_22737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22713 === (6))){
var state_22712__$1 = state_22712;
var statearr_22719_22738 = state_22712__$1;
(statearr_22719_22738[(2)] = null);

(statearr_22719_22738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22713 === (3))){
var inst_22710 = (state_22712[(2)]);
var state_22712__$1 = state_22712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22712__$1,inst_22710);
} else {
if((state_val_22713 === (2))){
var state_22712__$1 = state_22712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22712__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22713 === (11))){
var inst_22704 = (state_22712[(2)]);
var state_22712__$1 = (function (){var statearr_22720 = state_22712;
(statearr_22720[(8)] = inst_22704);

return statearr_22720;
})();
var statearr_22721_22739 = state_22712__$1;
(statearr_22721_22739[(2)] = null);

(statearr_22721_22739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22713 === (9))){
var inst_22696 = (state_22712[(9)]);
var inst_22698 = (state_22712[(10)]);
var inst_22700 = inst_22698.call(null,inst_22696);
var state_22712__$1 = state_22712;
var statearr_22722_22740 = state_22712__$1;
(statearr_22722_22740[(2)] = inst_22700);

(statearr_22722_22740[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22713 === (5))){
var inst_22692 = (state_22712[(7)]);
var inst_22694 = figwheel.client.file_reloading.blocking_load.call(null,inst_22692);
var state_22712__$1 = state_22712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22712__$1,(8),inst_22694);
} else {
if((state_val_22713 === (10))){
var inst_22696 = (state_22712[(9)]);
var inst_22702 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22696);
var state_22712__$1 = state_22712;
var statearr_22723_22741 = state_22712__$1;
(statearr_22723_22741[(2)] = inst_22702);

(statearr_22723_22741[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22713 === (8))){
var inst_22692 = (state_22712[(7)]);
var inst_22698 = (state_22712[(10)]);
var inst_22696 = (state_22712[(2)]);
var inst_22697 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22698__$1 = cljs.core.get.call(null,inst_22697,inst_22692);
var state_22712__$1 = (function (){var statearr_22724 = state_22712;
(statearr_22724[(9)] = inst_22696);

(statearr_22724[(10)] = inst_22698__$1);

return statearr_22724;
})();
if(cljs.core.truth_(inst_22698__$1)){
var statearr_22725_22742 = state_22712__$1;
(statearr_22725_22742[(1)] = (9));

} else {
var statearr_22726_22743 = state_22712__$1;
(statearr_22726_22743[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19446__auto__))
;
return ((function (switch__19425__auto__,c__19446__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19426__auto__ = null;
var figwheel$client$file_reloading$state_machine__19426__auto____0 = (function (){
var statearr_22730 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22730[(0)] = figwheel$client$file_reloading$state_machine__19426__auto__);

(statearr_22730[(1)] = (1));

return statearr_22730;
});
var figwheel$client$file_reloading$state_machine__19426__auto____1 = (function (state_22712){
while(true){
var ret_value__19427__auto__ = (function (){try{while(true){
var result__19428__auto__ = switch__19425__auto__.call(null,state_22712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19428__auto__;
}
break;
}
}catch (e22731){if((e22731 instanceof Object)){
var ex__19429__auto__ = e22731;
var statearr_22732_22744 = state_22712;
(statearr_22732_22744[(5)] = ex__19429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22745 = state_22712;
state_22712 = G__22745;
continue;
} else {
return ret_value__19427__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19426__auto__ = function(state_22712){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19426__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19426__auto____1.call(this,state_22712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19426__auto____0;
figwheel$client$file_reloading$state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19426__auto____1;
return figwheel$client$file_reloading$state_machine__19426__auto__;
})()
;})(switch__19425__auto__,c__19446__auto__))
})();
var state__19448__auto__ = (function (){var statearr_22733 = f__19447__auto__.call(null);
(statearr_22733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19446__auto__);

return statearr_22733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19448__auto__);
});})(c__19446__auto__))
);

return c__19446__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22746,callback){
var map__22749 = p__22746;
var map__22749__$1 = ((((!((map__22749 == null)))?((((map__22749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22749):map__22749);
var file_msg = map__22749__$1;
var namespace = cljs.core.get.call(null,map__22749__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22749,map__22749__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22749,map__22749__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22751){
var map__22754 = p__22751;
var map__22754__$1 = ((((!((map__22754 == null)))?((((map__22754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22754):map__22754);
var file_msg = map__22754__$1;
var namespace = cljs.core.get.call(null,map__22754__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16318__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16318__auto__){
var or__16330__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16330__auto__)){
return or__16330__auto__;
} else {
var or__16330__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16330__auto____$1)){
return or__16330__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16318__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22756,callback){
var map__22759 = p__22756;
var map__22759__$1 = ((((!((map__22759 == null)))?((((map__22759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22759):map__22759);
var file_msg = map__22759__$1;
var request_url = cljs.core.get.call(null,map__22759__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22759__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19446__auto___22847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19446__auto___22847,out){
return (function (){
var f__19447__auto__ = (function (){var switch__19425__auto__ = ((function (c__19446__auto___22847,out){
return (function (state_22829){
var state_val_22830 = (state_22829[(1)]);
if((state_val_22830 === (1))){
var inst_22807 = cljs.core.nth.call(null,files,(0),null);
var inst_22808 = cljs.core.nthnext.call(null,files,(1));
var inst_22809 = files;
var state_22829__$1 = (function (){var statearr_22831 = state_22829;
(statearr_22831[(7)] = inst_22808);

(statearr_22831[(8)] = inst_22809);

(statearr_22831[(9)] = inst_22807);

return statearr_22831;
})();
var statearr_22832_22848 = state_22829__$1;
(statearr_22832_22848[(2)] = null);

(statearr_22832_22848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22830 === (2))){
var inst_22809 = (state_22829[(8)]);
var inst_22812 = (state_22829[(10)]);
var inst_22812__$1 = cljs.core.nth.call(null,inst_22809,(0),null);
var inst_22813 = cljs.core.nthnext.call(null,inst_22809,(1));
var inst_22814 = (inst_22812__$1 == null);
var inst_22815 = cljs.core.not.call(null,inst_22814);
var state_22829__$1 = (function (){var statearr_22833 = state_22829;
(statearr_22833[(11)] = inst_22813);

(statearr_22833[(10)] = inst_22812__$1);

return statearr_22833;
})();
if(inst_22815){
var statearr_22834_22849 = state_22829__$1;
(statearr_22834_22849[(1)] = (4));

} else {
var statearr_22835_22850 = state_22829__$1;
(statearr_22835_22850[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22830 === (3))){
var inst_22827 = (state_22829[(2)]);
var state_22829__$1 = state_22829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22829__$1,inst_22827);
} else {
if((state_val_22830 === (4))){
var inst_22812 = (state_22829[(10)]);
var inst_22817 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22812);
var state_22829__$1 = state_22829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22829__$1,(7),inst_22817);
} else {
if((state_val_22830 === (5))){
var inst_22823 = cljs.core.async.close_BANG_.call(null,out);
var state_22829__$1 = state_22829;
var statearr_22836_22851 = state_22829__$1;
(statearr_22836_22851[(2)] = inst_22823);

(statearr_22836_22851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22830 === (6))){
var inst_22825 = (state_22829[(2)]);
var state_22829__$1 = state_22829;
var statearr_22837_22852 = state_22829__$1;
(statearr_22837_22852[(2)] = inst_22825);

(statearr_22837_22852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22830 === (7))){
var inst_22813 = (state_22829[(11)]);
var inst_22819 = (state_22829[(2)]);
var inst_22820 = cljs.core.async.put_BANG_.call(null,out,inst_22819);
var inst_22809 = inst_22813;
var state_22829__$1 = (function (){var statearr_22838 = state_22829;
(statearr_22838[(8)] = inst_22809);

(statearr_22838[(12)] = inst_22820);

return statearr_22838;
})();
var statearr_22839_22853 = state_22829__$1;
(statearr_22839_22853[(2)] = null);

(statearr_22839_22853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19446__auto___22847,out))
;
return ((function (switch__19425__auto__,c__19446__auto___22847,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19426__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19426__auto____0 = (function (){
var statearr_22843 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22843[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19426__auto__);

(statearr_22843[(1)] = (1));

return statearr_22843;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19426__auto____1 = (function (state_22829){
while(true){
var ret_value__19427__auto__ = (function (){try{while(true){
var result__19428__auto__ = switch__19425__auto__.call(null,state_22829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19428__auto__;
}
break;
}
}catch (e22844){if((e22844 instanceof Object)){
var ex__19429__auto__ = e22844;
var statearr_22845_22854 = state_22829;
(statearr_22845_22854[(5)] = ex__19429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22855 = state_22829;
state_22829 = G__22855;
continue;
} else {
return ret_value__19427__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19426__auto__ = function(state_22829){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19426__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19426__auto____1.call(this,state_22829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19426__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19426__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19426__auto__;
})()
;})(switch__19425__auto__,c__19446__auto___22847,out))
})();
var state__19448__auto__ = (function (){var statearr_22846 = f__19447__auto__.call(null);
(statearr_22846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19446__auto___22847);

return statearr_22846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19448__auto__);
});})(c__19446__auto___22847,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22856,opts){
var map__22860 = p__22856;
var map__22860__$1 = ((((!((map__22860 == null)))?((((map__22860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22860):map__22860);
var eval_body__$1 = cljs.core.get.call(null,map__22860__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22860__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16318__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16318__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16318__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22862){var e = e22862;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__22863_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22863_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__22868){
var vec__22869 = p__22868;
var k = cljs.core.nth.call(null,vec__22869,(0),null);
var v = cljs.core.nth.call(null,vec__22869,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22870){
var vec__22871 = p__22870;
var k = cljs.core.nth.call(null,vec__22871,(0),null);
var v = cljs.core.nth.call(null,vec__22871,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22875,p__22876){
var map__23123 = p__22875;
var map__23123__$1 = ((((!((map__23123 == null)))?((((map__23123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23123):map__23123);
var opts = map__23123__$1;
var before_jsload = cljs.core.get.call(null,map__23123__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__23123__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__23123__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__23124 = p__22876;
var map__23124__$1 = ((((!((map__23124 == null)))?((((map__23124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23124):map__23124);
var msg = map__23124__$1;
var files = cljs.core.get.call(null,map__23124__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__23124__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__23124__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19446__auto__,map__23123,map__23123__$1,opts,before_jsload,on_jsload,reload_dependents,map__23124,map__23124__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19447__auto__ = (function (){var switch__19425__auto__ = ((function (c__19446__auto__,map__23123,map__23123__$1,opts,before_jsload,on_jsload,reload_dependents,map__23124,map__23124__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23277){
var state_val_23278 = (state_23277[(1)]);
if((state_val_23278 === (7))){
var inst_23139 = (state_23277[(7)]);
var inst_23138 = (state_23277[(8)]);
var inst_23140 = (state_23277[(9)]);
var inst_23141 = (state_23277[(10)]);
var inst_23146 = cljs.core._nth.call(null,inst_23139,inst_23141);
var inst_23147 = figwheel.client.file_reloading.eval_body.call(null,inst_23146,opts);
var inst_23148 = (inst_23141 + (1));
var tmp23279 = inst_23139;
var tmp23280 = inst_23138;
var tmp23281 = inst_23140;
var inst_23138__$1 = tmp23280;
var inst_23139__$1 = tmp23279;
var inst_23140__$1 = tmp23281;
var inst_23141__$1 = inst_23148;
var state_23277__$1 = (function (){var statearr_23282 = state_23277;
(statearr_23282[(7)] = inst_23139__$1);

(statearr_23282[(8)] = inst_23138__$1);

(statearr_23282[(9)] = inst_23140__$1);

(statearr_23282[(11)] = inst_23147);

(statearr_23282[(10)] = inst_23141__$1);

return statearr_23282;
})();
var statearr_23283_23369 = state_23277__$1;
(statearr_23283_23369[(2)] = null);

(statearr_23283_23369[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (20))){
var inst_23181 = (state_23277[(12)]);
var inst_23189 = figwheel.client.file_reloading.sort_files.call(null,inst_23181);
var state_23277__$1 = state_23277;
var statearr_23284_23370 = state_23277__$1;
(statearr_23284_23370[(2)] = inst_23189);

(statearr_23284_23370[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (27))){
var state_23277__$1 = state_23277;
var statearr_23285_23371 = state_23277__$1;
(statearr_23285_23371[(2)] = null);

(statearr_23285_23371[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (1))){
var inst_23130 = (state_23277[(13)]);
var inst_23127 = before_jsload.call(null,files);
var inst_23128 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_23129 = (function (){return ((function (inst_23130,inst_23127,inst_23128,state_val_23278,c__19446__auto__,map__23123,map__23123__$1,opts,before_jsload,on_jsload,reload_dependents,map__23124,map__23124__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22872_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22872_SHARP_);
});
;})(inst_23130,inst_23127,inst_23128,state_val_23278,c__19446__auto__,map__23123,map__23123__$1,opts,before_jsload,on_jsload,reload_dependents,map__23124,map__23124__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23130__$1 = cljs.core.filter.call(null,inst_23129,files);
var inst_23131 = cljs.core.not_empty.call(null,inst_23130__$1);
var state_23277__$1 = (function (){var statearr_23286 = state_23277;
(statearr_23286[(13)] = inst_23130__$1);

(statearr_23286[(14)] = inst_23128);

(statearr_23286[(15)] = inst_23127);

return statearr_23286;
})();
if(cljs.core.truth_(inst_23131)){
var statearr_23287_23372 = state_23277__$1;
(statearr_23287_23372[(1)] = (2));

} else {
var statearr_23288_23373 = state_23277__$1;
(statearr_23288_23373[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (24))){
var state_23277__$1 = state_23277;
var statearr_23289_23374 = state_23277__$1;
(statearr_23289_23374[(2)] = null);

(statearr_23289_23374[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (39))){
var inst_23231 = (state_23277[(16)]);
var state_23277__$1 = state_23277;
var statearr_23290_23375 = state_23277__$1;
(statearr_23290_23375[(2)] = inst_23231);

(statearr_23290_23375[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (46))){
var inst_23272 = (state_23277[(2)]);
var state_23277__$1 = state_23277;
var statearr_23291_23376 = state_23277__$1;
(statearr_23291_23376[(2)] = inst_23272);

(statearr_23291_23376[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (4))){
var inst_23175 = (state_23277[(2)]);
var inst_23176 = cljs.core.List.EMPTY;
var inst_23177 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_23176);
var inst_23178 = (function (){return ((function (inst_23175,inst_23176,inst_23177,state_val_23278,c__19446__auto__,map__23123,map__23123__$1,opts,before_jsload,on_jsload,reload_dependents,map__23124,map__23124__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22873_SHARP_){
var and__16318__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22873_SHARP_);
if(cljs.core.truth_(and__16318__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22873_SHARP_));
} else {
return and__16318__auto__;
}
});
;})(inst_23175,inst_23176,inst_23177,state_val_23278,c__19446__auto__,map__23123,map__23123__$1,opts,before_jsload,on_jsload,reload_dependents,map__23124,map__23124__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23179 = cljs.core.filter.call(null,inst_23178,files);
var inst_23180 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_23181 = cljs.core.concat.call(null,inst_23179,inst_23180);
var state_23277__$1 = (function (){var statearr_23292 = state_23277;
(statearr_23292[(17)] = inst_23177);

(statearr_23292[(12)] = inst_23181);

(statearr_23292[(18)] = inst_23175);

return statearr_23292;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23293_23377 = state_23277__$1;
(statearr_23293_23377[(1)] = (16));

} else {
var statearr_23294_23378 = state_23277__$1;
(statearr_23294_23378[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (15))){
var inst_23165 = (state_23277[(2)]);
var state_23277__$1 = state_23277;
var statearr_23295_23379 = state_23277__$1;
(statearr_23295_23379[(2)] = inst_23165);

(statearr_23295_23379[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (21))){
var inst_23191 = (state_23277[(19)]);
var inst_23191__$1 = (state_23277[(2)]);
var inst_23192 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23191__$1);
var state_23277__$1 = (function (){var statearr_23296 = state_23277;
(statearr_23296[(19)] = inst_23191__$1);

return statearr_23296;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23277__$1,(22),inst_23192);
} else {
if((state_val_23278 === (31))){
var inst_23275 = (state_23277[(2)]);
var state_23277__$1 = state_23277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23277__$1,inst_23275);
} else {
if((state_val_23278 === (32))){
var inst_23231 = (state_23277[(16)]);
var inst_23236 = inst_23231.cljs$lang$protocol_mask$partition0$;
var inst_23237 = (inst_23236 & (64));
var inst_23238 = inst_23231.cljs$core$ISeq$;
var inst_23239 = (inst_23237) || (inst_23238);
var state_23277__$1 = state_23277;
if(cljs.core.truth_(inst_23239)){
var statearr_23297_23380 = state_23277__$1;
(statearr_23297_23380[(1)] = (35));

} else {
var statearr_23298_23381 = state_23277__$1;
(statearr_23298_23381[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (40))){
var inst_23252 = (state_23277[(20)]);
var inst_23251 = (state_23277[(2)]);
var inst_23252__$1 = cljs.core.get.call(null,inst_23251,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23253 = cljs.core.get.call(null,inst_23251,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23254 = cljs.core.not_empty.call(null,inst_23252__$1);
var state_23277__$1 = (function (){var statearr_23299 = state_23277;
(statearr_23299[(20)] = inst_23252__$1);

(statearr_23299[(21)] = inst_23253);

return statearr_23299;
})();
if(cljs.core.truth_(inst_23254)){
var statearr_23300_23382 = state_23277__$1;
(statearr_23300_23382[(1)] = (41));

} else {
var statearr_23301_23383 = state_23277__$1;
(statearr_23301_23383[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (33))){
var state_23277__$1 = state_23277;
var statearr_23302_23384 = state_23277__$1;
(statearr_23302_23384[(2)] = false);

(statearr_23302_23384[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (13))){
var inst_23151 = (state_23277[(22)]);
var inst_23155 = cljs.core.chunk_first.call(null,inst_23151);
var inst_23156 = cljs.core.chunk_rest.call(null,inst_23151);
var inst_23157 = cljs.core.count.call(null,inst_23155);
var inst_23138 = inst_23156;
var inst_23139 = inst_23155;
var inst_23140 = inst_23157;
var inst_23141 = (0);
var state_23277__$1 = (function (){var statearr_23303 = state_23277;
(statearr_23303[(7)] = inst_23139);

(statearr_23303[(8)] = inst_23138);

(statearr_23303[(9)] = inst_23140);

(statearr_23303[(10)] = inst_23141);

return statearr_23303;
})();
var statearr_23304_23385 = state_23277__$1;
(statearr_23304_23385[(2)] = null);

(statearr_23304_23385[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (22))){
var inst_23194 = (state_23277[(23)]);
var inst_23195 = (state_23277[(24)]);
var inst_23199 = (state_23277[(25)]);
var inst_23191 = (state_23277[(19)]);
var inst_23194__$1 = (state_23277[(2)]);
var inst_23195__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23194__$1);
var inst_23196 = (function (){var all_files = inst_23191;
var res_SINGLEQUOTE_ = inst_23194__$1;
var res = inst_23195__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_23194,inst_23195,inst_23199,inst_23191,inst_23194__$1,inst_23195__$1,state_val_23278,c__19446__auto__,map__23123,map__23123__$1,opts,before_jsload,on_jsload,reload_dependents,map__23124,map__23124__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22874_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22874_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_23194,inst_23195,inst_23199,inst_23191,inst_23194__$1,inst_23195__$1,state_val_23278,c__19446__auto__,map__23123,map__23123__$1,opts,before_jsload,on_jsload,reload_dependents,map__23124,map__23124__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23197 = cljs.core.filter.call(null,inst_23196,inst_23194__$1);
var inst_23198 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_23199__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23198);
var inst_23200 = cljs.core.not_empty.call(null,inst_23199__$1);
var state_23277__$1 = (function (){var statearr_23305 = state_23277;
(statearr_23305[(23)] = inst_23194__$1);

(statearr_23305[(24)] = inst_23195__$1);

(statearr_23305[(25)] = inst_23199__$1);

(statearr_23305[(26)] = inst_23197);

return statearr_23305;
})();
if(cljs.core.truth_(inst_23200)){
var statearr_23306_23386 = state_23277__$1;
(statearr_23306_23386[(1)] = (23));

} else {
var statearr_23307_23387 = state_23277__$1;
(statearr_23307_23387[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (36))){
var state_23277__$1 = state_23277;
var statearr_23308_23388 = state_23277__$1;
(statearr_23308_23388[(2)] = false);

(statearr_23308_23388[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (41))){
var inst_23252 = (state_23277[(20)]);
var inst_23256 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_23257 = cljs.core.map.call(null,inst_23256,inst_23252);
var inst_23258 = cljs.core.pr_str.call(null,inst_23257);
var inst_23259 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_23258)].join('');
var inst_23260 = figwheel.client.utils.log.call(null,inst_23259);
var state_23277__$1 = state_23277;
var statearr_23309_23389 = state_23277__$1;
(statearr_23309_23389[(2)] = inst_23260);

(statearr_23309_23389[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (43))){
var inst_23253 = (state_23277[(21)]);
var inst_23263 = (state_23277[(2)]);
var inst_23264 = cljs.core.not_empty.call(null,inst_23253);
var state_23277__$1 = (function (){var statearr_23310 = state_23277;
(statearr_23310[(27)] = inst_23263);

return statearr_23310;
})();
if(cljs.core.truth_(inst_23264)){
var statearr_23311_23390 = state_23277__$1;
(statearr_23311_23390[(1)] = (44));

} else {
var statearr_23312_23391 = state_23277__$1;
(statearr_23312_23391[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (29))){
var inst_23194 = (state_23277[(23)]);
var inst_23231 = (state_23277[(16)]);
var inst_23195 = (state_23277[(24)]);
var inst_23199 = (state_23277[(25)]);
var inst_23197 = (state_23277[(26)]);
var inst_23191 = (state_23277[(19)]);
var inst_23227 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23230 = (function (){var all_files = inst_23191;
var res_SINGLEQUOTE_ = inst_23194;
var res = inst_23195;
var files_not_loaded = inst_23197;
var dependencies_that_loaded = inst_23199;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23194,inst_23231,inst_23195,inst_23199,inst_23197,inst_23191,inst_23227,state_val_23278,c__19446__auto__,map__23123,map__23123__$1,opts,before_jsload,on_jsload,reload_dependents,map__23124,map__23124__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23229){
var map__23313 = p__23229;
var map__23313__$1 = ((((!((map__23313 == null)))?((((map__23313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23313):map__23313);
var namespace = cljs.core.get.call(null,map__23313__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23194,inst_23231,inst_23195,inst_23199,inst_23197,inst_23191,inst_23227,state_val_23278,c__19446__auto__,map__23123,map__23123__$1,opts,before_jsload,on_jsload,reload_dependents,map__23124,map__23124__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23231__$1 = cljs.core.group_by.call(null,inst_23230,inst_23197);
var inst_23233 = (inst_23231__$1 == null);
var inst_23234 = cljs.core.not.call(null,inst_23233);
var state_23277__$1 = (function (){var statearr_23315 = state_23277;
(statearr_23315[(16)] = inst_23231__$1);

(statearr_23315[(28)] = inst_23227);

return statearr_23315;
})();
if(inst_23234){
var statearr_23316_23392 = state_23277__$1;
(statearr_23316_23392[(1)] = (32));

} else {
var statearr_23317_23393 = state_23277__$1;
(statearr_23317_23393[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (44))){
var inst_23253 = (state_23277[(21)]);
var inst_23266 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23253);
var inst_23267 = cljs.core.pr_str.call(null,inst_23266);
var inst_23268 = [cljs.core.str("not required: "),cljs.core.str(inst_23267)].join('');
var inst_23269 = figwheel.client.utils.log.call(null,inst_23268);
var state_23277__$1 = state_23277;
var statearr_23318_23394 = state_23277__$1;
(statearr_23318_23394[(2)] = inst_23269);

(statearr_23318_23394[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (6))){
var inst_23172 = (state_23277[(2)]);
var state_23277__$1 = state_23277;
var statearr_23319_23395 = state_23277__$1;
(statearr_23319_23395[(2)] = inst_23172);

(statearr_23319_23395[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (28))){
var inst_23197 = (state_23277[(26)]);
var inst_23224 = (state_23277[(2)]);
var inst_23225 = cljs.core.not_empty.call(null,inst_23197);
var state_23277__$1 = (function (){var statearr_23320 = state_23277;
(statearr_23320[(29)] = inst_23224);

return statearr_23320;
})();
if(cljs.core.truth_(inst_23225)){
var statearr_23321_23396 = state_23277__$1;
(statearr_23321_23396[(1)] = (29));

} else {
var statearr_23322_23397 = state_23277__$1;
(statearr_23322_23397[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (25))){
var inst_23195 = (state_23277[(24)]);
var inst_23211 = (state_23277[(2)]);
var inst_23212 = cljs.core.not_empty.call(null,inst_23195);
var state_23277__$1 = (function (){var statearr_23323 = state_23277;
(statearr_23323[(30)] = inst_23211);

return statearr_23323;
})();
if(cljs.core.truth_(inst_23212)){
var statearr_23324_23398 = state_23277__$1;
(statearr_23324_23398[(1)] = (26));

} else {
var statearr_23325_23399 = state_23277__$1;
(statearr_23325_23399[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (34))){
var inst_23246 = (state_23277[(2)]);
var state_23277__$1 = state_23277;
if(cljs.core.truth_(inst_23246)){
var statearr_23326_23400 = state_23277__$1;
(statearr_23326_23400[(1)] = (38));

} else {
var statearr_23327_23401 = state_23277__$1;
(statearr_23327_23401[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (17))){
var state_23277__$1 = state_23277;
var statearr_23328_23402 = state_23277__$1;
(statearr_23328_23402[(2)] = recompile_dependents);

(statearr_23328_23402[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (3))){
var state_23277__$1 = state_23277;
var statearr_23329_23403 = state_23277__$1;
(statearr_23329_23403[(2)] = null);

(statearr_23329_23403[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (12))){
var inst_23168 = (state_23277[(2)]);
var state_23277__$1 = state_23277;
var statearr_23330_23404 = state_23277__$1;
(statearr_23330_23404[(2)] = inst_23168);

(statearr_23330_23404[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (2))){
var inst_23130 = (state_23277[(13)]);
var inst_23137 = cljs.core.seq.call(null,inst_23130);
var inst_23138 = inst_23137;
var inst_23139 = null;
var inst_23140 = (0);
var inst_23141 = (0);
var state_23277__$1 = (function (){var statearr_23331 = state_23277;
(statearr_23331[(7)] = inst_23139);

(statearr_23331[(8)] = inst_23138);

(statearr_23331[(9)] = inst_23140);

(statearr_23331[(10)] = inst_23141);

return statearr_23331;
})();
var statearr_23332_23405 = state_23277__$1;
(statearr_23332_23405[(2)] = null);

(statearr_23332_23405[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (23))){
var inst_23194 = (state_23277[(23)]);
var inst_23195 = (state_23277[(24)]);
var inst_23199 = (state_23277[(25)]);
var inst_23197 = (state_23277[(26)]);
var inst_23191 = (state_23277[(19)]);
var inst_23202 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_23204 = (function (){var all_files = inst_23191;
var res_SINGLEQUOTE_ = inst_23194;
var res = inst_23195;
var files_not_loaded = inst_23197;
var dependencies_that_loaded = inst_23199;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23194,inst_23195,inst_23199,inst_23197,inst_23191,inst_23202,state_val_23278,c__19446__auto__,map__23123,map__23123__$1,opts,before_jsload,on_jsload,reload_dependents,map__23124,map__23124__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23203){
var map__23333 = p__23203;
var map__23333__$1 = ((((!((map__23333 == null)))?((((map__23333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23333):map__23333);
var request_url = cljs.core.get.call(null,map__23333__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23194,inst_23195,inst_23199,inst_23197,inst_23191,inst_23202,state_val_23278,c__19446__auto__,map__23123,map__23123__$1,opts,before_jsload,on_jsload,reload_dependents,map__23124,map__23124__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23205 = cljs.core.reverse.call(null,inst_23199);
var inst_23206 = cljs.core.map.call(null,inst_23204,inst_23205);
var inst_23207 = cljs.core.pr_str.call(null,inst_23206);
var inst_23208 = figwheel.client.utils.log.call(null,inst_23207);
var state_23277__$1 = (function (){var statearr_23335 = state_23277;
(statearr_23335[(31)] = inst_23202);

return statearr_23335;
})();
var statearr_23336_23406 = state_23277__$1;
(statearr_23336_23406[(2)] = inst_23208);

(statearr_23336_23406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (35))){
var state_23277__$1 = state_23277;
var statearr_23337_23407 = state_23277__$1;
(statearr_23337_23407[(2)] = true);

(statearr_23337_23407[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (19))){
var inst_23181 = (state_23277[(12)]);
var inst_23187 = figwheel.client.file_reloading.expand_files.call(null,inst_23181);
var state_23277__$1 = state_23277;
var statearr_23338_23408 = state_23277__$1;
(statearr_23338_23408[(2)] = inst_23187);

(statearr_23338_23408[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (11))){
var state_23277__$1 = state_23277;
var statearr_23339_23409 = state_23277__$1;
(statearr_23339_23409[(2)] = null);

(statearr_23339_23409[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (9))){
var inst_23170 = (state_23277[(2)]);
var state_23277__$1 = state_23277;
var statearr_23340_23410 = state_23277__$1;
(statearr_23340_23410[(2)] = inst_23170);

(statearr_23340_23410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (5))){
var inst_23140 = (state_23277[(9)]);
var inst_23141 = (state_23277[(10)]);
var inst_23143 = (inst_23141 < inst_23140);
var inst_23144 = inst_23143;
var state_23277__$1 = state_23277;
if(cljs.core.truth_(inst_23144)){
var statearr_23341_23411 = state_23277__$1;
(statearr_23341_23411[(1)] = (7));

} else {
var statearr_23342_23412 = state_23277__$1;
(statearr_23342_23412[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (14))){
var inst_23151 = (state_23277[(22)]);
var inst_23160 = cljs.core.first.call(null,inst_23151);
var inst_23161 = figwheel.client.file_reloading.eval_body.call(null,inst_23160,opts);
var inst_23162 = cljs.core.next.call(null,inst_23151);
var inst_23138 = inst_23162;
var inst_23139 = null;
var inst_23140 = (0);
var inst_23141 = (0);
var state_23277__$1 = (function (){var statearr_23343 = state_23277;
(statearr_23343[(7)] = inst_23139);

(statearr_23343[(32)] = inst_23161);

(statearr_23343[(8)] = inst_23138);

(statearr_23343[(9)] = inst_23140);

(statearr_23343[(10)] = inst_23141);

return statearr_23343;
})();
var statearr_23344_23413 = state_23277__$1;
(statearr_23344_23413[(2)] = null);

(statearr_23344_23413[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (45))){
var state_23277__$1 = state_23277;
var statearr_23345_23414 = state_23277__$1;
(statearr_23345_23414[(2)] = null);

(statearr_23345_23414[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (26))){
var inst_23194 = (state_23277[(23)]);
var inst_23195 = (state_23277[(24)]);
var inst_23199 = (state_23277[(25)]);
var inst_23197 = (state_23277[(26)]);
var inst_23191 = (state_23277[(19)]);
var inst_23214 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23216 = (function (){var all_files = inst_23191;
var res_SINGLEQUOTE_ = inst_23194;
var res = inst_23195;
var files_not_loaded = inst_23197;
var dependencies_that_loaded = inst_23199;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23194,inst_23195,inst_23199,inst_23197,inst_23191,inst_23214,state_val_23278,c__19446__auto__,map__23123,map__23123__$1,opts,before_jsload,on_jsload,reload_dependents,map__23124,map__23124__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23215){
var map__23346 = p__23215;
var map__23346__$1 = ((((!((map__23346 == null)))?((((map__23346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23346):map__23346);
var namespace = cljs.core.get.call(null,map__23346__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23346__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23194,inst_23195,inst_23199,inst_23197,inst_23191,inst_23214,state_val_23278,c__19446__auto__,map__23123,map__23123__$1,opts,before_jsload,on_jsload,reload_dependents,map__23124,map__23124__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23217 = cljs.core.map.call(null,inst_23216,inst_23195);
var inst_23218 = cljs.core.pr_str.call(null,inst_23217);
var inst_23219 = figwheel.client.utils.log.call(null,inst_23218);
var inst_23220 = (function (){var all_files = inst_23191;
var res_SINGLEQUOTE_ = inst_23194;
var res = inst_23195;
var files_not_loaded = inst_23197;
var dependencies_that_loaded = inst_23199;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23194,inst_23195,inst_23199,inst_23197,inst_23191,inst_23214,inst_23216,inst_23217,inst_23218,inst_23219,state_val_23278,c__19446__auto__,map__23123,map__23123__$1,opts,before_jsload,on_jsload,reload_dependents,map__23124,map__23124__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23194,inst_23195,inst_23199,inst_23197,inst_23191,inst_23214,inst_23216,inst_23217,inst_23218,inst_23219,state_val_23278,c__19446__auto__,map__23123,map__23123__$1,opts,before_jsload,on_jsload,reload_dependents,map__23124,map__23124__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23221 = setTimeout(inst_23220,(10));
var state_23277__$1 = (function (){var statearr_23348 = state_23277;
(statearr_23348[(33)] = inst_23219);

(statearr_23348[(34)] = inst_23214);

return statearr_23348;
})();
var statearr_23349_23415 = state_23277__$1;
(statearr_23349_23415[(2)] = inst_23221);

(statearr_23349_23415[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (16))){
var state_23277__$1 = state_23277;
var statearr_23350_23416 = state_23277__$1;
(statearr_23350_23416[(2)] = reload_dependents);

(statearr_23350_23416[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (38))){
var inst_23231 = (state_23277[(16)]);
var inst_23248 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23231);
var state_23277__$1 = state_23277;
var statearr_23351_23417 = state_23277__$1;
(statearr_23351_23417[(2)] = inst_23248);

(statearr_23351_23417[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (30))){
var state_23277__$1 = state_23277;
var statearr_23352_23418 = state_23277__$1;
(statearr_23352_23418[(2)] = null);

(statearr_23352_23418[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (10))){
var inst_23151 = (state_23277[(22)]);
var inst_23153 = cljs.core.chunked_seq_QMARK_.call(null,inst_23151);
var state_23277__$1 = state_23277;
if(inst_23153){
var statearr_23353_23419 = state_23277__$1;
(statearr_23353_23419[(1)] = (13));

} else {
var statearr_23354_23420 = state_23277__$1;
(statearr_23354_23420[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (18))){
var inst_23185 = (state_23277[(2)]);
var state_23277__$1 = state_23277;
if(cljs.core.truth_(inst_23185)){
var statearr_23355_23421 = state_23277__$1;
(statearr_23355_23421[(1)] = (19));

} else {
var statearr_23356_23422 = state_23277__$1;
(statearr_23356_23422[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (42))){
var state_23277__$1 = state_23277;
var statearr_23357_23423 = state_23277__$1;
(statearr_23357_23423[(2)] = null);

(statearr_23357_23423[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (37))){
var inst_23243 = (state_23277[(2)]);
var state_23277__$1 = state_23277;
var statearr_23358_23424 = state_23277__$1;
(statearr_23358_23424[(2)] = inst_23243);

(statearr_23358_23424[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (8))){
var inst_23138 = (state_23277[(8)]);
var inst_23151 = (state_23277[(22)]);
var inst_23151__$1 = cljs.core.seq.call(null,inst_23138);
var state_23277__$1 = (function (){var statearr_23359 = state_23277;
(statearr_23359[(22)] = inst_23151__$1);

return statearr_23359;
})();
if(inst_23151__$1){
var statearr_23360_23425 = state_23277__$1;
(statearr_23360_23425[(1)] = (10));

} else {
var statearr_23361_23426 = state_23277__$1;
(statearr_23361_23426[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19446__auto__,map__23123,map__23123__$1,opts,before_jsload,on_jsload,reload_dependents,map__23124,map__23124__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19425__auto__,c__19446__auto__,map__23123,map__23123__$1,opts,before_jsload,on_jsload,reload_dependents,map__23124,map__23124__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19426__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19426__auto____0 = (function (){
var statearr_23365 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23365[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19426__auto__);

(statearr_23365[(1)] = (1));

return statearr_23365;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19426__auto____1 = (function (state_23277){
while(true){
var ret_value__19427__auto__ = (function (){try{while(true){
var result__19428__auto__ = switch__19425__auto__.call(null,state_23277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19428__auto__;
}
break;
}
}catch (e23366){if((e23366 instanceof Object)){
var ex__19429__auto__ = e23366;
var statearr_23367_23427 = state_23277;
(statearr_23367_23427[(5)] = ex__19429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23428 = state_23277;
state_23277 = G__23428;
continue;
} else {
return ret_value__19427__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19426__auto__ = function(state_23277){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19426__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19426__auto____1.call(this,state_23277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19426__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19426__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19426__auto__;
})()
;})(switch__19425__auto__,c__19446__auto__,map__23123,map__23123__$1,opts,before_jsload,on_jsload,reload_dependents,map__23124,map__23124__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19448__auto__ = (function (){var statearr_23368 = f__19447__auto__.call(null);
(statearr_23368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19446__auto__);

return statearr_23368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19448__auto__);
});})(c__19446__auto__,map__23123,map__23123__$1,opts,before_jsload,on_jsload,reload_dependents,map__23124,map__23124__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19446__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23431,link){
var map__23434 = p__23431;
var map__23434__$1 = ((((!((map__23434 == null)))?((((map__23434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23434):map__23434);
var file = cljs.core.get.call(null,map__23434__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__23434,map__23434__$1,file){
return (function (p1__23429_SHARP_,p2__23430_SHARP_){
if(cljs.core._EQ_.call(null,p1__23429_SHARP_,p2__23430_SHARP_)){
return p1__23429_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__23434,map__23434__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23440){
var map__23441 = p__23440;
var map__23441__$1 = ((((!((map__23441 == null)))?((((map__23441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23441):map__23441);
var match_length = cljs.core.get.call(null,map__23441__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23441__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23436_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23436_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args23443 = [];
var len__17388__auto___23446 = arguments.length;
var i__17389__auto___23447 = (0);
while(true){
if((i__17389__auto___23447 < len__17388__auto___23446)){
args23443.push((arguments[i__17389__auto___23447]));

var G__23448 = (i__17389__auto___23447 + (1));
i__17389__auto___23447 = G__23448;
continue;
} else {
}
break;
}

var G__23445 = args23443.length;
switch (G__23445) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23443.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23450_SHARP_,p2__23451_SHARP_){
return cljs.core.assoc.call(null,p1__23450_SHARP_,cljs.core.get.call(null,p2__23451_SHARP_,key),p2__23451_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__23452){
var map__23455 = p__23452;
var map__23455__$1 = ((((!((map__23455 == null)))?((((map__23455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23455):map__23455);
var f_data = map__23455__$1;
var file = cljs.core.get.call(null,map__23455__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23457,files_msg){
var map__23464 = p__23457;
var map__23464__$1 = ((((!((map__23464 == null)))?((((map__23464.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23464.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23464):map__23464);
var opts = map__23464__$1;
var on_cssload = cljs.core.get.call(null,map__23464__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23466_23470 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23467_23471 = null;
var count__23468_23472 = (0);
var i__23469_23473 = (0);
while(true){
if((i__23469_23473 < count__23468_23472)){
var f_23474 = cljs.core._nth.call(null,chunk__23467_23471,i__23469_23473);
figwheel.client.file_reloading.reload_css_file.call(null,f_23474);

var G__23475 = seq__23466_23470;
var G__23476 = chunk__23467_23471;
var G__23477 = count__23468_23472;
var G__23478 = (i__23469_23473 + (1));
seq__23466_23470 = G__23475;
chunk__23467_23471 = G__23476;
count__23468_23472 = G__23477;
i__23469_23473 = G__23478;
continue;
} else {
var temp__4425__auto___23479 = cljs.core.seq.call(null,seq__23466_23470);
if(temp__4425__auto___23479){
var seq__23466_23480__$1 = temp__4425__auto___23479;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23466_23480__$1)){
var c__17133__auto___23481 = cljs.core.chunk_first.call(null,seq__23466_23480__$1);
var G__23482 = cljs.core.chunk_rest.call(null,seq__23466_23480__$1);
var G__23483 = c__17133__auto___23481;
var G__23484 = cljs.core.count.call(null,c__17133__auto___23481);
var G__23485 = (0);
seq__23466_23470 = G__23482;
chunk__23467_23471 = G__23483;
count__23468_23472 = G__23484;
i__23469_23473 = G__23485;
continue;
} else {
var f_23486 = cljs.core.first.call(null,seq__23466_23480__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23486);

var G__23487 = cljs.core.next.call(null,seq__23466_23480__$1);
var G__23488 = null;
var G__23489 = (0);
var G__23490 = (0);
seq__23466_23470 = G__23487;
chunk__23467_23471 = G__23488;
count__23468_23472 = G__23489;
i__23469_23473 = G__23490;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__23464,map__23464__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__23464,map__23464__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1446810622713