// Compiled by ClojureScript 1.7.145 {}
goog.provide('peli.engine');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('clojure.set');
peli.engine.overlap_QMARK_;
peli.engine.debug_flag = reagent.core.atom.call(null,false);

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
peli.engine.World = (function (board,frame,solids,characters,framed_characters,registry,overlays,key_actions,run_state,__meta,__extmap,__hash){
this.board = board;
this.frame = frame;
this.solids = solids;
this.characters = characters;
this.framed_characters = framed_characters;
this.registry = registry;
this.overlays = overlays;
this.key_actions = key_actions;
this.run_state = run_state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
peli.engine.World.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4988__auto__,k__4989__auto__){
var self__ = this;
var this__4988__auto____$1 = this;
return cljs.core._lookup.call(null,this__4988__auto____$1,k__4989__auto__,null);
});

peli.engine.World.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4990__auto__,k21730,else__4991__auto__){
var self__ = this;
var this__4990__auto____$1 = this;
var G__21732 = (((k21730 instanceof cljs.core.Keyword))?k21730.fqn:null);
switch (G__21732) {
case "board":
return self__.board;

break;
case "frame":
return self__.frame;

break;
case "solids":
return self__.solids;

break;
case "characters":
return self__.characters;

break;
case "framed-characters":
return self__.framed_characters;

break;
case "registry":
return self__.registry;

break;
case "overlays":
return self__.overlays;

break;
case "key-actions":
return self__.key_actions;

break;
case "run-state":
return self__.run_state;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21730,else__4991__auto__);

}
});

peli.engine.World.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5002__auto__,writer__5003__auto__,opts__5004__auto__){
var self__ = this;
var this__5002__auto____$1 = this;
var pr_pair__5005__auto__ = ((function (this__5002__auto____$1){
return (function (keyval__5006__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5003__auto__,cljs.core.pr_writer,""," ","",opts__5004__auto__,keyval__5006__auto__);
});})(this__5002__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5003__auto__,pr_pair__5005__auto__,"#peli.engine.World{",", ","}",opts__5004__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"board","board",-1907017633),self__.board],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"frame","frame",-1711082588),self__.frame],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"solids","solids",-764118369),self__.solids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"characters","characters",-163867197),self__.characters],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"framed-characters","framed-characters",-1326906722),self__.framed_characters],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"registry","registry",1021159018),self__.registry],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"overlays","overlays",-1346586303),self__.overlays],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key-actions","key-actions",1449289164),self__.key_actions],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"run-state","run-state",-1367818032),self__.run_state],null))], null),self__.__extmap));
});

peli.engine.World.prototype.cljs$core$IIterable$ = true;

peli.engine.World.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21729){
var self__ = this;
var G__21729__$1 = this;
return (new cljs.core.RecordIter((0),G__21729__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"solids","solids",-764118369),new cljs.core.Keyword(null,"characters","characters",-163867197),new cljs.core.Keyword(null,"framed-characters","framed-characters",-1326906722),new cljs.core.Keyword(null,"registry","registry",1021159018),new cljs.core.Keyword(null,"overlays","overlays",-1346586303),new cljs.core.Keyword(null,"key-actions","key-actions",1449289164),new cljs.core.Keyword(null,"run-state","run-state",-1367818032)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

peli.engine.World.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4986__auto__){
var self__ = this;
var this__4986__auto____$1 = this;
return self__.__meta;
});

peli.engine.World.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4982__auto__){
var self__ = this;
var this__4982__auto____$1 = this;
return (new peli.engine.World(self__.board,self__.frame,self__.solids,self__.characters,self__.framed_characters,self__.registry,self__.overlays,self__.key_actions,self__.run_state,self__.__meta,self__.__extmap,self__.__hash));
});

peli.engine.World.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4992__auto__){
var self__ = this;
var this__4992__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

peli.engine.World.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4983__auto__){
var self__ = this;
var this__4983__auto____$1 = this;
var h__4809__auto__ = self__.__hash;
if(!((h__4809__auto__ == null))){
return h__4809__auto__;
} else {
var h__4809__auto____$1 = cljs.core.hash_imap.call(null,this__4983__auto____$1);
self__.__hash = h__4809__auto____$1;

return h__4809__auto____$1;
}
});

peli.engine.World.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4984__auto__,other__4985__auto__){
var self__ = this;
var this__4984__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4362__auto__ = other__4985__auto__;
if(cljs.core.truth_(and__4362__auto__)){
var and__4362__auto____$1 = (this__4984__auto____$1.constructor === other__4985__auto__.constructor);
if(and__4362__auto____$1){
return cljs.core.equiv_map.call(null,this__4984__auto____$1,other__4985__auto__);
} else {
return and__4362__auto____$1;
}
} else {
return and__4362__auto__;
}
})())){
return true;
} else {
return false;
}
});

peli.engine.World.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4997__auto__,k__4998__auto__){
var self__ = this;
var this__4997__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"overlays","overlays",-1346586303),null,new cljs.core.Keyword(null,"characters","characters",-163867197),null,new cljs.core.Keyword(null,"frame","frame",-1711082588),null,new cljs.core.Keyword(null,"registry","registry",1021159018),null,new cljs.core.Keyword(null,"key-actions","key-actions",1449289164),null,new cljs.core.Keyword(null,"run-state","run-state",-1367818032),null,new cljs.core.Keyword(null,"framed-characters","framed-characters",-1326906722),null,new cljs.core.Keyword(null,"board","board",-1907017633),null,new cljs.core.Keyword(null,"solids","solids",-764118369),null], null), null),k__4998__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4997__auto____$1),self__.__meta),k__4998__auto__);
} else {
return (new peli.engine.World(self__.board,self__.frame,self__.solids,self__.characters,self__.framed_characters,self__.registry,self__.overlays,self__.key_actions,self__.run_state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4998__auto__)),null));
}
});

peli.engine.World.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4995__auto__,k__4996__auto__,G__21729){
var self__ = this;
var this__4995__auto____$1 = this;
var pred__21733 = cljs.core.keyword_identical_QMARK_;
var expr__21734 = k__4996__auto__;
if(cljs.core.truth_(pred__21733.call(null,new cljs.core.Keyword(null,"board","board",-1907017633),expr__21734))){
return (new peli.engine.World(G__21729,self__.frame,self__.solids,self__.characters,self__.framed_characters,self__.registry,self__.overlays,self__.key_actions,self__.run_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21733.call(null,new cljs.core.Keyword(null,"frame","frame",-1711082588),expr__21734))){
return (new peli.engine.World(self__.board,G__21729,self__.solids,self__.characters,self__.framed_characters,self__.registry,self__.overlays,self__.key_actions,self__.run_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21733.call(null,new cljs.core.Keyword(null,"solids","solids",-764118369),expr__21734))){
return (new peli.engine.World(self__.board,self__.frame,G__21729,self__.characters,self__.framed_characters,self__.registry,self__.overlays,self__.key_actions,self__.run_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21733.call(null,new cljs.core.Keyword(null,"characters","characters",-163867197),expr__21734))){
return (new peli.engine.World(self__.board,self__.frame,self__.solids,G__21729,self__.framed_characters,self__.registry,self__.overlays,self__.key_actions,self__.run_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21733.call(null,new cljs.core.Keyword(null,"framed-characters","framed-characters",-1326906722),expr__21734))){
return (new peli.engine.World(self__.board,self__.frame,self__.solids,self__.characters,G__21729,self__.registry,self__.overlays,self__.key_actions,self__.run_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21733.call(null,new cljs.core.Keyword(null,"registry","registry",1021159018),expr__21734))){
return (new peli.engine.World(self__.board,self__.frame,self__.solids,self__.characters,self__.framed_characters,G__21729,self__.overlays,self__.key_actions,self__.run_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21733.call(null,new cljs.core.Keyword(null,"overlays","overlays",-1346586303),expr__21734))){
return (new peli.engine.World(self__.board,self__.frame,self__.solids,self__.characters,self__.framed_characters,self__.registry,G__21729,self__.key_actions,self__.run_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21733.call(null,new cljs.core.Keyword(null,"key-actions","key-actions",1449289164),expr__21734))){
return (new peli.engine.World(self__.board,self__.frame,self__.solids,self__.characters,self__.framed_characters,self__.registry,self__.overlays,G__21729,self__.run_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21733.call(null,new cljs.core.Keyword(null,"run-state","run-state",-1367818032),expr__21734))){
return (new peli.engine.World(self__.board,self__.frame,self__.solids,self__.characters,self__.framed_characters,self__.registry,self__.overlays,self__.key_actions,G__21729,self__.__meta,self__.__extmap,null));
} else {
return (new peli.engine.World(self__.board,self__.frame,self__.solids,self__.characters,self__.framed_characters,self__.registry,self__.overlays,self__.key_actions,self__.run_state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4996__auto__,G__21729),null));
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

peli.engine.World.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5000__auto__){
var self__ = this;
var this__5000__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"board","board",-1907017633),self__.board],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"frame","frame",-1711082588),self__.frame],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"solids","solids",-764118369),self__.solids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"characters","characters",-163867197),self__.characters],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"framed-characters","framed-characters",-1326906722),self__.framed_characters],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"registry","registry",1021159018),self__.registry],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"overlays","overlays",-1346586303),self__.overlays],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key-actions","key-actions",1449289164),self__.key_actions],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"run-state","run-state",-1367818032),self__.run_state],null))], null),self__.__extmap));
});

peli.engine.World.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4987__auto__,G__21729){
var self__ = this;
var this__4987__auto____$1 = this;
return (new peli.engine.World(self__.board,self__.frame,self__.solids,self__.characters,self__.framed_characters,self__.registry,self__.overlays,self__.key_actions,self__.run_state,G__21729,self__.__extmap,self__.__hash));
});

peli.engine.World.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4993__auto__,entry__4994__auto__){
var self__ = this;
var this__4993__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4994__auto__)){
return cljs.core._assoc.call(null,this__4993__auto____$1,cljs.core._nth.call(null,entry__4994__auto__,(0)),cljs.core._nth.call(null,entry__4994__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4993__auto____$1,entry__4994__auto__);
}
});

peli.engine.World.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"frame","frame",-70551061,null),new cljs.core.Symbol(null,"solids","solids",876413158,null),new cljs.core.Symbol(null,"characters","characters",1476664330,null),new cljs.core.Symbol(null,"framed-characters","framed-characters",313624805,null),new cljs.core.Symbol(null,"registry","registry",-1633276751,null),new cljs.core.Symbol(null,"overlays","overlays",293945224,null),new cljs.core.Symbol(null,"key-actions","key-actions",-1205146605,null),new cljs.core.Symbol(null,"run-state","run-state",272713495,null)], null);
});

peli.engine.World.cljs$lang$type = true;

peli.engine.World.cljs$lang$ctorPrSeq = (function (this__5022__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"peli.engine/World");
});

peli.engine.World.cljs$lang$ctorPrWriter = (function (this__5022__auto__,writer__5023__auto__){
return cljs.core._write.call(null,writer__5023__auto__,"peli.engine/World");
});

peli.engine.__GT_World = (function peli$engine$__GT_World(board,frame,solids,characters,framed_characters,registry,overlays,key_actions,run_state){
return (new peli.engine.World(board,frame,solids,characters,framed_characters,registry,overlays,key_actions,run_state,null,null,null));
});

