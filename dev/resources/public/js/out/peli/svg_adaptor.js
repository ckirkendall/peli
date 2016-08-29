// Compiled by ClojureScript 1.7.145 {}
goog.provide('peli.svg_adaptor');
goog.require('cljs.core');
goog.require('peli.engine');
goog.require('reagent.core');
goog.require('peli.time_debugger');
goog.require('clojure.data');
goog.require('cljs.core.async');
goog.require('clojure.set');
peli.svg_adaptor.debug_flag = reagent.core.atom.call(null,false);
peli.svg_adaptor.step_action;

peli.svg_adaptor.draw_world;
peli.svg_adaptor.get_entity_cursor = (function peli$svg_adaptor$get_entity_cursor(data_atm,id){
return reagent.core.cursor.call(null,data_atm,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-world","active-world",1609458985),new cljs.core.Keyword(null,"registry","registry",1021159018),id], null));
});
peli.svg_adaptor.svg_game = (function peli$svg_adaptor$svg_game(data){
var data_atm = reagent.core.atom.call(null,data);
var debug_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var frame_cursor = reagent.core.cursor.call(null,data_atm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-world","active-world",1609458985),new cljs.core.Keyword(null,"frame","frame",-1711082588)], null));
var board_cursor = reagent.core.cursor.call(null,data_atm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-world","active-world",1609458985),new cljs.core.Keyword(null,"board","board",-1907017633)], null));
var state_cursor = reagent.core.cursor.call(null,data_atm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099)], null));
var solids_cursor = reagent.core.cursor.call(null,data_atm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-world","active-world",1609458985),new cljs.core.Keyword(null,"solids","solids",-764118369)], null));
var characters_cursor = reagent.core.cursor.call(null,data_atm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-world","active-world",1609458985),new cljs.core.Keyword(null,"characters","characters",-163867197)], null));
var framed_cursor = reagent.core.cursor.call(null,data_atm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-world","active-world",1609458985),new cljs.core.Keyword(null,"framed","framed",207165444)], null));
var overlays_cursor = reagent.core.cursor.call(null,data_atm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-world","active-world",1609458985),new cljs.core.Keyword(null,"overlays","overlays",-1346586303)], null));
var entity_cursors = cljs.core.memoize.call(null,cljs.core.partial.call(null,peli.svg_adaptor.get_entity_cursor,data_atm));
var x20844 = data_atm;
x20844.peli$engine$IGame$ = true;

x20844.peli$engine$IGame$_run_state$arity$1 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,data_atm),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-world","active-world",1609458985),new cljs.core.Keyword(null,"run-state","run-state",-1367818032)], null));
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_pause_game$arity$1 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,data_atm,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-world","active-world",1609458985),new cljs.core.Keyword(null,"run-state","run-state",-1367818032)], null),new cljs.core.Keyword(null,"paused","paused",-1710376127));

return this$__$1;
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_unpause_game$arity$1 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,data_atm,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-world","active-world",1609458985),new cljs.core.Keyword(null,"run-state","run-state",-1367818032)], null),new cljs.core.Keyword(null,"running","running",1554969103));

return this$__$1;
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_fps$arity$1 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$){
var this$__$1 = this;
return (60);
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_sprites$arity$1 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,data_atm),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-world","active-world",1609458985),new cljs.core.Keyword(null,"sprites","sprites",-1835833922)], null));
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_sounds$arity$1 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,data_atm),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-world","active-world",1609458985),new cljs.core.Keyword(null,"sounds","sounds",1244211385)], null));
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_frame$arity$1 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,frame_cursor);
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_board$arity$1 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,board_cursor);
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_block_size$arity$1 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$){
var this$__$1 = this;
return (50);
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_state$arity$1 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,state_cursor);
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_solids$arity$1 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,solids_cursor);
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_charaters$arity$1 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,characters_cursor);
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_entity$arity$2 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$,id){
var this$__$1 = this;
var temp__4423__auto__ = entity_cursors.call(null,id);
if(cljs.core.truth_(temp__4423__auto__)){
var cur = temp__4423__auto__;
return cljs.core.deref.call(null,cur);
} else {
return console.error("Entity not found:",cljs.core.pr_str.call(null,id)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,data_atm),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-world","active-world",1609458985),new cljs.core.Keyword(null,"registry","registry",1021159018)], null)))));
}
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_worlds$arity$1 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$){
var this$__$1 = this;
return new cljs.core.Keyword(null,"worlds","worlds",-1076808946).cljs$core$IFn$_invoke$arity$1(data);
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_world$arity$2 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$,id){
var this$__$1 = this;
return cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worlds","worlds",-1076808946),id], null));
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_overlays$arity$1 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,overlays_cursor);
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_framed_character$arity$1 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$){
var this$__$1 = this;
return peli.engine.entity.call(null,this$__$1,cljs.core.deref.call(null,framed_cursor));
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_key_actions$arity$2 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$,world_id){
var this$__$1 = this;
return cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worlds","worlds",-1076808946),world_id,new cljs.core.Keyword(null,"key-actions","key-actions",1449289164)], null));
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_update_frame$arity$2 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$,func){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,frame_cursor,func);

return this$__$1;
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_update_state$arity$2 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$,func){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,state_cursor,func);

