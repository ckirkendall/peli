// Compiled by ClojureScript 1.7.145 {}
goog.provide('peli.engine');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('clojure.set');
goog.require('clojure.data');
goog.require('cljs.pprint');
cljs.core.enable_console_print_BANG_.call(null);
peli.engine.send_action;
peli.engine.overlap_QMARK_;
if(typeof peli.engine.debug_flag !== 'undefined'){
} else {
peli.engine.debug_flag = reagent.core.atom.call(null,false);
}

/**
 * @interface
 */
peli.engine.IGame = function(){};

peli.engine._run_state = (function peli$engine$_run_state(this$){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_run_state$arity$1 == null)))){
return this$.peli$engine$IGame$_run_state$arity$1(this$);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._run_state[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$);
} else {
var m__16986__auto____$1 = (peli.engine._run_state["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-run-state",this$);
}
}
}
});

peli.engine._pause_game = (function peli$engine$_pause_game(this$){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_pause_game$arity$1 == null)))){
return this$.peli$engine$IGame$_pause_game$arity$1(this$);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._pause_game[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$);
} else {
var m__16986__auto____$1 = (peli.engine._pause_game["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-pause-game",this$);
}
}
}
});

peli.engine._unpause_game = (function peli$engine$_unpause_game(this$){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_unpause_game$arity$1 == null)))){
return this$.peli$engine$IGame$_unpause_game$arity$1(this$);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._unpause_game[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$);
} else {
var m__16986__auto____$1 = (peli.engine._unpause_game["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-unpause-game",this$);
}
}
}
});

peli.engine._fps = (function peli$engine$_fps(this$){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_fps$arity$1 == null)))){
return this$.peli$engine$IGame$_fps$arity$1(this$);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._fps[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$);
} else {
var m__16986__auto____$1 = (peli.engine._fps["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-fps",this$);
}
}
}
});

peli.engine._sprites = (function peli$engine$_sprites(this$){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_sprites$arity$1 == null)))){
return this$.peli$engine$IGame$_sprites$arity$1(this$);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._sprites[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$);
} else {
var m__16986__auto____$1 = (peli.engine._sprites["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-sprites",this$);
}
}
}
});

peli.engine._sounds = (function peli$engine$_sounds(game){
if((!((game == null))) && (!((game.peli$engine$IGame$_sounds$arity$1 == null)))){
return game.peli$engine$IGame$_sounds$arity$1(game);
} else {
var x__16985__auto__ = (((game == null))?null:game);
var m__16986__auto__ = (peli.engine._sounds[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,game);
} else {
var m__16986__auto____$1 = (peli.engine._sounds["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-sounds",game);
}
}
}
});

peli.engine._frame = (function peli$engine$_frame(this$){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_frame$arity$1 == null)))){
return this$.peli$engine$IGame$_frame$arity$1(this$);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._frame[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$);
} else {
var m__16986__auto____$1 = (peli.engine._frame["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-frame",this$);
}
}
}
});

peli.engine._board = (function peli$engine$_board(this$){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_board$arity$1 == null)))){
return this$.peli$engine$IGame$_board$arity$1(this$);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._board[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$);
} else {
var m__16986__auto____$1 = (peli.engine._board["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-board",this$);
}
}
}
});

peli.engine._block_size = (function peli$engine$_block_size(this$){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_block_size$arity$1 == null)))){
return this$.peli$engine$IGame$_block_size$arity$1(this$);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._block_size[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$);
} else {
var m__16986__auto____$1 = (peli.engine._block_size["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-block-size",this$);
}
}
}
});

peli.engine._state = (function peli$engine$_state(this$){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_state$arity$1 == null)))){
return this$.peli$engine$IGame$_state$arity$1(this$);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._state[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$);
} else {
var m__16986__auto____$1 = (peli.engine._state["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-state",this$);
}
}
}
});

peli.engine._solids = (function peli$engine$_solids(this$){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_solids$arity$1 == null)))){
return this$.peli$engine$IGame$_solids$arity$1(this$);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._solids[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$);
} else {
var m__16986__auto____$1 = (peli.engine._solids["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-solids",this$);
}
}
}
});

peli.engine._charaters = (function peli$engine$_charaters(this$){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_charaters$arity$1 == null)))){
return this$.peli$engine$IGame$_charaters$arity$1(this$);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._charaters[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$);
} else {
var m__16986__auto____$1 = (peli.engine._charaters["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-charaters",this$);
}
}
}
});

peli.engine._entity = (function peli$engine$_entity(this$,id){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_entity$arity$2 == null)))){
return this$.peli$engine$IGame$_entity$arity$2(this$,id);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._entity[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$,id);
} else {
var m__16986__auto____$1 = (peli.engine._entity["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$,id);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-entity",this$);
}
}
}
});

peli.engine._worlds = (function peli$engine$_worlds(this$){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_worlds$arity$1 == null)))){
return this$.peli$engine$IGame$_worlds$arity$1(this$);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._worlds[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$);
} else {
var m__16986__auto____$1 = (peli.engine._worlds["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-worlds",this$);
}
}
}
});

peli.engine._world = (function peli$engine$_world(this$,id){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_world$arity$2 == null)))){
return this$.peli$engine$IGame$_world$arity$2(this$,id);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._world[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$,id);
} else {
var m__16986__auto____$1 = (peli.engine._world["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$,id);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-world",this$);
}
}
}
});

peli.engine._overlays = (function peli$engine$_overlays(this$){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_overlays$arity$1 == null)))){
return this$.peli$engine$IGame$_overlays$arity$1(this$);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._overlays[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$);
} else {
var m__16986__auto____$1 = (peli.engine._overlays["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-overlays",this$);
}
}
}
});

peli.engine._framed_character = (function peli$engine$_framed_character(this$){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_framed_character$arity$1 == null)))){
return this$.peli$engine$IGame$_framed_character$arity$1(this$);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._framed_character[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$);
} else {
var m__16986__auto____$1 = (peli.engine._framed_character["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-framed-character",this$);
}
}
}
});

peli.engine._key_actions = (function peli$engine$_key_actions(this$,world_id){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_key_actions$arity$2 == null)))){
return this$.peli$engine$IGame$_key_actions$arity$2(this$,world_id);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._key_actions[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$,world_id);
} else {
var m__16986__auto____$1 = (peli.engine._key_actions["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$,world_id);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-key-actions",this$);
}
}
}
});

peli.engine._update_frame = (function peli$engine$_update_frame(this$,func){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_update_frame$arity$2 == null)))){
return this$.peli$engine$IGame$_update_frame$arity$2(this$,func);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._update_frame[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$,func);
} else {
var m__16986__auto____$1 = (peli.engine._update_frame["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$,func);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-update-frame",this$);
}
}
}
});

peli.engine._update_state = (function peli$engine$_update_state(this$,func){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_update_state$arity$2 == null)))){
return this$.peli$engine$IGame$_update_state$arity$2(this$,func);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._update_state[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$,func);
} else {
var m__16986__auto____$1 = (peli.engine._update_state["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$,func);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-update-state",this$);
}
}
}
});

peli.engine._collision_matrix = (function peli$engine$_collision_matrix(this$){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_collision_matrix$arity$1 == null)))){
return this$.peli$engine$IGame$_collision_matrix$arity$1(this$);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._collision_matrix[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$);
} else {
var m__16986__auto____$1 = (peli.engine._collision_matrix["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-collision-matrix",this$);
}
}
}
});

peli.engine._set_collision_matrix = (function peli$engine$_set_collision_matrix(this$,matrix){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_set_collision_matrix$arity$2 == null)))){
return this$.peli$engine$IGame$_set_collision_matrix$arity$2(this$,matrix);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._set_collision_matrix[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$,matrix);
} else {
var m__16986__auto____$1 = (peli.engine._set_collision_matrix["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$,matrix);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-set-collision-matrix",this$);
}
}
}
});

peli.engine._switch_worlds = (function peli$engine$_switch_worlds(this$,world_id){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_switch_worlds$arity$2 == null)))){
return this$.peli$engine$IGame$_switch_worlds$arity$2(this$,world_id);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._switch_worlds[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$,world_id);
} else {
var m__16986__auto____$1 = (peli.engine._switch_worlds["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$,world_id);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-switch-worlds",this$);
}
}
}
});

peli.engine._update_entity = (function peli$engine$_update_entity(this$,id,func){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_update_entity$arity$3 == null)))){
return this$.peli$engine$IGame$_update_entity$arity$3(this$,id,func);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._update_entity[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$,id,func);
} else {
var m__16986__auto____$1 = (peli.engine._update_entity["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$,id,func);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-update-entity",this$);
}
}
}
});

peli.engine._hide_entity = (function peli$engine$_hide_entity(this$,id){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_hide_entity$arity$2 == null)))){
return this$.peli$engine$IGame$_hide_entity$arity$2(this$,id);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._hide_entity[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$,id);
} else {
var m__16986__auto____$1 = (peli.engine._hide_entity["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$,id);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-hide-entity",this$);
}
}
}
});

peli.engine._show_entity = (function peli$engine$_show_entity(this$,id){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_show_entity$arity$2 == null)))){
return this$.peli$engine$IGame$_show_entity$arity$2(this$,id);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._show_entity[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$,id);
} else {
var m__16986__auto____$1 = (peli.engine._show_entity["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$,id);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-show-entity",this$);
}
}
}
});

peli.engine._init_world = (function peli$engine$_init_world(this$){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_init_world$arity$1 == null)))){
return this$.peli$engine$IGame$_init_world$arity$1(this$);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._init_world[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$);
} else {
var m__16986__auto____$1 = (peli.engine._init_world["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-init-world",this$);
}
}
}
});

peli.engine._step = (function peli$engine$_step(this$,ch){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_step$arity$2 == null)))){
return this$.peli$engine$IGame$_step$arity$2(this$,ch);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._step[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$,ch);
} else {
var m__16986__auto____$1 = (peli.engine._step["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$,ch);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-step",this$);
}
}
}
});

peli.engine._initial_draw = (function peli$engine$_initial_draw(this$,ch,target_id){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_initial_draw$arity$3 == null)))){
return this$.peli$engine$IGame$_initial_draw$arity$3(this$,ch,target_id);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._initial_draw[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$,ch,target_id);
} else {
var m__16986__auto____$1 = (peli.engine._initial_draw["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$,ch,target_id);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-initial-draw",this$);
}
}
}
});

peli.engine._debug = (function peli$engine$_debug(this$){
if((!((this$ == null))) && (!((this$.peli$engine$IGame$_debug$arity$1 == null)))){
return this$.peli$engine$IGame$_debug$arity$1(this$);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine._debug[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$);
} else {
var m__16986__auto____$1 = (peli.engine._debug["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGame.-debug",this$);
}
}
}
});