peli.engine.map__GT_World = (function peli$engine$map__GT_World(G__21731){
return (new peli.engine.World(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(G__21731),new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(G__21731),new cljs.core.Keyword(null,"solids","solids",-764118369).cljs$core$IFn$_invoke$arity$1(G__21731),new cljs.core.Keyword(null,"characters","characters",-163867197).cljs$core$IFn$_invoke$arity$1(G__21731),new cljs.core.Keyword(null,"framed-characters","framed-characters",-1326906722).cljs$core$IFn$_invoke$arity$1(G__21731),new cljs.core.Keyword(null,"registry","registry",1021159018).cljs$core$IFn$_invoke$arity$1(G__21731),new cljs.core.Keyword(null,"overlays","overlays",-1346586303).cljs$core$IFn$_invoke$arity$1(G__21731),new cljs.core.Keyword(null,"key-actions","key-actions",1449289164).cljs$core$IFn$_invoke$arity$1(G__21731),new cljs.core.Keyword(null,"run-state","run-state",-1367818032).cljs$core$IFn$_invoke$arity$1(G__21731),null,cljs.core.dissoc.call(null,G__21731,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"solids","solids",-764118369),new cljs.core.Keyword(null,"characters","characters",-163867197),new cljs.core.Keyword(null,"framed-characters","framed-characters",-1326906722),new cljs.core.Keyword(null,"registry","registry",1021159018),new cljs.core.Keyword(null,"overlays","overlays",-1346586303),new cljs.core.Keyword(null,"key-actions","key-actions",1449289164),new cljs.core.Keyword(null,"run-state","run-state",-1367818032)),null));
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
peli.engine.Game.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4988__auto__,k__4989__auto__){
var self__ = this;
var this__4988__auto____$1 = this;
return cljs.core._lookup.call(null,this__4988__auto____$1,k__4989__auto__,null);
});

peli.engine.Game.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4990__auto__,k21738,else__4991__auto__){
var self__ = this;
var this__4990__auto____$1 = this;
var G__21740 = (((k21738 instanceof cljs.core.Keyword))?k21738.fqn:null);
switch (G__21740) {
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
return cljs.core.get.call(null,self__.__extmap,k21738,else__4991__auto__);

}
});

peli.engine.Game.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5002__auto__,writer__5003__auto__,opts__5004__auto__){
var self__ = this;
var this__5002__auto____$1 = this;
var pr_pair__5005__auto__ = ((function (this__5002__auto____$1){
return (function (keyval__5006__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5003__auto__,cljs.core.pr_writer,""," ","",opts__5004__auto__,keyval__5006__auto__);
});})(this__5002__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5003__auto__,pr_pair__5005__auto__,"#peli.engine.Game{",", ","}",opts__5004__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"worlds","worlds",-1076808946),self__.worlds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-world","active-world",1609458985),self__.active_world],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});

peli.engine.Game.prototype.cljs$core$IIterable$ = true;

peli.engine.Game.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21737){
var self__ = this;
var G__21737__$1 = this;
return (new cljs.core.RecordIter((0),G__21737__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worlds","worlds",-1076808946),new cljs.core.Keyword(null,"active-world","active-world",1609458985),new cljs.core.Keyword(null,"state","state",-1988618099)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

peli.engine.Game.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4986__auto__){
var self__ = this;
var this__4986__auto____$1 = this;
return self__.__meta;
});

peli.engine.Game.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4982__auto__){
var self__ = this;
var this__4982__auto____$1 = this;
return (new peli.engine.Game(self__.worlds,self__.active_world,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});

peli.engine.Game.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4992__auto__){
var self__ = this;
var this__4992__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

peli.engine.Game.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4983__auto__){
var self__ = this;
var this__4983__auto____$1 = this;
var h__4809__auto__ = self__.__hash;
if(!((h__4809__auto__ == null))){
return h__4809__auto__;
} else {
var h__4809__auto____$1 = cljs.core.hash_imap.call(null,this__4983__auto____$1);
self__.__hash = h__4809__auto____$1;

return h__4809__auto____$1;
}
});

peli.engine.Game.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4984__auto__,other__4985__auto__){
var self__ = this;
var this__4984__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4362__auto__ = other__4985__auto__;
if(cljs.core.truth_(and__4362__auto__)){
var and__4362__auto____$1 = (this__4984__auto____$1.constructor === other__4985__auto__.constructor);
if(and__4362__auto____$1){
return cljs.core.equiv_map.call(null,this__4984__auto____$1,other__4985__auto__);
} else {
return and__4362__auto____$1;
}
} else {
return and__4362__auto__;
}
})())){
return true;
} else {
return false;
}
});

peli.engine.Game.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4997__auto__,k__4998__auto__){
var self__ = this;
var this__4997__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active-world","active-world",1609458985),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"worlds","worlds",-1076808946),null], null), null),k__4998__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4997__auto____$1),self__.__meta),k__4998__auto__);
} else {
return (new peli.engine.Game(self__.worlds,self__.active_world,self__.state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4998__auto__)),null));
}
});

peli.engine.Game.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4995__auto__,k__4996__auto__,G__21737){
var self__ = this;
var this__4995__auto____$1 = this;
var pred__21741 = cljs.core.keyword_identical_QMARK_;
var expr__21742 = k__4996__auto__;
if(cljs.core.truth_(pred__21741.call(null,new cljs.core.Keyword(null,"worlds","worlds",-1076808946),expr__21742))){
return (new peli.engine.Game(G__21737,self__.active_world,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21741.call(null,new cljs.core.Keyword(null,"active-world","active-world",1609458985),expr__21742))){
return (new peli.engine.Game(self__.worlds,G__21737,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21741.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__21742))){
return (new peli.engine.Game(self__.worlds,self__.active_world,G__21737,self__.__meta,self__.__extmap,null));
} else {
return (new peli.engine.Game(self__.worlds,self__.active_world,self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4996__auto__,G__21737),null));
}
}
}
});

peli.engine.Game.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5000__auto__){
var self__ = this;
var this__5000__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"worlds","worlds",-1076808946),self__.worlds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-world","active-world",1609458985),self__.active_world],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});

peli.engine.Game.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4987__auto__,G__21737){
var self__ = this;
var this__4987__auto____$1 = this;
return (new peli.engine.Game(self__.worlds,self__.active_world,self__.state,G__21737,self__.__extmap,self__.__hash));
});

peli.engine.Game.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4993__auto__,entry__4994__auto__){
var self__ = this;
var this__4993__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4994__auto__)){
return cljs.core._assoc.call(null,this__4993__auto____$1,cljs.core._nth.call(null,entry__4994__auto__,(0)),cljs.core._nth.call(null,entry__4994__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4993__auto____$1,entry__4994__auto__);
}
});

peli.engine.Game.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"worlds","worlds",563722581,null),new cljs.core.Symbol(null,"active-world","active-world",-1044976784,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
});

peli.engine.Game.cljs$lang$type = true;

peli.engine.Game.cljs$lang$ctorPrSeq = (function (this__5022__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"peli.engine/Game");
});

peli.engine.Game.cljs$lang$ctorPrWriter = (function (this__5022__auto__,writer__5023__auto__){
return cljs.core._write.call(null,writer__5023__auto__,"peli.engine/Game");
});

peli.engine.__GT_Game = (function peli$engine$__GT_Game(worlds,active_world,state){
return (new peli.engine.Game(worlds,active_world,state,null,null,null));
});

peli.engine.map__GT_Game = (function peli$engine$map__GT_Game(G__21739){
return (new peli.engine.Game(new cljs.core.Keyword(null,"worlds","worlds",-1076808946).cljs$core$IFn$_invoke$arity$1(G__21739),new cljs.core.Keyword(null,"active-world","active-world",1609458985).cljs$core$IFn$_invoke$arity$1(G__21739),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__21739),null,cljs.core.dissoc.call(null,G__21739,new cljs.core.Keyword(null,"worlds","worlds",-1076808946),new cljs.core.Keyword(null,"active-world","active-world",1609458985),new cljs.core.Keyword(null,"state","state",-1988618099)),null));
});


/**
 * @interface
 */
peli.engine.Gravity = function(){};

