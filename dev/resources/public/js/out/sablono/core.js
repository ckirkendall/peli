// Compiled by ClojureScript 1.7.145 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__20372__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__20371 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__20371,(0),null);
var body = cljs.core.nthnext.call(null,vec__20371,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__20372 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20373__i = 0, G__20373__a = new Array(arguments.length -  0);
while (G__20373__i < G__20373__a.length) {G__20373__a[G__20373__i] = arguments[G__20373__i + 0]; ++G__20373__i;}
  args = new cljs.core.IndexedSeq(G__20373__a,0);
} 
return G__20372__delegate.call(this,args);};
G__20372.cljs$lang$maxFixedArity = 0;
G__20372.cljs$lang$applyTo = (function (arglist__20374){
var args = cljs.core.seq(arglist__20374);
return G__20372__delegate(args);
});
G__20372.cljs$core$IFn$_invoke$arity$variadic = G__20372__delegate;
return G__20372;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__17102__auto__ = (function sablono$core$update_arglists_$_iter__20379(s__20380){
return (new cljs.core.LazySeq(null,(function (){
var s__20380__$1 = s__20380;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20380__$1);
if(temp__4425__auto__){
var s__20380__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20380__$2)){
var c__17100__auto__ = cljs.core.chunk_first.call(null,s__20380__$2);
var size__17101__auto__ = cljs.core.count.call(null,c__17100__auto__);
var b__20382 = cljs.core.chunk_buffer.call(null,size__17101__auto__);
if((function (){var i__20381 = (0);
while(true){
if((i__20381 < size__17101__auto__)){
var args = cljs.core._nth.call(null,c__17100__auto__,i__20381);
cljs.core.chunk_append.call(null,b__20382,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__20383 = (i__20381 + (1));
i__20381 = G__20383;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20382),sablono$core$update_arglists_$_iter__20379.call(null,cljs.core.chunk_rest.call(null,s__20380__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20382),null);
}
} else {
var args = cljs.core.first.call(null,s__20380__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__20379.call(null,cljs.core.rest.call(null,s__20380__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17102__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__17395__auto__ = [];
var len__17388__auto___20389 = arguments.length;
var i__17389__auto___20390 = (0);
while(true){
if((i__17389__auto___20390 < len__17388__auto___20389)){
args__17395__auto__.push((arguments[i__17389__auto___20390]));

var G__20391 = (i__17389__auto___20390 + (1));
i__17389__auto___20390 = G__20391;
continue;
} else {
}
break;
}

var argseq__17396__auto__ = ((((0) < args__17395__auto__.length))?(new cljs.core.IndexedSeq(args__17395__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17396__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__17102__auto__ = (function sablono$core$iter__20385(s__20386){
return (new cljs.core.LazySeq(null,(function (){
var s__20386__$1 = s__20386;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20386__$1);
if(temp__4425__auto__){
var s__20386__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20386__$2)){
var c__17100__auto__ = cljs.core.chunk_first.call(null,s__20386__$2);
var size__17101__auto__ = cljs.core.count.call(null,c__17100__auto__);
var b__20388 = cljs.core.chunk_buffer.call(null,size__17101__auto__);
if((function (){var i__20387 = (0);
while(true){
if((i__20387 < size__17101__auto__)){
var style = cljs.core._nth.call(null,c__17100__auto__,i__20387);
cljs.core.chunk_append.call(null,b__20388,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__20392 = (i__20387 + (1));
i__20387 = G__20392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20388),sablono$core$iter__20385.call(null,cljs.core.chunk_rest.call(null,s__20386__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20388),null);
}
} else {
var style = cljs.core.first.call(null,s__20386__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__20385.call(null,cljs.core.rest.call(null,s__20386__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17102__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq20384){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20384));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to20393 = (function sablono$core$link_to20393(var_args){
var args__17395__auto__ = [];
var len__17388__auto___20396 = arguments.length;
var i__17389__auto___20397 = (0);
while(true){
if((i__17389__auto___20397 < len__17388__auto___20396)){
args__17395__auto__.push((arguments[i__17389__auto___20397]));

var G__20398 = (i__17389__auto___20397 + (1));
i__17389__auto___20397 = G__20398;
continue;
} else {
}
break;
}

var argseq__17396__auto__ = ((((1) < args__17395__auto__.length))?(new cljs.core.IndexedSeq(args__17395__auto__.slice((1)),(0))):null);
return sablono.core.link_to20393.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17396__auto__);
});

sablono.core.link_to20393.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to20393.cljs$lang$maxFixedArity = (1);

sablono.core.link_to20393.cljs$lang$applyTo = (function (seq20394){
var G__20395 = cljs.core.first.call(null,seq20394);
var seq20394__$1 = cljs.core.next.call(null,seq20394);
return sablono.core.link_to20393.cljs$core$IFn$_invoke$arity$variadic(G__20395,seq20394__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to20393);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to20399 = (function sablono$core$mail_to20399(var_args){
var args__17395__auto__ = [];
var len__17388__auto___20404 = arguments.length;
var i__17389__auto___20405 = (0);
while(true){
if((i__17389__auto___20405 < len__17388__auto___20404)){
args__17395__auto__.push((arguments[i__17389__auto___20405]));

var G__20406 = (i__17389__auto___20405 + (1));
i__17389__auto___20405 = G__20406;
continue;
} else {
}
break;
}

var argseq__17396__auto__ = ((((1) < args__17395__auto__.length))?(new cljs.core.IndexedSeq(args__17395__auto__.slice((1)),(0))):null);
return sablono.core.mail_to20399.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17396__auto__);
});

sablono.core.mail_to20399.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__20402){
var vec__20403 = p__20402;
var content = cljs.core.nth.call(null,vec__20403,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16330__auto__ = content;
if(cljs.core.truth_(or__16330__auto__)){
return or__16330__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to20399.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to20399.cljs$lang$applyTo = (function (seq20400){
var G__20401 = cljs.core.first.call(null,seq20400);
var seq20400__$1 = cljs.core.next.call(null,seq20400);
return sablono.core.mail_to20399.cljs$core$IFn$_invoke$arity$variadic(G__20401,seq20400__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to20399);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list20407 = (function sablono$core$unordered_list20407(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__17102__auto__ = (function sablono$core$unordered_list20407_$_iter__20412(s__20413){
return (new cljs.core.LazySeq(null,(function (){
var s__20413__$1 = s__20413;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20413__$1);
if(temp__4425__auto__){
var s__20413__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20413__$2)){
var c__17100__auto__ = cljs.core.chunk_first.call(null,s__20413__$2);
var size__17101__auto__ = cljs.core.count.call(null,c__17100__auto__);
var b__20415 = cljs.core.chunk_buffer.call(null,size__17101__auto__);
if((function (){var i__20414 = (0);
while(true){
if((i__20414 < size__17101__auto__)){
var x = cljs.core._nth.call(null,c__17100__auto__,i__20414);
cljs.core.chunk_append.call(null,b__20415,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__20416 = (i__20414 + (1));
i__20414 = G__20416;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20415),sablono$core$unordered_list20407_$_iter__20412.call(null,cljs.core.chunk_rest.call(null,s__20413__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20415),null);
}
} else {
var x = cljs.core.first.call(null,s__20413__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list20407_$_iter__20412.call(null,cljs.core.rest.call(null,s__20413__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17102__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list20407);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list20417 = (function sablono$core$ordered_list20417(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__17102__auto__ = (function sablono$core$ordered_list20417_$_iter__20422(s__20423){
return (new cljs.core.LazySeq(null,(function (){
var s__20423__$1 = s__20423;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20423__$1);
if(temp__4425__auto__){
var s__20423__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20423__$2)){
var c__17100__auto__ = cljs.core.chunk_first.call(null,s__20423__$2);
var size__17101__auto__ = cljs.core.count.call(null,c__17100__auto__);
var b__20425 = cljs.core.chunk_buffer.call(null,size__17101__auto__);
if((function (){var i__20424 = (0);
while(true){
if((i__20424 < size__17101__auto__)){
var x = cljs.core._nth.call(null,c__17100__auto__,i__20424);
cljs.core.chunk_append.call(null,b__20425,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__20426 = (i__20424 + (1));
i__20424 = G__20426;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20425),sablono$core$ordered_list20417_$_iter__20422.call(null,cljs.core.chunk_rest.call(null,s__20423__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20425),null);
}
} else {
var x = cljs.core.first.call(null,s__20423__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list20417_$_iter__20422.call(null,cljs.core.rest.call(null,s__20423__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17102__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list20417);
/**
 * Create an image element.
 */
sablono.core.image20427 = (function sablono$core$image20427(var_args){
var args20428 = [];
var len__17388__auto___20431 = arguments.length;
var i__17389__auto___20432 = (0);
while(true){
if((i__17389__auto___20432 < len__17388__auto___20431)){
args20428.push((arguments[i__17389__auto___20432]));

var G__20433 = (i__17389__auto___20432 + (1));
i__17389__auto___20432 = G__20433;
continue;
} else {
}
break;
}

var G__20430 = args20428.length;
switch (G__20430) {
case 1:
return sablono.core.image20427.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image20427.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20428.length)].join('')));

}
});

sablono.core.image20427.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image20427.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image20427.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image20427);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__20435_SHARP_,p2__20436_SHARP_){
return [cljs.core.str(p1__20435_SHARP_),cljs.core.str("["),cljs.core.str(p2__20436_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__20437_SHARP_,p2__20438_SHARP_){
return [cljs.core.str(p1__20437_SHARP_),cljs.core.str("-"),cljs.core.str(p2__20438_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field20439 = (function sablono$core$color_field20439(var_args){
var args20440 = [];
var len__17388__auto___20507 = arguments.length;
var i__17389__auto___20508 = (0);
while(true){
if((i__17389__auto___20508 < len__17388__auto___20507)){
args20440.push((arguments[i__17389__auto___20508]));

var G__20509 = (i__17389__auto___20508 + (1));
i__17389__auto___20508 = G__20509;
continue;
} else {
}
break;
}

var G__20442 = args20440.length;
switch (G__20442) {
case 1:
return sablono.core.color_field20439.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field20439.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20440.length)].join('')));

}
});

sablono.core.color_field20439.cljs$core$IFn$_invoke$arity$1 = (function (name__20025__auto__){
return sablono.core.color_field20439.call(null,name__20025__auto__,null);
});

sablono.core.color_field20439.cljs$core$IFn$_invoke$arity$2 = (function (name__20025__auto__,value__20026__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__20025__auto__,value__20026__auto__);
});

sablono.core.color_field20439.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field20439);

/**
 * Creates a date input field.
 */
sablono.core.date_field20443 = (function sablono$core$date_field20443(var_args){
var args20444 = [];
var len__17388__auto___20511 = arguments.length;
var i__17389__auto___20512 = (0);
while(true){
if((i__17389__auto___20512 < len__17388__auto___20511)){
args20444.push((arguments[i__17389__auto___20512]));

var G__20513 = (i__17389__auto___20512 + (1));
i__17389__auto___20512 = G__20513;
continue;
} else {
}
break;
}

var G__20446 = args20444.length;
switch (G__20446) {
case 1:
return sablono.core.date_field20443.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field20443.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20444.length)].join('')));

}
});

sablono.core.date_field20443.cljs$core$IFn$_invoke$arity$1 = (function (name__20025__auto__){
return sablono.core.date_field20443.call(null,name__20025__auto__,null);
});

sablono.core.date_field20443.cljs$core$IFn$_invoke$arity$2 = (function (name__20025__auto__,value__20026__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__20025__auto__,value__20026__auto__);
});

sablono.core.date_field20443.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field20443);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field20447 = (function sablono$core$datetime_field20447(var_args){
var args20448 = [];
var len__17388__auto___20515 = arguments.length;
var i__17389__auto___20516 = (0);
while(true){
if((i__17389__auto___20516 < len__17388__auto___20515)){
args20448.push((arguments[i__17389__auto___20516]));

var G__20517 = (i__17389__auto___20516 + (1));
i__17389__auto___20516 = G__20517;
continue;
} else {
}
break;
}

var G__20450 = args20448.length;
switch (G__20450) {
case 1:
return sablono.core.datetime_field20447.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field20447.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20448.length)].join('')));

}
});

sablono.core.datetime_field20447.cljs$core$IFn$_invoke$arity$1 = (function (name__20025__auto__){
return sablono.core.datetime_field20447.call(null,name__20025__auto__,null);
});

sablono.core.datetime_field20447.cljs$core$IFn$_invoke$arity$2 = (function (name__20025__auto__,value__20026__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__20025__auto__,value__20026__auto__);
});

sablono.core.datetime_field20447.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field20447);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field20451 = (function sablono$core$datetime_local_field20451(var_args){
var args20452 = [];
var len__17388__auto___20519 = arguments.length;
var i__17389__auto___20520 = (0);
while(true){
if((i__17389__auto___20520 < len__17388__auto___20519)){
args20452.push((arguments[i__17389__auto___20520]));

var G__20521 = (i__17389__auto___20520 + (1));
i__17389__auto___20520 = G__20521;
continue;
} else {
}
break;
}

var G__20454 = args20452.length;
switch (G__20454) {
case 1:
return sablono.core.datetime_local_field20451.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field20451.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20452.length)].join('')));

}
});

sablono.core.datetime_local_field20451.cljs$core$IFn$_invoke$arity$1 = (function (name__20025__auto__){
return sablono.core.datetime_local_field20451.call(null,name__20025__auto__,null);
});

sablono.core.datetime_local_field20451.cljs$core$IFn$_invoke$arity$2 = (function (name__20025__auto__,value__20026__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__20025__auto__,value__20026__auto__);
});

sablono.core.datetime_local_field20451.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field20451);

/**
 * Creates a email input field.
 */
sablono.core.email_field20455 = (function sablono$core$email_field20455(var_args){
var args20456 = [];
var len__17388__auto___20523 = arguments.length;
var i__17389__auto___20524 = (0);
while(true){
if((i__17389__auto___20524 < len__17388__auto___20523)){
args20456.push((arguments[i__17389__auto___20524]));

var G__20525 = (i__17389__auto___20524 + (1));
i__17389__auto___20524 = G__20525;
continue;
} else {
}
break;
}

var G__20458 = args20456.length;
switch (G__20458) {
case 1:
return sablono.core.email_field20455.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field20455.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20456.length)].join('')));

}
});

sablono.core.email_field20455.cljs$core$IFn$_invoke$arity$1 = (function (name__20025__auto__){
return sablono.core.email_field20455.call(null,name__20025__auto__,null);
});

sablono.core.email_field20455.cljs$core$IFn$_invoke$arity$2 = (function (name__20025__auto__,value__20026__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__20025__auto__,value__20026__auto__);
});

sablono.core.email_field20455.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field20455);

/**
 * Creates a file input field.
 */
sablono.core.file_field20459 = (function sablono$core$file_field20459(var_args){
var args20460 = [];
var len__17388__auto___20527 = arguments.length;
var i__17389__auto___20528 = (0);
while(true){
if((i__17389__auto___20528 < len__17388__auto___20527)){
args20460.push((arguments[i__17389__auto___20528]));

var G__20529 = (i__17389__auto___20528 + (1));
i__17389__auto___20528 = G__20529;
continue;
} else {
}
break;
}

var G__20462 = args20460.length;
switch (G__20462) {
case 1:
return sablono.core.file_field20459.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field20459.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20460.length)].join('')));

}
});

sablono.core.file_field20459.cljs$core$IFn$_invoke$arity$1 = (function (name__20025__auto__){
return sablono.core.file_field20459.call(null,name__20025__auto__,null);
});

sablono.core.file_field20459.cljs$core$IFn$_invoke$arity$2 = (function (name__20025__auto__,value__20026__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__20025__auto__,value__20026__auto__);
});

sablono.core.file_field20459.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field20459);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field20463 = (function sablono$core$hidden_field20463(var_args){
var args20464 = [];
var len__17388__auto___20531 = arguments.length;
var i__17389__auto___20532 = (0);
while(true){
if((i__17389__auto___20532 < len__17388__auto___20531)){
args20464.push((arguments[i__17389__auto___20532]));

var G__20533 = (i__17389__auto___20532 + (1));
i__17389__auto___20532 = G__20533;
continue;
} else {
}
break;
}

var G__20466 = args20464.length;
switch (G__20466) {
case 1:
return sablono.core.hidden_field20463.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field20463.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20464.length)].join('')));

}
});

sablono.core.hidden_field20463.cljs$core$IFn$_invoke$arity$1 = (function (name__20025__auto__){
return sablono.core.hidden_field20463.call(null,name__20025__auto__,null);
});

sablono.core.hidden_field20463.cljs$core$IFn$_invoke$arity$2 = (function (name__20025__auto__,value__20026__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__20025__auto__,value__20026__auto__);
});

sablono.core.hidden_field20463.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field20463);

/**
 * Creates a month input field.
 */
sablono.core.month_field20467 = (function sablono$core$month_field20467(var_args){
var args20468 = [];
var len__17388__auto___20535 = arguments.length;
var i__17389__auto___20536 = (0);
while(true){
if((i__17389__auto___20536 < len__17388__auto___20535)){
args20468.push((arguments[i__17389__auto___20536]));

var G__20537 = (i__17389__auto___20536 + (1));
i__17389__auto___20536 = G__20537;
continue;
} else {
}
break;
}

var G__20470 = args20468.length;
switch (G__20470) {
case 1:
return sablono.core.month_field20467.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field20467.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20468.length)].join('')));

}
});

sablono.core.month_field20467.cljs$core$IFn$_invoke$arity$1 = (function (name__20025__auto__){
return sablono.core.month_field20467.call(null,name__20025__auto__,null);
});

sablono.core.month_field20467.cljs$core$IFn$_invoke$arity$2 = (function (name__20025__auto__,value__20026__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__20025__auto__,value__20026__auto__);
});

sablono.core.month_field20467.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field20467);

/**
 * Creates a number input field.
 */
sablono.core.number_field20471 = (function sablono$core$number_field20471(var_args){
var args20472 = [];
var len__17388__auto___20539 = arguments.length;
var i__17389__auto___20540 = (0);
while(true){
if((i__17389__auto___20540 < len__17388__auto___20539)){
args20472.push((arguments[i__17389__auto___20540]));

var G__20541 = (i__17389__auto___20540 + (1));
i__17389__auto___20540 = G__20541;
continue;
} else {
}
break;
}

var G__20474 = args20472.length;
switch (G__20474) {
case 1:
return sablono.core.number_field20471.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field20471.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20472.length)].join('')));

}
});

sablono.core.number_field20471.cljs$core$IFn$_invoke$arity$1 = (function (name__20025__auto__){
return sablono.core.number_field20471.call(null,name__20025__auto__,null);
});

sablono.core.number_field20471.cljs$core$IFn$_invoke$arity$2 = (function (name__20025__auto__,value__20026__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__20025__auto__,value__20026__auto__);
});

sablono.core.number_field20471.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field20471);