return this$__$1;
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_collision_matrix$arity$1 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$){
var this$__$1 = this;
return new cljs.core.Keyword(null,"collision-matrix","collision-matrix",-594489001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data_atm));
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_set_collision_matrix$arity$2 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$,matrix){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,data_atm,cljs.core.assoc,new cljs.core.Keyword(null,"collision-matrix","collision-matrix",-594489001),matrix);

return this$__$1;
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_switch_worlds$arity$2 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$,world_id){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,data_atm,((function (this$__$1,x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (game){
var world = cljs.core.get_in.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worlds","worlds",-1076808946),world_id], null));
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"active-world","active-world",1609458985),world);
});})(this$__$1,x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
);

return this$__$1;
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_update_entity$arity$3 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$,id,func){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,entity_cursors.call(null,id),func);

return this$__$1;
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_hide_entity$arity$2 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$,id){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,entity_cursors.call(null,id),cljs.core.assoc,new cljs.core.Keyword(null,"hidden","hidden",-312506092),true);

return this$__$1;
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_show_entity$arity$2 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$,id){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,entity_cursors.call(null,id),cljs.core.assoc,new cljs.core.Keyword(null,"hidden","hidden",-312506092),false);

return this$__$1;
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_init_world$arity$1 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$){
var this$__$1 = this;
return this$__$1;
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_step$arity$2 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$,ch){
var this$__$1 = this;
peli.svg_adaptor.step_action.call(null,this$__$1,ch);

return this$__$1;
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_initial_draw$arity$3 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$,ch,target_id){
var this$__$1 = this;
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [peli.svg_adaptor.draw_world,this$__$1,ch], null),document.getElementById(target_id));
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$engine$IGame$_debug$arity$1 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$){
var this$__$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,debug_state)),new cljs.core.Keyword(null,"debug","debug",-1608172596))){
peli.time_debugger.start_record.call(null,debug_state);
} else {
peli.time_debugger.start_debug.call(null,debug_state);
}

cljs.core.swap_BANG_.call(null,debug_state,cljs.core.update,new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.not);

return this$__$1;
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$time_debugger$IDebugAdaptor$ = true;