peli.engine.gravity = (function peli$engine$gravity(this$,ch,state){
if((!((this$ == null))) && (!((this$.peli$engine$Gravity$gravity$arity$3 == null)))){
return this$.peli$engine$Gravity$gravity$arity$3(this$,ch,state);
} else {
var x__5029__auto__ = (((this$ == null))?null:this$);
var m__5030__auto__ = (peli.engine.gravity[goog.typeOf(x__5029__auto__)]);
if(!((m__5030__auto__ == null))){
return m__5030__auto__.call(null,this$,ch,state);
} else {
var m__5030__auto____$1 = (peli.engine.gravity["_"]);
if(!((m__5030__auto____$1 == null))){
return m__5030__auto____$1.call(null,this$,ch,state);
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

peli.engine.physics = (function peli$engine$physics(this$,time_diff,board,ch,state){
if((!((this$ == null))) && (!((this$.peli$engine$Physics$physics$arity$5 == null)))){
return this$.peli$engine$Physics$physics$arity$5(this$,time_diff,board,ch,state);
} else {
var x__5029__auto__ = (((this$ == null))?null:this$);
var m__5030__auto__ = (peli.engine.physics[goog.typeOf(x__5029__auto__)]);
if(!((m__5030__auto__ == null))){
return m__5030__auto__.call(null,this$,time_diff,board,ch,state);
} else {
var m__5030__auto____$1 = (peli.engine.physics["_"]);
if(!((m__5030__auto____$1 == null))){
return m__5030__auto____$1.call(null,this$,time_diff,board,ch,state);
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

peli.engine.draw = (function peli$engine$draw(this$,frame,ch,state){
if((!((this$ == null))) && (!((this$.peli$engine$Pen$draw$arity$4 == null)))){
return this$.peli$engine$Pen$draw$arity$4(this$,frame,ch,state);
} else {
var x__5029__auto__ = (((this$ == null))?null:this$);
var m__5030__auto__ = (peli.engine.draw[goog.typeOf(x__5029__auto__)]);
if(!((m__5030__auto__ == null))){
return m__5030__auto__.call(null,this$,frame,ch,state);
} else {
var m__5030__auto____$1 = (peli.engine.draw["_"]);
if(!((m__5030__auto____$1 == null))){
return m__5030__auto____$1.call(null,this$,frame,ch,state);
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

peli.engine.collide = (function peli$engine$collide(this$,body,ch,state){
if((!((this$ == null))) && (!((this$.peli$engine$Collision$collide$arity$4 == null)))){
return this$.peli$engine$Collision$collide$arity$4(this$,body,ch,state);
} else {
var x__5029__auto__ = (((this$ == null))?null:this$);
var m__5030__auto__ = (peli.engine.collide[goog.typeOf(x__5029__auto__)]);
if(!((m__5030__auto__ == null))){
return m__5030__auto__.call(null,this$,body,ch,state);
} else {
var m__5030__auto____$1 = (peli.engine.collide["_"]);
if(!((m__5030__auto____$1 == null))){
return m__5030__auto____$1.call(null,this$,body,ch,state);
} else {
throw cljs.core.missing_protocol.call(null,"Collision.collide",this$);
}
}
}
});


/**
 * @interface
 */
peli.engine.Framed = function(){};

peli.engine.adjust_frame_QMARK_ = (function peli$engine$adjust_frame_QMARK_(this$){
if((!((this$ == null))) && (!((this$.peli$engine$Framed$adjust_frame_QMARK_$arity$1 == null)))){
return this$.peli$engine$Framed$adjust_frame_QMARK_$arity$1(this$);
} else {
var x__5029__auto__ = (((this$ == null))?null:this$);
var m__5030__auto__ = (peli.engine.adjust_frame_QMARK_[goog.typeOf(x__5029__auto__)]);
if(!((m__5030__auto__ == null))){
return m__5030__auto__.call(null,this$);
} else {
var m__5030__auto____$1 = (peli.engine.adjust_frame_QMARK_["_"]);
if(!((m__5030__auto____$1 == null))){
return m__5030__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Framed.adjust-frame?",this$);
}
}
}
});

(peli.engine.Physics["object"] = true);

(peli.engine.physics["object"] = (function (this$,time_diff,board,ch,state){
return this$;
}));
(peli.engine.Gravity["object"] = true);

(peli.engine.gravity["object"] = (function (this$,ch,state){
return this$;
}));
(peli.engine.Pen["object"] = true);

(peli.engine.draw["object"] = (function (this$,frame,ch,state){
return this$;
}));
(peli.engine.Collision["object"] = true);

(peli.engine.collide["object"] = (function (this$,body,ch,state){
return this$;
}));
(peli.engine.Framed["object"] = true);

(peli.engine.adjust_frame_QMARK_["object"] = (function (this$){
return false;
}));
peli.engine.overlap_QMARK_ = (function peli$engine$overlap_QMARK_(body1,body2){
var map__21751 = body1;
var map__21751__$1 = ((((!((map__21751 == null)))?((((map__21751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21751):map__21751);
var x = cljs.core.get.call(null,map__21751__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__21751__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__21751__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__21751__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var map__21752 = body2;
var map__21752__$1 = ((((!((map__21752 == null)))?((((map__21752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21752):map__21752);
var x2 = cljs.core.get.call(null,map__21752__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__21752__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var h2 = cljs.core.get.call(null,map__21752__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var w2 = cljs.core.get.call(null,map__21752__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var vec__21753 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + width),(y + height)], null);
var lx = cljs.core.nth.call(null,vec__21753,(0),null);
var ly = cljs.core.nth.call(null,vec__21753,(1),null);
var vec__21754 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x2 + w2),(y2 + h2)], null);
var lx2 = cljs.core.nth.call(null,vec__21754,(0),null);
var ly2 = cljs.core.nth.call(null,vec__21754,(1),null);
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
peli.engine.apply_gravity = (function peli$engine$apply_gravity(obj){
var vy = new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(obj);
return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"vy","vy",-2018509997),(((vy > (-5)))?(vy - 0.2):vy));
});
peli.engine.apply_physics = (function peli$engine$apply_physics(obj,time_dif,board){
var map__21759 = obj;
var map__21759__$1 = ((((!((map__21759 == null)))?((((map__21759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21759):map__21759);
var height = cljs.core.get.call(null,map__21759__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__21759__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var x = cljs.core.get.call(null,map__21759__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__21759__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vx = cljs.core.get.call(null,map__21759__$1,new cljs.core.Keyword(null,"vx","vx",-1685168462));
var vy = cljs.core.get.call(null,map__21759__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"x","x",2099068185),peli.engine.check_bounds.call(null,(x + vx),width,(0),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(board)),new cljs.core.Keyword(null,"y","y",-1757859776),peli.engine.check_bounds.call(null,(y - vy),height,(0),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(board)));
});
peli.engine.collide_action = (function peli$engine$collide_action(p__21761,p__21762,actions){
var map__21770 = p__21761;
var map__21770__$1 = ((((!((map__21770 == null)))?((((map__21770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21770):map__21770);
var body1 = map__21770__$1;
var height = cljs.core.get.call(null,map__21770__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__21770__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var x = cljs.core.get.call(null,map__21770__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__21770__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vx = cljs.core.get.call(null,map__21770__$1,new cljs.core.Keyword(null,"vx","vx",-1685168462));
var vy = cljs.core.get.call(null,map__21770__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
var map__21771 = p__21762;
var map__21771__$1 = ((((!((map__21771 == null)))?((((map__21771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21771):map__21771);
var body2 = map__21771__$1;
var x2 = cljs.core.get.call(null,map__21771__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__21771__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var h2 = cljs.core.get.call(null,map__21771__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var w2 = cljs.core.get.call(null,map__21771__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var ox = (x - vx);
var oy = (y + vy);
var ox2 = (x2 - cljs.core.get.call(null,body2,new cljs.core.Keyword(null,"vx","vx",-1685168462),(0)));
var oy2 = (y2 + cljs.core.get.call(null,body2,new cljs.core.Keyword(null,"vy","vy",-2018509997),(0)));
var vec__21774 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ox + width),(oy + height)], null);
var lx = cljs.core.nth.call(null,vec__21774,(0),null);
var ly = cljs.core.nth.call(null,vec__21774,(1),null);
var vec__21775 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ox2 + w2),(oy2 + h2)], null);
var lx2 = cljs.core.nth.call(null,vec__21775,(0),null);
var ly2 = cljs.core.nth.call(null,vec__21775,(1),null);
var G__21776 = body1;
var G__21776__$1 = (cljs.core.truth_((function (){var and__4362__auto__ = (ly <= oy2);
if(and__4362__auto__){
return new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(actions);
} else {
return and__4362__auto__;
}
})())?new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(actions).call(null,G__21776):G__21776);
var G__21776__$2 = (cljs.core.truth_((function (){var and__4362__auto__ = (lx <= ox2);
if(and__4362__auto__){
return new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(actions);
} else {
return and__4362__auto__;
}
})())?new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(actions).call(null,G__21776__$1):G__21776__$1);
var G__21776__$3 = (cljs.core.truth_((function (){var and__4362__auto__ = (oy >= ly2);
if(and__4362__auto__){
return new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(actions);
} else {
return and__4362__auto__;
}
})())?new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(actions).call(null,G__21776__$2):G__21776__$2);
var G__21776__$4 = (cljs.core.truth_((function (){var and__4362__auto__ = (ox >= lx2);
if(and__4362__auto__){
return new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(actions);
} else {
return and__4362__auto__;
}
})())?new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(actions).call(null,G__21776__$3):G__21776__$3);
var G__21776__$5 = (cljs.core.truth_((function (){var and__4362__auto__ = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(actions);
if(cljs.core.truth_(and__4362__auto__)){
return ((ly <= oy2)) || ((lx <= ox2)) || ((oy >= ly2)) || ((ox >= lx2));
} else {
return and__4362__auto__;
}
})())?new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(actions).call(null,G__21776__$4):G__21776__$4);
return G__21776__$5;
});
peli.engine.collide_solid = (function peli$engine$collide_solid(p__21781,p__21782){
var map__21787 = p__21781;
var map__21787__$1 = ((((!((map__21787 == null)))?((((map__21787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21787):map__21787);
var body1 = map__21787__$1;
var height = cljs.core.get.call(null,map__21787__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__21787__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var x = cljs.core.get.call(null,map__21787__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__21787__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vx = cljs.core.get.call(null,map__21787__$1,new cljs.core.Keyword(null,"vx","vx",-1685168462));
var vy = cljs.core.get.call(null,map__21787__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
var map__21788 = p__21782;
var map__21788__$1 = ((((!((map__21788 == null)))?((((map__21788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21788):map__21788);
var body2 = map__21788__$1;
var x2 = cljs.core.get.call(null,map__21788__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__21788__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var h2 = cljs.core.get.call(null,map__21788__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var w2 = cljs.core.get.call(null,map__21788__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return peli.engine.collide_action.call(null,body1,body2,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),((function (map__21787,map__21787__$1,body1,height,width,x,y,vx,vy,map__21788,map__21788__$1,body2,x2,y2,h2,w2){
return (function (p1__21777_SHARP_){
return cljs.core.assoc.call(null,p1__21777_SHARP_,new cljs.core.Keyword(null,"y","y",-1757859776),((y2 - height) - 0.1),new cljs.core.Keyword(null,"vy","vy",-2018509997),(0));
});})(map__21787,map__21787__$1,body1,height,width,x,y,vx,vy,map__21788,map__21788__$1,body2,x2,y2,h2,w2))
,new cljs.core.Keyword(null,"right","right",-452581833),((function (map__21787,map__21787__$1,body1,height,width,x,y,vx,vy,map__21788,map__21788__$1,body2,x2,y2,h2,w2){
return (function (p1__21778_SHARP_){
return cljs.core.assoc.call(null,p1__21778_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185),((x2 - width) - 0.1));
});})(map__21787,map__21787__$1,body1,height,width,x,y,vx,vy,map__21788,map__21788__$1,body2,x2,y2,h2,w2))
,new cljs.core.Keyword(null,"top","top",-1856271961),((function (map__21787,map__21787__$1,body1,height,width,x,y,vx,vy,map__21788,map__21788__$1,body2,x2,y2,h2,w2){
return (function (p1__21779_SHARP_){
return cljs.core.assoc.call(null,p1__21779_SHARP_,new cljs.core.Keyword(null,"y","y",-1757859776),((y2 + h2) + 0.1),new cljs.core.Keyword(null,"vy","vy",-2018509997),(0));
});})(map__21787,map__21787__$1,body1,height,width,x,y,vx,vy,map__21788,map__21788__$1,body2,x2,y2,h2,w2))
,new cljs.core.Keyword(null,"left","left",-399115937),((function (map__21787,map__21787__$1,body1,height,width,x,y,vx,vy,map__21788,map__21788__$1,body2,x2,y2,h2,w2){
return (function (p1__21780_SHARP_){
return cljs.core.assoc.call(null,p1__21780_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185),((x2 + w2) + 0.1));
});})(map__21787,map__21787__$1,body1,height,width,x,y,vx,vy,map__21788,map__21788__$1,body2,x2,y2,h2,w2))
], null));
});
peli.engine.add_item_to_matrix = (function peli$engine$add_item_to_matrix(matrix,block_size,p__21791){
var map__21794 = p__21791;
var map__21794__$1 = ((((!((map__21794 == null)))?((((map__21794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21794):map__21794);
var id = cljs.core.get.call(null,map__21794__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x = cljs.core.get.call(null,map__21794__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__21794__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__21794__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__21794__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var col = Math.floor((x / block_size));
var row = Math.floor((y / block_size));
var num_cols = Math.ceil((width / block_size));
var num_rows = Math.ceil((height / block_size));
return cljs.core.reduce.call(null,((function (col,row,num_cols,num_rows,map__21794,map__21794__$1,id,x,y,width,height){
return (function (m,row__$1){
return cljs.core.reduce.call(null,((function (col,row,num_cols,num_rows,map__21794,map__21794__$1,id,x,y,width,height){
return (function (m__$1,col__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row__$1,col__$1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),id);
});})(col,row,num_cols,num_rows,map__21794,map__21794__$1,id,x,y,width,height))
,m,cljs.core.range.call(null,col,(col + num_cols)));
});})(col,row,num_cols,num_rows,map__21794,map__21794__$1,id,x,y,width,height))
,matrix,cljs.core.range.call(null,row,(row + num_rows)));
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
peli.engine.init_collision_matrix = (function peli$engine$init_collision_matrix(p__21796){
var map__21801 = p__21796;
var map__21801__$1 = ((((!((map__21801 == null)))?((((map__21801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21801):map__21801);
var world = map__21801__$1;
var map__21802 = cljs.core.get.call(null,map__21801__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var map__21802__$1 = ((((!((map__21802 == null)))?((((map__21802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21802):map__21802);
var width = cljs.core.get.call(null,map__21802__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__21802__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var block_size = cljs.core.get.call(null,map__21801__$1,new cljs.core.Keyword(null,"block-size","block-size",-1062272384));
var solids = cljs.core.get.call(null,map__21801__$1,new cljs.core.Keyword(null,"solids","solids",-764118369));
var registry = cljs.core.get.call(null,map__21801__$1,new cljs.core.Keyword(null,"registry","registry",1021159018));
var items = cljs.core.map.call(null,registry,solids);
var matrix = peli.engine.build_matrix.call(null,block_size,width,height);
return peli.engine.add_items_to_matrix.call(null,matrix,block_size,items);
});
peli.engine.generate_pairs = (function peli$engine$generate_pairs(p__21806){
var vec__21808 = p__21806;
var el = cljs.core.nth.call(null,vec__21808,(0),null);
var next = cljs.core.nthnext.call(null,vec__21808,(1));
if(cljs.core.empty_QMARK_.call(null,next)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.into.call(null,peli$engine$generate_pairs.call(null,next),cljs.core.map.call(null,((function (vec__21808,el,next){
return (function (p1__21805_SHARP_){
return cljs.core.PersistentHashSet.fromArray([el,p1__21805_SHARP_], true);
});})(vec__21808,el,next))
,next));
}
});
peli.engine.generate_collision_list = (function peli$engine$generate_collision_list(matrix){
return cljs.core.apply.call(null,clojure.set.union,(function (){var iter__5146__auto__ = (function peli$engine$generate_collision_list_$_iter__21815(s__21816){
return (new cljs.core.LazySeq(null,(function (){
var s__21816__$1 = s__21816;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21816__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var row = cljs.core.first.call(null,xs__4977__auto__);
var iterys__5142__auto__ = ((function (s__21816__$1,row,xs__4977__auto__,temp__4425__auto__){
return (function peli$engine$generate_collision_list_$_iter__21815_$_iter__21817(s__21818){
return (new cljs.core.LazySeq(null,((function (s__21816__$1,row,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__21818__$1 = s__21818;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__21818__$1);
if(temp__4425__auto____$1){
var s__21818__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21818__$2)){
var c__5144__auto__ = cljs.core.chunk_first.call(null,s__21818__$2);
var size__5145__auto__ = cljs.core.count.call(null,c__5144__auto__);
var b__21820 = cljs.core.chunk_buffer.call(null,size__5145__auto__);
if((function (){var i__21819 = (0);
while(true){
if((i__21819 < size__5145__auto__)){
var items = cljs.core._nth.call(null,c__5144__auto__,i__21819);
cljs.core.chunk_append.call(null,b__21820,peli.engine.generate_pairs.call(null,cljs.core.seq.call(null,items)));

var G__21821 = (i__21819 + (1));
i__21819 = G__21821;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21820),peli$engine$generate_collision_list_$_iter__21815_$_iter__21817.call(null,cljs.core.chunk_rest.call(null,s__21818__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21820),null);
}
} else {
var items = cljs.core.first.call(null,s__21818__$2);
return cljs.core.cons.call(null,peli.engine.generate_pairs.call(null,cljs.core.seq.call(null,items)),peli$engine$generate_collision_list_$_iter__21815_$_iter__21817.call(null,cljs.core.rest.call(null,s__21818__$2)));
}
} else {
return null;
}
break;
}
});})(s__21816__$1,row,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__21816__$1,row,xs__4977__auto__,temp__4425__auto__))
;
var fs__5143__auto__ = cljs.core.seq.call(null,iterys__5142__auto__.call(null,row));
if(fs__5143__auto__){
return cljs.core.concat.call(null,fs__5143__auto__,peli$engine$generate_collision_list_$_iter__21815.call(null,cljs.core.rest.call(null,s__21816__$1)));
} else {
var G__21822 = cljs.core.rest.call(null,s__21816__$1);
s__21816__$1 = G__21822;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5146__auto__.call(null,matrix);
})());
});
peli.engine.remove_item = (function peli$engine$remove_item(w,type,id){
return cljs.core.assoc.call(null,w,type,cljs.core.vec.call(null,cljs.core.filter.call(null,(function (p1__21823_SHARP_){
return cljs.core.not_EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__21823_SHARP_));
}),type.call(null,w))));
});
peli.engine.remove_body = (function peli$engine$remove_body(w,id){
return peli.engine.remove_item.call(null,w,new cljs.core.Keyword(null,"bodies","bodies",-1295887172),id);
});
peli.engine.remove_overlay = (function peli$engine$remove_overlay(w,id){
return peli.engine.remove_item.call(null,w,new cljs.core.Keyword(null,"overlays","overlays",-1346586303),id);
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
peli.engine.Block = (function (id,fill,width,height,x,y,radii,__meta,__extmap,__hash){
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
peli.engine.Block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4988__auto__,k__4989__auto__){
var self__ = this;
var this__4988__auto____$1 = this;
return cljs.core._lookup.call(null,this__4988__auto____$1,k__4989__auto__,null);
});

peli.engine.Block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4990__auto__,k21825,else__4991__auto__){
var self__ = this;
var this__4990__auto____$1 = this;
var G__21827 = (((k21825 instanceof cljs.core.Keyword))?k21825.fqn:null);
switch (G__21827) {
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
return cljs.core.get.call(null,self__.__extmap,k21825,else__4991__auto__);

}
});

peli.engine.Block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5002__auto__,writer__5003__auto__,opts__5004__auto__){
var self__ = this;
var this__5002__auto____$1 = this;
var pr_pair__5005__auto__ = ((function (this__5002__auto____$1){
return (function (keyval__5006__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5003__auto__,cljs.core.pr_writer,""," ","",opts__5004__auto__,keyval__5006__auto__);
});})(this__5002__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5003__auto__,pr_pair__5005__auto__,"#peli.engine.Block{",", ","}",opts__5004__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fill","fill",883462889),self__.fill],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"radii","radii",-39552793),self__.radii],null))], null),self__.__extmap));
});

peli.engine.Block.prototype.cljs$core$IIterable$ = true;

peli.engine.Block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21824){
var self__ = this;
var G__21824__$1 = this;
return (new cljs.core.RecordIter((0),G__21824__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"radii","radii",-39552793)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

peli.engine.Block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4986__auto__){
var self__ = this;
var this__4986__auto____$1 = this;
return self__.__meta;
});

peli.engine.Block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4982__auto__){
var self__ = this;
var this__4982__auto____$1 = this;
return (new peli.engine.Block(self__.id,self__.fill,self__.width,self__.height,self__.x,self__.y,self__.radii,self__.__meta,self__.__extmap,self__.__hash));
});

peli.engine.Block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4992__auto__){
var self__ = this;
var this__4992__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

peli.engine.Block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4983__auto__){
var self__ = this;
var this__4983__auto____$1 = this;
var h__4809__auto__ = self__.__hash;
if(!((h__4809__auto__ == null))){
return h__4809__auto__;
} else {
var h__4809__auto____$1 = cljs.core.hash_imap.call(null,this__4983__auto____$1);
self__.__hash = h__4809__auto____$1;

return h__4809__auto____$1;
}
});

peli.engine.Block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4984__auto__,other__4985__auto__){
var self__ = this;
var this__4984__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4362__auto__ = other__4985__auto__;
if(cljs.core.truth_(and__4362__auto__)){
var and__4362__auto____$1 = (this__4984__auto____$1.constructor === other__4985__auto__.constructor);
if(and__4362__auto____$1){
return cljs.core.equiv_map.call(null,this__4984__auto____$1,other__4985__auto__);
} else {
return and__4362__auto____$1;
}
} else {
return and__4362__auto__;
}
})())){
return true;
} else {
return false;
}
});

peli.engine.Block.prototype.peli$engine$Pen$ = true;

peli.engine.Block.prototype.peli$engine$Pen$draw$arity$4 = (function (this$,frame,ch,state){
var self__ = this;
var this$__$1 = this;
var r = (self__.x + self__.width);
var b = (self__.y + self__.height);
var vec__21828 = (function (){var or__4374__auto__ = self__.radii;
if(cljs.core.truth_(or__4374__auto__)){
return or__4374__auto__;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null);
}
})();
var ul = cljs.core.nth.call(null,vec__21828,(0),null);
var ur = cljs.core.nth.call(null,vec__21828,(1),null);
var lr = cljs.core.nth.call(null,vec__21828,(2),null);
var ll = cljs.core.nth.call(null,vec__21828,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),[cljs.core.str("M"),cljs.core.str((self__.x + ul)),cljs.core.str(","),cljs.core.str(self__.y),cljs.core.str("h"),cljs.core.str(((self__.width - ul) - ur)),cljs.core.str("a"),cljs.core.str(ur),cljs.core.str(","),cljs.core.str(ur),cljs.core.str(" 0 0 1 "),cljs.core.str(ur),cljs.core.str(","),cljs.core.str(ur),cljs.core.str("v"),cljs.core.str(((self__.height - ur) - lr)),cljs.core.str("a"),cljs.core.str(lr),cljs.core.str(","),cljs.core.str(lr),cljs.core.str(" 0 0 1 "),cljs.core.str((- lr)),cljs.core.str(","),cljs.core.str(lr),cljs.core.str("h"),cljs.core.str(((lr + ll) - self__.width)),cljs.core.str("a"),cljs.core.str(ll),cljs.core.str(","),cljs.core.str(ll),cljs.core.str(" 0 0 1 "),cljs.core.str((- ll)),cljs.core.str(","),cljs.core.str((- ll)),cljs.core.str("v"),cljs.core.str(((ul + ll) - self__.height)),cljs.core.str("a"),cljs.core.str(ul),cljs.core.str(","),cljs.core.str(ul),cljs.core.str(" 0 0 1 "),cljs.core.str(ul),cljs.core.str(","),cljs.core.str((- ul)),cljs.core.str("z")].join(''),new cljs.core.Keyword(null,"fill","fill",883462889),self__.fill], null)], null);
});

peli.engine.Block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4997__auto__,k__4998__auto__){
var self__ = this;
var this__4997__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"radii","radii",-39552793),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"x","x",2099068185),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),k__4998__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4997__auto____$1),self__.__meta),k__4998__auto__);
} else {
return (new peli.engine.Block(self__.id,self__.fill,self__.width,self__.height,self__.x,self__.y,self__.radii,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4998__auto__)),null));
}
});

peli.engine.Block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4995__auto__,k__4996__auto__,G__21824){
var self__ = this;
var this__4995__auto____$1 = this;
var pred__21829 = cljs.core.keyword_identical_QMARK_;
var expr__21830 = k__4996__auto__;
if(cljs.core.truth_(pred__21829.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__21830))){
return (new peli.engine.Block(G__21824,self__.fill,self__.width,self__.height,self__.x,self__.y,self__.radii,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21829.call(null,new cljs.core.Keyword(null,"fill","fill",883462889),expr__21830))){
return (new peli.engine.Block(self__.id,G__21824,self__.width,self__.height,self__.x,self__.y,self__.radii,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21829.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__21830))){
return (new peli.engine.Block(self__.id,self__.fill,G__21824,self__.height,self__.x,self__.y,self__.radii,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21829.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__21830))){
return (new peli.engine.Block(self__.id,self__.fill,self__.width,G__21824,self__.x,self__.y,self__.radii,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21829.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__21830))){
return (new peli.engine.Block(self__.id,self__.fill,self__.width,self__.height,G__21824,self__.y,self__.radii,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21829.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__21830))){
return (new peli.engine.Block(self__.id,self__.fill,self__.width,self__.height,self__.x,G__21824,self__.radii,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21829.call(null,new cljs.core.Keyword(null,"radii","radii",-39552793),expr__21830))){
return (new peli.engine.Block(self__.id,self__.fill,self__.width,self__.height,self__.x,self__.y,G__21824,self__.__meta,self__.__extmap,null));
} else {
return (new peli.engine.Block(self__.id,self__.fill,self__.width,self__.height,self__.x,self__.y,self__.radii,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4996__auto__,G__21824),null));
}
}
}
}
}
}
}
});

peli.engine.Block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5000__auto__){
var self__ = this;
var this__5000__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fill","fill",883462889),self__.fill],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"radii","radii",-39552793),self__.radii],null))], null),self__.__extmap));
});

peli.engine.Block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4987__auto__,G__21824){
var self__ = this;
var this__4987__auto____$1 = this;
return (new peli.engine.Block(self__.id,self__.fill,self__.width,self__.height,self__.x,self__.y,self__.radii,G__21824,self__.__extmap,self__.__hash));
});

peli.engine.Block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4993__auto__,entry__4994__auto__){
var self__ = this;
var this__4993__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4994__auto__)){
return cljs.core._assoc.call(null,this__4993__auto____$1,cljs.core._nth.call(null,entry__4994__auto__,(0)),cljs.core._nth.call(null,entry__4994__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4993__auto____$1,entry__4994__auto__);
}
});

peli.engine.Block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"fill","fill",-1770972880,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"radii","radii",1600978734,null)], null);
});

peli.engine.Block.cljs$lang$type = true;

peli.engine.Block.cljs$lang$ctorPrSeq = (function (this__5022__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"peli.engine/Block");
});

peli.engine.Block.cljs$lang$ctorPrWriter = (function (this__5022__auto__,writer__5023__auto__){
return cljs.core._write.call(null,writer__5023__auto__,"peli.engine/Block");
});

peli.engine.__GT_Block = (function peli$engine$__GT_Block(id,fill,width,height,x,y,radii){
return (new peli.engine.Block(id,fill,width,height,x,y,radii,null,null,null));
});

peli.engine.map__GT_Block = (function peli$engine$map__GT_Block(G__21826){
return (new peli.engine.Block(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__21826),new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(G__21826),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__21826),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__21826),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__21826),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__21826),new cljs.core.Keyword(null,"radii","radii",-39552793).cljs$core$IFn$_invoke$arity$1(G__21826),null,cljs.core.dissoc.call(null,G__21826,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"radii","radii",-39552793)),null));
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
peli.engine.TextPrompt = (function (id,width,height,text,hidden_QMARK_,options,__meta,__extmap,__hash){
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
peli.engine.TextPrompt.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4988__auto__,k__4989__auto__){
var self__ = this;
var this__4988__auto____$1 = this;
return cljs.core._lookup.call(null,this__4988__auto____$1,k__4989__auto__,null);
});

peli.engine.TextPrompt.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4990__auto__,k21834,else__4991__auto__){
var self__ = this;
var this__4990__auto____$1 = this;
var G__21836 = (((k21834 instanceof cljs.core.Keyword))?k21834.fqn:null);
switch (G__21836) {
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
return cljs.core.get.call(null,self__.__extmap,k21834,else__4991__auto__);

}
});

peli.engine.TextPrompt.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5002__auto__,writer__5003__auto__,opts__5004__auto__){
var self__ = this;
var this__5002__auto____$1 = this;
var pr_pair__5005__auto__ = ((function (this__5002__auto____$1){
return (function (keyval__5006__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5003__auto__,cljs.core.pr_writer,""," ","",opts__5004__auto__,keyval__5006__auto__);
});})(this__5002__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5003__auto__,pr_pair__5005__auto__,"#peli.engine.TextPrompt{",", ","}",opts__5004__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),self__.hidden_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null))], null),self__.__extmap));
});

peli.engine.TextPrompt.prototype.cljs$core$IIterable$ = true;

peli.engine.TextPrompt.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21833){
var self__ = this;
var G__21833__$1 = this;
return (new cljs.core.RecordIter((0),G__21833__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

peli.engine.TextPrompt.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4986__auto__){
var self__ = this;
var this__4986__auto____$1 = this;
return self__.__meta;
});

peli.engine.TextPrompt.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4982__auto__){
var self__ = this;
var this__4982__auto____$1 = this;
return (new peli.engine.TextPrompt(self__.id,self__.width,self__.height,self__.text,self__.hidden_QMARK_,self__.options,self__.__meta,self__.__extmap,self__.__hash));
});

peli.engine.TextPrompt.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4992__auto__){
var self__ = this;
var this__4992__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

peli.engine.TextPrompt.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4983__auto__){
var self__ = this;
var this__4983__auto____$1 = this;
var h__4809__auto__ = self__.__hash;
if(!((h__4809__auto__ == null))){
return h__4809__auto__;
} else {
var h__4809__auto____$1 = cljs.core.hash_imap.call(null,this__4983__auto____$1);
self__.__hash = h__4809__auto____$1;

return h__4809__auto____$1;
}
});

peli.engine.TextPrompt.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4984__auto__,other__4985__auto__){
var self__ = this;
var this__4984__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4362__auto__ = other__4985__auto__;
if(cljs.core.truth_(and__4362__auto__)){
var and__4362__auto____$1 = (this__4984__auto____$1.constructor === other__4985__auto__.constructor);
if(and__4362__auto____$1){
return cljs.core.equiv_map.call(null,this__4984__auto____$1,other__4985__auto__);
} else {
return and__4362__auto____$1;
}
} else {
return and__4362__auto__;
}
})())){
return true;
} else {
return false;
}
});

peli.engine.TextPrompt.prototype.peli$engine$Pen$ = true;

peli.engine.TextPrompt.prototype.peli$engine$Pen$draw$arity$4 = (function (this$,frame,ch,state){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"hidden?","hidden?",1339691380).cljs$core$IFn$_invoke$arity$1(this$__$1))){
return null;
} else {
var vec__21837 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,frame)) - self__.width) / (2)),((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,frame)) - self__.height) / (2))], null);
var x = cljs.core.nth.call(null,vec__21837,(0),null);
var y = cljs.core.nth.call(null,vec__21837,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"background-color","background-color",570434026).cljs$core$IFn$_invoke$arity$2(self__.options,"#cfcfcf"),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"border-color","border-color",-2059162761).cljs$core$IFn$_invoke$arity$2(self__.options,"#000099")], null),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),self__.width,new cljs.core.Keyword(null,"height","height",1025178622),self__.height], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.Keyword(null,"font","font",-1506159249).cljs$core$IFn$_invoke$arity$2(self__.options,"12px Arial"),new cljs.core.Keyword(null,"font-color","font-color",-2019660285),new cljs.core.Keyword(null,"font-color","font-color",-2019660285).cljs$core$IFn$_invoke$arity$2(self__.options,"#000099")], null),new cljs.core.Keyword(null,"x","x",2099068185),(x + (5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (5))], null),self__.text], null)], null);
}
});