peli.engine.run_state = (function peli$engine$run_state(game){
return peli.engine._run_state.call(null,game);
});
peli.engine.pause_game = (function peli$engine$pause_game(game){
return peli.engine._pause_game.call(null,game);
});
peli.engine.unpause_game = (function peli$engine$unpause_game(game){
return peli.engine._unpause_game.call(null,game);
});
peli.engine.fps = (function peli$engine$fps(game){
return peli.engine._fps.call(null,game);
});
peli.engine.sprites = (function peli$engine$sprites(game){
return peli.engine._sprites.call(null,game);
});
peli.engine.sounds = (function peli$engine$sounds(game){
return peli.engine._sounds.call(null,game);
});
peli.engine.frame = (function peli$engine$frame(game){
return peli.engine._frame.call(null,game);
});
peli.engine.board = (function peli$engine$board(game){
return peli.engine._board.call(null,game);
});
peli.engine.block_size = (function peli$engine$block_size(game){
return peli.engine._block_size.call(null,game);
});
peli.engine.state = (function peli$engine$state(game){
return peli.engine._state.call(null,game);
});
peli.engine.solids = (function peli$engine$solids(game){
return peli.engine._solids.call(null,game);
});
peli.engine.characters = (function peli$engine$characters(game){
return peli.engine._charaters.call(null,game);
});
peli.engine.entity = (function peli$engine$entity(game,id){
return peli.engine._entity.call(null,game,id);
});
peli.engine.worlds = (function peli$engine$worlds(game){
return peli.engine._worlds.call(null,game);
});
peli.engine.world = (function peli$engine$world(game,id){
return peli.engine._world.call(null,game,id);
});
peli.engine.overlays = (function peli$engine$overlays(game){
return peli.engine._overlays.call(null,game);
});
peli.engine.framed_character = (function peli$engine$framed_character(game){
return peli.engine._framed_character.call(null,game);
});
peli.engine.update_frame = (function peli$engine$update_frame(game,func){
return peli.engine._update_frame.call(null,game,func);
});
peli.engine.collision_matrix = (function peli$engine$collision_matrix(game){
return peli.engine._collision_matrix.call(null,game);
});
peli.engine.set_collision_matrix = (function peli$engine$set_collision_matrix(game,matrix){
return peli.engine._set_collision_matrix.call(null,game,matrix);
});
peli.engine.update_state = (function peli$engine$update_state(game,func){
return peli.engine._update_state.call(null,game,func);
});
peli.engine.switch_worlds = (function peli$engine$switch_worlds(game,world_id){
return peli.engine._switch_worlds.call(null,game,world_id);
});
peli.engine.update_entity = (function peli$engine$update_entity(game,id,func){
return peli.engine._update_entity.call(null,game,id,func);
});
peli.engine.hide_entity = (function peli$engine$hide_entity(game,id){
return peli.engine._hide_entity.call(null,game,id);
});
peli.engine.show_entity = (function peli$engine$show_entity(game,id){
return peli.engine._show_entity.call(null,game,id);
});
peli.engine.init_world = (function peli$engine$init_world(game){
return peli.engine._init_world.call(null,game);
});
peli.engine.step = (function peli$engine$step(game,ch){
return peli.engine._step.call(null,game,ch);
});
peli.engine.key_actions = (function peli$engine$key_actions(game,world_id){
return peli.engine._key_actions.call(null,game,world_id);
});
peli.engine.initial_draw = (function peli$engine$initial_draw(game,ch,target_id){
return peli.engine._initial_draw.call(null,game,ch,target_id);
});
peli.engine.debug = (function peli$engine$debug(game){
return peli.engine._debug.call(null,game);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
peli.engine.World = (function (board,frame,solids,characters,overlays,framed,registry,sprites,sounds,key_actions,run_state,__meta,__extmap,__hash){
this.board = board;
this.frame = frame;
this.solids = solids;
this.characters = characters;
this.overlays = overlays;
this.framed = framed;
this.registry = registry;
this.sprites = sprites;
this.sounds = sounds;
this.key_actions = key_actions;
this.run_state = run_state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
peli.engine.World.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16944__auto__,k__16945__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return cljs.core._lookup.call(null,this__16944__auto____$1,k__16945__auto__,null);
});

peli.engine.World.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16946__auto__,k24681,else__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
var G__24683 = (((k24681 instanceof cljs.core.Keyword))?k24681.fqn:null);
switch (G__24683) {
case "overlays":
return self__.overlays;

break;
case "characters":
return self__.characters;

break;
case "framed":
return self__.framed;

break;
case "frame":
return self__.frame;

break;
case "registry":
return self__.registry;

break;
case "key-actions":
return self__.key_actions;

break;
case "run-state":
return self__.run_state;

break;
case "sounds":
return self__.sounds;

break;
case "sprites":
return self__.sprites;

break;
case "board":
return self__.board;

break;
case "solids":
return self__.solids;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24681,else__16947__auto__);

}
});

peli.engine.World.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16958__auto__,writer__16959__auto__,opts__16960__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
var pr_pair__16961__auto__ = ((function (this__16958__auto____$1){
return (function (keyval__16962__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16959__auto__,cljs.core.pr_writer,""," ","",opts__16960__auto__,keyval__16962__auto__);
});})(this__16958__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16959__auto__,pr_pair__16961__auto__,"#peli.engine.World{",", ","}",opts__16960__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"board","board",-1907017633),self__.board],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"frame","frame",-1711082588),self__.frame],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"solids","solids",-764118369),self__.solids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"characters","characters",-163867197),self__.characters],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"overlays","overlays",-1346586303),self__.overlays],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"framed","framed",207165444),self__.framed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"registry","registry",1021159018),self__.registry],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sprites","sprites",-1835833922),self__.sprites],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sounds","sounds",1244211385),self__.sounds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key-actions","key-actions",1449289164),self__.key_actions],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"run-state","run-state",-1367818032),self__.run_state],null))], null),self__.__extmap));
});

peli.engine.World.prototype.cljs$core$IIterable$ = true;

peli.engine.World.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24680){
var self__ = this;
var G__24680__$1 = this;
return (new cljs.core.RecordIter((0),G__24680__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"solids","solids",-764118369),new cljs.core.Keyword(null,"characters","characters",-163867197),new cljs.core.Keyword(null,"overlays","overlays",-1346586303),new cljs.core.Keyword(null,"framed","framed",207165444),new cljs.core.Keyword(null,"registry","registry",1021159018),new cljs.core.Keyword(null,"sprites","sprites",-1835833922),new cljs.core.Keyword(null,"sounds","sounds",1244211385),new cljs.core.Keyword(null,"key-actions","key-actions",1449289164),new cljs.core.Keyword(null,"run-state","run-state",-1367818032)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

peli.engine.World.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16942__auto__){
var self__ = this;
var this__16942__auto____$1 = this;
return self__.__meta;
});

peli.engine.World.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16938__auto__){
var self__ = this;
var this__16938__auto____$1 = this;
return (new peli.engine.World(self__.board,self__.frame,self__.solids,self__.characters,self__.overlays,self__.framed,self__.registry,self__.sprites,self__.sounds,self__.key_actions,self__.run_state,self__.__meta,self__.__extmap,self__.__hash));
});

peli.engine.World.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16948__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

peli.engine.World.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16939__auto__){
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

peli.engine.World.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16940__auto__,other__16941__auto__){
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

peli.engine.World.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16953__auto__,k__16954__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"overlays","overlays",-1346586303),null,new cljs.core.Keyword(null,"characters","characters",-163867197),null,new cljs.core.Keyword(null,"framed","framed",207165444),null,new cljs.core.Keyword(null,"frame","frame",-1711082588),null,new cljs.core.Keyword(null,"registry","registry",1021159018),null,new cljs.core.Keyword(null,"key-actions","key-actions",1449289164),null,new cljs.core.Keyword(null,"run-state","run-state",-1367818032),null,new cljs.core.Keyword(null,"sounds","sounds",1244211385),null,new cljs.core.Keyword(null,"sprites","sprites",-1835833922),null,new cljs.core.Keyword(null,"board","board",-1907017633),null,new cljs.core.Keyword(null,"solids","solids",-764118369),null], null), null),k__16954__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16953__auto____$1),self__.__meta),k__16954__auto__);
} else {
return (new peli.engine.World(self__.board,self__.frame,self__.solids,self__.characters,self__.overlays,self__.framed,self__.registry,self__.sprites,self__.sounds,self__.key_actions,self__.run_state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16954__auto__)),null));
}
});

peli.engine.World.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16951__auto__,k__16952__auto__,G__24680){
var self__ = this;
var this__16951__auto____$1 = this;
var pred__24684 = cljs.core.keyword_identical_QMARK_;
var expr__24685 = k__16952__auto__;
if(cljs.core.truth_(pred__24684.call(null,new cljs.core.Keyword(null,"board","board",-1907017633),expr__24685))){
return (new peli.engine.World(G__24680,self__.frame,self__.solids,self__.characters,self__.overlays,self__.framed,self__.registry,self__.sprites,self__.sounds,self__.key_actions,self__.run_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24684.call(null,new cljs.core.Keyword(null,"frame","frame",-1711082588),expr__24685))){
return (new peli.engine.World(self__.board,G__24680,self__.solids,self__.characters,self__.overlays,self__.framed,self__.registry,self__.sprites,self__.sounds,self__.key_actions,self__.run_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24684.call(null,new cljs.core.Keyword(null,"solids","solids",-764118369),expr__24685))){
return (new peli.engine.World(self__.board,self__.frame,G__24680,self__.characters,self__.overlays,self__.framed,self__.registry,self__.sprites,self__.sounds,self__.key_actions,self__.run_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24684.call(null,new cljs.core.Keyword(null,"characters","characters",-163867197),expr__24685))){
return (new peli.engine.World(self__.board,self__.frame,self__.solids,G__24680,self__.overlays,self__.framed,self__.registry,self__.sprites,self__.sounds,self__.key_actions,self__.run_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24684.call(null,new cljs.core.Keyword(null,"overlays","overlays",-1346586303),expr__24685))){
return (new peli.engine.World(self__.board,self__.frame,self__.solids,self__.characters,G__24680,self__.framed,self__.registry,self__.sprites,self__.sounds,self__.key_actions,self__.run_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24684.call(null,new cljs.core.Keyword(null,"framed","framed",207165444),expr__24685))){
return (new peli.engine.World(self__.board,self__.frame,self__.solids,self__.characters,self__.overlays,G__24680,self__.registry,self__.sprites,self__.sounds,self__.key_actions,self__.run_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24684.call(null,new cljs.core.Keyword(null,"registry","registry",1021159018),expr__24685))){
return (new peli.engine.World(self__.board,self__.frame,self__.solids,self__.characters,self__.overlays,self__.framed,G__24680,self__.sprites,self__.sounds,self__.key_actions,self__.run_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24684.call(null,new cljs.core.Keyword(null,"sprites","sprites",-1835833922),expr__24685))){
return (new peli.engine.World(self__.board,self__.frame,self__.solids,self__.characters,self__.overlays,self__.framed,self__.registry,G__24680,self__.sounds,self__.key_actions,self__.run_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24684.call(null,new cljs.core.Keyword(null,"sounds","sounds",1244211385),expr__24685))){
return (new peli.engine.World(self__.board,self__.frame,self__.solids,self__.characters,self__.overlays,self__.framed,self__.registry,self__.sprites,G__24680,self__.key_actions,self__.run_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24684.call(null,new cljs.core.Keyword(null,"key-actions","key-actions",1449289164),expr__24685))){
return (new peli.engine.World(self__.board,self__.frame,self__.solids,self__.characters,self__.overlays,self__.framed,self__.registry,self__.sprites,self__.sounds,G__24680,self__.run_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24684.call(null,new cljs.core.Keyword(null,"run-state","run-state",-1367818032),expr__24685))){
return (new peli.engine.World(self__.board,self__.frame,self__.solids,self__.characters,self__.overlays,self__.framed,self__.registry,self__.sprites,self__.sounds,self__.key_actions,G__24680,self__.__meta,self__.__extmap,null));
} else {
return (new peli.engine.World(self__.board,self__.frame,self__.solids,self__.characters,self__.overlays,self__.framed,self__.registry,self__.sprites,self__.sounds,self__.key_actions,self__.run_state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16952__auto__,G__24680),null));
}
}
}
}
}
}
}
}
}
}
}
});

peli.engine.World.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"board","board",-1907017633),self__.board],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"frame","frame",-1711082588),self__.frame],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"solids","solids",-764118369),self__.solids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"characters","characters",-163867197),self__.characters],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"overlays","overlays",-1346586303),self__.overlays],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"framed","framed",207165444),self__.framed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"registry","registry",1021159018),self__.registry],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sprites","sprites",-1835833922),self__.sprites],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sounds","sounds",1244211385),self__.sounds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key-actions","key-actions",1449289164),self__.key_actions],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"run-state","run-state",-1367818032),self__.run_state],null))], null),self__.__extmap));
});

peli.engine.World.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16943__auto__,G__24680){
var self__ = this;
var this__16943__auto____$1 = this;
return (new peli.engine.World(self__.board,self__.frame,self__.solids,self__.characters,self__.overlays,self__.framed,self__.registry,self__.sprites,self__.sounds,self__.key_actions,self__.run_state,G__24680,self__.__extmap,self__.__hash));
});

peli.engine.World.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16949__auto__,entry__16950__auto__){
var self__ = this;
var this__16949__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16950__auto__)){
return cljs.core._assoc.call(null,this__16949__auto____$1,cljs.core._nth.call(null,entry__16950__auto__,(0)),cljs.core._nth.call(null,entry__16950__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16949__auto____$1,entry__16950__auto__);
}
});

peli.engine.World.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"frame","frame",-70551061,null),new cljs.core.Symbol(null,"solids","solids",876413158,null),new cljs.core.Symbol(null,"characters","characters",1476664330,null),new cljs.core.Symbol(null,"overlays","overlays",293945224,null),new cljs.core.Symbol(null,"framed","framed",1847696971,null),new cljs.core.Symbol(null,"registry","registry",-1633276751,null),new cljs.core.Symbol(null,"sprites","sprites",-195302395,null),new cljs.core.Symbol(null,"sounds","sounds",-1410224384,null),new cljs.core.Symbol(null,"key-actions","key-actions",-1205146605,null),new cljs.core.Symbol(null,"run-state","run-state",272713495,null)], null);
});

peli.engine.World.cljs$lang$type = true;

peli.engine.World.cljs$lang$ctorPrSeq = (function (this__16978__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"peli.engine/World");
});