/**
 * Creates a password input field.
 */
sablono.core.password_field20475 = (function sablono$core$password_field20475(var_args){
var args20476 = [];
var len__17388__auto___20543 = arguments.length;
var i__17389__auto___20544 = (0);
while(true){
if((i__17389__auto___20544 < len__17388__auto___20543)){
args20476.push((arguments[i__17389__auto___20544]));

var G__20545 = (i__17389__auto___20544 + (1));
i__17389__auto___20544 = G__20545;
continue;
} else {
}
break;
}

var G__20478 = args20476.length;
switch (G__20478) {
case 1:
return sablono.core.password_field20475.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field20475.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20476.length)].join('')));

}
});

sablono.core.password_field20475.cljs$core$IFn$_invoke$arity$1 = (function (name__20025__auto__){
return sablono.core.password_field20475.call(null,name__20025__auto__,null);
});

sablono.core.password_field20475.cljs$core$IFn$_invoke$arity$2 = (function (name__20025__auto__,value__20026__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__20025__auto__,value__20026__auto__);
});

sablono.core.password_field20475.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field20475);

/**
 * Creates a range input field.
 */
sablono.core.range_field20479 = (function sablono$core$range_field20479(var_args){
var args20480 = [];
var len__17388__auto___20547 = arguments.length;
var i__17389__auto___20548 = (0);
while(true){
if((i__17389__auto___20548 < len__17388__auto___20547)){
args20480.push((arguments[i__17389__auto___20548]));

var G__20549 = (i__17389__auto___20548 + (1));
i__17389__auto___20548 = G__20549;
continue;
} else {
}
break;
}

var G__20482 = args20480.length;
switch (G__20482) {
case 1:
return sablono.core.range_field20479.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field20479.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20480.length)].join('')));

}
});

