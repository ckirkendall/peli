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
if(typeof cljs.core.async.t_cljs$core$async12760 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12760 = (function (fn_handler,f,meta12761){
this.fn_handler = fn_handler;
this.f = f;
this.meta12761 = meta12761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12762,meta12761__$1){
var self__ = this;
var _12762__$1 = this;
return (new cljs.core.async.t_cljs$core$async12760(self__.fn_handler,self__.f,meta12761__$1));
});

cljs.core.async.t_cljs$core$async12760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12762){
var self__ = this;
var _12762__$1 = this;
return self__.meta12761;
});

cljs.core.async.t_cljs$core$async12760.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12760.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12760.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12760.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta12761","meta12761",23227897,null)], null);
});

cljs.core.async.t_cljs$core$async12760.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12760.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12760";

cljs.core.async.t_cljs$core$async12760.cljs$lang$ctorPrWriter = (function (this__4972__auto__,writer__4973__auto__,opt__4974__auto__){
return cljs.core._write.call(null,writer__4973__auto__,"cljs.core.async/t_cljs$core$async12760");
});

cljs.core.async.__GT_t_cljs$core$async12760 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async12760(fn_handler__$1,f__$1,meta12761){
return (new cljs.core.async.t_cljs$core$async12760(fn_handler__$1,f__$1,meta12761));
});

}

return (new cljs.core.async.t_cljs$core$async12760(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args12765 = [];
var len__5432__auto___12768 = arguments.length;
var i__5433__auto___12769 = (0);
while(true){
if((i__5433__auto___12769 < len__5432__auto___12768)){
args12765.push((arguments[i__5433__auto___12769]));

var G__12770 = (i__5433__auto___12769 + (1));
i__5433__auto___12769 = G__12770;
continue;
} else {
}
break;
}

var G__12767 = args12765.length;
switch (G__12767) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12765.length)].join('')));

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
var args12772 = [];
var len__5432__auto___12775 = arguments.length;
var i__5433__auto___12776 = (0);
while(true){
if((i__5433__auto___12776 < len__5432__auto___12775)){
args12772.push((arguments[i__5433__auto___12776]));

var G__12777 = (i__5433__auto___12776 + (1));
i__5433__auto___12776 = G__12777;
continue;
} else {
}
break;
}

var G__12774 = args12772.length;
switch (G__12774) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12772.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_12779 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12779);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12779,ret){
return (function (){
return fn1.call(null,val_12779);
});})(val_12779,ret))
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
var args12780 = [];
var len__5432__auto___12783 = arguments.length;
var i__5433__auto___12784 = (0);
while(true){
if((i__5433__auto___12784 < len__5432__auto___12783)){
args12780.push((arguments[i__5433__auto___12784]));

var G__12785 = (i__5433__auto___12784 + (1));
i__5433__auto___12784 = G__12785;
continue;
} else {
}
break;
}

var G__12782 = args12780.length;
switch (G__12782) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12780.length)].join('')));

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
var n__5277__auto___12787 = n;
var x_12788 = (0);
while(true){
if((x_12788 < n__5277__auto___12787)){
(a[x_12788] = (0));

var G__12789 = (x_12788 + (1));
x_12788 = G__12789;
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

var G__12790 = (i + (1));
i = G__12790;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async12794 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12794 = (function (alt_flag,flag,meta12795){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta12795 = meta12795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12796,meta12795__$1){
var self__ = this;
var _12796__$1 = this;
return (new cljs.core.async.t_cljs$core$async12794(self__.alt_flag,self__.flag,meta12795__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12794.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12796){
var self__ = this;
var _12796__$1 = this;
return self__.meta12795;
});})(flag))
;

cljs.core.async.t_cljs$core$async12794.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12794.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async12794.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12794.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12795","meta12795",-579407725,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12794.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12794";

cljs.core.async.t_cljs$core$async12794.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4972__auto__,writer__4973__auto__,opt__4974__auto__){
return cljs.core._write.call(null,writer__4973__auto__,"cljs.core.async/t_cljs$core$async12794");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async12794 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12794(alt_flag__$1,flag__$1,meta12795){
return (new cljs.core.async.t_cljs$core$async12794(alt_flag__$1,flag__$1,meta12795));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12794(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async12800 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12800 = (function (alt_handler,flag,cb,meta12801){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta12801 = meta12801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12802,meta12801__$1){
var self__ = this;
var _12802__$1 = this;
return (new cljs.core.async.t_cljs$core$async12800(self__.alt_handler,self__.flag,self__.cb,meta12801__$1));
});

cljs.core.async.t_cljs$core$async12800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12802){
var self__ = this;
var _12802__$1 = this;
return self__.meta12801;
});

cljs.core.async.t_cljs$core$async12800.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12800.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async12800.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async12800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12801","meta12801",1283276231,null)], null);
});

cljs.core.async.t_cljs$core$async12800.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12800";

cljs.core.async.t_cljs$core$async12800.cljs$lang$ctorPrWriter = (function (this__4972__auto__,writer__4973__auto__,opt__4974__auto__){
return cljs.core._write.call(null,writer__4973__auto__,"cljs.core.async/t_cljs$core$async12800");
});

cljs.core.async.__GT_t_cljs$core$async12800 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12800(alt_handler__$1,flag__$1,cb__$1,meta12801){
return (new cljs.core.async.t_cljs$core$async12800(alt_handler__$1,flag__$1,cb__$1,meta12801));
});

}