peli.engine.World.cljs$lang$ctorPrWriter = (function (this__16978__auto__,writer__16979__auto__){
return cljs.core._write.call(null,writer__16979__auto__,"peli.engine/World");
});

peli.engine.__GT_World = (function peli$engine$__GT_World(board,frame,solids,characters,overlays,framed,registry,sprites,sounds,key_actions,run_state){
return (new peli.engine.World(board,frame,solids,characters,overlays,framed,registry,sprites,sounds,key_actions,run_state,null,null,null));
});

peli.engine.map__GT_World = (function peli$engine$map__GT_World(G__24682){
return (new peli.engine.World(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(G__24682),new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(G__24682),new cljs.core.Keyword(null,"solids","solids",-764118369).cljs$core$IFn$_invoke$arity$1(G__24682),new cljs.core.Keyword(null,"characters","characters",-163867197).cljs$core$IFn$_invoke$arity$1(G__24682),new cljs.core.Keyword(null,"overlays","overlays",-1346586303).cljs$core$IFn$_invoke$arity$1(G__24682),new cljs.core.Keyword(null,"framed","framed",207165444).cljs$core$IFn$_invoke$arity$1(G__24682),new cljs.core.Keyword(null,"registry","registry",1021159018).cljs$core$IFn$_invoke$arity$1(G__24682),new cljs.core.Keyword(null,"sprites","sprites",-1835833922).cljs$core$IFn$_invoke$arity$1(G__24682),new cljs.core.Keyword(null,"sounds","sounds",1244211385).cljs$core$IFn$_invoke$arity$1(G__24682),new cljs.core.Keyword(null,"key-actions","key-actions",1449289164).cljs$core$IFn$_invoke$arity$1(G__24682),new cljs.core.Keyword(null,"run-state","run-state",-1367818032).cljs$core$IFn$_invoke$arity$1(G__24682),null,cljs.core.dissoc.call(null,G__24682,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"solids","solids",-764118369),new cljs.core.Keyword(null,"characters","characters",-163867197),new cljs.core.Keyword(null,"overlays","overlays",-1346586303),new cljs.core.Keyword(null,"framed","framed",207165444),new cljs.core.Keyword(null,"registry","registry",1021159018),new cljs.core.Keyword(null,"sprites","sprites",-1835833922),new cljs.core.Keyword(null,"sounds","sounds",1244211385),new cljs.core.Keyword(null,"key-actions","key-actions",1449289164),new cljs.core.Keyword(null,"run-state","run-state",-1367818032)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
peli.engine.Game = (function (worlds,active_world,state,__meta,__extmap,__hash){
this.worlds = worlds;
this.active_world = active_world;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
peli.engine.Game.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16944__auto__,k__16945__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return cljs.core._lookup.call(null,this__16944__auto____$1,k__16945__auto__,null);
});

peli.engine.Game.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16946__auto__,k24689,else__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
var G__24691 = (((k24689 instanceof cljs.core.Keyword))?k24689.fqn:null);
switch (G__24691) {
case "worlds":
return self__.worlds;

break;
case "active-world":
return self__.active_world;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24689,else__16947__auto__);

}
});

peli.engine.Game.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16958__auto__,writer__16959__auto__,opts__16960__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
var pr_pair__16961__auto__ = ((function (this__16958__auto____$1){
return (function (keyval__16962__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16959__auto__,cljs.core.pr_writer,""," ","",opts__16960__auto__,keyval__16962__auto__);
});})(this__16958__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16959__auto__,pr_pair__16961__auto__,"#peli.engine.Game{",", ","}",opts__16960__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"worlds","worlds",-1076808946),self__.worlds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-world","active-world",1609458985),self__.active_world],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});

peli.engine.Game.prototype.cljs$core$IIterable$ = true;

peli.engine.Game.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24688){
var self__ = this;
var G__24688__$1 = this;
return (new cljs.core.RecordIter((0),G__24688__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worlds","worlds",-1076808946),new cljs.core.Keyword(null,"active-world","active-world",1609458985),new cljs.core.Keyword(null,"state","state",-1988618099)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

peli.engine.Game.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16942__auto__){
var self__ = this;
var this__16942__auto____$1 = this;
return self__.__meta;
});

peli.engine.Game.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16938__auto__){
var self__ = this;
var this__16938__auto____$1 = this;
return (new peli.engine.Game(self__.worlds,self__.active_world,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});

peli.engine.Game.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16948__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

peli.engine.Game.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16939__auto__){
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

peli.engine.Game.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16940__auto__,other__16941__auto__){
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

peli.engine.Game.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16953__auto__,k__16954__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active-world","active-world",1609458985),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"worlds","worlds",-1076808946),null], null), null),k__16954__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16953__auto____$1),self__.__meta),k__16954__auto__);
} else {
return (new peli.engine.Game(self__.worlds,self__.active_world,self__.state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16954__auto__)),null));
}
});

peli.engine.Game.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16951__auto__,k__16952__auto__,G__24688){
var self__ = this;
var this__16951__auto____$1 = this;
var pred__24692 = cljs.core.keyword_identical_QMARK_;
var expr__24693 = k__16952__auto__;
if(cljs.core.truth_(pred__24692.call(null,new cljs.core.Keyword(null,"worlds","worlds",-1076808946),expr__24693))){
return (new peli.engine.Game(G__24688,self__.active_world,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24692.call(null,new cljs.core.Keyword(null,"active-world","active-world",1609458985),expr__24693))){
return (new peli.engine.Game(self__.worlds,G__24688,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24692.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__24693))){
return (new peli.engine.Game(self__.worlds,self__.active_world,G__24688,self__.__meta,self__.__extmap,null));
} else {
return (new peli.engine.Game(self__.worlds,self__.active_world,self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16952__auto__,G__24688),null));
}
}
}
});

peli.engine.Game.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"worlds","worlds",-1076808946),self__.worlds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-world","active-world",1609458985),self__.active_world],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});

peli.engine.Game.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16943__auto__,G__24688){
var self__ = this;
var this__16943__auto____$1 = this;
return (new peli.engine.Game(self__.worlds,self__.active_world,self__.state,G__24688,self__.__extmap,self__.__hash));
});

peli.engine.Game.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16949__auto__,entry__16950__auto__){
var self__ = this;
var this__16949__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16950__auto__)){
return cljs.core._assoc.call(null,this__16949__auto____$1,cljs.core._nth.call(null,entry__16950__auto__,(0)),cljs.core._nth.call(null,entry__16950__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16949__auto____$1,entry__16950__auto__);
}
});

peli.engine.Game.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"worlds","worlds",563722581,null),new cljs.core.Symbol(null,"active-world","active-world",-1044976784,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
});

peli.engine.Game.cljs$lang$type = true;

peli.engine.Game.cljs$lang$ctorPrSeq = (function (this__16978__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"peli.engine/Game");
});

peli.engine.Game.cljs$lang$ctorPrWriter = (function (this__16978__auto__,writer__16979__auto__){
return cljs.core._write.call(null,writer__16979__auto__,"peli.engine/Game");
});

peli.engine.__GT_Game = (function peli$engine$__GT_Game(worlds,active_world,state){
return (new peli.engine.Game(worlds,active_world,state,null,null,null));
});

peli.engine.map__GT_Game = (function peli$engine$map__GT_Game(G__24690){
return (new peli.engine.Game(new cljs.core.Keyword(null,"worlds","worlds",-1076808946).cljs$core$IFn$_invoke$arity$1(G__24690),new cljs.core.Keyword(null,"active-world","active-world",1609458985).cljs$core$IFn$_invoke$arity$1(G__24690),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__24690),null,cljs.core.dissoc.call(null,G__24690,new cljs.core.Keyword(null,"worlds","worlds",-1076808946),new cljs.core.Keyword(null,"active-world","active-world",1609458985),new cljs.core.Keyword(null,"state","state",-1988618099)),null));
});


/**
 * @interface
 */
peli.engine.Gravity = function(){};

peli.engine.gravity = (function peli$engine$gravity(this$,game,ch){
if((!((this$ == null))) && (!((this$.peli$engine$Gravity$gravity$arity$3 == null)))){
return this$.peli$engine$Gravity$gravity$arity$3(this$,game,ch);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine.gravity[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$,game,ch);
} else {
var m__16986__auto____$1 = (peli.engine.gravity["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$,game,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Gravity.gravity",this$);
}
}
}
});


/**
 * @interface
 */
peli.engine.Physics = function(){};

peli.engine.physics = (function peli$engine$physics(this$,time_diff,game,ch){
if((!((this$ == null))) && (!((this$.peli$engine$Physics$physics$arity$4 == null)))){
return this$.peli$engine$Physics$physics$arity$4(this$,time_diff,game,ch);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine.physics[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$,time_diff,game,ch);
} else {
var m__16986__auto____$1 = (peli.engine.physics["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$,time_diff,game,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Physics.physics",this$);
}
}
}
});


/**
 * @interface
 */
peli.engine.Pen = function(){};

peli.engine.draw = (function peli$engine$draw(this$,game,ch){
if((!((this$ == null))) && (!((this$.peli$engine$Pen$draw$arity$3 == null)))){
return this$.peli$engine$Pen$draw$arity$3(this$,game,ch);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine.draw[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$,game,ch);
} else {
var m__16986__auto____$1 = (peli.engine.draw["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$,game,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pen.draw",this$);
}
}
}
});


/**
 * @interface
 */
peli.engine.Collision = function(){};

peli.engine.collide = (function peli$engine$collide(this$,body,game,ch){
if((!((this$ == null))) && (!((this$.peli$engine$Collision$collide$arity$4 == null)))){
return this$.peli$engine$Collision$collide$arity$4(this$,body,game,ch);
} else {
var x__16985__auto__ = (((this$ == null))?null:this$);
var m__16986__auto__ = (peli.engine.collide[goog.typeOf(x__16985__auto__)]);
if(!((m__16986__auto__ == null))){
return m__16986__auto__.call(null,this$,body,game,ch);
} else {
var m__16986__auto____$1 = (peli.engine.collide["_"]);
if(!((m__16986__auto____$1 == null))){
return m__16986__auto____$1.call(null,this$,body,game,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Collision.collide",this$);
}
}
}
});

(peli.engine.Physics["object"] = true);

(peli.engine.physics["object"] = (function (this$,time_diff,game,ch){
return this$;
}));
(peli.engine.Gravity["object"] = true);

(peli.engine.gravity["object"] = (function (this$,game,ch){
return this$;
}));
(peli.engine.Pen["object"] = true);

(peli.engine.draw["object"] = (function (this$,game,ch){
return this$;
}));
(peli.engine.Collision["object"] = true);

(peli.engine.collide["object"] = (function (this$,body,ch,game){
return this$;
}));
peli.engine.overlap_QMARK_ = (function peli$engine$overlap_QMARK_(body1,body2){
var map__24702 = body1;
var map__24702__$1 = ((((!((map__24702 == null)))?((((map__24702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24702):map__24702);
var x = cljs.core.get.call(null,map__24702__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__24702__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__24702__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__24702__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var map__24703 = body2;
var map__24703__$1 = ((((!((map__24703 == null)))?((((map__24703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24703):map__24703);
var x2 = cljs.core.get.call(null,map__24703__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__24703__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var h2 = cljs.core.get.call(null,map__24703__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var w2 = cljs.core.get.call(null,map__24703__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var vec__24704 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + width),(y + height)], null);
var lx = cljs.core.nth.call(null,vec__24704,(0),null);
var ly = cljs.core.nth.call(null,vec__24704,(1),null);
var vec__24705 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x2 + w2),(y2 + h2)], null);
var lx2 = cljs.core.nth.call(null,vec__24705,(0),null);
var ly2 = cljs.core.nth.call(null,vec__24705,(1),null);
return ((lx > x2)) && ((x <= lx2)) && ((ly > y2)) && ((y <= ly2));
});
peli.engine.check_bounds = (function peli$engine$check_bounds(n,offset,min,max){
if((n < min)){
return min;
} else {
if(((n + offset) > max)){
return (n - ((n + offset) - max));
} else {
return n;

}
}
});
peli.engine.translate_coords = (function peli$engine$translate_coords(obj,frame){
return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(obj) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frame)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(obj) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frame)));
});
peli.engine.apply_gravity = (function peli$engine$apply_gravity(var_args){
var args24708 = [];
var len__17388__auto___24711 = arguments.length;
var i__17389__auto___24712 = (0);
while(true){
if((i__17389__auto___24712 < len__17388__auto___24711)){
args24708.push((arguments[i__17389__auto___24712]));

var G__24713 = (i__17389__auto___24712 + (1));
i__17389__auto___24712 = G__24713;
continue;
} else {
}
break;
}

var G__24710 = args24708.length;
switch (G__24710) {
case 1:
return peli.engine.apply_gravity.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return peli.engine.apply_gravity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24708.length)].join('')));

}
});

peli.engine.apply_gravity.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return peli.engine.apply_gravity.call(null,obj,0.3,(-5));
});