sablono.core.range_field20479.cljs$core$IFn$_invoke$arity$1 = (function (name__20025__auto__){
return sablono.core.range_field20479.call(null,name__20025__auto__,null);
});

sablono.core.range_field20479.cljs$core$IFn$_invoke$arity$2 = (function (name__20025__auto__,value__20026__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__20025__auto__,value__20026__auto__);
});

sablono.core.range_field20479.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field20479);

/**
 * Creates a search input field.
 */
sablono.core.search_field20483 = (function sablono$core$search_field20483(var_args){
var args20484 = [];
var len__17388__auto___20551 = arguments.length;
var i__17389__auto___20552 = (0);
while(true){
if((i__17389__auto___20552 < len__17388__auto___20551)){
args20484.push((arguments[i__17389__auto___20552]));

var G__20553 = (i__17389__auto___20552 + (1));
i__17389__auto___20552 = G__20553;
continue;
} else {
}
break;
}

var G__20486 = args20484.length;
switch (G__20486) {
case 1:
return sablono.core.search_field20483.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field20483.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20484.length)].join('')));

}
});

sablono.core.search_field20483.cljs$core$IFn$_invoke$arity$1 = (function (name__20025__auto__){
return sablono.core.search_field20483.call(null,name__20025__auto__,null);
});

