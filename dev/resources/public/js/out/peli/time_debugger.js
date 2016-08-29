// Compiled by ClojureScript 1.7.145 {}
goog.provide('peli.time_debugger');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');

/**
 * @interface
 */
peli.time_debugger.IDebugAdaptor = function(){};

peli.time_debugger._transform = (function peli$time_debugger$_transform(this$,event){
if((!((this$ == null))) && (!((this$.peli$time_debugger$IDebugAdaptor$_transform$arity$2 == null)))){
return this$.peli$time_debugger$IDebugAdaptor$_transform$arity$2(this$,event);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.time_debugger._transform[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$,event);
} else {
var m__16986__auto____$1 = (peli.time_debugger._transform["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IDebugAdaptor.-transform",this$);
}
}
}
});

peli.time_debugger._display = (function peli$time_debugger$_display(this$,prev_event,cur_event){
if((!((this$ == null))) && (!((this$.peli$time_debugger$IDebugAdaptor$_display$arity$3 == null)))){
return this$.peli$time_debugger$IDebugAdaptor$_display$arity$3(this$,prev_event,cur_event);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.time_debugger._display[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$,prev_event,cur_event);
} else {
var m__16986__auto____$1 = (peli.time_debugger._display["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$,prev_event,cur_event);
} else {
throw cljs.core.missing_protocol.call(null,"IDebugAdaptor.-display",this$);
}
}
}
});

peli.time_debugger._reset_state_BANG_ = (function peli$time_debugger$_reset_state_BANG_(this$,event){
if((!((this$ == null))) && (!((this$.peli$time_debugger$IDebugAdaptor$_reset_state_BANG_$arity$2 == null)))){
return this$.peli$time_debugger$IDebugAdaptor$_reset_state_BANG_$arity$2(this$,event);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.time_debugger._reset_state_BANG_[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$,event);
} else {
var m__16986__auto____$1 = (peli.time_debugger._reset_state_BANG_["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IDebugAdaptor.-reset-state!",this$);
}
}
}
});

peli.time_debugger._init_debugger_state = (function peli$time_debugger$_init_debugger_state(this$,defaults){
if((!((this$ == null))) && (!((this$.peli$time_debugger$IDebugAdaptor$_init_debugger_state$arity$2 == null)))){
return this$.peli$time_debugger$IDebugAdaptor$_init_debugger_state$arity$2(this$,defaults);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.time_debugger._init_debugger_state[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$,defaults);
} else {
var m__16986__auto____$1 = (peli.time_debugger._init_debugger_state["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$,defaults);
} else {
throw cljs.core.missing_protocol.call(null,"IDebugAdaptor.-init-debugger-state",this$);
}
}
}
});