peli.engine.apply_gravity.cljs$core$IFn$_invoke$arity$3 = (function (obj,gravity,t_velocity){
var vy = new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(obj);
return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"vy","vy",-2018509997),(((vy > t_velocity))?(vy - gravity):vy));
});

peli.engine.apply_gravity.cljs$lang$maxFixedArity = 3;
peli.engine.apply_physics = (function peli$engine$apply_physics(var_args){
var args24715 = [];
var len__17388__auto___24720 = arguments.length;
var i__17389__auto___24721 = (0);
while(true){
if((i__17389__auto___24721 < len__17388__auto___24720)){
args24715.push((arguments[i__17389__auto___24721]));

var G__24722 = (i__17389__auto___24721 + (1));
i__17389__auto___24721 = G__24722;
continue;
} else {
}
break;
}

var G__24717 = args24715.length;
switch (G__24717) {
case 2:
return peli.engine.apply_physics.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return peli.engine.apply_physics.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24715.length)].join('')));

}
});

peli.engine.apply_physics.cljs$core$IFn$_invoke$arity$2 = (function (obj,game){
return peli.engine.apply_physics.call(null,obj,game,(0));
});

peli.engine.apply_physics.cljs$core$IFn$_invoke$arity$3 = (function (obj,game,time_diff){
var board = peli.engine.board.call(null,game);
var map__24718 = obj;
var map__24718__$1 = ((((!((map__24718 == null)))?((((map__24718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24718):map__24718);
var height = cljs.core.get.call(null,map__24718__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__24718__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var x = cljs.core.get.call(null,map__24718__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__24718__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vx = cljs.core.get.call(null,map__24718__$1,new cljs.core.Keyword(null,"vx","vx",-1685168462));
var vy = cljs.core.get.call(null,map__24718__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"x","x",2099068185),peli.engine.check_bounds.call(null,(x + vx),width,(0),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(board)),new cljs.core.Keyword(null,"y","y",-1757859776),peli.engine.check_bounds.call(null,(y - vy),height,(0),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(board)));
});

peli.engine.apply_physics.cljs$lang$maxFixedArity = 3;
peli.engine.collide_action = (function peli$engine$collide_action(p__24724,p__24725,actions){
var map__24733 = p__24724;
var map__24733__$1 = ((((!((map__24733 == null)))?((((map__24733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24733):map__24733);
var body1 = map__24733__$1;
var height = cljs.core.get.call(null,map__24733__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__24733__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var x = cljs.core.get.call(null,map__24733__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__24733__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vx = cljs.core.get.call(null,map__24733__$1,new cljs.core.Keyword(null,"vx","vx",-1685168462));
var vy = cljs.core.get.call(null,map__24733__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
var map__24734 = p__24725;
var map__24734__$1 = ((((!((map__24734 == null)))?((((map__24734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24734):map__24734);
var body2 = map__24734__$1;
var x2 = cljs.core.get.call(null,map__24734__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__24734__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var h2 = cljs.core.get.call(null,map__24734__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var w2 = cljs.core.get.call(null,map__24734__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var ox = (x - vx);
var oy = (y + vy);
var ox2 = (x2 - cljs.core.get.call(null,body2,new cljs.core.Keyword(null,"vx","vx",-1685168462),(0)));
var oy2 = (y2 + cljs.core.get.call(null,body2,new cljs.core.Keyword(null,"vy","vy",-2018509997),(0)));
var vec__24737 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ox + width),(oy + height)], null);
var lx = cljs.core.nth.call(null,vec__24737,(0),null);
var ly = cljs.core.nth.call(null,vec__24737,(1),null);
var vec__24738 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ox2 + w2),(oy2 + h2)], null);
var lx2 = cljs.core.nth.call(null,vec__24738,(0),null);
var ly2 = cljs.core.nth.call(null,vec__24738,(1),null);
var G__24739 = body1;
var G__24739__$1 = (cljs.core.truth_((function (){var and__16318__auto__ = (ly <= oy2);
if(and__16318__auto__){
return new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(actions);
} else {
return and__16318__auto__;
}
})())?new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(actions).call(null,G__24739):G__24739);
var G__24739__$2 = (cljs.core.truth_((function (){var and__16318__auto__ = (lx <= ox2);
if(and__16318__auto__){
return new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(actions);
} else {
return and__16318__auto__;
}
})())?new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(actions).call(null,G__24739__$1):G__24739__$1);
var G__24739__$3 = (cljs.core.truth_((function (){var and__16318__auto__ = (oy >= ly2);
if(and__16318__auto__){
return new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(actions);
} else {
return and__16318__auto__;
}
})())?new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(actions).call(null,G__24739__$2):G__24739__$2);
var G__24739__$4 = (cljs.core.truth_((function (){var and__16318__auto__ = (ox >= lx2);
if(and__16318__auto__){
return new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(actions);
} else {
return and__16318__auto__;
}
})())?new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(actions).call(null,G__24739__$3):G__24739__$3);
var G__24739__$5 = (cljs.core.truth_((function (){var and__16318__auto__ = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(actions);
if(cljs.core.truth_(and__16318__auto__)){
return ((ly <= oy2)) || ((lx <= ox2)) || ((oy >= ly2)) || ((ox >= lx2));
} else {
return and__16318__auto__;
}
})())?new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(actions).call(null,G__24739__$4):G__24739__$4);
return G__24739__$5;
});
peli.engine.collide_solid = (function peli$engine$collide_solid(p__24744,p__24745){
var map__24750 = p__24744;
var map__24750__$1 = ((((!((map__24750 == null)))?((((map__24750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24750):map__24750);
var body1 = map__24750__$1;
var height = cljs.core.get.call(null,map__24750__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__24750__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var x = cljs.core.get.call(null,map__24750__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__24750__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vx = cljs.core.get.call(null,map__24750__$1,new cljs.core.Keyword(null,"vx","vx",-1685168462));
var vy = cljs.core.get.call(null,map__24750__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
var map__24751 = p__24745;
var map__24751__$1 = ((((!((map__24751 == null)))?((((map__24751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24751):map__24751);
var body2 = map__24751__$1;
var x2 = cljs.core.get.call(null,map__24751__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__24751__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var h2 = cljs.core.get.call(null,map__24751__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var w2 = cljs.core.get.call(null,map__24751__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return peli.engine.collide_action.call(null,body1,body2,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),((function (map__24750,map__24750__$1,body1,height,width,x,y,vx,vy,map__24751,map__24751__$1,body2,x2,y2,h2,w2){
return (function (p1__24740_SHARP_){
return cljs.core.assoc.call(null,p1__24740_SHARP_,new cljs.core.Keyword(null,"y","y",-1757859776),((y2 - height) - 0.1),new cljs.core.Keyword(null,"vy","vy",-2018509997),(0));
});})(map__24750,map__24750__$1,body1,height,width,x,y,vx,vy,map__24751,map__24751__$1,body2,x2,y2,h2,w2))
,new cljs.core.Keyword(null,"right","right",-452581833),((function (map__24750,map__24750__$1,body1,height,width,x,y,vx,vy,map__24751,map__24751__$1,body2,x2,y2,h2,w2){
return (function (p1__24741_SHARP_){
return cljs.core.assoc.call(null,p1__24741_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185),((x2 - width) - 0.1));
});})(map__24750,map__24750__$1,body1,height,width,x,y,vx,vy,map__24751,map__24751__$1,body2,x2,y2,h2,w2))
,new cljs.core.Keyword(null,"top","top",-1856271961),((function (map__24750,map__24750__$1,body1,height,width,x,y,vx,vy,map__24751,map__24751__$1,body2,x2,y2,h2,w2){
return (function (p1__24742_SHARP_){
return cljs.core.assoc.call(null,p1__24742_SHARP_,new cljs.core.Keyword(null,"y","y",-1757859776),((y2 + h2) + 0.1),new cljs.core.Keyword(null,"vy","vy",-2018509997),(0));
});})(map__24750,map__24750__$1,body1,height,width,x,y,vx,vy,map__24751,map__24751__$1,body2,x2,y2,h2,w2))
,new cljs.core.Keyword(null,"left","left",-399115937),((function (map__24750,map__24750__$1,body1,height,width,x,y,vx,vy,map__24751,map__24751__$1,body2,x2,y2,h2,w2){
return (function (p1__24743_SHARP_){
return cljs.core.assoc.call(null,p1__24743_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185),((x2 + w2) + 0.1));
});})(map__24750,map__24750__$1,body1,height,width,x,y,vx,vy,map__24751,map__24751__$1,body2,x2,y2,h2,w2))
], null));
});
peli.engine.matrix_bounds = (function peli$engine$matrix_bounds(block_size,p__24754){
var map__24757 = p__24754;
var map__24757__$1 = ((((!((map__24757 == null)))?((((map__24757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24757):map__24757);
var x = cljs.core.get.call(null,map__24757__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__24757__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__24757__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__24757__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var col = Math.floor((x / block_size));
var row = Math.floor((y / block_size));
var max_col = Math.floor(((x + width) / block_size));
var max_row = Math.floor(((y + height) / block_size));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,row,max_col,max_row], null);
});
peli.engine.add_item_to_matrix = (function peli$engine$add_item_to_matrix(matrix,block_size,p__24759){
var map__24763 = p__24759;
var map__24763__$1 = ((((!((map__24763 == null)))?((((map__24763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24763):map__24763);
var item = map__24763__$1;
var id = cljs.core.get.call(null,map__24763__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vec__24765 = peli.engine.matrix_bounds.call(null,block_size,item);
var col = cljs.core.nth.call(null,vec__24765,(0),null);
var row = cljs.core.nth.call(null,vec__24765,(1),null);
var max_col = cljs.core.nth.call(null,vec__24765,(2),null);
var max_row = cljs.core.nth.call(null,vec__24765,(3),null);
return cljs.core.reduce.call(null,((function (vec__24765,col,row,max_col,max_row,map__24763,map__24763__$1,item,id){
return (function (m,row__$1){
return cljs.core.reduce.call(null,((function (vec__24765,col,row,max_col,max_row,map__24763,map__24763__$1,item,id){
return (function (m__$1,col__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row__$1,col__$1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),id);
});})(vec__24765,col,row,max_col,max_row,map__24763,map__24763__$1,item,id))
,m,cljs.core.range.call(null,col,(max_col + (1))));
});})(vec__24765,col,row,max_col,max_row,map__24763,map__24763__$1,item,id))
,matrix,cljs.core.range.call(null,row,(max_row + (1))));
});
peli.engine.print_item_location = (function peli$engine$print_item_location(matrix,block_size,id){
var seq__24778 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,matrix)));
var chunk__24779 = null;
var count__24780 = (0);
var i__24781 = (0);
while(true){
if((i__24781 < count__24780)){
var row = cljs.core._nth.call(null,chunk__24779,i__24781);
var seq__24782_24790 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,matrix))));
var chunk__24783_24791 = null;
var count__24784_24792 = (0);
var i__24785_24793 = (0);
while(true){
if((i__24785_24793 < count__24784_24792)){
var col_24794 = cljs.core._nth.call(null,chunk__24783_24791,i__24785_24793);
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.get_in.call(null,matrix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col_24794], null)),id))){
cljs.core.println.call(null,row,col_24794,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(col_24794 * block_size),new cljs.core.Keyword(null,"y","y",-1757859776),(row * block_size)], null));
} else {
}

var G__24795 = seq__24782_24790;
var G__24796 = chunk__24783_24791;
var G__24797 = count__24784_24792;
var G__24798 = (i__24785_24793 + (1));
seq__24782_24790 = G__24795;
chunk__24783_24791 = G__24796;
count__24784_24792 = G__24797;
i__24785_24793 = G__24798;
continue;
} else {
var temp__4425__auto___24799 = cljs.core.seq.call(null,seq__24782_24790);
if(temp__4425__auto___24799){
var seq__24782_24800__$1 = temp__4425__auto___24799;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24782_24800__$1)){
var c__17133__auto___24801 = cljs.core.chunk_first.call(null,seq__24782_24800__$1);
var G__24802 = cljs.core.chunk_rest.call(null,seq__24782_24800__$1);
var G__24803 = c__17133__auto___24801;
var G__24804 = cljs.core.count.call(null,c__17133__auto___24801);
var G__24805 = (0);
seq__24782_24790 = G__24802;
chunk__24783_24791 = G__24803;
count__24784_24792 = G__24804;
i__24785_24793 = G__24805;
continue;
} else {
var col_24806 = cljs.core.first.call(null,seq__24782_24800__$1);
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.get_in.call(null,matrix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col_24806], null)),id))){
cljs.core.println.call(null,row,col_24806,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(col_24806 * block_size),new cljs.core.Keyword(null,"y","y",-1757859776),(row * block_size)], null));
} else {
}

var G__24807 = cljs.core.next.call(null,seq__24782_24800__$1);
var G__24808 = null;
var G__24809 = (0);
var G__24810 = (0);
seq__24782_24790 = G__24807;
chunk__24783_24791 = G__24808;
count__24784_24792 = G__24809;
i__24785_24793 = G__24810;
continue;
}
} else {
}
}
break;
}

var G__24811 = seq__24778;
var G__24812 = chunk__24779;
var G__24813 = count__24780;
var G__24814 = (i__24781 + (1));
seq__24778 = G__24811;
chunk__24779 = G__24812;
count__24780 = G__24813;
i__24781 = G__24814;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24778);
if(temp__4425__auto__){
var seq__24778__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24778__$1)){
var c__17133__auto__ = cljs.core.chunk_first.call(null,seq__24778__$1);
var G__24815 = cljs.core.chunk_rest.call(null,seq__24778__$1);
var G__24816 = c__17133__auto__;
var G__24817 = cljs.core.count.call(null,c__17133__auto__);
var G__24818 = (0);
seq__24778 = G__24815;
chunk__24779 = G__24816;
count__24780 = G__24817;
i__24781 = G__24818;
continue;
} else {
var row = cljs.core.first.call(null,seq__24778__$1);
var seq__24786_24819 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,matrix))));
var chunk__24787_24820 = null;
var count__24788_24821 = (0);
var i__24789_24822 = (0);
while(true){
if((i__24789_24822 < count__24788_24821)){
var col_24823 = cljs.core._nth.call(null,chunk__24787_24820,i__24789_24822);
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.get_in.call(null,matrix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col_24823], null)),id))){
cljs.core.println.call(null,row,col_24823,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(col_24823 * block_size),new cljs.core.Keyword(null,"y","y",-1757859776),(row * block_size)], null));
} else {
}

var G__24824 = seq__24786_24819;
var G__24825 = chunk__24787_24820;
var G__24826 = count__24788_24821;
var G__24827 = (i__24789_24822 + (1));
seq__24786_24819 = G__24824;
chunk__24787_24820 = G__24825;
count__24788_24821 = G__24826;
i__24789_24822 = G__24827;
continue;
} else {
var temp__4425__auto___24828__$1 = cljs.core.seq.call(null,seq__24786_24819);
if(temp__4425__auto___24828__$1){
var seq__24786_24829__$1 = temp__4425__auto___24828__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24786_24829__$1)){
var c__17133__auto___24830 = cljs.core.chunk_first.call(null,seq__24786_24829__$1);
var G__24831 = cljs.core.chunk_rest.call(null,seq__24786_24829__$1);
var G__24832 = c__17133__auto___24830;
var G__24833 = cljs.core.count.call(null,c__17133__auto___24830);
var G__24834 = (0);
seq__24786_24819 = G__24831;
chunk__24787_24820 = G__24832;
count__24788_24821 = G__24833;
i__24789_24822 = G__24834;
continue;
} else {
var col_24835 = cljs.core.first.call(null,seq__24786_24829__$1);
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.get_in.call(null,matrix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col_24835], null)),id))){
cljs.core.println.call(null,row,col_24835,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(col_24835 * block_size),new cljs.core.Keyword(null,"y","y",-1757859776),(row * block_size)], null));
} else {
}