peli.engine.TextPrompt.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4997__auto__,k__4998__auto__){
var self__ = this;
var this__4997__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"options","options",99638489),null,new cljs.core.Keyword(null,"height","height",1025178622),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null),k__4998__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4997__auto____$1),self__.__meta),k__4998__auto__);
} else {
return (new peli.engine.TextPrompt(self__.id,self__.width,self__.height,self__.text,self__.hidden_QMARK_,self__.options,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4998__auto__)),null));
}
});

peli.engine.TextPrompt.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4995__auto__,k__4996__auto__,G__21833){
var self__ = this;
var this__4995__auto____$1 = this;
var pred__21838 = cljs.core.keyword_identical_QMARK_;
var expr__21839 = k__4996__auto__;
if(cljs.core.truth_(pred__21838.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__21839))){
return (new peli.engine.TextPrompt(G__21833,self__.width,self__.height,self__.text,self__.hidden_QMARK_,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21838.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__21839))){
return (new peli.engine.TextPrompt(self__.id,G__21833,self__.height,self__.text,self__.hidden_QMARK_,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21838.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__21839))){
return (new peli.engine.TextPrompt(self__.id,self__.width,G__21833,self__.text,self__.hidden_QMARK_,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21838.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),expr__21839))){
return (new peli.engine.TextPrompt(self__.id,self__.width,self__.height,G__21833,self__.hidden_QMARK_,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21838.call(null,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),expr__21839))){
return (new peli.engine.TextPrompt(self__.id,self__.width,self__.height,self__.text,G__21833,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21838.call(null,new cljs.core.Keyword(null,"options","options",99638489),expr__21839))){
return (new peli.engine.TextPrompt(self__.id,self__.width,self__.height,self__.text,self__.hidden_QMARK_,G__21833,self__.__meta,self__.__extmap,null));
} else {
return (new peli.engine.TextPrompt(self__.id,self__.width,self__.height,self__.text,self__.hidden_QMARK_,self__.options,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4996__auto__,G__21833),null));
}
}
}
}
}
}
});