sablono.core.search_field20483.cljs$core$IFn$_invoke$arity$2 = (function (name__20025__auto__,value__20026__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__20025__auto__,value__20026__auto__);
});

sablono.core.search_field20483.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field20483);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field20487 = (function sablono$core$tel_field20487(var_args){
var args20488 = [];
var len__17388__auto___20555 = arguments.length;
var i__17389__auto___20556 = (0);
while(true){
if((i__17389__auto___20556 < len__17388__auto___20555)){
args20488.push((arguments[i__17389__auto___20556]));

var G__20557 = (i__17389__auto___20556 + (1));
i__17389__auto___20556 = G__20557;
continue;
} else {
}
break;
}

var G__20490 = args20488.length;
switch (G__20490) {
case 1:
return sablono.core.tel_field20487.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field20487.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20488.length)].join('')));

}
});

sablono.core.tel_field20487.cljs$core$IFn$_invoke$arity$1 = (function (name__20025__auto__){
return sablono.core.tel_field20487.call(null,name__20025__auto__,null);
});

sablono.core.tel_field20487.cljs$core$IFn$_invoke$arity$2 = (function (name__20025__auto__,value__20026__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__20025__auto__,value__20026__auto__);
});

sablono.core.tel_field20487.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field20487);

/**
 * Creates a text input field.
 */