var G__24836 = cljs.core.next.call(null,seq__24786_24829__$1);
var G__24837 = null;
var G__24838 = (0);
var G__24839 = (0);
seq__24786_24819 = G__24836;
chunk__24787_24820 = G__24837;
count__24788_24821 = G__24838;
i__24789_24822 = G__24839;
continue;
}
} else {
}
}
break;
}

var G__24840 = cljs.core.next.call(null,seq__24778__$1);
var G__24841 = null;
var G__24842 = (0);
var G__24843 = (0);
seq__24778 = G__24840;
chunk__24779 = G__24841;
count__24780 = G__24842;
i__24781 = G__24843;
continue;
}
} else {
return null;
}
}
break;
}
});
peli.engine.add_items_to_matrix = (function peli$engine$add_items_to_matrix(matrix,block_size,items){
return cljs.core.reduce.call(null,(function (m,item){
return peli.engine.add_item_to_matrix.call(null,m,block_size,item);
}),matrix,items);
});
peli.engine.build_matrix = (function peli$engine$build_matrix(block_size,width,height){
var num_cols = Math.floor((width / block_size));
var num_rows = Math.floor((height / block_size));
return cljs.core.mapv.call(null,((function (num_cols,num_rows){
return (function (row){
return cljs.core.mapv.call(null,((function (num_cols,num_rows){
return (function (col){
return null;
});})(num_cols,num_rows))
,cljs.core.range.call(null,num_cols));
});})(num_cols,num_rows))
,cljs.core.range.call(null,num_rows));
});
peli.engine.init_collision_matrix = (function peli$engine$init_collision_matrix(game){
var block_size = peli.engine.block_size.call(null,game);
var map__24847 = peli.engine.board.call(null,game);
var map__24847__$1 = ((((!((map__24847 == null)))?((((map__24847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24847):map__24847);
var width = cljs.core.get.call(null,map__24847__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__24847__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var solids = peli.engine.solids.call(null,game);
var items = cljs.core.map.call(null,((function (block_size,map__24847,map__24847__$1,width,height,solids){
return (function (p1__24844_SHARP_){
return peli.engine.entity.call(null,game,p1__24844_SHARP_);
});})(block_size,map__24847,map__24847__$1,width,height,solids))
,solids);
var matrix = peli.engine.build_matrix.call(null,block_size,width,height);
return peli.engine.add_items_to_matrix.call(null,matrix,block_size,items);
});
peli.engine.generate_pairs = (function peli$engine$generate_pairs(p__24850){
var vec__24852 = p__24850;
var el = cljs.core.nth.call(null,vec__24852,(0),null);
var next = cljs.core.nthnext.call(null,vec__24852,(1));
if(cljs.core.empty_QMARK_.call(null,next)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.into.call(null,peli$engine$generate_pairs.call(null,next),cljs.core.map.call(null,((function (vec__24852,el,next){
return (function (p1__24849_SHARP_){
return cljs.core.PersistentHashSet.fromArray([p1__24849_SHARP_,el], true);
});})(vec__24852,el,next))
,next));
}
});
peli.engine.generate_collision_list = (function peli$engine$generate_collision_list(matrix,block_size,expanded_frame){
var vec__24860_24867 = peli.engine.matrix_bounds.call(null,block_size,expanded_frame);
var col_24868 = cljs.core.nth.call(null,vec__24860_24867,(0),null);
var row_24869 = cljs.core.nth.call(null,vec__24860_24867,(1),null);
var max_col_24870 = cljs.core.nth.call(null,vec__24860_24867,(2),null);
var max_row_24871 = cljs.core.nth.call(null,vec__24860_24867,(3),null);

return cljs.core.apply.call(null,clojure.set.union,(function (){var iter__17102__auto__ = (function peli$engine$generate_collision_list_$_iter__24861(s__24862){
return (new cljs.core.LazySeq(null,(function (){
var s__24862__$1 = s__24862;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24862__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var row = cljs.core.first.call(null,xs__4977__auto__);
var iterys__17098__auto__ = ((function (s__24862__$1,row,xs__4977__auto__,temp__4425__auto__){
return (function peli$engine$generate_collision_list_$_iter__24861_$_iter__24863(s__24864){
return (new cljs.core.LazySeq(null,((function (s__24862__$1,row,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__24864__$1 = s__24864;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__24864__$1);
if(temp__4425__auto____$1){
var s__24864__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24864__$2)){
var c__17100__auto__ = cljs.core.chunk_first.call(null,s__24864__$2);
var size__17101__auto__ = cljs.core.count.call(null,c__17100__auto__);
var b__24866 = cljs.core.chunk_buffer.call(null,size__17101__auto__);
if((function (){var i__24865 = (0);
while(true){
if((i__24865 < size__17101__auto__)){
var items = cljs.core._nth.call(null,c__17100__auto__,i__24865);
cljs.core.chunk_append.call(null,b__24866,peli.engine.generate_pairs.call(null,cljs.core.seq.call(null,items)));

var G__24872 = (i__24865 + (1));
i__24865 = G__24872;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24866),peli$engine$generate_collision_list_$_iter__24861_$_iter__24863.call(null,cljs.core.chunk_rest.call(null,s__24864__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24866),null);
}
} else {
var items = cljs.core.first.call(null,s__24864__$2);
return cljs.core.cons.call(null,peli.engine.generate_pairs.call(null,cljs.core.seq.call(null,items)),peli$engine$generate_collision_list_$_iter__24861_$_iter__24863.call(null,cljs.core.rest.call(null,s__24864__$2)));
}
} else {
return null;
}
break;
}
});})(s__24862__$1,row,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__24862__$1,row,xs__4977__auto__,temp__4425__auto__))
;
var fs__17099__auto__ = cljs.core.seq.call(null,iterys__17098__auto__.call(null,row));
if(fs__17099__auto__){
return cljs.core.concat.call(null,fs__17099__auto__,peli$engine$generate_collision_list_$_iter__24861.call(null,cljs.core.rest.call(null,s__24862__$1)));
} else {
var G__24873 = cljs.core.rest.call(null,s__24862__$1);
s__24862__$1 = G__24873;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17102__auto__.call(null,matrix);
})());
});
peli.engine.play_sound = (function peli$engine$play_sound(id){
return document.getElementById(id).play();
});
peli.engine.replace_entities = (function peli$engine$replace_entities(game,chars){
return cljs.core.reduce.call(null,(function (g,char$){
return peli.engine.update_entity.call(null,g,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(char$),(function (_){
return char$;
}));
}),game,chars);
});
peli.engine.handle_collision = (function peli$engine$handle_collision(ch,game,pair){
var vec__24875 = cljs.core.map.call(null,cljs.core.partial.call(null,peli.engine.entity,game),pair);
var b1 = cljs.core.nth.call(null,vec__24875,(0),null);
var b2 = cljs.core.nth.call(null,vec__24875,(1),null);
if(cljs.core.truth_(peli.engine.overlap_QMARK_.call(null,b1,b2))){
return peli.engine.replace_entities.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [peli.engine.collide.call(null,b1,b2,game,ch),peli.engine.collide.call(null,b2,b1,game,ch)], null));
} else {
return game;
}
});
peli.engine.run_physics = (function peli$engine$run_physics(game,ch){
var map__24880 = peli.engine.frame.call(null,game);
var map__24880__$1 = ((((!((map__24880 == null)))?((((map__24880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24880):map__24880);
var fx = cljs.core.get.call(null,map__24880__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var fy = cljs.core.get.call(null,map__24880__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var fw = cljs.core.get.call(null,map__24880__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var fh = cljs.core.get.call(null,map__24880__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var nx = (fx - (fw / (2)));
var nw = (fw * (2));
var ny = (fy - (fh / (2)));
var nh = (fh * (2));
var expanded_frame = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),nx,new cljs.core.Keyword(null,"y","y",-1757859776),ny,new cljs.core.Keyword(null,"width","width",-384071477),nw,new cljs.core.Keyword(null,"height","height",1025178622),nh], null);
var nbodies = cljs.core.map.call(null,((function (map__24880,map__24880__$1,fx,fy,fw,fh,nx,nw,ny,nh,expanded_frame){
return (function (p1__24877_SHARP_){
return peli.engine.physics.call(null,peli.engine.gravity.call(null,p1__24877_SHARP_,game,ch),null,game,ch);
});})(map__24880,map__24880__$1,fx,fy,fw,fh,nx,nw,ny,nh,expanded_frame))
,cljs.core.filter.call(null,((function (map__24880,map__24880__$1,fx,fy,fw,fh,nx,nw,ny,nh,expanded_frame){
return (function (p1__24876_SHARP_){
var and__16318__auto__ = peli.engine.overlap_QMARK_.call(null,p1__24876_SHARP_,expanded_frame);
if(cljs.core.truth_(and__16318__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(p1__24876_SHARP_));
} else {
return and__16318__auto__;
}
});})(map__24880,map__24880__$1,fx,fy,fw,fh,nx,nw,ny,nh,expanded_frame))
,cljs.core.map.call(null,cljs.core.partial.call(null,peli.engine.entity,game),peli.engine.characters.call(null,game))));
var coll_matrix = peli.engine.add_items_to_matrix.call(null,peli.engine.collision_matrix.call(null,game),peli.engine.block_size.call(null,game),nbodies);
var new_game = peli.engine.replace_entities.call(null,game,nbodies);
var pairs = peli.engine.generate_collision_list.call(null,coll_matrix,peli.engine.block_size.call(null,game),expanded_frame);
return cljs.core.reduce.call(null,cljs.core.partial.call(null,peli.engine.handle_collision,ch),new_game,pairs);
});
peli.engine.get_key_code = (function peli$engine$get_key_code(event){
var e = (cljs.core.truth_(event)?event:window.event);
var code = e.keyCode;
if(cljs.core.truth_((function (){var and__16318__auto__ = e.charCode;
if(cljs.core.truth_(and__16318__auto__)){
return cljs.core._EQ_.call(null,code,(0));
} else {
return and__16318__auto__;
}
})())){
return e.charCode;
} else {
return code;
}
});
peli.engine.code__GT_action = (function peli$engine$code__GT_action(actions,key){
return (function (code){
return cljs.core.get_in.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [code,key], null));
});
});
peli.engine.handle_keys = (function peli$engine$handle_keys(ch,actions){
var on_down = peli.engine.code__GT_action.call(null,actions,new cljs.core.Keyword(null,"on-down","on-down",2037743467));
var on_up = peli.engine.code__GT_action.call(null,actions,new cljs.core.Keyword(null,"on-up","on-up",-127496699));
document.onkeydown = ((function (on_down,on_up){
return (function (p1__24882_SHARP_){
var code = peli.engine.get_key_code.call(null,p1__24882_SHARP_);
if(cljs.core.truth_(on_down.call(null,code))){
var seq__24892 = cljs.core.seq.call(null,on_down.call(null,code));
var chunk__24893 = null;
var count__24894 = (0);
var i__24895 = (0);
while(true){
if((i__24895 < count__24894)){
var action = cljs.core._nth.call(null,chunk__24893,i__24895);
cljs.core.apply.call(null,peli.engine.send_action,ch,action);

var G__24900 = seq__24892;
var G__24901 = chunk__24893;
var G__24902 = count__24894;
var G__24903 = (i__24895 + (1));
seq__24892 = G__24900;
chunk__24893 = G__24901;
count__24894 = G__24902;
i__24895 = G__24903;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24892);
if(temp__4425__auto__){
var seq__24892__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24892__$1)){
var c__17133__auto__ = cljs.core.chunk_first.call(null,seq__24892__$1);
var G__24904 = cljs.core.chunk_rest.call(null,seq__24892__$1);
var G__24905 = c__17133__auto__;
var G__24906 = cljs.core.count.call(null,c__17133__auto__);
var G__24907 = (0);
seq__24892 = G__24904;
chunk__24893 = G__24905;
count__24894 = G__24906;
i__24895 = G__24907;
continue;
} else {
var action = cljs.core.first.call(null,seq__24892__$1);
cljs.core.apply.call(null,peli.engine.send_action,ch,action);

var G__24908 = cljs.core.next.call(null,seq__24892__$1);
var G__24909 = null;
var G__24910 = (0);
var G__24911 = (0);
seq__24892 = G__24908;
chunk__24893 = G__24909;
count__24894 = G__24910;
i__24895 = G__24911;
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
});})(on_down,on_up))
;

return document.onkeyup = ((function (on_down,on_up){
return (function (p1__24883_SHARP_){
var code = peli.engine.get_key_code.call(null,p1__24883_SHARP_);
if(cljs.core.truth_(on_up.call(null,code))){
var seq__24896 = cljs.core.seq.call(null,on_up.call(null,code));
var chunk__24897 = null;
var count__24898 = (0);
var i__24899 = (0);
while(true){
if((i__24899 < count__24898)){
var action = cljs.core._nth.call(null,chunk__24897,i__24899);
cljs.core.apply.call(null,peli.engine.send_action,ch,action);

var G__24912 = seq__24896;
var G__24913 = chunk__24897;
var G__24914 = count__24898;
var G__24915 = (i__24899 + (1));
seq__24896 = G__24912;
chunk__24897 = G__24913;
count__24898 = G__24914;
i__24899 = G__24915;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24896);
if(temp__4425__auto__){
var seq__24896__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24896__$1)){
var c__17133__auto__ = cljs.core.chunk_first.call(null,seq__24896__$1);
var G__24916 = cljs.core.chunk_rest.call(null,seq__24896__$1);
var G__24917 = c__17133__auto__;
var G__24918 = cljs.core.count.call(null,c__17133__auto__);
var G__24919 = (0);
seq__24896 = G__24916;
chunk__24897 = G__24917;
count__24898 = G__24918;
i__24899 = G__24919;
continue;
} else {
var action = cljs.core.first.call(null,seq__24896__$1);
cljs.core.apply.call(null,peli.engine.send_action,ch,action);

var G__24920 = cljs.core.next.call(null,seq__24896__$1);
var G__24921 = null;
var G__24922 = (0);
var G__24923 = (0);
seq__24896 = G__24920;
chunk__24897 = G__24921;
count__24898 = G__24922;
i__24899 = G__24923;
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
});})(on_down,on_up))
;
});
peli.engine.adjust_frame = (function peli$engine$adjust_frame(game){
var map__24931 = peli.engine.frame.call(null,game);
var map__24931__$1 = ((((!((map__24931 == null)))?((((map__24931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24931):map__24931);
var x = cljs.core.get.call(null,map__24931__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__24931__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__24931__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__24931__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var buffer = cljs.core.get.call(null,map__24931__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var dw = (function (){var or__16330__auto__ = buffer;
if(cljs.core.truth_(or__16330__auto__)){
return or__16330__auto__;
} else {
return (width * .2);
}
})();
var dh = (function (){var or__16330__auto__ = buffer;
if(cljs.core.truth_(or__16330__auto__)){
return or__16330__auto__;
} else {
return (height * .2);
}
})();
var tx = (x + dw);
var lx = ((x + width) - dw);
var ty = (y + dh);
var ly = ((y + height) - dh);
var map__24932 = peli.engine.framed_character.call(null,game);
var map__24932__$1 = ((((!((map__24932 == null)))?((((map__24932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24932):map__24932);
var hx = cljs.core.get.call(null,map__24932__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var hy = cljs.core.get.call(null,map__24932__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var nframe = (function (){var G__24936 = peli.engine.frame.call(null,game);
var G__24936__$1 = (((hx < tx))?cljs.core.assoc.call(null,G__24936,new cljs.core.Keyword(null,"x","x",2099068185),(x - (tx - hx))):G__24936);
var G__24936__$2 = (((hx > lx))?cljs.core.assoc.call(null,G__24936__$1,new cljs.core.Keyword(null,"x","x",2099068185),(x + (hx - lx))):G__24936__$1);
var G__24936__$3 = (((hy < ty))?cljs.core.assoc.call(null,G__24936__$2,new cljs.core.Keyword(null,"y","y",-1757859776),(y - (ty - hy))):G__24936__$2);
var G__24936__$4 = (((hy > ly))?cljs.core.assoc.call(null,G__24936__$3,new cljs.core.Keyword(null,"y","y",-1757859776),(y + (hy - ly))):G__24936__$3);
return G__24936__$4;
})();
var map__24933 = nframe;
var map__24933__$1 = ((((!((map__24933 == null)))?((((map__24933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24933):map__24933);
var x__$1 = cljs.core.get.call(null,map__24933__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$1 = cljs.core.get.call(null,map__24933__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width__$1 = cljs.core.get.call(null,map__24933__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height__$1 = cljs.core.get.call(null,map__24933__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var nframe__$1 = cljs.core.assoc.call(null,nframe,new cljs.core.Keyword(null,"x","x",2099068185),peli.engine.check_bounds.call(null,x__$1,width__$1,(0),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(peli.engine.board.call(null,game))),new cljs.core.Keyword(null,"y","y",-1757859776),peli.engine.check_bounds.call(null,y__$1,height__$1,(0),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(peli.engine.board.call(null,game))));
return peli.engine.update_frame.call(null,game,((function (map__24931,map__24931__$1,x,y,width,height,buffer,dw,dh,tx,lx,ty,ly,map__24932,map__24932__$1,hx,hy,nframe,map__24933,map__24933__$1,x__$1,y__$1,width__$1,height__$1,nframe__$1){
return (function (_){
return nframe__$1;
});})(map__24931,map__24931__$1,x,y,width,height,buffer,dw,dh,tx,lx,ty,ly,map__24932,map__24932__$1,hx,hy,nframe,map__24933,map__24933__$1,x__$1,y__$1,width__$1,height__$1,nframe__$1))
);
});
peli.engine.send_action = (function peli$engine$send_action(var_args){
var args__17395__auto__ = [];
var len__17388__auto___24941 = arguments.length;
var i__17389__auto___24942 = (0);
while(true){
if((i__17389__auto___24942 < len__17388__auto___24941)){
args__17395__auto__.push((arguments[i__17389__auto___24942]));

var G__24943 = (i__17389__auto___24942 + (1));
i__17389__auto___24942 = G__24943;
continue;
} else {
}
break;
}

var argseq__17396__auto__ = ((((2) < args__17395__auto__.length))?(new cljs.core.IndexedSeq(args__17395__auto__.slice((2)),(0))):null);
return peli.engine.send_action.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17396__auto__);
});

peli.engine.send_action.cljs$core$IFn$_invoke$arity$variadic = (function (ch,action,args){
if((cljs.core.not.call(null,cljs.core.deref.call(null,peli.engine.debug_flag))) || (cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
return null;
}
});

peli.engine.send_action.cljs$lang$maxFixedArity = (2);

peli.engine.send_action.cljs$lang$applyTo = (function (seq24938){
var G__24939 = cljs.core.first.call(null,seq24938);
var seq24938__$1 = cljs.core.next.call(null,seq24938);
var G__24940 = cljs.core.first.call(null,seq24938__$1);
var seq24938__$2 = cljs.core.next.call(null,seq24938__$1);
return peli.engine.send_action.cljs$core$IFn$_invoke$arity$variadic(G__24939,G__24940,seq24938__$2);
});
peli.engine.schedule_action = (function peli$engine$schedule_action(var_args){
var args__17395__auto__ = [];
var len__17388__auto___24963 = arguments.length;
var i__17389__auto___24964 = (0);
while(true){
if((i__17389__auto___24964 < len__17388__auto___24963)){
args__17395__auto__.push((arguments[i__17389__auto___24964]));

var G__24965 = (i__17389__auto___24964 + (1));
i__17389__auto___24964 = G__24965;
continue;
} else {
}
break;
}

var argseq__17396__auto__ = ((((3) < args__17395__auto__.length))?(new cljs.core.IndexedSeq(args__17395__auto__.slice((3)),(0))):null);
return peli.engine.schedule_action.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17396__auto__);
});

peli.engine.schedule_action.cljs$core$IFn$_invoke$arity$variadic = (function (ch,timing,action,args){
var c__19446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19446__auto__){
return (function (){
var f__19447__auto__ = (function (){var switch__19425__auto__ = ((function (c__19446__auto__){
return (function (state_24953){
var state_val_24954 = (state_24953[(1)]);
if((state_val_24954 === (1))){
var inst_24948 = cljs.core.async.timeout.call(null,timing);
var state_24953__$1 = state_24953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24953__$1,(2),inst_24948);
} else {
if((state_val_24954 === (2))){
var inst_24950 = (state_24953[(2)]);
var inst_24951 = cljs.core.apply.call(null,peli.engine.send_action,ch,action,args);
var state_24953__$1 = (function (){var statearr_24955 = state_24953;
(statearr_24955[(7)] = inst_24950);

return statearr_24955;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24953__$1,inst_24951);
} else {
return null;
}
}
});})(c__19446__auto__))
;
return ((function (switch__19425__auto__,c__19446__auto__){
return (function() {
var peli$engine$state_machine__19426__auto__ = null;
var peli$engine$state_machine__19426__auto____0 = (function (){
var statearr_24959 = [null,null,null,null,null,null,null,null];
(statearr_24959[(0)] = peli$engine$state_machine__19426__auto__);

(statearr_24959[(1)] = (1));

return statearr_24959;
});
var peli$engine$state_machine__19426__auto____1 = (function (state_24953){
while(true){
var ret_value__19427__auto__ = (function (){try{while(true){
var result__19428__auto__ = switch__19425__auto__.call(null,state_24953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19428__auto__;
}
break;
}
}catch (e24960){if((e24960 instanceof Object)){
var ex__19429__auto__ = e24960;
var statearr_24961_24966 = state_24953;
(statearr_24961_24966[(5)] = ex__19429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24967 = state_24953;
state_24953 = G__24967;
continue;
} else {
return ret_value__19427__auto__;
}
break;
}
});
peli$engine$state_machine__19426__auto__ = function(state_24953){
switch(arguments.length){
case 0:
return peli$engine$state_machine__19426__auto____0.call(this);
case 1:
return peli$engine$state_machine__19426__auto____1.call(this,state_24953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
peli$engine$state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$0 = peli$engine$state_machine__19426__auto____0;
peli$engine$state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$1 = peli$engine$state_machine__19426__auto____1;
return peli$engine$state_machine__19426__auto__;
})()
;})(switch__19425__auto__,c__19446__auto__))
})();
var state__19448__auto__ = (function (){var statearr_24962 = f__19447__auto__.call(null);
(statearr_24962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19446__auto__);

return statearr_24962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19448__auto__);
});})(c__19446__auto__))
);

return c__19446__auto__;
});

peli.engine.schedule_action.cljs$lang$maxFixedArity = (3);

peli.engine.schedule_action.cljs$lang$applyTo = (function (seq24944){
var G__24945 = cljs.core.first.call(null,seq24944);
var seq24944__$1 = cljs.core.next.call(null,seq24944);
var G__24946 = cljs.core.first.call(null,seq24944__$1);
var seq24944__$2 = cljs.core.next.call(null,seq24944__$1);
var G__24947 = cljs.core.first.call(null,seq24944__$2);
var seq24944__$3 = cljs.core.next.call(null,seq24944__$2);
return peli.engine.schedule_action.cljs$core$IFn$_invoke$arity$variadic(G__24945,G__24946,G__24947,seq24944__$3);
});
peli.engine.edit_loop = (function peli$engine$edit_loop(var_args){
var args__17395__auto__ = [];
var len__17388__auto___25001 = arguments.length;
var i__17389__auto___25002 = (0);
while(true){
if((i__17389__auto___25002 < len__17388__auto___25001)){
args__17395__auto__.push((arguments[i__17389__auto___25002]));

var G__25003 = (i__17389__auto___25002 + (1));
i__17389__auto___25002 = G__25003;
continue;
} else {
}
break;
}

var argseq__17396__auto__ = ((((3) < args__17395__auto__.length))?(new cljs.core.IndexedSeq(args__17395__auto__.slice((3)),(0))):null);
return peli.engine.edit_loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17396__auto__);
});

peli.engine.edit_loop.cljs$core$IFn$_invoke$arity$variadic = (function (ch,timing,action,args){
var c__19446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19446__auto__){
return (function (){
var f__19447__auto__ = (function (){var switch__19425__auto__ = ((function (c__19446__auto__){
return (function (state_24985){
var state_val_24986 = (state_24985[(1)]);
if((state_val_24986 === (1))){
var state_24985__$1 = state_24985;
var statearr_24987_25004 = state_24985__$1;
(statearr_24987_25004[(2)] = null);

(statearr_24987_25004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24986 === (2))){
var state_24985__$1 = state_24985;
var statearr_24988_25005 = state_24985__$1;
(statearr_24988_25005[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24986 === (3))){
var inst_24983 = (state_24985[(2)]);
var state_24985__$1 = state_24985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24985__$1,inst_24983);
} else {
if((state_val_24986 === (4))){
var inst_24974 = cljs.core.async.timeout.call(null,timing);
var state_24985__$1 = state_24985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24985__$1,(7),inst_24974);
} else {
if((state_val_24986 === (5))){
var state_24985__$1 = state_24985;
var statearr_24990_25006 = state_24985__$1;
(statearr_24990_25006[(2)] = null);

(statearr_24990_25006[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24986 === (6))){
var inst_24981 = (state_24985[(2)]);
var state_24985__$1 = state_24985;
var statearr_24991_25007 = state_24985__$1;
(statearr_24991_25007[(2)] = inst_24981);

(statearr_24991_25007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24986 === (7))){
var inst_24976 = (state_24985[(2)]);
var inst_24977 = cljs.core.apply.call(null,peli.engine.send_action,ch,action,args);
var state_24985__$1 = (function (){var statearr_24992 = state_24985;
(statearr_24992[(7)] = inst_24976);

(statearr_24992[(8)] = inst_24977);

return statearr_24992;
})();
var statearr_24993_25008 = state_24985__$1;
(statearr_24993_25008[(2)] = null);

(statearr_24993_25008[(1)] = (2));


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
var peli$engine$state_machine__19426__auto__ = null;
var peli$engine$state_machine__19426__auto____0 = (function (){
var statearr_24997 = [null,null,null,null,null,null,null,null,null];
(statearr_24997[(0)] = peli$engine$state_machine__19426__auto__);

(statearr_24997[(1)] = (1));

return statearr_24997;
});
var peli$engine$state_machine__19426__auto____1 = (function (state_24985){
while(true){
var ret_value__19427__auto__ = (function (){try{while(true){
var result__19428__auto__ = switch__19425__auto__.call(null,state_24985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19428__auto__;
}
break;
}
}catch (e24998){if((e24998 instanceof Object)){
var ex__19429__auto__ = e24998;
var statearr_24999_25009 = state_24985;
(statearr_24999_25009[(5)] = ex__19429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25010 = state_24985;
state_24985 = G__25010;
continue;
} else {
return ret_value__19427__auto__;
}
break;
}
});
peli$engine$state_machine__19426__auto__ = function(state_24985){
switch(arguments.length){
case 0:
return peli$engine$state_machine__19426__auto____0.call(this);
case 1:
return peli$engine$state_machine__19426__auto____1.call(this,state_24985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
peli$engine$state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$0 = peli$engine$state_machine__19426__auto____0;
peli$engine$state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$1 = peli$engine$state_machine__19426__auto____1;
return peli$engine$state_machine__19426__auto__;
})()
;})(switch__19425__auto__,c__19446__auto__))
})();
var state__19448__auto__ = (function (){var statearr_25000 = f__19447__auto__.call(null);
(statearr_25000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19446__auto__);

return statearr_25000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19448__auto__);
});})(c__19446__auto__))
);

return c__19446__auto__;
});

peli.engine.edit_loop.cljs$lang$maxFixedArity = (3);

peli.engine.edit_loop.cljs$lang$applyTo = (function (seq24968){
var G__24969 = cljs.core.first.call(null,seq24968);
var seq24968__$1 = cljs.core.next.call(null,seq24968);
var G__24970 = cljs.core.first.call(null,seq24968__$1);
var seq24968__$2 = cljs.core.next.call(null,seq24968__$1);
var G__24971 = cljs.core.first.call(null,seq24968__$2);
var seq24968__$3 = cljs.core.next.call(null,seq24968__$2);
return peli.engine.edit_loop.cljs$core$IFn$_invoke$arity$variadic(G__24969,G__24970,G__24971,seq24968__$3);
});
peli.engine.set_world = (function peli$engine$set_world(game,ch,world_id){
var world = peli.engine.world.call(null,game,world_id);
var new_game = peli.engine.switch_worlds.call(null,game,world_id);
var matrix = peli.engine.init_collision_matrix.call(null,new_game);
var k_actions = peli.engine.key_actions.call(null,game,world_id);
if(cljs.core.truth_(k_actions)){
peli.engine.handle_keys.call(null,ch,k_actions);
} else {
}

return peli.engine.set_collision_matrix.call(null,new_game,matrix);
});
peli.engine.restor_entity = (function peli$engine$restor_entity(game){
return null;
});
peli.engine.run_loop = (function peli$engine$run_loop(ch,game,debug_ch){
var c__19446__auto___25277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19446__auto___25277){
return (function (){
var f__19447__auto__ = (function (){var switch__19425__auto__ = ((function (c__19446__auto___25277){
return (function (state_25159){
var state_val_25160 = (state_25159[(1)]);
if((state_val_25160 === (1))){
var state_25159__$1 = state_25159;
var statearr_25161_25278 = state_25159__$1;
(statearr_25161_25278[(2)] = null);

(statearr_25161_25278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25160 === (2))){
var state_25159__$1 = state_25159;
var statearr_25162_25279 = state_25159__$1;
(statearr_25162_25279[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25160 === (3))){
var inst_25157 = (state_25159[(2)]);
var state_25159__$1 = state_25159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25159__$1,inst_25157);
} else {
if((state_val_25160 === (4))){
var inst_25146 = peli.engine.fps.call(null,game);
var inst_25147 = ((1000) / inst_25146);
var inst_25148 = cljs.core.async.timeout.call(null,inst_25147);
var state_25159__$1 = state_25159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25159__$1,(7),inst_25148);
} else {
if((state_val_25160 === (5))){
var state_25159__$1 = state_25159;
var statearr_25164_25280 = state_25159__$1;
(statearr_25164_25280[(2)] = null);

(statearr_25164_25280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25160 === (6))){
var inst_25155 = (state_25159[(2)]);
var state_25159__$1 = state_25159;
var statearr_25165_25281 = state_25159__$1;
(statearr_25165_25281[(2)] = inst_25155);

(statearr_25165_25281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25160 === (7))){
var inst_25150 = (state_25159[(2)]);
var inst_25151 = peli.engine.send_action.call(null,ch,new cljs.core.Keyword(null,"step","step",1288888124));
var state_25159__$1 = (function (){var statearr_25166 = state_25159;
(statearr_25166[(7)] = inst_25150);

(statearr_25166[(8)] = inst_25151);

return statearr_25166;
})();
var statearr_25167_25282 = state_25159__$1;
(statearr_25167_25282[(2)] = null);

(statearr_25167_25282[(1)] = (2));


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
});})(c__19446__auto___25277))
;
return ((function (switch__19425__auto__,c__19446__auto___25277){
return (function() {
var peli$engine$run_loop_$_state_machine__19426__auto__ = null;
var peli$engine$run_loop_$_state_machine__19426__auto____0 = (function (){
var statearr_25171 = [null,null,null,null,null,null,null,null,null];
(statearr_25171[(0)] = peli$engine$run_loop_$_state_machine__19426__auto__);

(statearr_25171[(1)] = (1));

return statearr_25171;
});
var peli$engine$run_loop_$_state_machine__19426__auto____1 = (function (state_25159){
while(true){
var ret_value__19427__auto__ = (function (){try{while(true){
var result__19428__auto__ = switch__19425__auto__.call(null,state_25159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19428__auto__;
}
break;
}
}catch (e25172){if((e25172 instanceof Object)){
var ex__19429__auto__ = e25172;
var statearr_25173_25283 = state_25159;
(statearr_25173_25283[(5)] = ex__19429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25284 = state_25159;
state_25159 = G__25284;
continue;
} else {
return ret_value__19427__auto__;
}
break;
}
});
peli$engine$run_loop_$_state_machine__19426__auto__ = function(state_25159){
switch(arguments.length){
case 0:
return peli$engine$run_loop_$_state_machine__19426__auto____0.call(this);
case 1:
return peli$engine$run_loop_$_state_machine__19426__auto____1.call(this,state_25159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
peli$engine$run_loop_$_state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$0 = peli$engine$run_loop_$_state_machine__19426__auto____0;
peli$engine$run_loop_$_state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$1 = peli$engine$run_loop_$_state_machine__19426__auto____1;
return peli$engine$run_loop_$_state_machine__19426__auto__;
})()
;})(switch__19425__auto__,c__19446__auto___25277))
})();
var state__19448__auto__ = (function (){var statearr_25174 = f__19447__auto__.call(null);
(statearr_25174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19446__auto___25277);

return statearr_25174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19448__auto__);
});})(c__19446__auto___25277))
);


var c__19446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19446__auto__){
return (function (){
var f__19447__auto__ = (function (){var switch__19425__auto__ = ((function (c__19446__auto__){
return (function (state_25230){
var state_val_25231 = (state_25230[(1)]);
if((state_val_25231 === (7))){
var inst_25226 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
var statearr_25232_25285 = state_25230__$1;
(statearr_25232_25285[(2)] = inst_25226);

(statearr_25232_25285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (20))){
var inst_25175 = (state_25230[(7)]);
var inst_25178 = (state_25230[(8)]);
var inst_25207 = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(inst_25178);
var inst_25208 = cljs.core.apply.call(null,peli.engine.set_world,inst_25175,ch,inst_25207);
var state_25230__$1 = state_25230;
var statearr_25233_25286 = state_25230__$1;
(statearr_25233_25286[(2)] = inst_25208);

(statearr_25233_25286[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (1))){
var inst_25175 = game;
var state_25230__$1 = (function (){var statearr_25234 = state_25230;
(statearr_25234[(7)] = inst_25175);

return statearr_25234;
})();
var statearr_25235_25287 = state_25230__$1;
(statearr_25235_25287[(2)] = null);

(statearr_25235_25287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (4))){
var inst_25178 = (state_25230[(8)]);
var inst_25178__$1 = (state_25230[(2)]);
var state_25230__$1 = (function (){var statearr_25236 = state_25230;
(statearr_25236[(8)] = inst_25178__$1);

return statearr_25236;
})();
if(cljs.core.truth_(inst_25178__$1)){
var statearr_25237_25288 = state_25230__$1;
(statearr_25237_25288[(1)] = (5));

} else {
var statearr_25238_25289 = state_25230__$1;
(statearr_25238_25289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (15))){
var inst_25175 = (state_25230[(7)]);
var inst_25178 = (state_25230[(8)]);
var inst_25192 = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(inst_25178);
var inst_25193 = cljs.core.apply.call(null,peli.engine.show_entity,inst_25175,inst_25192);
var state_25230__$1 = state_25230;
var statearr_25239_25290 = state_25230__$1;
(statearr_25239_25290[(2)] = inst_25193);

(statearr_25239_25290[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (21))){
var inst_25175 = (state_25230[(7)]);
var inst_25178 = (state_25230[(8)]);
var inst_25214 = [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"state","state",-1988618099)];
var inst_25215 = [inst_25178,inst_25175];
var inst_25216 = cljs.core.PersistentHashMap.fromArrays(inst_25214,inst_25215);
var inst_25217 = cljs.core.async.put_BANG_.call(null,debug_ch,inst_25216);
var state_25230__$1 = state_25230;
var statearr_25240_25291 = state_25230__$1;
(statearr_25240_25291[(2)] = inst_25217);

(statearr_25240_25291[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (13))){
var inst_25175 = (state_25230[(7)]);
var inst_25178 = (state_25230[(8)]);
var inst_25186 = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(inst_25178);
var inst_25187 = cljs.core.apply.call(null,peli.engine.update_entity,inst_25175,inst_25186);
var state_25230__$1 = state_25230;
var statearr_25241_25292 = state_25230__$1;
(statearr_25241_25292[(2)] = inst_25187);

(statearr_25241_25292[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (22))){
var state_25230__$1 = state_25230;
var statearr_25242_25293 = state_25230__$1;
(statearr_25242_25293[(2)] = null);

(statearr_25242_25293[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (6))){
var state_25230__$1 = state_25230;
var statearr_25243_25294 = state_25230__$1;
(statearr_25243_25294[(2)] = null);

(statearr_25243_25294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (17))){
var inst_25175 = (state_25230[(7)]);
var inst_25198 = peli.engine.pause_game.call(null,inst_25175);
var state_25230__$1 = state_25230;
var statearr_25244_25295 = state_25230__$1;
(statearr_25244_25295[(2)] = inst_25198);

(statearr_25244_25295[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (3))){
var inst_25228 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25230__$1,inst_25228);
} else {
if((state_val_25231 === (12))){
var inst_25175 = (state_25230[(7)]);
var inst_25184 = peli.engine.step.call(null,inst_25175,ch);
var state_25230__$1 = state_25230;
var statearr_25245_25296 = state_25230__$1;
(statearr_25245_25296[(2)] = inst_25184);

(statearr_25245_25296[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (2))){
var state_25230__$1 = state_25230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25230__$1,(4),ch);
} else {
if((state_val_25231 === (23))){
var inst_25212 = (state_25230[(9)]);
var inst_25220 = (state_25230[(2)]);
var inst_25175 = inst_25212;
var state_25230__$1 = (function (){var statearr_25246 = state_25230;
(statearr_25246[(7)] = inst_25175);

(statearr_25246[(10)] = inst_25220);

return statearr_25246;
})();
var statearr_25247_25297 = state_25230__$1;
(statearr_25247_25297[(2)] = null);

(statearr_25247_25297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (19))){
var inst_25175 = (state_25230[(7)]);
var inst_25202 = cljs.core.swap_BANG_.call(null,peli.engine.debug_flag,cljs.core.not);
var inst_25203 = cljs.core.pr_str.call(null,peli.engine.debug_flag);
var inst_25204 = cljs.core.println.call(null,"debug:",inst_25203);
var inst_25205 = peli.engine.debug.call(null,inst_25175);
var state_25230__$1 = (function (){var statearr_25248 = state_25230;
(statearr_25248[(11)] = inst_25204);

(statearr_25248[(12)] = inst_25202);

return statearr_25248;
})();
var statearr_25249_25298 = state_25230__$1;
(statearr_25249_25298[(2)] = inst_25205);

(statearr_25249_25298[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (11))){
var inst_25212 = (state_25230[(2)]);
var state_25230__$1 = (function (){var statearr_25250 = state_25230;
(statearr_25250[(9)] = inst_25212);

return statearr_25250;
})();
if(cljs.core.truth_(debug_ch)){
var statearr_25251_25299 = state_25230__$1;
(statearr_25251_25299[(1)] = (21));

} else {
var statearr_25252_25300 = state_25230__$1;
(statearr_25252_25300[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (9))){
var inst_25178 = (state_25230[(8)]);
var inst_25210 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(inst_25178);
var state_25230__$1 = state_25230;
var G__25253_25301 = (((inst_25210 instanceof cljs.core.Keyword))?inst_25210.fqn:null);
switch (G__25253_25301) {
case "step":
var statearr_25254_25303 = state_25230__$1;
(statearr_25254_25303[(1)] = (12));


break;
case "update-entity":
var statearr_25255_25304 = state_25230__$1;
(statearr_25255_25304[(1)] = (13));


break;
case "update-state":
var statearr_25256_25305 = state_25230__$1;
(statearr_25256_25305[(1)] = (14));


break;
case "show":
var statearr_25257_25306 = state_25230__$1;
(statearr_25257_25306[(1)] = (15));


break;
case "hide":
var statearr_25258_25307 = state_25230__$1;
(statearr_25258_25307[(1)] = (16));


break;
case "pause":
var statearr_25259_25308 = state_25230__$1;
(statearr_25259_25308[(1)] = (17));


break;
case "unpause":
var statearr_25260_25309 = state_25230__$1;
(statearr_25260_25309[(1)] = (18));


break;
case "debug":
var statearr_25261_25310 = state_25230__$1;
(statearr_25261_25310[(1)] = (19));


break;
case "switch-world":
var statearr_25262_25311 = state_25230__$1;
(statearr_25262_25311[(1)] = (20));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_25210)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (5))){
var inst_25178 = (state_25230[(8)]);
var inst_25180 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(inst_25178);
var inst_25181 = cljs.core._EQ_.call(null,inst_25180,new cljs.core.Keyword(null,"quit","quit",53285210));
var state_25230__$1 = state_25230;
if(inst_25181){
var statearr_25263_25312 = state_25230__$1;
(statearr_25263_25312[(1)] = (8));

} else {
var statearr_25264_25313 = state_25230__$1;
(statearr_25264_25313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (14))){
var inst_25175 = (state_25230[(7)]);
var inst_25178 = (state_25230[(8)]);
var inst_25189 = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(inst_25178);
var inst_25190 = cljs.core.apply.call(null,peli.engine.update_state,inst_25175,inst_25189);
var state_25230__$1 = state_25230;
var statearr_25265_25314 = state_25230__$1;
(statearr_25265_25314[(2)] = inst_25190);

(statearr_25265_25314[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (16))){
var inst_25175 = (state_25230[(7)]);
var inst_25178 = (state_25230[(8)]);
var inst_25195 = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(inst_25178);
var inst_25196 = cljs.core.apply.call(null,peli.engine.hide_entity,inst_25175,inst_25195);
var state_25230__$1 = state_25230;
var statearr_25266_25315 = state_25230__$1;
(statearr_25266_25315[(2)] = inst_25196);

(statearr_25266_25315[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (10))){
var inst_25223 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
var statearr_25267_25316 = state_25230__$1;
(statearr_25267_25316[(2)] = inst_25223);

(statearr_25267_25316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (18))){
var inst_25175 = (state_25230[(7)]);
var inst_25200 = peli.engine.unpause_game.call(null,inst_25175);
var state_25230__$1 = state_25230;
var statearr_25268_25317 = state_25230__$1;
(statearr_25268_25317[(2)] = inst_25200);

(statearr_25268_25317[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (8))){
var state_25230__$1 = state_25230;
var statearr_25269_25318 = state_25230__$1;
(statearr_25269_25318[(2)] = null);

(statearr_25269_25318[(1)] = (10));


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
});})(c__19446__auto__))
;
return ((function (switch__19425__auto__,c__19446__auto__){
return (function() {
var peli$engine$run_loop_$_state_machine__19426__auto__ = null;
var peli$engine$run_loop_$_state_machine__19426__auto____0 = (function (){
var statearr_25273 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25273[(0)] = peli$engine$run_loop_$_state_machine__19426__auto__);

(statearr_25273[(1)] = (1));

return statearr_25273;
});
var peli$engine$run_loop_$_state_machine__19426__auto____1 = (function (state_25230){
while(true){
var ret_value__19427__auto__ = (function (){try{while(true){
var result__19428__auto__ = switch__19425__auto__.call(null,state_25230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19428__auto__;
}
break;
}
}catch (e25274){if((e25274 instanceof Object)){
var ex__19429__auto__ = e25274;
var statearr_25275_25319 = state_25230;
(statearr_25275_25319[(5)] = ex__19429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25320 = state_25230;
state_25230 = G__25320;
continue;
} else {
return ret_value__19427__auto__;
}
break;
}
});
peli$engine$run_loop_$_state_machine__19426__auto__ = function(state_25230){
switch(arguments.length){
case 0:
return peli$engine$run_loop_$_state_machine__19426__auto____0.call(this);
case 1:
return peli$engine$run_loop_$_state_machine__19426__auto____1.call(this,state_25230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
peli$engine$run_loop_$_state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$0 = peli$engine$run_loop_$_state_machine__19426__auto____0;
peli$engine$run_loop_$_state_machine__19426__auto__.cljs$core$IFn$_invoke$arity$1 = peli$engine$run_loop_$_state_machine__19426__auto____1;
return peli$engine$run_loop_$_state_machine__19426__auto__;
})()
;})(switch__19425__auto__,c__19446__auto__))
})();
var state__19448__auto__ = (function (){var statearr_25276 = f__19447__auto__.call(null);
(statearr_25276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19446__auto__);

return statearr_25276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19448__auto__);
});})(c__19446__auto__))
);

return c__19446__auto__;
});
peli.engine.init_game = (function peli$engine$init_game(var_args){
var args25321 = [];
var len__17388__auto___25324 = arguments.length;
var i__17389__auto___25325 = (0);
while(true){
if((i__17389__auto___25325 < len__17388__auto___25324)){
args25321.push((arguments[i__17389__auto___25325]));

var G__25326 = (i__17389__auto___25325 + (1));
i__17389__auto___25325 = G__25326;
continue;
} else {
}
break;
}

var G__25323 = args25321.length;
switch (G__25323) {
case 2:
return peli.engine.init_game.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return peli.engine.init_game.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25321.length)].join('')));

}
});

peli.engine.init_game.cljs$core$IFn$_invoke$arity$2 = (function (game,world_id){
return peli.engine.init_game.call(null,game,world_id,false);
});

peli.engine.init_game.cljs$core$IFn$_invoke$arity$3 = (function (game,world_id,debug){
var event_ch = cljs.core.async.chan.call(null);
var debug_ch = (cljs.core.truth_(debug)?cljs.core.async.chan.call(null):null);
var game__$1 = peli.engine.set_world.call(null,game,event_ch,world_id);
peli.engine.run_loop.call(null,event_ch,game__$1,debug_ch);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-ch","event-ch",1535658105),event_ch,new cljs.core.Keyword(null,"debug-ch","debug-ch",-10280201),debug_ch,new cljs.core.Keyword(null,"game","game",-441523833),game__$1], null);
});

peli.engine.init_game.cljs$lang$maxFixedArity = 3;
peli.engine.render_game = (function peli$engine$render_game(p__25328,target_id){
var map__25331 = p__25328;
var map__25331__$1 = ((((!((map__25331 == null)))?((((map__25331.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25331.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25331):map__25331);
var x = map__25331__$1;
var game = cljs.core.get.call(null,map__25331__$1,new cljs.core.Keyword(null,"game","game",-441523833));
var event_ch = cljs.core.get.call(null,map__25331__$1,new cljs.core.Keyword(null,"event-ch","event-ch",1535658105));
return peli.engine.initial_draw.call(null,game,event_ch,target_id);
});

//# sourceMappingURL=engine.js.map?rel=1446920213641