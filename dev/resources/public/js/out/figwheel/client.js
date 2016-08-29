// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__21321 = cljs.core._EQ_;
var expr__21322 = (function (){var or__16330__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16330__auto__)){
return or__16330__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__21321.call(null,"true",expr__21322))){
return true;
} else {
if(cljs.core.truth_(pred__21321.call(null,"false",expr__21322))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__21322)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21324__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__21324 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21325__i = 0, G__21325__a = new Array(arguments.length -  0);
while (G__21325__i < G__21325__a.length) {G__21325__a[G__21325__i] = arguments[G__21325__i + 0]; ++G__21325__i;}
  args = new cljs.core.IndexedSeq(G__21325__a,0);
} 
return G__21324__delegate.call(this,args);};
G__21324.cljs$lang$maxFixedArity = 0;
G__21324.cljs$lang$applyTo = (function (arglist__21326){
var args = cljs.core.seq(arglist__21326);
return G__21324__delegate(args);
});
G__21324.cljs$core$IFn$_invoke$arity$variadic = G__21324__delegate;
return G__21324;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__21327){
var map__21330 = p__21327;
var map__21330__$1 = ((((!((map__21330 == null)))?((((map__21330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21330):map__21330);
var message = cljs.core.get.call(null,map__21330__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__21330__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16330__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16330__auto__)){
return or__16330__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16318__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16318__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16318__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19446__auto___21492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19446__auto___21492,ch){
return (function (){
var f__19447__auto__ = (function (){var switch__19425__auto__ = ((function (c__19446__auto___21492,ch){
return (function (state_21461){
var state_val_21462 = (state_21461[(1)]);
if((state_val_21462 === (7))){
var inst_21457 = (state_21461[(2)]);
var state_21461__$1 = state_21461;
var statearr_21463_21493 = state_21461__$1;
(statearr_21463_21493[(2)] = inst_21457);

(statearr_21463_21493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (1))){
var state_21461__$1 = state_21461;
var statearr_21464_21494 = state_21461__$1;
(statearr_21464_21494[(2)] = null);

(statearr_21464_21494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (4))){
var inst_21414 = (state_21461[(7)]);
var inst_21414__$1 = (state_21461[(2)]);
var state_21461__$1 = (function (){var statearr_21465 = state_21461;
(statearr_21465[(7)] = inst_21414__$1);

return statearr_21465;
})();
if(cljs.core.truth_(inst_21414__$1)){
var statearr_21466_21495 = state_21461__$1;
(statearr_21466_21495[(1)] = (5));

} else {
var statearr_21467_21496 = state_21461__$1;
(statearr_21467_21496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (15))){
var inst_21421 = (state_21461[(8)]);
var inst_21436 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_21421);
var inst_21437 = cljs.core.first.call(null,inst_21436);
var inst_21438 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_21437);
var inst_21439 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_21438)].join('');
var inst_21440 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_21439);
var state_21461__$1 = state_21461;
var statearr_21468_21497 = state_21461__$1;
(statearr_21468_21497[(2)] = inst_21440);

(statearr_21468_21497[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (13))){
var inst_21445 = (state_21461[(2)]);
var state_21461__$1 = state_21461;
var statearr_21469_21498 = state_21461__$1;
(statearr_21469_21498[(2)] = inst_21445);

(statearr_21469_21498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (6))){
var state_21461__$1 = state_21461;
var statearr_21470_21499 = state_21461__$1;
(statearr_21470_21499[(2)] = null);

(statearr_21470_21499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (17))){
var inst_21443 = (state_21461[(2)]);
var state_21461__$1 = state_21461;
var statearr_21471_21500 = state_21461__$1;
(statearr_21471_21500[(2)] = inst_21443);

(statearr_21471_21500[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (3))){
var inst_21459 = (state_21461[(2)]);
var state_21461__$1 = state_21461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21461__$1,inst_21459);
} else {
if((state_val_21462 === (12))){
var inst_21420 = (state_21461[(9)]);
var inst_21434 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_21420,opts);
var state_21461__$1 = state_21461;
if(cljs.core.truth_(inst_21434)){
var statearr_21472_21501 = state_21461__$1;
(statearr_21472_21501[(1)] = (15));

} else {
var statearr_21473_21502 = state_21461__$1;
(statearr_21473_21502[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (2))){
var state_21461__$1 = state_21461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21461__$1,(4),ch);
} else {
if((state_val_21462 === (11))){
var inst_21421 = (state_21461[(8)]);
var inst_21426 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21427 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_21421);
var inst_21428 = cljs.core.async.timeout.call(null,(1000));
var inst_21429 = [inst_21427,inst_21428];
var inst_21430 = (new cljs.core.PersistentVector(null,2,(5),inst_21426,inst_21429,null));
var state_21461__$1 = state_21461;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21461__$1,(14),inst_21430);
} else {
if((state_val_21462 === (9))){
var inst_21421 = (state_21461[(8)]);
var inst_21447 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_21448 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_21421);
var inst_21449 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_21448);
var inst_21450 = [cljs.core.str("Not loading: "),cljs.core.str(inst_21449)].join('');
var inst_21451 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_21450);
var state_21461__$1 = (function (){var statearr_21474 = state_21461;
(statearr_21474[(10)] = inst_21447);

return statearr_21474;
})();
var statearr_21475_21503 = state_21461__$1;
(statearr_21475_21503[(2)] = inst_21451);

(statearr_21475_21503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (5))){
var inst_21414 = (state_21461[(7)]);
var inst_21416 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_21417 = (new cljs.core.PersistentArrayMap(null,2,inst_21416,null));
var inst_21418 = (new cljs.core.PersistentHashSet(null,inst_21417,null));
var inst_21419 = figwheel.client.focus_msgs.call(null,inst_21418,inst_21414);
var inst_21420 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_21419);
var inst_21421 = cljs.core.first.call(null,inst_21419);
var inst_21422 = figwheel.client.autoload_QMARK_.call(null);
var state_21461__$1 = (function (){var statearr_21476 = state_21461;
(statearr_21476[(9)] = inst_21420);

(statearr_21476[(8)] = inst_21421);

return statearr_21476;
})();
if(cljs.core.truth_(inst_21422)){
var statearr_21477_21504 = state_21461__$1;
(statearr_21477_21504[(1)] = (8));

} else {
var statearr_21478_21505 = state_21461__$1;
(statearr_21478_21505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (14))){
var inst_21432 = (state_21461[(2)]);
var state_21461__$1 = state_21461;
var statearr_21479_21506 = state_21461__$1;
(statearr_21479_21506[(2)] = inst_21432);

(statearr_21479_21506[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (16))){
var state_21461__$1 = state_21461;
var statearr_21480_21507 = state_21461__$1;
(statearr_21480_21507[(2)] = null);

(statearr_21480_21507[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (10))){
var inst_21453 = (state_21461[(2)]);
var state_21461__$1 = (function (){var statearr_21481 = state_21461;
(statearr_21481[(11)] = inst_21453);

return statearr_21481;
})();
var statearr_21482_21508 = state_21461__$1;
(statearr_21482_21508[(2)] = null);

(statearr_21482_21508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (8))){
var inst_21420 = (state_21461[(9)]);
var inst_21424 = figwheel.client.reload_file_state_QMARK_.call(null,inst_21420,opts);
var state_21461__$1 = state_21461;
if(cljs.core.truth_(inst_21424)){
var statearr_21483_21509 = state_21461__$1;
(statearr_21483_21509[(1)] = (11));

} else {
var statearr_21484_21510 = state_21461__$1;
(statearr_21484_21510[(1)] = (12));

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
});})(c__19446__auto___21492,ch))
;
return ((function (switch__19425__auto__,c__19446__auto___21492,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19426__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19426__auto____0 = (function (){
var statearr_21488 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21488[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19426__auto__);

(statearr_21488[(1)] = (1));

return statearr_21488;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19426__auto____1 = (function (state_21461){
while(true){
var ret_value__19427__auto__ = (function (){try{while(true){
var result__19428__auto__ = switch__19425__auto__.call(null,state_21461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19428__auto__;
}
break;
}
}catch (e21489){if((e21489 instanceof Object)){
var ex__19429__auto__ = e21489;
var statearr_21490_21511 = state_21461;
(statearr_21490_21511[(5)] = ex__19429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21512 = state_21461;
state_21461 = G__21512;
continue;
} else {
return ret_value__19427__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19426__auto__ = function(state_21461){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19426__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19426__auto____1.call(this,state_21461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19426__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19426__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19426__auto__;
})()
;})(switch__19425__auto__,c__19446__auto___21492,ch))
})();
var state__19448__auto__ = (function (){var statearr_21491 = f__19447__auto__.call(null);
(statearr_21491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19446__auto___21492);

return statearr_21491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19448__auto__);
});})(c__19446__auto___21492,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__21513_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__21513_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_21520 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_21520){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_21518 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_21519 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_21518,_STAR_print_newline_STAR_21519,base_path_21520){
return (function() { 
var G__21521__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__21521 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21522__i = 0, G__21522__a = new Array(arguments.length -  0);
while (G__21522__i < G__21522__a.length) {G__21522__a[G__21522__i] = arguments[G__21522__i + 0]; ++G__21522__i;}
  args = new cljs.core.IndexedSeq(G__21522__a,0);
} 
return G__21521__delegate.call(this,args);};
G__21521.cljs$lang$maxFixedArity = 0;
G__21521.cljs$lang$applyTo = (function (arglist__21523){
var args = cljs.core.seq(arglist__21523);
return G__21521__delegate(args);
});
G__21521.cljs$core$IFn$_invoke$arity$variadic = G__21521__delegate;
return G__21521;
})()
;})(_STAR_print_fn_STAR_21518,_STAR_print_newline_STAR_21519,base_path_21520))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_21519;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_21518;
}}catch (e21517){if((e21517 instanceof Error)){
var e = e21517;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_21520], null));
} else {
var e = e21517;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_21520))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__21524){
var map__21531 = p__21524;
var map__21531__$1 = ((((!((map__21531 == null)))?((((map__21531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21531):map__21531);
var opts = map__21531__$1;
var build_id = cljs.core.get.call(null,map__21531__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__21531,map__21531__$1,opts,build_id){
return (function (p__21533){
var vec__21534 = p__21533;
var map__21535 = cljs.core.nth.call(null,vec__21534,(0),null);
var map__21535__$1 = ((((!((map__21535 == null)))?((((map__21535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21535):map__21535);
var msg = map__21535__$1;
var msg_name = cljs.core.get.call(null,map__21535__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__21534,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__21534,map__21535,map__21535__$1,msg,msg_name,_,map__21531,map__21531__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__21534,map__21535,map__21535__$1,msg,msg_name,_,map__21531,map__21531__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__21531,map__21531__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__21541){
var vec__21542 = p__21541;
var map__21543 = cljs.core.nth.call(null,vec__21542,(0),null);
var map__21543__$1 = ((((!((map__21543 == null)))?((((map__21543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21543):map__21543);
var msg = map__21543__$1;
var msg_name = cljs.core.get.call(null,map__21543__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__21542,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__21545){
var map__21555 = p__21545;
var map__21555__$1 = ((((!((map__21555 == null)))?((((map__21555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21555):map__21555);
var on_compile_warning = cljs.core.get.call(null,map__21555__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__21555__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__21555,map__21555__$1,on_compile_warning,on_compile_fail){
return (function (p__21557){
var vec__21558 = p__21557;
var map__21559 = cljs.core.nth.call(null,vec__21558,(0),null);
var map__21559__$1 = ((((!((map__21559 == null)))?((((map__21559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21559):map__21559);
var msg = map__21559__$1;
var msg_name = cljs.core.get.call(null,map__21559__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__21558,(1));
var pred__21561 = cljs.core._EQ_;
var expr__21562 = msg_name;
if(cljs.core.truth_(pred__21561.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__21562))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__21561.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__21562))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__21555,map__21555__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19446__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19447__auto__ = (function (){var switch__19425__auto__ = ((function (c__19446__auto__,msg_hist,msg_names,msg){
return (function (state_21778){
var state_val_21779 = (state_21778[(1)]);
if((state_val_21779 === (7))){
var inst_21702 = (state_21778[(2)]);
var state_21778__$1 = state_21778;
if(cljs.core.truth_(inst_21702)){
var statearr_21780_21826 = state_21778__$1;
(statearr_21780_21826[(1)] = (8));

} else {
var statearr_21781_21827 = state_21778__$1;
(statearr_21781_21827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (20))){
var inst_21772 = (state_21778[(2)]);
var state_21778__$1 = state_21778;
var statearr_21782_21828 = state_21778__$1;
(statearr_21782_21828[(2)] = inst_21772);

(statearr_21782_21828[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (27))){
var inst_21768 = (state_21778[(2)]);
var state_21778__$1 = state_21778;
var statearr_21783_21829 = state_21778__$1;
(statearr_21783_21829[(2)] = inst_21768);

(statearr_21783_21829[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (1))){
var inst_21695 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_21778__$1 = state_21778;
if(cljs.core.truth_(inst_21695)){
var statearr_21784_21830 = state_21778__$1;
(statearr_21784_21830[(1)] = (2));

} else {
var statearr_21785_21831 = state_21778__$1;
(statearr_21785_21831[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (24))){
var inst_21770 = (state_21778[(2)]);
var state_21778__$1 = state_21778;
var statearr_21786_21832 = state_21778__$1;
(statearr_21786_21832[(2)] = inst_21770);

(statearr_21786_21832[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (4))){
var inst_21776 = (state_21778[(2)]);
var state_21778__$1 = state_21778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21778__$1,inst_21776);
} else {
if((state_val_21779 === (15))){
var inst_21774 = (state_21778[(2)]);
var state_21778__$1 = state_21778;
var statearr_21787_21833 = state_21778__$1;
(statearr_21787_21833[(2)] = inst_21774);

(statearr_21787_21833[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (21))){
var inst_21733 = (state_21778[(2)]);
var state_21778__$1 = state_21778;
var statearr_21788_21834 = state_21778__$1;
(statearr_21788_21834[(2)] = inst_21733);

(statearr_21788_21834[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (31))){
var inst_21757 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_21778__$1 = state_21778;
if(cljs.core.truth_(inst_21757)){
var statearr_21789_21835 = state_21778__$1;
(statearr_21789_21835[(1)] = (34));

} else {
var statearr_21790_21836 = state_21778__$1;
(statearr_21790_21836[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (32))){
var inst_21766 = (state_21778[(2)]);
var state_21778__$1 = state_21778;
var statearr_21791_21837 = state_21778__$1;
(statearr_21791_21837[(2)] = inst_21766);

(statearr_21791_21837[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (33))){
var inst_21755 = (state_21778[(2)]);
var state_21778__$1 = state_21778;
var statearr_21792_21838 = state_21778__$1;
(statearr_21792_21838[(2)] = inst_21755);

(statearr_21792_21838[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (13))){
var inst_21716 = figwheel.client.heads_up.clear.call(null);
var state_21778__$1 = state_21778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21778__$1,(16),inst_21716);
} else {
if((state_val_21779 === (22))){
var inst_21737 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_21738 = figwheel.client.heads_up.append_message.call(null,inst_21737);
var state_21778__$1 = state_21778;
var statearr_21793_21839 = state_21778__$1;
(statearr_21793_21839[(2)] = inst_21738);

(statearr_21793_21839[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (36))){
var inst_21764 = (state_21778[(2)]);
var state_21778__$1 = state_21778;
var statearr_21794_21840 = state_21778__$1;
(statearr_21794_21840[(2)] = inst_21764);

(statearr_21794_21840[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (29))){
var inst_21748 = (state_21778[(2)]);
var state_21778__$1 = state_21778;
var statearr_21795_21841 = state_21778__$1;
(statearr_21795_21841[(2)] = inst_21748);

(statearr_21795_21841[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (6))){
var inst_21697 = (state_21778[(7)]);
var state_21778__$1 = state_21778;
var statearr_21796_21842 = state_21778__$1;
(statearr_21796_21842[(2)] = inst_21697);

(statearr_21796_21842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (28))){
var inst_21744 = (state_21778[(2)]);
var inst_21745 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_21746 = figwheel.client.heads_up.display_warning.call(null,inst_21745);
var state_21778__$1 = (function (){var statearr_21797 = state_21778;
(statearr_21797[(8)] = inst_21744);

return statearr_21797;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21778__$1,(29),inst_21746);
} else {
if((state_val_21779 === (25))){
var inst_21742 = figwheel.client.heads_up.clear.call(null);
var state_21778__$1 = state_21778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21778__$1,(28),inst_21742);
} else {
if((state_val_21779 === (34))){
var inst_21759 = figwheel.client.heads_up.flash_loaded.call(null);
var state_21778__$1 = state_21778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21778__$1,(37),inst_21759);
} else {
if((state_val_21779 === (17))){
var inst_21724 = (state_21778[(2)]);
var state_21778__$1 = state_21778;
var statearr_21798_21843 = state_21778__$1;
(statearr_21798_21843[(2)] = inst_21724);

(statearr_21798_21843[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (3))){
var inst_21714 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_21778__$1 = state_21778;
if(cljs.core.truth_(inst_21714)){
var statearr_21799_21844 = state_21778__$1;
(statearr_21799_21844[(1)] = (13));

} else {
var statearr_21800_21845 = state_21778__$1;
(statearr_21800_21845[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (12))){
var inst_21710 = (state_21778[(2)]);
var state_21778__$1 = state_21778;
var statearr_21801_21846 = state_21778__$1;
(statearr_21801_21846[(2)] = inst_21710);

(statearr_21801_21846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (2))){
var inst_21697 = (state_21778[(7)]);
var inst_21697__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_21778__$1 = (function (){var statearr_21802 = state_21778;
(statearr_21802[(7)] = inst_21697__$1);

return statearr_21802;
})();
if(cljs.core.truth_(inst_21697__$1)){
var statearr_21803_21847 = state_21778__$1;
(statearr_21803_21847[(1)] = (5));

} else {
var statearr_21804_21848 = state_21778__$1;
(statearr_21804_21848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (23))){
var inst_21740 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_21778__$1 = state_21778;
if(cljs.core.truth_(inst_21740)){
var statearr_21805_21849 = state_21778__$1;
(statearr_21805_21849[(1)] = (25));

} else {
var statearr_21806_21850 = state_21778__$1;
(statearr_21806_21850[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (35))){
var state_21778__$1 = state_21778;
var statearr_21807_21851 = state_21778__$1;
(statearr_21807_21851[(2)] = null);

(statearr_21807_21851[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (19))){
var inst_21735 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_21778__$1 = state_21778;
if(cljs.core.truth_(inst_21735)){
var statearr_21808_21852 = state_21778__$1;
(statearr_21808_21852[(1)] = (22));

} else {
var statearr_21809_21853 = state_21778__$1;
(statearr_21809_21853[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (11))){
var inst_21706 = (state_21778[(2)]);
var state_21778__$1 = state_21778;
var statearr_21810_21854 = state_21778__$1;
(statearr_21810_21854[(2)] = inst_21706);

(statearr_21810_21854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (9))){
var inst_21708 = figwheel.client.heads_up.clear.call(null);
var state_21778__$1 = state_21778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21778__$1,(12),inst_21708);
} else {
if((state_val_21779 === (5))){
var inst_21699 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_21778__$1 = state_21778;
var statearr_21811_21855 = state_21778__$1;
(statearr_21811_21855[(2)] = inst_21699);

(statearr_21811_21855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (14))){
var inst_21726 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_21778__$1 = state_21778;
if(cljs.core.truth_(inst_21726)){
var statearr_21812_21856 = state_21778__$1;
(statearr_21812_21856[(1)] = (18));

} else {
var statearr_21813_21857 = state_21778__$1;
(statearr_21813_21857[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (26))){
var inst_21750 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_21778__$1 = state_21778;
if(cljs.core.truth_(inst_21750)){
var statearr_21814_21858 = state_21778__$1;
(statearr_21814_21858[(1)] = (30));

} else {
var statearr_21815_21859 = state_21778__$1;
(statearr_21815_21859[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (16))){
var inst_21718 = (state_21778[(2)]);
var inst_21719 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_21720 = figwheel.client.format_messages.call(null,inst_21719);
var inst_21721 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_21722 = figwheel.client.heads_up.display_error.call(null,inst_21720,inst_21721);
var state_21778__$1 = (function (){var statearr_21816 = state_21778;
(statearr_21816[(9)] = inst_21718);

return statearr_21816;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21778__$1,(17),inst_21722);
} else {
if((state_val_21779 === (30))){
var inst_21752 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_21753 = figwheel.client.heads_up.display_warning.call(null,inst_21752);
var state_21778__$1 = state_21778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21778__$1,(33),inst_21753);
} else {
if((state_val_21779 === (10))){
var inst_21712 = (state_21778[(2)]);
var state_21778__$1 = state_21778;
var statearr_21817_21860 = state_21778__$1;
(statearr_21817_21860[(2)] = inst_21712);

(statearr_21817_21860[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (18))){
var inst_21728 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_21729 = figwheel.client.format_messages.call(null,inst_21728);
var inst_21730 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_21731 = figwheel.client.heads_up.display_error.call(null,inst_21729,inst_21730);
var state_21778__$1 = state_21778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21778__$1,(21),inst_21731);
} else {
if((state_val_21779 === (37))){
var inst_21761 = (state_21778[(2)]);
var state_21778__$1 = state_21778;
var statearr_21818_21861 = state_21778__$1;
(statearr_21818_21861[(2)] = inst_21761);

(statearr_21818_21861[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (8))){
var inst_21704 = figwheel.client.heads_up.flash_loaded.call(null);
var state_21778__$1 = state_21778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21778__$1,(11),inst_21704);
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
});})(c__19446__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19425__auto__,c__19446__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19426__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19426__auto____0 = (function (){
var statearr_21822 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21822[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19426__auto__);

(statearr_21822[(1)] = (1));

return statearr_21822;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19426__auto____1 = (function (state_21778){
while(true){
var ret_value__19427__auto__ = (function (){try{while(true){
var result__19428__auto__ = switch__19425__auto__.call(null,state_21778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19428__auto__;
}
break;
}
}catch (e21823){if((e21823 instanceof Object)){
var ex__19429__auto__ = e21823;
var statearr_21824_21862 = state_21778;
(statearr_21824_21862[(5)] = ex__19429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21863 = state_21778;
state_21778 = G__21863;
continue;
} else {
return ret_value__19427__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19426__auto__ = function(state_21778){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19426__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19426__auto____1.call(this,state_21778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19426__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19426__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19426__auto__;
})()
;})(switch__19425__auto__,c__19446__auto__,msg_hist,msg_names,msg))
})();
var state__19448__auto__ = (function (){var statearr_21825 = f__19447__auto__.call(null);
(statearr_21825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19446__auto__);

return statearr_21825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19448__auto__);
});})(c__19446__auto__,msg_hist,msg_names,msg))
);

return c__19446__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19446__auto___21926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19446__auto___21926,ch){
return (function (){
var f__19447__auto__ = (function (){var switch__19425__auto__ = ((function (c__19446__auto___21926,ch){
return (function (state_21909){
var state_val_21910 = (state_21909[(1)]);
if((state_val_21910 === (1))){
var state_21909__$1 = state_21909;
var statearr_21911_21927 = state_21909__$1;
(statearr_21911_21927[(2)] = null);

(statearr_21911_21927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21910 === (2))){
var state_21909__$1 = state_21909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21909__$1,(4),ch);
} else {
if((state_val_21910 === (3))){
var inst_21907 = (state_21909[(2)]);
var state_21909__$1 = state_21909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21909__$1,inst_21907);
} else {
if((state_val_21910 === (4))){
var inst_21897 = (state_21909[(7)]);
var inst_21897__$1 = (state_21909[(2)]);
var state_21909__$1 = (function (){var statearr_21912 = state_21909;
(statearr_21912[(7)] = inst_21897__$1);

return statearr_21912;
})();
if(cljs.core.truth_(inst_21897__$1)){
var statearr_21913_21928 = state_21909__$1;
(statearr_21913_21928[(1)] = (5));

} else {
var statearr_21914_21929 = state_21909__$1;
(statearr_21914_21929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21910 === (5))){
var inst_21897 = (state_21909[(7)]);
var inst_21899 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_21897);
var state_21909__$1 = state_21909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21909__$1,(8),inst_21899);
} else {
if((state_val_21910 === (6))){
var state_21909__$1 = state_21909;
var statearr_21915_21930 = state_21909__$1;
(statearr_21915_21930[(2)] = null);

(statearr_21915_21930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21910 === (7))){
var inst_21905 = (state_21909[(2)]);
var state_21909__$1 = state_21909;
var statearr_21916_21931 = state_21909__$1;
(statearr_21916_21931[(2)] = inst_21905);

(statearr_21916_21931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21910 === (8))){
var inst_21901 = (state_21909[(2)]);
var state_21909__$1 = (function (){var statearr_21917 = state_21909;
(statearr_21917[(8)] = inst_21901);

return statearr_21917;
})();
var statearr_21918_21932 = state_21909__$1;
(statearr_21918_21932[(2)] = null);

(statearr_21918_21932[(1)] = (2));


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
});})(c__19446__auto___21926,ch))
;
return ((function (switch__19425__auto__,c__19446__auto___21926,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19426__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19426__auto____0 = (function (){
var statearr_21922 = [null,null,null,null,null,null,null,null,null];
(statearr_21922[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19426__auto__);

(statearr_21922[(1)] = (1));

return statearr_21922;
});
var figwheel$client$heads_up_plugin_$_state_machine__19426__auto____1 = (function (state_21909){
while(true){
var ret_value__19427__auto__ = (function (){try{while(true){
var result__19428__auto__ = switch__19425__auto__.call(null,state_21909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19428__auto__;
}
break;
}
}catch (e21923){if((e21923 instanceof Object)){
var ex__19429__auto__ = e21923;
var statearr_21924_21933 = state_21909;
(statearr_21924_21933[(5)] = ex__19429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21934 = state_21909;
state_21909 = G__21934;
continue;
} else {
return ret_value__19427__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19426__auto__ = function(state_21909){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19426__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19426__auto____1.call(this,state_21909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19426__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19426__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19426__auto__;
})()
;})(switch__19425__auto__,c__19446__auto___21926,ch))
})();
var state__19448__auto__ = (function (){var statearr_21925 = f__19447__auto__.call(null);
(statearr_21925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19446__auto___21926);

return statearr_21925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19448__auto__);
});})(c__19446__auto___21926,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19446__auto__){
return (function (){
var f__19447__auto__ = (function (){var switch__19425__auto__ = ((function (c__19446__auto__){
return (function (state_21955){
var state_val_21956 = (state_21955[(1)]);
if((state_val_21956 === (1))){
var inst_21950 = cljs.core.async.timeout.call(null,(3000));
var state_21955__$1 = state_21955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21955__$1,(2),inst_21950);
} else {
if((state_val_21956 === (2))){
var inst_21952 = (state_21955[(2)]);
var inst_21953 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_21955__$1 = (function (){var statearr_21957 = state_21955;
(statearr_21957[(7)] = inst_21952);

return statearr_21957;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21955__$1,inst_21953);
} else {
return null;
}
}
});})(c__19446__auto__))
;
return ((function (switch__19425__auto__,c__19446__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19426__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19426__auto____0 = (function (){
var statearr_21961 = [null,null,null,null,null,null,null,null];
(statearr_21961[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19426__auto__);

(statearr_21961[(1)] = (1));

return statearr_21961;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19426__auto____1 = (function (state_21955){
while(true){
var ret_value__19427__auto__ = (function (){try{while(true){
var result__19428__auto__ = switch__19425__auto__.call(null,state_21955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19428__auto__;
}
break;
}
}catch (e21962){if((e21962 instanceof Object)){
var ex__19429__auto__ = e21962;
var statearr_21963_21965 = state_21955;
(statearr_21963_21965[(5)] = ex__19429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21966 = state_21955;
state_21955 = G__21966;
continue;
} else {
return ret_value__19427__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19426__auto__ = function(state_21955){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19426__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19426__auto____1.call(this,state_21955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19426__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19426__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19426__auto__;
})()
;})(switch__19425__auto__,c__19446__auto__))
})();
var state__19448__auto__ = (function (){var statearr_21964 = f__19447__auto__.call(null);
(statearr_21964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19446__auto__);

return statearr_21964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19448__auto__);
});})(c__19446__auto__))
);

return c__19446__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__21967){
var map__21974 = p__21967;
var map__21974__$1 = ((((!((map__21974 == null)))?((((map__21974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21974):map__21974);
var ed = map__21974__$1;
var formatted_exception = cljs.core.get.call(null,map__21974__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__21974__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__21974__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__21976_21980 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__21977_21981 = null;
var count__21978_21982 = (0);
var i__21979_21983 = (0);
while(true){
if((i__21979_21983 < count__21978_21982)){
var msg_21984 = cljs.core._nth.call(null,chunk__21977_21981,i__21979_21983);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_21984);

var G__21985 = seq__21976_21980;
var G__21986 = chunk__21977_21981;
var G__21987 = count__21978_21982;
var G__21988 = (i__21979_21983 + (1));
seq__21976_21980 = G__21985;
chunk__21977_21981 = G__21986;
count__21978_21982 = G__21987;
i__21979_21983 = G__21988;
continue;
} else {
var temp__4425__auto___21989 = cljs.core.seq.call(null,seq__21976_21980);
if(temp__4425__auto___21989){
var seq__21976_21990__$1 = temp__4425__auto___21989;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21976_21990__$1)){
var c__17133__auto___21991 = cljs.core.chunk_first.call(null,seq__21976_21990__$1);
var G__21992 = cljs.core.chunk_rest.call(null,seq__21976_21990__$1);
var G__21993 = c__17133__auto___21991;
var G__21994 = cljs.core.count.call(null,c__17133__auto___21991);
var G__21995 = (0);
seq__21976_21980 = G__21992;
chunk__21977_21981 = G__21993;
count__21978_21982 = G__21994;
i__21979_21983 = G__21995;
continue;
} else {
var msg_21996 = cljs.core.first.call(null,seq__21976_21990__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_21996);

var G__21997 = cljs.core.next.call(null,seq__21976_21990__$1);
var G__21998 = null;
var G__21999 = (0);
var G__22000 = (0);
seq__21976_21980 = G__21997;
chunk__21977_21981 = G__21998;
count__21978_21982 = G__21999;
i__21979_21983 = G__22000;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__22001){
var map__22004 = p__22001;
var map__22004__$1 = ((((!((map__22004 == null)))?((((map__22004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22004):map__22004);
var w = map__22004__$1;
var message = cljs.core.get.call(null,map__22004__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16318__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16318__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16318__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__22012 = cljs.core.seq.call(null,plugins);
var chunk__22013 = null;
var count__22014 = (0);
var i__22015 = (0);
while(true){
if((i__22015 < count__22014)){
var vec__22016 = cljs.core._nth.call(null,chunk__22013,i__22015);
var k = cljs.core.nth.call(null,vec__22016,(0),null);
var plugin = cljs.core.nth.call(null,vec__22016,(1),null);
if(cljs.core.truth_(plugin)){
var pl_22018 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__22012,chunk__22013,count__22014,i__22015,pl_22018,vec__22016,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_22018.call(null,msg_hist);
});})(seq__22012,chunk__22013,count__22014,i__22015,pl_22018,vec__22016,k,plugin))
);
} else {
}

var G__22019 = seq__22012;
var G__22020 = chunk__22013;
var G__22021 = count__22014;
var G__22022 = (i__22015 + (1));
seq__22012 = G__22019;
chunk__22013 = G__22020;
count__22014 = G__22021;
i__22015 = G__22022;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22012);
if(temp__4425__auto__){
var seq__22012__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22012__$1)){
var c__17133__auto__ = cljs.core.chunk_first.call(null,seq__22012__$1);
var G__22023 = cljs.core.chunk_rest.call(null,seq__22012__$1);
var G__22024 = c__17133__auto__;
var G__22025 = cljs.core.count.call(null,c__17133__auto__);
var G__22026 = (0);
seq__22012 = G__22023;
chunk__22013 = G__22024;
count__22014 = G__22025;
i__22015 = G__22026;
continue;
} else {
var vec__22017 = cljs.core.first.call(null,seq__22012__$1);
var k = cljs.core.nth.call(null,vec__22017,(0),null);
var plugin = cljs.core.nth.call(null,vec__22017,(1),null);
if(cljs.core.truth_(plugin)){
var pl_22027 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__22012,chunk__22013,count__22014,i__22015,pl_22027,vec__22017,k,plugin,seq__22012__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_22027.call(null,msg_hist);
});})(seq__22012,chunk__22013,count__22014,i__22015,pl_22027,vec__22017,k,plugin,seq__22012__$1,temp__4425__auto__))
);
} else {
}

var G__22028 = cljs.core.next.call(null,seq__22012__$1);
var G__22029 = null;
var G__22030 = (0);
var G__22031 = (0);
seq__22012 = G__22028;
chunk__22013 = G__22029;
count__22014 = G__22030;
i__22015 = G__22031;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args22032 = [];
var len__17388__auto___22035 = arguments.length;
var i__17389__auto___22036 = (0);
while(true){
if((i__17389__auto___22036 < len__17388__auto___22035)){
args22032.push((arguments[i__17389__auto___22036]));

var G__22037 = (i__17389__auto___22036 + (1));
i__17389__auto___22036 = G__22037;
continue;
} else {
}
break;
}

var G__22034 = args22032.length;
switch (G__22034) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22032.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17395__auto__ = [];
var len__17388__auto___22043 = arguments.length;
var i__17389__auto___22044 = (0);
while(true){
if((i__17389__auto___22044 < len__17388__auto___22043)){
args__17395__auto__.push((arguments[i__17389__auto___22044]));

var G__22045 = (i__17389__auto___22044 + (1));
i__17389__auto___22044 = G__22045;
continue;
} else {
}
break;
}

var argseq__17396__auto__ = ((((0) < args__17395__auto__.length))?(new cljs.core.IndexedSeq(args__17395__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17396__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__22040){
var map__22041 = p__22040;
var map__22041__$1 = ((((!((map__22041 == null)))?((((map__22041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22041):map__22041);
var opts = map__22041__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq22039){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22039));
});

//# sourceMappingURL=client.js.map?rel=1446810621928