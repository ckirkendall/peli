// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async24232 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24232 = (function (fn_handler,f,meta24233){
this.fn_handler = fn_handler;
this.f = f;
this.meta24233 = meta24233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24234,meta24233__$1){
var self__ = this;
var _24234__$1 = this;
return (new cljs.core.async.t_cljs$core$async24232(self__.fn_handler,self__.f,meta24233__$1));
});

cljs.core.async.t_cljs$core$async24232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24234){
var self__ = this;
var _24234__$1 = this;
return self__.meta24233;
});

cljs.core.async.t_cljs$core$async24232.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24232.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24232.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta24233","meta24233",987630682,null)], null);
});

cljs.core.async.t_cljs$core$async24232.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24232";

cljs.core.async.t_cljs$core$async24232.cljs$lang$ctorPrWriter = (function (this__16928__auto__,writer__16929__auto__,opt__16930__auto__){
return cljs.core._write.call(null,writer__16929__auto__,"cljs.core.async/t_cljs$core$async24232");
});

cljs.core.async.__GT_t_cljs$core$async24232 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async24232(fn_handler__$1,f__$1,meta24233){
return (new cljs.core.async.t_cljs$core$async24232(fn_handler__$1,f__$1,meta24233));
});

}

return (new cljs.core.async.t_cljs$core$async24232(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args24237 = [];
var len__17388__auto___24240 = arguments.length;
var i__17389__auto___24241 = (0);
while(true){
if((i__17389__auto___24241 < len__17388__auto___24240)){
args24237.push((arguments[i__17389__auto___24241]));

var G__24242 = (i__17389__auto___24241 + (1));
i__17389__auto___24241 = G__24242;
continue;
} else {
}
break;
}

var G__24239 = args24237.length;
switch (G__24239) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24237.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args24244 = [];
var len__17388__auto___24247 = arguments.length;
var i__17389__auto___24248 = (0);
while(true){
if((i__17389__auto___24248 < len__17388__auto___24247)){
args24244.push((arguments[i__17389__auto___24248]));

var G__24249 = (i__17389__auto___24248 + (1));
i__17389__auto___24248 = G__24249;
continue;
} else {
}
break;
}

var G__24246 = args24244.length;
switch (G__24246) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24244.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24251 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24251);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24251,ret){
return (function (){
return fn1.call(null,val_24251);
});})(val_24251,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args24252 = [];
var len__17388__auto___24255 = arguments.length;
var i__17389__auto___24256 = (0);
while(true){
if((i__17389__auto___24256 < len__17388__auto___24255)){
args24252.push((arguments[i__17389__auto___24256]));

var G__24257 = (i__17389__auto___24256 + (1));
i__17389__auto___24256 = G__24257;
continue;
} else {
}
break;
}

var G__24254 = args24252.length;
switch (G__24254) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24252.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17233__auto___24259 = n;
var x_24260 = (0);
while(true){
if((x_24260 < n__17233__auto___24259)){
(a[x_24260] = (0));

var G__24261 = (x_24260 + (1));
x_24260 = G__24261;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24262 = (i + (1));
i = G__24262;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24266 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24266 = (function (alt_flag,flag,meta24267){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24267 = meta24267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24268,meta24267__$1){
var self__ = this;
var _24268__$1 = this;
return (new cljs.core.async.t_cljs$core$async24266(self__.alt_flag,self__.flag,meta24267__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24266.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24268){
var self__ = this;
var _24268__$1 = this;
return self__.meta24267;
});})(flag))
;

cljs.core.async.t_cljs$core$async24266.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24266.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24266.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24266.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24267","meta24267",2036375194,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24266.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24266.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24266";

cljs.core.async.t_cljs$core$async24266.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16928__auto__,writer__16929__auto__,opt__16930__auto__){
return cljs.core._write.call(null,writer__16929__auto__,"cljs.core.async/t_cljs$core$async24266");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24266 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24266(alt_flag__$1,flag__$1,meta24267){
return (new cljs.core.async.t_cljs$core$async24266(alt_flag__$1,flag__$1,meta24267));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24266(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24272 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24272 = (function (alt_handler,flag,cb,meta24273){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24273 = meta24273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24274,meta24273__$1){
var self__ = this;
var _24274__$1 = this;
return (new cljs.core.async.t_cljs$core$async24272(self__.alt_handler,self__.flag,self__.cb,meta24273__$1));
});

cljs.core.async.t_cljs$core$async24272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24274){
var self__ = this;
var _24274__$1 = this;
return self__.meta24273;
});

cljs.core.async.t_cljs$core$async24272.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24272.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24272.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24272.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24273","meta24273",1684902264,null)], null);
});

cljs.core.async.t_cljs$core$async24272.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24272.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24272";

cljs.core.async.t_cljs$core$async24272.cljs$lang$ctorPrWriter = (function (this__16928__auto__,writer__16929__auto__,opt__16930__auto__){
return cljs.core._write.call(null,writer__16929__auto__,"cljs.core.async/t_cljs$core$async24272");
});

cljs.core.async.__GT_t_cljs$core$async24272 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24272(alt_handler__$1,flag__$1,cb__$1,meta24273){
return (new cljs.core.async.t_cljs$core$async24272(alt_handler__$1,flag__$1,cb__$1,meta24273));
});

}