sablono.core.text_field20491 = (function sablono$core$text_field20491(var_args){
var args20492 = [];
var len__17388__auto___20559 = arguments.length;
var i__17389__auto___20560 = (0);
while(true){
if((i__17389__auto___20560 < len__17388__auto___20559)){
args20492.push((arguments[i__17389__auto___20560]));

var G__20561 = (i__17389__auto___20560 + (1));
i__17389__auto___20560 = G__20561;
continue;
} else {
}
break;
}

var G__20494 = args20492.length;
switch (G__20494) {
case 1:
return sablono.core.text_field20491.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field20491.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20492.length)].join('')));

}
});

sablono.core.text_field20491.cljs$core$IFn$_invoke$arity$1 = (function (name__20025__auto__){
return sablono.core.text_field20491.call(null,name__20025__auto__,null);
});

sablono.core.text_field20491.cljs$core$IFn$_invoke$arity$2 = (function (name__20025__auto__,value__20026__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__20025__auto__,value__20026__auto__);
});

sablono.core.text_field20491.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field20491);

/**
 * Creates a time input field.
 */
sablono.core.time_field20495 = (function sablono$core$time_field20495(var_args){
var args20496 = [];
var len__17388__auto___20563 = arguments.length;
var i__17389__auto___20564 = (0);
while(true){
if((i__17389__auto___20564 < len__17388__auto___20563)){
args20496.push((arguments[i__17389__auto___20564]));

var G__20565 = (i__17389__auto___20564 + (1));
i__17389__auto___20564 = G__20565;
continue;
} else {
}
break;
}

var G__20498 = args20496.length;
switch (G__20498) {
case 1:
return sablono.core.time_field20495.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field20495.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20496.length)].join('')));

}
});