peli.engine.TextPrompt.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5000__auto__){
var self__ = this;
var this__5000__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),self__.hidden_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null))], null),self__.__extmap));
});

peli.engine.TextPrompt.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4987__auto__,G__21833){
var self__ = this;
var this__4987__auto____$1 = this;
return (new peli.engine.TextPrompt(self__.id,self__.width,self__.height,self__.text,self__.hidden_QMARK_,self__.options,G__21833,self__.__extmap,self__.__hash));
});

peli.engine.TextPrompt.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4993__auto__,entry__4994__auto__){
var self__ = this;
var this__4993__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4994__auto__)){
return cljs.core._assoc.call(null,this__4993__auto____$1,cljs.core._nth.call(null,entry__4994__auto__,(0)),cljs.core._nth.call(null,entry__4994__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4993__auto____$1,entry__4994__auto__);
}
});

peli.engine.TextPrompt.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"hidden?","hidden?",-1314744389,null),new cljs.core.Symbol(null,"options","options",1740170016,null)], null);
});

peli.engine.TextPrompt.cljs$lang$type = true;

peli.engine.TextPrompt.cljs$lang$ctorPrSeq = (function (this__5022__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"peli.engine/TextPrompt");
});

peli.engine.TextPrompt.cljs$lang$ctorPrWriter = (function (this__5022__auto__,writer__5023__auto__){
return cljs.core._write.call(null,writer__5023__auto__,"peli.engine/TextPrompt");
});

peli.engine.__GT_TextPrompt = (function peli$engine$__GT_TextPrompt(id,width,height,text,hidden_QMARK_,options){
return (new peli.engine.TextPrompt(id,width,height,text,hidden_QMARK_,options,null,null,null));
});

peli.engine.map__GT_TextPrompt = (function peli$engine$map__GT_TextPrompt(G__21835){
return (new peli.engine.TextPrompt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__21835),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__21835),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__21835),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__21835),new cljs.core.Keyword(null,"hidden?","hidden?",1339691380).cljs$core$IFn$_invoke$arity$1(G__21835),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__21835),null,cljs.core.dissoc.call(null,G__21835,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),new cljs.core.Keyword(null,"options","options",99638489)),null));
});