peli.time_debugger.transform = (function peli$time_debugger$transform(adaptor,event){
return peli.time_debugger._transform.call(null,adaptor,event);
});
peli.time_debugger.display = (function peli$time_debugger$display(adaptor,prev_event,cur_event){
return peli.time_debugger._display.call(null,adaptor,prev_event,cur_event);
});
peli.time_debugger.reset_state_BANG_ = (function peli$time_debugger$reset_state_BANG_(adaptor,event){
return peli.time_debugger._reset_state_BANG_.call(null,adaptor,event);
});
peli.time_debugger.init_debugger_state = (function peli$time_debugger$init_debugger_state(adaptor,defaults){
return peli.time_debugger._init_debugger_state.call(null,adaptor,defaults);
});
peli.time_debugger.cleanup_queue = (function peli$time_debugger$cleanup_queue(state,interval,lookback){
var c__19446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19446__auto__){
return (function (){
var f__19447__auto__ = (function (){var switch__19425__auto__ = ((function (c__19446__auto__){
return (function (state_22117){
var state_val_22118 = (state_22117[(1)]);
if((state_val_22118 === (1))){
var state_22117__$1 = state_22117;
var statearr_22119_22136 = state_22117__$1;
(statearr_22119_22136[(2)] = null);

(statearr_22119_22136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22118 === (2))){
var inst_22100 = cljs.core.deref.call(null,state);
var inst_22101 = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(inst_22100);
var inst_22102 = cljs.core._EQ_.call(null,inst_22101,new cljs.core.Keyword(null,"debug","debug",-1608172596));
var state_22117__$1 = state_22117;
if(inst_22102){
var statearr_22120_22137 = state_22117__$1;
(statearr_22120_22137[(1)] = (4));

} else {
var statearr_22121_22138 = state_22117__$1;
(statearr_22121_22138[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22118 === (3))){
var inst_22115 = (state_22117[(2)]);
var state_22117__$1 = state_22117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22117__$1,inst_22115);
} else {
if((state_val_22118 === (4))){
var inst_22105 = (function (){return ((function (state_val_22118,c__19446__auto__){
return (function (p__22104){
var map__22122 = p__22104;
var map__22122__$1 = ((((!((map__22122 == null)))?((((map__22122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22122):map__22122);
var state__$1 = map__22122__$1;
var queue = cljs.core.get.call(null,map__22122__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var idx = (cljs.core.count.call(null,queue) - lookback);
var new_q = cljs.core.subvec.call(null,queue,idx);
return cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"queue","queue",1455835879),new_q);
});
;})(state_val_22118,c__19446__auto__))
})();
var inst_22106 = cljs.core.swap_BANG_.call(null,state,inst_22105);
var state_22117__$1 = state_22117;
var statearr_22124_22139 = state_22117__$1;
(statearr_22124_22139[(2)] = inst_22106);

(statearr_22124_22139[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22118 === (5))){
var state_22117__$1 = state_22117;
var statearr_22125_22140 = state_22117__$1;
(statearr_22125_22140[(2)] = null);

(statearr_22125_22140[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22118 === (6))){
var inst_22109 = (state_22117[(2)]);
var inst_22110 = cljs.core.async.timeout.call(null,interval);
var state_22117__$1 = (function (){var statearr_22126 = state_22117;
(statearr_22126[(7)] = inst_22109);

return statearr_22126;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22117__$1,(7),inst_22110);
} else {
if((state_val_22118 === (7))){
var inst_22112 = (state_22117[(2)]);
var state_22117__$1 = (function (){var statearr_22127 = state_22117;
(statearr_22127[(8)] = inst_22112);

return statearr_22127;
})();
var statearr_22128_22141 = state_22117__$1;
(statearr_22128_22141[(2)] = null);

(statearr_22128_22141[(1)] = (2));


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
});})(c__19446__auto__))
;
return ((function (switch__19425__auto__,c__19446__auto__){
return (function() {
var peli$time_debugger$cleanup_queue_$_state_machine__19426__auto__ = null;
var peli$time_debugger$cleanup_queue_$_state_machine__19426__auto____0 = (function (){
var statearr_22132 = [null,null,null,null,null,null,null,null,null];
(statearr_22132[(0)] = peli$time_debugger$cleanup_queue_$_state_machine__19426__auto__);

(statearr_22132[(1)] = (1));

return statearr_22132;
});
var peli$time_debugger$cleanup_queue_$_state_machine__19426__auto____1 = (function (state_22117){
while(true){
var ret_value__19427__auto__ = (function (){try{while(true){
var result__19428__auto__ = switch__19425__auto__.call(null,state_22117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19428__auto__;
}
break;
}
}catch (e22133){if((e22133 instanceof Object)){
var ex__19429__auto__ = e22133;
var statearr_22134_22142 = state_22117;
(statearr_22134_22142[(5)] = ex__19429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22143 = state_22117;
state_22117 = G__22143;
continue;
} else {
return ret_value__19427__auto__;
}
break;
}
});
peli$time_debugger$cleanup_queue_$_state_machine__19426__auto__ = function(state_22117){
switch(arguments.length){
case 0:
return peli$time_debugger$cleanup_queue_$_state_machine__19426__auto____0.call(this);
case 1:
return peli$time_debugger$cleanup_queue_$_state_machine__19426__auto____1.call(this,state_22117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
peli$time_debugger$cleanup_queue_$_state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$0 = peli$time_debugger$cleanup_queue_$_state_machine__19426__auto____0;
peli$time_debugger$cleanup_queue_$_state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$1 = peli$time_debugger$cleanup_queue_$_state_machine__19426__auto____1;
return peli$time_debugger$cleanup_queue_$_state_machine__19426__auto__;
})()
;})(switch__19425__auto__,c__19446__auto__))
})();
var state__19448__auto__ = (function (){var statearr_22135 = f__19447__auto__.call(null);
(statearr_22135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19446__auto__);

return statearr_22135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19448__auto__);
});})(c__19446__auto__))
);

return c__19446__auto__;
});
peli.time_debugger.gather_events = (function peli$time_debugger$gather_events(dch,state,adaptor){
var c__19446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19446__auto__){
return (function (){
var f__19447__auto__ = (function (){var switch__19425__auto__ = ((function (c__19446__auto__){
return (function (state_22271){
var state_val_22272 = (state_22271[(1)]);
if((state_val_22272 === (7))){
var state_22271__$1 = state_22271;
var statearr_22273_22302 = state_22271__$1;
(statearr_22273_22302[(2)] = true);

(statearr_22273_22302[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22272 === (1))){
var state_22271__$1 = state_22271;
var statearr_22274_22303 = state_22271__$1;
(statearr_22274_22303[(2)] = null);

(statearr_22274_22303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22272 === (4))){
var inst_22225 = (state_22271[(7)]);
var inst_22230 = inst_22225.cljs$lang$protocol_mask$partition0$;
var inst_22231 = (inst_22230 & (64));
var inst_22232 = inst_22225.cljs$core$ISeq$;
var inst_22233 = (inst_22231) || (inst_22232);
var state_22271__$1 = state_22271;
if(cljs.core.truth_(inst_22233)){
var statearr_22275_22304 = state_22271__$1;
(statearr_22275_22304[(1)] = (7));

} else {
var statearr_22276_22305 = state_22271__$1;
(statearr_22276_22305[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22272 === (15))){
var inst_22267 = (state_22271[(2)]);
var state_22271__$1 = state_22271;
var statearr_22277_22306 = state_22271__$1;
(statearr_22277_22306[(2)] = inst_22267);

(statearr_22277_22306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22272 === (13))){
var state_22271__$1 = state_22271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22271__$1,(16),dch);
} else {
if((state_val_22272 === (6))){
var inst_22240 = (state_22271[(2)]);
var state_22271__$1 = state_22271;
if(cljs.core.truth_(inst_22240)){
var statearr_22278_22307 = state_22271__$1;
(statearr_22278_22307[(1)] = (10));

} else {
var statearr_22279_22308 = state_22271__$1;
(statearr_22279_22308[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22272 === (17))){
var inst_22264 = (state_22271[(2)]);
var state_22271__$1 = (function (){var statearr_22280 = state_22271;
(statearr_22280[(8)] = inst_22264);

return statearr_22280;
})();
var statearr_22281_22309 = state_22271__$1;
(statearr_22281_22309[(2)] = null);

(statearr_22281_22309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22272 === (3))){
var inst_22269 = (state_22271[(2)]);
var state_22271__$1 = state_22271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22271__$1,inst_22269);
} else {
if((state_val_22272 === (12))){
var inst_22247 = (state_22271[(9)]);
var inst_22245 = (state_22271[(10)]);
var inst_22245__$1 = (state_22271[(2)]);
var inst_22246 = cljs.core.get.call(null,inst_22245__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var inst_22247__$1 = cljs.core.get.call(null,inst_22245__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var inst_22248 = cljs.core._EQ_.call(null,inst_22247__$1,new cljs.core.Keyword(null,"record","record",-779106859));
var state_22271__$1 = (function (){var statearr_22282 = state_22271;
(statearr_22282[(9)] = inst_22247__$1);

(statearr_22282[(10)] = inst_22245__$1);

(statearr_22282[(11)] = inst_22246);

return statearr_22282;
})();
if(inst_22248){
var statearr_22283_22310 = state_22271__$1;
(statearr_22283_22310[(1)] = (13));

} else {
var statearr_22284_22311 = state_22271__$1;
(statearr_22284_22311[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22272 === (2))){
var inst_22225 = (state_22271[(7)]);
var inst_22225__$1 = cljs.core.deref.call(null,state);
var inst_22227 = (inst_22225__$1 == null);
var inst_22228 = cljs.core.not.call(null,inst_22227);
var state_22271__$1 = (function (){var statearr_22285 = state_22271;
(statearr_22285[(7)] = inst_22225__$1);

return statearr_22285;
})();
if(inst_22228){
var statearr_22286_22312 = state_22271__$1;
(statearr_22286_22312[(1)] = (4));

} else {
var statearr_22287_22313 = state_22271__$1;
(statearr_22287_22313[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22272 === (11))){
var inst_22225 = (state_22271[(7)]);
var state_22271__$1 = state_22271;
var statearr_22288_22314 = state_22271__$1;
(statearr_22288_22314[(2)] = inst_22225);

(statearr_22288_22314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22272 === (9))){
var inst_22237 = (state_22271[(2)]);
var state_22271__$1 = state_22271;
var statearr_22289_22315 = state_22271__$1;
(statearr_22289_22315[(2)] = inst_22237);

(statearr_22289_22315[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22272 === (5))){
var state_22271__$1 = state_22271;
var statearr_22290_22316 = state_22271__$1;
(statearr_22290_22316[(2)] = false);

(statearr_22290_22316[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22272 === (14))){
var inst_22262 = cljs.core.async.timeout.call(null,(500));
var state_22271__$1 = state_22271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22271__$1,(17),inst_22262);
} else {
if((state_val_22272 === (16))){
var inst_22247 = (state_22271[(9)]);
var inst_22245 = (state_22271[(10)]);
var inst_22246 = (state_22271[(11)]);
var inst_22251 = (state_22271[(2)]);
var inst_22252 = (new Date());
var inst_22253 = inst_22252.getTime();
var inst_22254 = [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"event","event",301435442)];
var inst_22255 = peli.time_debugger.transform.call(null,adaptor,inst_22251);
var inst_22256 = [inst_22253,inst_22255];
var inst_22257 = cljs.core.PersistentHashMap.fromArrays(inst_22254,inst_22256);
var inst_22258 = (function (){var map__22224 = inst_22245;
var queue = inst_22246;
var mode = inst_22247;
var event = inst_22251;
var time = inst_22253;
var tevent = inst_22257;
return ((function (map__22224,queue,mode,event,time,tevent,inst_22247,inst_22245,inst_22246,inst_22251,inst_22252,inst_22253,inst_22254,inst_22255,inst_22256,inst_22257,state_val_22272,c__19446__auto__){
return (function (state__$1){
return cljs.core.update.call(null,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"cur-event","cur-event",725499076),tevent,new cljs.core.Keyword(null,"prev-event","prev-event",-88694225),cljs.core.peek.call(null,new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(state__$1))),new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.conj,tevent);
});
;})(map__22224,queue,mode,event,time,tevent,inst_22247,inst_22245,inst_22246,inst_22251,inst_22252,inst_22253,inst_22254,inst_22255,inst_22256,inst_22257,state_val_22272,c__19446__auto__))
})();
var inst_22259 = cljs.core.swap_BANG_.call(null,state,inst_22258);
var state_22271__$1 = (function (){var statearr_22291 = state_22271;
(statearr_22291[(12)] = inst_22259);

return statearr_22291;
})();
var statearr_22292_22317 = state_22271__$1;
(statearr_22292_22317[(2)] = null);

(statearr_22292_22317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22272 === (10))){
var inst_22225 = (state_22271[(7)]);
var inst_22242 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22225);
var state_22271__$1 = state_22271;
var statearr_22293_22318 = state_22271__$1;
(statearr_22293_22318[(2)] = inst_22242);

(statearr_22293_22318[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22272 === (8))){
var state_22271__$1 = state_22271;
var statearr_22294_22319 = state_22271__$1;
(statearr_22294_22319[(2)] = false);

(statearr_22294_22319[(1)] = (9));


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
});})(c__19446__auto__))
;
return ((function (switch__19425__auto__,c__19446__auto__){
return (function() {
var peli$time_debugger$gather_events_$_state_machine__19426__auto__ = null;
var peli$time_debugger$gather_events_$_state_machine__19426__auto____0 = (function (){
var statearr_22298 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22298[(0)] = peli$time_debugger$gather_events_$_state_machine__19426__auto__);

(statearr_22298[(1)] = (1));

return statearr_22298;
});
var peli$time_debugger$gather_events_$_state_machine__19426__auto____1 = (function (state_22271){
while(true){
var ret_value__19427__auto__ = (function (){try{while(true){
var result__19428__auto__ = switch__19425__auto__.call(null,state_22271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19428__auto__;
}
break;
}
}catch (e22299){if((e22299 instanceof Object)){
var ex__19429__auto__ = e22299;
var statearr_22300_22320 = state_22271;
(statearr_22300_22320[(5)] = ex__19429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22321 = state_22271;
state_22271 = G__22321;
continue;
} else {
return ret_value__19427__auto__;
}
break;
}
});
peli$time_debugger$gather_events_$_state_machine__19426__auto__ = function(state_22271){
switch(arguments.length){
case 0:
return peli$time_debugger$gather_events_$_state_machine__19426__auto____0.call(this);
case 1:
return peli$time_debugger$gather_events_$_state_machine__19426__auto____1.call(this,state_22271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
peli$time_debugger$gather_events_$_state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$0 = peli$time_debugger$gather_events_$_state_machine__19426__auto____0;
peli$time_debugger$gather_events_$_state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$1 = peli$time_debugger$gather_events_$_state_machine__19426__auto____1;
return peli$time_debugger$gather_events_$_state_machine__19426__auto__;
})()
;})(switch__19425__auto__,c__19446__auto__))
})();
var state__19448__auto__ = (function (){var statearr_22301 = f__19447__auto__.call(null);
(statearr_22301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19446__auto__);

return statearr_22301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19448__auto__);
});})(c__19446__auto__))
);

return c__19446__auto__;
});
peli.time_debugger.find_events = (function peli$time_debugger$find_events(queue,idx){
cljs.core.println.call(null,cljs.core.count.call(null,queue),idx,cljs.core.type.call(null,idx));

var cur = cljs.core.nth.call(null,queue,idx);
var prev = ((((idx - (1)) > (0)))?cljs.core.nth.call(null,queue,(idx - (1))):null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,prev], null);
});
peli.time_debugger.event__GT_idx = (function peli$time_debugger$event__GT_idx(state,event){
return cljs.core.some.call(null,cljs.core.identity,cljs.core.map_indexed.call(null,(function (idx,e){
if(cljs.core._EQ_.call(null,event,e)){
return idx;
} else {
return null;
}
}),new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(state)));
});
peli.time_debugger.set_time = (function peli$time_debugger$set_time(state_atm,adaptor,idx){
var map__22326 = cljs.core.deref.call(null,state_atm);
var map__22326__$1 = ((((!((map__22326 == null)))?((((map__22326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22326):map__22326);
var queue = cljs.core.get.call(null,map__22326__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var vec__22327 = peli.time_debugger.find_events.call(null,queue,idx);
var cur = cljs.core.nth.call(null,vec__22327,(0),null);
var prev = cljs.core.nth.call(null,vec__22327,(1),null);
peli.time_debugger.reset_state_BANG_.call(null,adaptor,cur);

return cljs.core.swap_BANG_.call(null,state_atm,((function (map__22326,map__22326__$1,queue,vec__22327,cur,prev){
return (function (p1__22322_SHARP_){
return cljs.core.assoc.call(null,p1__22322_SHARP_,new cljs.core.Keyword(null,"cur-event","cur-event",725499076),cur,new cljs.core.Keyword(null,"prev-event","prev-event",-88694225),prev);
});})(map__22326,map__22326__$1,queue,vec__22327,cur,prev))
);
});
peli.time_debugger.prev_e = (function peli$time_debugger$prev_e(state_atm,adaptor,event){
cljs.core.swap_BANG_.call(null,state_atm,(function (state){
var idx = (peli.time_debugger.event__GT_idx.call(null,state,event) - (1));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"cur-event","cur-event",725499076),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879),(function (){var x__16661__auto__ = idx;
var y__16662__auto__ = (0);
return ((x__16661__auto__ > y__16662__auto__) ? x__16661__auto__ : y__16662__auto__);
})()], null)));
}));

return peli.time_debugger.reset_state_BANG_.call(null,adaptor,new cljs.core.Keyword(null,"cur-event","cur-event",725499076).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atm)));
});
peli.time_debugger.next_e = (function peli$time_debugger$next_e(state_atm,adaptor,event){
cljs.core.swap_BANG_.call(null,state_atm,(function (state){
var idx = (peli.time_debugger.event__GT_idx.call(null,state,event) + (1));
var max = (cljs.core.count.call(null,new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(state)) - (1));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"cur-event","cur-event",725499076),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879),(function (){var x__16668__auto__ = idx;
var y__16669__auto__ = max;
return ((x__16668__auto__ < y__16669__auto__) ? x__16668__auto__ : y__16669__auto__);
})()], null)));
}));

return peli.time_debugger.reset_state_BANG_.call(null,adaptor,new cljs.core.Keyword(null,"cur-event","cur-event",725499076).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atm)));
});
peli.time_debugger.start_record = (function peli$time_debugger$start_record(state){
var cur_event = new cljs.core.Keyword(null,"cur-event","cur-event",725499076).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var idx = peli.time_debugger.event__GT_idx.call(null,cljs.core.deref.call(null,state),cur_event);
return cljs.core.swap_BANG_.call(null,state,((function (cur_event,idx){
return (function (p1__22329_SHARP_){
return cljs.core.assoc.call(null,p1__22329_SHARP_,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.subvec.call(null,new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(p1__22329_SHARP_),(0),idx),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"record","record",-779106859));
});})(cur_event,idx))
);
});
peli.time_debugger.start_debug = (function peli$time_debugger$start_debug(state){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"debug","debug",-1608172596));
});
peli.time_debugger.renderer = (function peli$time_debugger$renderer(state,adaptor){
var map__22333 = cljs.core.deref.call(null,state);
var map__22333__$1 = ((((!((map__22333 == null)))?((((map__22333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22333):map__22333);
var hidden = cljs.core.get.call(null,map__22333__$1,new cljs.core.Keyword(null,"hidden","hidden",-312506092));
var cur_event = cljs.core.get.call(null,map__22333__$1,new cljs.core.Keyword(null,"cur-event","cur-event",725499076));
var prev_event = cljs.core.get.call(null,map__22333__$1,new cljs.core.Keyword(null,"prev-event","prev-event",-88694225));
var queue = cljs.core.get.call(null,map__22333__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var mode = cljs.core.get.call(null,map__22333__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var min_time = cljs.core.get.call(null,map__22333__$1,new cljs.core.Keyword(null,"min-time","min-time",736615549));
var max_time = cljs.core.get.call(null,map__22333__$1,new cljs.core.Keyword(null,"max-time","max-time",857408479));
if(cljs.core.truth_(hidden)){
return null;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"time-debugger"], null),((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"record","record",-779106859)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__22333,map__22333__$1,hidden,cur_event,prev_event,queue,mode,min_time,max_time){
return (function (){
return peli.time_debugger.start_debug.call(null,state);
});})(map__22333,map__22333__$1,hidden,cur_event,prev_event,queue,mode,min_time,max_time))
], null),"debug"], null):(function (){var idx = peli.time_debugger.event__GT_idx.call(null,cljs.core.deref.call(null,state),cur_event);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (idx,map__22333,map__22333__$1,hidden,cur_event,prev_event,queue,mode,min_time,max_time){
return (function (){
return peli.time_debugger.start_record.call(null,state);
});})(idx,map__22333,map__22333__$1,hidden,cur_event,prev_event,queue,mode,min_time,max_time))
], null),"record"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (idx,map__22333,map__22333__$1,hidden,cur_event,prev_event,queue,mode,min_time,max_time){
return (function (){
return peli.time_debugger.prev_e.call(null,state,adaptor,cur_event);
});})(idx,map__22333,map__22333__$1,hidden,cur_event,prev_event,queue,mode,min_time,max_time))
], null),"<"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (idx,map__22333,map__22333__$1,hidden,cur_event,prev_event,queue,mode,min_time,max_time){
return (function (){
return peli.time_debugger.next_e.call(null,state,adaptor,cur_event);
});})(idx,map__22333,map__22333__$1,hidden,cur_event,prev_event,queue,mode,min_time,max_time))
], null),">"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"right","right",-452581833)], null),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(cljs.core.count.call(null,queue) - (1)),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__16330__auto__ = idx;
if(cljs.core.truth_(or__16330__auto__)){
return or__16330__auto__;
} else {
return (cljs.core.count.call(null,queue) - (1));
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (idx,map__22333,map__22333__$1,hidden,cur_event,prev_event,queue,mode,min_time,max_time){
return (function (p1__22330_SHARP_){
return peli.time_debugger.set_time.call(null,state,adaptor,(p1__22330_SHARP_.target.value | (0)));
});})(idx,map__22333,map__22333__$1,hidden,cur_event,prev_event,queue,mode,min_time,max_time))
], null)], null)], null)], null);
})()),(cljs.core.truth_((function (){var and__16318__auto__ = cur_event;
if(cljs.core.truth_(and__16318__auto__)){
return cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"debug","debug",-1608172596));
} else {
return and__16318__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [peli.time_debugger.display,adaptor,prev_event,cur_event], null)], null):null)], null);
}
});
peli.time_debugger.init_debugger = (function peli$time_debugger$init_debugger(dch,adaptor,target_id,opts){
var defaults = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"hidden","hidden",-312506092),true,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"record","record",-779106859)], null);
var debugger_state = (function (){var or__16330__auto__ = peli.time_debugger.init_debugger_state.call(null,adaptor,defaults);
if(cljs.core.truth_(or__16330__auto__)){
return or__16330__auto__;
} else {
return reagent.core.atom.call(null,defaults);
}
})();
peli.time_debugger.cleanup_queue.call(null,debugger_state,new cljs.core.Keyword(null,"cleanup-interval","cleanup-interval",-979418630).cljs$core$IFn$_invoke$arity$2(opts,(500)),new cljs.core.Keyword(null,"lookback","lookback",-535935491).cljs$core$IFn$_invoke$arity$2(opts,(1000)));

peli.time_debugger.gather_events.call(null,dch,debugger_state,adaptor);

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [peli.time_debugger.renderer,debugger_state,adaptor], null),document.getElementById(target_id));

return debugger_state;
});

//# sourceMappingURL=time_debugger.js.map?rel=1446896433354