sablono.core.time_field20495.cljs$core$IFn$_invoke$arity$1 = (function (name__20025__auto__){
return sablono.core.time_field20495.call(null,name__20025__auto__,null);
});

sablono.core.time_field20495.cljs$core$IFn$_invoke$arity$2 = (function (name__20025__auto__,value__20026__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__20025__auto__,value__20026__auto__);
});

sablono.core.time_field20495.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field20495);

/**
 * Creates a url input field.
 */
sablono.core.url_field20499 = (function sablono$core$url_field20499(var_args){
var args20500 = [];
var len__17388__auto___20567 = arguments.length;
var i__17389__auto___20568 = (0);
while(true){
if((i__17389__auto___20568 < len__17388__auto___20567)){
args20500.push((arguments[i__17389__auto___20568]));

var G__20569 = (i__17389__auto___20568 + (1));
i__17389__auto___20568 = G__20569;
continue;
} else {
}
break;
}

var G__20502 = args20500.length;
switch (G__20502) {
case 1:
return sablono.core.url_field20499.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field20499.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20500.length)].join('')));

}
});

sablono.core.url_field20499.cljs$core$IFn$_invoke$arity$1 = (function (name__20025__auto__){
return sablono.core.url_field20499.call(null,name__20025__auto__,null);
});