peli.engine.play_sound = (function peli$engine$play_sound(id){
return document.getElementById(id).play();
});
peli.engine.handle_collision = (function peli$engine$handle_collision(body,bodies,ch,state){
return cljs.core.reduce.call(null,(function (p1__21842_SHARP_,p2__21843_SHARP_){
return peli.engine.collide.call(null,p1__21842_SHARP_,p2__21843_SHARP_,ch,state);
}),body,cljs.core.filter.call(null,(function (p1__21844_SHARP_){
var and__4362__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(body),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__21844_SHARP_));
if(and__4362__auto__){
return peli.engine.overlap_QMARK_.call(null,body,p1__21844_SHARP_);
} else {
return and__4362__auto__;
}
}),bodies));
});
peli.engine.run_physics = (function peli$engine$run_physics(world,ch,state){
var map__21856 = new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(world);
var map__21856__$1 = ((((!((map__21856 == null)))?((((map__21856.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21856.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21856):map__21856);
var fx = cljs.core.get.call(null,map__21856__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var fy = cljs.core.get.call(null,map__21856__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var fw = cljs.core.get.call(null,map__21856__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var fh = cljs.core.get.call(null,map__21856__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var nx = (fx - (fw / (2)));
var nw = (fw * (2));
var ny = (fy - (fh / (2)));
var nh = (fh * (2));
var expanded_frame = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),nx,new cljs.core.Keyword(null,"y","y",-1757859776),ny,new cljs.core.Keyword(null,"width","width",-384071477),nw,new cljs.core.Keyword(null,"height","height",1025178622),nh], null);
var nbodies = (function (){var iter__5146__auto__ = ((function (map__21856,map__21856__$1,fx,fy,fw,fh,nx,nw,ny,nh,expanded_frame){
return (function peli$engine$run_physics_$_iter__21858(s__21859){
return (new cljs.core.LazySeq(null,((function (map__21856,map__21856__$1,fx,fy,fw,fh,nx,nw,ny,nh,expanded_frame){
return (function (){
var s__21859__$1 = s__21859;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21859__$1);
if(temp__4425__auto__){
var s__21859__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21859__$2)){
var c__5144__auto__ = cljs.core.chunk_first.call(null,s__21859__$2);
var size__5145__auto__ = cljs.core.count.call(null,c__5144__auto__);
var b__21861 = cljs.core.chunk_buffer.call(null,size__5145__auto__);
if((function (){var i__21860 = (0);
while(true){
if((i__21860 < size__5145__auto__)){
var body = cljs.core._nth.call(null,c__5144__auto__,i__21860);
cljs.core.chunk_append.call(null,b__21861,(cljs.core.truth_(peli.engine.overlap_QMARK_.call(null,body,expanded_frame))?peli.engine.physics.call(null,peli.engine.gravity.call(null,body,ch,state),(0),new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(world),ch,state):body));

var G__21866 = (i__21860 + (1));
i__21860 = G__21866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21861),peli$engine$run_physics_$_iter__21858.call(null,cljs.core.chunk_rest.call(null,s__21859__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21861),null);
}
} else {
var body = cljs.core.first.call(null,s__21859__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(peli.engine.overlap_QMARK_.call(null,body,expanded_frame))?peli.engine.physics.call(null,peli.engine.gravity.call(null,body,ch,state),(0),new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(world),ch,state):body),peli$engine$run_physics_$_iter__21858.call(null,cljs.core.rest.call(null,s__21859__$2)));
}
} else {
return null;
}
break;
}
});})(map__21856,map__21856__$1,fx,fy,fw,fh,nx,nw,ny,nh,expanded_frame))
,null,null));
});})(map__21856,map__21856__$1,fx,fy,fw,fh,nx,nw,ny,nh,expanded_frame))
;
return iter__5146__auto__.call(null,new cljs.core.Keyword(null,"bodies","bodies",-1295887172).cljs$core$IFn$_invoke$arity$1(world));
})();
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.vec.call(null,(function (){var iter__5146__auto__ = ((function (map__21856,map__21856__$1,fx,fy,fw,fh,nx,nw,ny,nh,expanded_frame,nbodies){
return (function peli$engine$run_physics_$_iter__21862(s__21863){
return (new cljs.core.LazySeq(null,((function (map__21856,map__21856__$1,fx,fy,fw,fh,nx,nw,ny,nh,expanded_frame,nbodies){
return (function (){
var s__21863__$1 = s__21863;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21863__$1);
if(temp__4425__auto__){
var s__21863__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21863__$2)){
var c__5144__auto__ = cljs.core.chunk_first.call(null,s__21863__$2);
var size__5145__auto__ = cljs.core.count.call(null,c__5144__auto__);
var b__21865 = cljs.core.chunk_buffer.call(null,size__5145__auto__);
if((function (){var i__21864 = (0);
while(true){
if((i__21864 < size__5145__auto__)){
var body = cljs.core._nth.call(null,c__5144__auto__,i__21864);
cljs.core.chunk_append.call(null,b__21865,peli.engine.handle_collision.call(null,body,cljs.core.filter.call(null,((function (i__21864,body,c__5144__auto__,size__5145__auto__,b__21865,s__21863__$2,temp__4425__auto__,map__21856,map__21856__$1,fx,fy,fw,fh,nx,nw,ny,nh,expanded_frame,nbodies){
return (function (p1__21845_SHARP_){
return peli.engine.overlap_QMARK_.call(null,p1__21845_SHARP_,expanded_frame);
});})(i__21864,body,c__5144__auto__,size__5145__auto__,b__21865,s__21863__$2,temp__4425__auto__,map__21856,map__21856__$1,fx,fy,fw,fh,nx,nw,ny,nh,expanded_frame,nbodies))
,nbodies),ch,state));

var G__21867 = (i__21864 + (1));
i__21864 = G__21867;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21865),peli$engine$run_physics_$_iter__21862.call(null,cljs.core.chunk_rest.call(null,s__21863__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21865),null);
}
} else {
var body = cljs.core.first.call(null,s__21863__$2);
return cljs.core.cons.call(null,peli.engine.handle_collision.call(null,body,cljs.core.filter.call(null,((function (body,s__21863__$2,temp__4425__auto__,map__21856,map__21856__$1,fx,fy,fw,fh,nx,nw,ny,nh,expanded_frame,nbodies){
return (function (p1__21845_SHARP_){
return peli.engine.overlap_QMARK_.call(null,p1__21845_SHARP_,expanded_frame);
});})(body,s__21863__$2,temp__4425__auto__,map__21856,map__21856__$1,fx,fy,fw,fh,nx,nw,ny,nh,expanded_frame,nbodies))
,nbodies),ch,state),peli$engine$run_physics_$_iter__21862.call(null,cljs.core.rest.call(null,s__21863__$2)));
}
} else {
return null;
}
break;
}
});})(map__21856,map__21856__$1,fx,fy,fw,fh,nx,nw,ny,nh,expanded_frame,nbodies))
,null,null));
});})(map__21856,map__21856__$1,fx,fy,fw,fh,nx,nw,ny,nh,expanded_frame,nbodies))
;
return iter__5146__auto__.call(null,nbodies);
})()));
});
peli.engine.draw_body = (function peli$engine$draw_body(body_c,frame_c,state_c,ch){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [peli.engine.draw,cljs.core.deref.call(null,body_c),frame_c,ch,state_c], null);
});
peli.engine.draw_bodies = (function peli$engine$draw_bodies(game_atm,frame_c,state_c,bodies_c,ch){
var bodies = cljs.core.deref.call(null,bodies_c).call(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(function (){var iter__5146__auto__ = ((function (bodies){
return (function peli$engine$draw_bodies_$_iter__21872(s__21873){
return (new cljs.core.LazySeq(null,((function (bodies){
return (function (){
var s__21873__$1 = s__21873;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21873__$1);
if(temp__4425__auto__){
var s__21873__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21873__$2)){
var c__5144__auto__ = cljs.core.chunk_first.call(null,s__21873__$2);
var size__5145__auto__ = cljs.core.count.call(null,c__5144__auto__);
var b__21875 = cljs.core.chunk_buffer.call(null,size__5145__auto__);
if((function (){var i__21874 = (0);
while(true){
if((i__21874 < size__5145__auto__)){
var body_id = cljs.core._nth.call(null,c__5144__auto__,i__21874);
cljs.core.chunk_append.call(null,b__21875,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [peli.engine.draw_body,reagent.core.cursor.call(null,game_atm,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-world","active-world",1609458985),new cljs.core.Keyword(null,"registry","registry",1021159018),body_id], null)),frame_c,ch,state_c], null));

var G__21876 = (i__21874 + (1));
i__21874 = G__21876;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21875),peli$engine$draw_bodies_$_iter__21872.call(null,cljs.core.chunk_rest.call(null,s__21873__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21875),null);
}
} else {
var body_id = cljs.core.first.call(null,s__21873__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [peli.engine.draw_body,reagent.core.cursor.call(null,game_atm,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-world","active-world",1609458985),new cljs.core.Keyword(null,"registry","registry",1021159018),body_id], null)),frame_c,ch,state_c], null),peli$engine$draw_bodies_$_iter__21872.call(null,cljs.core.rest.call(null,s__21873__$2)));
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
return iter__5146__auto__.call(null,bodies);
})()], null);
});
peli.engine.draw_world = (function peli$engine$draw_world(game_atm,ch){
var map__21883 = cljs.core.deref.call(null,game_atm);
var map__21883__$1 = ((((!((map__21883 == null)))?((((map__21883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21883):map__21883);
var world = cljs.core.get.call(null,map__21883__$1,new cljs.core.Keyword(null,"active-world","active-world",1609458985));
var state = cljs.core.get.call(null,map__21883__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var width = cljs.core.get_in.call(null,world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"width","width",-384071477)], null));
var height = cljs.core.get_in.call(null,world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"height","height",1025178622)], null));
var x = cljs.core.get_in.call(null,world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"x","x",2099068185)], null));
var y = cljs.core.get_in.call(null,world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"y","y",-1757859776)], null));
var frame_c = reagent.core.cursor.call(null,game_atm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-world","active-world",1609458985),new cljs.core.Keyword(null,"frame","frame",-1711082588)], null));
var state_c = reagent.core.cursor.call(null,game_atm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099)], null));
var solids_c = reagent.core.cursor.call(null,game_atm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-world","active-world",1609458985),new cljs.core.Keyword(null,"solids","solids",-764118369)], null));
var characters_c = reagent.core.cursor.call(null,game_atm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-world","active-world",1609458985),new cljs.core.Keyword(null,"characters","characters",-163867197)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),cljs.core.get_in.call(null,world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"color","color",1011675173)], null)),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(((-1) * x)),cljs.core.str(","),cljs.core.str(((-1) * y)),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [peli.engine.draw_bodies,game_atm,frame_c,state_c,solids_c,ch], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [peli.engine.draw_bodies,game_atm,frame_c,state_c,characters_c,ch], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(function (){var iter__5146__auto__ = ((function (map__21883,map__21883__$1,world,state,width,height,x,y,frame_c,state_c,solids_c,characters_c){
return (function peli$engine$draw_world_$_iter__21885(s__21886){
return (new cljs.core.LazySeq(null,((function (map__21883,map__21883__$1,world,state,width,height,x,y,frame_c,state_c,solids_c,characters_c){
return (function (){
var s__21886__$1 = s__21886;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21886__$1);
if(temp__4425__auto__){
var s__21886__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21886__$2)){
var c__5144__auto__ = cljs.core.chunk_first.call(null,s__21886__$2);
var size__5145__auto__ = cljs.core.count.call(null,c__5144__auto__);
var b__21888 = cljs.core.chunk_buffer.call(null,size__5145__auto__);
if((function (){var i__21887 = (0);
while(true){
if((i__21887 < size__5145__auto__)){
var overlay = cljs.core._nth.call(null,c__5144__auto__,i__21887);
cljs.core.chunk_append.call(null,b__21888,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [peli.engine.draw,overlay,new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(world),ch,state], null));

var G__21889 = (i__21887 + (1));
i__21887 = G__21889;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21888),peli$engine$draw_world_$_iter__21885.call(null,cljs.core.chunk_rest.call(null,s__21886__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21888),null);
}
} else {
var overlay = cljs.core.first.call(null,s__21886__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [peli.engine.draw,overlay,new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(world),ch,state], null),peli$engine$draw_world_$_iter__21885.call(null,cljs.core.rest.call(null,s__21886__$2)));
}
} else {
return null;
}
break;
}
});})(map__21883,map__21883__$1,world,state,width,height,x,y,frame_c,state_c,solids_c,characters_c))
,null,null));
});})(map__21883,map__21883__$1,world,state,width,height,x,y,frame_c,state_c,solids_c,characters_c))
;
return iter__5146__auto__.call(null,new cljs.core.Keyword(null,"overlays","overlays",-1346586303).cljs$core$IFn$_invoke$arity$1(world));
})()], null)], null);
});
peli.engine.get_key_code = (function peli$engine$get_key_code(event){
var e = (cljs.core.truth_(event)?event:window.event);
var code = e.keyCode;
if(cljs.core.truth_((function (){var and__4362__auto__ = e.charCode;
if(cljs.core.truth_(and__4362__auto__)){
return cljs.core._EQ_.call(null,code,(0));
} else {
return and__4362__auto__;
}
})())){
return e.charCode;
} else {
return code;
}
});
peli.engine.handle_keys = (function peli$engine$handle_keys(ch,actions){
var on_down = cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__21890_SHARP_){
return new cljs.core.Keyword(null,"on-down","on-down",2037743467).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,actions,p1__21890_SHARP_));
}),cljs.core.keys.call(null,actions)));
var on_up = cljs.core.set.call(null,cljs.core.filter.call(null,((function (on_down){
return (function (p1__21891_SHARP_){
return new cljs.core.Keyword(null,"on-up","on-up",-127496699).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,actions,p1__21891_SHARP_));
});})(on_down))
,cljs.core.keys.call(null,actions)));
document.onkeydown = ((function (on_down,on_up){
return (function (p1__21892_SHARP_){
var code = peli.engine.get_key_code.call(null,p1__21892_SHARP_);
if(cljs.core.truth_(on_down.call(null,code))){
return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"edit-world","edit-world",767013345),new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.get_in.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [code,new cljs.core.Keyword(null,"on-down","on-down",2037743467)], null))], null));
} else {
return null;
}
});})(on_down,on_up))
;

