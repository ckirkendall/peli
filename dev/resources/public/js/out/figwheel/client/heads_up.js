// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17395__auto__ = [];
var len__17388__auto___22183 = arguments.length;
var i__17389__auto___22184 = (0);
while(true){
if((i__17389__auto___22184 < len__17388__auto___22183)){
args__17395__auto__.push((arguments[i__17389__auto___22184]));

var G__22185 = (i__17389__auto___22184 + (1));
i__17389__auto___22184 = G__22185;
continue;
} else {
}
break;
}

var argseq__17396__auto__ = ((((2) < args__17395__auto__.length))?(new cljs.core.IndexedSeq(args__17395__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17396__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__22175_22186 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__22176_22187 = null;
var count__22177_22188 = (0);
var i__22178_22189 = (0);
while(true){
if((i__22178_22189 < count__22177_22188)){
var k_22190 = cljs.core._nth.call(null,chunk__22176_22187,i__22178_22189);
e.setAttribute(cljs.core.name.call(null,k_22190),cljs.core.get.call(null,attrs,k_22190));

var G__22191 = seq__22175_22186;
var G__22192 = chunk__22176_22187;
var G__22193 = count__22177_22188;
var G__22194 = (i__22178_22189 + (1));
seq__22175_22186 = G__22191;
chunk__22176_22187 = G__22192;
count__22177_22188 = G__22193;
i__22178_22189 = G__22194;
continue;
} else {
var temp__4425__auto___22195 = cljs.core.seq.call(null,seq__22175_22186);
if(temp__4425__auto___22195){
var seq__22175_22196__$1 = temp__4425__auto___22195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22175_22196__$1)){
var c__17133__auto___22197 = cljs.core.chunk_first.call(null,seq__22175_22196__$1);
var G__22198 = cljs.core.chunk_rest.call(null,seq__22175_22196__$1);
var G__22199 = c__17133__auto___22197;
var G__22200 = cljs.core.count.call(null,c__17133__auto___22197);
var G__22201 = (0);
seq__22175_22186 = G__22198;
chunk__22176_22187 = G__22199;
count__22177_22188 = G__22200;
i__22178_22189 = G__22201;
continue;
} else {
var k_22202 = cljs.core.first.call(null,seq__22175_22196__$1);
e.setAttribute(cljs.core.name.call(null,k_22202),cljs.core.get.call(null,attrs,k_22202));

var G__22203 = cljs.core.next.call(null,seq__22175_22196__$1);
var G__22204 = null;
var G__22205 = (0);
var G__22206 = (0);
seq__22175_22186 = G__22203;
chunk__22176_22187 = G__22204;
count__22177_22188 = G__22205;
i__22178_22189 = G__22206;
continue;
}
} else {
}
}
break;
}

var seq__22179_22207 = cljs.core.seq.call(null,children);
var chunk__22180_22208 = null;
var count__22181_22209 = (0);
var i__22182_22210 = (0);
while(true){
if((i__22182_22210 < count__22181_22209)){
var ch_22211 = cljs.core._nth.call(null,chunk__22180_22208,i__22182_22210);
e.appendChild(ch_22211);

var G__22212 = seq__22179_22207;
var G__22213 = chunk__22180_22208;
var G__22214 = count__22181_22209;
var G__22215 = (i__22182_22210 + (1));
seq__22179_22207 = G__22212;
chunk__22180_22208 = G__22213;
count__22181_22209 = G__22214;
i__22182_22210 = G__22215;
continue;
} else {
var temp__4425__auto___22216 = cljs.core.seq.call(null,seq__22179_22207);
if(temp__4425__auto___22216){
var seq__22179_22217__$1 = temp__4425__auto___22216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22179_22217__$1)){
var c__17133__auto___22218 = cljs.core.chunk_first.call(null,seq__22179_22217__$1);
var G__22219 = cljs.core.chunk_rest.call(null,seq__22179_22217__$1);
var G__22220 = c__17133__auto___22218;
var G__22221 = cljs.core.count.call(null,c__17133__auto___22218);
var G__22222 = (0);
seq__22179_22207 = G__22219;
chunk__22180_22208 = G__22220;
count__22181_22209 = G__22221;
i__22182_22210 = G__22222;
continue;
} else {
var ch_22223 = cljs.core.first.call(null,seq__22179_22217__$1);
e.appendChild(ch_22223);

var G__22224 = cljs.core.next.call(null,seq__22179_22217__$1);
var G__22225 = null;
var G__22226 = (0);
var G__22227 = (0);
seq__22179_22207 = G__22224;
chunk__22180_22208 = G__22225;
count__22181_22209 = G__22226;
i__22182_22210 = G__22227;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq22172){
var G__22173 = cljs.core.first.call(null,seq22172);
var seq22172__$1 = cljs.core.next.call(null,seq22172);
var G__22174 = cljs.core.first.call(null,seq22172__$1);
var seq22172__$2 = cljs.core.next.call(null,seq22172__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__22173,G__22174,seq22172__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17243__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17244__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17245__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17246__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17247__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17243__auto__,prefer_table__17244__auto__,method_cache__17245__auto__,cached_hierarchy__17246__auto__,hierarchy__17247__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17243__auto__,prefer_table__17244__auto__,method_cache__17245__auto__,cached_hierarchy__17246__auto__,hierarchy__17247__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17247__auto__,method_table__17243__auto__,prefer_table__17244__auto__,method_cache__17245__auto__,cached_hierarchy__17246__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_22228 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_22228.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_22228.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_22228.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_22228);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__22229,st_map){
var map__22234 = p__22229;
var map__22234__$1 = ((((!((map__22234 == null)))?((((map__22234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22234):map__22234);
var container_el = cljs.core.get.call(null,map__22234__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__22234,map__22234__$1,container_el){
return (function (p__22236){
var vec__22237 = p__22236;
var k = cljs.core.nth.call(null,vec__22237,(0),null);
var v = cljs.core.nth.call(null,vec__22237,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__22234,map__22234__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__22238,dom_str){
var map__22241 = p__22238;
var map__22241__$1 = ((((!((map__22241 == null)))?((((map__22241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22241):map__22241);
var c = map__22241__$1;
var content_area_el = cljs.core.get.call(null,map__22241__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__22243){
var map__22246 = p__22243;
var map__22246__$1 = ((((!((map__22246 == null)))?((((map__22246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22246):map__22246);
var content_area_el = cljs.core.get.call(null,map__22246__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19446__auto__){
return (function (){
var f__19447__auto__ = (function (){var switch__19425__auto__ = ((function (c__19446__auto__){
return (function (state_22289){
var state_val_22290 = (state_22289[(1)]);
if((state_val_22290 === (1))){
var inst_22274 = (state_22289[(7)]);
var inst_22274__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_22275 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_22276 = ["10px","10px","100%","68px","1.0"];
var inst_22277 = cljs.core.PersistentHashMap.fromArrays(inst_22275,inst_22276);
var inst_22278 = cljs.core.merge.call(null,inst_22277,style);
var inst_22279 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22274__$1,inst_22278);
var inst_22280 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_22274__$1,msg);
var inst_22281 = cljs.core.async.timeout.call(null,(300));
var state_22289__$1 = (function (){var statearr_22291 = state_22289;
(statearr_22291[(7)] = inst_22274__$1);

(statearr_22291[(8)] = inst_22279);

(statearr_22291[(9)] = inst_22280);

return statearr_22291;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22289__$1,(2),inst_22281);
} else {
if((state_val_22290 === (2))){
var inst_22274 = (state_22289[(7)]);
var inst_22283 = (state_22289[(2)]);
var inst_22284 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_22285 = ["auto"];
var inst_22286 = cljs.core.PersistentHashMap.fromArrays(inst_22284,inst_22285);
var inst_22287 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22274,inst_22286);
var state_22289__$1 = (function (){var statearr_22292 = state_22289;
(statearr_22292[(10)] = inst_22283);

return statearr_22292;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22289__$1,inst_22287);
} else {
return null;
}
}
});})(c__19446__auto__))
;
return ((function (switch__19425__auto__,c__19446__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19426__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19426__auto____0 = (function (){
var statearr_22296 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22296[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19426__auto__);

(statearr_22296[(1)] = (1));

return statearr_22296;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19426__auto____1 = (function (state_22289){
while(true){
var ret_value__19427__auto__ = (function (){try{while(true){
var result__19428__auto__ = switch__19425__auto__.call(null,state_22289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19428__auto__;
}
break;
}
}catch (e22297){if((e22297 instanceof Object)){
var ex__19429__auto__ = e22297;
var statearr_22298_22300 = state_22289;
(statearr_22298_22300[(5)] = ex__19429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22301 = state_22289;
state_22289 = G__22301;
continue;
} else {
return ret_value__19427__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19426__auto__ = function(state_22289){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19426__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19426__auto____1.call(this,state_22289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19426__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19426__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19426__auto__;
})()
;})(switch__19425__auto__,c__19446__auto__))
})();
var state__19448__auto__ = (function (){var statearr_22299 = f__19447__auto__.call(null);
(statearr_22299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19446__auto__);

return statearr_22299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19448__auto__);
});})(c__19446__auto__))
);

return c__19446__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__22303 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__22303,(0),null);
var ln = cljs.core.nth.call(null,vec__22303,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__22306 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__22306,(0),null);
var file_line = cljs.core.nth.call(null,vec__22306,(1),null);
var file_column = cljs.core.nth.call(null,vec__22306,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__22306,file_name,file_line,file_column){
return (function (p1__22304_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__22304_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__22306,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16330__auto__ = file_line;
if(cljs.core.truth_(or__16330__auto__)){
return or__16330__auto__;
} else {
var and__16318__auto__ = cause;
if(cljs.core.truth_(and__16318__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16318__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__22309 = figwheel.client.heads_up.ensure_container.call(null);
var map__22309__$1 = ((((!((map__22309 == null)))?((((map__22309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22309):map__22309);
var content_area_el = cljs.core.get.call(null,map__22309__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19446__auto__){
return (function (){
var f__19447__auto__ = (function (){var switch__19425__auto__ = ((function (c__19446__auto__){
return (function (state_22357){
var state_val_22358 = (state_22357[(1)]);
if((state_val_22358 === (1))){
var inst_22340 = (state_22357[(7)]);
var inst_22340__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_22341 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_22342 = ["0.0"];
var inst_22343 = cljs.core.PersistentHashMap.fromArrays(inst_22341,inst_22342);
var inst_22344 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22340__$1,inst_22343);
var inst_22345 = cljs.core.async.timeout.call(null,(300));
var state_22357__$1 = (function (){var statearr_22359 = state_22357;
(statearr_22359[(8)] = inst_22344);

(statearr_22359[(7)] = inst_22340__$1);

return statearr_22359;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22357__$1,(2),inst_22345);
} else {
if((state_val_22358 === (2))){
var inst_22340 = (state_22357[(7)]);
var inst_22347 = (state_22357[(2)]);
var inst_22348 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_22349 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_22350 = cljs.core.PersistentHashMap.fromArrays(inst_22348,inst_22349);
var inst_22351 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22340,inst_22350);
var inst_22352 = cljs.core.async.timeout.call(null,(200));
var state_22357__$1 = (function (){var statearr_22360 = state_22357;
(statearr_22360[(9)] = inst_22351);

(statearr_22360[(10)] = inst_22347);

return statearr_22360;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22357__$1,(3),inst_22352);
} else {
if((state_val_22358 === (3))){
var inst_22340 = (state_22357[(7)]);
var inst_22354 = (state_22357[(2)]);
var inst_22355 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_22340,"");
var state_22357__$1 = (function (){var statearr_22361 = state_22357;
(statearr_22361[(11)] = inst_22354);

return statearr_22361;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22357__$1,inst_22355);
} else {
return null;
}
}
}
});})(c__19446__auto__))
;
return ((function (switch__19425__auto__,c__19446__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19426__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19426__auto____0 = (function (){
var statearr_22365 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22365[(0)] = figwheel$client$heads_up$clear_$_state_machine__19426__auto__);

(statearr_22365[(1)] = (1));

return statearr_22365;
});
var figwheel$client$heads_up$clear_$_state_machine__19426__auto____1 = (function (state_22357){
while(true){
var ret_value__19427__auto__ = (function (){try{while(true){
var result__19428__auto__ = switch__19425__auto__.call(null,state_22357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19428__auto__;
}
break;
}
}catch (e22366){if((e22366 instanceof Object)){
var ex__19429__auto__ = e22366;
var statearr_22367_22369 = state_22357;
(statearr_22367_22369[(5)] = ex__19429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22370 = state_22357;
state_22357 = G__22370;
continue;
} else {
return ret_value__19427__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19426__auto__ = function(state_22357){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19426__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19426__auto____1.call(this,state_22357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19426__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19426__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19426__auto__;
})()
;})(switch__19425__auto__,c__19446__auto__))
})();
var state__19448__auto__ = (function (){var statearr_22368 = f__19447__auto__.call(null);
(statearr_22368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19446__auto__);

return statearr_22368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19448__auto__);
});})(c__19446__auto__))
);

return c__19446__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19446__auto__){
return (function (){
var f__19447__auto__ = (function (){var switch__19425__auto__ = ((function (c__19446__auto__){
return (function (state_22402){
var state_val_22403 = (state_22402[(1)]);
if((state_val_22403 === (1))){
var inst_22392 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_22402__$1 = state_22402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22402__$1,(2),inst_22392);
} else {
if((state_val_22403 === (2))){
var inst_22394 = (state_22402[(2)]);
var inst_22395 = cljs.core.async.timeout.call(null,(400));
var state_22402__$1 = (function (){var statearr_22404 = state_22402;
(statearr_22404[(7)] = inst_22394);

return statearr_22404;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22402__$1,(3),inst_22395);
} else {
if((state_val_22403 === (3))){
var inst_22397 = (state_22402[(2)]);
var inst_22398 = figwheel.client.heads_up.clear.call(null);
var state_22402__$1 = (function (){var statearr_22405 = state_22402;
(statearr_22405[(8)] = inst_22397);

return statearr_22405;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22402__$1,(4),inst_22398);
} else {
if((state_val_22403 === (4))){
var inst_22400 = (state_22402[(2)]);
var state_22402__$1 = state_22402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22402__$1,inst_22400);
} else {
return null;
}
}
}
}
});})(c__19446__auto__))
;
return ((function (switch__19425__auto__,c__19446__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19426__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19426__auto____0 = (function (){
var statearr_22409 = [null,null,null,null,null,null,null,null,null];
(statearr_22409[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19426__auto__);

(statearr_22409[(1)] = (1));

return statearr_22409;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19426__auto____1 = (function (state_22402){
while(true){
var ret_value__19427__auto__ = (function (){try{while(true){
var result__19428__auto__ = switch__19425__auto__.call(null,state_22402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19428__auto__;
}
break;
}
}catch (e22410){if((e22410 instanceof Object)){
var ex__19429__auto__ = e22410;
var statearr_22411_22413 = state_22402;
(statearr_22411_22413[(5)] = ex__19429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22414 = state_22402;
state_22402 = G__22414;
continue;
} else {
return ret_value__19427__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19426__auto__ = function(state_22402){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19426__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19426__auto____1.call(this,state_22402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19426__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19426__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19426__auto__;
})()
;})(switch__19425__auto__,c__19446__auto__))
})();
var state__19448__auto__ = (function (){var statearr_22412 = f__19447__auto__.call(null);
(statearr_22412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19446__auto__);

return statearr_22412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19448__auto__);
});})(c__19446__auto__))
);

return c__19446__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1446810622294