sablono.core.url_field20499.cljs$core$IFn$_invoke$arity$2 = (function (name__20025__auto__,value__20026__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__20025__auto__,value__20026__auto__);
});

sablono.core.url_field20499.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field20499);

/**
 * Creates a week input field.
 */
sablono.core.week_field20503 = (function sablono$core$week_field20503(var_args){
var args20504 = [];
var len__17388__auto___20571 = arguments.length;
var i__17389__auto___20572 = (0);
while(true){
if((i__17389__auto___20572 < len__17388__auto___20571)){
args20504.push((arguments[i__17389__auto___20572]));

var G__20573 = (i__17389__auto___20572 + (1));
i__17389__auto___20572 = G__20573;
continue;
} else {
}
break;
}

var G__20506 = args20504.length;
switch (G__20506) {
case 1:
return sablono.core.week_field20503.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field20503.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20504.length)].join('')));

}
});

sablono.core.week_field20503.cljs$core$IFn$_invoke$arity$1 = (function (name__20025__auto__){
return sablono.core.week_field20503.call(null,name__20025__auto__,null);
});

sablono.core.week_field20503.cljs$core$IFn$_invoke$arity$2 = (function (name__20025__auto__,value__20026__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__20025__auto__,value__20026__auto__);
});

sablono.core.week_field20503.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field20503);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box20575 = (function sablono$core$check_box20575(var_args){
var args20576 = [];
var len__17388__auto___20579 = arguments.length;
var i__17389__auto___20580 = (0);
while(true){
if((i__17389__auto___20580 < len__17388__auto___20579)){
args20576.push((arguments[i__17389__auto___20580]));

var G__20581 = (i__17389__auto___20580 + (1));
i__17389__auto___20580 = G__20581;
continue;
} else {
}
break;
}

var G__20578 = args20576.length;
switch (G__20578) {
case 1:
return sablono.core.check_box20575.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box20575.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box20575.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20576.length)].join('')));

}
});

sablono.core.check_box20575.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box20575.call(null,name,null);
});

sablono.core.check_box20575.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box20575.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box20575.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box20575.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box20575);
/**
 * Creates a radio button.
 */
sablono.core.radio_button20583 = (function sablono$core$radio_button20583(var_args){
var args20584 = [];
var len__17388__auto___20587 = arguments.length;
var i__17389__auto___20588 = (0);
while(true){
if((i__17389__auto___20588 < len__17388__auto___20587)){
args20584.push((arguments[i__17389__auto___20588]));

var G__20589 = (i__17389__auto___20588 + (1));
i__17389__auto___20588 = G__20589;
continue;
} else {
}
break;
}

var G__20586 = args20584.length;
switch (G__20586) {
case 1:
return sablono.core.radio_button20583.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button20583.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button20583.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20584.length)].join('')));

}
});

sablono.core.radio_button20583.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button20583.call(null,group,null);
});