return document.onkeyup = ((function (on_down,on_up){
return (function (p1__21893_SHARP_){
var code = peli.engine.get_key_code.call(null,p1__21893_SHARP_);
if(cljs.core.truth_(on_up.call(null,code))){
return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"edit-world","edit-world",767013345),new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.get_in.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [code,new cljs.core.Keyword(null,"on-up","on-up",-127496699)], null))], null));
} else {
return null;
}
});})(on_down,on_up))
;
});
peli.engine.adjust_frame = (function peli$engine$adjust_frame(world){
var map__21901 = new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(world);
var map__21901__$1 = ((((!((map__21901 == null)))?((((map__21901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21901):map__21901);
var x = cljs.core.get.call(null,map__21901__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__21901__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__21901__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__21901__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var buffer = cljs.core.get.call(null,map__21901__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var dw = (function (){var or__4374__auto__ = buffer;
if(cljs.core.truth_(or__4374__auto__)){
return or__4374__auto__;
} else {
return (width * .2);
}
})();
var dh = (function (){var or__4374__auto__ = buffer;
if(cljs.core.truth_(or__4374__auto__)){
return or__4374__auto__;
} else {
return (height * .2);
}
})();
var tx = (x + dw);
var lx = ((x + width) - dw);
var ty = (y + dh);
var ly = ((y + height) - dh);
var map__21902 = cljs.core.first.call(null,cljs.core.filter.call(null,peli.engine.adjust_frame_QMARK_,new cljs.core.Keyword(null,"bodies","bodies",-1295887172).cljs$core$IFn$_invoke$arity$1(world)));
var map__21902__$1 = ((((!((map__21902 == null)))?((((map__21902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21902):map__21902);
var hx = cljs.core.get.call(null,map__21902__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var hy = cljs.core.get.call(null,map__21902__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var nworld = cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"frame","frame",-1711082588),(function (){var G__21906 = new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(world);
var G__21906__$1 = (((hx < tx))?cljs.core.assoc.call(null,G__21906,new cljs.core.Keyword(null,"x","x",2099068185),(x - (tx - hx))):G__21906);
var G__21906__$2 = (((hx > lx))?cljs.core.assoc.call(null,G__21906__$1,new cljs.core.Keyword(null,"x","x",2099068185),(x + (hx - lx))):G__21906__$1);
var G__21906__$3 = (((hy < ty))?cljs.core.assoc.call(null,G__21906__$2,new cljs.core.Keyword(null,"y","y",-1757859776),(y - (ty - hy))):G__21906__$2);
var G__21906__$4 = (((hy > ly))?cljs.core.assoc.call(null,G__21906__$3,new cljs.core.Keyword(null,"y","y",-1757859776),(y + (hy - ly))):G__21906__$3);
return G__21906__$4;
})());
var map__21903 = new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(nworld);
var map__21903__$1 = ((((!((map__21903 == null)))?((((map__21903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21903):map__21903);
var x__$1 = cljs.core.get.call(null,map__21903__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$1 = cljs.core.get.call(null,map__21903__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width__$1 = cljs.core.get.call(null,map__21903__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height__$1 = cljs.core.get.call(null,map__21903__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return cljs.core.assoc.call(null,nworld,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(nworld),new cljs.core.Keyword(null,"x","x",2099068185),peli.engine.check_bounds.call(null,x__$1,width__$1,(0),cljs.core.get_in.call(null,nworld,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"width","width",-384071477)], null))),new cljs.core.Keyword(null,"y","y",-1757859776),peli.engine.check_bounds.call(null,y__$1,height__$1,(0),cljs.core.get_in.call(null,nworld,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"height","height",1025178622)], null)))));
});
peli.engine.step_action = (function peli$engine$step_action(ch,world,state){
if(cljs.core.truth_(cljs.core.deref.call(null,peli.engine.debug_flag))){
return new cljs.core.Keyword(null,"nothing","nothing",-1022703296);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"run-state","run-state",-1367818032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,world)),new cljs.core.Keyword(null,"paused","paused",-1710376127))){
return cljs.core.swap_BANG_.call(null,world,peli.engine.adjust_frame);
} else {
return cljs.core.swap_BANG_.call(null,world,(function (p1__21908_SHARP_){
return peli.engine.adjust_frame.call(null,peli.engine.run_physics.call(null,p1__21908_SHARP_,ch,state));
}));

}
}
});
peli.engine.schedule_edit = (function peli$engine$schedule_edit(var_args){
var args21909 = [];
var len__5432__auto___21930 = arguments.length;
var i__5433__auto___21931 = (0);
while(true){
if((i__5433__auto___21931 < len__5432__auto___21930)){
args21909.push((arguments[i__5433__auto___21931]));

var G__21932 = (i__5433__auto___21931 + (1));
i__5433__auto___21931 = G__21932;
continue;
} else {
}
break;
}

var G__21911 = args21909.length;
switch (G__21911) {
case 3:
return peli.engine.schedule_edit.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return peli.engine.schedule_edit.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21909.length)].join('')));

}
});

peli.engine.schedule_edit.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,timing){
return peli.engine.schedule_edit.call(null,f,ch,timing,null);
});

peli.engine.schedule_edit.cljs$core$IFn$_invoke$arity$4 = (function (f,ch,timing,type){
var action = (function (){var or__4374__auto__ = type;
if(cljs.core.truth_(or__4374__auto__)){
return or__4374__auto__;
} else {
return new cljs.core.Keyword(null,"edit-world","edit-world",767013345);
}
})();
var c__8022__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8022__auto__,action){
return (function (){
var f__8023__auto__ = (function (){var switch__7957__auto__ = ((function (c__8022__auto__,action){
return (function (state_21920){
var state_val_21921 = (state_21920[(1)]);
if((state_val_21921 === (1))){
var inst_21912 = cljs.core.async.timeout.call(null,timing);
var state_21920__$1 = state_21920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21920__$1,(2),inst_21912);
} else {
if((state_val_21921 === (2))){
var inst_21914 = (state_21920[(2)]);
var inst_21915 = [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"fn","fn",-1175266204)];
var inst_21916 = [action,f];
var inst_21917 = cljs.core.PersistentHashMap.fromArrays(inst_21915,inst_21916);
var inst_21918 = cljs.core.async.put_BANG_.call(null,ch,inst_21917);
var state_21920__$1 = (function (){var statearr_21922 = state_21920;
(statearr_21922[(7)] = inst_21914);

return statearr_21922;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21920__$1,inst_21918);
} else {
return null;
}
}
});})(c__8022__auto__,action))
;
return ((function (switch__7957__auto__,c__8022__auto__,action){
return (function() {
var peli$engine$state_machine__7958__auto__ = null;
var peli$engine$state_machine__7958__auto____0 = (function (){
var statearr_21926 = [null,null,null,null,null,null,null,null];
(statearr_21926[(0)] = peli$engine$state_machine__7958__auto__);

(statearr_21926[(1)] = (1));

return statearr_21926;
});
var peli$engine$state_machine__7958__auto____1 = (function (state_21920){
while(true){
var ret_value__7959__auto__ = (function (){try{while(true){
var result__7960__auto__ = switch__7957__auto__.call(null,state_21920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7960__auto__;
}
break;
}
}catch (e21927){if((e21927 instanceof Object)){
var ex__7961__auto__ = e21927;
var statearr_21928_21934 = state_21920;
(statearr_21928_21934[(5)] = ex__7961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21935 = state_21920;
state_21920 = G__21935;
continue;
} else {
return ret_value__7959__auto__;
}
break;
}
});
peli$engine$state_machine__7958__auto__ = function(state_21920){
switch(arguments.length){
case 0:
return peli$engine$state_machine__7958__auto____0.call(this);
case 1:
return peli$engine$state_machine__7958__auto____1.call(this,state_21920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
peli$engine$state_machine__7958__auto__.cljs$core$IFn$_invoke$arity$0 = peli$engine$state_machine__7958__auto____0;
peli$engine$state_machine__7958__auto__.cljs$core$IFn$_invoke$arity$1 = peli$engine$state_machine__7958__auto____1;
return peli$engine$state_machine__7958__auto__;
})()
;})(switch__7957__auto__,c__8022__auto__,action))
})();
var state__8024__auto__ = (function (){var statearr_21929 = f__8023__auto__.call(null);
(statearr_21929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8022__auto__);

return statearr_21929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8024__auto__);
});})(c__8022__auto__,action))
);

return c__8022__auto__;
});

peli.engine.schedule_edit.cljs$lang$maxFixedArity = 4;
peli.engine.edit_loop = (function peli$engine$edit_loop(ch,type,func,timing){
var c__8022__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8022__auto__){
return (function (){
var f__8023__auto__ = (function (){var switch__7957__auto__ = ((function (c__8022__auto__){
return (function (state_21984){
var state_val_21985 = (state_21984[(1)]);
if((state_val_21985 === (1))){
var state_21984__$1 = state_21984;
var statearr_21986_22000 = state_21984__$1;
(statearr_21986_22000[(2)] = null);

(statearr_21986_22000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21985 === (2))){
var state_21984__$1 = state_21984;
var statearr_21987_22001 = state_21984__$1;
(statearr_21987_22001[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21985 === (3))){
var inst_21982 = (state_21984[(2)]);
var state_21984__$1 = state_21984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21984__$1,inst_21982);
} else {
if((state_val_21985 === (4))){
var inst_21970 = cljs.core.async.timeout.call(null,timing);
var state_21984__$1 = state_21984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21984__$1,(7),inst_21970);
} else {
if((state_val_21985 === (5))){
var state_21984__$1 = state_21984;
var statearr_21989_22002 = state_21984__$1;
(statearr_21989_22002[(2)] = null);

(statearr_21989_22002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21985 === (6))){
var inst_21980 = (state_21984[(2)]);
var state_21984__$1 = state_21984;
var statearr_21990_22003 = state_21984__$1;
(statearr_21990_22003[(2)] = inst_21980);

(statearr_21990_22003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21985 === (7))){
var inst_21972 = (state_21984[(2)]);
var inst_21973 = [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"fn","fn",-1175266204)];
var inst_21974 = [type,func];
var inst_21975 = cljs.core.PersistentHashMap.fromArrays(inst_21973,inst_21974);
var inst_21976 = cljs.core.async.put_BANG_.call(null,ch,inst_21975);
var state_21984__$1 = (function (){var statearr_21991 = state_21984;
(statearr_21991[(7)] = inst_21976);

(statearr_21991[(8)] = inst_21972);

return statearr_21991;
})();
var statearr_21992_22004 = state_21984__$1;
(statearr_21992_22004[(2)] = null);

(statearr_21992_22004[(1)] = (2));


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
});})(c__8022__auto__))
;
return ((function (switch__7957__auto__,c__8022__auto__){
return (function() {
var peli$engine$edit_loop_$_state_machine__7958__auto__ = null;
var peli$engine$edit_loop_$_state_machine__7958__auto____0 = (function (){
var statearr_21996 = [null,null,null,null,null,null,null,null,null];
(statearr_21996[(0)] = peli$engine$edit_loop_$_state_machine__7958__auto__);

(statearr_21996[(1)] = (1));

return statearr_21996;
});
var peli$engine$edit_loop_$_state_machine__7958__auto____1 = (function (state_21984){
while(true){
var ret_value__7959__auto__ = (function (){try{while(true){
var result__7960__auto__ = switch__7957__auto__.call(null,state_21984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7960__auto__;
}
break;
}
}catch (e21997){if((e21997 instanceof Object)){
var ex__7961__auto__ = e21997;
var statearr_21998_22005 = state_21984;
(statearr_21998_22005[(5)] = ex__7961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22006 = state_21984;
state_21984 = G__22006;
continue;
} else {
return ret_value__7959__auto__;
}
break;
}
});
peli$engine$edit_loop_$_state_machine__7958__auto__ = function(state_21984){
switch(arguments.length){
case 0:
return peli$engine$edit_loop_$_state_machine__7958__auto____0.call(this);
case 1:
return peli$engine$edit_loop_$_state_machine__7958__auto____1.call(this,state_21984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
peli$engine$edit_loop_$_state_machine__7958__auto__.cljs$core$IFn$_invoke$arity$0 = peli$engine$edit_loop_$_state_machine__7958__auto____0;
peli$engine$edit_loop_$_state_machine__7958__auto__.cljs$core$IFn$_invoke$arity$1 = peli$engine$edit_loop_$_state_machine__7958__auto____1;
return peli$engine$edit_loop_$_state_machine__7958__auto__;
})()
;})(switch__7957__auto__,c__8022__auto__))
})();
var state__8024__auto__ = (function (){var statearr_21999 = f__8023__auto__.call(null);
(statearr_21999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8022__auto__);

return statearr_21999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8024__auto__);
});})(c__8022__auto__))
);

return c__8022__auto__;
});
peli.engine.switch_world = (function peli$engine$switch_world(world_id,ch,g){
var world = peli.engine.init_collision_matrix.call(null,cljs.core.get_in.call(null,g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worlds","worlds",-1076808946),world_id], null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"key-actions","key-actions",1449289164).cljs$core$IFn$_invoke$arity$1(world))){
peli.engine.handle_keys.call(null,ch,new cljs.core.Keyword(null,"key-actions","key-actions",1449289164).cljs$core$IFn$_invoke$arity$1(world));
} else {
}

return cljs.core.assoc.call(null,g,new cljs.core.Keyword(null,"active-world","active-world",1609458985),world);
});
peli.engine.run_loop = (function peli$engine$run_loop(ch,game,world_id){
var c__8022__auto___22178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8022__auto___22178){
return (function (){
var f__8023__auto__ = (function (){var switch__7957__auto__ = ((function (c__8022__auto___22178){
return (function (state_22109){
var state_val_22110 = (state_22109[(1)]);
if((state_val_22110 === (1))){
var state_22109__$1 = state_22109;
var statearr_22111_22179 = state_22109__$1;
(statearr_22111_22179[(2)] = null);

(statearr_22111_22179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22110 === (2))){
var state_22109__$1 = state_22109;
var statearr_22112_22180 = state_22109__$1;
(statearr_22112_22180[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22110 === (3))){
var inst_22107 = (state_22109[(2)]);
var state_22109__$1 = state_22109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22109__$1,inst_22107);
} else {
if((state_val_22110 === (4))){
var inst_22095 = cljs.core.async.timeout.call(null,(25));
var state_22109__$1 = state_22109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22109__$1,(7),inst_22095);
} else {
if((state_val_22110 === (5))){
var state_22109__$1 = state_22109;
var statearr_22114_22181 = state_22109__$1;
(statearr_22114_22181[(2)] = null);

(statearr_22114_22181[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22110 === (6))){
var inst_22105 = (state_22109[(2)]);
var state_22109__$1 = state_22109;
var statearr_22115_22182 = state_22109__$1;
(statearr_22115_22182[(2)] = inst_22105);

(statearr_22115_22182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22110 === (7))){
var inst_22097 = (state_22109[(2)]);
var inst_22098 = [new cljs.core.Keyword(null,"action","action",-811238024)];
var inst_22099 = [new cljs.core.Keyword(null,"step","step",1288888124)];
var inst_22100 = cljs.core.PersistentHashMap.fromArrays(inst_22098,inst_22099);
var inst_22101 = cljs.core.async.put_BANG_.call(null,ch,inst_22100);
var state_22109__$1 = (function (){var statearr_22116 = state_22109;
(statearr_22116[(7)] = inst_22101);

(statearr_22116[(8)] = inst_22097);

return statearr_22116;
})();
var statearr_22117_22183 = state_22109__$1;
(statearr_22117_22183[(2)] = null);

(statearr_22117_22183[(1)] = (2));


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
});})(c__8022__auto___22178))
;
return ((function (switch__7957__auto__,c__8022__auto___22178){
return (function() {
var peli$engine$run_loop_$_state_machine__7958__auto__ = null;
var peli$engine$run_loop_$_state_machine__7958__auto____0 = (function (){
var statearr_22121 = [null,null,null,null,null,null,null,null,null];
(statearr_22121[(0)] = peli$engine$run_loop_$_state_machine__7958__auto__);

(statearr_22121[(1)] = (1));

return statearr_22121;
});
var peli$engine$run_loop_$_state_machine__7958__auto____1 = (function (state_22109){
while(true){
var ret_value__7959__auto__ = (function (){try{while(true){
var result__7960__auto__ = switch__7957__auto__.call(null,state_22109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7960__auto__;
}
break;
}
}catch (e22122){if((e22122 instanceof Object)){
var ex__7961__auto__ = e22122;
var statearr_22123_22184 = state_22109;
(statearr_22123_22184[(5)] = ex__7961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22185 = state_22109;
state_22109 = G__22185;
continue;
} else {
return ret_value__7959__auto__;
}
break;
}
});
peli$engine$run_loop_$_state_machine__7958__auto__ = function(state_22109){
switch(arguments.length){
case 0:
return peli$engine$run_loop_$_state_machine__7958__auto____0.call(this);
case 1:
return peli$engine$run_loop_$_state_machine__7958__auto____1.call(this,state_22109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
peli$engine$run_loop_$_state_machine__7958__auto__.cljs$core$IFn$_invoke$arity$0 = peli$engine$run_loop_$_state_machine__7958__auto____0;
peli$engine$run_loop_$_state_machine__7958__auto__.cljs$core$IFn$_invoke$arity$1 = peli$engine$run_loop_$_state_machine__7958__auto____1;
return peli$engine$run_loop_$_state_machine__7958__auto__;
})()
;})(switch__7957__auto__,c__8022__auto___22178))
})();
var state__8024__auto__ = (function (){var statearr_22124 = f__8023__auto__.call(null);
(statearr_22124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8022__auto___22178);

return statearr_22124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8024__auto__);
});})(c__8022__auto___22178))
);


var c__8022__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8022__auto__){
return (function (){
var f__8023__auto__ = (function (){var switch__7957__auto__ = ((function (c__8022__auto__){
return (function (state_22152){
var state_val_22153 = (state_22152[(1)]);
if((state_val_22153 === (7))){
var inst_22148 = (state_22152[(2)]);
var state_22152__$1 = state_22152;
var statearr_22154_22186 = state_22152__$1;
(statearr_22154_22186[(2)] = inst_22148);

(statearr_22154_22186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22153 === (1))){
var state_22152__$1 = state_22152;
var statearr_22155_22187 = state_22152__$1;
(statearr_22155_22187[(2)] = null);

(statearr_22155_22187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22153 === (4))){
var inst_22127 = (state_22152[(7)]);
var inst_22127__$1 = (state_22152[(2)]);
var state_22152__$1 = (function (){var statearr_22156 = state_22152;
(statearr_22156[(7)] = inst_22127__$1);

return statearr_22156;
})();
if(cljs.core.truth_(inst_22127__$1)){
var statearr_22157_22188 = state_22152__$1;
(statearr_22157_22188[(1)] = (5));

} else {
var statearr_22158_22189 = state_22152__$1;
(statearr_22158_22189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22153 === (6))){
var state_22152__$1 = state_22152;
var statearr_22159_22190 = state_22152__$1;
(statearr_22159_22190[(2)] = null);

(statearr_22159_22190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22153 === (3))){
var inst_22150 = (state_22152[(2)]);
var state_22152__$1 = state_22152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22152__$1,inst_22150);
} else {
if((state_val_22153 === (12))){
var inst_22127 = (state_22152[(7)]);
var inst_22138 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_22127);
var inst_22139 = cljs.core.partial.call(null,peli.engine.switch_world,inst_22138,ch);
var inst_22140 = cljs.core.swap_BANG_.call(null,game,inst_22139);
var state_22152__$1 = state_22152;
var statearr_22160_22191 = state_22152__$1;
(statearr_22160_22191[(2)] = inst_22140);

(statearr_22160_22191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22153 === (2))){
var state_22152__$1 = state_22152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22152__$1,(4),ch);
} else {
if((state_val_22153 === (11))){
var inst_22127 = (state_22152[(7)]);
var inst_22135 = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(inst_22127);
var inst_22136 = cljs.core.swap_BANG_.call(null,game,inst_22135);
var state_22152__$1 = state_22152;
var statearr_22161_22192 = state_22152__$1;
(statearr_22161_22192[(2)] = inst_22136);

(statearr_22161_22192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22153 === (9))){
var inst_22127 = (state_22152[(7)]);
var inst_22129 = (function (){var temp__4425__auto__ = inst_22127;
var msg = inst_22127;
return ((function (temp__4425__auto__,msg,inst_22127,state_val_22153,c__8022__auto__){
return (function (p1__22007_SHARP_){
return peli.engine.step_action.call(null,ch,p1__22007_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game)));
});
;})(temp__4425__auto__,msg,inst_22127,state_val_22153,c__8022__auto__))
})();
var inst_22130 = cljs.core.swap_BANG_.call(null,game,cljs.core.update,new cljs.core.Keyword(null,"active-world","active-world",1609458985),inst_22129);
var state_22152__$1 = state_22152;
var statearr_22162_22193 = state_22152__$1;
(statearr_22162_22193[(2)] = inst_22130);

(statearr_22162_22193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22153 === (5))){
var inst_22127 = (state_22152[(7)]);
var inst_22142 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(inst_22127);
var state_22152__$1 = state_22152;
var G__22163_22194 = (((inst_22142 instanceof cljs.core.Keyword))?inst_22142.fqn:null);
switch (G__22163_22194) {
case "step":
var statearr_22164_22196 = state_22152__$1;
(statearr_22164_22196[(1)] = (9));


break;
case "edit-world":
var statearr_22165_22197 = state_22152__$1;
(statearr_22165_22197[(1)] = (10));


break;
case "edit-game":
var statearr_22166_22198 = state_22152__$1;
(statearr_22166_22198[(1)] = (11));


break;
case "switch-world":
var statearr_22167_22199 = state_22152__$1;
(statearr_22167_22199[(1)] = (12));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_22142)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22153 === (10))){
var inst_22127 = (state_22152[(7)]);
var inst_22132 = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(inst_22127);
var inst_22133 = cljs.core.swap_BANG_.call(null,game,cljs.core.update,new cljs.core.Keyword(null,"active-world","active-world",1609458985),inst_22132);
var state_22152__$1 = state_22152;
var statearr_22168_22200 = state_22152__$1;
(statearr_22168_22200[(2)] = inst_22133);

(statearr_22168_22200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22153 === (8))){
var inst_22144 = (state_22152[(2)]);
var state_22152__$1 = (function (){var statearr_22169 = state_22152;
(statearr_22169[(8)] = inst_22144);

return statearr_22169;
})();
var statearr_22170_22201 = state_22152__$1;
(statearr_22170_22201[(2)] = null);

(statearr_22170_22201[(1)] = (2));


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
});})(c__8022__auto__))
;
return ((function (switch__7957__auto__,c__8022__auto__){
return (function() {
var peli$engine$run_loop_$_state_machine__7958__auto__ = null;
var peli$engine$run_loop_$_state_machine__7958__auto____0 = (function (){
var statearr_22174 = [null,null,null,null,null,null,null,null,null];
(statearr_22174[(0)] = peli$engine$run_loop_$_state_machine__7958__auto__);

(statearr_22174[(1)] = (1));

return statearr_22174;
});
var peli$engine$run_loop_$_state_machine__7958__auto____1 = (function (state_22152){
while(true){
var ret_value__7959__auto__ = (function (){try{while(true){
var result__7960__auto__ = switch__7957__auto__.call(null,state_22152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7960__auto__;
}
break;
}
}catch (e22175){if((e22175 instanceof Object)){
var ex__7961__auto__ = e22175;
var statearr_22176_22202 = state_22152;
(statearr_22176_22202[(5)] = ex__7961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22203 = state_22152;
state_22152 = G__22203;
continue;
} else {
return ret_value__7959__auto__;
}
break;
}
});
peli$engine$run_loop_$_state_machine__7958__auto__ = function(state_22152){
switch(arguments.length){
case 0:
return peli$engine$run_loop_$_state_machine__7958__auto____0.call(this);
case 1:
return peli$engine$run_loop_$_state_machine__7958__auto____1.call(this,state_22152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
peli$engine$run_loop_$_state_machine__7958__auto__.cljs$core$IFn$_invoke$arity$0 = peli$engine$run_loop_$_state_machine__7958__auto____0;
peli$engine$run_loop_$_state_machine__7958__auto__.cljs$core$IFn$_invoke$arity$1 = peli$engine$run_loop_$_state_machine__7958__auto____1;
return peli$engine$run_loop_$_state_machine__7958__auto__;
})()
;})(switch__7957__auto__,c__8022__auto__))
})();
var state__8024__auto__ = (function (){var statearr_22177 = f__8023__auto__.call(null);
(statearr_22177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8022__auto__);

return statearr_22177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8024__auto__);
});})(c__8022__auto__))
);

return c__8022__auto__;
});
peli.engine.run_game = (function peli$engine$run_game(game,target_id,world_id){
var ch = cljs.core.async.chan.call(null);
cljs.core.swap_BANG_.call(null,game,cljs.core.partial.call(null,peli.engine.switch_world,world_id));

peli.engine.run_loop.call(null,ch,game,world_id);

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [peli.engine.draw_world,game,ch], null),document.getElementById(target_id));

return ch;
});