x20844.peli$time_debugger$IDebugAdaptor$_transform$arity$2 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$,event){
var this$__$1 = this;
return cljs.core.update.call(null,event,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref);
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$time_debugger$IDebugAdaptor$_display$arity$3 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$,p__20845,p__20846){
var map__20847 = p__20845;
var map__20847__$1 = ((((!((map__20847 == null)))?((((map__20847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20847):map__20847);
var prev_event = cljs.core.get.call(null,map__20847__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__20848 = p__20846;
var map__20848__$1 = ((((!((map__20848 == null)))?((((map__20848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20848):map__20848);
var cur_event = cljs.core.get.call(null,map__20848__$1,new cljs.core.Keyword(null,"event","event",301435442));
var this$__$1 = this;
var vec__20851 = clojure.data.diff.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(prev_event),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cur_event));
var removed = cljs.core.nth.call(null,vec__20851,(0),null);
var added = cljs.core.nth.call(null,vec__20851,(1),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"svg-event"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"action"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cur_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"action","action",-811238024)], null)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"args"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cur_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"args","args",1315556576)], null)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"added"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.pr_str.call(null,added)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"removed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.pr_str.call(null,removed)], null)], null)], null);
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$time_debugger$IDebugAdaptor$_reset_state_BANG_$arity$2 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$,p__20852){
var map__20853 = p__20852;
var map__20853__$1 = ((((!((map__20853 == null)))?((((map__20853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20853):map__20853);
var event = cljs.core.get.call(null,map__20853__$1,new cljs.core.Keyword(null,"event","event",301435442));
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(event));
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

x20844.peli$time_debugger$IDebugAdaptor$_init_debugger_state$arity$2 = ((function (x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (this$,defaults){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,debug_state,((function (this$__$1,x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors){
return (function (p1__20832_SHARP_){
return cljs.core.merge.call(null,defaults,p1__20832_SHARP_);
});})(this$__$1,x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
);

return debug_state;
});})(x20844,data_atm,debug_state,frame_cursor,board_cursor,state_cursor,solids_cursor,characters_cursor,framed_cursor,overlays_cursor,entity_cursors))
;

return x20844;
});
peli.svg_adaptor.rounded_rect = (function peli$svg_adaptor$rounded_rect(fill,width,height,x,y,radii){
var vec__20856 = (function (){var or__16330__auto__ = radii;
if(cljs.core.truth_(or__16330__auto__)){
return or__16330__auto__;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null);
}
})();
var ul = cljs.core.nth.call(null,vec__20856,(0),null);
var ur = cljs.core.nth.call(null,vec__20856,(1),null);
var lr = cljs.core.nth.call(null,vec__20856,(2),null);
var ll = cljs.core.nth.call(null,vec__20856,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),[cljs.core.str("M"),cljs.core.str((x + ul)),cljs.core.str(","),cljs.core.str(y),cljs.core.str("h"),cljs.core.str(((width - ul) - ur)),cljs.core.str("a"),cljs.core.str(ur),cljs.core.str(","),cljs.core.str(ur),cljs.core.str(" 0 0 1 "),cljs.core.str(ur),cljs.core.str(","),cljs.core.str(ur),cljs.core.str("v"),cljs.core.str(((height - ur) - lr)),cljs.core.str("a"),cljs.core.str(lr),cljs.core.str(","),cljs.core.str(lr),cljs.core.str(" 0 0 1 "),cljs.core.str((- lr)),cljs.core.str(","),cljs.core.str(lr),cljs.core.str("h"),cljs.core.str(((lr + ll) - width)),cljs.core.str("a"),cljs.core.str(ll),cljs.core.str(","),cljs.core.str(ll),cljs.core.str(" 0 0 1 "),cljs.core.str((- ll)),cljs.core.str(","),cljs.core.str((- ll)),cljs.core.str("v"),cljs.core.str(((ul + ll) - height)),cljs.core.str("a"),cljs.core.str(ul),cljs.core.str(","),cljs.core.str(ul),cljs.core.str(" 0 0 1 "),cljs.core.str(ul),cljs.core.str(","),cljs.core.str((- ul)),cljs.core.str("z")].join(''),new cljs.core.Keyword(null,"fill","fill",883462889),fill], null)], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {peli.engine.Pen}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
peli.svg_adaptor.Block = (function (id,fill,width,height,x,y,radii,__meta,__extmap,__hash){
this.id = id;
this.fill = fill;
this.width = width;
this.height = height;
this.x = x;
this.y = y;
this.radii = radii;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
peli.svg_adaptor.Block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16944__auto__,k__16945__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return cljs.core._lookup.call(null,this__16944__auto____$1,k__16945__auto__,null);
});

peli.svg_adaptor.Block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16946__auto__,k20858,else__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
var G__20860 = (((k20858 instanceof cljs.core.Keyword))?k20858.fqn:null);
switch (G__20860) {
case "id":
return self__.id;

break;
case "fill":
return self__.fill;

break;
case "width":
return self__.width;

break;
case "height":
return self__.height;

break;
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
case "radii":
return self__.radii;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20858,else__16947__auto__);

}
});

peli.svg_adaptor.Block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16958__auto__,writer__16959__auto__,opts__16960__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
var pr_pair__16961__auto__ = ((function (this__16958__auto____$1){
return (function (keyval__16962__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16959__auto__,cljs.core.pr_writer,""," ","",opts__16960__auto__,keyval__16962__auto__);
});})(this__16958__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16959__auto__,pr_pair__16961__auto__,"#peli.svg-adaptor.Block{",", ","}",opts__16960__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fill","fill",883462889),self__.fill],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"radii","radii",-39552793),self__.radii],null))], null),self__.__extmap));
});

peli.svg_adaptor.Block.prototype.cljs$core$IIterable$ = true;

peli.svg_adaptor.Block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20857){
var self__ = this;
var G__20857__$1 = this;
return (new cljs.core.RecordIter((0),G__20857__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"radii","radii",-39552793)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

peli.svg_adaptor.Block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16942__auto__){
var self__ = this;
var this__16942__auto____$1 = this;
return self__.__meta;
});

peli.svg_adaptor.Block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16938__auto__){
var self__ = this;
var this__16938__auto____$1 = this;
return (new peli.svg_adaptor.Block(self__.id,self__.fill,self__.width,self__.height,self__.x,self__.y,self__.radii,self__.__meta,self__.__extmap,self__.__hash));
});

peli.svg_adaptor.Block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16948__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

peli.svg_adaptor.Block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16939__auto__){
var self__ = this;
var this__16939__auto____$1 = this;
var h__16765__auto__ = self__.__hash;
if(!((h__16765__auto__ == null))){
return h__16765__auto__;
} else {
var h__16765__auto____$1 = cljs.core.hash_imap.call(null,this__16939__auto____$1);
self__.__hash = h__16765__auto____$1;

return h__16765__auto____$1;
}
});

peli.svg_adaptor.Block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16940__auto__,other__16941__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16318__auto__ = other__16941__auto__;
if(cljs.core.truth_(and__16318__auto__)){
var and__16318__auto____$1 = (this__16940__auto____$1.constructor === other__16941__auto__.constructor);
if(and__16318__auto____$1){
return cljs.core.equiv_map.call(null,this__16940__auto____$1,other__16941__auto__);
} else {
return and__16318__auto____$1;
}
} else {
return and__16318__auto__;
}
})())){
return true;
} else {
return false;
}
});

peli.svg_adaptor.Block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16953__auto__,k__16954__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"radii","radii",-39552793),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"x","x",2099068185),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),k__16954__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16953__auto____$1),self__.__meta),k__16954__auto__);
} else {
return (new peli.svg_adaptor.Block(self__.id,self__.fill,self__.width,self__.height,self__.x,self__.y,self__.radii,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16954__auto__)),null));
}
});