return (new cljs.core.async.t_cljs$core$async12800(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__12803_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12803_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12804_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12804_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4374__auto__ = wport;
if(cljs.core.truth_(or__4374__auto__)){
return or__4374__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12805 = (i + (1));
i = G__12805;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4374__auto__ = ret;
if(cljs.core.truth_(or__4374__auto__)){
return or__4374__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4362__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4362__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4362__auto__;
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
var args__5439__auto__ = [];
var len__5432__auto___12811 = arguments.length;
var i__5433__auto___12812 = (0);
while(true){
if((i__5433__auto___12812 < len__5432__auto___12811)){
args__5439__auto__.push((arguments[i__5433__auto___12812]));

var G__12813 = (i__5433__auto___12812 + (1));
i__5433__auto___12812 = G__12813;
continue;
} else {
}
break;
}

var argseq__5440__auto__ = ((((1) < args__5439__auto__.length))?(new cljs.core.IndexedSeq(args__5439__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5440__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12808){
var map__12809 = p__12808;
var map__12809__$1 = ((((!((map__12809 == null)))?((((map__12809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12809):map__12809);
var opts = map__12809__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12806){
var G__12807 = cljs.core.first.call(null,seq12806);
var seq12806__$1 = cljs.core.next.call(null,seq12806);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12807,seq12806__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args12814 = [];
var len__5432__auto___12864 = arguments.length;
var i__5433__auto___12865 = (0);
while(true){
if((i__5433__auto___12865 < len__5432__auto___12864)){
args12814.push((arguments[i__5433__auto___12865]));

var G__12866 = (i__5433__auto___12865 + (1));
i__5433__auto___12865 = G__12866;
continue;
} else {
}
break;
}

var G__12816 = args12814.length;
switch (G__12816) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12814.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7759__auto___12868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7759__auto___12868){
return (function (){
var f__7760__auto__ = (function (){var switch__7694__auto__ = ((function (c__7759__auto___12868){
return (function (state_12840){
var state_val_12841 = (state_12840[(1)]);
if((state_val_12841 === (7))){
var inst_12836 = (state_12840[(2)]);
var state_12840__$1 = state_12840;
var statearr_12842_12869 = state_12840__$1;
(statearr_12842_12869[(2)] = inst_12836);

(statearr_12842_12869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12841 === (1))){
var state_12840__$1 = state_12840;
var statearr_12843_12870 = state_12840__$1;
(statearr_12843_12870[(2)] = null);

(statearr_12843_12870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12841 === (4))){
var inst_12819 = (state_12840[(7)]);
var inst_12819__$1 = (state_12840[(2)]);
var inst_12820 = (inst_12819__$1 == null);
var state_12840__$1 = (function (){var statearr_12844 = state_12840;
(statearr_12844[(7)] = inst_12819__$1);

return statearr_12844;
})();
if(cljs.core.truth_(inst_12820)){
var statearr_12845_12871 = state_12840__$1;
(statearr_12845_12871[(1)] = (5));

} else {
var statearr_12846_12872 = state_12840__$1;
(statearr_12846_12872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12841 === (13))){
var state_12840__$1 = state_12840;
var statearr_12847_12873 = state_12840__$1;
(statearr_12847_12873[(2)] = null);

(statearr_12847_12873[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12841 === (6))){
var inst_12819 = (state_12840[(7)]);
var state_12840__$1 = state_12840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12840__$1,(11),to,inst_12819);
} else {
if((state_val_12841 === (3))){
var inst_12838 = (state_12840[(2)]);
var state_12840__$1 = state_12840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12840__$1,inst_12838);
} else {
if((state_val_12841 === (12))){
var state_12840__$1 = state_12840;
var statearr_12848_12874 = state_12840__$1;
(statearr_12848_12874[(2)] = null);

(statearr_12848_12874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12841 === (2))){
var state_12840__$1 = state_12840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12840__$1,(4),from);
} else {
if((state_val_12841 === (11))){
var inst_12829 = (state_12840[(2)]);
var state_12840__$1 = state_12840;
if(cljs.core.truth_(inst_12829)){
var statearr_12849_12875 = state_12840__$1;
(statearr_12849_12875[(1)] = (12));

} else {
var statearr_12850_12876 = state_12840__$1;
(statearr_12850_12876[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12841 === (9))){
var state_12840__$1 = state_12840;
var statearr_12851_12877 = state_12840__$1;
(statearr_12851_12877[(2)] = null);

(statearr_12851_12877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12841 === (5))){
var state_12840__$1 = state_12840;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12852_12878 = state_12840__$1;
(statearr_12852_12878[(1)] = (8));

} else {
var statearr_12853_12879 = state_12840__$1;
(statearr_12853_12879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12841 === (14))){
var inst_12834 = (state_12840[(2)]);
var state_12840__$1 = state_12840;
var statearr_12854_12880 = state_12840__$1;
(statearr_12854_12880[(2)] = inst_12834);

(statearr_12854_12880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12841 === (10))){
var inst_12826 = (state_12840[(2)]);
var state_12840__$1 = state_12840;
var statearr_12855_12881 = state_12840__$1;
(statearr_12855_12881[(2)] = inst_12826);

(statearr_12855_12881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12841 === (8))){
var inst_12823 = cljs.core.async.close_BANG_.call(null,to);
var state_12840__$1 = state_12840;
var statearr_12856_12882 = state_12840__$1;
(statearr_12856_12882[(2)] = inst_12823);

(statearr_12856_12882[(1)] = (10));


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
});})(c__7759__auto___12868))
;
return ((function (switch__7694__auto__,c__7759__auto___12868){
return (function() {
var cljs$core$async$state_machine__7695__auto__ = null;
var cljs$core$async$state_machine__7695__auto____0 = (function (){
var statearr_12860 = [null,null,null,null,null,null,null,null];
(statearr_12860[(0)] = cljs$core$async$state_machine__7695__auto__);

(statearr_12860[(1)] = (1));

return statearr_12860;
});
var cljs$core$async$state_machine__7695__auto____1 = (function (state_12840){
while(true){
var ret_value__7696__auto__ = (function (){try{while(true){
var result__7697__auto__ = switch__7694__auto__.call(null,state_12840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7697__auto__;
}
break;
}
}catch (e12861){if((e12861 instanceof Object)){
var ex__7698__auto__ = e12861;
var statearr_12862_12883 = state_12840;
(statearr_12862_12883[(5)] = ex__7698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12884 = state_12840;
state_12840 = G__12884;
continue;
} else {
return ret_value__7696__auto__;
}
break;
}
});
cljs$core$async$state_machine__7695__auto__ = function(state_12840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7695__auto____1.call(this,state_12840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7695__auto____0;
cljs$core$async$state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7695__auto____1;
return cljs$core$async$state_machine__7695__auto__;
})()
;})(switch__7694__auto__,c__7759__auto___12868))
})();
var state__7761__auto__ = (function (){var statearr_12863 = f__7760__auto__.call(null);
(statearr_12863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7759__auto___12868);

return statearr_12863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7761__auto__);
});})(c__7759__auto___12868))
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
return (function (p__13068){
var vec__13069 = p__13068;
var v = cljs.core.nth.call(null,vec__13069,(0),null);
var p = cljs.core.nth.call(null,vec__13069,(1),null);
var job = vec__13069;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7759__auto___13251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7759__auto___13251,res,vec__13069,v,p,job,jobs,results){
return (function (){
var f__7760__auto__ = (function (){var switch__7694__auto__ = ((function (c__7759__auto___13251,res,vec__13069,v,p,job,jobs,results){
return (function (state_13074){
var state_val_13075 = (state_13074[(1)]);
if((state_val_13075 === (1))){
var state_13074__$1 = state_13074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13074__$1,(2),res,v);
} else {
if((state_val_13075 === (2))){
var inst_13071 = (state_13074[(2)]);
var inst_13072 = cljs.core.async.close_BANG_.call(null,res);
var state_13074__$1 = (function (){var statearr_13076 = state_13074;
(statearr_13076[(7)] = inst_13071);

return statearr_13076;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13074__$1,inst_13072);
} else {
return null;
}
}
});})(c__7759__auto___13251,res,vec__13069,v,p,job,jobs,results))
;
return ((function (switch__7694__auto__,c__7759__auto___13251,res,vec__13069,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____0 = (function (){
var statearr_13080 = [null,null,null,null,null,null,null,null];
(statearr_13080[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__);

(statearr_13080[(1)] = (1));

return statearr_13080;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____1 = (function (state_13074){
while(true){
var ret_value__7696__auto__ = (function (){try{while(true){
var result__7697__auto__ = switch__7694__auto__.call(null,state_13074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7697__auto__;
}
break;
}
}catch (e13081){if((e13081 instanceof Object)){
var ex__7698__auto__ = e13081;
var statearr_13082_13252 = state_13074;
(statearr_13082_13252[(5)] = ex__7698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13253 = state_13074;
state_13074 = G__13253;
continue;
} else {
return ret_value__7696__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__ = function(state_13074){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____1.call(this,state_13074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__;
})()
;})(switch__7694__auto__,c__7759__auto___13251,res,vec__13069,v,p,job,jobs,results))
})();
var state__7761__auto__ = (function (){var statearr_13083 = f__7760__auto__.call(null);
(statearr_13083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7759__auto___13251);

return statearr_13083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7761__auto__);
});})(c__7759__auto___13251,res,vec__13069,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13084){
var vec__13085 = p__13084;
var v = cljs.core.nth.call(null,vec__13085,(0),null);
var p = cljs.core.nth.call(null,vec__13085,(1),null);
var job = vec__13085;
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
var n__5277__auto___13254 = n;
var __13255 = (0);
while(true){
if((__13255 < n__5277__auto___13254)){
var G__13086_13256 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13086_13256) {
case "compute":
var c__7759__auto___13258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13255,c__7759__auto___13258,G__13086_13256,n__5277__auto___13254,jobs,results,process,async){
return (function (){
var f__7760__auto__ = (function (){var switch__7694__auto__ = ((function (__13255,c__7759__auto___13258,G__13086_13256,n__5277__auto___13254,jobs,results,process,async){
return (function (state_13099){
var state_val_13100 = (state_13099[(1)]);
if((state_val_13100 === (1))){
var state_13099__$1 = state_13099;
var statearr_13101_13259 = state_13099__$1;
(statearr_13101_13259[(2)] = null);

(statearr_13101_13259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (2))){
var state_13099__$1 = state_13099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13099__$1,(4),jobs);
} else {
if((state_val_13100 === (3))){
var inst_13097 = (state_13099[(2)]);
var state_13099__$1 = state_13099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13099__$1,inst_13097);
} else {
if((state_val_13100 === (4))){
var inst_13089 = (state_13099[(2)]);
var inst_13090 = process.call(null,inst_13089);
var state_13099__$1 = state_13099;
if(cljs.core.truth_(inst_13090)){
var statearr_13102_13260 = state_13099__$1;
(statearr_13102_13260[(1)] = (5));

} else {
var statearr_13103_13261 = state_13099__$1;
(statearr_13103_13261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (5))){
var state_13099__$1 = state_13099;
var statearr_13104_13262 = state_13099__$1;
(statearr_13104_13262[(2)] = null);

(statearr_13104_13262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (6))){
var state_13099__$1 = state_13099;
var statearr_13105_13263 = state_13099__$1;
(statearr_13105_13263[(2)] = null);

(statearr_13105_13263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (7))){
var inst_13095 = (state_13099[(2)]);
var state_13099__$1 = state_13099;
var statearr_13106_13264 = state_13099__$1;
(statearr_13106_13264[(2)] = inst_13095);

(statearr_13106_13264[(1)] = (3));


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
});})(__13255,c__7759__auto___13258,G__13086_13256,n__5277__auto___13254,jobs,results,process,async))
;
return ((function (__13255,switch__7694__auto__,c__7759__auto___13258,G__13086_13256,n__5277__auto___13254,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____0 = (function (){
var statearr_13110 = [null,null,null,null,null,null,null];
(statearr_13110[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__);

(statearr_13110[(1)] = (1));

return statearr_13110;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____1 = (function (state_13099){
while(true){
var ret_value__7696__auto__ = (function (){try{while(true){
var result__7697__auto__ = switch__7694__auto__.call(null,state_13099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7697__auto__;
}
break;
}
}catch (e13111){if((e13111 instanceof Object)){
var ex__7698__auto__ = e13111;
var statearr_13112_13265 = state_13099;
(statearr_13112_13265[(5)] = ex__7698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13266 = state_13099;
state_13099 = G__13266;
continue;
} else {
return ret_value__7696__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__ = function(state_13099){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____1.call(this,state_13099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__;
})()
;})(__13255,switch__7694__auto__,c__7759__auto___13258,G__13086_13256,n__5277__auto___13254,jobs,results,process,async))
})();
var state__7761__auto__ = (function (){var statearr_13113 = f__7760__auto__.call(null);
(statearr_13113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7759__auto___13258);

return statearr_13113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7761__auto__);
});})(__13255,c__7759__auto___13258,G__13086_13256,n__5277__auto___13254,jobs,results,process,async))
);


break;
case "async":
var c__7759__auto___13267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13255,c__7759__auto___13267,G__13086_13256,n__5277__auto___13254,jobs,results,process,async){
return (function (){
var f__7760__auto__ = (function (){var switch__7694__auto__ = ((function (__13255,c__7759__auto___13267,G__13086_13256,n__5277__auto___13254,jobs,results,process,async){
return (function (state_13126){
var state_val_13127 = (state_13126[(1)]);
if((state_val_13127 === (1))){
var state_13126__$1 = state_13126;
var statearr_13128_13268 = state_13126__$1;
(statearr_13128_13268[(2)] = null);

(statearr_13128_13268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13127 === (2))){
var state_13126__$1 = state_13126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13126__$1,(4),jobs);
} else {
if((state_val_13127 === (3))){
var inst_13124 = (state_13126[(2)]);
var state_13126__$1 = state_13126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13126__$1,inst_13124);
} else {
if((state_val_13127 === (4))){
var inst_13116 = (state_13126[(2)]);
var inst_13117 = async.call(null,inst_13116);
var state_13126__$1 = state_13126;
if(cljs.core.truth_(inst_13117)){
var statearr_13129_13269 = state_13126__$1;
(statearr_13129_13269[(1)] = (5));

} else {
var statearr_13130_13270 = state_13126__$1;
(statearr_13130_13270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13127 === (5))){
var state_13126__$1 = state_13126;
var statearr_13131_13271 = state_13126__$1;
(statearr_13131_13271[(2)] = null);

(statearr_13131_13271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13127 === (6))){
var state_13126__$1 = state_13126;
var statearr_13132_13272 = state_13126__$1;
(statearr_13132_13272[(2)] = null);

(statearr_13132_13272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13127 === (7))){
var inst_13122 = (state_13126[(2)]);
var state_13126__$1 = state_13126;
var statearr_13133_13273 = state_13126__$1;
(statearr_13133_13273[(2)] = inst_13122);

(statearr_13133_13273[(1)] = (3));


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
});})(__13255,c__7759__auto___13267,G__13086_13256,n__5277__auto___13254,jobs,results,process,async))
;
return ((function (__13255,switch__7694__auto__,c__7759__auto___13267,G__13086_13256,n__5277__auto___13254,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____0 = (function (){
var statearr_13137 = [null,null,null,null,null,null,null];
(statearr_13137[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__);

(statearr_13137[(1)] = (1));

return statearr_13137;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____1 = (function (state_13126){
while(true){
var ret_value__7696__auto__ = (function (){try{while(true){
var result__7697__auto__ = switch__7694__auto__.call(null,state_13126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7697__auto__;
}
break;
}
}catch (e13138){if((e13138 instanceof Object)){
var ex__7698__auto__ = e13138;
var statearr_13139_13274 = state_13126;
(statearr_13139_13274[(5)] = ex__7698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13275 = state_13126;
state_13126 = G__13275;
continue;
} else {
return ret_value__7696__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__ = function(state_13126){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____1.call(this,state_13126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__;
})()
;})(__13255,switch__7694__auto__,c__7759__auto___13267,G__13086_13256,n__5277__auto___13254,jobs,results,process,async))
})();
var state__7761__auto__ = (function (){var statearr_13140 = f__7760__auto__.call(null);
(statearr_13140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7759__auto___13267);

return statearr_13140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7761__auto__);
});})(__13255,c__7759__auto___13267,G__13086_13256,n__5277__auto___13254,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13276 = (__13255 + (1));
__13255 = G__13276;
continue;
} else {
}
break;
}

var c__7759__auto___13277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7759__auto___13277,jobs,results,process,async){
return (function (){
var f__7760__auto__ = (function (){var switch__7694__auto__ = ((function (c__7759__auto___13277,jobs,results,process,async){
return (function (state_13162){
var state_val_13163 = (state_13162[(1)]);
if((state_val_13163 === (1))){
var state_13162__$1 = state_13162;
var statearr_13164_13278 = state_13162__$1;
(statearr_13164_13278[(2)] = null);

(statearr_13164_13278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13163 === (2))){
var state_13162__$1 = state_13162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13162__$1,(4),from);
} else {
if((state_val_13163 === (3))){
var inst_13160 = (state_13162[(2)]);
var state_13162__$1 = state_13162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13162__$1,inst_13160);
} else {
if((state_val_13163 === (4))){
var inst_13143 = (state_13162[(7)]);
var inst_13143__$1 = (state_13162[(2)]);
var inst_13144 = (inst_13143__$1 == null);
var state_13162__$1 = (function (){var statearr_13165 = state_13162;
(statearr_13165[(7)] = inst_13143__$1);

return statearr_13165;
})();
if(cljs.core.truth_(inst_13144)){
var statearr_13166_13279 = state_13162__$1;
(statearr_13166_13279[(1)] = (5));

} else {
var statearr_13167_13280 = state_13162__$1;
(statearr_13167_13280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13163 === (5))){
var inst_13146 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13162__$1 = state_13162;
var statearr_13168_13281 = state_13162__$1;
(statearr_13168_13281[(2)] = inst_13146);

(statearr_13168_13281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13163 === (6))){
var inst_13148 = (state_13162[(8)]);
var inst_13143 = (state_13162[(7)]);
var inst_13148__$1 = cljs.core.async.chan.call(null,(1));
var inst_13149 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13150 = [inst_13143,inst_13148__$1];
var inst_13151 = (new cljs.core.PersistentVector(null,2,(5),inst_13149,inst_13150,null));
var state_13162__$1 = (function (){var statearr_13169 = state_13162;
(statearr_13169[(8)] = inst_13148__$1);

return statearr_13169;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13162__$1,(8),jobs,inst_13151);
} else {
if((state_val_13163 === (7))){
var inst_13158 = (state_13162[(2)]);
var state_13162__$1 = state_13162;
var statearr_13170_13282 = state_13162__$1;
(statearr_13170_13282[(2)] = inst_13158);

(statearr_13170_13282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13163 === (8))){
var inst_13148 = (state_13162[(8)]);
var inst_13153 = (state_13162[(2)]);
var state_13162__$1 = (function (){var statearr_13171 = state_13162;
(statearr_13171[(9)] = inst_13153);

return statearr_13171;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13162__$1,(9),results,inst_13148);
} else {
if((state_val_13163 === (9))){
var inst_13155 = (state_13162[(2)]);
var state_13162__$1 = (function (){var statearr_13172 = state_13162;
(statearr_13172[(10)] = inst_13155);

return statearr_13172;
})();
var statearr_13173_13283 = state_13162__$1;
(statearr_13173_13283[(2)] = null);

(statearr_13173_13283[(1)] = (2));


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
});})(c__7759__auto___13277,jobs,results,process,async))
;
return ((function (switch__7694__auto__,c__7759__auto___13277,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____0 = (function (){
var statearr_13177 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13177[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__);

(statearr_13177[(1)] = (1));

return statearr_13177;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____1 = (function (state_13162){
while(true){
var ret_value__7696__auto__ = (function (){try{while(true){
var result__7697__auto__ = switch__7694__auto__.call(null,state_13162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7697__auto__;
}
break;
}
}catch (e13178){if((e13178 instanceof Object)){
var ex__7698__auto__ = e13178;
var statearr_13179_13284 = state_13162;
(statearr_13179_13284[(5)] = ex__7698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13285 = state_13162;
state_13162 = G__13285;
continue;
} else {
return ret_value__7696__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__ = function(state_13162){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____1.call(this,state_13162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__;
})()
;})(switch__7694__auto__,c__7759__auto___13277,jobs,results,process,async))
})();
var state__7761__auto__ = (function (){var statearr_13180 = f__7760__auto__.call(null);
(statearr_13180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7759__auto___13277);

return statearr_13180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7761__auto__);
});})(c__7759__auto___13277,jobs,results,process,async))
);


var c__7759__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7759__auto__,jobs,results,process,async){
return (function (){
var f__7760__auto__ = (function (){var switch__7694__auto__ = ((function (c__7759__auto__,jobs,results,process,async){
return (function (state_13218){
var state_val_13219 = (state_13218[(1)]);
if((state_val_13219 === (7))){
var inst_13214 = (state_13218[(2)]);
var state_13218__$1 = state_13218;
var statearr_13220_13286 = state_13218__$1;
(statearr_13220_13286[(2)] = inst_13214);

(statearr_13220_13286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13219 === (20))){
var state_13218__$1 = state_13218;
var statearr_13221_13287 = state_13218__$1;
(statearr_13221_13287[(2)] = null);

(statearr_13221_13287[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13219 === (1))){
var state_13218__$1 = state_13218;
var statearr_13222_13288 = state_13218__$1;
(statearr_13222_13288[(2)] = null);

(statearr_13222_13288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13219 === (4))){
var inst_13183 = (state_13218[(7)]);
var inst_13183__$1 = (state_13218[(2)]);
var inst_13184 = (inst_13183__$1 == null);
var state_13218__$1 = (function (){var statearr_13223 = state_13218;
(statearr_13223[(7)] = inst_13183__$1);

return statearr_13223;
})();
if(cljs.core.truth_(inst_13184)){
var statearr_13224_13289 = state_13218__$1;
(statearr_13224_13289[(1)] = (5));

} else {
var statearr_13225_13290 = state_13218__$1;
(statearr_13225_13290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13219 === (15))){
var inst_13196 = (state_13218[(8)]);
var state_13218__$1 = state_13218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13218__$1,(18),to,inst_13196);
} else {
if((state_val_13219 === (21))){
var inst_13209 = (state_13218[(2)]);
var state_13218__$1 = state_13218;
var statearr_13226_13291 = state_13218__$1;
(statearr_13226_13291[(2)] = inst_13209);

(statearr_13226_13291[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13219 === (13))){
var inst_13211 = (state_13218[(2)]);
var state_13218__$1 = (function (){var statearr_13227 = state_13218;
(statearr_13227[(9)] = inst_13211);

return statearr_13227;
})();
var statearr_13228_13292 = state_13218__$1;
(statearr_13228_13292[(2)] = null);

(statearr_13228_13292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13219 === (6))){
var inst_13183 = (state_13218[(7)]);
var state_13218__$1 = state_13218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13218__$1,(11),inst_13183);
} else {
if((state_val_13219 === (17))){
var inst_13204 = (state_13218[(2)]);
var state_13218__$1 = state_13218;
if(cljs.core.truth_(inst_13204)){
var statearr_13229_13293 = state_13218__$1;
(statearr_13229_13293[(1)] = (19));

} else {
var statearr_13230_13294 = state_13218__$1;
(statearr_13230_13294[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13219 === (3))){
var inst_13216 = (state_13218[(2)]);
var state_13218__$1 = state_13218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13218__$1,inst_13216);
} else {
if((state_val_13219 === (12))){
var inst_13193 = (state_13218[(10)]);
var state_13218__$1 = state_13218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13218__$1,(14),inst_13193);
} else {
if((state_val_13219 === (2))){
var state_13218__$1 = state_13218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13218__$1,(4),results);
} else {
if((state_val_13219 === (19))){
var state_13218__$1 = state_13218;
var statearr_13231_13295 = state_13218__$1;
(statearr_13231_13295[(2)] = null);

(statearr_13231_13295[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13219 === (11))){
var inst_13193 = (state_13218[(2)]);
var state_13218__$1 = (function (){var statearr_13232 = state_13218;
(statearr_13232[(10)] = inst_13193);

return statearr_13232;
})();
var statearr_13233_13296 = state_13218__$1;
(statearr_13233_13296[(2)] = null);

(statearr_13233_13296[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13219 === (9))){
var state_13218__$1 = state_13218;
var statearr_13234_13297 = state_13218__$1;
(statearr_13234_13297[(2)] = null);

(statearr_13234_13297[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13219 === (5))){
var state_13218__$1 = state_13218;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13235_13298 = state_13218__$1;
(statearr_13235_13298[(1)] = (8));

} else {
var statearr_13236_13299 = state_13218__$1;
(statearr_13236_13299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13219 === (14))){
var inst_13196 = (state_13218[(8)]);
var inst_13198 = (state_13218[(11)]);
var inst_13196__$1 = (state_13218[(2)]);
var inst_13197 = (inst_13196__$1 == null);
var inst_13198__$1 = cljs.core.not.call(null,inst_13197);
var state_13218__$1 = (function (){var statearr_13237 = state_13218;
(statearr_13237[(8)] = inst_13196__$1);

(statearr_13237[(11)] = inst_13198__$1);

return statearr_13237;
})();
if(inst_13198__$1){
var statearr_13238_13300 = state_13218__$1;
(statearr_13238_13300[(1)] = (15));

} else {
var statearr_13239_13301 = state_13218__$1;
(statearr_13239_13301[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13219 === (16))){
var inst_13198 = (state_13218[(11)]);
var state_13218__$1 = state_13218;
var statearr_13240_13302 = state_13218__$1;
(statearr_13240_13302[(2)] = inst_13198);

(statearr_13240_13302[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13219 === (10))){
var inst_13190 = (state_13218[(2)]);
var state_13218__$1 = state_13218;
var statearr_13241_13303 = state_13218__$1;
(statearr_13241_13303[(2)] = inst_13190);

(statearr_13241_13303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13219 === (18))){
var inst_13201 = (state_13218[(2)]);
var state_13218__$1 = state_13218;
var statearr_13242_13304 = state_13218__$1;
(statearr_13242_13304[(2)] = inst_13201);

(statearr_13242_13304[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13219 === (8))){
var inst_13187 = cljs.core.async.close_BANG_.call(null,to);
var state_13218__$1 = state_13218;
var statearr_13243_13305 = state_13218__$1;
(statearr_13243_13305[(2)] = inst_13187);

(statearr_13243_13305[(1)] = (10));


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
});})(c__7759__auto__,jobs,results,process,async))
;
return ((function (switch__7694__auto__,c__7759__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____0 = (function (){
var statearr_13247 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13247[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__);

(statearr_13247[(1)] = (1));

return statearr_13247;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____1 = (function (state_13218){
while(true){
var ret_value__7696__auto__ = (function (){try{while(true){
var result__7697__auto__ = switch__7694__auto__.call(null,state_13218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7697__auto__;
}
break;
}
}catch (e13248){if((e13248 instanceof Object)){
var ex__7698__auto__ = e13248;
var statearr_13249_13306 = state_13218;
(statearr_13249_13306[(5)] = ex__7698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13307 = state_13218;
state_13218 = G__13307;
continue;
} else {
return ret_value__7696__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__ = function(state_13218){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____1.call(this,state_13218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7695__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7695__auto__;
})()
;})(switch__7694__auto__,c__7759__auto__,jobs,results,process,async))
})();
var state__7761__auto__ = (function (){var statearr_13250 = f__7760__auto__.call(null);
(statearr_13250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7759__auto__);

return statearr_13250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7761__auto__);
});})(c__7759__auto__,jobs,results,process,async))
);

return c__7759__auto__;
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
var args13308 = [];
var len__5432__auto___13311 = arguments.length;
var i__5433__auto___13312 = (0);
while(true){
if((i__5433__auto___13312 < len__5432__auto___13311)){
args13308.push((arguments[i__5433__auto___13312]));

var G__13313 = (i__5433__auto___13312 + (1));
i__5433__auto___13312 = G__13313;
continue;
} else {
}
break;
}

var G__13310 = args13308.length;
switch (G__13310) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13308.length)].join('')));

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
var args13315 = [];
var len__5432__auto___13318 = arguments.length;
var i__5433__auto___13319 = (0);
while(true){
if((i__5433__auto___13319 < len__5432__auto___13318)){
args13315.push((arguments[i__5433__auto___13319]));

var G__13320 = (i__5433__auto___13319 + (1));
i__5433__auto___13319 = G__13320;
continue;
} else {
}
break;
}

var G__13317 = args13315.length;
switch (G__13317) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13315.length)].join('')));

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
var args13322 = [];
var len__5432__auto___13375 = arguments.length;
var i__5433__auto___13376 = (0);
while(true){
if((i__5433__auto___13376 < len__5432__auto___13375)){
args13322.push((arguments[i__5433__auto___13376]));

var G__13377 = (i__5433__auto___13376 + (1));
i__5433__auto___13376 = G__13377;
continue;
} else {
}
break;
}

var G__13324 = args13322.length;
switch (G__13324) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13322.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7759__auto___13379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7759__auto___13379,tc,fc){
return (function (){
var f__7760__auto__ = (function (){var switch__7694__auto__ = ((function (c__7759__auto___13379,tc,fc){
return (function (state_13350){
var state_val_13351 = (state_13350[(1)]);
if((state_val_13351 === (7))){
var inst_13346 = (state_13350[(2)]);
var state_13350__$1 = state_13350;
var statearr_13352_13380 = state_13350__$1;
(statearr_13352_13380[(2)] = inst_13346);

(statearr_13352_13380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13351 === (1))){
var state_13350__$1 = state_13350;
var statearr_13353_13381 = state_13350__$1;
(statearr_13353_13381[(2)] = null);

(statearr_13353_13381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13351 === (4))){
var inst_13327 = (state_13350[(7)]);
var inst_13327__$1 = (state_13350[(2)]);
var inst_13328 = (inst_13327__$1 == null);
var state_13350__$1 = (function (){var statearr_13354 = state_13350;
(statearr_13354[(7)] = inst_13327__$1);

return statearr_13354;
})();
if(cljs.core.truth_(inst_13328)){
var statearr_13355_13382 = state_13350__$1;
(statearr_13355_13382[(1)] = (5));

} else {
var statearr_13356_13383 = state_13350__$1;
(statearr_13356_13383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13351 === (13))){
var state_13350__$1 = state_13350;
var statearr_13357_13384 = state_13350__$1;
(statearr_13357_13384[(2)] = null);

(statearr_13357_13384[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13351 === (6))){
var inst_13327 = (state_13350[(7)]);
var inst_13333 = p.call(null,inst_13327);
var state_13350__$1 = state_13350;
if(cljs.core.truth_(inst_13333)){
var statearr_13358_13385 = state_13350__$1;
(statearr_13358_13385[(1)] = (9));

} else {
var statearr_13359_13386 = state_13350__$1;
(statearr_13359_13386[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13351 === (3))){
var inst_13348 = (state_13350[(2)]);
var state_13350__$1 = state_13350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13350__$1,inst_13348);
} else {
if((state_val_13351 === (12))){
var state_13350__$1 = state_13350;
var statearr_13360_13387 = state_13350__$1;
(statearr_13360_13387[(2)] = null);

(statearr_13360_13387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13351 === (2))){
var state_13350__$1 = state_13350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13350__$1,(4),ch);
} else {
if((state_val_13351 === (11))){
var inst_13327 = (state_13350[(7)]);
var inst_13337 = (state_13350[(2)]);
var state_13350__$1 = state_13350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13350__$1,(8),inst_13337,inst_13327);
} else {
if((state_val_13351 === (9))){
var state_13350__$1 = state_13350;
var statearr_13361_13388 = state_13350__$1;
(statearr_13361_13388[(2)] = tc);

(statearr_13361_13388[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13351 === (5))){
var inst_13330 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13331 = cljs.core.async.close_BANG_.call(null,fc);
var state_13350__$1 = (function (){var statearr_13362 = state_13350;
(statearr_13362[(8)] = inst_13330);

return statearr_13362;
})();
var statearr_13363_13389 = state_13350__$1;
(statearr_13363_13389[(2)] = inst_13331);

(statearr_13363_13389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13351 === (14))){
var inst_13344 = (state_13350[(2)]);
var state_13350__$1 = state_13350;
var statearr_13364_13390 = state_13350__$1;
(statearr_13364_13390[(2)] = inst_13344);

(statearr_13364_13390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13351 === (10))){
var state_13350__$1 = state_13350;
var statearr_13365_13391 = state_13350__$1;
(statearr_13365_13391[(2)] = fc);

(statearr_13365_13391[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13351 === (8))){
var inst_13339 = (state_13350[(2)]);
var state_13350__$1 = state_13350;
if(cljs.core.truth_(inst_13339)){
var statearr_13366_13392 = state_13350__$1;
(statearr_13366_13392[(1)] = (12));

} else {
var statearr_13367_13393 = state_13350__$1;
(statearr_13367_13393[(1)] = (13));

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
});})(c__7759__auto___13379,tc,fc))
;
return ((function (switch__7694__auto__,c__7759__auto___13379,tc,fc){
return (function() {
var cljs$core$async$state_machine__7695__auto__ = null;
var cljs$core$async$state_machine__7695__auto____0 = (function (){
var statearr_13371 = [null,null,null,null,null,null,null,null,null];
(statearr_13371[(0)] = cljs$core$async$state_machine__7695__auto__);

(statearr_13371[(1)] = (1));

return statearr_13371;
});
var cljs$core$async$state_machine__7695__auto____1 = (function (state_13350){
while(true){
var ret_value__7696__auto__ = (function (){try{while(true){
var result__7697__auto__ = switch__7694__auto__.call(null,state_13350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7697__auto__;
}
break;
}
}catch (e13372){if((e13372 instanceof Object)){
var ex__7698__auto__ = e13372;
var statearr_13373_13394 = state_13350;
(statearr_13373_13394[(5)] = ex__7698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13395 = state_13350;
state_13350 = G__13395;
continue;
} else {
return ret_value__7696__auto__;
}
break;
}
});
cljs$core$async$state_machine__7695__auto__ = function(state_13350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7695__auto____1.call(this,state_13350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7695__auto____0;
cljs$core$async$state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7695__auto____1;
return cljs$core$async$state_machine__7695__auto__;
})()
;})(switch__7694__auto__,c__7759__auto___13379,tc,fc))
})();
var state__7761__auto__ = (function (){var statearr_13374 = f__7760__auto__.call(null);
(statearr_13374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7759__auto___13379);

return statearr_13374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7761__auto__);
});})(c__7759__auto___13379,tc,fc))
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
var c__7759__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7759__auto__){
return (function (){
var f__7760__auto__ = (function (){var switch__7694__auto__ = ((function (c__7759__auto__){
return (function (state_13442){
var state_val_13443 = (state_13442[(1)]);
if((state_val_13443 === (1))){
var inst_13428 = init;
var state_13442__$1 = (function (){var statearr_13444 = state_13442;
(statearr_13444[(7)] = inst_13428);

return statearr_13444;
})();
var statearr_13445_13460 = state_13442__$1;
(statearr_13445_13460[(2)] = null);

(statearr_13445_13460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13443 === (2))){
var state_13442__$1 = state_13442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13442__$1,(4),ch);
} else {
if((state_val_13443 === (3))){
var inst_13440 = (state_13442[(2)]);
var state_13442__$1 = state_13442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13442__$1,inst_13440);
} else {
if((state_val_13443 === (4))){
var inst_13431 = (state_13442[(8)]);
var inst_13431__$1 = (state_13442[(2)]);
var inst_13432 = (inst_13431__$1 == null);
var state_13442__$1 = (function (){var statearr_13446 = state_13442;
(statearr_13446[(8)] = inst_13431__$1);

return statearr_13446;
})();
if(cljs.core.truth_(inst_13432)){
var statearr_13447_13461 = state_13442__$1;
(statearr_13447_13461[(1)] = (5));

} else {
var statearr_13448_13462 = state_13442__$1;
(statearr_13448_13462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13443 === (5))){
var inst_13428 = (state_13442[(7)]);
var state_13442__$1 = state_13442;
var statearr_13449_13463 = state_13442__$1;
(statearr_13449_13463[(2)] = inst_13428);

(statearr_13449_13463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13443 === (6))){
var inst_13428 = (state_13442[(7)]);
var inst_13431 = (state_13442[(8)]);
var inst_13435 = f.call(null,inst_13428,inst_13431);
var inst_13428__$1 = inst_13435;
var state_13442__$1 = (function (){var statearr_13450 = state_13442;
(statearr_13450[(7)] = inst_13428__$1);

return statearr_13450;
})();
var statearr_13451_13464 = state_13442__$1;
(statearr_13451_13464[(2)] = null);

(statearr_13451_13464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13443 === (7))){
var inst_13438 = (state_13442[(2)]);
var state_13442__$1 = state_13442;
var statearr_13452_13465 = state_13442__$1;
(statearr_13452_13465[(2)] = inst_13438);

(statearr_13452_13465[(1)] = (3));


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
});})(c__7759__auto__))
;
return ((function (switch__7694__auto__,c__7759__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7695__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7695__auto____0 = (function (){
var statearr_13456 = [null,null,null,null,null,null,null,null,null];
(statearr_13456[(0)] = cljs$core$async$reduce_$_state_machine__7695__auto__);

(statearr_13456[(1)] = (1));

return statearr_13456;
});
var cljs$core$async$reduce_$_state_machine__7695__auto____1 = (function (state_13442){
while(true){
var ret_value__7696__auto__ = (function (){try{while(true){
var result__7697__auto__ = switch__7694__auto__.call(null,state_13442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7697__auto__;
}
break;
}
}catch (e13457){if((e13457 instanceof Object)){
var ex__7698__auto__ = e13457;
var statearr_13458_13466 = state_13442;
(statearr_13458_13466[(5)] = ex__7698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13467 = state_13442;
state_13442 = G__13467;
continue;
} else {
return ret_value__7696__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7695__auto__ = function(state_13442){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7695__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7695__auto____1.call(this,state_13442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7695__auto____0;
cljs$core$async$reduce_$_state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7695__auto____1;
return cljs$core$async$reduce_$_state_machine__7695__auto__;
})()
;})(switch__7694__auto__,c__7759__auto__))
})();
var state__7761__auto__ = (function (){var statearr_13459 = f__7760__auto__.call(null);
(statearr_13459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7759__auto__);

return statearr_13459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7761__auto__);
});})(c__7759__auto__))
);

return c__7759__auto__;
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
var args13468 = [];
var len__5432__auto___13520 = arguments.length;
var i__5433__auto___13521 = (0);
while(true){
if((i__5433__auto___13521 < len__5432__auto___13520)){
args13468.push((arguments[i__5433__auto___13521]));

var G__13522 = (i__5433__auto___13521 + (1));
i__5433__auto___13521 = G__13522;
continue;
} else {
}
break;
}

var G__13470 = args13468.length;
switch (G__13470) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13468.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7759__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7759__auto__){
return (function (){
var f__7760__auto__ = (function (){var switch__7694__auto__ = ((function (c__7759__auto__){
return (function (state_13495){
var state_val_13496 = (state_13495[(1)]);
if((state_val_13496 === (7))){
var inst_13477 = (state_13495[(2)]);
var state_13495__$1 = state_13495;
var statearr_13497_13524 = state_13495__$1;
(statearr_13497_13524[(2)] = inst_13477);

(statearr_13497_13524[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13496 === (1))){
var inst_13471 = cljs.core.seq.call(null,coll);
var inst_13472 = inst_13471;
var state_13495__$1 = (function (){var statearr_13498 = state_13495;
(statearr_13498[(7)] = inst_13472);

return statearr_13498;
})();
var statearr_13499_13525 = state_13495__$1;
(statearr_13499_13525[(2)] = null);

(statearr_13499_13525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13496 === (4))){
var inst_13472 = (state_13495[(7)]);
var inst_13475 = cljs.core.first.call(null,inst_13472);
var state_13495__$1 = state_13495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13495__$1,(7),ch,inst_13475);
} else {
if((state_val_13496 === (13))){
var inst_13489 = (state_13495[(2)]);
var state_13495__$1 = state_13495;
var statearr_13500_13526 = state_13495__$1;
(statearr_13500_13526[(2)] = inst_13489);

(statearr_13500_13526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13496 === (6))){
var inst_13480 = (state_13495[(2)]);
var state_13495__$1 = state_13495;
if(cljs.core.truth_(inst_13480)){
var statearr_13501_13527 = state_13495__$1;
(statearr_13501_13527[(1)] = (8));

} else {
var statearr_13502_13528 = state_13495__$1;
(statearr_13502_13528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13496 === (3))){
var inst_13493 = (state_13495[(2)]);
var state_13495__$1 = state_13495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13495__$1,inst_13493);
} else {
if((state_val_13496 === (12))){
var state_13495__$1 = state_13495;
var statearr_13503_13529 = state_13495__$1;
(statearr_13503_13529[(2)] = null);

(statearr_13503_13529[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13496 === (2))){
var inst_13472 = (state_13495[(7)]);
var state_13495__$1 = state_13495;
if(cljs.core.truth_(inst_13472)){
var statearr_13504_13530 = state_13495__$1;
(statearr_13504_13530[(1)] = (4));

} else {
var statearr_13505_13531 = state_13495__$1;
(statearr_13505_13531[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13496 === (11))){
var inst_13486 = cljs.core.async.close_BANG_.call(null,ch);
var state_13495__$1 = state_13495;
var statearr_13506_13532 = state_13495__$1;
(statearr_13506_13532[(2)] = inst_13486);

(statearr_13506_13532[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13496 === (9))){
var state_13495__$1 = state_13495;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13507_13533 = state_13495__$1;
(statearr_13507_13533[(1)] = (11));

} else {
var statearr_13508_13534 = state_13495__$1;
(statearr_13508_13534[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13496 === (5))){
var inst_13472 = (state_13495[(7)]);
var state_13495__$1 = state_13495;
var statearr_13509_13535 = state_13495__$1;
(statearr_13509_13535[(2)] = inst_13472);

(statearr_13509_13535[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13496 === (10))){
var inst_13491 = (state_13495[(2)]);
var state_13495__$1 = state_13495;
var statearr_13510_13536 = state_13495__$1;
(statearr_13510_13536[(2)] = inst_13491);

(statearr_13510_13536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13496 === (8))){
var inst_13472 = (state_13495[(7)]);
var inst_13482 = cljs.core.next.call(null,inst_13472);
var inst_13472__$1 = inst_13482;
var state_13495__$1 = (function (){var statearr_13511 = state_13495;
(statearr_13511[(7)] = inst_13472__$1);

return statearr_13511;
})();
var statearr_13512_13537 = state_13495__$1;
(statearr_13512_13537[(2)] = null);

(statearr_13512_13537[(1)] = (2));


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
});})(c__7759__auto__))
;
return ((function (switch__7694__auto__,c__7759__auto__){
return (function() {
var cljs$core$async$state_machine__7695__auto__ = null;
var cljs$core$async$state_machine__7695__auto____0 = (function (){
var statearr_13516 = [null,null,null,null,null,null,null,null];
(statearr_13516[(0)] = cljs$core$async$state_machine__7695__auto__);

(statearr_13516[(1)] = (1));

return statearr_13516;
});
var cljs$core$async$state_machine__7695__auto____1 = (function (state_13495){
while(true){
var ret_value__7696__auto__ = (function (){try{while(true){
var result__7697__auto__ = switch__7694__auto__.call(null,state_13495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7697__auto__;
}
break;
}
}catch (e13517){if((e13517 instanceof Object)){
var ex__7698__auto__ = e13517;
var statearr_13518_13538 = state_13495;
(statearr_13518_13538[(5)] = ex__7698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13539 = state_13495;
state_13495 = G__13539;
continue;
} else {
return ret_value__7696__auto__;
}
break;
}
});
cljs$core$async$state_machine__7695__auto__ = function(state_13495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7695__auto____1.call(this,state_13495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7695__auto____0;
cljs$core$async$state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7695__auto____1;
return cljs$core$async$state_machine__7695__auto__;
})()
;})(switch__7694__auto__,c__7759__auto__))
})();
var state__7761__auto__ = (function (){var statearr_13519 = f__7760__auto__.call(null);
(statearr_13519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7759__auto__);

return statearr_13519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7761__auto__);
});})(c__7759__auto__))
);

return c__7759__auto__;
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
var x__5029__auto__ = (((_ == null))?null:_);
var m__5030__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5029__auto__)]);
if(!((m__5030__auto__ == null))){
return m__5030__auto__.call(null,_);
} else {
var m__5030__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5030__auto____$1 == null))){
return m__5030__auto____$1.call(null,_);
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
var x__5029__auto__ = (((m == null))?null:m);
var m__5030__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5029__auto__)]);
if(!((m__5030__auto__ == null))){
return m__5030__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5030__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5030__auto____$1 == null))){
return m__5030__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__5029__auto__ = (((m == null))?null:m);
var m__5030__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5029__auto__)]);
if(!((m__5030__auto__ == null))){
return m__5030__auto__.call(null,m,ch);
} else {
var m__5030__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5030__auto____$1 == null))){
return m__5030__auto____$1.call(null,m,ch);
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
var x__5029__auto__ = (((m == null))?null:m);
var m__5030__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5029__auto__)]);
if(!((m__5030__auto__ == null))){
return m__5030__auto__.call(null,m);
} else {
var m__5030__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5030__auto____$1 == null))){
return m__5030__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async13761 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13761 = (function (mult,ch,cs,meta13762){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta13762 = meta13762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13763,meta13762__$1){
var self__ = this;
var _13763__$1 = this;
return (new cljs.core.async.t_cljs$core$async13761(self__.mult,self__.ch,self__.cs,meta13762__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13761.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13763){
var self__ = this;
var _13763__$1 = this;
return self__.meta13762;
});})(cs))
;

cljs.core.async.t_cljs$core$async13761.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13761.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13761.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async13761.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13761.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13761.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13761.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13762","meta13762",-1958242800,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13761.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13761.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13761";

cljs.core.async.t_cljs$core$async13761.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4972__auto__,writer__4973__auto__,opt__4974__auto__){
return cljs.core._write.call(null,writer__4973__auto__,"cljs.core.async/t_cljs$core$async13761");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async13761 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13761(mult__$1,ch__$1,cs__$1,meta13762){
return (new cljs.core.async.t_cljs$core$async13761(mult__$1,ch__$1,cs__$1,meta13762));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13761(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__7759__auto___13982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7759__auto___13982,cs,m,dchan,dctr,done){
return (function (){
var f__7760__auto__ = (function (){var switch__7694__auto__ = ((function (c__7759__auto___13982,cs,m,dchan,dctr,done){
return (function (state_13894){
var state_val_13895 = (state_13894[(1)]);
if((state_val_13895 === (7))){
var inst_13890 = (state_13894[(2)]);
var state_13894__$1 = state_13894;
var statearr_13896_13983 = state_13894__$1;
(statearr_13896_13983[(2)] = inst_13890);

(statearr_13896_13983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (20))){
var inst_13795 = (state_13894[(7)]);
var inst_13805 = cljs.core.first.call(null,inst_13795);
var inst_13806 = cljs.core.nth.call(null,inst_13805,(0),null);
var inst_13807 = cljs.core.nth.call(null,inst_13805,(1),null);
var state_13894__$1 = (function (){var statearr_13897 = state_13894;
(statearr_13897[(8)] = inst_13806);

return statearr_13897;
})();
if(cljs.core.truth_(inst_13807)){
var statearr_13898_13984 = state_13894__$1;
(statearr_13898_13984[(1)] = (22));

} else {
var statearr_13899_13985 = state_13894__$1;
(statearr_13899_13985[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (27))){
var inst_13837 = (state_13894[(9)]);
var inst_13766 = (state_13894[(10)]);
var inst_13835 = (state_13894[(11)]);
var inst_13842 = (state_13894[(12)]);
var inst_13842__$1 = cljs.core._nth.call(null,inst_13835,inst_13837);
var inst_13843 = cljs.core.async.put_BANG_.call(null,inst_13842__$1,inst_13766,done);
var state_13894__$1 = (function (){var statearr_13900 = state_13894;
(statearr_13900[(12)] = inst_13842__$1);

return statearr_13900;
})();
if(cljs.core.truth_(inst_13843)){
var statearr_13901_13986 = state_13894__$1;
(statearr_13901_13986[(1)] = (30));

} else {
var statearr_13902_13987 = state_13894__$1;
(statearr_13902_13987[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (1))){
var state_13894__$1 = state_13894;
var statearr_13903_13988 = state_13894__$1;
(statearr_13903_13988[(2)] = null);

(statearr_13903_13988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (24))){
var inst_13795 = (state_13894[(7)]);
var inst_13812 = (state_13894[(2)]);
var inst_13813 = cljs.core.next.call(null,inst_13795);
var inst_13775 = inst_13813;
var inst_13776 = null;
var inst_13777 = (0);
var inst_13778 = (0);
var state_13894__$1 = (function (){var statearr_13904 = state_13894;
(statearr_13904[(13)] = inst_13777);

(statearr_13904[(14)] = inst_13776);

(statearr_13904[(15)] = inst_13778);

(statearr_13904[(16)] = inst_13775);

(statearr_13904[(17)] = inst_13812);

return statearr_13904;
})();
var statearr_13905_13989 = state_13894__$1;
(statearr_13905_13989[(2)] = null);

(statearr_13905_13989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (39))){
var state_13894__$1 = state_13894;
var statearr_13909_13990 = state_13894__$1;
(statearr_13909_13990[(2)] = null);

(statearr_13909_13990[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (4))){
var inst_13766 = (state_13894[(10)]);
var inst_13766__$1 = (state_13894[(2)]);
var inst_13767 = (inst_13766__$1 == null);
var state_13894__$1 = (function (){var statearr_13910 = state_13894;
(statearr_13910[(10)] = inst_13766__$1);

return statearr_13910;
})();
if(cljs.core.truth_(inst_13767)){
var statearr_13911_13991 = state_13894__$1;
(statearr_13911_13991[(1)] = (5));

} else {
var statearr_13912_13992 = state_13894__$1;
(statearr_13912_13992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (15))){
var inst_13777 = (state_13894[(13)]);
var inst_13776 = (state_13894[(14)]);
var inst_13778 = (state_13894[(15)]);
var inst_13775 = (state_13894[(16)]);
var inst_13791 = (state_13894[(2)]);
var inst_13792 = (inst_13778 + (1));
var tmp13906 = inst_13777;
var tmp13907 = inst_13776;
var tmp13908 = inst_13775;
var inst_13775__$1 = tmp13908;
var inst_13776__$1 = tmp13907;
var inst_13777__$1 = tmp13906;
var inst_13778__$1 = inst_13792;
var state_13894__$1 = (function (){var statearr_13913 = state_13894;
(statearr_13913[(13)] = inst_13777__$1);

(statearr_13913[(14)] = inst_13776__$1);

(statearr_13913[(15)] = inst_13778__$1);

(statearr_13913[(16)] = inst_13775__$1);

(statearr_13913[(18)] = inst_13791);

return statearr_13913;
})();
var statearr_13914_13993 = state_13894__$1;
(statearr_13914_13993[(2)] = null);

(statearr_13914_13993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (21))){
var inst_13816 = (state_13894[(2)]);
var state_13894__$1 = state_13894;
var statearr_13918_13994 = state_13894__$1;
(statearr_13918_13994[(2)] = inst_13816);

(statearr_13918_13994[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (31))){
var inst_13842 = (state_13894[(12)]);
var inst_13846 = done.call(null,null);
var inst_13847 = cljs.core.async.untap_STAR_.call(null,m,inst_13842);
var state_13894__$1 = (function (){var statearr_13919 = state_13894;
(statearr_13919[(19)] = inst_13846);

return statearr_13919;
})();
var statearr_13920_13995 = state_13894__$1;
(statearr_13920_13995[(2)] = inst_13847);

(statearr_13920_13995[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (32))){
var inst_13837 = (state_13894[(9)]);
var inst_13834 = (state_13894[(20)]);
var inst_13836 = (state_13894[(21)]);
var inst_13835 = (state_13894[(11)]);
var inst_13849 = (state_13894[(2)]);
var inst_13850 = (inst_13837 + (1));
var tmp13915 = inst_13834;
var tmp13916 = inst_13836;
var tmp13917 = inst_13835;
var inst_13834__$1 = tmp13915;
var inst_13835__$1 = tmp13917;
var inst_13836__$1 = tmp13916;
var inst_13837__$1 = inst_13850;
var state_13894__$1 = (function (){var statearr_13921 = state_13894;
(statearr_13921[(9)] = inst_13837__$1);

(statearr_13921[(20)] = inst_13834__$1);

(statearr_13921[(21)] = inst_13836__$1);

(statearr_13921[(11)] = inst_13835__$1);

(statearr_13921[(22)] = inst_13849);

return statearr_13921;
})();
var statearr_13922_13996 = state_13894__$1;
(statearr_13922_13996[(2)] = null);

(statearr_13922_13996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (40))){
var inst_13862 = (state_13894[(23)]);
var inst_13866 = done.call(null,null);
var inst_13867 = cljs.core.async.untap_STAR_.call(null,m,inst_13862);
var state_13894__$1 = (function (){var statearr_13923 = state_13894;
(statearr_13923[(24)] = inst_13866);

return statearr_13923;
})();
var statearr_13924_13997 = state_13894__$1;
(statearr_13924_13997[(2)] = inst_13867);

(statearr_13924_13997[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (33))){
var inst_13853 = (state_13894[(25)]);
var inst_13855 = cljs.core.chunked_seq_QMARK_.call(null,inst_13853);
var state_13894__$1 = state_13894;
if(inst_13855){
var statearr_13925_13998 = state_13894__$1;
(statearr_13925_13998[(1)] = (36));

} else {
var statearr_13926_13999 = state_13894__$1;
(statearr_13926_13999[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (13))){
var inst_13785 = (state_13894[(26)]);
var inst_13788 = cljs.core.async.close_BANG_.call(null,inst_13785);
var state_13894__$1 = state_13894;
var statearr_13927_14000 = state_13894__$1;
(statearr_13927_14000[(2)] = inst_13788);

(statearr_13927_14000[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (22))){
var inst_13806 = (state_13894[(8)]);
var inst_13809 = cljs.core.async.close_BANG_.call(null,inst_13806);
var state_13894__$1 = state_13894;
var statearr_13928_14001 = state_13894__$1;
(statearr_13928_14001[(2)] = inst_13809);

(statearr_13928_14001[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (36))){
var inst_13853 = (state_13894[(25)]);
var inst_13857 = cljs.core.chunk_first.call(null,inst_13853);
var inst_13858 = cljs.core.chunk_rest.call(null,inst_13853);
var inst_13859 = cljs.core.count.call(null,inst_13857);
var inst_13834 = inst_13858;
var inst_13835 = inst_13857;
var inst_13836 = inst_13859;
var inst_13837 = (0);
var state_13894__$1 = (function (){var statearr_13929 = state_13894;
(statearr_13929[(9)] = inst_13837);

(statearr_13929[(20)] = inst_13834);

(statearr_13929[(21)] = inst_13836);

(statearr_13929[(11)] = inst_13835);

return statearr_13929;
})();
var statearr_13930_14002 = state_13894__$1;
(statearr_13930_14002[(2)] = null);

(statearr_13930_14002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (41))){
var inst_13853 = (state_13894[(25)]);
var inst_13869 = (state_13894[(2)]);
var inst_13870 = cljs.core.next.call(null,inst_13853);
var inst_13834 = inst_13870;
var inst_13835 = null;
var inst_13836 = (0);
var inst_13837 = (0);
var state_13894__$1 = (function (){var statearr_13931 = state_13894;
(statearr_13931[(9)] = inst_13837);

(statearr_13931[(20)] = inst_13834);

(statearr_13931[(21)] = inst_13836);

(statearr_13931[(11)] = inst_13835);

(statearr_13931[(27)] = inst_13869);

return statearr_13931;
})();
var statearr_13932_14003 = state_13894__$1;
(statearr_13932_14003[(2)] = null);

(statearr_13932_14003[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (43))){
var state_13894__$1 = state_13894;
var statearr_13933_14004 = state_13894__$1;
(statearr_13933_14004[(2)] = null);

(statearr_13933_14004[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (29))){
var inst_13878 = (state_13894[(2)]);
var state_13894__$1 = state_13894;
var statearr_13934_14005 = state_13894__$1;
(statearr_13934_14005[(2)] = inst_13878);

(statearr_13934_14005[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (44))){
var inst_13887 = (state_13894[(2)]);
var state_13894__$1 = (function (){var statearr_13935 = state_13894;
(statearr_13935[(28)] = inst_13887);

return statearr_13935;
})();
var statearr_13936_14006 = state_13894__$1;
(statearr_13936_14006[(2)] = null);

(statearr_13936_14006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (6))){
var inst_13826 = (state_13894[(29)]);
var inst_13825 = cljs.core.deref.call(null,cs);
var inst_13826__$1 = cljs.core.keys.call(null,inst_13825);
var inst_13827 = cljs.core.count.call(null,inst_13826__$1);
var inst_13828 = cljs.core.reset_BANG_.call(null,dctr,inst_13827);
var inst_13833 = cljs.core.seq.call(null,inst_13826__$1);
var inst_13834 = inst_13833;
var inst_13835 = null;
var inst_13836 = (0);
var inst_13837 = (0);
var state_13894__$1 = (function (){var statearr_13937 = state_13894;
(statearr_13937[(9)] = inst_13837);

(statearr_13937[(20)] = inst_13834);

(statearr_13937[(30)] = inst_13828);

(statearr_13937[(21)] = inst_13836);

(statearr_13937[(11)] = inst_13835);

(statearr_13937[(29)] = inst_13826__$1);

return statearr_13937;
})();
var statearr_13938_14007 = state_13894__$1;
(statearr_13938_14007[(2)] = null);

(statearr_13938_14007[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (28))){
var inst_13853 = (state_13894[(25)]);
var inst_13834 = (state_13894[(20)]);
var inst_13853__$1 = cljs.core.seq.call(null,inst_13834);
var state_13894__$1 = (function (){var statearr_13939 = state_13894;
(statearr_13939[(25)] = inst_13853__$1);

return statearr_13939;
})();
if(inst_13853__$1){
var statearr_13940_14008 = state_13894__$1;
(statearr_13940_14008[(1)] = (33));

} else {
var statearr_13941_14009 = state_13894__$1;
(statearr_13941_14009[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (25))){
var inst_13837 = (state_13894[(9)]);
var inst_13836 = (state_13894[(21)]);
var inst_13839 = (inst_13837 < inst_13836);
var inst_13840 = inst_13839;
var state_13894__$1 = state_13894;
if(cljs.core.truth_(inst_13840)){
var statearr_13942_14010 = state_13894__$1;
(statearr_13942_14010[(1)] = (27));

} else {
var statearr_13943_14011 = state_13894__$1;
(statearr_13943_14011[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (34))){
var state_13894__$1 = state_13894;
var statearr_13944_14012 = state_13894__$1;
(statearr_13944_14012[(2)] = null);

(statearr_13944_14012[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (17))){
var state_13894__$1 = state_13894;
var statearr_13945_14013 = state_13894__$1;
(statearr_13945_14013[(2)] = null);

(statearr_13945_14013[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (3))){
var inst_13892 = (state_13894[(2)]);
var state_13894__$1 = state_13894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13894__$1,inst_13892);
} else {
if((state_val_13895 === (12))){
var inst_13821 = (state_13894[(2)]);
var state_13894__$1 = state_13894;
var statearr_13946_14014 = state_13894__$1;
(statearr_13946_14014[(2)] = inst_13821);

(statearr_13946_14014[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (2))){
var state_13894__$1 = state_13894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13894__$1,(4),ch);
} else {
if((state_val_13895 === (23))){
var state_13894__$1 = state_13894;
var statearr_13947_14015 = state_13894__$1;
(statearr_13947_14015[(2)] = null);

(statearr_13947_14015[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (35))){
var inst_13876 = (state_13894[(2)]);
var state_13894__$1 = state_13894;
var statearr_13948_14016 = state_13894__$1;
(statearr_13948_14016[(2)] = inst_13876);

(statearr_13948_14016[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (19))){
var inst_13795 = (state_13894[(7)]);
var inst_13799 = cljs.core.chunk_first.call(null,inst_13795);
var inst_13800 = cljs.core.chunk_rest.call(null,inst_13795);
var inst_13801 = cljs.core.count.call(null,inst_13799);
var inst_13775 = inst_13800;
var inst_13776 = inst_13799;
var inst_13777 = inst_13801;
var inst_13778 = (0);
var state_13894__$1 = (function (){var statearr_13949 = state_13894;
(statearr_13949[(13)] = inst_13777);

(statearr_13949[(14)] = inst_13776);

(statearr_13949[(15)] = inst_13778);

(statearr_13949[(16)] = inst_13775);

return statearr_13949;
})();
var statearr_13950_14017 = state_13894__$1;
(statearr_13950_14017[(2)] = null);

(statearr_13950_14017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (11))){
var inst_13795 = (state_13894[(7)]);
var inst_13775 = (state_13894[(16)]);
var inst_13795__$1 = cljs.core.seq.call(null,inst_13775);
var state_13894__$1 = (function (){var statearr_13951 = state_13894;
(statearr_13951[(7)] = inst_13795__$1);

return statearr_13951;
})();
if(inst_13795__$1){
var statearr_13952_14018 = state_13894__$1;
(statearr_13952_14018[(1)] = (16));

} else {
var statearr_13953_14019 = state_13894__$1;
(statearr_13953_14019[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (9))){
var inst_13823 = (state_13894[(2)]);
var state_13894__$1 = state_13894;
var statearr_13954_14020 = state_13894__$1;
(statearr_13954_14020[(2)] = inst_13823);

(statearr_13954_14020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (5))){
var inst_13773 = cljs.core.deref.call(null,cs);
var inst_13774 = cljs.core.seq.call(null,inst_13773);
var inst_13775 = inst_13774;
var inst_13776 = null;
var inst_13777 = (0);
var inst_13778 = (0);
var state_13894__$1 = (function (){var statearr_13955 = state_13894;
(statearr_13955[(13)] = inst_13777);

(statearr_13955[(14)] = inst_13776);

(statearr_13955[(15)] = inst_13778);

(statearr_13955[(16)] = inst_13775);

return statearr_13955;
})();
var statearr_13956_14021 = state_13894__$1;
(statearr_13956_14021[(2)] = null);

(statearr_13956_14021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (14))){
var state_13894__$1 = state_13894;
var statearr_13957_14022 = state_13894__$1;
(statearr_13957_14022[(2)] = null);

(statearr_13957_14022[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (45))){
var inst_13884 = (state_13894[(2)]);
var state_13894__$1 = state_13894;
var statearr_13958_14023 = state_13894__$1;
(statearr_13958_14023[(2)] = inst_13884);

(statearr_13958_14023[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (26))){
var inst_13826 = (state_13894[(29)]);
var inst_13880 = (state_13894[(2)]);
var inst_13881 = cljs.core.seq.call(null,inst_13826);
var state_13894__$1 = (function (){var statearr_13959 = state_13894;
(statearr_13959[(31)] = inst_13880);

return statearr_13959;
})();
if(inst_13881){
var statearr_13960_14024 = state_13894__$1;
(statearr_13960_14024[(1)] = (42));

} else {
var statearr_13961_14025 = state_13894__$1;
(statearr_13961_14025[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (16))){
var inst_13795 = (state_13894[(7)]);
var inst_13797 = cljs.core.chunked_seq_QMARK_.call(null,inst_13795);
var state_13894__$1 = state_13894;
if(inst_13797){
var statearr_13962_14026 = state_13894__$1;
(statearr_13962_14026[(1)] = (19));

} else {
var statearr_13963_14027 = state_13894__$1;
(statearr_13963_14027[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (38))){
var inst_13873 = (state_13894[(2)]);
var state_13894__$1 = state_13894;
var statearr_13964_14028 = state_13894__$1;
(statearr_13964_14028[(2)] = inst_13873);

(statearr_13964_14028[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (30))){
var state_13894__$1 = state_13894;
var statearr_13965_14029 = state_13894__$1;
(statearr_13965_14029[(2)] = null);

(statearr_13965_14029[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (10))){
var inst_13776 = (state_13894[(14)]);
var inst_13778 = (state_13894[(15)]);
var inst_13784 = cljs.core._nth.call(null,inst_13776,inst_13778);
var inst_13785 = cljs.core.nth.call(null,inst_13784,(0),null);
var inst_13786 = cljs.core.nth.call(null,inst_13784,(1),null);
var state_13894__$1 = (function (){var statearr_13966 = state_13894;
(statearr_13966[(26)] = inst_13785);

return statearr_13966;
})();
if(cljs.core.truth_(inst_13786)){
var statearr_13967_14030 = state_13894__$1;
(statearr_13967_14030[(1)] = (13));

} else {
var statearr_13968_14031 = state_13894__$1;
(statearr_13968_14031[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (18))){
var inst_13819 = (state_13894[(2)]);
var state_13894__$1 = state_13894;
var statearr_13969_14032 = state_13894__$1;
(statearr_13969_14032[(2)] = inst_13819);

(statearr_13969_14032[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (42))){
var state_13894__$1 = state_13894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13894__$1,(45),dchan);
} else {
if((state_val_13895 === (37))){
var inst_13853 = (state_13894[(25)]);
var inst_13862 = (state_13894[(23)]);
var inst_13766 = (state_13894[(10)]);
var inst_13862__$1 = cljs.core.first.call(null,inst_13853);
var inst_13863 = cljs.core.async.put_BANG_.call(null,inst_13862__$1,inst_13766,done);
var state_13894__$1 = (function (){var statearr_13970 = state_13894;
(statearr_13970[(23)] = inst_13862__$1);

return statearr_13970;
})();
if(cljs.core.truth_(inst_13863)){
var statearr_13971_14033 = state_13894__$1;
(statearr_13971_14033[(1)] = (39));

} else {
var statearr_13972_14034 = state_13894__$1;
(statearr_13972_14034[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (8))){
var inst_13777 = (state_13894[(13)]);
var inst_13778 = (state_13894[(15)]);
var inst_13780 = (inst_13778 < inst_13777);
var inst_13781 = inst_13780;
var state_13894__$1 = state_13894;
if(cljs.core.truth_(inst_13781)){
var statearr_13973_14035 = state_13894__$1;
(statearr_13973_14035[(1)] = (10));

} else {
var statearr_13974_14036 = state_13894__$1;
(statearr_13974_14036[(1)] = (11));

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
});})(c__7759__auto___13982,cs,m,dchan,dctr,done))
;
return ((function (switch__7694__auto__,c__7759__auto___13982,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7695__auto__ = null;
var cljs$core$async$mult_$_state_machine__7695__auto____0 = (function (){
var statearr_13978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13978[(0)] = cljs$core$async$mult_$_state_machine__7695__auto__);

(statearr_13978[(1)] = (1));

return statearr_13978;
});
var cljs$core$async$mult_$_state_machine__7695__auto____1 = (function (state_13894){
while(true){
var ret_value__7696__auto__ = (function (){try{while(true){
var result__7697__auto__ = switch__7694__auto__.call(null,state_13894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7697__auto__;
}
break;
}
}catch (e13979){if((e13979 instanceof Object)){
var ex__7698__auto__ = e13979;
var statearr_13980_14037 = state_13894;
(statearr_13980_14037[(5)] = ex__7698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14038 = state_13894;
state_13894 = G__14038;
continue;
} else {
return ret_value__7696__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7695__auto__ = function(state_13894){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7695__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7695__auto____1.call(this,state_13894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7695__auto____0;
cljs$core$async$mult_$_state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7695__auto____1;
return cljs$core$async$mult_$_state_machine__7695__auto__;
})()
;})(switch__7694__auto__,c__7759__auto___13982,cs,m,dchan,dctr,done))
})();
var state__7761__auto__ = (function (){var statearr_13981 = f__7760__auto__.call(null);
(statearr_13981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7759__auto___13982);

return statearr_13981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7761__auto__);
});})(c__7759__auto___13982,cs,m,dchan,dctr,done))
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
var args14039 = [];
var len__5432__auto___14042 = arguments.length;
var i__5433__auto___14043 = (0);
while(true){
if((i__5433__auto___14043 < len__5432__auto___14042)){
args14039.push((arguments[i__5433__auto___14043]));

var G__14044 = (i__5433__auto___14043 + (1));
i__5433__auto___14043 = G__14044;
continue;
} else {
}
break;
}

var G__14041 = args14039.length;
switch (G__14041) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14039.length)].join('')));

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
var x__5029__auto__ = (((m == null))?null:m);
var m__5030__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5029__auto__)]);
if(!((m__5030__auto__ == null))){
return m__5030__auto__.call(null,m,ch);
} else {
var m__5030__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5030__auto____$1 == null))){
return m__5030__auto____$1.call(null,m,ch);
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
var x__5029__auto__ = (((m == null))?null:m);
var m__5030__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5029__auto__)]);
if(!((m__5030__auto__ == null))){
return m__5030__auto__.call(null,m,ch);
} else {
var m__5030__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5030__auto____$1 == null))){
return m__5030__auto____$1.call(null,m,ch);
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
var x__5029__auto__ = (((m == null))?null:m);
var m__5030__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5029__auto__)]);
if(!((m__5030__auto__ == null))){
return m__5030__auto__.call(null,m);
} else {
var m__5030__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5030__auto____$1 == null))){
return m__5030__auto____$1.call(null,m);
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
var x__5029__auto__ = (((m == null))?null:m);
var m__5030__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5029__auto__)]);
if(!((m__5030__auto__ == null))){
return m__5030__auto__.call(null,m,state_map);
} else {
var m__5030__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5030__auto____$1 == null))){
return m__5030__auto____$1.call(null,m,state_map);
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
var x__5029__auto__ = (((m == null))?null:m);
var m__5030__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5029__auto__)]);
if(!((m__5030__auto__ == null))){
return m__5030__auto__.call(null,m,mode);
} else {
var m__5030__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5030__auto____$1 == null))){
return m__5030__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5439__auto__ = [];
var len__5432__auto___14056 = arguments.length;
var i__5433__auto___14057 = (0);
while(true){
if((i__5433__auto___14057 < len__5432__auto___14056)){
args__5439__auto__.push((arguments[i__5433__auto___14057]));

var G__14058 = (i__5433__auto___14057 + (1));
i__5433__auto___14057 = G__14058;
continue;
} else {
}
break;
}

var argseq__5440__auto__ = ((((3) < args__5439__auto__.length))?(new cljs.core.IndexedSeq(args__5439__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5440__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14050){
var map__14051 = p__14050;
var map__14051__$1 = ((((!((map__14051 == null)))?((((map__14051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14051):map__14051);
var opts = map__14051__$1;
var statearr_14053_14059 = state;
(statearr_14053_14059[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__14051,map__14051__$1,opts){
return (function (val){
var statearr_14054_14060 = state;
(statearr_14054_14060[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14051,map__14051__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_14055_14061 = state;
(statearr_14055_14061[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14046){
var G__14047 = cljs.core.first.call(null,seq14046);
var seq14046__$1 = cljs.core.next.call(null,seq14046);
var G__14048 = cljs.core.first.call(null,seq14046__$1);
var seq14046__$2 = cljs.core.next.call(null,seq14046__$1);
var G__14049 = cljs.core.first.call(null,seq14046__$2);
var seq14046__$3 = cljs.core.next.call(null,seq14046__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14047,G__14048,G__14049,seq14046__$3);
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
if(typeof cljs.core.async.t_cljs$core$async14225 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14225 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14226){
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
this.meta14226 = meta14226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14227,meta14226__$1){
var self__ = this;
var _14227__$1 = this;
return (new cljs.core.async.t_cljs$core$async14225(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14226__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14225.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14227){
var self__ = this;
var _14227__$1 = this;
return self__.meta14226;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14225.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14225.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14225.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async14225.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14225.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14225.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14225.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14225.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async14225.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14226","meta14226",1387488410,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14225.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14225.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14225";

cljs.core.async.t_cljs$core$async14225.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4972__auto__,writer__4973__auto__,opt__4974__auto__){
return cljs.core._write.call(null,writer__4973__auto__,"cljs.core.async/t_cljs$core$async14225");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async14225 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14225(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14226){
return (new cljs.core.async.t_cljs$core$async14225(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14226));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14225(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7759__auto___14388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7759__auto___14388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7760__auto__ = (function (){var switch__7694__auto__ = ((function (c__7759__auto___14388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14325){
var state_val_14326 = (state_14325[(1)]);
if((state_val_14326 === (7))){
var inst_14243 = (state_14325[(2)]);
var state_14325__$1 = state_14325;
var statearr_14327_14389 = state_14325__$1;
(statearr_14327_14389[(2)] = inst_14243);

(statearr_14327_14389[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (20))){
var inst_14255 = (state_14325[(7)]);
var state_14325__$1 = state_14325;
var statearr_14328_14390 = state_14325__$1;
(statearr_14328_14390[(2)] = inst_14255);

(statearr_14328_14390[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (27))){
var state_14325__$1 = state_14325;
var statearr_14329_14391 = state_14325__$1;
(statearr_14329_14391[(2)] = null);

(statearr_14329_14391[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (1))){
var inst_14231 = (state_14325[(8)]);
var inst_14231__$1 = calc_state.call(null);
var inst_14233 = (inst_14231__$1 == null);
var inst_14234 = cljs.core.not.call(null,inst_14233);
var state_14325__$1 = (function (){var statearr_14330 = state_14325;
(statearr_14330[(8)] = inst_14231__$1);

return statearr_14330;
})();
if(inst_14234){
var statearr_14331_14392 = state_14325__$1;
(statearr_14331_14392[(1)] = (2));

} else {
var statearr_14332_14393 = state_14325__$1;
(statearr_14332_14393[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (24))){
var inst_14278 = (state_14325[(9)]);
var inst_14299 = (state_14325[(10)]);
var inst_14285 = (state_14325[(11)]);
var inst_14299__$1 = inst_14278.call(null,inst_14285);
var state_14325__$1 = (function (){var statearr_14333 = state_14325;
(statearr_14333[(10)] = inst_14299__$1);

return statearr_14333;
})();
if(cljs.core.truth_(inst_14299__$1)){
var statearr_14334_14394 = state_14325__$1;
(statearr_14334_14394[(1)] = (29));

} else {
var statearr_14335_14395 = state_14325__$1;
(statearr_14335_14395[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (4))){
var inst_14246 = (state_14325[(2)]);
var state_14325__$1 = state_14325;
if(cljs.core.truth_(inst_14246)){
var statearr_14336_14396 = state_14325__$1;
(statearr_14336_14396[(1)] = (8));

} else {
var statearr_14337_14397 = state_14325__$1;
(statearr_14337_14397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (15))){
var inst_14272 = (state_14325[(2)]);
var state_14325__$1 = state_14325;
if(cljs.core.truth_(inst_14272)){
var statearr_14338_14398 = state_14325__$1;
(statearr_14338_14398[(1)] = (19));

} else {
var statearr_14339_14399 = state_14325__$1;
(statearr_14339_14399[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (21))){
var inst_14277 = (state_14325[(12)]);
var inst_14277__$1 = (state_14325[(2)]);
var inst_14278 = cljs.core.get.call(null,inst_14277__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14279 = cljs.core.get.call(null,inst_14277__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14280 = cljs.core.get.call(null,inst_14277__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14325__$1 = (function (){var statearr_14340 = state_14325;
(statearr_14340[(9)] = inst_14278);

(statearr_14340[(13)] = inst_14279);

(statearr_14340[(12)] = inst_14277__$1);

return statearr_14340;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14325__$1,(22),inst_14280);
} else {
if((state_val_14326 === (31))){
var inst_14307 = (state_14325[(2)]);
var state_14325__$1 = state_14325;
if(cljs.core.truth_(inst_14307)){
var statearr_14341_14400 = state_14325__$1;
(statearr_14341_14400[(1)] = (32));

} else {
var statearr_14342_14401 = state_14325__$1;
(statearr_14342_14401[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (32))){
var inst_14284 = (state_14325[(14)]);
var state_14325__$1 = state_14325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14325__$1,(35),out,inst_14284);
} else {
if((state_val_14326 === (33))){
var inst_14277 = (state_14325[(12)]);
var inst_14255 = inst_14277;
var state_14325__$1 = (function (){var statearr_14343 = state_14325;
(statearr_14343[(7)] = inst_14255);

return statearr_14343;
})();
var statearr_14344_14402 = state_14325__$1;
(statearr_14344_14402[(2)] = null);

(statearr_14344_14402[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (13))){
var inst_14255 = (state_14325[(7)]);
var inst_14262 = inst_14255.cljs$lang$protocol_mask$partition0$;
var inst_14263 = (inst_14262 & (64));
var inst_14264 = inst_14255.cljs$core$ISeq$;
var inst_14265 = (inst_14263) || (inst_14264);
var state_14325__$1 = state_14325;
if(cljs.core.truth_(inst_14265)){
var statearr_14345_14403 = state_14325__$1;
(statearr_14345_14403[(1)] = (16));

} else {
var statearr_14346_14404 = state_14325__$1;
(statearr_14346_14404[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (22))){
var inst_14284 = (state_14325[(14)]);
var inst_14285 = (state_14325[(11)]);
var inst_14283 = (state_14325[(2)]);
var inst_14284__$1 = cljs.core.nth.call(null,inst_14283,(0),null);
var inst_14285__$1 = cljs.core.nth.call(null,inst_14283,(1),null);
var inst_14286 = (inst_14284__$1 == null);
var inst_14287 = cljs.core._EQ_.call(null,inst_14285__$1,change);
var inst_14288 = (inst_14286) || (inst_14287);
var state_14325__$1 = (function (){var statearr_14347 = state_14325;
(statearr_14347[(14)] = inst_14284__$1);

(statearr_14347[(11)] = inst_14285__$1);

return statearr_14347;
})();
if(cljs.core.truth_(inst_14288)){
var statearr_14348_14405 = state_14325__$1;
(statearr_14348_14405[(1)] = (23));

} else {
var statearr_14349_14406 = state_14325__$1;
(statearr_14349_14406[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (36))){
var inst_14277 = (state_14325[(12)]);
var inst_14255 = inst_14277;
var state_14325__$1 = (function (){var statearr_14350 = state_14325;
(statearr_14350[(7)] = inst_14255);

return statearr_14350;
})();
var statearr_14351_14407 = state_14325__$1;
(statearr_14351_14407[(2)] = null);

(statearr_14351_14407[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (29))){
var inst_14299 = (state_14325[(10)]);
var state_14325__$1 = state_14325;
var statearr_14352_14408 = state_14325__$1;
(statearr_14352_14408[(2)] = inst_14299);

(statearr_14352_14408[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (6))){
var state_14325__$1 = state_14325;
var statearr_14353_14409 = state_14325__$1;
(statearr_14353_14409[(2)] = false);

(statearr_14353_14409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (28))){
var inst_14295 = (state_14325[(2)]);
var inst_14296 = calc_state.call(null);
var inst_14255 = inst_14296;
var state_14325__$1 = (function (){var statearr_14354 = state_14325;
(statearr_14354[(7)] = inst_14255);

(statearr_14354[(15)] = inst_14295);

return statearr_14354;
})();
var statearr_14355_14410 = state_14325__$1;
(statearr_14355_14410[(2)] = null);

(statearr_14355_14410[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (25))){
var inst_14321 = (state_14325[(2)]);
var state_14325__$1 = state_14325;
var statearr_14356_14411 = state_14325__$1;
(statearr_14356_14411[(2)] = inst_14321);

(statearr_14356_14411[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (34))){
var inst_14319 = (state_14325[(2)]);
var state_14325__$1 = state_14325;
var statearr_14357_14412 = state_14325__$1;
(statearr_14357_14412[(2)] = inst_14319);

(statearr_14357_14412[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (17))){
var state_14325__$1 = state_14325;
var statearr_14358_14413 = state_14325__$1;
(statearr_14358_14413[(2)] = false);

(statearr_14358_14413[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (3))){
var state_14325__$1 = state_14325;
var statearr_14359_14414 = state_14325__$1;
(statearr_14359_14414[(2)] = false);

(statearr_14359_14414[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (12))){
var inst_14323 = (state_14325[(2)]);
var state_14325__$1 = state_14325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14325__$1,inst_14323);
} else {
if((state_val_14326 === (2))){
var inst_14231 = (state_14325[(8)]);
var inst_14236 = inst_14231.cljs$lang$protocol_mask$partition0$;
var inst_14237 = (inst_14236 & (64));
var inst_14238 = inst_14231.cljs$core$ISeq$;
var inst_14239 = (inst_14237) || (inst_14238);
var state_14325__$1 = state_14325;
if(cljs.core.truth_(inst_14239)){
var statearr_14360_14415 = state_14325__$1;
(statearr_14360_14415[(1)] = (5));

} else {
var statearr_14361_14416 = state_14325__$1;
(statearr_14361_14416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (23))){
var inst_14284 = (state_14325[(14)]);
var inst_14290 = (inst_14284 == null);
var state_14325__$1 = state_14325;
if(cljs.core.truth_(inst_14290)){
var statearr_14362_14417 = state_14325__$1;
(statearr_14362_14417[(1)] = (26));

} else {
var statearr_14363_14418 = state_14325__$1;
(statearr_14363_14418[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (35))){
var inst_14310 = (state_14325[(2)]);
var state_14325__$1 = state_14325;
if(cljs.core.truth_(inst_14310)){
var statearr_14364_14419 = state_14325__$1;
(statearr_14364_14419[(1)] = (36));

} else {
var statearr_14365_14420 = state_14325__$1;
(statearr_14365_14420[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (19))){
var inst_14255 = (state_14325[(7)]);
var inst_14274 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14255);
var state_14325__$1 = state_14325;
var statearr_14366_14421 = state_14325__$1;
(statearr_14366_14421[(2)] = inst_14274);

(statearr_14366_14421[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (11))){
var inst_14255 = (state_14325[(7)]);
var inst_14259 = (inst_14255 == null);
var inst_14260 = cljs.core.not.call(null,inst_14259);
var state_14325__$1 = state_14325;
if(inst_14260){
var statearr_14367_14422 = state_14325__$1;
(statearr_14367_14422[(1)] = (13));

} else {
var statearr_14368_14423 = state_14325__$1;
(statearr_14368_14423[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (9))){
var inst_14231 = (state_14325[(8)]);
var state_14325__$1 = state_14325;
var statearr_14369_14424 = state_14325__$1;
(statearr_14369_14424[(2)] = inst_14231);

(statearr_14369_14424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (5))){
var state_14325__$1 = state_14325;
var statearr_14370_14425 = state_14325__$1;
(statearr_14370_14425[(2)] = true);

(statearr_14370_14425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (14))){
var state_14325__$1 = state_14325;
var statearr_14371_14426 = state_14325__$1;
(statearr_14371_14426[(2)] = false);

(statearr_14371_14426[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (26))){
var inst_14285 = (state_14325[(11)]);
var inst_14292 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14285);
var state_14325__$1 = state_14325;
var statearr_14372_14427 = state_14325__$1;
(statearr_14372_14427[(2)] = inst_14292);

(statearr_14372_14427[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (16))){
var state_14325__$1 = state_14325;
var statearr_14373_14428 = state_14325__$1;
(statearr_14373_14428[(2)] = true);

(statearr_14373_14428[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (38))){
var inst_14315 = (state_14325[(2)]);
var state_14325__$1 = state_14325;
var statearr_14374_14429 = state_14325__$1;
(statearr_14374_14429[(2)] = inst_14315);

(statearr_14374_14429[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (30))){
var inst_14278 = (state_14325[(9)]);
var inst_14279 = (state_14325[(13)]);
var inst_14285 = (state_14325[(11)]);
var inst_14302 = cljs.core.empty_QMARK_.call(null,inst_14278);
var inst_14303 = inst_14279.call(null,inst_14285);
var inst_14304 = cljs.core.not.call(null,inst_14303);
var inst_14305 = (inst_14302) && (inst_14304);
var state_14325__$1 = state_14325;
var statearr_14375_14430 = state_14325__$1;
(statearr_14375_14430[(2)] = inst_14305);

(statearr_14375_14430[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (10))){
var inst_14231 = (state_14325[(8)]);
var inst_14251 = (state_14325[(2)]);
var inst_14252 = cljs.core.get.call(null,inst_14251,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14253 = cljs.core.get.call(null,inst_14251,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14254 = cljs.core.get.call(null,inst_14251,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14255 = inst_14231;
var state_14325__$1 = (function (){var statearr_14376 = state_14325;
(statearr_14376[(7)] = inst_14255);

(statearr_14376[(16)] = inst_14252);

(statearr_14376[(17)] = inst_14253);

(statearr_14376[(18)] = inst_14254);

return statearr_14376;
})();
var statearr_14377_14431 = state_14325__$1;
(statearr_14377_14431[(2)] = null);

(statearr_14377_14431[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (18))){
var inst_14269 = (state_14325[(2)]);
var state_14325__$1 = state_14325;
var statearr_14378_14432 = state_14325__$1;
(statearr_14378_14432[(2)] = inst_14269);

(statearr_14378_14432[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (37))){
var state_14325__$1 = state_14325;
var statearr_14379_14433 = state_14325__$1;
(statearr_14379_14433[(2)] = null);

(statearr_14379_14433[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14326 === (8))){
var inst_14231 = (state_14325[(8)]);
var inst_14248 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14231);
var state_14325__$1 = state_14325;
var statearr_14380_14434 = state_14325__$1;
(statearr_14380_14434[(2)] = inst_14248);

(statearr_14380_14434[(1)] = (10));


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
});})(c__7759__auto___14388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7694__auto__,c__7759__auto___14388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7695__auto__ = null;
var cljs$core$async$mix_$_state_machine__7695__auto____0 = (function (){
var statearr_14384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14384[(0)] = cljs$core$async$mix_$_state_machine__7695__auto__);

(statearr_14384[(1)] = (1));

return statearr_14384;
});
var cljs$core$async$mix_$_state_machine__7695__auto____1 = (function (state_14325){
while(true){
var ret_value__7696__auto__ = (function (){try{while(true){
var result__7697__auto__ = switch__7694__auto__.call(null,state_14325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7697__auto__;
}
break;
}
}catch (e14385){if((e14385 instanceof Object)){
var ex__7698__auto__ = e14385;
var statearr_14386_14435 = state_14325;
(statearr_14386_14435[(5)] = ex__7698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14436 = state_14325;
state_14325 = G__14436;
continue;
} else {
return ret_value__7696__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7695__auto__ = function(state_14325){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7695__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7695__auto____1.call(this,state_14325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7695__auto____0;
cljs$core$async$mix_$_state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7695__auto____1;
return cljs$core$async$mix_$_state_machine__7695__auto__;
})()
;})(switch__7694__auto__,c__7759__auto___14388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7761__auto__ = (function (){var statearr_14387 = f__7760__auto__.call(null);
(statearr_14387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7759__auto___14388);

return statearr_14387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7761__auto__);
});})(c__7759__auto___14388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__5029__auto__ = (((p == null))?null:p);
var m__5030__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5029__auto__)]);
if(!((m__5030__auto__ == null))){
return m__5030__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5030__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5030__auto____$1 == null))){
return m__5030__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__5029__auto__ = (((p == null))?null:p);
var m__5030__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5029__auto__)]);
if(!((m__5030__auto__ == null))){
return m__5030__auto__.call(null,p,v,ch);
} else {
var m__5030__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5030__auto____$1 == null))){
return m__5030__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args14437 = [];
var len__5432__auto___14440 = arguments.length;
var i__5433__auto___14441 = (0);
while(true){
if((i__5433__auto___14441 < len__5432__auto___14440)){
args14437.push((arguments[i__5433__auto___14441]));

var G__14442 = (i__5433__auto___14441 + (1));
i__5433__auto___14441 = G__14442;
continue;
} else {
}
break;
}

var G__14439 = args14437.length;
switch (G__14439) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14437.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5029__auto__ = (((p == null))?null:p);
var m__5030__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5029__auto__)]);
if(!((m__5030__auto__ == null))){
return m__5030__auto__.call(null,p);
} else {
var m__5030__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5030__auto____$1 == null))){
return m__5030__auto____$1.call(null,p);
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
var x__5029__auto__ = (((p == null))?null:p);
var m__5030__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5029__auto__)]);
if(!((m__5030__auto__ == null))){
return m__5030__auto__.call(null,p,v);
} else {
var m__5030__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5030__auto____$1 == null))){
return m__5030__auto____$1.call(null,p,v);
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
var args14445 = [];
var len__5432__auto___14570 = arguments.length;
var i__5433__auto___14571 = (0);
while(true){
if((i__5433__auto___14571 < len__5432__auto___14570)){
args14445.push((arguments[i__5433__auto___14571]));

var G__14572 = (i__5433__auto___14571 + (1));
i__5433__auto___14571 = G__14572;
continue;
} else {
}
break;
}

var G__14447 = args14445.length;
switch (G__14447) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14445.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4374__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4374__auto__)){
return or__4374__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4374__auto__,mults){
return (function (p1__14444_SHARP_){
if(cljs.core.truth_(p1__14444_SHARP_.call(null,topic))){
return p1__14444_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14444_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4374__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async14448 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14448 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14449){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14449 = meta14449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14450,meta14449__$1){
var self__ = this;
var _14450__$1 = this;
return (new cljs.core.async.t_cljs$core$async14448(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14449__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14448.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14450){
var self__ = this;
var _14450__$1 = this;
return self__.meta14449;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14448.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14448.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14448.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async14448.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14448.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async14448.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14448.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14448.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14449","meta14449",776320280,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14448.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14448.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14448";

cljs.core.async.t_cljs$core$async14448.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4972__auto__,writer__4973__auto__,opt__4974__auto__){
return cljs.core._write.call(null,writer__4973__auto__,"cljs.core.async/t_cljs$core$async14448");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async14448 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async14448(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14449){
return (new cljs.core.async.t_cljs$core$async14448(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14449));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async14448(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7759__auto___14574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7759__auto___14574,mults,ensure_mult,p){
return (function (){
var f__7760__auto__ = (function (){var switch__7694__auto__ = ((function (c__7759__auto___14574,mults,ensure_mult,p){
return (function (state_14522){
var state_val_14523 = (state_14522[(1)]);
if((state_val_14523 === (7))){
var inst_14518 = (state_14522[(2)]);
var state_14522__$1 = state_14522;
var statearr_14524_14575 = state_14522__$1;
(statearr_14524_14575[(2)] = inst_14518);

(statearr_14524_14575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (20))){
var state_14522__$1 = state_14522;
var statearr_14525_14576 = state_14522__$1;
(statearr_14525_14576[(2)] = null);

(statearr_14525_14576[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (1))){
var state_14522__$1 = state_14522;
var statearr_14526_14577 = state_14522__$1;
(statearr_14526_14577[(2)] = null);

(statearr_14526_14577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (24))){
var inst_14501 = (state_14522[(7)]);
var inst_14510 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14501);
var state_14522__$1 = state_14522;
var statearr_14527_14578 = state_14522__$1;
(statearr_14527_14578[(2)] = inst_14510);

(statearr_14527_14578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (4))){
var inst_14453 = (state_14522[(8)]);
var inst_14453__$1 = (state_14522[(2)]);
var inst_14454 = (inst_14453__$1 == null);
var state_14522__$1 = (function (){var statearr_14528 = state_14522;
(statearr_14528[(8)] = inst_14453__$1);

return statearr_14528;
})();
if(cljs.core.truth_(inst_14454)){
var statearr_14529_14579 = state_14522__$1;
(statearr_14529_14579[(1)] = (5));

} else {
var statearr_14530_14580 = state_14522__$1;
(statearr_14530_14580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (15))){
var inst_14495 = (state_14522[(2)]);
var state_14522__$1 = state_14522;
var statearr_14531_14581 = state_14522__$1;
(statearr_14531_14581[(2)] = inst_14495);

(statearr_14531_14581[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (21))){
var inst_14515 = (state_14522[(2)]);
var state_14522__$1 = (function (){var statearr_14532 = state_14522;
(statearr_14532[(9)] = inst_14515);

return statearr_14532;
})();
var statearr_14533_14582 = state_14522__$1;
(statearr_14533_14582[(2)] = null);

(statearr_14533_14582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (13))){
var inst_14477 = (state_14522[(10)]);
var inst_14479 = cljs.core.chunked_seq_QMARK_.call(null,inst_14477);
var state_14522__$1 = state_14522;
if(inst_14479){
var statearr_14534_14583 = state_14522__$1;
(statearr_14534_14583[(1)] = (16));

} else {
var statearr_14535_14584 = state_14522__$1;
(statearr_14535_14584[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (22))){
var inst_14507 = (state_14522[(2)]);
var state_14522__$1 = state_14522;
if(cljs.core.truth_(inst_14507)){
var statearr_14536_14585 = state_14522__$1;
(statearr_14536_14585[(1)] = (23));

} else {
var statearr_14537_14586 = state_14522__$1;
(statearr_14537_14586[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (6))){
var inst_14503 = (state_14522[(11)]);
var inst_14453 = (state_14522[(8)]);
var inst_14501 = (state_14522[(7)]);
var inst_14501__$1 = topic_fn.call(null,inst_14453);
var inst_14502 = cljs.core.deref.call(null,mults);
var inst_14503__$1 = cljs.core.get.call(null,inst_14502,inst_14501__$1);
var state_14522__$1 = (function (){var statearr_14538 = state_14522;
(statearr_14538[(11)] = inst_14503__$1);

(statearr_14538[(7)] = inst_14501__$1);

return statearr_14538;
})();
if(cljs.core.truth_(inst_14503__$1)){
var statearr_14539_14587 = state_14522__$1;
(statearr_14539_14587[(1)] = (19));

} else {
var statearr_14540_14588 = state_14522__$1;
(statearr_14540_14588[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (25))){
var inst_14512 = (state_14522[(2)]);
var state_14522__$1 = state_14522;
var statearr_14541_14589 = state_14522__$1;
(statearr_14541_14589[(2)] = inst_14512);

(statearr_14541_14589[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (17))){
var inst_14477 = (state_14522[(10)]);
var inst_14486 = cljs.core.first.call(null,inst_14477);
var inst_14487 = cljs.core.async.muxch_STAR_.call(null,inst_14486);
var inst_14488 = cljs.core.async.close_BANG_.call(null,inst_14487);
var inst_14489 = cljs.core.next.call(null,inst_14477);
var inst_14463 = inst_14489;
var inst_14464 = null;
var inst_14465 = (0);
var inst_14466 = (0);
var state_14522__$1 = (function (){var statearr_14542 = state_14522;
(statearr_14542[(12)] = inst_14464);

(statearr_14542[(13)] = inst_14466);

(statearr_14542[(14)] = inst_14463);

(statearr_14542[(15)] = inst_14465);

(statearr_14542[(16)] = inst_14488);

return statearr_14542;
})();
var statearr_14543_14590 = state_14522__$1;
(statearr_14543_14590[(2)] = null);

(statearr_14543_14590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (3))){
var inst_14520 = (state_14522[(2)]);
var state_14522__$1 = state_14522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14522__$1,inst_14520);
} else {
if((state_val_14523 === (12))){
var inst_14497 = (state_14522[(2)]);
var state_14522__$1 = state_14522;
var statearr_14544_14591 = state_14522__$1;
(statearr_14544_14591[(2)] = inst_14497);

(statearr_14544_14591[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (2))){
var state_14522__$1 = state_14522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14522__$1,(4),ch);
} else {
if((state_val_14523 === (23))){
var state_14522__$1 = state_14522;
var statearr_14545_14592 = state_14522__$1;
(statearr_14545_14592[(2)] = null);

(statearr_14545_14592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (19))){
var inst_14503 = (state_14522[(11)]);
var inst_14453 = (state_14522[(8)]);
var inst_14505 = cljs.core.async.muxch_STAR_.call(null,inst_14503);
var state_14522__$1 = state_14522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14522__$1,(22),inst_14505,inst_14453);
} else {
if((state_val_14523 === (11))){
var inst_14463 = (state_14522[(14)]);
var inst_14477 = (state_14522[(10)]);
var inst_14477__$1 = cljs.core.seq.call(null,inst_14463);
var state_14522__$1 = (function (){var statearr_14546 = state_14522;
(statearr_14546[(10)] = inst_14477__$1);

return statearr_14546;
})();
if(inst_14477__$1){
var statearr_14547_14593 = state_14522__$1;
(statearr_14547_14593[(1)] = (13));

} else {
var statearr_14548_14594 = state_14522__$1;
(statearr_14548_14594[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (9))){
var inst_14499 = (state_14522[(2)]);
var state_14522__$1 = state_14522;
var statearr_14549_14595 = state_14522__$1;
(statearr_14549_14595[(2)] = inst_14499);

(statearr_14549_14595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (5))){
var inst_14460 = cljs.core.deref.call(null,mults);
var inst_14461 = cljs.core.vals.call(null,inst_14460);
var inst_14462 = cljs.core.seq.call(null,inst_14461);
var inst_14463 = inst_14462;
var inst_14464 = null;
var inst_14465 = (0);
var inst_14466 = (0);
var state_14522__$1 = (function (){var statearr_14550 = state_14522;
(statearr_14550[(12)] = inst_14464);

(statearr_14550[(13)] = inst_14466);

(statearr_14550[(14)] = inst_14463);

(statearr_14550[(15)] = inst_14465);

return statearr_14550;
})();
var statearr_14551_14596 = state_14522__$1;
(statearr_14551_14596[(2)] = null);

(statearr_14551_14596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (14))){
var state_14522__$1 = state_14522;
var statearr_14555_14597 = state_14522__$1;
(statearr_14555_14597[(2)] = null);

(statearr_14555_14597[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (16))){
var inst_14477 = (state_14522[(10)]);
var inst_14481 = cljs.core.chunk_first.call(null,inst_14477);
var inst_14482 = cljs.core.chunk_rest.call(null,inst_14477);
var inst_14483 = cljs.core.count.call(null,inst_14481);
var inst_14463 = inst_14482;
var inst_14464 = inst_14481;
var inst_14465 = inst_14483;
var inst_14466 = (0);
var state_14522__$1 = (function (){var statearr_14556 = state_14522;
(statearr_14556[(12)] = inst_14464);

(statearr_14556[(13)] = inst_14466);

(statearr_14556[(14)] = inst_14463);

(statearr_14556[(15)] = inst_14465);

return statearr_14556;
})();
var statearr_14557_14598 = state_14522__$1;
(statearr_14557_14598[(2)] = null);

(statearr_14557_14598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (10))){
var inst_14464 = (state_14522[(12)]);
var inst_14466 = (state_14522[(13)]);
var inst_14463 = (state_14522[(14)]);
var inst_14465 = (state_14522[(15)]);
var inst_14471 = cljs.core._nth.call(null,inst_14464,inst_14466);
var inst_14472 = cljs.core.async.muxch_STAR_.call(null,inst_14471);
var inst_14473 = cljs.core.async.close_BANG_.call(null,inst_14472);
var inst_14474 = (inst_14466 + (1));
var tmp14552 = inst_14464;
var tmp14553 = inst_14463;
var tmp14554 = inst_14465;
var inst_14463__$1 = tmp14553;
var inst_14464__$1 = tmp14552;
var inst_14465__$1 = tmp14554;
var inst_14466__$1 = inst_14474;
var state_14522__$1 = (function (){var statearr_14558 = state_14522;
(statearr_14558[(12)] = inst_14464__$1);

(statearr_14558[(13)] = inst_14466__$1);

(statearr_14558[(17)] = inst_14473);

(statearr_14558[(14)] = inst_14463__$1);

(statearr_14558[(15)] = inst_14465__$1);

return statearr_14558;
})();
var statearr_14559_14599 = state_14522__$1;
(statearr_14559_14599[(2)] = null);

(statearr_14559_14599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (18))){
var inst_14492 = (state_14522[(2)]);
var state_14522__$1 = state_14522;
var statearr_14560_14600 = state_14522__$1;
(statearr_14560_14600[(2)] = inst_14492);

(statearr_14560_14600[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (8))){
var inst_14466 = (state_14522[(13)]);
var inst_14465 = (state_14522[(15)]);
var inst_14468 = (inst_14466 < inst_14465);
var inst_14469 = inst_14468;
var state_14522__$1 = state_14522;
if(cljs.core.truth_(inst_14469)){
var statearr_14561_14601 = state_14522__$1;
(statearr_14561_14601[(1)] = (10));

} else {
var statearr_14562_14602 = state_14522__$1;
(statearr_14562_14602[(1)] = (11));

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
});})(c__7759__auto___14574,mults,ensure_mult,p))
;
return ((function (switch__7694__auto__,c__7759__auto___14574,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7695__auto__ = null;
var cljs$core$async$state_machine__7695__auto____0 = (function (){
var statearr_14566 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14566[(0)] = cljs$core$async$state_machine__7695__auto__);

(statearr_14566[(1)] = (1));

return statearr_14566;
});
var cljs$core$async$state_machine__7695__auto____1 = (function (state_14522){
while(true){
var ret_value__7696__auto__ = (function (){try{while(true){
var result__7697__auto__ = switch__7694__auto__.call(null,state_14522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7697__auto__;
}
break;
}
}catch (e14567){if((e14567 instanceof Object)){
var ex__7698__auto__ = e14567;
var statearr_14568_14603 = state_14522;
(statearr_14568_14603[(5)] = ex__7698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14604 = state_14522;
state_14522 = G__14604;
continue;
} else {
return ret_value__7696__auto__;
}
break;
}
});
cljs$core$async$state_machine__7695__auto__ = function(state_14522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7695__auto____1.call(this,state_14522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7695__auto____0;
cljs$core$async$state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7695__auto____1;
return cljs$core$async$state_machine__7695__auto__;
})()
;})(switch__7694__auto__,c__7759__auto___14574,mults,ensure_mult,p))
})();
var state__7761__auto__ = (function (){var statearr_14569 = f__7760__auto__.call(null);
(statearr_14569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7759__auto___14574);

return statearr_14569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7761__auto__);
});})(c__7759__auto___14574,mults,ensure_mult,p))
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
var args14605 = [];
var len__5432__auto___14608 = arguments.length;
var i__5433__auto___14609 = (0);
while(true){
if((i__5433__auto___14609 < len__5432__auto___14608)){
args14605.push((arguments[i__5433__auto___14609]));

var G__14610 = (i__5433__auto___14609 + (1));
i__5433__auto___14609 = G__14610;
continue;
} else {
}
break;
}

var G__14607 = args14605.length;
switch (G__14607) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14605.length)].join('')));

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
var args14612 = [];
var len__5432__auto___14615 = arguments.length;
var i__5433__auto___14616 = (0);
while(true){
if((i__5433__auto___14616 < len__5432__auto___14615)){
args14612.push((arguments[i__5433__auto___14616]));

var G__14617 = (i__5433__auto___14616 + (1));
i__5433__auto___14616 = G__14617;
continue;
} else {
}
break;
}

var G__14614 = args14612.length;
switch (G__14614) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14612.length)].join('')));

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
var args14619 = [];
var len__5432__auto___14690 = arguments.length;
var i__5433__auto___14691 = (0);
while(true){
if((i__5433__auto___14691 < len__5432__auto___14690)){
args14619.push((arguments[i__5433__auto___14691]));

var G__14692 = (i__5433__auto___14691 + (1));
i__5433__auto___14691 = G__14692;
continue;
} else {
}
break;
}

var G__14621 = args14619.length;
switch (G__14621) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14619.length)].join('')));

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
var c__7759__auto___14694 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7759__auto___14694,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7760__auto__ = (function (){var switch__7694__auto__ = ((function (c__7759__auto___14694,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14660){
var state_val_14661 = (state_14660[(1)]);
if((state_val_14661 === (7))){
var state_14660__$1 = state_14660;
var statearr_14662_14695 = state_14660__$1;
(statearr_14662_14695[(2)] = null);

(statearr_14662_14695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14661 === (1))){
var state_14660__$1 = state_14660;
var statearr_14663_14696 = state_14660__$1;
(statearr_14663_14696[(2)] = null);

(statearr_14663_14696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14661 === (4))){
var inst_14624 = (state_14660[(7)]);
var inst_14626 = (inst_14624 < cnt);
var state_14660__$1 = state_14660;
if(cljs.core.truth_(inst_14626)){
var statearr_14664_14697 = state_14660__$1;
(statearr_14664_14697[(1)] = (6));

} else {
var statearr_14665_14698 = state_14660__$1;
(statearr_14665_14698[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14661 === (15))){
var inst_14656 = (state_14660[(2)]);
var state_14660__$1 = state_14660;
var statearr_14666_14699 = state_14660__$1;
(statearr_14666_14699[(2)] = inst_14656);

(statearr_14666_14699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14661 === (13))){
var inst_14649 = cljs.core.async.close_BANG_.call(null,out);
var state_14660__$1 = state_14660;
var statearr_14667_14700 = state_14660__$1;
(statearr_14667_14700[(2)] = inst_14649);

(statearr_14667_14700[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14661 === (6))){
var state_14660__$1 = state_14660;
var statearr_14668_14701 = state_14660__$1;
(statearr_14668_14701[(2)] = null);

(statearr_14668_14701[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14661 === (3))){
var inst_14658 = (state_14660[(2)]);
var state_14660__$1 = state_14660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14660__$1,inst_14658);
} else {
if((state_val_14661 === (12))){
var inst_14646 = (state_14660[(8)]);
var inst_14646__$1 = (state_14660[(2)]);
var inst_14647 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14646__$1);
var state_14660__$1 = (function (){var statearr_14669 = state_14660;
(statearr_14669[(8)] = inst_14646__$1);

return statearr_14669;
})();
if(cljs.core.truth_(inst_14647)){
var statearr_14670_14702 = state_14660__$1;
(statearr_14670_14702[(1)] = (13));

} else {
var statearr_14671_14703 = state_14660__$1;
(statearr_14671_14703[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14661 === (2))){
var inst_14623 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14624 = (0);
var state_14660__$1 = (function (){var statearr_14672 = state_14660;
(statearr_14672[(7)] = inst_14624);

(statearr_14672[(9)] = inst_14623);

return statearr_14672;
})();
var statearr_14673_14704 = state_14660__$1;
(statearr_14673_14704[(2)] = null);

(statearr_14673_14704[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14661 === (11))){
var inst_14624 = (state_14660[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14660,(10),Object,null,(9));
var inst_14633 = chs__$1.call(null,inst_14624);
var inst_14634 = done.call(null,inst_14624);
var inst_14635 = cljs.core.async.take_BANG_.call(null,inst_14633,inst_14634);
var state_14660__$1 = state_14660;
var statearr_14674_14705 = state_14660__$1;
(statearr_14674_14705[(2)] = inst_14635);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14660__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14661 === (9))){
var inst_14624 = (state_14660[(7)]);
var inst_14637 = (state_14660[(2)]);
var inst_14638 = (inst_14624 + (1));
var inst_14624__$1 = inst_14638;
var state_14660__$1 = (function (){var statearr_14675 = state_14660;
(statearr_14675[(7)] = inst_14624__$1);

(statearr_14675[(10)] = inst_14637);

return statearr_14675;
})();
var statearr_14676_14706 = state_14660__$1;
(statearr_14676_14706[(2)] = null);

(statearr_14676_14706[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14661 === (5))){
var inst_14644 = (state_14660[(2)]);
var state_14660__$1 = (function (){var statearr_14677 = state_14660;
(statearr_14677[(11)] = inst_14644);

return statearr_14677;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14660__$1,(12),dchan);
} else {
if((state_val_14661 === (14))){
var inst_14646 = (state_14660[(8)]);
var inst_14651 = cljs.core.apply.call(null,f,inst_14646);
var state_14660__$1 = state_14660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14660__$1,(16),out,inst_14651);
} else {
if((state_val_14661 === (16))){
var inst_14653 = (state_14660[(2)]);
var state_14660__$1 = (function (){var statearr_14678 = state_14660;
(statearr_14678[(12)] = inst_14653);

return statearr_14678;
})();
var statearr_14679_14707 = state_14660__$1;
(statearr_14679_14707[(2)] = null);

(statearr_14679_14707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14661 === (10))){
var inst_14628 = (state_14660[(2)]);
var inst_14629 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14660__$1 = (function (){var statearr_14680 = state_14660;
(statearr_14680[(13)] = inst_14628);

return statearr_14680;
})();
var statearr_14681_14708 = state_14660__$1;
(statearr_14681_14708[(2)] = inst_14629);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14660__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14661 === (8))){
var inst_14642 = (state_14660[(2)]);
var state_14660__$1 = state_14660;
var statearr_14682_14709 = state_14660__$1;
(statearr_14682_14709[(2)] = inst_14642);

(statearr_14682_14709[(1)] = (5));


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
});})(c__7759__auto___14694,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7694__auto__,c__7759__auto___14694,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7695__auto__ = null;
var cljs$core$async$state_machine__7695__auto____0 = (function (){
var statearr_14686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14686[(0)] = cljs$core$async$state_machine__7695__auto__);

(statearr_14686[(1)] = (1));

return statearr_14686;
});
var cljs$core$async$state_machine__7695__auto____1 = (function (state_14660){
while(true){
var ret_value__7696__auto__ = (function (){try{while(true){
var result__7697__auto__ = switch__7694__auto__.call(null,state_14660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7697__auto__;
}
break;
}
}catch (e14687){if((e14687 instanceof Object)){
var ex__7698__auto__ = e14687;
var statearr_14688_14710 = state_14660;
(statearr_14688_14710[(5)] = ex__7698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14711 = state_14660;
state_14660 = G__14711;
continue;
} else {
return ret_value__7696__auto__;
}
break;
}
});
cljs$core$async$state_machine__7695__auto__ = function(state_14660){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7695__auto____1.call(this,state_14660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7695__auto____0;
cljs$core$async$state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7695__auto____1;
return cljs$core$async$state_machine__7695__auto__;
})()
;})(switch__7694__auto__,c__7759__auto___14694,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7761__auto__ = (function (){var statearr_14689 = f__7760__auto__.call(null);
(statearr_14689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7759__auto___14694);

return statearr_14689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7761__auto__);
});})(c__7759__auto___14694,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args14713 = [];
var len__5432__auto___14769 = arguments.length;
var i__5433__auto___14770 = (0);
while(true){
if((i__5433__auto___14770 < len__5432__auto___14769)){
args14713.push((arguments[i__5433__auto___14770]));

var G__14771 = (i__5433__auto___14770 + (1));
i__5433__auto___14770 = G__14771;
continue;
} else {
}
break;
}

var G__14715 = args14713.length;
switch (G__14715) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14713.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7759__auto___14773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7759__auto___14773,out){
return (function (){
var f__7760__auto__ = (function (){var switch__7694__auto__ = ((function (c__7759__auto___14773,out){
return (function (state_14745){
var state_val_14746 = (state_14745[(1)]);
if((state_val_14746 === (7))){
var inst_14725 = (state_14745[(7)]);
var inst_14724 = (state_14745[(8)]);
var inst_14724__$1 = (state_14745[(2)]);
var inst_14725__$1 = cljs.core.nth.call(null,inst_14724__$1,(0),null);
var inst_14726 = cljs.core.nth.call(null,inst_14724__$1,(1),null);
var inst_14727 = (inst_14725__$1 == null);
var state_14745__$1 = (function (){var statearr_14747 = state_14745;
(statearr_14747[(7)] = inst_14725__$1);

(statearr_14747[(8)] = inst_14724__$1);

(statearr_14747[(9)] = inst_14726);

return statearr_14747;
})();
if(cljs.core.truth_(inst_14727)){
var statearr_14748_14774 = state_14745__$1;
(statearr_14748_14774[(1)] = (8));

} else {
var statearr_14749_14775 = state_14745__$1;
(statearr_14749_14775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14746 === (1))){
var inst_14716 = cljs.core.vec.call(null,chs);
var inst_14717 = inst_14716;
var state_14745__$1 = (function (){var statearr_14750 = state_14745;
(statearr_14750[(10)] = inst_14717);

return statearr_14750;
})();
var statearr_14751_14776 = state_14745__$1;
(statearr_14751_14776[(2)] = null);

(statearr_14751_14776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14746 === (4))){
var inst_14717 = (state_14745[(10)]);
var state_14745__$1 = state_14745;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14745__$1,(7),inst_14717);
} else {
if((state_val_14746 === (6))){
var inst_14741 = (state_14745[(2)]);
var state_14745__$1 = state_14745;
var statearr_14752_14777 = state_14745__$1;
(statearr_14752_14777[(2)] = inst_14741);

(statearr_14752_14777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14746 === (3))){
var inst_14743 = (state_14745[(2)]);
var state_14745__$1 = state_14745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14745__$1,inst_14743);
} else {
if((state_val_14746 === (2))){
var inst_14717 = (state_14745[(10)]);
var inst_14719 = cljs.core.count.call(null,inst_14717);
var inst_14720 = (inst_14719 > (0));
var state_14745__$1 = state_14745;
if(cljs.core.truth_(inst_14720)){
var statearr_14754_14778 = state_14745__$1;
(statearr_14754_14778[(1)] = (4));

} else {
var statearr_14755_14779 = state_14745__$1;
(statearr_14755_14779[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14746 === (11))){
var inst_14717 = (state_14745[(10)]);
var inst_14734 = (state_14745[(2)]);
var tmp14753 = inst_14717;
var inst_14717__$1 = tmp14753;
var state_14745__$1 = (function (){var statearr_14756 = state_14745;
(statearr_14756[(10)] = inst_14717__$1);

(statearr_14756[(11)] = inst_14734);

return statearr_14756;
})();
var statearr_14757_14780 = state_14745__$1;
(statearr_14757_14780[(2)] = null);

(statearr_14757_14780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14746 === (9))){
var inst_14725 = (state_14745[(7)]);
var state_14745__$1 = state_14745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14745__$1,(11),out,inst_14725);
} else {
if((state_val_14746 === (5))){
var inst_14739 = cljs.core.async.close_BANG_.call(null,out);
var state_14745__$1 = state_14745;
var statearr_14758_14781 = state_14745__$1;
(statearr_14758_14781[(2)] = inst_14739);

(statearr_14758_14781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14746 === (10))){
var inst_14737 = (state_14745[(2)]);
var state_14745__$1 = state_14745;
var statearr_14759_14782 = state_14745__$1;
(statearr_14759_14782[(2)] = inst_14737);

(statearr_14759_14782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14746 === (8))){
var inst_14725 = (state_14745[(7)]);
var inst_14724 = (state_14745[(8)]);
var inst_14726 = (state_14745[(9)]);
var inst_14717 = (state_14745[(10)]);
var inst_14729 = (function (){var cs = inst_14717;
var vec__14722 = inst_14724;
var v = inst_14725;
var c = inst_14726;
return ((function (cs,vec__14722,v,c,inst_14725,inst_14724,inst_14726,inst_14717,state_val_14746,c__7759__auto___14773,out){
return (function (p1__14712_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14712_SHARP_);
});
;})(cs,vec__14722,v,c,inst_14725,inst_14724,inst_14726,inst_14717,state_val_14746,c__7759__auto___14773,out))
})();
var inst_14730 = cljs.core.filterv.call(null,inst_14729,inst_14717);
var inst_14717__$1 = inst_14730;
var state_14745__$1 = (function (){var statearr_14760 = state_14745;
(statearr_14760[(10)] = inst_14717__$1);

return statearr_14760;
})();
var statearr_14761_14783 = state_14745__$1;
(statearr_14761_14783[(2)] = null);

(statearr_14761_14783[(1)] = (2));


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
});})(c__7759__auto___14773,out))
;
return ((function (switch__7694__auto__,c__7759__auto___14773,out){
return (function() {
var cljs$core$async$state_machine__7695__auto__ = null;
var cljs$core$async$state_machine__7695__auto____0 = (function (){
var statearr_14765 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14765[(0)] = cljs$core$async$state_machine__7695__auto__);

(statearr_14765[(1)] = (1));

return statearr_14765;
});
var cljs$core$async$state_machine__7695__auto____1 = (function (state_14745){
while(true){
var ret_value__7696__auto__ = (function (){try{while(true){
var result__7697__auto__ = switch__7694__auto__.call(null,state_14745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7697__auto__;
}
break;
}
}catch (e14766){if((e14766 instanceof Object)){
var ex__7698__auto__ = e14766;
var statearr_14767_14784 = state_14745;
(statearr_14767_14784[(5)] = ex__7698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14785 = state_14745;
state_14745 = G__14785;
continue;
} else {
return ret_value__7696__auto__;
}
break;
}
});
cljs$core$async$state_machine__7695__auto__ = function(state_14745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7695__auto____1.call(this,state_14745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7695__auto____0;
cljs$core$async$state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7695__auto____1;
return cljs$core$async$state_machine__7695__auto__;
})()
;})(switch__7694__auto__,c__7759__auto___14773,out))
})();
var state__7761__auto__ = (function (){var statearr_14768 = f__7760__auto__.call(null);
(statearr_14768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7759__auto___14773);

return statearr_14768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7761__auto__);
});})(c__7759__auto___14773,out))
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
var args14786 = [];
var len__5432__auto___14835 = arguments.length;
var i__5433__auto___14836 = (0);
while(true){
if((i__5433__auto___14836 < len__5432__auto___14835)){
args14786.push((arguments[i__5433__auto___14836]));

var G__14837 = (i__5433__auto___14836 + (1));
i__5433__auto___14836 = G__14837;
continue;
} else {
}
break;
}

var G__14788 = args14786.length;
switch (G__14788) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14786.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7759__auto___14839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7759__auto___14839,out){
return (function (){
var f__7760__auto__ = (function (){var switch__7694__auto__ = ((function (c__7759__auto___14839,out){
return (function (state_14812){
var state_val_14813 = (state_14812[(1)]);
if((state_val_14813 === (7))){
var inst_14794 = (state_14812[(7)]);
var inst_14794__$1 = (state_14812[(2)]);
var inst_14795 = (inst_14794__$1 == null);
var inst_14796 = cljs.core.not.call(null,inst_14795);
var state_14812__$1 = (function (){var statearr_14814 = state_14812;
(statearr_14814[(7)] = inst_14794__$1);

return statearr_14814;
})();
if(inst_14796){
var statearr_14815_14840 = state_14812__$1;
(statearr_14815_14840[(1)] = (8));

} else {
var statearr_14816_14841 = state_14812__$1;
(statearr_14816_14841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (1))){
var inst_14789 = (0);
var state_14812__$1 = (function (){var statearr_14817 = state_14812;
(statearr_14817[(8)] = inst_14789);

return statearr_14817;
})();
var statearr_14818_14842 = state_14812__$1;
(statearr_14818_14842[(2)] = null);

(statearr_14818_14842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (4))){
var state_14812__$1 = state_14812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14812__$1,(7),ch);
} else {
if((state_val_14813 === (6))){
var inst_14807 = (state_14812[(2)]);
var state_14812__$1 = state_14812;
var statearr_14819_14843 = state_14812__$1;
(statearr_14819_14843[(2)] = inst_14807);

(statearr_14819_14843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (3))){
var inst_14809 = (state_14812[(2)]);
var inst_14810 = cljs.core.async.close_BANG_.call(null,out);
var state_14812__$1 = (function (){var statearr_14820 = state_14812;
(statearr_14820[(9)] = inst_14809);

return statearr_14820;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14812__$1,inst_14810);
} else {
if((state_val_14813 === (2))){
var inst_14789 = (state_14812[(8)]);
var inst_14791 = (inst_14789 < n);
var state_14812__$1 = state_14812;
if(cljs.core.truth_(inst_14791)){
var statearr_14821_14844 = state_14812__$1;
(statearr_14821_14844[(1)] = (4));

} else {
var statearr_14822_14845 = state_14812__$1;
(statearr_14822_14845[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (11))){
var inst_14789 = (state_14812[(8)]);
var inst_14799 = (state_14812[(2)]);
var inst_14800 = (inst_14789 + (1));
var inst_14789__$1 = inst_14800;
var state_14812__$1 = (function (){var statearr_14823 = state_14812;
(statearr_14823[(8)] = inst_14789__$1);

(statearr_14823[(10)] = inst_14799);

return statearr_14823;
})();
var statearr_14824_14846 = state_14812__$1;
(statearr_14824_14846[(2)] = null);

(statearr_14824_14846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (9))){
var state_14812__$1 = state_14812;
var statearr_14825_14847 = state_14812__$1;
(statearr_14825_14847[(2)] = null);

(statearr_14825_14847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (5))){
var state_14812__$1 = state_14812;
var statearr_14826_14848 = state_14812__$1;
(statearr_14826_14848[(2)] = null);

(statearr_14826_14848[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (10))){
var inst_14804 = (state_14812[(2)]);
var state_14812__$1 = state_14812;
var statearr_14827_14849 = state_14812__$1;
(statearr_14827_14849[(2)] = inst_14804);

(statearr_14827_14849[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (8))){
var inst_14794 = (state_14812[(7)]);
var state_14812__$1 = state_14812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14812__$1,(11),out,inst_14794);
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
});})(c__7759__auto___14839,out))
;
return ((function (switch__7694__auto__,c__7759__auto___14839,out){
return (function() {
var cljs$core$async$state_machine__7695__auto__ = null;
var cljs$core$async$state_machine__7695__auto____0 = (function (){
var statearr_14831 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14831[(0)] = cljs$core$async$state_machine__7695__auto__);

(statearr_14831[(1)] = (1));

return statearr_14831;
});
var cljs$core$async$state_machine__7695__auto____1 = (function (state_14812){
while(true){
var ret_value__7696__auto__ = (function (){try{while(true){
var result__7697__auto__ = switch__7694__auto__.call(null,state_14812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7697__auto__;
}
break;
}
}catch (e14832){if((e14832 instanceof Object)){
var ex__7698__auto__ = e14832;
var statearr_14833_14850 = state_14812;
(statearr_14833_14850[(5)] = ex__7698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14851 = state_14812;
state_14812 = G__14851;
continue;
} else {
return ret_value__7696__auto__;
}
break;
}
});
cljs$core$async$state_machine__7695__auto__ = function(state_14812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7695__auto____1.call(this,state_14812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7695__auto____0;
cljs$core$async$state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7695__auto____1;
return cljs$core$async$state_machine__7695__auto__;
})()
;})(switch__7694__auto__,c__7759__auto___14839,out))
})();
var state__7761__auto__ = (function (){var statearr_14834 = f__7760__auto__.call(null);
(statearr_14834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7759__auto___14839);

return statearr_14834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7761__auto__);
});})(c__7759__auto___14839,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14859 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14859 = (function (map_LT_,f,ch,meta14860){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14860 = meta14860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14861,meta14860__$1){
var self__ = this;
var _14861__$1 = this;
return (new cljs.core.async.t_cljs$core$async14859(self__.map_LT_,self__.f,self__.ch,meta14860__$1));
});

cljs.core.async.t_cljs$core$async14859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14861){
var self__ = this;
var _14861__$1 = this;
return self__.meta14860;
});

cljs.core.async.t_cljs$core$async14859.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14859.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14859.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14859.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14859.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async14862 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14862 = (function (map_LT_,f,ch,meta14860,_,fn1,meta14863){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14860 = meta14860;
this._ = _;
this.fn1 = fn1;
this.meta14863 = meta14863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14864,meta14863__$1){
var self__ = this;
var _14864__$1 = this;
return (new cljs.core.async.t_cljs$core$async14862(self__.map_LT_,self__.f,self__.ch,self__.meta14860,self__._,self__.fn1,meta14863__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14862.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14864){
var self__ = this;
var _14864__$1 = this;
return self__.meta14863;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14862.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14862.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14862.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14852_SHARP_){
return f1.call(null,(((p1__14852_SHARP_ == null))?null:self__.f.call(null,p1__14852_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14862.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14860","meta14860",-1680663197,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14859","cljs.core.async/t_cljs$core$async14859",-756153402,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14863","meta14863",-1845048757,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14862.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14862";

cljs.core.async.t_cljs$core$async14862.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4972__auto__,writer__4973__auto__,opt__4974__auto__){
return cljs.core._write.call(null,writer__4973__auto__,"cljs.core.async/t_cljs$core$async14862");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async14862 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14862(map_LT___$1,f__$1,ch__$1,meta14860__$1,___$2,fn1__$1,meta14863){
return (new cljs.core.async.t_cljs$core$async14862(map_LT___$1,f__$1,ch__$1,meta14860__$1,___$2,fn1__$1,meta14863));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14862(self__.map_LT_,self__.f,self__.ch,self__.meta14860,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4362__auto__ = ret;
if(cljs.core.truth_(and__4362__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4362__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async14859.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14859.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14859.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14860","meta14860",-1680663197,null)], null);
});

cljs.core.async.t_cljs$core$async14859.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14859.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14859";

cljs.core.async.t_cljs$core$async14859.cljs$lang$ctorPrWriter = (function (this__4972__auto__,writer__4973__auto__,opt__4974__auto__){
return cljs.core._write.call(null,writer__4973__auto__,"cljs.core.async/t_cljs$core$async14859");
});

cljs.core.async.__GT_t_cljs$core$async14859 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14859(map_LT___$1,f__$1,ch__$1,meta14860){
return (new cljs.core.async.t_cljs$core$async14859(map_LT___$1,f__$1,ch__$1,meta14860));
});

}

return (new cljs.core.async.t_cljs$core$async14859(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14868 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14868 = (function (map_GT_,f,ch,meta14869){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta14869 = meta14869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14870,meta14869__$1){
var self__ = this;
var _14870__$1 = this;
return (new cljs.core.async.t_cljs$core$async14868(self__.map_GT_,self__.f,self__.ch,meta14869__$1));
});

cljs.core.async.t_cljs$core$async14868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14870){
var self__ = this;
var _14870__$1 = this;
return self__.meta14869;
});

cljs.core.async.t_cljs$core$async14868.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14868.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14868.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14868.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14868.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14868.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async14868.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14869","meta14869",1296029079,null)], null);
});

cljs.core.async.t_cljs$core$async14868.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14868";

cljs.core.async.t_cljs$core$async14868.cljs$lang$ctorPrWriter = (function (this__4972__auto__,writer__4973__auto__,opt__4974__auto__){
return cljs.core._write.call(null,writer__4973__auto__,"cljs.core.async/t_cljs$core$async14868");
});

cljs.core.async.__GT_t_cljs$core$async14868 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14868(map_GT___$1,f__$1,ch__$1,meta14869){
return (new cljs.core.async.t_cljs$core$async14868(map_GT___$1,f__$1,ch__$1,meta14869));
});

}

return (new cljs.core.async.t_cljs$core$async14868(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async14874 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14874 = (function (filter_GT_,p,ch,meta14875){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta14875 = meta14875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14876,meta14875__$1){
var self__ = this;
var _14876__$1 = this;
return (new cljs.core.async.t_cljs$core$async14874(self__.filter_GT_,self__.p,self__.ch,meta14875__$1));
});

cljs.core.async.t_cljs$core$async14874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14876){
var self__ = this;
var _14876__$1 = this;
return self__.meta14875;
});

cljs.core.async.t_cljs$core$async14874.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14874.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14874.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14874.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14874.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14874.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14874.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14875","meta14875",-1067257563,null)], null);
});

cljs.core.async.t_cljs$core$async14874.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14874";

cljs.core.async.t_cljs$core$async14874.cljs$lang$ctorPrWriter = (function (this__4972__auto__,writer__4973__auto__,opt__4974__auto__){
return cljs.core._write.call(null,writer__4973__auto__,"cljs.core.async/t_cljs$core$async14874");
});

cljs.core.async.__GT_t_cljs$core$async14874 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14874(filter_GT___$1,p__$1,ch__$1,meta14875){
return (new cljs.core.async.t_cljs$core$async14874(filter_GT___$1,p__$1,ch__$1,meta14875));
});

}

return (new cljs.core.async.t_cljs$core$async14874(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args14877 = [];
var len__5432__auto___14921 = arguments.length;
var i__5433__auto___14922 = (0);
while(true){
if((i__5433__auto___14922 < len__5432__auto___14921)){
args14877.push((arguments[i__5433__auto___14922]));

var G__14923 = (i__5433__auto___14922 + (1));
i__5433__auto___14922 = G__14923;
continue;
} else {
}
break;
}

var G__14879 = args14877.length;
switch (G__14879) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14877.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7759__auto___14925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7759__auto___14925,out){
return (function (){
var f__7760__auto__ = (function (){var switch__7694__auto__ = ((function (c__7759__auto___14925,out){
return (function (state_14900){
var state_val_14901 = (state_14900[(1)]);
if((state_val_14901 === (7))){
var inst_14896 = (state_14900[(2)]);
var state_14900__$1 = state_14900;
var statearr_14902_14926 = state_14900__$1;
(statearr_14902_14926[(2)] = inst_14896);

(statearr_14902_14926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (1))){
var state_14900__$1 = state_14900;
var statearr_14903_14927 = state_14900__$1;
(statearr_14903_14927[(2)] = null);

(statearr_14903_14927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (4))){
var inst_14882 = (state_14900[(7)]);
var inst_14882__$1 = (state_14900[(2)]);
var inst_14883 = (inst_14882__$1 == null);
var state_14900__$1 = (function (){var statearr_14904 = state_14900;
(statearr_14904[(7)] = inst_14882__$1);

return statearr_14904;
})();
if(cljs.core.truth_(inst_14883)){
var statearr_14905_14928 = state_14900__$1;
(statearr_14905_14928[(1)] = (5));

} else {
var statearr_14906_14929 = state_14900__$1;
(statearr_14906_14929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (6))){
var inst_14882 = (state_14900[(7)]);
var inst_14887 = p.call(null,inst_14882);
var state_14900__$1 = state_14900;
if(cljs.core.truth_(inst_14887)){
var statearr_14907_14930 = state_14900__$1;
(statearr_14907_14930[(1)] = (8));

} else {
var statearr_14908_14931 = state_14900__$1;
(statearr_14908_14931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (3))){
var inst_14898 = (state_14900[(2)]);
var state_14900__$1 = state_14900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14900__$1,inst_14898);
} else {
if((state_val_14901 === (2))){
var state_14900__$1 = state_14900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14900__$1,(4),ch);
} else {
if((state_val_14901 === (11))){
var inst_14890 = (state_14900[(2)]);
var state_14900__$1 = state_14900;
var statearr_14909_14932 = state_14900__$1;
(statearr_14909_14932[(2)] = inst_14890);

(statearr_14909_14932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (9))){
var state_14900__$1 = state_14900;
var statearr_14910_14933 = state_14900__$1;
(statearr_14910_14933[(2)] = null);

(statearr_14910_14933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (5))){
var inst_14885 = cljs.core.async.close_BANG_.call(null,out);
var state_14900__$1 = state_14900;
var statearr_14911_14934 = state_14900__$1;
(statearr_14911_14934[(2)] = inst_14885);

(statearr_14911_14934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (10))){
var inst_14893 = (state_14900[(2)]);
var state_14900__$1 = (function (){var statearr_14912 = state_14900;
(statearr_14912[(8)] = inst_14893);

return statearr_14912;
})();
var statearr_14913_14935 = state_14900__$1;
(statearr_14913_14935[(2)] = null);

(statearr_14913_14935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (8))){
var inst_14882 = (state_14900[(7)]);
var state_14900__$1 = state_14900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14900__$1,(11),out,inst_14882);
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
});})(c__7759__auto___14925,out))
;
return ((function (switch__7694__auto__,c__7759__auto___14925,out){
return (function() {
var cljs$core$async$state_machine__7695__auto__ = null;
var cljs$core$async$state_machine__7695__auto____0 = (function (){
var statearr_14917 = [null,null,null,null,null,null,null,null,null];
(statearr_14917[(0)] = cljs$core$async$state_machine__7695__auto__);

(statearr_14917[(1)] = (1));

return statearr_14917;
});
var cljs$core$async$state_machine__7695__auto____1 = (function (state_14900){
while(true){
var ret_value__7696__auto__ = (function (){try{while(true){
var result__7697__auto__ = switch__7694__auto__.call(null,state_14900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7697__auto__;
}
break;
}
}catch (e14918){if((e14918 instanceof Object)){
var ex__7698__auto__ = e14918;
var statearr_14919_14936 = state_14900;
(statearr_14919_14936[(5)] = ex__7698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14937 = state_14900;
state_14900 = G__14937;
continue;
} else {
return ret_value__7696__auto__;
}
break;
}
});
cljs$core$async$state_machine__7695__auto__ = function(state_14900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7695__auto____1.call(this,state_14900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7695__auto____0;
cljs$core$async$state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7695__auto____1;
return cljs$core$async$state_machine__7695__auto__;
})()
;})(switch__7694__auto__,c__7759__auto___14925,out))
})();
var state__7761__auto__ = (function (){var statearr_14920 = f__7760__auto__.call(null);
(statearr_14920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7759__auto___14925);

return statearr_14920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7761__auto__);
});})(c__7759__auto___14925,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args14938 = [];
var len__5432__auto___14941 = arguments.length;
var i__5433__auto___14942 = (0);
while(true){
if((i__5433__auto___14942 < len__5432__auto___14941)){
args14938.push((arguments[i__5433__auto___14942]));

var G__14943 = (i__5433__auto___14942 + (1));
i__5433__auto___14942 = G__14943;
continue;
} else {
}
break;
}

var G__14940 = args14938.length;
switch (G__14940) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14938.length)].join('')));

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
var c__7759__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7759__auto__){
return (function (){
var f__7760__auto__ = (function (){var switch__7694__auto__ = ((function (c__7759__auto__){
return (function (state_15110){
var state_val_15111 = (state_15110[(1)]);
if((state_val_15111 === (7))){
var inst_15106 = (state_15110[(2)]);
var state_15110__$1 = state_15110;
var statearr_15112_15153 = state_15110__$1;
(statearr_15112_15153[(2)] = inst_15106);

(statearr_15112_15153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (20))){
var inst_15076 = (state_15110[(7)]);
var inst_15087 = (state_15110[(2)]);
var inst_15088 = cljs.core.next.call(null,inst_15076);
var inst_15062 = inst_15088;
var inst_15063 = null;
var inst_15064 = (0);
var inst_15065 = (0);
var state_15110__$1 = (function (){var statearr_15113 = state_15110;
(statearr_15113[(8)] = inst_15087);

(statearr_15113[(9)] = inst_15064);

(statearr_15113[(10)] = inst_15062);

(statearr_15113[(11)] = inst_15063);

(statearr_15113[(12)] = inst_15065);

return statearr_15113;
})();
var statearr_15114_15154 = state_15110__$1;
(statearr_15114_15154[(2)] = null);

(statearr_15114_15154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (1))){
var state_15110__$1 = state_15110;
var statearr_15115_15155 = state_15110__$1;
(statearr_15115_15155[(2)] = null);

(statearr_15115_15155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (4))){
var inst_15051 = (state_15110[(13)]);
var inst_15051__$1 = (state_15110[(2)]);
var inst_15052 = (inst_15051__$1 == null);
var state_15110__$1 = (function (){var statearr_15116 = state_15110;
(statearr_15116[(13)] = inst_15051__$1);

return statearr_15116;
})();
if(cljs.core.truth_(inst_15052)){
var statearr_15117_15156 = state_15110__$1;
(statearr_15117_15156[(1)] = (5));

} else {
var statearr_15118_15157 = state_15110__$1;
(statearr_15118_15157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (15))){
var state_15110__$1 = state_15110;
var statearr_15122_15158 = state_15110__$1;
(statearr_15122_15158[(2)] = null);

(statearr_15122_15158[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (21))){
var state_15110__$1 = state_15110;
var statearr_15123_15159 = state_15110__$1;
(statearr_15123_15159[(2)] = null);

(statearr_15123_15159[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (13))){
var inst_15064 = (state_15110[(9)]);
var inst_15062 = (state_15110[(10)]);
var inst_15063 = (state_15110[(11)]);
var inst_15065 = (state_15110[(12)]);
var inst_15072 = (state_15110[(2)]);
var inst_15073 = (inst_15065 + (1));
var tmp15119 = inst_15064;
var tmp15120 = inst_15062;
var tmp15121 = inst_15063;
var inst_15062__$1 = tmp15120;
var inst_15063__$1 = tmp15121;
var inst_15064__$1 = tmp15119;
var inst_15065__$1 = inst_15073;
var state_15110__$1 = (function (){var statearr_15124 = state_15110;
(statearr_15124[(14)] = inst_15072);

(statearr_15124[(9)] = inst_15064__$1);

(statearr_15124[(10)] = inst_15062__$1);

(statearr_15124[(11)] = inst_15063__$1);

(statearr_15124[(12)] = inst_15065__$1);

return statearr_15124;
})();
var statearr_15125_15160 = state_15110__$1;
(statearr_15125_15160[(2)] = null);

(statearr_15125_15160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (22))){
var state_15110__$1 = state_15110;
var statearr_15126_15161 = state_15110__$1;
(statearr_15126_15161[(2)] = null);

(statearr_15126_15161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (6))){
var inst_15051 = (state_15110[(13)]);
var inst_15060 = f.call(null,inst_15051);
var inst_15061 = cljs.core.seq.call(null,inst_15060);
var inst_15062 = inst_15061;
var inst_15063 = null;
var inst_15064 = (0);
var inst_15065 = (0);
var state_15110__$1 = (function (){var statearr_15127 = state_15110;
(statearr_15127[(9)] = inst_15064);

(statearr_15127[(10)] = inst_15062);

(statearr_15127[(11)] = inst_15063);

(statearr_15127[(12)] = inst_15065);

return statearr_15127;
})();
var statearr_15128_15162 = state_15110__$1;
(statearr_15128_15162[(2)] = null);

(statearr_15128_15162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (17))){
var inst_15076 = (state_15110[(7)]);
var inst_15080 = cljs.core.chunk_first.call(null,inst_15076);
var inst_15081 = cljs.core.chunk_rest.call(null,inst_15076);
var inst_15082 = cljs.core.count.call(null,inst_15080);
var inst_15062 = inst_15081;
var inst_15063 = inst_15080;
var inst_15064 = inst_15082;
var inst_15065 = (0);
var state_15110__$1 = (function (){var statearr_15129 = state_15110;
(statearr_15129[(9)] = inst_15064);

(statearr_15129[(10)] = inst_15062);

(statearr_15129[(11)] = inst_15063);

(statearr_15129[(12)] = inst_15065);

return statearr_15129;
})();
var statearr_15130_15163 = state_15110__$1;
(statearr_15130_15163[(2)] = null);

(statearr_15130_15163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (3))){
var inst_15108 = (state_15110[(2)]);
var state_15110__$1 = state_15110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15110__$1,inst_15108);
} else {
if((state_val_15111 === (12))){
var inst_15096 = (state_15110[(2)]);
var state_15110__$1 = state_15110;
var statearr_15131_15164 = state_15110__$1;
(statearr_15131_15164[(2)] = inst_15096);

(statearr_15131_15164[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (2))){
var state_15110__$1 = state_15110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15110__$1,(4),in$);
} else {
if((state_val_15111 === (23))){
var inst_15104 = (state_15110[(2)]);
var state_15110__$1 = state_15110;
var statearr_15132_15165 = state_15110__$1;
(statearr_15132_15165[(2)] = inst_15104);

(statearr_15132_15165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (19))){
var inst_15091 = (state_15110[(2)]);
var state_15110__$1 = state_15110;
var statearr_15133_15166 = state_15110__$1;
(statearr_15133_15166[(2)] = inst_15091);

(statearr_15133_15166[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (11))){
var inst_15062 = (state_15110[(10)]);
var inst_15076 = (state_15110[(7)]);
var inst_15076__$1 = cljs.core.seq.call(null,inst_15062);
var state_15110__$1 = (function (){var statearr_15134 = state_15110;
(statearr_15134[(7)] = inst_15076__$1);

return statearr_15134;
})();
if(inst_15076__$1){
var statearr_15135_15167 = state_15110__$1;
(statearr_15135_15167[(1)] = (14));

} else {
var statearr_15136_15168 = state_15110__$1;
(statearr_15136_15168[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (9))){
var inst_15098 = (state_15110[(2)]);
var inst_15099 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15110__$1 = (function (){var statearr_15137 = state_15110;
(statearr_15137[(15)] = inst_15098);

return statearr_15137;
})();
if(cljs.core.truth_(inst_15099)){
var statearr_15138_15169 = state_15110__$1;
(statearr_15138_15169[(1)] = (21));

} else {
var statearr_15139_15170 = state_15110__$1;
(statearr_15139_15170[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (5))){
var inst_15054 = cljs.core.async.close_BANG_.call(null,out);
var state_15110__$1 = state_15110;
var statearr_15140_15171 = state_15110__$1;
(statearr_15140_15171[(2)] = inst_15054);

(statearr_15140_15171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (14))){
var inst_15076 = (state_15110[(7)]);
var inst_15078 = cljs.core.chunked_seq_QMARK_.call(null,inst_15076);
var state_15110__$1 = state_15110;
if(inst_15078){
var statearr_15141_15172 = state_15110__$1;
(statearr_15141_15172[(1)] = (17));

} else {
var statearr_15142_15173 = state_15110__$1;
(statearr_15142_15173[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (16))){
var inst_15094 = (state_15110[(2)]);
var state_15110__$1 = state_15110;
var statearr_15143_15174 = state_15110__$1;
(statearr_15143_15174[(2)] = inst_15094);

(statearr_15143_15174[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (10))){
var inst_15063 = (state_15110[(11)]);
var inst_15065 = (state_15110[(12)]);
var inst_15070 = cljs.core._nth.call(null,inst_15063,inst_15065);
var state_15110__$1 = state_15110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15110__$1,(13),out,inst_15070);
} else {
if((state_val_15111 === (18))){
var inst_15076 = (state_15110[(7)]);
var inst_15085 = cljs.core.first.call(null,inst_15076);
var state_15110__$1 = state_15110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15110__$1,(20),out,inst_15085);
} else {
if((state_val_15111 === (8))){
var inst_15064 = (state_15110[(9)]);
var inst_15065 = (state_15110[(12)]);
var inst_15067 = (inst_15065 < inst_15064);
var inst_15068 = inst_15067;
var state_15110__$1 = state_15110;
if(cljs.core.truth_(inst_15068)){
var statearr_15144_15175 = state_15110__$1;
(statearr_15144_15175[(1)] = (10));

} else {
var statearr_15145_15176 = state_15110__$1;
(statearr_15145_15176[(1)] = (11));

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
});})(c__7759__auto__))
;
return ((function (switch__7694__auto__,c__7759__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7695__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7695__auto____0 = (function (){
var statearr_15149 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15149[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7695__auto__);

(statearr_15149[(1)] = (1));

return statearr_15149;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7695__auto____1 = (function (state_15110){
while(true){
var ret_value__7696__auto__ = (function (){try{while(true){
var result__7697__auto__ = switch__7694__auto__.call(null,state_15110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7697__auto__;
}
break;
}
}catch (e15150){if((e15150 instanceof Object)){
var ex__7698__auto__ = e15150;
var statearr_15151_15177 = state_15110;
(statearr_15151_15177[(5)] = ex__7698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15178 = state_15110;
state_15110 = G__15178;
continue;
} else {
return ret_value__7696__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7695__auto__ = function(state_15110){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7695__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7695__auto____1.call(this,state_15110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7695__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7695__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7695__auto__;
})()
;})(switch__7694__auto__,c__7759__auto__))
})();
var state__7761__auto__ = (function (){var statearr_15152 = f__7760__auto__.call(null);
(statearr_15152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7759__auto__);

return statearr_15152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7761__auto__);
});})(c__7759__auto__))
);

return c__7759__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args15179 = [];
var len__5432__auto___15182 = arguments.length;
var i__5433__auto___15183 = (0);
while(true){
if((i__5433__auto___15183 < len__5432__auto___15182)){
args15179.push((arguments[i__5433__auto___15183]));

var G__15184 = (i__5433__auto___15183 + (1));
i__5433__auto___15183 = G__15184;
continue;
} else {
}
break;
}

var G__15181 = args15179.length;
switch (G__15181) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15179.length)].join('')));

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
var args15186 = [];
var len__5432__auto___15189 = arguments.length;
var i__5433__auto___15190 = (0);
while(true){
if((i__5433__auto___15190 < len__5432__auto___15189)){
args15186.push((arguments[i__5433__auto___15190]));

var G__15191 = (i__5433__auto___15190 + (1));
i__5433__auto___15190 = G__15191;
continue;
} else {
}
break;
}

var G__15188 = args15186.length;
switch (G__15188) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15186.length)].join('')));

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
var args15193 = [];
var len__5432__auto___15244 = arguments.length;
var i__5433__auto___15245 = (0);
while(true){
if((i__5433__auto___15245 < len__5432__auto___15244)){
args15193.push((arguments[i__5433__auto___15245]));

var G__15246 = (i__5433__auto___15245 + (1));
i__5433__auto___15245 = G__15246;
continue;
} else {
}
break;
}

var G__15195 = args15193.length;
switch (G__15195) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15193.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7759__auto___15248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7759__auto___15248,out){
return (function (){
var f__7760__auto__ = (function (){var switch__7694__auto__ = ((function (c__7759__auto___15248,out){
return (function (state_15219){
var state_val_15220 = (state_15219[(1)]);
if((state_val_15220 === (7))){
var inst_15214 = (state_15219[(2)]);
var state_15219__$1 = state_15219;
var statearr_15221_15249 = state_15219__$1;
(statearr_15221_15249[(2)] = inst_15214);

(statearr_15221_15249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15220 === (1))){
var inst_15196 = null;
var state_15219__$1 = (function (){var statearr_15222 = state_15219;
(statearr_15222[(7)] = inst_15196);

return statearr_15222;
})();
var statearr_15223_15250 = state_15219__$1;
(statearr_15223_15250[(2)] = null);

(statearr_15223_15250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15220 === (4))){
var inst_15199 = (state_15219[(8)]);
var inst_15199__$1 = (state_15219[(2)]);
var inst_15200 = (inst_15199__$1 == null);
var inst_15201 = cljs.core.not.call(null,inst_15200);
var state_15219__$1 = (function (){var statearr_15224 = state_15219;
(statearr_15224[(8)] = inst_15199__$1);

return statearr_15224;
})();
if(inst_15201){
var statearr_15225_15251 = state_15219__$1;
(statearr_15225_15251[(1)] = (5));

} else {
var statearr_15226_15252 = state_15219__$1;
(statearr_15226_15252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15220 === (6))){
var state_15219__$1 = state_15219;
var statearr_15227_15253 = state_15219__$1;
(statearr_15227_15253[(2)] = null);

(statearr_15227_15253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15220 === (3))){
var inst_15216 = (state_15219[(2)]);
var inst_15217 = cljs.core.async.close_BANG_.call(null,out);
var state_15219__$1 = (function (){var statearr_15228 = state_15219;
(statearr_15228[(9)] = inst_15216);

return statearr_15228;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15219__$1,inst_15217);
} else {
if((state_val_15220 === (2))){
var state_15219__$1 = state_15219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15219__$1,(4),ch);
} else {
if((state_val_15220 === (11))){
var inst_15199 = (state_15219[(8)]);
var inst_15208 = (state_15219[(2)]);
var inst_15196 = inst_15199;
var state_15219__$1 = (function (){var statearr_15229 = state_15219;
(statearr_15229[(10)] = inst_15208);

(statearr_15229[(7)] = inst_15196);

return statearr_15229;
})();
var statearr_15230_15254 = state_15219__$1;
(statearr_15230_15254[(2)] = null);

(statearr_15230_15254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15220 === (9))){
var inst_15199 = (state_15219[(8)]);
var state_15219__$1 = state_15219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15219__$1,(11),out,inst_15199);
} else {
if((state_val_15220 === (5))){
var inst_15199 = (state_15219[(8)]);
var inst_15196 = (state_15219[(7)]);
var inst_15203 = cljs.core._EQ_.call(null,inst_15199,inst_15196);
var state_15219__$1 = state_15219;
if(inst_15203){
var statearr_15232_15255 = state_15219__$1;
(statearr_15232_15255[(1)] = (8));

} else {
var statearr_15233_15256 = state_15219__$1;
(statearr_15233_15256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15220 === (10))){
var inst_15211 = (state_15219[(2)]);
var state_15219__$1 = state_15219;
var statearr_15234_15257 = state_15219__$1;
(statearr_15234_15257[(2)] = inst_15211);

(statearr_15234_15257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15220 === (8))){
var inst_15196 = (state_15219[(7)]);
var tmp15231 = inst_15196;
var inst_15196__$1 = tmp15231;
var state_15219__$1 = (function (){var statearr_15235 = state_15219;
(statearr_15235[(7)] = inst_15196__$1);

return statearr_15235;
})();
var statearr_15236_15258 = state_15219__$1;
(statearr_15236_15258[(2)] = null);

(statearr_15236_15258[(1)] = (2));


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
});})(c__7759__auto___15248,out))
;
return ((function (switch__7694__auto__,c__7759__auto___15248,out){
return (function() {
var cljs$core$async$state_machine__7695__auto__ = null;
var cljs$core$async$state_machine__7695__auto____0 = (function (){
var statearr_15240 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15240[(0)] = cljs$core$async$state_machine__7695__auto__);

(statearr_15240[(1)] = (1));

return statearr_15240;
});
var cljs$core$async$state_machine__7695__auto____1 = (function (state_15219){
while(true){
var ret_value__7696__auto__ = (function (){try{while(true){
var result__7697__auto__ = switch__7694__auto__.call(null,state_15219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7697__auto__;
}
break;
}
}catch (e15241){if((e15241 instanceof Object)){
var ex__7698__auto__ = e15241;
var statearr_15242_15259 = state_15219;
(statearr_15242_15259[(5)] = ex__7698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15260 = state_15219;
state_15219 = G__15260;
continue;
} else {
return ret_value__7696__auto__;
}
break;
}
});
cljs$core$async$state_machine__7695__auto__ = function(state_15219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7695__auto____1.call(this,state_15219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7695__auto____0;
cljs$core$async$state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7695__auto____1;
return cljs$core$async$state_machine__7695__auto__;
})()
;})(switch__7694__auto__,c__7759__auto___15248,out))
})();
var state__7761__auto__ = (function (){var statearr_15243 = f__7760__auto__.call(null);
(statearr_15243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7759__auto___15248);

return statearr_15243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7761__auto__);
});})(c__7759__auto___15248,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args15261 = [];
var len__5432__auto___15331 = arguments.length;
var i__5433__auto___15332 = (0);
while(true){
if((i__5433__auto___15332 < len__5432__auto___15331)){
args15261.push((arguments[i__5433__auto___15332]));

var G__15333 = (i__5433__auto___15332 + (1));
i__5433__auto___15332 = G__15333;
continue;
} else {
}
break;
}

var G__15263 = args15261.length;
switch (G__15263) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15261.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7759__auto___15335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7759__auto___15335,out){
return (function (){
var f__7760__auto__ = (function (){var switch__7694__auto__ = ((function (c__7759__auto___15335,out){
return (function (state_15301){
var state_val_15302 = (state_15301[(1)]);
if((state_val_15302 === (7))){
var inst_15297 = (state_15301[(2)]);
var state_15301__$1 = state_15301;
var statearr_15303_15336 = state_15301__$1;
(statearr_15303_15336[(2)] = inst_15297);

(statearr_15303_15336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (1))){
var inst_15264 = (new Array(n));
var inst_15265 = inst_15264;
var inst_15266 = (0);
var state_15301__$1 = (function (){var statearr_15304 = state_15301;
(statearr_15304[(7)] = inst_15265);

(statearr_15304[(8)] = inst_15266);

return statearr_15304;
})();
var statearr_15305_15337 = state_15301__$1;
(statearr_15305_15337[(2)] = null);

(statearr_15305_15337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (4))){
var inst_15269 = (state_15301[(9)]);
var inst_15269__$1 = (state_15301[(2)]);
var inst_15270 = (inst_15269__$1 == null);
var inst_15271 = cljs.core.not.call(null,inst_15270);
var state_15301__$1 = (function (){var statearr_15306 = state_15301;
(statearr_15306[(9)] = inst_15269__$1);

return statearr_15306;
})();
if(inst_15271){
var statearr_15307_15338 = state_15301__$1;
(statearr_15307_15338[(1)] = (5));

} else {
var statearr_15308_15339 = state_15301__$1;
(statearr_15308_15339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (15))){
var inst_15291 = (state_15301[(2)]);
var state_15301__$1 = state_15301;
var statearr_15309_15340 = state_15301__$1;
(statearr_15309_15340[(2)] = inst_15291);

(statearr_15309_15340[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (13))){
var state_15301__$1 = state_15301;
var statearr_15310_15341 = state_15301__$1;
(statearr_15310_15341[(2)] = null);

(statearr_15310_15341[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (6))){
var inst_15266 = (state_15301[(8)]);
var inst_15287 = (inst_15266 > (0));
var state_15301__$1 = state_15301;
if(cljs.core.truth_(inst_15287)){
var statearr_15311_15342 = state_15301__$1;
(statearr_15311_15342[(1)] = (12));

} else {
var statearr_15312_15343 = state_15301__$1;
(statearr_15312_15343[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (3))){
var inst_15299 = (state_15301[(2)]);
var state_15301__$1 = state_15301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15301__$1,inst_15299);
} else {
if((state_val_15302 === (12))){
var inst_15265 = (state_15301[(7)]);
var inst_15289 = cljs.core.vec.call(null,inst_15265);
var state_15301__$1 = state_15301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15301__$1,(15),out,inst_15289);
} else {
if((state_val_15302 === (2))){
var state_15301__$1 = state_15301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15301__$1,(4),ch);
} else {
if((state_val_15302 === (11))){
var inst_15281 = (state_15301[(2)]);
var inst_15282 = (new Array(n));
var inst_15265 = inst_15282;
var inst_15266 = (0);
var state_15301__$1 = (function (){var statearr_15313 = state_15301;
(statearr_15313[(7)] = inst_15265);

(statearr_15313[(8)] = inst_15266);

(statearr_15313[(10)] = inst_15281);

return statearr_15313;
})();
var statearr_15314_15344 = state_15301__$1;
(statearr_15314_15344[(2)] = null);

(statearr_15314_15344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (9))){
var inst_15265 = (state_15301[(7)]);
var inst_15279 = cljs.core.vec.call(null,inst_15265);
var state_15301__$1 = state_15301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15301__$1,(11),out,inst_15279);
} else {
if((state_val_15302 === (5))){
var inst_15265 = (state_15301[(7)]);
var inst_15266 = (state_15301[(8)]);
var inst_15269 = (state_15301[(9)]);
var inst_15274 = (state_15301[(11)]);
var inst_15273 = (inst_15265[inst_15266] = inst_15269);
var inst_15274__$1 = (inst_15266 + (1));
var inst_15275 = (inst_15274__$1 < n);
var state_15301__$1 = (function (){var statearr_15315 = state_15301;
(statearr_15315[(12)] = inst_15273);

(statearr_15315[(11)] = inst_15274__$1);

return statearr_15315;
})();
if(cljs.core.truth_(inst_15275)){
var statearr_15316_15345 = state_15301__$1;
(statearr_15316_15345[(1)] = (8));

} else {
var statearr_15317_15346 = state_15301__$1;
(statearr_15317_15346[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (14))){
var inst_15294 = (state_15301[(2)]);
var inst_15295 = cljs.core.async.close_BANG_.call(null,out);
var state_15301__$1 = (function (){var statearr_15319 = state_15301;
(statearr_15319[(13)] = inst_15294);

return statearr_15319;
})();
var statearr_15320_15347 = state_15301__$1;
(statearr_15320_15347[(2)] = inst_15295);

(statearr_15320_15347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (10))){
var inst_15285 = (state_15301[(2)]);
var state_15301__$1 = state_15301;
var statearr_15321_15348 = state_15301__$1;
(statearr_15321_15348[(2)] = inst_15285);

(statearr_15321_15348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (8))){
var inst_15265 = (state_15301[(7)]);
var inst_15274 = (state_15301[(11)]);
var tmp15318 = inst_15265;
var inst_15265__$1 = tmp15318;
var inst_15266 = inst_15274;
var state_15301__$1 = (function (){var statearr_15322 = state_15301;
(statearr_15322[(7)] = inst_15265__$1);

(statearr_15322[(8)] = inst_15266);

return statearr_15322;
})();
var statearr_15323_15349 = state_15301__$1;
(statearr_15323_15349[(2)] = null);

(statearr_15323_15349[(1)] = (2));


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
});})(c__7759__auto___15335,out))
;
return ((function (switch__7694__auto__,c__7759__auto___15335,out){
return (function() {
var cljs$core$async$state_machine__7695__auto__ = null;
var cljs$core$async$state_machine__7695__auto____0 = (function (){
var statearr_15327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15327[(0)] = cljs$core$async$state_machine__7695__auto__);

(statearr_15327[(1)] = (1));

return statearr_15327;
});
var cljs$core$async$state_machine__7695__auto____1 = (function (state_15301){
while(true){
var ret_value__7696__auto__ = (function (){try{while(true){
var result__7697__auto__ = switch__7694__auto__.call(null,state_15301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7697__auto__;
}
break;
}
}catch (e15328){if((e15328 instanceof Object)){
var ex__7698__auto__ = e15328;
var statearr_15329_15350 = state_15301;
(statearr_15329_15350[(5)] = ex__7698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15351 = state_15301;
state_15301 = G__15351;
continue;
} else {
return ret_value__7696__auto__;
}
break;
}
});
cljs$core$async$state_machine__7695__auto__ = function(state_15301){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7695__auto____1.call(this,state_15301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7695__auto____0;
cljs$core$async$state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7695__auto____1;
return cljs$core$async$state_machine__7695__auto__;
})()
;})(switch__7694__auto__,c__7759__auto___15335,out))
})();
var state__7761__auto__ = (function (){var statearr_15330 = f__7760__auto__.call(null);
(statearr_15330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7759__auto___15335);

return statearr_15330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7761__auto__);
});})(c__7759__auto___15335,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args15352 = [];
var len__5432__auto___15426 = arguments.length;
var i__5433__auto___15427 = (0);
while(true){
if((i__5433__auto___15427 < len__5432__auto___15426)){
args15352.push((arguments[i__5433__auto___15427]));

var G__15428 = (i__5433__auto___15427 + (1));
i__5433__auto___15427 = G__15428;
continue;
} else {
}
break;
}

var G__15354 = args15352.length;
switch (G__15354) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15352.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7759__auto___15430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7759__auto___15430,out){
return (function (){
var f__7760__auto__ = (function (){var switch__7694__auto__ = ((function (c__7759__auto___15430,out){
return (function (state_15396){
var state_val_15397 = (state_15396[(1)]);
if((state_val_15397 === (7))){
var inst_15392 = (state_15396[(2)]);
var state_15396__$1 = state_15396;
var statearr_15398_15431 = state_15396__$1;
(statearr_15398_15431[(2)] = inst_15392);

(statearr_15398_15431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15397 === (1))){
var inst_15355 = [];
var inst_15356 = inst_15355;
var inst_15357 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15396__$1 = (function (){var statearr_15399 = state_15396;
(statearr_15399[(7)] = inst_15357);

(statearr_15399[(8)] = inst_15356);

return statearr_15399;
})();
var statearr_15400_15432 = state_15396__$1;
(statearr_15400_15432[(2)] = null);

(statearr_15400_15432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15397 === (4))){
var inst_15360 = (state_15396[(9)]);
var inst_15360__$1 = (state_15396[(2)]);
var inst_15361 = (inst_15360__$1 == null);
var inst_15362 = cljs.core.not.call(null,inst_15361);
var state_15396__$1 = (function (){var statearr_15401 = state_15396;
(statearr_15401[(9)] = inst_15360__$1);

return statearr_15401;
})();
if(inst_15362){
var statearr_15402_15433 = state_15396__$1;
(statearr_15402_15433[(1)] = (5));

} else {
var statearr_15403_15434 = state_15396__$1;
(statearr_15403_15434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15397 === (15))){
var inst_15386 = (state_15396[(2)]);
var state_15396__$1 = state_15396;
var statearr_15404_15435 = state_15396__$1;
(statearr_15404_15435[(2)] = inst_15386);

(statearr_15404_15435[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15397 === (13))){
var state_15396__$1 = state_15396;
var statearr_15405_15436 = state_15396__$1;
(statearr_15405_15436[(2)] = null);

(statearr_15405_15436[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15397 === (6))){
var inst_15356 = (state_15396[(8)]);
var inst_15381 = inst_15356.length;
var inst_15382 = (inst_15381 > (0));
var state_15396__$1 = state_15396;
if(cljs.core.truth_(inst_15382)){
var statearr_15406_15437 = state_15396__$1;
(statearr_15406_15437[(1)] = (12));

} else {
var statearr_15407_15438 = state_15396__$1;
(statearr_15407_15438[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15397 === (3))){
var inst_15394 = (state_15396[(2)]);
var state_15396__$1 = state_15396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15396__$1,inst_15394);
} else {
if((state_val_15397 === (12))){
var inst_15356 = (state_15396[(8)]);
var inst_15384 = cljs.core.vec.call(null,inst_15356);
var state_15396__$1 = state_15396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15396__$1,(15),out,inst_15384);
} else {
if((state_val_15397 === (2))){
var state_15396__$1 = state_15396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15396__$1,(4),ch);
} else {
if((state_val_15397 === (11))){
var inst_15360 = (state_15396[(9)]);
var inst_15364 = (state_15396[(10)]);
var inst_15374 = (state_15396[(2)]);
var inst_15375 = [];
var inst_15376 = inst_15375.push(inst_15360);
var inst_15356 = inst_15375;
var inst_15357 = inst_15364;
var state_15396__$1 = (function (){var statearr_15408 = state_15396;
(statearr_15408[(7)] = inst_15357);

(statearr_15408[(8)] = inst_15356);

(statearr_15408[(11)] = inst_15374);

(statearr_15408[(12)] = inst_15376);

return statearr_15408;
})();
var statearr_15409_15439 = state_15396__$1;
(statearr_15409_15439[(2)] = null);

(statearr_15409_15439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15397 === (9))){
var inst_15356 = (state_15396[(8)]);
var inst_15372 = cljs.core.vec.call(null,inst_15356);
var state_15396__$1 = state_15396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15396__$1,(11),out,inst_15372);
} else {
if((state_val_15397 === (5))){
var inst_15357 = (state_15396[(7)]);
var inst_15360 = (state_15396[(9)]);
var inst_15364 = (state_15396[(10)]);
var inst_15364__$1 = f.call(null,inst_15360);
var inst_15365 = cljs.core._EQ_.call(null,inst_15364__$1,inst_15357);
var inst_15366 = cljs.core.keyword_identical_QMARK_.call(null,inst_15357,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15367 = (inst_15365) || (inst_15366);
var state_15396__$1 = (function (){var statearr_15410 = state_15396;
(statearr_15410[(10)] = inst_15364__$1);

return statearr_15410;
})();
if(cljs.core.truth_(inst_15367)){
var statearr_15411_15440 = state_15396__$1;
(statearr_15411_15440[(1)] = (8));

} else {
var statearr_15412_15441 = state_15396__$1;
(statearr_15412_15441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15397 === (14))){
var inst_15389 = (state_15396[(2)]);
var inst_15390 = cljs.core.async.close_BANG_.call(null,out);
var state_15396__$1 = (function (){var statearr_15414 = state_15396;
(statearr_15414[(13)] = inst_15389);

return statearr_15414;
})();
var statearr_15415_15442 = state_15396__$1;
(statearr_15415_15442[(2)] = inst_15390);

(statearr_15415_15442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15397 === (10))){
var inst_15379 = (state_15396[(2)]);
var state_15396__$1 = state_15396;
var statearr_15416_15443 = state_15396__$1;
(statearr_15416_15443[(2)] = inst_15379);

(statearr_15416_15443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15397 === (8))){
var inst_15360 = (state_15396[(9)]);
var inst_15364 = (state_15396[(10)]);
var inst_15356 = (state_15396[(8)]);
var inst_15369 = inst_15356.push(inst_15360);
var tmp15413 = inst_15356;
var inst_15356__$1 = tmp15413;
var inst_15357 = inst_15364;
var state_15396__$1 = (function (){var statearr_15417 = state_15396;
(statearr_15417[(7)] = inst_15357);

(statearr_15417[(14)] = inst_15369);

(statearr_15417[(8)] = inst_15356__$1);

return statearr_15417;
})();
var statearr_15418_15444 = state_15396__$1;
(statearr_15418_15444[(2)] = null);

(statearr_15418_15444[(1)] = (2));


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
});})(c__7759__auto___15430,out))
;
return ((function (switch__7694__auto__,c__7759__auto___15430,out){
return (function() {
var cljs$core$async$state_machine__7695__auto__ = null;
var cljs$core$async$state_machine__7695__auto____0 = (function (){
var statearr_15422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15422[(0)] = cljs$core$async$state_machine__7695__auto__);

(statearr_15422[(1)] = (1));

return statearr_15422;
});
var cljs$core$async$state_machine__7695__auto____1 = (function (state_15396){
while(true){
var ret_value__7696__auto__ = (function (){try{while(true){
var result__7697__auto__ = switch__7694__auto__.call(null,state_15396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7697__auto__;
}
break;
}
}catch (e15423){if((e15423 instanceof Object)){
var ex__7698__auto__ = e15423;
var statearr_15424_15445 = state_15396;
(statearr_15424_15445[(5)] = ex__7698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15446 = state_15396;
state_15396 = G__15446;
continue;
} else {
return ret_value__7696__auto__;
}
break;
}
});
cljs$core$async$state_machine__7695__auto__ = function(state_15396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7695__auto____1.call(this,state_15396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7695__auto____0;
cljs$core$async$state_machine__7695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7695__auto____1;
return cljs$core$async$state_machine__7695__auto__;
})()
;})(switch__7694__auto__,c__7759__auto___15430,out))
})();
var state__7761__auto__ = (function (){var statearr_15425 = f__7760__auto__.call(null);
(statearr_15425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7759__auto___15430);

return statearr_15425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7761__auto__);
});})(c__7759__auto___15430,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