return (new cljs.core.async.t_cljs$core$async24272(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24275_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24275_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24276_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24276_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16330__auto__ = wport;
if(cljs.core.truth_(or__16330__auto__)){
return or__16330__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24277 = (i + (1));
i = G__24277;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16330__auto__ = ret;
if(cljs.core.truth_(or__16330__auto__)){
return or__16330__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16318__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16318__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16318__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17395__auto__ = [];
var len__17388__auto___24283 = arguments.length;
var i__17389__auto___24284 = (0);
while(true){
if((i__17389__auto___24284 < len__17388__auto___24283)){
args__17395__auto__.push((arguments[i__17389__auto___24284]));

var G__24285 = (i__17389__auto___24284 + (1));
i__17389__auto___24284 = G__24285;
continue;
} else {
}
break;
}

var argseq__17396__auto__ = ((((1) < args__17395__auto__.length))?(new cljs.core.IndexedSeq(args__17395__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17396__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24280){
var map__24281 = p__24280;
var map__24281__$1 = ((((!((map__24281 == null)))?((((map__24281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24281):map__24281);
var opts = map__24281__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24278){
var G__24279 = cljs.core.first.call(null,seq24278);
var seq24278__$1 = cljs.core.next.call(null,seq24278);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24279,seq24278__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args24286 = [];
var len__17388__auto___24336 = arguments.length;
var i__17389__auto___24337 = (0);
while(true){
if((i__17389__auto___24337 < len__17388__auto___24336)){
args24286.push((arguments[i__17389__auto___24337]));

var G__24338 = (i__17389__auto___24337 + (1));
i__17389__auto___24337 = G__24338;
continue;
} else {
}
break;
}

var G__24288 = args24286.length;
switch (G__24288) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24286.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19673__auto___24340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19673__auto___24340){
return (function (){
var f__19674__auto__ = (function (){var switch__19608__auto__ = ((function (c__19673__auto___24340){
return (function (state_24312){
var state_val_24313 = (state_24312[(1)]);
if((state_val_24313 === (7))){
var inst_24308 = (state_24312[(2)]);
var state_24312__$1 = state_24312;
var statearr_24314_24341 = state_24312__$1;
(statearr_24314_24341[(2)] = inst_24308);

(statearr_24314_24341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (1))){
var state_24312__$1 = state_24312;
var statearr_24315_24342 = state_24312__$1;
(statearr_24315_24342[(2)] = null);

(statearr_24315_24342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (4))){
var inst_24291 = (state_24312[(7)]);
var inst_24291__$1 = (state_24312[(2)]);
var inst_24292 = (inst_24291__$1 == null);
var state_24312__$1 = (function (){var statearr_24316 = state_24312;
(statearr_24316[(7)] = inst_24291__$1);

return statearr_24316;
})();
if(cljs.core.truth_(inst_24292)){
var statearr_24317_24343 = state_24312__$1;
(statearr_24317_24343[(1)] = (5));

} else {
var statearr_24318_24344 = state_24312__$1;
(statearr_24318_24344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (13))){
var state_24312__$1 = state_24312;
var statearr_24319_24345 = state_24312__$1;
(statearr_24319_24345[(2)] = null);

(statearr_24319_24345[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (6))){
var inst_24291 = (state_24312[(7)]);
var state_24312__$1 = state_24312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24312__$1,(11),to,inst_24291);
} else {
if((state_val_24313 === (3))){
var inst_24310 = (state_24312[(2)]);
var state_24312__$1 = state_24312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24312__$1,inst_24310);
} else {
if((state_val_24313 === (12))){
var state_24312__$1 = state_24312;
var statearr_24320_24346 = state_24312__$1;
(statearr_24320_24346[(2)] = null);

(statearr_24320_24346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (2))){
var state_24312__$1 = state_24312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24312__$1,(4),from);
} else {
if((state_val_24313 === (11))){
var inst_24301 = (state_24312[(2)]);
var state_24312__$1 = state_24312;
if(cljs.core.truth_(inst_24301)){
var statearr_24321_24347 = state_24312__$1;
(statearr_24321_24347[(1)] = (12));

} else {
var statearr_24322_24348 = state_24312__$1;
(statearr_24322_24348[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (9))){
var state_24312__$1 = state_24312;
var statearr_24323_24349 = state_24312__$1;
(statearr_24323_24349[(2)] = null);

(statearr_24323_24349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (5))){
var state_24312__$1 = state_24312;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24324_24350 = state_24312__$1;
(statearr_24324_24350[(1)] = (8));

} else {
var statearr_24325_24351 = state_24312__$1;
(statearr_24325_24351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (14))){
var inst_24306 = (state_24312[(2)]);
var state_24312__$1 = state_24312;
var statearr_24326_24352 = state_24312__$1;
(statearr_24326_24352[(2)] = inst_24306);

(statearr_24326_24352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (10))){
var inst_24298 = (state_24312[(2)]);
var state_24312__$1 = state_24312;
var statearr_24327_24353 = state_24312__$1;
(statearr_24327_24353[(2)] = inst_24298);

(statearr_24327_24353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (8))){
var inst_24295 = cljs.core.async.close_BANG_.call(null,to);
var state_24312__$1 = state_24312;
var statearr_24328_24354 = state_24312__$1;
(statearr_24328_24354[(2)] = inst_24295);

(statearr_24328_24354[(1)] = (10));


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
});})(c__19673__auto___24340))
;
return ((function (switch__19608__auto__,c__19673__auto___24340){
return (function() {
var cljs$core$async$state_machine__19609__auto__ = null;
var cljs$core$async$state_machine__19609__auto____0 = (function (){
var statearr_24332 = [null,null,null,null,null,null,null,null];
(statearr_24332[(0)] = cljs$core$async$state_machine__19609__auto__);

(statearr_24332[(1)] = (1));

return statearr_24332;
});
var cljs$core$async$state_machine__19609__auto____1 = (function (state_24312){
while(true){
var ret_value__19610__auto__ = (function (){try{while(true){
var result__19611__auto__ = switch__19608__auto__.call(null,state_24312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19611__auto__;
}
break;
}
}catch (e24333){if((e24333 instanceof Object)){
var ex__19612__auto__ = e24333;
var statearr_24334_24355 = state_24312;
(statearr_24334_24355[(5)] = ex__19612__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24356 = state_24312;
state_24312 = G__24356;
continue;
} else {
return ret_value__19610__auto__;
}
break;
}
});
cljs$core$async$state_machine__19609__auto__ = function(state_24312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19609__auto____1.call(this,state_24312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19609__auto____0;
cljs$core$async$state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19609__auto____1;
return cljs$core$async$state_machine__19609__auto__;
})()
;})(switch__19608__auto__,c__19673__auto___24340))
})();
var state__19675__auto__ = (function (){var statearr_24335 = f__19674__auto__.call(null);
(statearr_24335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19673__auto___24340);

return statearr_24335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19675__auto__);
});})(c__19673__auto___24340))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24540){
var vec__24541 = p__24540;
var v = cljs.core.nth.call(null,vec__24541,(0),null);
var p = cljs.core.nth.call(null,vec__24541,(1),null);
var job = vec__24541;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19673__auto___24723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19673__auto___24723,res,vec__24541,v,p,job,jobs,results){
return (function (){
var f__19674__auto__ = (function (){var switch__19608__auto__ = ((function (c__19673__auto___24723,res,vec__24541,v,p,job,jobs,results){
return (function (state_24546){
var state_val_24547 = (state_24546[(1)]);
if((state_val_24547 === (1))){
var state_24546__$1 = state_24546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24546__$1,(2),res,v);
} else {
if((state_val_24547 === (2))){
var inst_24543 = (state_24546[(2)]);
var inst_24544 = cljs.core.async.close_BANG_.call(null,res);
var state_24546__$1 = (function (){var statearr_24548 = state_24546;
(statearr_24548[(7)] = inst_24543);

return statearr_24548;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24546__$1,inst_24544);
} else {
return null;
}
}
});})(c__19673__auto___24723,res,vec__24541,v,p,job,jobs,results))
;
return ((function (switch__19608__auto__,c__19673__auto___24723,res,vec__24541,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____0 = (function (){
var statearr_24552 = [null,null,null,null,null,null,null,null];
(statearr_24552[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__);

(statearr_24552[(1)] = (1));

return statearr_24552;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____1 = (function (state_24546){
while(true){
var ret_value__19610__auto__ = (function (){try{while(true){
var result__19611__auto__ = switch__19608__auto__.call(null,state_24546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19611__auto__;
}
break;
}
}catch (e24553){if((e24553 instanceof Object)){
var ex__19612__auto__ = e24553;
var statearr_24554_24724 = state_24546;
(statearr_24554_24724[(5)] = ex__19612__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24725 = state_24546;
state_24546 = G__24725;
continue;
} else {
return ret_value__19610__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__ = function(state_24546){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____1.call(this,state_24546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__;
})()
;})(switch__19608__auto__,c__19673__auto___24723,res,vec__24541,v,p,job,jobs,results))
})();
var state__19675__auto__ = (function (){var statearr_24555 = f__19674__auto__.call(null);
(statearr_24555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19673__auto___24723);

return statearr_24555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19675__auto__);
});})(c__19673__auto___24723,res,vec__24541,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24556){
var vec__24557 = p__24556;
var v = cljs.core.nth.call(null,vec__24557,(0),null);
var p = cljs.core.nth.call(null,vec__24557,(1),null);
var job = vec__24557;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17233__auto___24726 = n;
var __24727 = (0);
while(true){
if((__24727 < n__17233__auto___24726)){
var G__24558_24728 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24558_24728) {
case "compute":
var c__19673__auto___24730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24727,c__19673__auto___24730,G__24558_24728,n__17233__auto___24726,jobs,results,process,async){
return (function (){
var f__19674__auto__ = (function (){var switch__19608__auto__ = ((function (__24727,c__19673__auto___24730,G__24558_24728,n__17233__auto___24726,jobs,results,process,async){
return (function (state_24571){
var state_val_24572 = (state_24571[(1)]);
if((state_val_24572 === (1))){
var state_24571__$1 = state_24571;
var statearr_24573_24731 = state_24571__$1;
(statearr_24573_24731[(2)] = null);

(statearr_24573_24731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (2))){
var state_24571__$1 = state_24571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24571__$1,(4),jobs);
} else {
if((state_val_24572 === (3))){
var inst_24569 = (state_24571[(2)]);
var state_24571__$1 = state_24571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24571__$1,inst_24569);
} else {
if((state_val_24572 === (4))){
var inst_24561 = (state_24571[(2)]);
var inst_24562 = process.call(null,inst_24561);
var state_24571__$1 = state_24571;
if(cljs.core.truth_(inst_24562)){
var statearr_24574_24732 = state_24571__$1;
(statearr_24574_24732[(1)] = (5));

} else {
var statearr_24575_24733 = state_24571__$1;
(statearr_24575_24733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (5))){
var state_24571__$1 = state_24571;
var statearr_24576_24734 = state_24571__$1;
(statearr_24576_24734[(2)] = null);

(statearr_24576_24734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (6))){
var state_24571__$1 = state_24571;
var statearr_24577_24735 = state_24571__$1;
(statearr_24577_24735[(2)] = null);

(statearr_24577_24735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (7))){
var inst_24567 = (state_24571[(2)]);
var state_24571__$1 = state_24571;
var statearr_24578_24736 = state_24571__$1;
(statearr_24578_24736[(2)] = inst_24567);

(statearr_24578_24736[(1)] = (3));


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
});})(__24727,c__19673__auto___24730,G__24558_24728,n__17233__auto___24726,jobs,results,process,async))
;
return ((function (__24727,switch__19608__auto__,c__19673__auto___24730,G__24558_24728,n__17233__auto___24726,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____0 = (function (){
var statearr_24582 = [null,null,null,null,null,null,null];
(statearr_24582[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__);

(statearr_24582[(1)] = (1));

return statearr_24582;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____1 = (function (state_24571){
while(true){
var ret_value__19610__auto__ = (function (){try{while(true){
var result__19611__auto__ = switch__19608__auto__.call(null,state_24571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19611__auto__;
}
break;
}
}catch (e24583){if((e24583 instanceof Object)){
var ex__19612__auto__ = e24583;
var statearr_24584_24737 = state_24571;
(statearr_24584_24737[(5)] = ex__19612__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24738 = state_24571;
state_24571 = G__24738;
continue;
} else {
return ret_value__19610__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__ = function(state_24571){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____1.call(this,state_24571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__;
})()
;})(__24727,switch__19608__auto__,c__19673__auto___24730,G__24558_24728,n__17233__auto___24726,jobs,results,process,async))
})();
var state__19675__auto__ = (function (){var statearr_24585 = f__19674__auto__.call(null);
(statearr_24585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19673__auto___24730);

return statearr_24585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19675__auto__);
});})(__24727,c__19673__auto___24730,G__24558_24728,n__17233__auto___24726,jobs,results,process,async))
);


break;
case "async":
var c__19673__auto___24739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24727,c__19673__auto___24739,G__24558_24728,n__17233__auto___24726,jobs,results,process,async){
return (function (){
var f__19674__auto__ = (function (){var switch__19608__auto__ = ((function (__24727,c__19673__auto___24739,G__24558_24728,n__17233__auto___24726,jobs,results,process,async){
return (function (state_24598){
var state_val_24599 = (state_24598[(1)]);
if((state_val_24599 === (1))){
var state_24598__$1 = state_24598;
var statearr_24600_24740 = state_24598__$1;
(statearr_24600_24740[(2)] = null);

(statearr_24600_24740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24599 === (2))){
var state_24598__$1 = state_24598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24598__$1,(4),jobs);
} else {
if((state_val_24599 === (3))){
var inst_24596 = (state_24598[(2)]);
var state_24598__$1 = state_24598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24598__$1,inst_24596);
} else {
if((state_val_24599 === (4))){
var inst_24588 = (state_24598[(2)]);
var inst_24589 = async.call(null,inst_24588);
var state_24598__$1 = state_24598;
if(cljs.core.truth_(inst_24589)){
var statearr_24601_24741 = state_24598__$1;
(statearr_24601_24741[(1)] = (5));

} else {
var statearr_24602_24742 = state_24598__$1;
(statearr_24602_24742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24599 === (5))){
var state_24598__$1 = state_24598;
var statearr_24603_24743 = state_24598__$1;
(statearr_24603_24743[(2)] = null);

(statearr_24603_24743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24599 === (6))){
var state_24598__$1 = state_24598;
var statearr_24604_24744 = state_24598__$1;
(statearr_24604_24744[(2)] = null);

(statearr_24604_24744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24599 === (7))){
var inst_24594 = (state_24598[(2)]);
var state_24598__$1 = state_24598;
var statearr_24605_24745 = state_24598__$1;
(statearr_24605_24745[(2)] = inst_24594);

(statearr_24605_24745[(1)] = (3));


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
});})(__24727,c__19673__auto___24739,G__24558_24728,n__17233__auto___24726,jobs,results,process,async))
;
return ((function (__24727,switch__19608__auto__,c__19673__auto___24739,G__24558_24728,n__17233__auto___24726,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____0 = (function (){
var statearr_24609 = [null,null,null,null,null,null,null];
(statearr_24609[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__);

(statearr_24609[(1)] = (1));

return statearr_24609;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____1 = (function (state_24598){
while(true){
var ret_value__19610__auto__ = (function (){try{while(true){
var result__19611__auto__ = switch__19608__auto__.call(null,state_24598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19611__auto__;
}
break;
}
}catch (e24610){if((e24610 instanceof Object)){
var ex__19612__auto__ = e24610;
var statearr_24611_24746 = state_24598;
(statearr_24611_24746[(5)] = ex__19612__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24747 = state_24598;
state_24598 = G__24747;
continue;
} else {
return ret_value__19610__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__ = function(state_24598){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____1.call(this,state_24598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__;
})()
;})(__24727,switch__19608__auto__,c__19673__auto___24739,G__24558_24728,n__17233__auto___24726,jobs,results,process,async))
})();
var state__19675__auto__ = (function (){var statearr_24612 = f__19674__auto__.call(null);
(statearr_24612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19673__auto___24739);

return statearr_24612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19675__auto__);
});})(__24727,c__19673__auto___24739,G__24558_24728,n__17233__auto___24726,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24748 = (__24727 + (1));
__24727 = G__24748;
continue;
} else {
}
break;
}

var c__19673__auto___24749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19673__auto___24749,jobs,results,process,async){
return (function (){
var f__19674__auto__ = (function (){var switch__19608__auto__ = ((function (c__19673__auto___24749,jobs,results,process,async){
return (function (state_24634){
var state_val_24635 = (state_24634[(1)]);
if((state_val_24635 === (1))){
var state_24634__$1 = state_24634;
var statearr_24636_24750 = state_24634__$1;
(statearr_24636_24750[(2)] = null);

(statearr_24636_24750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (2))){
var state_24634__$1 = state_24634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24634__$1,(4),from);
} else {
if((state_val_24635 === (3))){
var inst_24632 = (state_24634[(2)]);
var state_24634__$1 = state_24634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24634__$1,inst_24632);
} else {
if((state_val_24635 === (4))){
var inst_24615 = (state_24634[(7)]);
var inst_24615__$1 = (state_24634[(2)]);
var inst_24616 = (inst_24615__$1 == null);
var state_24634__$1 = (function (){var statearr_24637 = state_24634;
(statearr_24637[(7)] = inst_24615__$1);

return statearr_24637;
})();
if(cljs.core.truth_(inst_24616)){
var statearr_24638_24751 = state_24634__$1;
(statearr_24638_24751[(1)] = (5));

} else {
var statearr_24639_24752 = state_24634__$1;
(statearr_24639_24752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (5))){
var inst_24618 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24634__$1 = state_24634;
var statearr_24640_24753 = state_24634__$1;
(statearr_24640_24753[(2)] = inst_24618);

(statearr_24640_24753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (6))){
var inst_24615 = (state_24634[(7)]);
var inst_24620 = (state_24634[(8)]);
var inst_24620__$1 = cljs.core.async.chan.call(null,(1));
var inst_24621 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24622 = [inst_24615,inst_24620__$1];
var inst_24623 = (new cljs.core.PersistentVector(null,2,(5),inst_24621,inst_24622,null));
var state_24634__$1 = (function (){var statearr_24641 = state_24634;
(statearr_24641[(8)] = inst_24620__$1);

return statearr_24641;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24634__$1,(8),jobs,inst_24623);
} else {
if((state_val_24635 === (7))){
var inst_24630 = (state_24634[(2)]);
var state_24634__$1 = state_24634;
var statearr_24642_24754 = state_24634__$1;
(statearr_24642_24754[(2)] = inst_24630);

(statearr_24642_24754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (8))){
var inst_24620 = (state_24634[(8)]);
var inst_24625 = (state_24634[(2)]);
var state_24634__$1 = (function (){var statearr_24643 = state_24634;
(statearr_24643[(9)] = inst_24625);

return statearr_24643;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24634__$1,(9),results,inst_24620);
} else {
if((state_val_24635 === (9))){
var inst_24627 = (state_24634[(2)]);
var state_24634__$1 = (function (){var statearr_24644 = state_24634;
(statearr_24644[(10)] = inst_24627);

return statearr_24644;
})();
var statearr_24645_24755 = state_24634__$1;
(statearr_24645_24755[(2)] = null);

(statearr_24645_24755[(1)] = (2));


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
});})(c__19673__auto___24749,jobs,results,process,async))
;
return ((function (switch__19608__auto__,c__19673__auto___24749,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____0 = (function (){
var statearr_24649 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24649[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__);

(statearr_24649[(1)] = (1));

return statearr_24649;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____1 = (function (state_24634){
while(true){
var ret_value__19610__auto__ = (function (){try{while(true){
var result__19611__auto__ = switch__19608__auto__.call(null,state_24634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19611__auto__;
}
break;
}
}catch (e24650){if((e24650 instanceof Object)){
var ex__19612__auto__ = e24650;
var statearr_24651_24756 = state_24634;
(statearr_24651_24756[(5)] = ex__19612__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24757 = state_24634;
state_24634 = G__24757;
continue;
} else {
return ret_value__19610__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__ = function(state_24634){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____1.call(this,state_24634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__;
})()
;})(switch__19608__auto__,c__19673__auto___24749,jobs,results,process,async))
})();
var state__19675__auto__ = (function (){var statearr_24652 = f__19674__auto__.call(null);
(statearr_24652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19673__auto___24749);

return statearr_24652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19675__auto__);
});})(c__19673__auto___24749,jobs,results,process,async))
);


var c__19673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19673__auto__,jobs,results,process,async){
return (function (){
var f__19674__auto__ = (function (){var switch__19608__auto__ = ((function (c__19673__auto__,jobs,results,process,async){
return (function (state_24690){
var state_val_24691 = (state_24690[(1)]);
if((state_val_24691 === (7))){
var inst_24686 = (state_24690[(2)]);
var state_24690__$1 = state_24690;
var statearr_24692_24758 = state_24690__$1;
(statearr_24692_24758[(2)] = inst_24686);

(statearr_24692_24758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (20))){
var state_24690__$1 = state_24690;
var statearr_24693_24759 = state_24690__$1;
(statearr_24693_24759[(2)] = null);

(statearr_24693_24759[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (1))){
var state_24690__$1 = state_24690;
var statearr_24694_24760 = state_24690__$1;
(statearr_24694_24760[(2)] = null);

(statearr_24694_24760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (4))){
var inst_24655 = (state_24690[(7)]);
var inst_24655__$1 = (state_24690[(2)]);
var inst_24656 = (inst_24655__$1 == null);
var state_24690__$1 = (function (){var statearr_24695 = state_24690;
(statearr_24695[(7)] = inst_24655__$1);

return statearr_24695;
})();
if(cljs.core.truth_(inst_24656)){
var statearr_24696_24761 = state_24690__$1;
(statearr_24696_24761[(1)] = (5));

} else {
var statearr_24697_24762 = state_24690__$1;
(statearr_24697_24762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (15))){
var inst_24668 = (state_24690[(8)]);
var state_24690__$1 = state_24690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24690__$1,(18),to,inst_24668);
} else {
if((state_val_24691 === (21))){
var inst_24681 = (state_24690[(2)]);
var state_24690__$1 = state_24690;
var statearr_24698_24763 = state_24690__$1;
(statearr_24698_24763[(2)] = inst_24681);

(statearr_24698_24763[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (13))){
var inst_24683 = (state_24690[(2)]);
var state_24690__$1 = (function (){var statearr_24699 = state_24690;
(statearr_24699[(9)] = inst_24683);

return statearr_24699;
})();
var statearr_24700_24764 = state_24690__$1;
(statearr_24700_24764[(2)] = null);

(statearr_24700_24764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (6))){
var inst_24655 = (state_24690[(7)]);
var state_24690__$1 = state_24690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24690__$1,(11),inst_24655);
} else {
if((state_val_24691 === (17))){
var inst_24676 = (state_24690[(2)]);
var state_24690__$1 = state_24690;
if(cljs.core.truth_(inst_24676)){
var statearr_24701_24765 = state_24690__$1;
(statearr_24701_24765[(1)] = (19));

} else {
var statearr_24702_24766 = state_24690__$1;
(statearr_24702_24766[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (3))){
var inst_24688 = (state_24690[(2)]);
var state_24690__$1 = state_24690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24690__$1,inst_24688);
} else {
if((state_val_24691 === (12))){
var inst_24665 = (state_24690[(10)]);
var state_24690__$1 = state_24690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24690__$1,(14),inst_24665);
} else {
if((state_val_24691 === (2))){
var state_24690__$1 = state_24690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24690__$1,(4),results);
} else {
if((state_val_24691 === (19))){
var state_24690__$1 = state_24690;
var statearr_24703_24767 = state_24690__$1;
(statearr_24703_24767[(2)] = null);

(statearr_24703_24767[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (11))){
var inst_24665 = (state_24690[(2)]);
var state_24690__$1 = (function (){var statearr_24704 = state_24690;
(statearr_24704[(10)] = inst_24665);

return statearr_24704;
})();
var statearr_24705_24768 = state_24690__$1;
(statearr_24705_24768[(2)] = null);

(statearr_24705_24768[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (9))){
var state_24690__$1 = state_24690;
var statearr_24706_24769 = state_24690__$1;
(statearr_24706_24769[(2)] = null);

(statearr_24706_24769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (5))){
var state_24690__$1 = state_24690;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24707_24770 = state_24690__$1;
(statearr_24707_24770[(1)] = (8));

} else {
var statearr_24708_24771 = state_24690__$1;
(statearr_24708_24771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (14))){
var inst_24670 = (state_24690[(11)]);
var inst_24668 = (state_24690[(8)]);
var inst_24668__$1 = (state_24690[(2)]);
var inst_24669 = (inst_24668__$1 == null);
var inst_24670__$1 = cljs.core.not.call(null,inst_24669);
var state_24690__$1 = (function (){var statearr_24709 = state_24690;
(statearr_24709[(11)] = inst_24670__$1);

(statearr_24709[(8)] = inst_24668__$1);

return statearr_24709;
})();
if(inst_24670__$1){
var statearr_24710_24772 = state_24690__$1;
(statearr_24710_24772[(1)] = (15));

} else {
var statearr_24711_24773 = state_24690__$1;
(statearr_24711_24773[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (16))){
var inst_24670 = (state_24690[(11)]);
var state_24690__$1 = state_24690;
var statearr_24712_24774 = state_24690__$1;
(statearr_24712_24774[(2)] = inst_24670);

(statearr_24712_24774[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (10))){
var inst_24662 = (state_24690[(2)]);
var state_24690__$1 = state_24690;
var statearr_24713_24775 = state_24690__$1;
(statearr_24713_24775[(2)] = inst_24662);

(statearr_24713_24775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (18))){
var inst_24673 = (state_24690[(2)]);
var state_24690__$1 = state_24690;
var statearr_24714_24776 = state_24690__$1;
(statearr_24714_24776[(2)] = inst_24673);

(statearr_24714_24776[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (8))){
var inst_24659 = cljs.core.async.close_BANG_.call(null,to);
var state_24690__$1 = state_24690;
var statearr_24715_24777 = state_24690__$1;
(statearr_24715_24777[(2)] = inst_24659);

(statearr_24715_24777[(1)] = (10));


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
});})(c__19673__auto__,jobs,results,process,async))
;
return ((function (switch__19608__auto__,c__19673__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____0 = (function (){
var statearr_24719 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24719[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__);

(statearr_24719[(1)] = (1));

return statearr_24719;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____1 = (function (state_24690){
while(true){
var ret_value__19610__auto__ = (function (){try{while(true){
var result__19611__auto__ = switch__19608__auto__.call(null,state_24690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19611__auto__;
}
break;
}
}catch (e24720){if((e24720 instanceof Object)){
var ex__19612__auto__ = e24720;
var statearr_24721_24778 = state_24690;
(statearr_24721_24778[(5)] = ex__19612__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24779 = state_24690;
state_24690 = G__24779;
continue;
} else {
return ret_value__19610__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__ = function(state_24690){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____1.call(this,state_24690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19609__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19609__auto__;
})()
;})(switch__19608__auto__,c__19673__auto__,jobs,results,process,async))
})();
var state__19675__auto__ = (function (){var statearr_24722 = f__19674__auto__.call(null);
(statearr_24722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19673__auto__);

return statearr_24722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19675__auto__);
});})(c__19673__auto__,jobs,results,process,async))
);

return c__19673__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args24780 = [];
var len__17388__auto___24783 = arguments.length;
var i__17389__auto___24784 = (0);
while(true){
if((i__17389__auto___24784 < len__17388__auto___24783)){
args24780.push((arguments[i__17389__auto___24784]));

var G__24785 = (i__17389__auto___24784 + (1));
i__17389__auto___24784 = G__24785;
continue;
} else {
}
break;
}

var G__24782 = args24780.length;
switch (G__24782) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24780.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args24787 = [];
var len__17388__auto___24790 = arguments.length;
var i__17389__auto___24791 = (0);
while(true){
if((i__17389__auto___24791 < len__17388__auto___24790)){
args24787.push((arguments[i__17389__auto___24791]));

var G__24792 = (i__17389__auto___24791 + (1));
i__17389__auto___24791 = G__24792;
continue;
} else {
}
break;
}

var G__24789 = args24787.length;
switch (G__24789) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24787.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args24794 = [];
var len__17388__auto___24847 = arguments.length;
var i__17389__auto___24848 = (0);
while(true){
if((i__17389__auto___24848 < len__17388__auto___24847)){
args24794.push((arguments[i__17389__auto___24848]));

var G__24849 = (i__17389__auto___24848 + (1));
i__17389__auto___24848 = G__24849;
continue;
} else {
}
break;
}

var G__24796 = args24794.length;
switch (G__24796) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24794.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19673__auto___24851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19673__auto___24851,tc,fc){
return (function (){
var f__19674__auto__ = (function (){var switch__19608__auto__ = ((function (c__19673__auto___24851,tc,fc){
return (function (state_24822){
var state_val_24823 = (state_24822[(1)]);
if((state_val_24823 === (7))){
var inst_24818 = (state_24822[(2)]);
var state_24822__$1 = state_24822;
var statearr_24824_24852 = state_24822__$1;
(statearr_24824_24852[(2)] = inst_24818);

(statearr_24824_24852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (1))){
var state_24822__$1 = state_24822;
var statearr_24825_24853 = state_24822__$1;
(statearr_24825_24853[(2)] = null);

(statearr_24825_24853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (4))){
var inst_24799 = (state_24822[(7)]);
var inst_24799__$1 = (state_24822[(2)]);
var inst_24800 = (inst_24799__$1 == null);
var state_24822__$1 = (function (){var statearr_24826 = state_24822;
(statearr_24826[(7)] = inst_24799__$1);

return statearr_24826;
})();
if(cljs.core.truth_(inst_24800)){
var statearr_24827_24854 = state_24822__$1;
(statearr_24827_24854[(1)] = (5));

} else {
var statearr_24828_24855 = state_24822__$1;
(statearr_24828_24855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (13))){
var state_24822__$1 = state_24822;
var statearr_24829_24856 = state_24822__$1;
(statearr_24829_24856[(2)] = null);

(statearr_24829_24856[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (6))){
var inst_24799 = (state_24822[(7)]);
var inst_24805 = p.call(null,inst_24799);
var state_24822__$1 = state_24822;
if(cljs.core.truth_(inst_24805)){
var statearr_24830_24857 = state_24822__$1;
(statearr_24830_24857[(1)] = (9));

} else {
var statearr_24831_24858 = state_24822__$1;
(statearr_24831_24858[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (3))){
var inst_24820 = (state_24822[(2)]);
var state_24822__$1 = state_24822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24822__$1,inst_24820);
} else {
if((state_val_24823 === (12))){
var state_24822__$1 = state_24822;
var statearr_24832_24859 = state_24822__$1;
(statearr_24832_24859[(2)] = null);

(statearr_24832_24859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (2))){
var state_24822__$1 = state_24822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24822__$1,(4),ch);
} else {
if((state_val_24823 === (11))){
var inst_24799 = (state_24822[(7)]);
var inst_24809 = (state_24822[(2)]);
var state_24822__$1 = state_24822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24822__$1,(8),inst_24809,inst_24799);
} else {
if((state_val_24823 === (9))){
var state_24822__$1 = state_24822;
var statearr_24833_24860 = state_24822__$1;
(statearr_24833_24860[(2)] = tc);

(statearr_24833_24860[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (5))){
var inst_24802 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24803 = cljs.core.async.close_BANG_.call(null,fc);
var state_24822__$1 = (function (){var statearr_24834 = state_24822;
(statearr_24834[(8)] = inst_24802);

return statearr_24834;
})();
var statearr_24835_24861 = state_24822__$1;
(statearr_24835_24861[(2)] = inst_24803);

(statearr_24835_24861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (14))){
var inst_24816 = (state_24822[(2)]);
var state_24822__$1 = state_24822;
var statearr_24836_24862 = state_24822__$1;
(statearr_24836_24862[(2)] = inst_24816);

(statearr_24836_24862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (10))){
var state_24822__$1 = state_24822;
var statearr_24837_24863 = state_24822__$1;
(statearr_24837_24863[(2)] = fc);

(statearr_24837_24863[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (8))){
var inst_24811 = (state_24822[(2)]);
var state_24822__$1 = state_24822;
if(cljs.core.truth_(inst_24811)){
var statearr_24838_24864 = state_24822__$1;
(statearr_24838_24864[(1)] = (12));

} else {
var statearr_24839_24865 = state_24822__$1;
(statearr_24839_24865[(1)] = (13));

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
});})(c__19673__auto___24851,tc,fc))
;
return ((function (switch__19608__auto__,c__19673__auto___24851,tc,fc){
return (function() {
var cljs$core$async$state_machine__19609__auto__ = null;
var cljs$core$async$state_machine__19609__auto____0 = (function (){
var statearr_24843 = [null,null,null,null,null,null,null,null,null];
(statearr_24843[(0)] = cljs$core$async$state_machine__19609__auto__);

(statearr_24843[(1)] = (1));

return statearr_24843;
});
var cljs$core$async$state_machine__19609__auto____1 = (function (state_24822){
while(true){
var ret_value__19610__auto__ = (function (){try{while(true){
var result__19611__auto__ = switch__19608__auto__.call(null,state_24822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19611__auto__;
}
break;
}
}catch (e24844){if((e24844 instanceof Object)){
var ex__19612__auto__ = e24844;
var statearr_24845_24866 = state_24822;
(statearr_24845_24866[(5)] = ex__19612__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24867 = state_24822;
state_24822 = G__24867;
continue;
} else {
return ret_value__19610__auto__;
}
break;
}
});
cljs$core$async$state_machine__19609__auto__ = function(state_24822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19609__auto____1.call(this,state_24822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19609__auto____0;
cljs$core$async$state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19609__auto____1;
return cljs$core$async$state_machine__19609__auto__;
})()
;})(switch__19608__auto__,c__19673__auto___24851,tc,fc))
})();
var state__19675__auto__ = (function (){var statearr_24846 = f__19674__auto__.call(null);
(statearr_24846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19673__auto___24851);

return statearr_24846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19675__auto__);
});})(c__19673__auto___24851,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19673__auto__){
return (function (){
var f__19674__auto__ = (function (){var switch__19608__auto__ = ((function (c__19673__auto__){
return (function (state_24914){
var state_val_24915 = (state_24914[(1)]);
if((state_val_24915 === (1))){
var inst_24900 = init;
var state_24914__$1 = (function (){var statearr_24916 = state_24914;
(statearr_24916[(7)] = inst_24900);

return statearr_24916;
})();
var statearr_24917_24932 = state_24914__$1;
(statearr_24917_24932[(2)] = null);

(statearr_24917_24932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24915 === (2))){
var state_24914__$1 = state_24914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24914__$1,(4),ch);
} else {
if((state_val_24915 === (3))){
var inst_24912 = (state_24914[(2)]);
var state_24914__$1 = state_24914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24914__$1,inst_24912);
} else {
if((state_val_24915 === (4))){
var inst_24903 = (state_24914[(8)]);
var inst_24903__$1 = (state_24914[(2)]);
var inst_24904 = (inst_24903__$1 == null);
var state_24914__$1 = (function (){var statearr_24918 = state_24914;
(statearr_24918[(8)] = inst_24903__$1);

return statearr_24918;
})();
if(cljs.core.truth_(inst_24904)){
var statearr_24919_24933 = state_24914__$1;
(statearr_24919_24933[(1)] = (5));

} else {
var statearr_24920_24934 = state_24914__$1;
(statearr_24920_24934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24915 === (5))){
var inst_24900 = (state_24914[(7)]);
var state_24914__$1 = state_24914;
var statearr_24921_24935 = state_24914__$1;
(statearr_24921_24935[(2)] = inst_24900);

(statearr_24921_24935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24915 === (6))){
var inst_24903 = (state_24914[(8)]);
var inst_24900 = (state_24914[(7)]);
var inst_24907 = f.call(null,inst_24900,inst_24903);
var inst_24900__$1 = inst_24907;
var state_24914__$1 = (function (){var statearr_24922 = state_24914;
(statearr_24922[(7)] = inst_24900__$1);

return statearr_24922;
})();
var statearr_24923_24936 = state_24914__$1;
(statearr_24923_24936[(2)] = null);

(statearr_24923_24936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24915 === (7))){
var inst_24910 = (state_24914[(2)]);
var state_24914__$1 = state_24914;
var statearr_24924_24937 = state_24914__$1;
(statearr_24924_24937[(2)] = inst_24910);

(statearr_24924_24937[(1)] = (3));


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
});})(c__19673__auto__))
;
return ((function (switch__19608__auto__,c__19673__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19609__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19609__auto____0 = (function (){
var statearr_24928 = [null,null,null,null,null,null,null,null,null];
(statearr_24928[(0)] = cljs$core$async$reduce_$_state_machine__19609__auto__);

(statearr_24928[(1)] = (1));

return statearr_24928;
});
var cljs$core$async$reduce_$_state_machine__19609__auto____1 = (function (state_24914){
while(true){
var ret_value__19610__auto__ = (function (){try{while(true){
var result__19611__auto__ = switch__19608__auto__.call(null,state_24914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19611__auto__;
}
break;
}
}catch (e24929){if((e24929 instanceof Object)){
var ex__19612__auto__ = e24929;
var statearr_24930_24938 = state_24914;
(statearr_24930_24938[(5)] = ex__19612__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24939 = state_24914;
state_24914 = G__24939;
continue;
} else {
return ret_value__19610__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19609__auto__ = function(state_24914){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19609__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19609__auto____1.call(this,state_24914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19609__auto____0;
cljs$core$async$reduce_$_state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19609__auto____1;
return cljs$core$async$reduce_$_state_machine__19609__auto__;
})()
;})(switch__19608__auto__,c__19673__auto__))
})();
var state__19675__auto__ = (function (){var statearr_24931 = f__19674__auto__.call(null);
(statearr_24931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19673__auto__);

return statearr_24931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19675__auto__);
});})(c__19673__auto__))
);

return c__19673__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args24940 = [];
var len__17388__auto___24992 = arguments.length;
var i__17389__auto___24993 = (0);
while(true){
if((i__17389__auto___24993 < len__17388__auto___24992)){
args24940.push((arguments[i__17389__auto___24993]));

var G__24994 = (i__17389__auto___24993 + (1));
i__17389__auto___24993 = G__24994;
continue;
} else {
}
break;
}

var G__24942 = args24940.length;
switch (G__24942) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24940.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19673__auto__){
return (function (){
var f__19674__auto__ = (function (){var switch__19608__auto__ = ((function (c__19673__auto__){
return (function (state_24967){
var state_val_24968 = (state_24967[(1)]);
if((state_val_24968 === (7))){
var inst_24949 = (state_24967[(2)]);
var state_24967__$1 = state_24967;
var statearr_24969_24996 = state_24967__$1;
(statearr_24969_24996[(2)] = inst_24949);

(statearr_24969_24996[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (1))){
var inst_24943 = cljs.core.seq.call(null,coll);
var inst_24944 = inst_24943;
var state_24967__$1 = (function (){var statearr_24970 = state_24967;
(statearr_24970[(7)] = inst_24944);

return statearr_24970;
})();
var statearr_24971_24997 = state_24967__$1;
(statearr_24971_24997[(2)] = null);

(statearr_24971_24997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (4))){
var inst_24944 = (state_24967[(7)]);
var inst_24947 = cljs.core.first.call(null,inst_24944);
var state_24967__$1 = state_24967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24967__$1,(7),ch,inst_24947);
} else {
if((state_val_24968 === (13))){
var inst_24961 = (state_24967[(2)]);
var state_24967__$1 = state_24967;
var statearr_24972_24998 = state_24967__$1;
(statearr_24972_24998[(2)] = inst_24961);

(statearr_24972_24998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (6))){
var inst_24952 = (state_24967[(2)]);
var state_24967__$1 = state_24967;
if(cljs.core.truth_(inst_24952)){
var statearr_24973_24999 = state_24967__$1;
(statearr_24973_24999[(1)] = (8));

} else {
var statearr_24974_25000 = state_24967__$1;
(statearr_24974_25000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (3))){
var inst_24965 = (state_24967[(2)]);
var state_24967__$1 = state_24967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24967__$1,inst_24965);
} else {
if((state_val_24968 === (12))){
var state_24967__$1 = state_24967;
var statearr_24975_25001 = state_24967__$1;
(statearr_24975_25001[(2)] = null);

(statearr_24975_25001[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (2))){
var inst_24944 = (state_24967[(7)]);
var state_24967__$1 = state_24967;
if(cljs.core.truth_(inst_24944)){
var statearr_24976_25002 = state_24967__$1;
(statearr_24976_25002[(1)] = (4));

} else {
var statearr_24977_25003 = state_24967__$1;
(statearr_24977_25003[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (11))){
var inst_24958 = cljs.core.async.close_BANG_.call(null,ch);
var state_24967__$1 = state_24967;
var statearr_24978_25004 = state_24967__$1;
(statearr_24978_25004[(2)] = inst_24958);

(statearr_24978_25004[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (9))){
var state_24967__$1 = state_24967;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24979_25005 = state_24967__$1;
(statearr_24979_25005[(1)] = (11));

} else {
var statearr_24980_25006 = state_24967__$1;
(statearr_24980_25006[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (5))){
var inst_24944 = (state_24967[(7)]);
var state_24967__$1 = state_24967;
var statearr_24981_25007 = state_24967__$1;
(statearr_24981_25007[(2)] = inst_24944);

(statearr_24981_25007[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (10))){
var inst_24963 = (state_24967[(2)]);
var state_24967__$1 = state_24967;
var statearr_24982_25008 = state_24967__$1;
(statearr_24982_25008[(2)] = inst_24963);

(statearr_24982_25008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (8))){
var inst_24944 = (state_24967[(7)]);
var inst_24954 = cljs.core.next.call(null,inst_24944);
var inst_24944__$1 = inst_24954;
var state_24967__$1 = (function (){var statearr_24983 = state_24967;
(statearr_24983[(7)] = inst_24944__$1);

return statearr_24983;
})();
var statearr_24984_25009 = state_24967__$1;
(statearr_24984_25009[(2)] = null);

(statearr_24984_25009[(1)] = (2));


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
});})(c__19673__auto__))
;
return ((function (switch__19608__auto__,c__19673__auto__){
return (function() {
var cljs$core$async$state_machine__19609__auto__ = null;
var cljs$core$async$state_machine__19609__auto____0 = (function (){
var statearr_24988 = [null,null,null,null,null,null,null,null];
(statearr_24988[(0)] = cljs$core$async$state_machine__19609__auto__);

(statearr_24988[(1)] = (1));

return statearr_24988;
});
var cljs$core$async$state_machine__19609__auto____1 = (function (state_24967){
while(true){
var ret_value__19610__auto__ = (function (){try{while(true){
var result__19611__auto__ = switch__19608__auto__.call(null,state_24967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19611__auto__;
}
break;
}
}catch (e24989){if((e24989 instanceof Object)){
var ex__19612__auto__ = e24989;
var statearr_24990_25010 = state_24967;
(statearr_24990_25010[(5)] = ex__19612__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25011 = state_24967;
state_24967 = G__25011;
continue;
} else {
return ret_value__19610__auto__;
}
break;
}
});
cljs$core$async$state_machine__19609__auto__ = function(state_24967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19609__auto____1.call(this,state_24967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19609__auto____0;
cljs$core$async$state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19609__auto____1;
return cljs$core$async$state_machine__19609__auto__;
})()
;})(switch__19608__auto__,c__19673__auto__))
})();
var state__19675__auto__ = (function (){var statearr_24991 = f__19674__auto__.call(null);
(statearr_24991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19673__auto__);

return statearr_24991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19675__auto__);
});})(c__19673__auto__))
);

return c__19673__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16985__auto__ = (((_ == null))?null:_);
var m__16986__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,_);
} else {
var m__16986__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16985__auto__ = (((m == null))?null:m);
var m__16986__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__16986__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16985__auto__ = (((m == null))?null:m);
var m__16986__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,m,ch);
} else {
var m__16986__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16985__auto__ = (((m == null))?null:m);
var m__16986__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,m);
} else {
var m__16986__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25233 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25233 = (function (mult,ch,cs,meta25234){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25234 = meta25234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25235,meta25234__$1){
var self__ = this;
var _25235__$1 = this;
return (new cljs.core.async.t_cljs$core$async25233(self__.mult,self__.ch,self__.cs,meta25234__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25233.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25235){
var self__ = this;
var _25235__$1 = this;
return self__.meta25234;
});})(cs))
;

cljs.core.async.t_cljs$core$async25233.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25233.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25233.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25233.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25233.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25233.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25233.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25234","meta25234",-441748035,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25233.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25233";

cljs.core.async.t_cljs$core$async25233.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16928__auto__,writer__16929__auto__,opt__16930__auto__){
return cljs.core._write.call(null,writer__16929__auto__,"cljs.core.async/t_cljs$core$async25233");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25233 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25233(mult__$1,ch__$1,cs__$1,meta25234){
return (new cljs.core.async.t_cljs$core$async25233(mult__$1,ch__$1,cs__$1,meta25234));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25233(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19673__auto___25454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19673__auto___25454,cs,m,dchan,dctr,done){
return (function (){
var f__19674__auto__ = (function (){var switch__19608__auto__ = ((function (c__19673__auto___25454,cs,m,dchan,dctr,done){
return (function (state_25366){
var state_val_25367 = (state_25366[(1)]);
if((state_val_25367 === (7))){
var inst_25362 = (state_25366[(2)]);
var state_25366__$1 = state_25366;
var statearr_25368_25455 = state_25366__$1;
(statearr_25368_25455[(2)] = inst_25362);

(statearr_25368_25455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (20))){
var inst_25267 = (state_25366[(7)]);
var inst_25277 = cljs.core.first.call(null,inst_25267);
var inst_25278 = cljs.core.nth.call(null,inst_25277,(0),null);
var inst_25279 = cljs.core.nth.call(null,inst_25277,(1),null);
var state_25366__$1 = (function (){var statearr_25369 = state_25366;
(statearr_25369[(8)] = inst_25278);

return statearr_25369;
})();
if(cljs.core.truth_(inst_25279)){
var statearr_25370_25456 = state_25366__$1;
(statearr_25370_25456[(1)] = (22));

} else {
var statearr_25371_25457 = state_25366__$1;
(statearr_25371_25457[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (27))){
var inst_25238 = (state_25366[(9)]);
var inst_25307 = (state_25366[(10)]);
var inst_25309 = (state_25366[(11)]);
var inst_25314 = (state_25366[(12)]);
var inst_25314__$1 = cljs.core._nth.call(null,inst_25307,inst_25309);
var inst_25315 = cljs.core.async.put_BANG_.call(null,inst_25314__$1,inst_25238,done);
var state_25366__$1 = (function (){var statearr_25372 = state_25366;
(statearr_25372[(12)] = inst_25314__$1);

return statearr_25372;
})();
if(cljs.core.truth_(inst_25315)){
var statearr_25373_25458 = state_25366__$1;
(statearr_25373_25458[(1)] = (30));

} else {
var statearr_25374_25459 = state_25366__$1;
(statearr_25374_25459[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (1))){
var state_25366__$1 = state_25366;
var statearr_25375_25460 = state_25366__$1;
(statearr_25375_25460[(2)] = null);

(statearr_25375_25460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (24))){
var inst_25267 = (state_25366[(7)]);
var inst_25284 = (state_25366[(2)]);
var inst_25285 = cljs.core.next.call(null,inst_25267);
var inst_25247 = inst_25285;
var inst_25248 = null;
var inst_25249 = (0);
var inst_25250 = (0);
var state_25366__$1 = (function (){var statearr_25376 = state_25366;
(statearr_25376[(13)] = inst_25284);

(statearr_25376[(14)] = inst_25250);

(statearr_25376[(15)] = inst_25247);

(statearr_25376[(16)] = inst_25248);

(statearr_25376[(17)] = inst_25249);

return statearr_25376;
})();
var statearr_25377_25461 = state_25366__$1;
(statearr_25377_25461[(2)] = null);

(statearr_25377_25461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (39))){
var state_25366__$1 = state_25366;
var statearr_25381_25462 = state_25366__$1;
(statearr_25381_25462[(2)] = null);

(statearr_25381_25462[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (4))){
var inst_25238 = (state_25366[(9)]);
var inst_25238__$1 = (state_25366[(2)]);
var inst_25239 = (inst_25238__$1 == null);
var state_25366__$1 = (function (){var statearr_25382 = state_25366;
(statearr_25382[(9)] = inst_25238__$1);

return statearr_25382;
})();
if(cljs.core.truth_(inst_25239)){
var statearr_25383_25463 = state_25366__$1;
(statearr_25383_25463[(1)] = (5));

} else {
var statearr_25384_25464 = state_25366__$1;
(statearr_25384_25464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (15))){
var inst_25250 = (state_25366[(14)]);
var inst_25247 = (state_25366[(15)]);
var inst_25248 = (state_25366[(16)]);
var inst_25249 = (state_25366[(17)]);
var inst_25263 = (state_25366[(2)]);
var inst_25264 = (inst_25250 + (1));
var tmp25378 = inst_25247;
var tmp25379 = inst_25248;
var tmp25380 = inst_25249;
var inst_25247__$1 = tmp25378;
var inst_25248__$1 = tmp25379;
var inst_25249__$1 = tmp25380;
var inst_25250__$1 = inst_25264;
var state_25366__$1 = (function (){var statearr_25385 = state_25366;
(statearr_25385[(14)] = inst_25250__$1);

(statearr_25385[(15)] = inst_25247__$1);

(statearr_25385[(18)] = inst_25263);

(statearr_25385[(16)] = inst_25248__$1);

(statearr_25385[(17)] = inst_25249__$1);

return statearr_25385;
})();
var statearr_25386_25465 = state_25366__$1;
(statearr_25386_25465[(2)] = null);

(statearr_25386_25465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (21))){
var inst_25288 = (state_25366[(2)]);
var state_25366__$1 = state_25366;
var statearr_25390_25466 = state_25366__$1;
(statearr_25390_25466[(2)] = inst_25288);

(statearr_25390_25466[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (31))){
var inst_25314 = (state_25366[(12)]);
var inst_25318 = done.call(null,null);
var inst_25319 = cljs.core.async.untap_STAR_.call(null,m,inst_25314);
var state_25366__$1 = (function (){var statearr_25391 = state_25366;
(statearr_25391[(19)] = inst_25318);

return statearr_25391;
})();
var statearr_25392_25467 = state_25366__$1;
(statearr_25392_25467[(2)] = inst_25319);

(statearr_25392_25467[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (32))){
var inst_25307 = (state_25366[(10)]);
var inst_25308 = (state_25366[(20)]);
var inst_25309 = (state_25366[(11)]);
var inst_25306 = (state_25366[(21)]);
var inst_25321 = (state_25366[(2)]);
var inst_25322 = (inst_25309 + (1));
var tmp25387 = inst_25307;
var tmp25388 = inst_25308;
var tmp25389 = inst_25306;
var inst_25306__$1 = tmp25389;
var inst_25307__$1 = tmp25387;
var inst_25308__$1 = tmp25388;
var inst_25309__$1 = inst_25322;
var state_25366__$1 = (function (){var statearr_25393 = state_25366;
(statearr_25393[(10)] = inst_25307__$1);

(statearr_25393[(20)] = inst_25308__$1);

(statearr_25393[(11)] = inst_25309__$1);

(statearr_25393[(21)] = inst_25306__$1);

(statearr_25393[(22)] = inst_25321);

return statearr_25393;
})();
var statearr_25394_25468 = state_25366__$1;
(statearr_25394_25468[(2)] = null);

(statearr_25394_25468[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (40))){
var inst_25334 = (state_25366[(23)]);
var inst_25338 = done.call(null,null);
var inst_25339 = cljs.core.async.untap_STAR_.call(null,m,inst_25334);
var state_25366__$1 = (function (){var statearr_25395 = state_25366;
(statearr_25395[(24)] = inst_25338);

return statearr_25395;
})();
var statearr_25396_25469 = state_25366__$1;
(statearr_25396_25469[(2)] = inst_25339);

(statearr_25396_25469[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (33))){
var inst_25325 = (state_25366[(25)]);
var inst_25327 = cljs.core.chunked_seq_QMARK_.call(null,inst_25325);
var state_25366__$1 = state_25366;
if(inst_25327){
var statearr_25397_25470 = state_25366__$1;
(statearr_25397_25470[(1)] = (36));

} else {
var statearr_25398_25471 = state_25366__$1;
(statearr_25398_25471[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (13))){
var inst_25257 = (state_25366[(26)]);
var inst_25260 = cljs.core.async.close_BANG_.call(null,inst_25257);
var state_25366__$1 = state_25366;
var statearr_25399_25472 = state_25366__$1;
(statearr_25399_25472[(2)] = inst_25260);

(statearr_25399_25472[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (22))){
var inst_25278 = (state_25366[(8)]);
var inst_25281 = cljs.core.async.close_BANG_.call(null,inst_25278);
var state_25366__$1 = state_25366;
var statearr_25400_25473 = state_25366__$1;
(statearr_25400_25473[(2)] = inst_25281);

(statearr_25400_25473[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (36))){
var inst_25325 = (state_25366[(25)]);
var inst_25329 = cljs.core.chunk_first.call(null,inst_25325);
var inst_25330 = cljs.core.chunk_rest.call(null,inst_25325);
var inst_25331 = cljs.core.count.call(null,inst_25329);
var inst_25306 = inst_25330;
var inst_25307 = inst_25329;
var inst_25308 = inst_25331;
var inst_25309 = (0);
var state_25366__$1 = (function (){var statearr_25401 = state_25366;
(statearr_25401[(10)] = inst_25307);

(statearr_25401[(20)] = inst_25308);

(statearr_25401[(11)] = inst_25309);

(statearr_25401[(21)] = inst_25306);

return statearr_25401;
})();
var statearr_25402_25474 = state_25366__$1;
(statearr_25402_25474[(2)] = null);

(statearr_25402_25474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (41))){
var inst_25325 = (state_25366[(25)]);
var inst_25341 = (state_25366[(2)]);
var inst_25342 = cljs.core.next.call(null,inst_25325);
var inst_25306 = inst_25342;
var inst_25307 = null;
var inst_25308 = (0);
var inst_25309 = (0);
var state_25366__$1 = (function (){var statearr_25403 = state_25366;
(statearr_25403[(10)] = inst_25307);

(statearr_25403[(20)] = inst_25308);

(statearr_25403[(27)] = inst_25341);

(statearr_25403[(11)] = inst_25309);

(statearr_25403[(21)] = inst_25306);

return statearr_25403;
})();
var statearr_25404_25475 = state_25366__$1;
(statearr_25404_25475[(2)] = null);

(statearr_25404_25475[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (43))){
var state_25366__$1 = state_25366;
var statearr_25405_25476 = state_25366__$1;
(statearr_25405_25476[(2)] = null);

(statearr_25405_25476[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (29))){
var inst_25350 = (state_25366[(2)]);
var state_25366__$1 = state_25366;
var statearr_25406_25477 = state_25366__$1;
(statearr_25406_25477[(2)] = inst_25350);

(statearr_25406_25477[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (44))){
var inst_25359 = (state_25366[(2)]);
var state_25366__$1 = (function (){var statearr_25407 = state_25366;
(statearr_25407[(28)] = inst_25359);

return statearr_25407;
})();
var statearr_25408_25478 = state_25366__$1;
(statearr_25408_25478[(2)] = null);

(statearr_25408_25478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (6))){
var inst_25298 = (state_25366[(29)]);
var inst_25297 = cljs.core.deref.call(null,cs);
var inst_25298__$1 = cljs.core.keys.call(null,inst_25297);
var inst_25299 = cljs.core.count.call(null,inst_25298__$1);
var inst_25300 = cljs.core.reset_BANG_.call(null,dctr,inst_25299);
var inst_25305 = cljs.core.seq.call(null,inst_25298__$1);
var inst_25306 = inst_25305;
var inst_25307 = null;
var inst_25308 = (0);
var inst_25309 = (0);
var state_25366__$1 = (function (){var statearr_25409 = state_25366;
(statearr_25409[(10)] = inst_25307);

(statearr_25409[(30)] = inst_25300);

(statearr_25409[(20)] = inst_25308);

(statearr_25409[(29)] = inst_25298__$1);

(statearr_25409[(11)] = inst_25309);

(statearr_25409[(21)] = inst_25306);

return statearr_25409;
})();
var statearr_25410_25479 = state_25366__$1;
(statearr_25410_25479[(2)] = null);

(statearr_25410_25479[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (28))){
var inst_25325 = (state_25366[(25)]);
var inst_25306 = (state_25366[(21)]);
var inst_25325__$1 = cljs.core.seq.call(null,inst_25306);
var state_25366__$1 = (function (){var statearr_25411 = state_25366;
(statearr_25411[(25)] = inst_25325__$1);

return statearr_25411;
})();
if(inst_25325__$1){
var statearr_25412_25480 = state_25366__$1;
(statearr_25412_25480[(1)] = (33));

} else {
var statearr_25413_25481 = state_25366__$1;
(statearr_25413_25481[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (25))){
var inst_25308 = (state_25366[(20)]);
var inst_25309 = (state_25366[(11)]);
var inst_25311 = (inst_25309 < inst_25308);
var inst_25312 = inst_25311;
var state_25366__$1 = state_25366;
if(cljs.core.truth_(inst_25312)){
var statearr_25414_25482 = state_25366__$1;
(statearr_25414_25482[(1)] = (27));

} else {
var statearr_25415_25483 = state_25366__$1;
(statearr_25415_25483[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (34))){
var state_25366__$1 = state_25366;
var statearr_25416_25484 = state_25366__$1;
(statearr_25416_25484[(2)] = null);

(statearr_25416_25484[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (17))){
var state_25366__$1 = state_25366;
var statearr_25417_25485 = state_25366__$1;
(statearr_25417_25485[(2)] = null);

(statearr_25417_25485[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (3))){
var inst_25364 = (state_25366[(2)]);
var state_25366__$1 = state_25366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25366__$1,inst_25364);
} else {
if((state_val_25367 === (12))){
var inst_25293 = (state_25366[(2)]);
var state_25366__$1 = state_25366;
var statearr_25418_25486 = state_25366__$1;
(statearr_25418_25486[(2)] = inst_25293);

(statearr_25418_25486[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (2))){
var state_25366__$1 = state_25366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25366__$1,(4),ch);
} else {
if((state_val_25367 === (23))){
var state_25366__$1 = state_25366;
var statearr_25419_25487 = state_25366__$1;
(statearr_25419_25487[(2)] = null);

(statearr_25419_25487[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (35))){
var inst_25348 = (state_25366[(2)]);
var state_25366__$1 = state_25366;
var statearr_25420_25488 = state_25366__$1;
(statearr_25420_25488[(2)] = inst_25348);

(statearr_25420_25488[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (19))){
var inst_25267 = (state_25366[(7)]);
var inst_25271 = cljs.core.chunk_first.call(null,inst_25267);
var inst_25272 = cljs.core.chunk_rest.call(null,inst_25267);
var inst_25273 = cljs.core.count.call(null,inst_25271);
var inst_25247 = inst_25272;
var inst_25248 = inst_25271;
var inst_25249 = inst_25273;
var inst_25250 = (0);
var state_25366__$1 = (function (){var statearr_25421 = state_25366;
(statearr_25421[(14)] = inst_25250);

(statearr_25421[(15)] = inst_25247);

(statearr_25421[(16)] = inst_25248);

(statearr_25421[(17)] = inst_25249);

return statearr_25421;
})();
var statearr_25422_25489 = state_25366__$1;
(statearr_25422_25489[(2)] = null);

(statearr_25422_25489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (11))){
var inst_25247 = (state_25366[(15)]);
var inst_25267 = (state_25366[(7)]);
var inst_25267__$1 = cljs.core.seq.call(null,inst_25247);
var state_25366__$1 = (function (){var statearr_25423 = state_25366;
(statearr_25423[(7)] = inst_25267__$1);

return statearr_25423;
})();
if(inst_25267__$1){
var statearr_25424_25490 = state_25366__$1;
(statearr_25424_25490[(1)] = (16));

} else {
var statearr_25425_25491 = state_25366__$1;
(statearr_25425_25491[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (9))){
var inst_25295 = (state_25366[(2)]);
var state_25366__$1 = state_25366;
var statearr_25426_25492 = state_25366__$1;
(statearr_25426_25492[(2)] = inst_25295);

(statearr_25426_25492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (5))){
var inst_25245 = cljs.core.deref.call(null,cs);
var inst_25246 = cljs.core.seq.call(null,inst_25245);
var inst_25247 = inst_25246;
var inst_25248 = null;
var inst_25249 = (0);
var inst_25250 = (0);
var state_25366__$1 = (function (){var statearr_25427 = state_25366;
(statearr_25427[(14)] = inst_25250);

(statearr_25427[(15)] = inst_25247);

(statearr_25427[(16)] = inst_25248);

(statearr_25427[(17)] = inst_25249);

return statearr_25427;
})();
var statearr_25428_25493 = state_25366__$1;
(statearr_25428_25493[(2)] = null);

(statearr_25428_25493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (14))){
var state_25366__$1 = state_25366;
var statearr_25429_25494 = state_25366__$1;
(statearr_25429_25494[(2)] = null);

(statearr_25429_25494[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (45))){
var inst_25356 = (state_25366[(2)]);
var state_25366__$1 = state_25366;
var statearr_25430_25495 = state_25366__$1;
(statearr_25430_25495[(2)] = inst_25356);

(statearr_25430_25495[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (26))){
var inst_25298 = (state_25366[(29)]);
var inst_25352 = (state_25366[(2)]);
var inst_25353 = cljs.core.seq.call(null,inst_25298);
var state_25366__$1 = (function (){var statearr_25431 = state_25366;
(statearr_25431[(31)] = inst_25352);

return statearr_25431;
})();
if(inst_25353){
var statearr_25432_25496 = state_25366__$1;
(statearr_25432_25496[(1)] = (42));

} else {
var statearr_25433_25497 = state_25366__$1;
(statearr_25433_25497[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (16))){
var inst_25267 = (state_25366[(7)]);
var inst_25269 = cljs.core.chunked_seq_QMARK_.call(null,inst_25267);
var state_25366__$1 = state_25366;
if(inst_25269){
var statearr_25434_25498 = state_25366__$1;
(statearr_25434_25498[(1)] = (19));

} else {
var statearr_25435_25499 = state_25366__$1;
(statearr_25435_25499[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (38))){
var inst_25345 = (state_25366[(2)]);
var state_25366__$1 = state_25366;
var statearr_25436_25500 = state_25366__$1;
(statearr_25436_25500[(2)] = inst_25345);

(statearr_25436_25500[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (30))){
var state_25366__$1 = state_25366;
var statearr_25437_25501 = state_25366__$1;
(statearr_25437_25501[(2)] = null);

(statearr_25437_25501[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (10))){
var inst_25250 = (state_25366[(14)]);
var inst_25248 = (state_25366[(16)]);
var inst_25256 = cljs.core._nth.call(null,inst_25248,inst_25250);
var inst_25257 = cljs.core.nth.call(null,inst_25256,(0),null);
var inst_25258 = cljs.core.nth.call(null,inst_25256,(1),null);
var state_25366__$1 = (function (){var statearr_25438 = state_25366;
(statearr_25438[(26)] = inst_25257);

return statearr_25438;
})();
if(cljs.core.truth_(inst_25258)){
var statearr_25439_25502 = state_25366__$1;
(statearr_25439_25502[(1)] = (13));

} else {
var statearr_25440_25503 = state_25366__$1;
(statearr_25440_25503[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (18))){
var inst_25291 = (state_25366[(2)]);
var state_25366__$1 = state_25366;
var statearr_25441_25504 = state_25366__$1;
(statearr_25441_25504[(2)] = inst_25291);

(statearr_25441_25504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (42))){
var state_25366__$1 = state_25366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25366__$1,(45),dchan);
} else {
if((state_val_25367 === (37))){
var inst_25238 = (state_25366[(9)]);
var inst_25325 = (state_25366[(25)]);
var inst_25334 = (state_25366[(23)]);
var inst_25334__$1 = cljs.core.first.call(null,inst_25325);
var inst_25335 = cljs.core.async.put_BANG_.call(null,inst_25334__$1,inst_25238,done);
var state_25366__$1 = (function (){var statearr_25442 = state_25366;
(statearr_25442[(23)] = inst_25334__$1);

return statearr_25442;
})();
if(cljs.core.truth_(inst_25335)){
var statearr_25443_25505 = state_25366__$1;
(statearr_25443_25505[(1)] = (39));

} else {
var statearr_25444_25506 = state_25366__$1;
(statearr_25444_25506[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25367 === (8))){
var inst_25250 = (state_25366[(14)]);
var inst_25249 = (state_25366[(17)]);
var inst_25252 = (inst_25250 < inst_25249);
var inst_25253 = inst_25252;
var state_25366__$1 = state_25366;
if(cljs.core.truth_(inst_25253)){
var statearr_25445_25507 = state_25366__$1;
(statearr_25445_25507[(1)] = (10));

} else {
var statearr_25446_25508 = state_25366__$1;
(statearr_25446_25508[(1)] = (11));

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
});})(c__19673__auto___25454,cs,m,dchan,dctr,done))
;
return ((function (switch__19608__auto__,c__19673__auto___25454,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19609__auto__ = null;
var cljs$core$async$mult_$_state_machine__19609__auto____0 = (function (){
var statearr_25450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25450[(0)] = cljs$core$async$mult_$_state_machine__19609__auto__);

(statearr_25450[(1)] = (1));

return statearr_25450;
});
var cljs$core$async$mult_$_state_machine__19609__auto____1 = (function (state_25366){
while(true){
var ret_value__19610__auto__ = (function (){try{while(true){
var result__19611__auto__ = switch__19608__auto__.call(null,state_25366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19611__auto__;
}
break;
}
}catch (e25451){if((e25451 instanceof Object)){
var ex__19612__auto__ = e25451;
var statearr_25452_25509 = state_25366;
(statearr_25452_25509[(5)] = ex__19612__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25510 = state_25366;
state_25366 = G__25510;
continue;
} else {
return ret_value__19610__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19609__auto__ = function(state_25366){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19609__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19609__auto____1.call(this,state_25366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19609__auto____0;
cljs$core$async$mult_$_state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19609__auto____1;
return cljs$core$async$mult_$_state_machine__19609__auto__;
})()
;})(switch__19608__auto__,c__19673__auto___25454,cs,m,dchan,dctr,done))
})();
var state__19675__auto__ = (function (){var statearr_25453 = f__19674__auto__.call(null);
(statearr_25453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19673__auto___25454);

return statearr_25453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19675__auto__);
});})(c__19673__auto___25454,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args25511 = [];
var len__17388__auto___25514 = arguments.length;
var i__17389__auto___25515 = (0);
while(true){
if((i__17389__auto___25515 < len__17388__auto___25514)){
args25511.push((arguments[i__17389__auto___25515]));

var G__25516 = (i__17389__auto___25515 + (1));
i__17389__auto___25515 = G__25516;
continue;
} else {
}
break;
}

var G__25513 = args25511.length;
switch (G__25513) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25511.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16985__auto__ = (((m == null))?null:m);
var m__16986__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,m,ch);
} else {
var m__16986__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16985__auto__ = (((m == null))?null:m);
var m__16986__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,m,ch);
} else {
var m__16986__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16985__auto__ = (((m == null))?null:m);
var m__16986__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,m);
} else {
var m__16986__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16985__auto__ = (((m == null))?null:m);
var m__16986__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,m,state_map);
} else {
var m__16986__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16985__auto__ = (((m == null))?null:m);
var m__16986__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,m,mode);
} else {
var m__16986__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17395__auto__ = [];
var len__17388__auto___25528 = arguments.length;
var i__17389__auto___25529 = (0);
while(true){
if((i__17389__auto___25529 < len__17388__auto___25528)){
args__17395__auto__.push((arguments[i__17389__auto___25529]));

var G__25530 = (i__17389__auto___25529 + (1));
i__17389__auto___25529 = G__25530;
continue;
} else {
}
break;
}

var argseq__17396__auto__ = ((((3) < args__17395__auto__.length))?(new cljs.core.IndexedSeq(args__17395__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17396__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25522){
var map__25523 = p__25522;
var map__25523__$1 = ((((!((map__25523 == null)))?((((map__25523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25523):map__25523);
var opts = map__25523__$1;
var statearr_25525_25531 = state;
(statearr_25525_25531[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25523,map__25523__$1,opts){
return (function (val){
var statearr_25526_25532 = state;
(statearr_25526_25532[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25523,map__25523__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25527_25533 = state;
(statearr_25527_25533[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25518){
var G__25519 = cljs.core.first.call(null,seq25518);
var seq25518__$1 = cljs.core.next.call(null,seq25518);
var G__25520 = cljs.core.first.call(null,seq25518__$1);
var seq25518__$2 = cljs.core.next.call(null,seq25518__$1);
var G__25521 = cljs.core.first.call(null,seq25518__$2);
var seq25518__$3 = cljs.core.next.call(null,seq25518__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25519,G__25520,G__25521,seq25518__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25697 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25697 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25698){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25698 = meta25698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25699,meta25698__$1){
var self__ = this;
var _25699__$1 = this;
return (new cljs.core.async.t_cljs$core$async25697(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25698__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25697.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25699){
var self__ = this;
var _25699__$1 = this;
return self__.meta25698;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25697.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25697.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25697.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25697.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25697.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25697.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25697.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25697.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25697.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25698","meta25698",-1800483638,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25697.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25697";

cljs.core.async.t_cljs$core$async25697.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16928__auto__,writer__16929__auto__,opt__16930__auto__){
return cljs.core._write.call(null,writer__16929__auto__,"cljs.core.async/t_cljs$core$async25697");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25697 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25697(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25698){
return (new cljs.core.async.t_cljs$core$async25697(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25698));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25697(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19673__auto___25860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19673__auto___25860,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19674__auto__ = (function (){var switch__19608__auto__ = ((function (c__19673__auto___25860,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25797){
var state_val_25798 = (state_25797[(1)]);
if((state_val_25798 === (7))){
var inst_25715 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
var statearr_25799_25861 = state_25797__$1;
(statearr_25799_25861[(2)] = inst_25715);

(statearr_25799_25861[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (20))){
var inst_25727 = (state_25797[(7)]);
var state_25797__$1 = state_25797;
var statearr_25800_25862 = state_25797__$1;
(statearr_25800_25862[(2)] = inst_25727);

(statearr_25800_25862[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (27))){
var state_25797__$1 = state_25797;
var statearr_25801_25863 = state_25797__$1;
(statearr_25801_25863[(2)] = null);

(statearr_25801_25863[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (1))){
var inst_25703 = (state_25797[(8)]);
var inst_25703__$1 = calc_state.call(null);
var inst_25705 = (inst_25703__$1 == null);
var inst_25706 = cljs.core.not.call(null,inst_25705);
var state_25797__$1 = (function (){var statearr_25802 = state_25797;
(statearr_25802[(8)] = inst_25703__$1);

return statearr_25802;
})();
if(inst_25706){
var statearr_25803_25864 = state_25797__$1;
(statearr_25803_25864[(1)] = (2));

} else {
var statearr_25804_25865 = state_25797__$1;
(statearr_25804_25865[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (24))){
var inst_25750 = (state_25797[(9)]);
var inst_25757 = (state_25797[(10)]);
var inst_25771 = (state_25797[(11)]);
var inst_25771__$1 = inst_25750.call(null,inst_25757);
var state_25797__$1 = (function (){var statearr_25805 = state_25797;
(statearr_25805[(11)] = inst_25771__$1);

return statearr_25805;
})();
if(cljs.core.truth_(inst_25771__$1)){
var statearr_25806_25866 = state_25797__$1;
(statearr_25806_25866[(1)] = (29));

} else {
var statearr_25807_25867 = state_25797__$1;
(statearr_25807_25867[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (4))){
var inst_25718 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
if(cljs.core.truth_(inst_25718)){
var statearr_25808_25868 = state_25797__$1;
(statearr_25808_25868[(1)] = (8));

} else {
var statearr_25809_25869 = state_25797__$1;
(statearr_25809_25869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (15))){
var inst_25744 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
if(cljs.core.truth_(inst_25744)){
var statearr_25810_25870 = state_25797__$1;
(statearr_25810_25870[(1)] = (19));

} else {
var statearr_25811_25871 = state_25797__$1;
(statearr_25811_25871[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (21))){
var inst_25749 = (state_25797[(12)]);
var inst_25749__$1 = (state_25797[(2)]);
var inst_25750 = cljs.core.get.call(null,inst_25749__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25751 = cljs.core.get.call(null,inst_25749__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25752 = cljs.core.get.call(null,inst_25749__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25797__$1 = (function (){var statearr_25812 = state_25797;
(statearr_25812[(9)] = inst_25750);

(statearr_25812[(12)] = inst_25749__$1);

(statearr_25812[(13)] = inst_25751);

return statearr_25812;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25797__$1,(22),inst_25752);
} else {
if((state_val_25798 === (31))){
var inst_25779 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
if(cljs.core.truth_(inst_25779)){
var statearr_25813_25872 = state_25797__$1;
(statearr_25813_25872[(1)] = (32));

} else {
var statearr_25814_25873 = state_25797__$1;
(statearr_25814_25873[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (32))){
var inst_25756 = (state_25797[(14)]);
var state_25797__$1 = state_25797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25797__$1,(35),out,inst_25756);
} else {
if((state_val_25798 === (33))){
var inst_25749 = (state_25797[(12)]);
var inst_25727 = inst_25749;
var state_25797__$1 = (function (){var statearr_25815 = state_25797;
(statearr_25815[(7)] = inst_25727);

return statearr_25815;
})();
var statearr_25816_25874 = state_25797__$1;
(statearr_25816_25874[(2)] = null);

(statearr_25816_25874[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (13))){
var inst_25727 = (state_25797[(7)]);
var inst_25734 = inst_25727.cljs$lang$protocol_mask$partition0$;
var inst_25735 = (inst_25734 & (64));
var inst_25736 = inst_25727.cljs$core$ISeq$;
var inst_25737 = (inst_25735) || (inst_25736);
var state_25797__$1 = state_25797;
if(cljs.core.truth_(inst_25737)){
var statearr_25817_25875 = state_25797__$1;
(statearr_25817_25875[(1)] = (16));

} else {
var statearr_25818_25876 = state_25797__$1;
(statearr_25818_25876[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (22))){
var inst_25756 = (state_25797[(14)]);
var inst_25757 = (state_25797[(10)]);
var inst_25755 = (state_25797[(2)]);
var inst_25756__$1 = cljs.core.nth.call(null,inst_25755,(0),null);
var inst_25757__$1 = cljs.core.nth.call(null,inst_25755,(1),null);
var inst_25758 = (inst_25756__$1 == null);
var inst_25759 = cljs.core._EQ_.call(null,inst_25757__$1,change);
var inst_25760 = (inst_25758) || (inst_25759);
var state_25797__$1 = (function (){var statearr_25819 = state_25797;
(statearr_25819[(14)] = inst_25756__$1);

(statearr_25819[(10)] = inst_25757__$1);

return statearr_25819;
})();
if(cljs.core.truth_(inst_25760)){
var statearr_25820_25877 = state_25797__$1;
(statearr_25820_25877[(1)] = (23));

} else {
var statearr_25821_25878 = state_25797__$1;
(statearr_25821_25878[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (36))){
var inst_25749 = (state_25797[(12)]);
var inst_25727 = inst_25749;
var state_25797__$1 = (function (){var statearr_25822 = state_25797;
(statearr_25822[(7)] = inst_25727);

return statearr_25822;
})();
var statearr_25823_25879 = state_25797__$1;
(statearr_25823_25879[(2)] = null);

(statearr_25823_25879[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (29))){
var inst_25771 = (state_25797[(11)]);
var state_25797__$1 = state_25797;
var statearr_25824_25880 = state_25797__$1;
(statearr_25824_25880[(2)] = inst_25771);

(statearr_25824_25880[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (6))){
var state_25797__$1 = state_25797;
var statearr_25825_25881 = state_25797__$1;
(statearr_25825_25881[(2)] = false);

(statearr_25825_25881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (28))){
var inst_25767 = (state_25797[(2)]);
var inst_25768 = calc_state.call(null);
var inst_25727 = inst_25768;
var state_25797__$1 = (function (){var statearr_25826 = state_25797;
(statearr_25826[(15)] = inst_25767);

(statearr_25826[(7)] = inst_25727);

return statearr_25826;
})();
var statearr_25827_25882 = state_25797__$1;
(statearr_25827_25882[(2)] = null);

(statearr_25827_25882[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (25))){
var inst_25793 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
var statearr_25828_25883 = state_25797__$1;
(statearr_25828_25883[(2)] = inst_25793);

(statearr_25828_25883[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (34))){
var inst_25791 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
var statearr_25829_25884 = state_25797__$1;
(statearr_25829_25884[(2)] = inst_25791);

(statearr_25829_25884[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (17))){
var state_25797__$1 = state_25797;
var statearr_25830_25885 = state_25797__$1;
(statearr_25830_25885[(2)] = false);

(statearr_25830_25885[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (3))){
var state_25797__$1 = state_25797;
var statearr_25831_25886 = state_25797__$1;
(statearr_25831_25886[(2)] = false);

(statearr_25831_25886[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (12))){
var inst_25795 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25797__$1,inst_25795);
} else {
if((state_val_25798 === (2))){
var inst_25703 = (state_25797[(8)]);
var inst_25708 = inst_25703.cljs$lang$protocol_mask$partition0$;
var inst_25709 = (inst_25708 & (64));
var inst_25710 = inst_25703.cljs$core$ISeq$;
var inst_25711 = (inst_25709) || (inst_25710);
var state_25797__$1 = state_25797;
if(cljs.core.truth_(inst_25711)){
var statearr_25832_25887 = state_25797__$1;
(statearr_25832_25887[(1)] = (5));

} else {
var statearr_25833_25888 = state_25797__$1;
(statearr_25833_25888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (23))){
var inst_25756 = (state_25797[(14)]);
var inst_25762 = (inst_25756 == null);
var state_25797__$1 = state_25797;
if(cljs.core.truth_(inst_25762)){
var statearr_25834_25889 = state_25797__$1;
(statearr_25834_25889[(1)] = (26));

} else {
var statearr_25835_25890 = state_25797__$1;
(statearr_25835_25890[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (35))){
var inst_25782 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
if(cljs.core.truth_(inst_25782)){
var statearr_25836_25891 = state_25797__$1;
(statearr_25836_25891[(1)] = (36));

} else {
var statearr_25837_25892 = state_25797__$1;
(statearr_25837_25892[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (19))){
var inst_25727 = (state_25797[(7)]);
var inst_25746 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25727);
var state_25797__$1 = state_25797;
var statearr_25838_25893 = state_25797__$1;
(statearr_25838_25893[(2)] = inst_25746);

(statearr_25838_25893[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (11))){
var inst_25727 = (state_25797[(7)]);
var inst_25731 = (inst_25727 == null);
var inst_25732 = cljs.core.not.call(null,inst_25731);
var state_25797__$1 = state_25797;
if(inst_25732){
var statearr_25839_25894 = state_25797__$1;
(statearr_25839_25894[(1)] = (13));

} else {
var statearr_25840_25895 = state_25797__$1;
(statearr_25840_25895[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (9))){
var inst_25703 = (state_25797[(8)]);
var state_25797__$1 = state_25797;
var statearr_25841_25896 = state_25797__$1;
(statearr_25841_25896[(2)] = inst_25703);

(statearr_25841_25896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (5))){
var state_25797__$1 = state_25797;
var statearr_25842_25897 = state_25797__$1;
(statearr_25842_25897[(2)] = true);

(statearr_25842_25897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (14))){
var state_25797__$1 = state_25797;
var statearr_25843_25898 = state_25797__$1;
(statearr_25843_25898[(2)] = false);

(statearr_25843_25898[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (26))){
var inst_25757 = (state_25797[(10)]);
var inst_25764 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25757);
var state_25797__$1 = state_25797;
var statearr_25844_25899 = state_25797__$1;
(statearr_25844_25899[(2)] = inst_25764);

(statearr_25844_25899[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (16))){
var state_25797__$1 = state_25797;
var statearr_25845_25900 = state_25797__$1;
(statearr_25845_25900[(2)] = true);

(statearr_25845_25900[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (38))){
var inst_25787 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
var statearr_25846_25901 = state_25797__$1;
(statearr_25846_25901[(2)] = inst_25787);

(statearr_25846_25901[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (30))){
var inst_25750 = (state_25797[(9)]);
var inst_25757 = (state_25797[(10)]);
var inst_25751 = (state_25797[(13)]);
var inst_25774 = cljs.core.empty_QMARK_.call(null,inst_25750);
var inst_25775 = inst_25751.call(null,inst_25757);
var inst_25776 = cljs.core.not.call(null,inst_25775);
var inst_25777 = (inst_25774) && (inst_25776);
var state_25797__$1 = state_25797;
var statearr_25847_25902 = state_25797__$1;
(statearr_25847_25902[(2)] = inst_25777);

(statearr_25847_25902[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (10))){
var inst_25703 = (state_25797[(8)]);
var inst_25723 = (state_25797[(2)]);
var inst_25724 = cljs.core.get.call(null,inst_25723,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25725 = cljs.core.get.call(null,inst_25723,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25726 = cljs.core.get.call(null,inst_25723,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25727 = inst_25703;
var state_25797__$1 = (function (){var statearr_25848 = state_25797;
(statearr_25848[(16)] = inst_25724);

(statearr_25848[(17)] = inst_25725);

(statearr_25848[(7)] = inst_25727);

(statearr_25848[(18)] = inst_25726);

return statearr_25848;
})();
var statearr_25849_25903 = state_25797__$1;
(statearr_25849_25903[(2)] = null);

(statearr_25849_25903[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (18))){
var inst_25741 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
var statearr_25850_25904 = state_25797__$1;
(statearr_25850_25904[(2)] = inst_25741);

(statearr_25850_25904[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (37))){
var state_25797__$1 = state_25797;
var statearr_25851_25905 = state_25797__$1;
(statearr_25851_25905[(2)] = null);

(statearr_25851_25905[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (8))){
var inst_25703 = (state_25797[(8)]);
var inst_25720 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25703);
var state_25797__$1 = state_25797;
var statearr_25852_25906 = state_25797__$1;
(statearr_25852_25906[(2)] = inst_25720);

(statearr_25852_25906[(1)] = (10));


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
});})(c__19673__auto___25860,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19608__auto__,c__19673__auto___25860,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19609__auto__ = null;
var cljs$core$async$mix_$_state_machine__19609__auto____0 = (function (){
var statearr_25856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25856[(0)] = cljs$core$async$mix_$_state_machine__19609__auto__);

(statearr_25856[(1)] = (1));

return statearr_25856;
});
var cljs$core$async$mix_$_state_machine__19609__auto____1 = (function (state_25797){
while(true){
var ret_value__19610__auto__ = (function (){try{while(true){
var result__19611__auto__ = switch__19608__auto__.call(null,state_25797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19611__auto__;
}
break;
}
}catch (e25857){if((e25857 instanceof Object)){
var ex__19612__auto__ = e25857;
var statearr_25858_25907 = state_25797;
(statearr_25858_25907[(5)] = ex__19612__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25908 = state_25797;
state_25797 = G__25908;
continue;
} else {
return ret_value__19610__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19609__auto__ = function(state_25797){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19609__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19609__auto____1.call(this,state_25797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19609__auto____0;
cljs$core$async$mix_$_state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19609__auto____1;
return cljs$core$async$mix_$_state_machine__19609__auto__;
})()
;})(switch__19608__auto__,c__19673__auto___25860,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19675__auto__ = (function (){var statearr_25859 = f__19674__auto__.call(null);
(statearr_25859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19673__auto___25860);

return statearr_25859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19675__auto__);
});})(c__19673__auto___25860,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16985__auto__ = (((p == null))?null:p);
var m__16986__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__16986__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16985__auto__ = (((p == null))?null:p);
var m__16986__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,p,v,ch);
} else {
var m__16986__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25909 = [];
var len__17388__auto___25912 = arguments.length;
var i__17389__auto___25913 = (0);
while(true){
if((i__17389__auto___25913 < len__17388__auto___25912)){
args25909.push((arguments[i__17389__auto___25913]));

var G__25914 = (i__17389__auto___25913 + (1));
i__17389__auto___25913 = G__25914;
continue;
} else {
}
break;
}

var G__25911 = args25909.length;
switch (G__25911) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25909.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16985__auto__ = (((p == null))?null:p);
var m__16986__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,p);
} else {
var m__16986__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16985__auto__ = (((p == null))?null:p);
var m__16986__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,p,v);
} else {
var m__16986__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args25917 = [];
var len__17388__auto___26042 = arguments.length;
var i__17389__auto___26043 = (0);
while(true){
if((i__17389__auto___26043 < len__17388__auto___26042)){
args25917.push((arguments[i__17389__auto___26043]));

var G__26044 = (i__17389__auto___26043 + (1));
i__17389__auto___26043 = G__26044;
continue;
} else {
}
break;
}

var G__25919 = args25917.length;
switch (G__25919) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25917.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16330__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16330__auto__)){
return or__16330__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16330__auto__,mults){
return (function (p1__25916_SHARP_){
if(cljs.core.truth_(p1__25916_SHARP_.call(null,topic))){
return p1__25916_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25916_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16330__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25920 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25920 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25921){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25921 = meta25921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25922,meta25921__$1){
var self__ = this;
var _25922__$1 = this;
return (new cljs.core.async.t_cljs$core$async25920(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25921__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25920.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25922){
var self__ = this;
var _25922__$1 = this;
return self__.meta25921;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25920.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25920.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25920.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25920.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25920.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25920.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25920.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25920.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25921","meta25921",401644249,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25920.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25920";

cljs.core.async.t_cljs$core$async25920.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16928__auto__,writer__16929__auto__,opt__16930__auto__){
return cljs.core._write.call(null,writer__16929__auto__,"cljs.core.async/t_cljs$core$async25920");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25920 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25920(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25921){
return (new cljs.core.async.t_cljs$core$async25920(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25921));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25920(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19673__auto___26046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19673__auto___26046,mults,ensure_mult,p){
return (function (){
var f__19674__auto__ = (function (){var switch__19608__auto__ = ((function (c__19673__auto___26046,mults,ensure_mult,p){
return (function (state_25994){
var state_val_25995 = (state_25994[(1)]);
if((state_val_25995 === (7))){
var inst_25990 = (state_25994[(2)]);
var state_25994__$1 = state_25994;
var statearr_25996_26047 = state_25994__$1;
(statearr_25996_26047[(2)] = inst_25990);

(statearr_25996_26047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25995 === (20))){
var state_25994__$1 = state_25994;
var statearr_25997_26048 = state_25994__$1;
(statearr_25997_26048[(2)] = null);

(statearr_25997_26048[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25995 === (1))){
var state_25994__$1 = state_25994;
var statearr_25998_26049 = state_25994__$1;
(statearr_25998_26049[(2)] = null);

(statearr_25998_26049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25995 === (24))){
var inst_25973 = (state_25994[(7)]);
var inst_25982 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25973);
var state_25994__$1 = state_25994;
var statearr_25999_26050 = state_25994__$1;
(statearr_25999_26050[(2)] = inst_25982);

(statearr_25999_26050[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25995 === (4))){
var inst_25925 = (state_25994[(8)]);
var inst_25925__$1 = (state_25994[(2)]);
var inst_25926 = (inst_25925__$1 == null);
var state_25994__$1 = (function (){var statearr_26000 = state_25994;
(statearr_26000[(8)] = inst_25925__$1);

return statearr_26000;
})();
if(cljs.core.truth_(inst_25926)){
var statearr_26001_26051 = state_25994__$1;
(statearr_26001_26051[(1)] = (5));

} else {
var statearr_26002_26052 = state_25994__$1;
(statearr_26002_26052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25995 === (15))){
var inst_25967 = (state_25994[(2)]);
var state_25994__$1 = state_25994;
var statearr_26003_26053 = state_25994__$1;
(statearr_26003_26053[(2)] = inst_25967);

(statearr_26003_26053[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25995 === (21))){
var inst_25987 = (state_25994[(2)]);
var state_25994__$1 = (function (){var statearr_26004 = state_25994;
(statearr_26004[(9)] = inst_25987);

return statearr_26004;
})();
var statearr_26005_26054 = state_25994__$1;
(statearr_26005_26054[(2)] = null);

(statearr_26005_26054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25995 === (13))){
var inst_25949 = (state_25994[(10)]);
var inst_25951 = cljs.core.chunked_seq_QMARK_.call(null,inst_25949);
var state_25994__$1 = state_25994;
if(inst_25951){
var statearr_26006_26055 = state_25994__$1;
(statearr_26006_26055[(1)] = (16));

} else {
var statearr_26007_26056 = state_25994__$1;
(statearr_26007_26056[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25995 === (22))){
var inst_25979 = (state_25994[(2)]);
var state_25994__$1 = state_25994;
if(cljs.core.truth_(inst_25979)){
var statearr_26008_26057 = state_25994__$1;
(statearr_26008_26057[(1)] = (23));

} else {
var statearr_26009_26058 = state_25994__$1;
(statearr_26009_26058[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25995 === (6))){
var inst_25973 = (state_25994[(7)]);
var inst_25925 = (state_25994[(8)]);
var inst_25975 = (state_25994[(11)]);
var inst_25973__$1 = topic_fn.call(null,inst_25925);
var inst_25974 = cljs.core.deref.call(null,mults);
var inst_25975__$1 = cljs.core.get.call(null,inst_25974,inst_25973__$1);
var state_25994__$1 = (function (){var statearr_26010 = state_25994;
(statearr_26010[(7)] = inst_25973__$1);

(statearr_26010[(11)] = inst_25975__$1);

return statearr_26010;
})();
if(cljs.core.truth_(inst_25975__$1)){
var statearr_26011_26059 = state_25994__$1;
(statearr_26011_26059[(1)] = (19));

} else {
var statearr_26012_26060 = state_25994__$1;
(statearr_26012_26060[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25995 === (25))){
var inst_25984 = (state_25994[(2)]);
var state_25994__$1 = state_25994;
var statearr_26013_26061 = state_25994__$1;
(statearr_26013_26061[(2)] = inst_25984);

(statearr_26013_26061[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25995 === (17))){
var inst_25949 = (state_25994[(10)]);
var inst_25958 = cljs.core.first.call(null,inst_25949);
var inst_25959 = cljs.core.async.muxch_STAR_.call(null,inst_25958);
var inst_25960 = cljs.core.async.close_BANG_.call(null,inst_25959);
var inst_25961 = cljs.core.next.call(null,inst_25949);
var inst_25935 = inst_25961;
var inst_25936 = null;
var inst_25937 = (0);
var inst_25938 = (0);
var state_25994__$1 = (function (){var statearr_26014 = state_25994;
(statearr_26014[(12)] = inst_25937);

(statearr_26014[(13)] = inst_25938);

(statearr_26014[(14)] = inst_25936);

(statearr_26014[(15)] = inst_25960);

(statearr_26014[(16)] = inst_25935);

return statearr_26014;
})();
var statearr_26015_26062 = state_25994__$1;
(statearr_26015_26062[(2)] = null);

(statearr_26015_26062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25995 === (3))){
var inst_25992 = (state_25994[(2)]);
var state_25994__$1 = state_25994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25994__$1,inst_25992);
} else {
if((state_val_25995 === (12))){
var inst_25969 = (state_25994[(2)]);
var state_25994__$1 = state_25994;
var statearr_26016_26063 = state_25994__$1;
(statearr_26016_26063[(2)] = inst_25969);

(statearr_26016_26063[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25995 === (2))){
var state_25994__$1 = state_25994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25994__$1,(4),ch);
} else {
if((state_val_25995 === (23))){
var state_25994__$1 = state_25994;
var statearr_26017_26064 = state_25994__$1;
(statearr_26017_26064[(2)] = null);

(statearr_26017_26064[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25995 === (19))){
var inst_25925 = (state_25994[(8)]);
var inst_25975 = (state_25994[(11)]);
var inst_25977 = cljs.core.async.muxch_STAR_.call(null,inst_25975);
var state_25994__$1 = state_25994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25994__$1,(22),inst_25977,inst_25925);
} else {
if((state_val_25995 === (11))){
var inst_25935 = (state_25994[(16)]);
var inst_25949 = (state_25994[(10)]);
var inst_25949__$1 = cljs.core.seq.call(null,inst_25935);
var state_25994__$1 = (function (){var statearr_26018 = state_25994;
(statearr_26018[(10)] = inst_25949__$1);

return statearr_26018;
})();
if(inst_25949__$1){
var statearr_26019_26065 = state_25994__$1;
(statearr_26019_26065[(1)] = (13));

} else {
var statearr_26020_26066 = state_25994__$1;
(statearr_26020_26066[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25995 === (9))){
var inst_25971 = (state_25994[(2)]);
var state_25994__$1 = state_25994;
var statearr_26021_26067 = state_25994__$1;
(statearr_26021_26067[(2)] = inst_25971);

(statearr_26021_26067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25995 === (5))){
var inst_25932 = cljs.core.deref.call(null,mults);
var inst_25933 = cljs.core.vals.call(null,inst_25932);
var inst_25934 = cljs.core.seq.call(null,inst_25933);
var inst_25935 = inst_25934;
var inst_25936 = null;
var inst_25937 = (0);
var inst_25938 = (0);
var state_25994__$1 = (function (){var statearr_26022 = state_25994;
(statearr_26022[(12)] = inst_25937);

(statearr_26022[(13)] = inst_25938);

(statearr_26022[(14)] = inst_25936);

(statearr_26022[(16)] = inst_25935);

return statearr_26022;
})();
var statearr_26023_26068 = state_25994__$1;
(statearr_26023_26068[(2)] = null);

(statearr_26023_26068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25995 === (14))){
var state_25994__$1 = state_25994;
var statearr_26027_26069 = state_25994__$1;
(statearr_26027_26069[(2)] = null);

(statearr_26027_26069[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25995 === (16))){
var inst_25949 = (state_25994[(10)]);
var inst_25953 = cljs.core.chunk_first.call(null,inst_25949);
var inst_25954 = cljs.core.chunk_rest.call(null,inst_25949);
var inst_25955 = cljs.core.count.call(null,inst_25953);
var inst_25935 = inst_25954;
var inst_25936 = inst_25953;
var inst_25937 = inst_25955;
var inst_25938 = (0);
var state_25994__$1 = (function (){var statearr_26028 = state_25994;
(statearr_26028[(12)] = inst_25937);

(statearr_26028[(13)] = inst_25938);

(statearr_26028[(14)] = inst_25936);

(statearr_26028[(16)] = inst_25935);

return statearr_26028;
})();
var statearr_26029_26070 = state_25994__$1;
(statearr_26029_26070[(2)] = null);

(statearr_26029_26070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25995 === (10))){
var inst_25937 = (state_25994[(12)]);
var inst_25938 = (state_25994[(13)]);
var inst_25936 = (state_25994[(14)]);
var inst_25935 = (state_25994[(16)]);
var inst_25943 = cljs.core._nth.call(null,inst_25936,inst_25938);
var inst_25944 = cljs.core.async.muxch_STAR_.call(null,inst_25943);
var inst_25945 = cljs.core.async.close_BANG_.call(null,inst_25944);
var inst_25946 = (inst_25938 + (1));
var tmp26024 = inst_25937;
var tmp26025 = inst_25936;
var tmp26026 = inst_25935;
var inst_25935__$1 = tmp26026;
var inst_25936__$1 = tmp26025;
var inst_25937__$1 = tmp26024;
var inst_25938__$1 = inst_25946;
var state_25994__$1 = (function (){var statearr_26030 = state_25994;
(statearr_26030[(12)] = inst_25937__$1);

(statearr_26030[(13)] = inst_25938__$1);

(statearr_26030[(14)] = inst_25936__$1);

(statearr_26030[(16)] = inst_25935__$1);

(statearr_26030[(17)] = inst_25945);

return statearr_26030;
})();
var statearr_26031_26071 = state_25994__$1;
(statearr_26031_26071[(2)] = null);

(statearr_26031_26071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25995 === (18))){
var inst_25964 = (state_25994[(2)]);
var state_25994__$1 = state_25994;
var statearr_26032_26072 = state_25994__$1;
(statearr_26032_26072[(2)] = inst_25964);

(statearr_26032_26072[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25995 === (8))){
var inst_25937 = (state_25994[(12)]);
var inst_25938 = (state_25994[(13)]);
var inst_25940 = (inst_25938 < inst_25937);
var inst_25941 = inst_25940;
var state_25994__$1 = state_25994;
if(cljs.core.truth_(inst_25941)){
var statearr_26033_26073 = state_25994__$1;
(statearr_26033_26073[(1)] = (10));

} else {
var statearr_26034_26074 = state_25994__$1;
(statearr_26034_26074[(1)] = (11));

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
});})(c__19673__auto___26046,mults,ensure_mult,p))
;
return ((function (switch__19608__auto__,c__19673__auto___26046,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19609__auto__ = null;
var cljs$core$async$state_machine__19609__auto____0 = (function (){
var statearr_26038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26038[(0)] = cljs$core$async$state_machine__19609__auto__);

(statearr_26038[(1)] = (1));

return statearr_26038;
});
var cljs$core$async$state_machine__19609__auto____1 = (function (state_25994){
while(true){
var ret_value__19610__auto__ = (function (){try{while(true){
var result__19611__auto__ = switch__19608__auto__.call(null,state_25994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19611__auto__;
}
break;
}
}catch (e26039){if((e26039 instanceof Object)){
var ex__19612__auto__ = e26039;
var statearr_26040_26075 = state_25994;
(statearr_26040_26075[(5)] = ex__19612__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26076 = state_25994;
state_25994 = G__26076;
continue;
} else {
return ret_value__19610__auto__;
}
break;
}
});
cljs$core$async$state_machine__19609__auto__ = function(state_25994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19609__auto____1.call(this,state_25994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19609__auto____0;
cljs$core$async$state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19609__auto____1;
return cljs$core$async$state_machine__19609__auto__;
})()
;})(switch__19608__auto__,c__19673__auto___26046,mults,ensure_mult,p))
})();
var state__19675__auto__ = (function (){var statearr_26041 = f__19674__auto__.call(null);
(statearr_26041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19673__auto___26046);

return statearr_26041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19675__auto__);
});})(c__19673__auto___26046,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args26077 = [];
var len__17388__auto___26080 = arguments.length;
var i__17389__auto___26081 = (0);
while(true){
if((i__17389__auto___26081 < len__17388__auto___26080)){
args26077.push((arguments[i__17389__auto___26081]));

var G__26082 = (i__17389__auto___26081 + (1));
i__17389__auto___26081 = G__26082;
continue;
} else {
}
break;
}

var G__26079 = args26077.length;
switch (G__26079) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26077.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args26084 = [];
var len__17388__auto___26087 = arguments.length;
var i__17389__auto___26088 = (0);
while(true){
if((i__17389__auto___26088 < len__17388__auto___26087)){
args26084.push((arguments[i__17389__auto___26088]));

var G__26089 = (i__17389__auto___26088 + (1));
i__17389__auto___26088 = G__26089;
continue;
} else {
}
break;
}

var G__26086 = args26084.length;
switch (G__26086) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26084.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args26091 = [];
var len__17388__auto___26162 = arguments.length;
var i__17389__auto___26163 = (0);
while(true){
if((i__17389__auto___26163 < len__17388__auto___26162)){
args26091.push((arguments[i__17389__auto___26163]));

var G__26164 = (i__17389__auto___26163 + (1));
i__17389__auto___26163 = G__26164;
continue;
} else {
}
break;
}

var G__26093 = args26091.length;
switch (G__26093) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26091.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19673__auto___26166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19673__auto___26166,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19674__auto__ = (function (){var switch__19608__auto__ = ((function (c__19673__auto___26166,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26132){
var state_val_26133 = (state_26132[(1)]);
if((state_val_26133 === (7))){
var state_26132__$1 = state_26132;
var statearr_26134_26167 = state_26132__$1;
(statearr_26134_26167[(2)] = null);

(statearr_26134_26167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (1))){
var state_26132__$1 = state_26132;
var statearr_26135_26168 = state_26132__$1;
(statearr_26135_26168[(2)] = null);

(statearr_26135_26168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (4))){
var inst_26096 = (state_26132[(7)]);
var inst_26098 = (inst_26096 < cnt);
var state_26132__$1 = state_26132;
if(cljs.core.truth_(inst_26098)){
var statearr_26136_26169 = state_26132__$1;
(statearr_26136_26169[(1)] = (6));

} else {
var statearr_26137_26170 = state_26132__$1;
(statearr_26137_26170[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (15))){
var inst_26128 = (state_26132[(2)]);
var state_26132__$1 = state_26132;
var statearr_26138_26171 = state_26132__$1;
(statearr_26138_26171[(2)] = inst_26128);

(statearr_26138_26171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (13))){
var inst_26121 = cljs.core.async.close_BANG_.call(null,out);
var state_26132__$1 = state_26132;
var statearr_26139_26172 = state_26132__$1;
(statearr_26139_26172[(2)] = inst_26121);

(statearr_26139_26172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (6))){
var state_26132__$1 = state_26132;
var statearr_26140_26173 = state_26132__$1;
(statearr_26140_26173[(2)] = null);

(statearr_26140_26173[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (3))){
var inst_26130 = (state_26132[(2)]);
var state_26132__$1 = state_26132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26132__$1,inst_26130);
} else {
if((state_val_26133 === (12))){
var inst_26118 = (state_26132[(8)]);
var inst_26118__$1 = (state_26132[(2)]);
var inst_26119 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26118__$1);
var state_26132__$1 = (function (){var statearr_26141 = state_26132;
(statearr_26141[(8)] = inst_26118__$1);

return statearr_26141;
})();
if(cljs.core.truth_(inst_26119)){
var statearr_26142_26174 = state_26132__$1;
(statearr_26142_26174[(1)] = (13));

} else {
var statearr_26143_26175 = state_26132__$1;
(statearr_26143_26175[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (2))){
var inst_26095 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26096 = (0);
var state_26132__$1 = (function (){var statearr_26144 = state_26132;
(statearr_26144[(9)] = inst_26095);

(statearr_26144[(7)] = inst_26096);

return statearr_26144;
})();
var statearr_26145_26176 = state_26132__$1;
(statearr_26145_26176[(2)] = null);

(statearr_26145_26176[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (11))){
var inst_26096 = (state_26132[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26132,(10),Object,null,(9));
var inst_26105 = chs__$1.call(null,inst_26096);
var inst_26106 = done.call(null,inst_26096);
var inst_26107 = cljs.core.async.take_BANG_.call(null,inst_26105,inst_26106);
var state_26132__$1 = state_26132;
var statearr_26146_26177 = state_26132__$1;
(statearr_26146_26177[(2)] = inst_26107);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26132__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (9))){
var inst_26096 = (state_26132[(7)]);
var inst_26109 = (state_26132[(2)]);
var inst_26110 = (inst_26096 + (1));
var inst_26096__$1 = inst_26110;
var state_26132__$1 = (function (){var statearr_26147 = state_26132;
(statearr_26147[(7)] = inst_26096__$1);

(statearr_26147[(10)] = inst_26109);

return statearr_26147;
})();
var statearr_26148_26178 = state_26132__$1;
(statearr_26148_26178[(2)] = null);

(statearr_26148_26178[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (5))){
var inst_26116 = (state_26132[(2)]);
var state_26132__$1 = (function (){var statearr_26149 = state_26132;
(statearr_26149[(11)] = inst_26116);

return statearr_26149;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26132__$1,(12),dchan);
} else {
if((state_val_26133 === (14))){
var inst_26118 = (state_26132[(8)]);
var inst_26123 = cljs.core.apply.call(null,f,inst_26118);
var state_26132__$1 = state_26132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26132__$1,(16),out,inst_26123);
} else {
if((state_val_26133 === (16))){
var inst_26125 = (state_26132[(2)]);
var state_26132__$1 = (function (){var statearr_26150 = state_26132;
(statearr_26150[(12)] = inst_26125);

return statearr_26150;
})();
var statearr_26151_26179 = state_26132__$1;
(statearr_26151_26179[(2)] = null);

(statearr_26151_26179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (10))){
var inst_26100 = (state_26132[(2)]);
var inst_26101 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26132__$1 = (function (){var statearr_26152 = state_26132;
(statearr_26152[(13)] = inst_26100);

return statearr_26152;
})();
var statearr_26153_26180 = state_26132__$1;
(statearr_26153_26180[(2)] = inst_26101);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26132__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (8))){
var inst_26114 = (state_26132[(2)]);
var state_26132__$1 = state_26132;
var statearr_26154_26181 = state_26132__$1;
(statearr_26154_26181[(2)] = inst_26114);

(statearr_26154_26181[(1)] = (5));


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
});})(c__19673__auto___26166,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19608__auto__,c__19673__auto___26166,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19609__auto__ = null;
var cljs$core$async$state_machine__19609__auto____0 = (function (){
var statearr_26158 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26158[(0)] = cljs$core$async$state_machine__19609__auto__);

(statearr_26158[(1)] = (1));

return statearr_26158;
});
var cljs$core$async$state_machine__19609__auto____1 = (function (state_26132){
while(true){
var ret_value__19610__auto__ = (function (){try{while(true){
var result__19611__auto__ = switch__19608__auto__.call(null,state_26132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19611__auto__;
}
break;
}
}catch (e26159){if((e26159 instanceof Object)){
var ex__19612__auto__ = e26159;
var statearr_26160_26182 = state_26132;
(statearr_26160_26182[(5)] = ex__19612__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26183 = state_26132;
state_26132 = G__26183;
continue;
} else {
return ret_value__19610__auto__;
}
break;
}
});
cljs$core$async$state_machine__19609__auto__ = function(state_26132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19609__auto____1.call(this,state_26132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19609__auto____0;
cljs$core$async$state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19609__auto____1;
return cljs$core$async$state_machine__19609__auto__;
})()
;})(switch__19608__auto__,c__19673__auto___26166,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19675__auto__ = (function (){var statearr_26161 = f__19674__auto__.call(null);
(statearr_26161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19673__auto___26166);

return statearr_26161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19675__auto__);
});})(c__19673__auto___26166,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args26185 = [];
var len__17388__auto___26241 = arguments.length;
var i__17389__auto___26242 = (0);
while(true){
if((i__17389__auto___26242 < len__17388__auto___26241)){
args26185.push((arguments[i__17389__auto___26242]));

var G__26243 = (i__17389__auto___26242 + (1));
i__17389__auto___26242 = G__26243;
continue;
} else {
}
break;
}

var G__26187 = args26185.length;
switch (G__26187) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26185.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19673__auto___26245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19673__auto___26245,out){
return (function (){
var f__19674__auto__ = (function (){var switch__19608__auto__ = ((function (c__19673__auto___26245,out){
return (function (state_26217){
var state_val_26218 = (state_26217[(1)]);
if((state_val_26218 === (7))){
var inst_26197 = (state_26217[(7)]);
var inst_26196 = (state_26217[(8)]);
var inst_26196__$1 = (state_26217[(2)]);
var inst_26197__$1 = cljs.core.nth.call(null,inst_26196__$1,(0),null);
var inst_26198 = cljs.core.nth.call(null,inst_26196__$1,(1),null);
var inst_26199 = (inst_26197__$1 == null);
var state_26217__$1 = (function (){var statearr_26219 = state_26217;
(statearr_26219[(9)] = inst_26198);

(statearr_26219[(7)] = inst_26197__$1);

(statearr_26219[(8)] = inst_26196__$1);

return statearr_26219;
})();
if(cljs.core.truth_(inst_26199)){
var statearr_26220_26246 = state_26217__$1;
(statearr_26220_26246[(1)] = (8));

} else {
var statearr_26221_26247 = state_26217__$1;
(statearr_26221_26247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26218 === (1))){
var inst_26188 = cljs.core.vec.call(null,chs);
var inst_26189 = inst_26188;
var state_26217__$1 = (function (){var statearr_26222 = state_26217;
(statearr_26222[(10)] = inst_26189);

return statearr_26222;
})();
var statearr_26223_26248 = state_26217__$1;
(statearr_26223_26248[(2)] = null);

(statearr_26223_26248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26218 === (4))){
var inst_26189 = (state_26217[(10)]);
var state_26217__$1 = state_26217;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26217__$1,(7),inst_26189);
} else {
if((state_val_26218 === (6))){
var inst_26213 = (state_26217[(2)]);
var state_26217__$1 = state_26217;
var statearr_26224_26249 = state_26217__$1;
(statearr_26224_26249[(2)] = inst_26213);

(statearr_26224_26249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26218 === (3))){
var inst_26215 = (state_26217[(2)]);
var state_26217__$1 = state_26217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26217__$1,inst_26215);
} else {
if((state_val_26218 === (2))){
var inst_26189 = (state_26217[(10)]);
var inst_26191 = cljs.core.count.call(null,inst_26189);
var inst_26192 = (inst_26191 > (0));
var state_26217__$1 = state_26217;
if(cljs.core.truth_(inst_26192)){
var statearr_26226_26250 = state_26217__$1;
(statearr_26226_26250[(1)] = (4));

} else {
var statearr_26227_26251 = state_26217__$1;
(statearr_26227_26251[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26218 === (11))){
var inst_26189 = (state_26217[(10)]);
var inst_26206 = (state_26217[(2)]);
var tmp26225 = inst_26189;
var inst_26189__$1 = tmp26225;
var state_26217__$1 = (function (){var statearr_26228 = state_26217;
(statearr_26228[(10)] = inst_26189__$1);

(statearr_26228[(11)] = inst_26206);

return statearr_26228;
})();
var statearr_26229_26252 = state_26217__$1;
(statearr_26229_26252[(2)] = null);

(statearr_26229_26252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26218 === (9))){
var inst_26197 = (state_26217[(7)]);
var state_26217__$1 = state_26217;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26217__$1,(11),out,inst_26197);
} else {
if((state_val_26218 === (5))){
var inst_26211 = cljs.core.async.close_BANG_.call(null,out);
var state_26217__$1 = state_26217;
var statearr_26230_26253 = state_26217__$1;
(statearr_26230_26253[(2)] = inst_26211);

(statearr_26230_26253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26218 === (10))){
var inst_26209 = (state_26217[(2)]);
var state_26217__$1 = state_26217;
var statearr_26231_26254 = state_26217__$1;
(statearr_26231_26254[(2)] = inst_26209);

(statearr_26231_26254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26218 === (8))){
var inst_26198 = (state_26217[(9)]);
var inst_26189 = (state_26217[(10)]);
var inst_26197 = (state_26217[(7)]);
var inst_26196 = (state_26217[(8)]);
var inst_26201 = (function (){var cs = inst_26189;
var vec__26194 = inst_26196;
var v = inst_26197;
var c = inst_26198;
return ((function (cs,vec__26194,v,c,inst_26198,inst_26189,inst_26197,inst_26196,state_val_26218,c__19673__auto___26245,out){
return (function (p1__26184_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26184_SHARP_);
});
;})(cs,vec__26194,v,c,inst_26198,inst_26189,inst_26197,inst_26196,state_val_26218,c__19673__auto___26245,out))
})();
var inst_26202 = cljs.core.filterv.call(null,inst_26201,inst_26189);
var inst_26189__$1 = inst_26202;
var state_26217__$1 = (function (){var statearr_26232 = state_26217;
(statearr_26232[(10)] = inst_26189__$1);

return statearr_26232;
})();
var statearr_26233_26255 = state_26217__$1;
(statearr_26233_26255[(2)] = null);

(statearr_26233_26255[(1)] = (2));


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
});})(c__19673__auto___26245,out))
;
return ((function (switch__19608__auto__,c__19673__auto___26245,out){
return (function() {
var cljs$core$async$state_machine__19609__auto__ = null;
var cljs$core$async$state_machine__19609__auto____0 = (function (){
var statearr_26237 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26237[(0)] = cljs$core$async$state_machine__19609__auto__);

(statearr_26237[(1)] = (1));

return statearr_26237;
});
var cljs$core$async$state_machine__19609__auto____1 = (function (state_26217){
while(true){
var ret_value__19610__auto__ = (function (){try{while(true){
var result__19611__auto__ = switch__19608__auto__.call(null,state_26217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19611__auto__;
}
break;
}
}catch (e26238){if((e26238 instanceof Object)){
var ex__19612__auto__ = e26238;
var statearr_26239_26256 = state_26217;
(statearr_26239_26256[(5)] = ex__19612__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26257 = state_26217;
state_26217 = G__26257;
continue;
} else {
return ret_value__19610__auto__;
}
break;
}
});
cljs$core$async$state_machine__19609__auto__ = function(state_26217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19609__auto____1.call(this,state_26217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19609__auto____0;
cljs$core$async$state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19609__auto____1;
return cljs$core$async$state_machine__19609__auto__;
})()
;})(switch__19608__auto__,c__19673__auto___26245,out))
})();
var state__19675__auto__ = (function (){var statearr_26240 = f__19674__auto__.call(null);
(statearr_26240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19673__auto___26245);

return statearr_26240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19675__auto__);
});})(c__19673__auto___26245,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args26258 = [];
var len__17388__auto___26307 = arguments.length;
var i__17389__auto___26308 = (0);
while(true){
if((i__17389__auto___26308 < len__17388__auto___26307)){
args26258.push((arguments[i__17389__auto___26308]));

var G__26309 = (i__17389__auto___26308 + (1));
i__17389__auto___26308 = G__26309;
continue;
} else {
}
break;
}

var G__26260 = args26258.length;
switch (G__26260) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26258.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19673__auto___26311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19673__auto___26311,out){
return (function (){
var f__19674__auto__ = (function (){var switch__19608__auto__ = ((function (c__19673__auto___26311,out){
return (function (state_26284){
var state_val_26285 = (state_26284[(1)]);
if((state_val_26285 === (7))){
var inst_26266 = (state_26284[(7)]);
var inst_26266__$1 = (state_26284[(2)]);
var inst_26267 = (inst_26266__$1 == null);
var inst_26268 = cljs.core.not.call(null,inst_26267);
var state_26284__$1 = (function (){var statearr_26286 = state_26284;
(statearr_26286[(7)] = inst_26266__$1);

return statearr_26286;
})();
if(inst_26268){
var statearr_26287_26312 = state_26284__$1;
(statearr_26287_26312[(1)] = (8));

} else {
var statearr_26288_26313 = state_26284__$1;
(statearr_26288_26313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26285 === (1))){
var inst_26261 = (0);
var state_26284__$1 = (function (){var statearr_26289 = state_26284;
(statearr_26289[(8)] = inst_26261);

return statearr_26289;
})();
var statearr_26290_26314 = state_26284__$1;
(statearr_26290_26314[(2)] = null);

(statearr_26290_26314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26285 === (4))){
var state_26284__$1 = state_26284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26284__$1,(7),ch);
} else {
if((state_val_26285 === (6))){
var inst_26279 = (state_26284[(2)]);
var state_26284__$1 = state_26284;
var statearr_26291_26315 = state_26284__$1;
(statearr_26291_26315[(2)] = inst_26279);

(statearr_26291_26315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26285 === (3))){
var inst_26281 = (state_26284[(2)]);
var inst_26282 = cljs.core.async.close_BANG_.call(null,out);
var state_26284__$1 = (function (){var statearr_26292 = state_26284;
(statearr_26292[(9)] = inst_26281);

return statearr_26292;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26284__$1,inst_26282);
} else {
if((state_val_26285 === (2))){
var inst_26261 = (state_26284[(8)]);
var inst_26263 = (inst_26261 < n);
var state_26284__$1 = state_26284;
if(cljs.core.truth_(inst_26263)){
var statearr_26293_26316 = state_26284__$1;
(statearr_26293_26316[(1)] = (4));

} else {
var statearr_26294_26317 = state_26284__$1;
(statearr_26294_26317[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26285 === (11))){
var inst_26261 = (state_26284[(8)]);
var inst_26271 = (state_26284[(2)]);
var inst_26272 = (inst_26261 + (1));
var inst_26261__$1 = inst_26272;
var state_26284__$1 = (function (){var statearr_26295 = state_26284;
(statearr_26295[(8)] = inst_26261__$1);

(statearr_26295[(10)] = inst_26271);

return statearr_26295;
})();
var statearr_26296_26318 = state_26284__$1;
(statearr_26296_26318[(2)] = null);

(statearr_26296_26318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26285 === (9))){
var state_26284__$1 = state_26284;
var statearr_26297_26319 = state_26284__$1;
(statearr_26297_26319[(2)] = null);

(statearr_26297_26319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26285 === (5))){
var state_26284__$1 = state_26284;
var statearr_26298_26320 = state_26284__$1;
(statearr_26298_26320[(2)] = null);

(statearr_26298_26320[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26285 === (10))){
var inst_26276 = (state_26284[(2)]);
var state_26284__$1 = state_26284;
var statearr_26299_26321 = state_26284__$1;
(statearr_26299_26321[(2)] = inst_26276);

(statearr_26299_26321[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26285 === (8))){
var inst_26266 = (state_26284[(7)]);
var state_26284__$1 = state_26284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26284__$1,(11),out,inst_26266);
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
});})(c__19673__auto___26311,out))
;
return ((function (switch__19608__auto__,c__19673__auto___26311,out){
return (function() {
var cljs$core$async$state_machine__19609__auto__ = null;
var cljs$core$async$state_machine__19609__auto____0 = (function (){
var statearr_26303 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26303[(0)] = cljs$core$async$state_machine__19609__auto__);

(statearr_26303[(1)] = (1));

return statearr_26303;
});
var cljs$core$async$state_machine__19609__auto____1 = (function (state_26284){
while(true){
var ret_value__19610__auto__ = (function (){try{while(true){
var result__19611__auto__ = switch__19608__auto__.call(null,state_26284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19611__auto__;
}
break;
}
}catch (e26304){if((e26304 instanceof Object)){
var ex__19612__auto__ = e26304;
var statearr_26305_26322 = state_26284;
(statearr_26305_26322[(5)] = ex__19612__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26323 = state_26284;
state_26284 = G__26323;
continue;
} else {
return ret_value__19610__auto__;
}
break;
}
});
cljs$core$async$state_machine__19609__auto__ = function(state_26284){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19609__auto____1.call(this,state_26284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19609__auto____0;
cljs$core$async$state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19609__auto____1;
return cljs$core$async$state_machine__19609__auto__;
})()
;})(switch__19608__auto__,c__19673__auto___26311,out))
})();
var state__19675__auto__ = (function (){var statearr_26306 = f__19674__auto__.call(null);
(statearr_26306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19673__auto___26311);

return statearr_26306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19675__auto__);
});})(c__19673__auto___26311,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26331 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26331 = (function (map_LT_,f,ch,meta26332){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26332 = meta26332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26333,meta26332__$1){
var self__ = this;
var _26333__$1 = this;
return (new cljs.core.async.t_cljs$core$async26331(self__.map_LT_,self__.f,self__.ch,meta26332__$1));
});

cljs.core.async.t_cljs$core$async26331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26333){
var self__ = this;
var _26333__$1 = this;
return self__.meta26332;
});

cljs.core.async.t_cljs$core$async26331.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26331.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26331.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26331.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26331.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26334 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26334 = (function (map_LT_,f,ch,meta26332,_,fn1,meta26335){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26332 = meta26332;
this._ = _;
this.fn1 = fn1;
this.meta26335 = meta26335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26336,meta26335__$1){
var self__ = this;
var _26336__$1 = this;
return (new cljs.core.async.t_cljs$core$async26334(self__.map_LT_,self__.f,self__.ch,self__.meta26332,self__._,self__.fn1,meta26335__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26334.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26336){
var self__ = this;
var _26336__$1 = this;
return self__.meta26335;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26334.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26334.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26334.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26324_SHARP_){
return f1.call(null,(((p1__26324_SHARP_ == null))?null:self__.f.call(null,p1__26324_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26334.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26332","meta26332",-796859095,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26331","cljs.core.async/t_cljs$core$async26331",-722179455,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26335","meta26335",-1153538414,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26334.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26334";

cljs.core.async.t_cljs$core$async26334.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16928__auto__,writer__16929__auto__,opt__16930__auto__){
return cljs.core._write.call(null,writer__16929__auto__,"cljs.core.async/t_cljs$core$async26334");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26334 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26334(map_LT___$1,f__$1,ch__$1,meta26332__$1,___$2,fn1__$1,meta26335){
return (new cljs.core.async.t_cljs$core$async26334(map_LT___$1,f__$1,ch__$1,meta26332__$1,___$2,fn1__$1,meta26335));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26334(self__.map_LT_,self__.f,self__.ch,self__.meta26332,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16318__auto__ = ret;
if(cljs.core.truth_(and__16318__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16318__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26331.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26331.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26332","meta26332",-796859095,null)], null);
});

cljs.core.async.t_cljs$core$async26331.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26331.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26331";

cljs.core.async.t_cljs$core$async26331.cljs$lang$ctorPrWriter = (function (this__16928__auto__,writer__16929__auto__,opt__16930__auto__){
return cljs.core._write.call(null,writer__16929__auto__,"cljs.core.async/t_cljs$core$async26331");
});

cljs.core.async.__GT_t_cljs$core$async26331 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26331(map_LT___$1,f__$1,ch__$1,meta26332){
return (new cljs.core.async.t_cljs$core$async26331(map_LT___$1,f__$1,ch__$1,meta26332));
});

}

return (new cljs.core.async.t_cljs$core$async26331(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26340 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26340 = (function (map_GT_,f,ch,meta26341){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26341 = meta26341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26342,meta26341__$1){
var self__ = this;
var _26342__$1 = this;
return (new cljs.core.async.t_cljs$core$async26340(self__.map_GT_,self__.f,self__.ch,meta26341__$1));
});

cljs.core.async.t_cljs$core$async26340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26342){
var self__ = this;
var _26342__$1 = this;
return self__.meta26341;
});

cljs.core.async.t_cljs$core$async26340.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26340.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26340.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26340.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26340.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26340.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26341","meta26341",-482518061,null)], null);
});

cljs.core.async.t_cljs$core$async26340.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26340";

cljs.core.async.t_cljs$core$async26340.cljs$lang$ctorPrWriter = (function (this__16928__auto__,writer__16929__auto__,opt__16930__auto__){
return cljs.core._write.call(null,writer__16929__auto__,"cljs.core.async/t_cljs$core$async26340");
});

cljs.core.async.__GT_t_cljs$core$async26340 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26340(map_GT___$1,f__$1,ch__$1,meta26341){
return (new cljs.core.async.t_cljs$core$async26340(map_GT___$1,f__$1,ch__$1,meta26341));
});

}

return (new cljs.core.async.t_cljs$core$async26340(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26346 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26346 = (function (filter_GT_,p,ch,meta26347){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26347 = meta26347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26348,meta26347__$1){
var self__ = this;
var _26348__$1 = this;
return (new cljs.core.async.t_cljs$core$async26346(self__.filter_GT_,self__.p,self__.ch,meta26347__$1));
});

cljs.core.async.t_cljs$core$async26346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26348){
var self__ = this;
var _26348__$1 = this;
return self__.meta26347;
});

cljs.core.async.t_cljs$core$async26346.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26346.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26346.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26346.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26346.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26346.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26346.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26347","meta26347",1623082852,null)], null);
});

cljs.core.async.t_cljs$core$async26346.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26346";

cljs.core.async.t_cljs$core$async26346.cljs$lang$ctorPrWriter = (function (this__16928__auto__,writer__16929__auto__,opt__16930__auto__){
return cljs.core._write.call(null,writer__16929__auto__,"cljs.core.async/t_cljs$core$async26346");
});

cljs.core.async.__GT_t_cljs$core$async26346 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26346(filter_GT___$1,p__$1,ch__$1,meta26347){
return (new cljs.core.async.t_cljs$core$async26346(filter_GT___$1,p__$1,ch__$1,meta26347));
});

}

return (new cljs.core.async.t_cljs$core$async26346(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args26349 = [];
var len__17388__auto___26393 = arguments.length;
var i__17389__auto___26394 = (0);
while(true){
if((i__17389__auto___26394 < len__17388__auto___26393)){
args26349.push((arguments[i__17389__auto___26394]));

var G__26395 = (i__17389__auto___26394 + (1));
i__17389__auto___26394 = G__26395;
continue;
} else {
}
break;
}

var G__26351 = args26349.length;
switch (G__26351) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26349.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19673__auto___26397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19673__auto___26397,out){
return (function (){
var f__19674__auto__ = (function (){var switch__19608__auto__ = ((function (c__19673__auto___26397,out){
return (function (state_26372){
var state_val_26373 = (state_26372[(1)]);
if((state_val_26373 === (7))){
var inst_26368 = (state_26372[(2)]);
var state_26372__$1 = state_26372;
var statearr_26374_26398 = state_26372__$1;
(statearr_26374_26398[(2)] = inst_26368);

(statearr_26374_26398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (1))){
var state_26372__$1 = state_26372;
var statearr_26375_26399 = state_26372__$1;
(statearr_26375_26399[(2)] = null);

(statearr_26375_26399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (4))){
var inst_26354 = (state_26372[(7)]);
var inst_26354__$1 = (state_26372[(2)]);
var inst_26355 = (inst_26354__$1 == null);
var state_26372__$1 = (function (){var statearr_26376 = state_26372;
(statearr_26376[(7)] = inst_26354__$1);

return statearr_26376;
})();
if(cljs.core.truth_(inst_26355)){
var statearr_26377_26400 = state_26372__$1;
(statearr_26377_26400[(1)] = (5));

} else {
var statearr_26378_26401 = state_26372__$1;
(statearr_26378_26401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (6))){
var inst_26354 = (state_26372[(7)]);
var inst_26359 = p.call(null,inst_26354);
var state_26372__$1 = state_26372;
if(cljs.core.truth_(inst_26359)){
var statearr_26379_26402 = state_26372__$1;
(statearr_26379_26402[(1)] = (8));

} else {
var statearr_26380_26403 = state_26372__$1;
(statearr_26380_26403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (3))){
var inst_26370 = (state_26372[(2)]);
var state_26372__$1 = state_26372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26372__$1,inst_26370);
} else {
if((state_val_26373 === (2))){
var state_26372__$1 = state_26372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26372__$1,(4),ch);
} else {
if((state_val_26373 === (11))){
var inst_26362 = (state_26372[(2)]);
var state_26372__$1 = state_26372;
var statearr_26381_26404 = state_26372__$1;
(statearr_26381_26404[(2)] = inst_26362);

(statearr_26381_26404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (9))){
var state_26372__$1 = state_26372;
var statearr_26382_26405 = state_26372__$1;
(statearr_26382_26405[(2)] = null);

(statearr_26382_26405[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (5))){
var inst_26357 = cljs.core.async.close_BANG_.call(null,out);
var state_26372__$1 = state_26372;
var statearr_26383_26406 = state_26372__$1;
(statearr_26383_26406[(2)] = inst_26357);

(statearr_26383_26406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (10))){
var inst_26365 = (state_26372[(2)]);
var state_26372__$1 = (function (){var statearr_26384 = state_26372;
(statearr_26384[(8)] = inst_26365);

return statearr_26384;
})();
var statearr_26385_26407 = state_26372__$1;
(statearr_26385_26407[(2)] = null);

(statearr_26385_26407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (8))){
var inst_26354 = (state_26372[(7)]);
var state_26372__$1 = state_26372;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26372__$1,(11),out,inst_26354);
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
});})(c__19673__auto___26397,out))
;
return ((function (switch__19608__auto__,c__19673__auto___26397,out){
return (function() {
var cljs$core$async$state_machine__19609__auto__ = null;
var cljs$core$async$state_machine__19609__auto____0 = (function (){
var statearr_26389 = [null,null,null,null,null,null,null,null,null];
(statearr_26389[(0)] = cljs$core$async$state_machine__19609__auto__);

(statearr_26389[(1)] = (1));

return statearr_26389;
});
var cljs$core$async$state_machine__19609__auto____1 = (function (state_26372){
while(true){
var ret_value__19610__auto__ = (function (){try{while(true){
var result__19611__auto__ = switch__19608__auto__.call(null,state_26372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19611__auto__;
}
break;
}
}catch (e26390){if((e26390 instanceof Object)){
var ex__19612__auto__ = e26390;
var statearr_26391_26408 = state_26372;
(statearr_26391_26408[(5)] = ex__19612__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26409 = state_26372;
state_26372 = G__26409;
continue;
} else {
return ret_value__19610__auto__;
}
break;
}
});
cljs$core$async$state_machine__19609__auto__ = function(state_26372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19609__auto____1.call(this,state_26372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19609__auto____0;
cljs$core$async$state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19609__auto____1;
return cljs$core$async$state_machine__19609__auto__;
})()
;})(switch__19608__auto__,c__19673__auto___26397,out))
})();
var state__19675__auto__ = (function (){var statearr_26392 = f__19674__auto__.call(null);
(statearr_26392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19673__auto___26397);

return statearr_26392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19675__auto__);
});})(c__19673__auto___26397,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26410 = [];
var len__17388__auto___26413 = arguments.length;
var i__17389__auto___26414 = (0);
while(true){
if((i__17389__auto___26414 < len__17388__auto___26413)){
args26410.push((arguments[i__17389__auto___26414]));

var G__26415 = (i__17389__auto___26414 + (1));
i__17389__auto___26414 = G__26415;
continue;
} else {
}
break;
}

var G__26412 = args26410.length;
switch (G__26412) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26410.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19673__auto__){
return (function (){
var f__19674__auto__ = (function (){var switch__19608__auto__ = ((function (c__19673__auto__){
return (function (state_26582){
var state_val_26583 = (state_26582[(1)]);
if((state_val_26583 === (7))){
var inst_26578 = (state_26582[(2)]);
var state_26582__$1 = state_26582;
var statearr_26584_26625 = state_26582__$1;
(statearr_26584_26625[(2)] = inst_26578);

(statearr_26584_26625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (20))){
var inst_26548 = (state_26582[(7)]);
var inst_26559 = (state_26582[(2)]);
var inst_26560 = cljs.core.next.call(null,inst_26548);
var inst_26534 = inst_26560;
var inst_26535 = null;
var inst_26536 = (0);
var inst_26537 = (0);
var state_26582__$1 = (function (){var statearr_26585 = state_26582;
(statearr_26585[(8)] = inst_26536);

(statearr_26585[(9)] = inst_26537);

(statearr_26585[(10)] = inst_26534);

(statearr_26585[(11)] = inst_26535);

(statearr_26585[(12)] = inst_26559);

return statearr_26585;
})();
var statearr_26586_26626 = state_26582__$1;
(statearr_26586_26626[(2)] = null);

(statearr_26586_26626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (1))){
var state_26582__$1 = state_26582;
var statearr_26587_26627 = state_26582__$1;
(statearr_26587_26627[(2)] = null);

(statearr_26587_26627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (4))){
var inst_26523 = (state_26582[(13)]);
var inst_26523__$1 = (state_26582[(2)]);
var inst_26524 = (inst_26523__$1 == null);
var state_26582__$1 = (function (){var statearr_26588 = state_26582;
(statearr_26588[(13)] = inst_26523__$1);

return statearr_26588;
})();
if(cljs.core.truth_(inst_26524)){
var statearr_26589_26628 = state_26582__$1;
(statearr_26589_26628[(1)] = (5));

} else {
var statearr_26590_26629 = state_26582__$1;
(statearr_26590_26629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (15))){
var state_26582__$1 = state_26582;
var statearr_26594_26630 = state_26582__$1;
(statearr_26594_26630[(2)] = null);

(statearr_26594_26630[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (21))){
var state_26582__$1 = state_26582;
var statearr_26595_26631 = state_26582__$1;
(statearr_26595_26631[(2)] = null);

(statearr_26595_26631[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (13))){
var inst_26536 = (state_26582[(8)]);
var inst_26537 = (state_26582[(9)]);
var inst_26534 = (state_26582[(10)]);
var inst_26535 = (state_26582[(11)]);
var inst_26544 = (state_26582[(2)]);
var inst_26545 = (inst_26537 + (1));
var tmp26591 = inst_26536;
var tmp26592 = inst_26534;
var tmp26593 = inst_26535;
var inst_26534__$1 = tmp26592;
var inst_26535__$1 = tmp26593;
var inst_26536__$1 = tmp26591;
var inst_26537__$1 = inst_26545;
var state_26582__$1 = (function (){var statearr_26596 = state_26582;
(statearr_26596[(8)] = inst_26536__$1);

(statearr_26596[(9)] = inst_26537__$1);

(statearr_26596[(10)] = inst_26534__$1);

(statearr_26596[(14)] = inst_26544);

(statearr_26596[(11)] = inst_26535__$1);

return statearr_26596;
})();
var statearr_26597_26632 = state_26582__$1;
(statearr_26597_26632[(2)] = null);

(statearr_26597_26632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (22))){
var state_26582__$1 = state_26582;
var statearr_26598_26633 = state_26582__$1;
(statearr_26598_26633[(2)] = null);

(statearr_26598_26633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (6))){
var inst_26523 = (state_26582[(13)]);
var inst_26532 = f.call(null,inst_26523);
var inst_26533 = cljs.core.seq.call(null,inst_26532);
var inst_26534 = inst_26533;
var inst_26535 = null;
var inst_26536 = (0);
var inst_26537 = (0);
var state_26582__$1 = (function (){var statearr_26599 = state_26582;
(statearr_26599[(8)] = inst_26536);

(statearr_26599[(9)] = inst_26537);

(statearr_26599[(10)] = inst_26534);

(statearr_26599[(11)] = inst_26535);

return statearr_26599;
})();
var statearr_26600_26634 = state_26582__$1;
(statearr_26600_26634[(2)] = null);

(statearr_26600_26634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (17))){
var inst_26548 = (state_26582[(7)]);
var inst_26552 = cljs.core.chunk_first.call(null,inst_26548);
var inst_26553 = cljs.core.chunk_rest.call(null,inst_26548);
var inst_26554 = cljs.core.count.call(null,inst_26552);
var inst_26534 = inst_26553;
var inst_26535 = inst_26552;
var inst_26536 = inst_26554;
var inst_26537 = (0);
var state_26582__$1 = (function (){var statearr_26601 = state_26582;
(statearr_26601[(8)] = inst_26536);

(statearr_26601[(9)] = inst_26537);

(statearr_26601[(10)] = inst_26534);

(statearr_26601[(11)] = inst_26535);

return statearr_26601;
})();
var statearr_26602_26635 = state_26582__$1;
(statearr_26602_26635[(2)] = null);

(statearr_26602_26635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (3))){
var inst_26580 = (state_26582[(2)]);
var state_26582__$1 = state_26582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26582__$1,inst_26580);
} else {
if((state_val_26583 === (12))){
var inst_26568 = (state_26582[(2)]);
var state_26582__$1 = state_26582;
var statearr_26603_26636 = state_26582__$1;
(statearr_26603_26636[(2)] = inst_26568);

(statearr_26603_26636[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (2))){
var state_26582__$1 = state_26582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26582__$1,(4),in$);
} else {
if((state_val_26583 === (23))){
var inst_26576 = (state_26582[(2)]);
var state_26582__$1 = state_26582;
var statearr_26604_26637 = state_26582__$1;
(statearr_26604_26637[(2)] = inst_26576);

(statearr_26604_26637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (19))){
var inst_26563 = (state_26582[(2)]);
var state_26582__$1 = state_26582;
var statearr_26605_26638 = state_26582__$1;
(statearr_26605_26638[(2)] = inst_26563);

(statearr_26605_26638[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (11))){
var inst_26534 = (state_26582[(10)]);
var inst_26548 = (state_26582[(7)]);
var inst_26548__$1 = cljs.core.seq.call(null,inst_26534);
var state_26582__$1 = (function (){var statearr_26606 = state_26582;
(statearr_26606[(7)] = inst_26548__$1);

return statearr_26606;
})();
if(inst_26548__$1){
var statearr_26607_26639 = state_26582__$1;
(statearr_26607_26639[(1)] = (14));

} else {
var statearr_26608_26640 = state_26582__$1;
(statearr_26608_26640[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (9))){
var inst_26570 = (state_26582[(2)]);
var inst_26571 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26582__$1 = (function (){var statearr_26609 = state_26582;
(statearr_26609[(15)] = inst_26570);

return statearr_26609;
})();
if(cljs.core.truth_(inst_26571)){
var statearr_26610_26641 = state_26582__$1;
(statearr_26610_26641[(1)] = (21));

} else {
var statearr_26611_26642 = state_26582__$1;
(statearr_26611_26642[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (5))){
var inst_26526 = cljs.core.async.close_BANG_.call(null,out);
var state_26582__$1 = state_26582;
var statearr_26612_26643 = state_26582__$1;
(statearr_26612_26643[(2)] = inst_26526);

(statearr_26612_26643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (14))){
var inst_26548 = (state_26582[(7)]);
var inst_26550 = cljs.core.chunked_seq_QMARK_.call(null,inst_26548);
var state_26582__$1 = state_26582;
if(inst_26550){
var statearr_26613_26644 = state_26582__$1;
(statearr_26613_26644[(1)] = (17));

} else {
var statearr_26614_26645 = state_26582__$1;
(statearr_26614_26645[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (16))){
var inst_26566 = (state_26582[(2)]);
var state_26582__$1 = state_26582;
var statearr_26615_26646 = state_26582__$1;
(statearr_26615_26646[(2)] = inst_26566);

(statearr_26615_26646[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (10))){
var inst_26537 = (state_26582[(9)]);
var inst_26535 = (state_26582[(11)]);
var inst_26542 = cljs.core._nth.call(null,inst_26535,inst_26537);
var state_26582__$1 = state_26582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26582__$1,(13),out,inst_26542);
} else {
if((state_val_26583 === (18))){
var inst_26548 = (state_26582[(7)]);
var inst_26557 = cljs.core.first.call(null,inst_26548);
var state_26582__$1 = state_26582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26582__$1,(20),out,inst_26557);
} else {
if((state_val_26583 === (8))){
var inst_26536 = (state_26582[(8)]);
var inst_26537 = (state_26582[(9)]);
var inst_26539 = (inst_26537 < inst_26536);
var inst_26540 = inst_26539;
var state_26582__$1 = state_26582;
if(cljs.core.truth_(inst_26540)){
var statearr_26616_26647 = state_26582__$1;
(statearr_26616_26647[(1)] = (10));

} else {
var statearr_26617_26648 = state_26582__$1;
(statearr_26617_26648[(1)] = (11));

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
});})(c__19673__auto__))
;
return ((function (switch__19608__auto__,c__19673__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19609__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19609__auto____0 = (function (){
var statearr_26621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26621[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19609__auto__);

(statearr_26621[(1)] = (1));

return statearr_26621;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19609__auto____1 = (function (state_26582){
while(true){
var ret_value__19610__auto__ = (function (){try{while(true){
var result__19611__auto__ = switch__19608__auto__.call(null,state_26582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19611__auto__;
}
break;
}
}catch (e26622){if((e26622 instanceof Object)){
var ex__19612__auto__ = e26622;
var statearr_26623_26649 = state_26582;
(statearr_26623_26649[(5)] = ex__19612__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26650 = state_26582;
state_26582 = G__26650;
continue;
} else {
return ret_value__19610__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19609__auto__ = function(state_26582){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19609__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19609__auto____1.call(this,state_26582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19609__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19609__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19609__auto__;
})()
;})(switch__19608__auto__,c__19673__auto__))
})();
var state__19675__auto__ = (function (){var statearr_26624 = f__19674__auto__.call(null);
(statearr_26624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19673__auto__);

return statearr_26624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19675__auto__);
});})(c__19673__auto__))
);

return c__19673__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26651 = [];
var len__17388__auto___26654 = arguments.length;
var i__17389__auto___26655 = (0);
while(true){
if((i__17389__auto___26655 < len__17388__auto___26654)){
args26651.push((arguments[i__17389__auto___26655]));

var G__26656 = (i__17389__auto___26655 + (1));
i__17389__auto___26655 = G__26656;
continue;
} else {
}
break;
}

var G__26653 = args26651.length;
switch (G__26653) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26651.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args26658 = [];
var len__17388__auto___26661 = arguments.length;
var i__17389__auto___26662 = (0);
while(true){
if((i__17389__auto___26662 < len__17388__auto___26661)){
args26658.push((arguments[i__17389__auto___26662]));

var G__26663 = (i__17389__auto___26662 + (1));
i__17389__auto___26662 = G__26663;
continue;
} else {
}
break;
}

var G__26660 = args26658.length;
switch (G__26660) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26658.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args26665 = [];
var len__17388__auto___26716 = arguments.length;
var i__17389__auto___26717 = (0);
while(true){
if((i__17389__auto___26717 < len__17388__auto___26716)){
args26665.push((arguments[i__17389__auto___26717]));

var G__26718 = (i__17389__auto___26717 + (1));
i__17389__auto___26717 = G__26718;
continue;
} else {
}
break;
}

var G__26667 = args26665.length;
switch (G__26667) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26665.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19673__auto___26720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19673__auto___26720,out){
return (function (){
var f__19674__auto__ = (function (){var switch__19608__auto__ = ((function (c__19673__auto___26720,out){
return (function (state_26691){
var state_val_26692 = (state_26691[(1)]);
if((state_val_26692 === (7))){
var inst_26686 = (state_26691[(2)]);
var state_26691__$1 = state_26691;
var statearr_26693_26721 = state_26691__$1;
(statearr_26693_26721[(2)] = inst_26686);

(statearr_26693_26721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26692 === (1))){
var inst_26668 = null;
var state_26691__$1 = (function (){var statearr_26694 = state_26691;
(statearr_26694[(7)] = inst_26668);

return statearr_26694;
})();
var statearr_26695_26722 = state_26691__$1;
(statearr_26695_26722[(2)] = null);

(statearr_26695_26722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26692 === (4))){
var inst_26671 = (state_26691[(8)]);
var inst_26671__$1 = (state_26691[(2)]);
var inst_26672 = (inst_26671__$1 == null);
var inst_26673 = cljs.core.not.call(null,inst_26672);
var state_26691__$1 = (function (){var statearr_26696 = state_26691;
(statearr_26696[(8)] = inst_26671__$1);

return statearr_26696;
})();
if(inst_26673){
var statearr_26697_26723 = state_26691__$1;
(statearr_26697_26723[(1)] = (5));

} else {
var statearr_26698_26724 = state_26691__$1;
(statearr_26698_26724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26692 === (6))){
var state_26691__$1 = state_26691;
var statearr_26699_26725 = state_26691__$1;
(statearr_26699_26725[(2)] = null);

(statearr_26699_26725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26692 === (3))){
var inst_26688 = (state_26691[(2)]);
var inst_26689 = cljs.core.async.close_BANG_.call(null,out);
var state_26691__$1 = (function (){var statearr_26700 = state_26691;
(statearr_26700[(9)] = inst_26688);

return statearr_26700;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26691__$1,inst_26689);
} else {
if((state_val_26692 === (2))){
var state_26691__$1 = state_26691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26691__$1,(4),ch);
} else {
if((state_val_26692 === (11))){
var inst_26671 = (state_26691[(8)]);
var inst_26680 = (state_26691[(2)]);
var inst_26668 = inst_26671;
var state_26691__$1 = (function (){var statearr_26701 = state_26691;
(statearr_26701[(7)] = inst_26668);

(statearr_26701[(10)] = inst_26680);

return statearr_26701;
})();
var statearr_26702_26726 = state_26691__$1;
(statearr_26702_26726[(2)] = null);

(statearr_26702_26726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26692 === (9))){
var inst_26671 = (state_26691[(8)]);
var state_26691__$1 = state_26691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26691__$1,(11),out,inst_26671);
} else {
if((state_val_26692 === (5))){
var inst_26668 = (state_26691[(7)]);
var inst_26671 = (state_26691[(8)]);
var inst_26675 = cljs.core._EQ_.call(null,inst_26671,inst_26668);
var state_26691__$1 = state_26691;
if(inst_26675){
var statearr_26704_26727 = state_26691__$1;
(statearr_26704_26727[(1)] = (8));

} else {
var statearr_26705_26728 = state_26691__$1;
(statearr_26705_26728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26692 === (10))){
var inst_26683 = (state_26691[(2)]);
var state_26691__$1 = state_26691;
var statearr_26706_26729 = state_26691__$1;
(statearr_26706_26729[(2)] = inst_26683);

(statearr_26706_26729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26692 === (8))){
var inst_26668 = (state_26691[(7)]);
var tmp26703 = inst_26668;
var inst_26668__$1 = tmp26703;
var state_26691__$1 = (function (){var statearr_26707 = state_26691;
(statearr_26707[(7)] = inst_26668__$1);

return statearr_26707;
})();
var statearr_26708_26730 = state_26691__$1;
(statearr_26708_26730[(2)] = null);

(statearr_26708_26730[(1)] = (2));


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
});})(c__19673__auto___26720,out))
;
return ((function (switch__19608__auto__,c__19673__auto___26720,out){
return (function() {
var cljs$core$async$state_machine__19609__auto__ = null;
var cljs$core$async$state_machine__19609__auto____0 = (function (){
var statearr_26712 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26712[(0)] = cljs$core$async$state_machine__19609__auto__);

(statearr_26712[(1)] = (1));

return statearr_26712;
});
var cljs$core$async$state_machine__19609__auto____1 = (function (state_26691){
while(true){
var ret_value__19610__auto__ = (function (){try{while(true){
var result__19611__auto__ = switch__19608__auto__.call(null,state_26691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19611__auto__;
}
break;
}
}catch (e26713){if((e26713 instanceof Object)){
var ex__19612__auto__ = e26713;
var statearr_26714_26731 = state_26691;
(statearr_26714_26731[(5)] = ex__19612__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26732 = state_26691;
state_26691 = G__26732;
continue;
} else {
return ret_value__19610__auto__;
}
break;
}
});
cljs$core$async$state_machine__19609__auto__ = function(state_26691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19609__auto____1.call(this,state_26691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19609__auto____0;
cljs$core$async$state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19609__auto____1;
return cljs$core$async$state_machine__19609__auto__;
})()
;})(switch__19608__auto__,c__19673__auto___26720,out))
})();
var state__19675__auto__ = (function (){var statearr_26715 = f__19674__auto__.call(null);
(statearr_26715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19673__auto___26720);

return statearr_26715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19675__auto__);
});})(c__19673__auto___26720,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26733 = [];
var len__17388__auto___26803 = arguments.length;
var i__17389__auto___26804 = (0);
while(true){
if((i__17389__auto___26804 < len__17388__auto___26803)){
args26733.push((arguments[i__17389__auto___26804]));

var G__26805 = (i__17389__auto___26804 + (1));
i__17389__auto___26804 = G__26805;
continue;
} else {
}
break;
}

var G__26735 = args26733.length;
switch (G__26735) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26733.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19673__auto___26807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19673__auto___26807,out){
return (function (){
var f__19674__auto__ = (function (){var switch__19608__auto__ = ((function (c__19673__auto___26807,out){
return (function (state_26773){
var state_val_26774 = (state_26773[(1)]);
if((state_val_26774 === (7))){
var inst_26769 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
var statearr_26775_26808 = state_26773__$1;
(statearr_26775_26808[(2)] = inst_26769);

(statearr_26775_26808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (1))){
var inst_26736 = (new Array(n));
var inst_26737 = inst_26736;
var inst_26738 = (0);
var state_26773__$1 = (function (){var statearr_26776 = state_26773;
(statearr_26776[(7)] = inst_26737);

(statearr_26776[(8)] = inst_26738);

return statearr_26776;
})();
var statearr_26777_26809 = state_26773__$1;
(statearr_26777_26809[(2)] = null);

(statearr_26777_26809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (4))){
var inst_26741 = (state_26773[(9)]);
var inst_26741__$1 = (state_26773[(2)]);
var inst_26742 = (inst_26741__$1 == null);
var inst_26743 = cljs.core.not.call(null,inst_26742);
var state_26773__$1 = (function (){var statearr_26778 = state_26773;
(statearr_26778[(9)] = inst_26741__$1);

return statearr_26778;
})();
if(inst_26743){
var statearr_26779_26810 = state_26773__$1;
(statearr_26779_26810[(1)] = (5));

} else {
var statearr_26780_26811 = state_26773__$1;
(statearr_26780_26811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (15))){
var inst_26763 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
var statearr_26781_26812 = state_26773__$1;
(statearr_26781_26812[(2)] = inst_26763);

(statearr_26781_26812[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (13))){
var state_26773__$1 = state_26773;
var statearr_26782_26813 = state_26773__$1;
(statearr_26782_26813[(2)] = null);

(statearr_26782_26813[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (6))){
var inst_26738 = (state_26773[(8)]);
var inst_26759 = (inst_26738 > (0));
var state_26773__$1 = state_26773;
if(cljs.core.truth_(inst_26759)){
var statearr_26783_26814 = state_26773__$1;
(statearr_26783_26814[(1)] = (12));

} else {
var statearr_26784_26815 = state_26773__$1;
(statearr_26784_26815[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (3))){
var inst_26771 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26773__$1,inst_26771);
} else {
if((state_val_26774 === (12))){
var inst_26737 = (state_26773[(7)]);
var inst_26761 = cljs.core.vec.call(null,inst_26737);
var state_26773__$1 = state_26773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26773__$1,(15),out,inst_26761);
} else {
if((state_val_26774 === (2))){
var state_26773__$1 = state_26773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26773__$1,(4),ch);
} else {
if((state_val_26774 === (11))){
var inst_26753 = (state_26773[(2)]);
var inst_26754 = (new Array(n));
var inst_26737 = inst_26754;
var inst_26738 = (0);
var state_26773__$1 = (function (){var statearr_26785 = state_26773;
(statearr_26785[(7)] = inst_26737);

(statearr_26785[(8)] = inst_26738);

(statearr_26785[(10)] = inst_26753);

return statearr_26785;
})();
var statearr_26786_26816 = state_26773__$1;
(statearr_26786_26816[(2)] = null);

(statearr_26786_26816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (9))){
var inst_26737 = (state_26773[(7)]);
var inst_26751 = cljs.core.vec.call(null,inst_26737);
var state_26773__$1 = state_26773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26773__$1,(11),out,inst_26751);
} else {
if((state_val_26774 === (5))){
var inst_26737 = (state_26773[(7)]);
var inst_26738 = (state_26773[(8)]);
var inst_26741 = (state_26773[(9)]);
var inst_26746 = (state_26773[(11)]);
var inst_26745 = (inst_26737[inst_26738] = inst_26741);
var inst_26746__$1 = (inst_26738 + (1));
var inst_26747 = (inst_26746__$1 < n);
var state_26773__$1 = (function (){var statearr_26787 = state_26773;
(statearr_26787[(12)] = inst_26745);

(statearr_26787[(11)] = inst_26746__$1);

return statearr_26787;
})();
if(cljs.core.truth_(inst_26747)){
var statearr_26788_26817 = state_26773__$1;
(statearr_26788_26817[(1)] = (8));

} else {
var statearr_26789_26818 = state_26773__$1;
(statearr_26789_26818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (14))){
var inst_26766 = (state_26773[(2)]);
var inst_26767 = cljs.core.async.close_BANG_.call(null,out);
var state_26773__$1 = (function (){var statearr_26791 = state_26773;
(statearr_26791[(13)] = inst_26766);

return statearr_26791;
})();
var statearr_26792_26819 = state_26773__$1;
(statearr_26792_26819[(2)] = inst_26767);

(statearr_26792_26819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (10))){
var inst_26757 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
var statearr_26793_26820 = state_26773__$1;
(statearr_26793_26820[(2)] = inst_26757);

(statearr_26793_26820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (8))){
var inst_26737 = (state_26773[(7)]);
var inst_26746 = (state_26773[(11)]);
var tmp26790 = inst_26737;
var inst_26737__$1 = tmp26790;
var inst_26738 = inst_26746;
var state_26773__$1 = (function (){var statearr_26794 = state_26773;
(statearr_26794[(7)] = inst_26737__$1);

(statearr_26794[(8)] = inst_26738);

return statearr_26794;
})();
var statearr_26795_26821 = state_26773__$1;
(statearr_26795_26821[(2)] = null);

(statearr_26795_26821[(1)] = (2));


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
});})(c__19673__auto___26807,out))
;
return ((function (switch__19608__auto__,c__19673__auto___26807,out){
return (function() {
var cljs$core$async$state_machine__19609__auto__ = null;
var cljs$core$async$state_machine__19609__auto____0 = (function (){
var statearr_26799 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26799[(0)] = cljs$core$async$state_machine__19609__auto__);

(statearr_26799[(1)] = (1));

return statearr_26799;
});
var cljs$core$async$state_machine__19609__auto____1 = (function (state_26773){
while(true){
var ret_value__19610__auto__ = (function (){try{while(true){
var result__19611__auto__ = switch__19608__auto__.call(null,state_26773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19611__auto__;
}
break;
}
}catch (e26800){if((e26800 instanceof Object)){
var ex__19612__auto__ = e26800;
var statearr_26801_26822 = state_26773;
(statearr_26801_26822[(5)] = ex__19612__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26823 = state_26773;
state_26773 = G__26823;
continue;
} else {
return ret_value__19610__auto__;
}
break;
}
});
cljs$core$async$state_machine__19609__auto__ = function(state_26773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19609__auto____1.call(this,state_26773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19609__auto____0;
cljs$core$async$state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19609__auto____1;
return cljs$core$async$state_machine__19609__auto__;
})()
;})(switch__19608__auto__,c__19673__auto___26807,out))
})();
var state__19675__auto__ = (function (){var statearr_26802 = f__19674__auto__.call(null);
(statearr_26802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19673__auto___26807);

return statearr_26802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19675__auto__);
});})(c__19673__auto___26807,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26824 = [];
var len__17388__auto___26898 = arguments.length;
var i__17389__auto___26899 = (0);
while(true){
if((i__17389__auto___26899 < len__17388__auto___26898)){
args26824.push((arguments[i__17389__auto___26899]));

var G__26900 = (i__17389__auto___26899 + (1));
i__17389__auto___26899 = G__26900;
continue;
} else {
}
break;
}

var G__26826 = args26824.length;
switch (G__26826) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26824.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19673__auto___26902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19673__auto___26902,out){
return (function (){
var f__19674__auto__ = (function (){var switch__19608__auto__ = ((function (c__19673__auto___26902,out){
return (function (state_26868){
var state_val_26869 = (state_26868[(1)]);
if((state_val_26869 === (7))){
var inst_26864 = (state_26868[(2)]);
var state_26868__$1 = state_26868;
var statearr_26870_26903 = state_26868__$1;
(statearr_26870_26903[(2)] = inst_26864);

(statearr_26870_26903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (1))){
var inst_26827 = [];
var inst_26828 = inst_26827;
var inst_26829 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26868__$1 = (function (){var statearr_26871 = state_26868;
(statearr_26871[(7)] = inst_26829);

(statearr_26871[(8)] = inst_26828);

return statearr_26871;
})();
var statearr_26872_26904 = state_26868__$1;
(statearr_26872_26904[(2)] = null);

(statearr_26872_26904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (4))){
var inst_26832 = (state_26868[(9)]);
var inst_26832__$1 = (state_26868[(2)]);
var inst_26833 = (inst_26832__$1 == null);
var inst_26834 = cljs.core.not.call(null,inst_26833);
var state_26868__$1 = (function (){var statearr_26873 = state_26868;
(statearr_26873[(9)] = inst_26832__$1);

return statearr_26873;
})();
if(inst_26834){
var statearr_26874_26905 = state_26868__$1;
(statearr_26874_26905[(1)] = (5));

} else {
var statearr_26875_26906 = state_26868__$1;
(statearr_26875_26906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (15))){
var inst_26858 = (state_26868[(2)]);
var state_26868__$1 = state_26868;
var statearr_26876_26907 = state_26868__$1;
(statearr_26876_26907[(2)] = inst_26858);

(statearr_26876_26907[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (13))){
var state_26868__$1 = state_26868;
var statearr_26877_26908 = state_26868__$1;
(statearr_26877_26908[(2)] = null);

(statearr_26877_26908[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (6))){
var inst_26828 = (state_26868[(8)]);
var inst_26853 = inst_26828.length;
var inst_26854 = (inst_26853 > (0));
var state_26868__$1 = state_26868;
if(cljs.core.truth_(inst_26854)){
var statearr_26878_26909 = state_26868__$1;
(statearr_26878_26909[(1)] = (12));

} else {
var statearr_26879_26910 = state_26868__$1;
(statearr_26879_26910[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (3))){
var inst_26866 = (state_26868[(2)]);
var state_26868__$1 = state_26868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26868__$1,inst_26866);
} else {
if((state_val_26869 === (12))){
var inst_26828 = (state_26868[(8)]);
var inst_26856 = cljs.core.vec.call(null,inst_26828);
var state_26868__$1 = state_26868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26868__$1,(15),out,inst_26856);
} else {
if((state_val_26869 === (2))){
var state_26868__$1 = state_26868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26868__$1,(4),ch);
} else {
if((state_val_26869 === (11))){
var inst_26832 = (state_26868[(9)]);
var inst_26836 = (state_26868[(10)]);
var inst_26846 = (state_26868[(2)]);
var inst_26847 = [];
var inst_26848 = inst_26847.push(inst_26832);
var inst_26828 = inst_26847;
var inst_26829 = inst_26836;
var state_26868__$1 = (function (){var statearr_26880 = state_26868;
(statearr_26880[(7)] = inst_26829);

(statearr_26880[(11)] = inst_26848);

(statearr_26880[(12)] = inst_26846);

(statearr_26880[(8)] = inst_26828);

return statearr_26880;
})();
var statearr_26881_26911 = state_26868__$1;
(statearr_26881_26911[(2)] = null);

(statearr_26881_26911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (9))){
var inst_26828 = (state_26868[(8)]);
var inst_26844 = cljs.core.vec.call(null,inst_26828);
var state_26868__$1 = state_26868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26868__$1,(11),out,inst_26844);
} else {
if((state_val_26869 === (5))){
var inst_26832 = (state_26868[(9)]);
var inst_26829 = (state_26868[(7)]);
var inst_26836 = (state_26868[(10)]);
var inst_26836__$1 = f.call(null,inst_26832);
var inst_26837 = cljs.core._EQ_.call(null,inst_26836__$1,inst_26829);
var inst_26838 = cljs.core.keyword_identical_QMARK_.call(null,inst_26829,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26839 = (inst_26837) || (inst_26838);
var state_26868__$1 = (function (){var statearr_26882 = state_26868;
(statearr_26882[(10)] = inst_26836__$1);

return statearr_26882;
})();
if(cljs.core.truth_(inst_26839)){
var statearr_26883_26912 = state_26868__$1;
(statearr_26883_26912[(1)] = (8));

} else {
var statearr_26884_26913 = state_26868__$1;
(statearr_26884_26913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (14))){
var inst_26861 = (state_26868[(2)]);
var inst_26862 = cljs.core.async.close_BANG_.call(null,out);
var state_26868__$1 = (function (){var statearr_26886 = state_26868;
(statearr_26886[(13)] = inst_26861);

return statearr_26886;
})();
var statearr_26887_26914 = state_26868__$1;
(statearr_26887_26914[(2)] = inst_26862);

(statearr_26887_26914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (10))){
var inst_26851 = (state_26868[(2)]);
var state_26868__$1 = state_26868;
var statearr_26888_26915 = state_26868__$1;
(statearr_26888_26915[(2)] = inst_26851);

(statearr_26888_26915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (8))){
var inst_26832 = (state_26868[(9)]);
var inst_26836 = (state_26868[(10)]);
var inst_26828 = (state_26868[(8)]);
var inst_26841 = inst_26828.push(inst_26832);
var tmp26885 = inst_26828;
var inst_26828__$1 = tmp26885;
var inst_26829 = inst_26836;
var state_26868__$1 = (function (){var statearr_26889 = state_26868;
(statearr_26889[(7)] = inst_26829);

(statearr_26889[(14)] = inst_26841);

(statearr_26889[(8)] = inst_26828__$1);

return statearr_26889;
})();
var statearr_26890_26916 = state_26868__$1;
(statearr_26890_26916[(2)] = null);

(statearr_26890_26916[(1)] = (2));


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
});})(c__19673__auto___26902,out))
;
return ((function (switch__19608__auto__,c__19673__auto___26902,out){
return (function() {
var cljs$core$async$state_machine__19609__auto__ = null;
var cljs$core$async$state_machine__19609__auto____0 = (function (){
var statearr_26894 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26894[(0)] = cljs$core$async$state_machine__19609__auto__);

(statearr_26894[(1)] = (1));

return statearr_26894;
});
var cljs$core$async$state_machine__19609__auto____1 = (function (state_26868){
while(true){
var ret_value__19610__auto__ = (function (){try{while(true){
var result__19611__auto__ = switch__19608__auto__.call(null,state_26868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19611__auto__;
}
break;
}
}catch (e26895){if((e26895 instanceof Object)){
var ex__19612__auto__ = e26895;
var statearr_26896_26917 = state_26868;
(statearr_26896_26917[(5)] = ex__19612__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26918 = state_26868;
state_26868 = G__26918;
continue;
} else {
return ret_value__19610__auto__;
}
break;
}
});
cljs$core$async$state_machine__19609__auto__ = function(state_26868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19609__auto____1.call(this,state_26868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19609__auto____0;
cljs$core$async$state_machine__19609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19609__auto____1;
return cljs$core$async$state_machine__19609__auto__;
})()
;})(switch__19608__auto__,c__19673__auto___26902,out))
})();
var state__19675__auto__ = (function (){var statearr_26897 = f__19674__auto__.call(null);
(statearr_26897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19673__auto___26902);

return statearr_26897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19675__auto__);
});})(c__19673__auto___26902,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1446808986791