peli.svg_adaptor.Block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16951__auto__,k__16952__auto__,G__20857){
var self__ = this;
var this__16951__auto____$1 = this;
var pred__20861 = cljs.core.keyword_identical_QMARK_;
var expr__20862 = k__16952__auto__;
if(cljs.core.truth_(pred__20861.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__20862))){
return (new peli.svg_adaptor.Block(G__20857,self__.fill,self__.width,self__.height,self__.x,self__.y,self__.radii,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20861.call(null,new cljs.core.Keyword(null,"fill","fill",883462889),expr__20862))){
return (new peli.svg_adaptor.Block(self__.id,G__20857,self__.width,self__.height,self__.x,self__.y,self__.radii,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20861.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__20862))){
return (new peli.svg_adaptor.Block(self__.id,self__.fill,G__20857,self__.height,self__.x,self__.y,self__.radii,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20861.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__20862))){
return (new peli.svg_adaptor.Block(self__.id,self__.fill,self__.width,G__20857,self__.x,self__.y,self__.radii,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20861.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__20862))){
return (new peli.svg_adaptor.Block(self__.id,self__.fill,self__.width,self__.height,G__20857,self__.y,self__.radii,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20861.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__20862))){
return (new peli.svg_adaptor.Block(self__.id,self__.fill,self__.width,self__.height,self__.x,G__20857,self__.radii,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20861.call(null,new cljs.core.Keyword(null,"radii","radii",-39552793),expr__20862))){
return (new peli.svg_adaptor.Block(self__.id,self__.fill,self__.width,self__.height,self__.x,self__.y,G__20857,self__.__meta,self__.__extmap,null));
} else {
return (new peli.svg_adaptor.Block(self__.id,self__.fill,self__.width,self__.height,self__.x,self__.y,self__.radii,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16952__auto__,G__20857),null));
}
}
}
}
}
}
}
});

peli.svg_adaptor.Block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fill","fill",883462889),self__.fill],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"radii","radii",-39552793),self__.radii],null))], null),self__.__extmap));
});

peli.svg_adaptor.Block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16943__auto__,G__20857){
var self__ = this;
var this__16943__auto____$1 = this;
return (new peli.svg_adaptor.Block(self__.id,self__.fill,self__.width,self__.height,self__.x,self__.y,self__.radii,G__20857,self__.__extmap,self__.__hash));
});

peli.svg_adaptor.Block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16949__auto__,entry__16950__auto__){
var self__ = this;
var this__16949__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16950__auto__)){
return cljs.core._assoc.call(null,this__16949__auto____$1,cljs.core._nth.call(null,entry__16950__auto__,(0)),cljs.core._nth.call(null,entry__16950__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16949__auto____$1,entry__16950__auto__);
}
});

peli.svg_adaptor.Block.prototype.peli$engine$Pen$ = true;

peli.svg_adaptor.Block.prototype.peli$engine$Pen$draw$arity$3 = (function (this$,game,ch){
var self__ = this;
var this$__$1 = this;
return peli.svg_adaptor.rounded_rect.call(null,self__.fill,self__.width,self__.height,self__.x,self__.y,self__.radii);
});

peli.svg_adaptor.Block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"fill","fill",-1770972880,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"radii","radii",1600978734,null)], null);
});

peli.svg_adaptor.Block.cljs$lang$type = true;

peli.svg_adaptor.Block.cljs$lang$ctorPrSeq = (function (this__16978__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"peli.svg-adaptor/Block");
});

peli.svg_adaptor.Block.cljs$lang$ctorPrWriter = (function (this__16978__auto__,writer__16979__auto__){
return cljs.core._write.call(null,writer__16979__auto__,"peli.svg-adaptor/Block");
});

peli.svg_adaptor.__GT_Block = (function peli$svg_adaptor$__GT_Block(id,fill,width,height,x,y,radii){
return (new peli.svg_adaptor.Block(id,fill,width,height,x,y,radii,null,null,null));
});

peli.svg_adaptor.map__GT_Block = (function peli$svg_adaptor$map__GT_Block(G__20859){
return (new peli.svg_adaptor.Block(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__20859),new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(G__20859),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__20859),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__20859),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__20859),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__20859),new cljs.core.Keyword(null,"radii","radii",-39552793).cljs$core$IFn$_invoke$arity$1(G__20859),null,cljs.core.dissoc.call(null,G__20859,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"radii","radii",-39552793)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {peli.engine.Pen}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
peli.svg_adaptor.TextPrompt = (function (id,width,height,text,hidden_QMARK_,options,__meta,__extmap,__hash){
this.id = id;
this.width = width;
this.height = height;
this.text = text;
this.hidden_QMARK_ = hidden_QMARK_;
this.options = options;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
peli.svg_adaptor.TextPrompt.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16944__auto__,k__16945__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return cljs.core._lookup.call(null,this__16944__auto____$1,k__16945__auto__,null);
});

peli.svg_adaptor.TextPrompt.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16946__auto__,k20866,else__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
var G__20868 = (((k20866 instanceof cljs.core.Keyword))?k20866.fqn:null);
switch (G__20868) {
case "id":
return self__.id;

break;
case "width":
return self__.width;

break;
case "height":
return self__.height;

break;
case "text":
return self__.text;

break;
case "hidden?":
return self__.hidden_QMARK_;

break;
case "options":
return self__.options;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20866,else__16947__auto__);

}
});