sablono.core.radio_button20583.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button20583.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button20583.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button20583.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button20583);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options20591 = (function sablono$core$select_options20591(coll){
var iter__17102__auto__ = (function sablono$core$select_options20591_$_iter__20600(s__20601){
return (new cljs.core.LazySeq(null,(function (){
var s__20601__$1 = s__20601;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20601__$1);
if(temp__4425__auto__){
var s__20601__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20601__$2)){
var c__17100__auto__ = cljs.core.chunk_first.call(null,s__20601__$2);
var size__17101__auto__ = cljs.core.count.call(null,c__17100__auto__);
var b__20603 = cljs.core.chunk_buffer.call(null,size__17101__auto__);
if((function (){var i__20602 = (0);
while(true){
if((i__20602 < size__17101__auto__)){
var x = cljs.core._nth.call(null,c__17100__auto__,i__20602);
cljs.core.chunk_append.call(null,b__20603,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__20606 = x;
var text = cljs.core.nth.call(null,vec__20606,(0),null);
var val = cljs.core.nth.call(null,vec__20606,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__20606,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options20591.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__20608 = (i__20602 + (1));
i__20602 = G__20608;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20603),sablono$core$select_options20591_$_iter__20600.call(null,cljs.core.chunk_rest.call(null,s__20601__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20603),null);
}
} else {
var x = cljs.core.first.call(null,s__20601__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__20607 = x;
var text = cljs.core.nth.call(null,vec__20607,(0),null);
var val = cljs.core.nth.call(null,vec__20607,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__20607,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options20591.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options20591_$_iter__20600.call(null,cljs.core.rest.call(null,s__20601__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17102__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options20591);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down20609 = (function sablono$core$drop_down20609(var_args){
var args20610 = [];
var len__17388__auto___20613 = arguments.length;
var i__17389__auto___20614 = (0);
while(true){
if((i__17389__auto___20614 < len__17388__auto___20613)){
args20610.push((arguments[i__17389__auto___20614]));

var G__20615 = (i__17389__auto___20614 + (1));
i__17389__auto___20614 = G__20615;
continue;
} else {
}
break;
}

var G__20612 = args20610.length;
switch (G__20612) {
case 2:
return sablono.core.drop_down20609.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down20609.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20610.length)].join('')));

}
});

sablono.core.drop_down20609.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down20609.call(null,name,options,null);
});

sablono.core.drop_down20609.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down20609.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down20609);
/**
 * Creates a text area element.
 */
sablono.core.text_area20617 = (function sablono$core$text_area20617(var_args){
var args20618 = [];
var len__17388__auto___20621 = arguments.length;
var i__17389__auto___20622 = (0);
while(true){
if((i__17389__auto___20622 < len__17388__auto___20621)){
args20618.push((arguments[i__17389__auto___20622]));

var G__20623 = (i__17389__auto___20622 + (1));
i__17389__auto___20622 = G__20623;
continue;
} else {
}
break;
}

var G__20620 = args20618.length;
switch (G__20620) {
case 1:
return sablono.core.text_area20617.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area20617.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20618.length)].join('')));

}
});

sablono.core.text_area20617.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area20617.call(null,name,null);
});

sablono.core.text_area20617.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area20617.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area20617);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label20625 = (function sablono$core$label20625(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label20625);
/**
 * Creates a submit button.
 */
sablono.core.submit_button20626 = (function sablono$core$submit_button20626(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button20626);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button20627 = (function sablono$core$reset_button20627(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button20627);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to20628 = (function sablono$core$form_to20628(var_args){
var args__17395__auto__ = [];
var len__17388__auto___20633 = arguments.length;
var i__17389__auto___20634 = (0);
while(true){
if((i__17389__auto___20634 < len__17388__auto___20633)){
args__17395__auto__.push((arguments[i__17389__auto___20634]));

var G__20635 = (i__17389__auto___20634 + (1));
i__17389__auto___20634 = G__20635;
continue;
} else {
}
break;
}

var argseq__17396__auto__ = ((((1) < args__17395__auto__.length))?(new cljs.core.IndexedSeq(args__17395__auto__.slice((1)),(0))):null);
return sablono.core.form_to20628.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17396__auto__);
});

sablono.core.form_to20628.cljs$core$IFn$_invoke$arity$variadic = (function (p__20631,body){
var vec__20632 = p__20631;
var method = cljs.core.nth.call(null,vec__20632,(0),null);
var action = cljs.core.nth.call(null,vec__20632,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to20628.cljs$lang$maxFixedArity = (1);

sablono.core.form_to20628.cljs$lang$applyTo = (function (seq20629){
var G__20630 = cljs.core.first.call(null,seq20629);
var seq20629__$1 = cljs.core.next.call(null,seq20629);
return sablono.core.form_to20628.cljs$core$IFn$_invoke$arity$variadic(G__20630,seq20629__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to20628);

//# sourceMappingURL=core.js.map?rel=1446821460062