peli.svg_adaptor.TextPrompt.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16958__auto__,writer__16959__auto__,opts__16960__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
var pr_pair__16961__auto__ = ((function (this__16958__auto____$1){
return (function (keyval__16962__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16959__auto__,cljs.core.pr_writer,""," ","",opts__16960__auto__,keyval__16962__auto__);
});})(this__16958__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16959__auto__,pr_pair__16961__auto__,"#peli.svg-adaptor.TextPrompt{",", ","}",opts__16960__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),self__.hidden_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null))], null),self__.__extmap));
});

peli.svg_adaptor.TextPrompt.prototype.cljs$core$IIterable$ = true;

peli.svg_adaptor.TextPrompt.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20865){
var self__ = this;
var G__20865__$1 = this;
return (new cljs.core.RecordIter((0),G__20865__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

peli.svg_adaptor.TextPrompt.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16942__auto__){
var self__ = this;
var this__16942__auto____$1 = this;
return self__.__meta;
});

peli.svg_adaptor.TextPrompt.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16938__auto__){
var self__ = this;
var this__16938__auto____$1 = this;
return (new peli.svg_adaptor.TextPrompt(self__.id,self__.width,self__.height,self__.text,self__.hidden_QMARK_,self__.options,self__.__meta,self__.__extmap,self__.__hash));
});

peli.svg_adaptor.TextPrompt.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16948__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

peli.svg_adaptor.TextPrompt.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16939__auto__){
var self__ = this;
var this__16939__auto____$1 = this;
var h__16765__auto__ = self__.__hash;
if(!((h__16765__auto__ == null))){
return h__16765__auto__;
} else {
var h__16765__auto____$1 = cljs.core.hash_imap.call(null,this__16939__auto____$1);
self__.__hash = h__16765__auto____$1;

return h__16765__auto____$1;
}
});

peli.svg_adaptor.TextPrompt.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16940__auto__,other__16941__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16318__auto__ = other__16941__auto__;
if(cljs.core.truth_(and__16318__auto__)){
var and__16318__auto____$1 = (this__16940__auto____$1.constructor === other__16941__auto__.constructor);
if(and__16318__auto____$1){
return cljs.core.equiv_map.call(null,this__16940__auto____$1,other__16941__auto__);
} else {
return and__16318__auto____$1;
}
} else {
return and__16318__auto__;
}
})())){
return true;
} else {
return false;
}
});

peli.svg_adaptor.TextPrompt.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16953__auto__,k__16954__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"options","options",99638489),null,new cljs.core.Keyword(null,"height","height",1025178622),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null),k__16954__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16953__auto____$1),self__.__meta),k__16954__auto__);
} else {
return (new peli.svg_adaptor.TextPrompt(self__.id,self__.width,self__.height,self__.text,self__.hidden_QMARK_,self__.options,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16954__auto__)),null));
}
});

peli.svg_adaptor.TextPrompt.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16951__auto__,k__16952__auto__,G__20865){
var self__ = this;
var this__16951__auto____$1 = this;
var pred__20869 = cljs.core.keyword_identical_QMARK_;
var expr__20870 = k__16952__auto__;
if(cljs.core.truth_(pred__20869.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__20870))){
return (new peli.svg_adaptor.TextPrompt(G__20865,self__.width,self__.height,self__.text,self__.hidden_QMARK_,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20869.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__20870))){
return (new peli.svg_adaptor.TextPrompt(self__.id,G__20865,self__.height,self__.text,self__.hidden_QMARK_,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20869.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__20870))){
return (new peli.svg_adaptor.TextPrompt(self__.id,self__.width,G__20865,self__.text,self__.hidden_QMARK_,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20869.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),expr__20870))){
return (new peli.svg_adaptor.TextPrompt(self__.id,self__.width,self__.height,G__20865,self__.hidden_QMARK_,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20869.call(null,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),expr__20870))){
return (new peli.svg_adaptor.TextPrompt(self__.id,self__.width,self__.height,self__.text,G__20865,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20869.call(null,new cljs.core.Keyword(null,"options","options",99638489),expr__20870))){
return (new peli.svg_adaptor.TextPrompt(self__.id,self__.width,self__.height,self__.text,self__.hidden_QMARK_,G__20865,self__.__meta,self__.__extmap,null));
} else {
return (new peli.svg_adaptor.TextPrompt(self__.id,self__.width,self__.height,self__.text,self__.hidden_QMARK_,self__.options,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16952__auto__,G__20865),null));
}
}
}
}
}
}
});

peli.svg_adaptor.TextPrompt.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),self__.hidden_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null))], null),self__.__extmap));
});

peli.svg_adaptor.TextPrompt.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16943__auto__,G__20865){
var self__ = this;
var this__16943__auto____$1 = this;
return (new peli.svg_adaptor.TextPrompt(self__.id,self__.width,self__.height,self__.text,self__.hidden_QMARK_,self__.options,G__20865,self__.__extmap,self__.__hash));
});

peli.svg_adaptor.TextPrompt.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16949__auto__,entry__16950__auto__){
var self__ = this;
var this__16949__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16950__auto__)){
return cljs.core._assoc.call(null,this__16949__auto____$1,cljs.core._nth.call(null,entry__16950__auto__,(0)),cljs.core._nth.call(null,entry__16950__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16949__auto____$1,entry__16950__auto__);
}
});

peli.svg_adaptor.TextPrompt.prototype.peli$engine$Pen$ = true;

peli.svg_adaptor.TextPrompt.prototype.peli$engine$Pen$draw$arity$3 = (function (this$,game,ch){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"hidden?","hidden?",1339691380).cljs$core$IFn$_invoke$arity$1(this$__$1))){
return null;
} else {
var vec__20872 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(peli.engine.frame.call(null,game)) - self__.width) / (2)),((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(peli.engine.frame.call(null,game)) - self__.height) / (2))], null);
var x = cljs.core.nth.call(null,vec__20872,(0),null);
var y = cljs.core.nth.call(null,vec__20872,(1),null);
var vec__20873 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(5),(5),(5)], null);
var ul = cljs.core.nth.call(null,vec__20873,(0),null);
var ur = cljs.core.nth.call(null,vec__20873,(1),null);
var lr = cljs.core.nth.call(null,vec__20873,(2),null);
var ll = cljs.core.nth.call(null,vec__20873,(3),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),peli.svg_adaptor.rounded_rect.call(null,"#dfdfdf",self__.width,self__.height,x,y,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(5),(5),(5)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.Keyword(null,"font","font",-1506159249).cljs$core$IFn$_invoke$arity$2(self__.options,"15px Arial"),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#6666dd",new cljs.core.Keyword(null,"font-color","font-color",-2019660285),new cljs.core.Keyword(null,"font-color","font-color",-2019660285).cljs$core$IFn$_invoke$arity$2(self__.options,"#000099")], null),new cljs.core.Keyword(null,"x","x",2099068185),(x + (22)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (27))], null),self__.text], null)], null);
}
});

peli.svg_adaptor.TextPrompt.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"hidden?","hidden?",-1314744389,null),new cljs.core.Symbol(null,"options","options",1740170016,null)], null);
});

peli.svg_adaptor.TextPrompt.cljs$lang$type = true;

peli.svg_adaptor.TextPrompt.cljs$lang$ctorPrSeq = (function (this__16978__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"peli.svg-adaptor/TextPrompt");
});

peli.svg_adaptor.TextPrompt.cljs$lang$ctorPrWriter = (function (this__16978__auto__,writer__16979__auto__){
return cljs.core._write.call(null,writer__16979__auto__,"peli.svg-adaptor/TextPrompt");
});

peli.svg_adaptor.__GT_TextPrompt = (function peli$svg_adaptor$__GT_TextPrompt(id,width,height,text,hidden_QMARK_,options){
return (new peli.svg_adaptor.TextPrompt(id,width,height,text,hidden_QMARK_,options,null,null,null));
});

peli.svg_adaptor.map__GT_TextPrompt = (function peli$svg_adaptor$map__GT_TextPrompt(G__20867){
return (new peli.svg_adaptor.TextPrompt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__20867),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__20867),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__20867),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__20867),new cljs.core.Keyword(null,"hidden?","hidden?",1339691380).cljs$core$IFn$_invoke$arity$1(G__20867),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__20867),null,cljs.core.dissoc.call(null,G__20867,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),new cljs.core.Keyword(null,"options","options",99638489)),null));
});

peli.svg_adaptor.step_action = (function peli$svg_adaptor$step_action(game,ch){
if(cljs.core._EQ_.call(null,peli.engine.run_state.call(null,game),new cljs.core.Keyword(null,"paused","paused",-1710376127))){
return peli.engine.adjust_frame.call(null,game);
} else {
return peli.engine.adjust_frame.call(null,peli.engine.run_physics.call(null,game,ch));

}
});
peli.svg_adaptor.create_sprite_defs = (function peli$svg_adaptor$create_sprite_defs(sprites){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),(function (){var iter__17102__auto__ = (function peli$svg_adaptor$create_sprite_defs_$_iter__20891(s__20892){
return (new cljs.core.LazySeq(null,(function (){
var s__20892__$1 = s__20892;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20892__$1);
if(temp__4425__auto__){
var s__20892__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20892__$2)){
var c__17100__auto__ = cljs.core.chunk_first.call(null,s__20892__$2);
var size__17101__auto__ = cljs.core.count.call(null,c__17100__auto__);
var b__20894 = cljs.core.chunk_buffer.call(null,size__17101__auto__);
if((function (){var i__20893 = (0);
while(true){
if((i__20893 < size__17101__auto__)){
var vec__20901 = cljs.core._nth.call(null,c__17100__auto__,i__20893);
var key = cljs.core.nth.call(null,vec__20901,(0),null);
var map__20902 = cljs.core.nth.call(null,vec__20901,(1),null);
var map__20902__$1 = ((((!((map__20902 == null)))?((((map__20902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20902):map__20902);
var img = cljs.core.get.call(null,map__20902__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var width = cljs.core.get.call(null,map__20902__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__20902__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var x = cljs.core.get.call(null,map__20902__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__20902__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
cljs.core.chunk_append.call(null,b__20894,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name.call(null,key),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xlinkHref","xlinkHref",-1814059639),img,new cljs.core.Keyword(null,"x","x",2099068185),(function (){var or__16330__auto__ = x;
if(cljs.core.truth_(or__16330__auto__)){
return or__16330__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"y","y",-1757859776),(function (){var or__16330__auto__ = y;
if(cljs.core.truth_(or__16330__auto__)){
return or__16330__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null)], null)], null));

var G__20907 = (i__20893 + (1));
i__20893 = G__20907;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20894),peli$svg_adaptor$create_sprite_defs_$_iter__20891.call(null,cljs.core.chunk_rest.call(null,s__20892__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20894),null);
}
} else {
var vec__20904 = cljs.core.first.call(null,s__20892__$2);
var key = cljs.core.nth.call(null,vec__20904,(0),null);
var map__20905 = cljs.core.nth.call(null,vec__20904,(1),null);
var map__20905__$1 = ((((!((map__20905 == null)))?((((map__20905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20905):map__20905);
var img = cljs.core.get.call(null,map__20905__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var width = cljs.core.get.call(null,map__20905__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__20905__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var x = cljs.core.get.call(null,map__20905__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__20905__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name.call(null,key),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xlinkHref","xlinkHref",-1814059639),img,new cljs.core.Keyword(null,"x","x",2099068185),(function (){var or__16330__auto__ = x;
if(cljs.core.truth_(or__16330__auto__)){
return or__16330__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"y","y",-1757859776),(function (){var or__16330__auto__ = y;
if(cljs.core.truth_(or__16330__auto__)){
return or__16330__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null)], null)], null),peli$svg_adaptor$create_sprite_defs_$_iter__20891.call(null,cljs.core.rest.call(null,s__20892__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17102__auto__.call(null,sprites);
})()], null);
});
peli.svg_adaptor.draw_body = (function peli$svg_adaptor$draw_body(game,id,ch){
var body = peli.engine.entity.call(null,game,id);
if(cljs.core.truth_(new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(body))){
return null;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [peli.engine.draw,body,game,ch], null);
}
});
peli.svg_adaptor.draw_solids = (function peli$svg_adaptor$draw_solids(game,ch){
var bodies = peli.engine.solids.call(null,game);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(function (){var iter__17102__auto__ = ((function (bodies){
return (function peli$svg_adaptor$draw_solids_$_iter__20912(s__20913){
return (new cljs.core.LazySeq(null,((function (bodies){
return (function (){
var s__20913__$1 = s__20913;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20913__$1);
if(temp__4425__auto__){
var s__20913__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20913__$2)){
var c__17100__auto__ = cljs.core.chunk_first.call(null,s__20913__$2);
var size__17101__auto__ = cljs.core.count.call(null,c__17100__auto__);
var b__20915 = cljs.core.chunk_buffer.call(null,size__17101__auto__);
if((function (){var i__20914 = (0);
while(true){
if((i__20914 < size__17101__auto__)){
var body_id = cljs.core._nth.call(null,c__17100__auto__,i__20914);
cljs.core.chunk_append.call(null,b__20915,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),body_id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [peli.svg_adaptor.draw_body,game,body_id,ch], null)], null));

var G__20916 = (i__20914 + (1));
i__20914 = G__20916;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20915),peli$svg_adaptor$draw_solids_$_iter__20912.call(null,cljs.core.chunk_rest.call(null,s__20913__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20915),null);
}
} else {
var body_id = cljs.core.first.call(null,s__20913__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),body_id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [peli.svg_adaptor.draw_body,game,body_id,ch], null)], null),peli$svg_adaptor$draw_solids_$_iter__20912.call(null,cljs.core.rest.call(null,s__20913__$2)));
}
} else {
return null;
}
break;
}
});})(bodies))
,null,null));
});})(bodies))
;
return iter__17102__auto__.call(null,bodies);
})()], null);
});
peli.svg_adaptor.draw_characters = (function peli$svg_adaptor$draw_characters(game,ch){
var bodies = peli.engine.characters.call(null,game);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(function (){var iter__17102__auto__ = ((function (bodies){
return (function peli$svg_adaptor$draw_characters_$_iter__20921(s__20922){
return (new cljs.core.LazySeq(null,((function (bodies){
return (function (){
var s__20922__$1 = s__20922;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20922__$1);
if(temp__4425__auto__){
var s__20922__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20922__$2)){
var c__17100__auto__ = cljs.core.chunk_first.call(null,s__20922__$2);
var size__17101__auto__ = cljs.core.count.call(null,c__17100__auto__);
var b__20924 = cljs.core.chunk_buffer.call(null,size__17101__auto__);
if((function (){var i__20923 = (0);
while(true){
if((i__20923 < size__17101__auto__)){
var body_id = cljs.core._nth.call(null,c__17100__auto__,i__20923);
cljs.core.chunk_append.call(null,b__20924,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),body_id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [peli.svg_adaptor.draw_body,game,body_id,ch], null)], null));

var G__20925 = (i__20923 + (1));
i__20923 = G__20925;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20924),peli$svg_adaptor$draw_characters_$_iter__20921.call(null,cljs.core.chunk_rest.call(null,s__20922__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20924),null);
}
} else {
var body_id = cljs.core.first.call(null,s__20922__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),body_id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [peli.svg_adaptor.draw_body,game,body_id,ch], null)], null),peli$svg_adaptor$draw_characters_$_iter__20921.call(null,cljs.core.rest.call(null,s__20922__$2)));
}
} else {
return null;
}
break;
}
});})(bodies))
,null,null));
});})(bodies))
;
return iter__17102__auto__.call(null,bodies);
})()], null);
});
peli.svg_adaptor.draw_overlays = (function peli$svg_adaptor$draw_overlays(game,ch){
var bodies = peli.engine.overlays.call(null,game);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"overlays","overlays",-1346586303)], null),(function (){var iter__17102__auto__ = ((function (bodies){
return (function peli$svg_adaptor$draw_overlays_$_iter__20930(s__20931){
return (new cljs.core.LazySeq(null,((function (bodies){
return (function (){
var s__20931__$1 = s__20931;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20931__$1);
if(temp__4425__auto__){
var s__20931__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20931__$2)){
var c__17100__auto__ = cljs.core.chunk_first.call(null,s__20931__$2);
var size__17101__auto__ = cljs.core.count.call(null,c__17100__auto__);
var b__20933 = cljs.core.chunk_buffer.call(null,size__17101__auto__);
if((function (){var i__20932 = (0);
while(true){
if((i__20932 < size__17101__auto__)){
var body_id = cljs.core._nth.call(null,c__17100__auto__,i__20932);
cljs.core.chunk_append.call(null,b__20933,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),body_id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [peli.svg_adaptor.draw_body,game,body_id,ch], null)], null));

var G__20934 = (i__20932 + (1));
i__20932 = G__20934;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20933),peli$svg_adaptor$draw_overlays_$_iter__20930.call(null,cljs.core.chunk_rest.call(null,s__20931__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20933),null);
}
} else {
var body_id = cljs.core.first.call(null,s__20931__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),body_id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [peli.svg_adaptor.draw_body,game,body_id,ch], null)], null),peli$svg_adaptor$draw_overlays_$_iter__20930.call(null,cljs.core.rest.call(null,s__20931__$2)));
}
} else {
return null;
}
break;
}
});})(bodies))
,null,null));
});})(bodies))
;
return iter__17102__auto__.call(null,bodies);
})()], null);
});
peli.svg_adaptor.draw_world = (function peli$svg_adaptor$draw_world(game,ch){
var state = peli.engine.state.call(null,game);
var board = peli.engine.board.call(null,game);
var overlays = peli.engine.overlays.call(null,game);
var sounds = peli.engine.sounds.call(null,game);
var map__20945 = peli.engine.frame.call(null,game);
var map__20945__$1 = ((((!((map__20945 == null)))?((((map__20945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20945):map__20945);
var x = cljs.core.get.call(null,map__20945__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__20945__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__20945__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__20945__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var iter__17102__auto__ = ((function (state,board,overlays,sounds,map__20945,map__20945__$1,x,y,width,height){
return (function peli$svg_adaptor$draw_world_$_iter__20947(s__20948){
return (new cljs.core.LazySeq(null,((function (state,board,overlays,sounds,map__20945,map__20945__$1,x,y,width,height){
return (function (){
var s__20948__$1 = s__20948;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20948__$1);
if(temp__4425__auto__){
var s__20948__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20948__$2)){
var c__17100__auto__ = cljs.core.chunk_first.call(null,s__20948__$2);
var size__17101__auto__ = cljs.core.count.call(null,c__17100__auto__);
var b__20950 = cljs.core.chunk_buffer.call(null,size__17101__auto__);
if((function (){var i__20949 = (0);
while(true){
if((i__20949 < size__17101__auto__)){
var vec__20953 = cljs.core._nth.call(null,c__17100__auto__,i__20949);
var key = cljs.core.nth.call(null,vec__20953,(0),null);
var url = cljs.core.nth.call(null,vec__20953,(1),null);
cljs.core.chunk_append.call(null,b__20950,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name.call(null,key),new cljs.core.Keyword(null,"src","src",-1651076051),url], null)], null));

var G__20955 = (i__20949 + (1));
i__20949 = G__20955;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20950),peli$svg_adaptor$draw_world_$_iter__20947.call(null,cljs.core.chunk_rest.call(null,s__20948__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20950),null);
}
} else {
var vec__20954 = cljs.core.first.call(null,s__20948__$2);
var key = cljs.core.nth.call(null,vec__20954,(0),null);
var url = cljs.core.nth.call(null,vec__20954,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name.call(null,key),new cljs.core.Keyword(null,"src","src",-1651076051),url], null)], null),peli$svg_adaptor$draw_world_$_iter__20947.call(null,cljs.core.rest.call(null,s__20948__$2)));
}
} else {
return null;
}
break;
}
});})(state,board,overlays,sounds,map__20945,map__20945__$1,x,y,width,height))
,null,null));
});})(state,board,overlays,sounds,map__20945,map__20945__$1,x,y,width,height))
;
return iter__17102__auto__.call(null,sounds);
})()], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [peli.svg_adaptor.create_sprite_defs,peli.engine.sprites.call(null,game)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(board),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(((-1) * x)),cljs.core.str(","),cljs.core.str(((-1) * y)),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [peli.svg_adaptor.draw_solids,game,ch], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [peli.svg_adaptor.draw_characters,game,ch], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [peli.svg_adaptor.draw_overlays,game,ch], null)], null)], null)], null);
});

//# sourceMappingURL=svg_adaptor.js.map?rel=1446896069134