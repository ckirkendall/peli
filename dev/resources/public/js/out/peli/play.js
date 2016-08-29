// Compiled by ClojureScript 1.7.145 {}
goog.provide('peli.play');
goog.require('cljs.core');
goog.require('peli.svg_adaptor');
goog.require('peli.engine');
goog.require('peli.time_debugger');
goog.require('cljs.core.async');
peli.play.Hero;

peli.play.BadGuy;
peli.play.hero_img = (function peli$play$hero_img(p__25336){
var map__25339 = p__25336;
var map__25339__$1 = ((((!((map__25339 == null)))?((((map__25339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25339):map__25339);
var vx = cljs.core.get.call(null,map__25339__$1,new cljs.core.Keyword(null,"vx","vx",-1685168462));
var vy = cljs.core.get.call(null,map__25339__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
if(((vx >= (0))) && (cljs.core.not_EQ_.call(null,vy,(0)))){
return "mario-jump-right";
} else {
if(((vx < (0))) && (cljs.core.not_EQ_.call(null,vy,(0)))){
return "mario-jump-left";
} else {
if(((vx > (0))) && (cljs.core._EQ_.call(null,vy,(0)))){
return "mario-walk-right";
} else {
if(((vx < (0))) && (cljs.core._EQ_.call(null,vy,(0)))){
return "mario-walk-left";
} else {
return "mario-stand-right";

}
}
}
}
});
peli.play.reward = (function peli$play$reward(ch){
return (function (p__25345){
var map__25346 = p__25345;
var map__25346__$1 = ((((!((map__25346 == null)))?((((map__25346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25346):map__25346);
var body = map__25346__$1;
var id = cljs.core.get.call(null,map__25346__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
peli.engine.play_sound.call(null,"reward");

peli.engine.schedule_action.call(null,ch,(700),new cljs.core.Keyword(null,"hide","hide",-596913169),id);

peli.engine.send_action.call(null,ch,new cljs.core.Keyword(null,"update-state","update-state",-653396259),((function (map__25346,map__25346__$1,body,id){
return (function (p1__25341_SHARP_){
return cljs.core.update.call(null,p1__25341_SHARP_,new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core.inc);
});})(map__25346,map__25346__$1,body,id))
);

return cljs.core.assoc.call(null,body,new cljs.core.Keyword(null,"vy","vy",-2018509997),(2),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"gone","gone",-1158371124));
});
});
peli.play.kill_bad_guy = (function peli$play$kill_bad_guy(ch){
return (function (p__25352){
var map__25353 = p__25352;
var map__25353__$1 = ((((!((map__25353 == null)))?((((map__25353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25353):map__25353);
var body = map__25353__$1;
var id = cljs.core.get.call(null,map__25353__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
peli.engine.play_sound.call(null,"stomp");

peli.engine.schedule_action.call(null,ch,(500),new cljs.core.Keyword(null,"hide","hide",-596913169),id);

peli.engine.schedule_action.call(null,ch,(10),new cljs.core.Keyword(null,"update-entity","update-entity",-2127937836),id,((function (map__25353,map__25353__$1,body,id){
return (function (p1__25348_SHARP_){
return cljs.core.assoc.call(null,p1__25348_SHARP_,new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(body) - (2)));
});})(map__25353,map__25353__$1,body,id))
);

return cljs.core.assoc.call(null,body,new cljs.core.Keyword(null,"vx","vx",-1685168462),(0),new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"dead","dead",-1946604091));
});
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
 * @implements {peli.engine.Physics}
 * @implements {peli.engine.Collision}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
peli.play.Reward = (function (id,width,height,x,y,__meta,__extmap,__hash){
this.id = id;
this.width = width;
this.height = height;
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
peli.play.Reward.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16944__auto__,k__16945__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return cljs.core._lookup.call(null,this__16944__auto____$1,k__16945__auto__,null);
});

peli.play.Reward.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16946__auto__,k25356,else__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
var G__25358 = (((k25356 instanceof cljs.core.Keyword))?k25356.fqn:null);
switch (G__25358) {
case "id":
return self__.id;

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
default:
return cljs.core.get.call(null,self__.__extmap,k25356,else__16947__auto__);

}
});

peli.play.Reward.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16958__auto__,writer__16959__auto__,opts__16960__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
var pr_pair__16961__auto__ = ((function (this__16958__auto____$1){
return (function (keyval__16962__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16959__auto__,cljs.core.pr_writer,""," ","",opts__16960__auto__,keyval__16962__auto__);
});})(this__16958__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16959__auto__,pr_pair__16961__auto__,"#peli.play.Reward{",", ","}",opts__16960__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

peli.play.Reward.prototype.peli$engine$Physics$ = true;

peli.play.Reward.prototype.peli$engine$Physics$physics$arity$4 = (function (this$,time_diff,game,ch){
var self__ = this;
var this$__$1 = this;
return peli.engine.apply_physics.call(null,this$__$1,game);
});

peli.play.Reward.prototype.cljs$core$IIterable$ = true;

peli.play.Reward.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25355){
var self__ = this;
var G__25355__$1 = this;
return (new cljs.core.RecordIter((0),G__25355__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

peli.play.Reward.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16942__auto__){
var self__ = this;
var this__16942__auto____$1 = this;
return self__.__meta;
});

peli.play.Reward.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16938__auto__){
var self__ = this;
var this__16938__auto____$1 = this;
return (new peli.play.Reward(self__.id,self__.width,self__.height,self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

peli.play.Reward.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16948__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

peli.play.Reward.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16939__auto__){
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

peli.play.Reward.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16940__auto__,other__16941__auto__){
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

peli.play.Reward.prototype.peli$engine$Collision$ = true;

peli.play.Reward.prototype.peli$engine$Collision$collide$arity$4 = (function (this$,body,game,ch){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(this$__$1),new cljs.core.Keyword(null,"gone","gone",-1158371124))){
return this$__$1;
} else {
var pred__25359 = cljs.core._EQ_;
var expr__25360 = cljs.core.type.call(null,body);
if(cljs.core.truth_(pred__25359.call(null,peli.play.Hero,expr__25360))){
return peli.engine.collide_action.call(null,this$__$1,body,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"any","any",1705907423),peli.play.reward.call(null,ch)], null));
} else {
return this$__$1;
}
}
});

peli.play.Reward.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16953__auto__,k__16954__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"x","x",2099068185),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),k__16954__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16953__auto____$1),self__.__meta),k__16954__auto__);
} else {
return (new peli.play.Reward(self__.id,self__.width,self__.height,self__.x,self__.y,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16954__auto__)),null));
}
});

peli.play.Reward.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16951__auto__,k__16952__auto__,G__25355){
var self__ = this;
var this__16951__auto____$1 = this;
var pred__25362 = cljs.core.keyword_identical_QMARK_;
var expr__25363 = k__16952__auto__;
if(cljs.core.truth_(pred__25362.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__25363))){
return (new peli.play.Reward(G__25355,self__.width,self__.height,self__.x,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25362.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__25363))){
return (new peli.play.Reward(self__.id,G__25355,self__.height,self__.x,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25362.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__25363))){
return (new peli.play.Reward(self__.id,self__.width,G__25355,self__.x,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25362.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__25363))){
return (new peli.play.Reward(self__.id,self__.width,self__.height,G__25355,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25362.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__25363))){
return (new peli.play.Reward(self__.id,self__.width,self__.height,self__.x,G__25355,self__.__meta,self__.__extmap,null));
} else {
return (new peli.play.Reward(self__.id,self__.width,self__.height,self__.x,self__.y,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16952__auto__,G__25355),null));
}
}
}
}
}
});

peli.play.Reward.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

peli.play.Reward.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16943__auto__,G__25355){
var self__ = this;
var this__16943__auto____$1 = this;
return (new peli.play.Reward(self__.id,self__.width,self__.height,self__.x,self__.y,G__25355,self__.__extmap,self__.__hash));
});

peli.play.Reward.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16949__auto__,entry__16950__auto__){
var self__ = this;
var this__16949__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16950__auto__)){
return cljs.core._assoc.call(null,this__16949__auto____$1,cljs.core._nth.call(null,entry__16950__auto__,(0)),cljs.core._nth.call(null,entry__16950__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16949__auto____$1,entry__16950__auto__);
}
});

peli.play.Reward.prototype.peli$engine$Pen$ = true;

peli.play.Reward.prototype.peli$engine$Pen$draw$arity$3 = (function (this$,game,ch){
var self__ = this;
var this$__$1 = this;
var img = document.getElementById("coin");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),self__.x,new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,new cljs.core.Keyword(null,"width","width",-384071477),self__.width,new cljs.core.Keyword(null,"height","height",1025178622),self__.height,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"url(#coin)"], null)], null)], null);
});

peli.play.Reward.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

peli.play.Reward.cljs$lang$type = true;

peli.play.Reward.cljs$lang$ctorPrSeq = (function (this__16978__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"peli.play/Reward");
});

peli.play.Reward.cljs$lang$ctorPrWriter = (function (this__16978__auto__,writer__16979__auto__){
return cljs.core._write.call(null,writer__16979__auto__,"peli.play/Reward");
});

peli.play.__GT_Reward = (function peli$play$__GT_Reward(id,width,height,x,y){
return (new peli.play.Reward(id,width,height,x,y,null,null,null));
});

peli.play.map__GT_Reward = (function peli$play$map__GT_Reward(G__25357){
return (new peli.play.Reward(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__25357),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__25357),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__25357),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__25357),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__25357),null,cljs.core.dissoc.call(null,G__25357,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {peli.engine.Gravity}
 * @implements {cljs.core.ICounted}
 * @implements {peli.engine.Pen}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {peli.engine.Physics}
 * @implements {peli.engine.Collision}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
peli.play.Hero = (function (id,width,height,x,y,vx,vy,__meta,__extmap,__hash){
this.id = id;
this.width = width;
this.height = height;
this.x = x;
this.y = y;
this.vx = vx;
this.vy = vy;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
peli.play.Hero.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16944__auto__,k__16945__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return cljs.core._lookup.call(null,this__16944__auto____$1,k__16945__auto__,null);
});

peli.play.Hero.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16946__auto__,k25368,else__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
var G__25370 = (((k25368 instanceof cljs.core.Keyword))?k25368.fqn:null);
switch (G__25370) {
case "id":
return self__.id;

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
case "vx":
return self__.vx;

break;
case "vy":
return self__.vy;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25368,else__16947__auto__);

}
});

peli.play.Hero.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16958__auto__,writer__16959__auto__,opts__16960__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
var pr_pair__16961__auto__ = ((function (this__16958__auto____$1){
return (function (keyval__16962__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16959__auto__,cljs.core.pr_writer,""," ","",opts__16960__auto__,keyval__16962__auto__);
});})(this__16958__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16959__auto__,pr_pair__16961__auto__,"#peli.play.Hero{",", ","}",opts__16960__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vx","vx",-1685168462),self__.vx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vy","vy",-2018509997),self__.vy],null))], null),self__.__extmap));
});

peli.play.Hero.prototype.peli$engine$Physics$ = true;

peli.play.Hero.prototype.peli$engine$Physics$physics$arity$4 = (function (this$,time_diff,game,ch){
var self__ = this;
var this$__$1 = this;
return peli.engine.apply_physics.call(null,this$__$1,game);
});

peli.play.Hero.prototype.cljs$core$IIterable$ = true;

peli.play.Hero.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25367){
var self__ = this;
var G__25367__$1 = this;
return (new cljs.core.RecordIter((0),G__25367__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"vx","vx",-1685168462),new cljs.core.Keyword(null,"vy","vy",-2018509997)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

peli.play.Hero.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16942__auto__){
var self__ = this;
var this__16942__auto____$1 = this;
return self__.__meta;
});

peli.play.Hero.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16938__auto__){
var self__ = this;
var this__16938__auto____$1 = this;
return (new peli.play.Hero(self__.id,self__.width,self__.height,self__.x,self__.y,self__.vx,self__.vy,self__.__meta,self__.__extmap,self__.__hash));
});

peli.play.Hero.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16948__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

peli.play.Hero.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16939__auto__){
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

peli.play.Hero.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16940__auto__,other__16941__auto__){
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

peli.play.Hero.prototype.peli$engine$Collision$ = true;

peli.play.Hero.prototype.peli$engine$Collision$collide$arity$4 = (function (this$,body,game,ch){
var self__ = this;
var this$__$1 = this;
var pred__25371 = cljs.core._EQ_;
var expr__25372 = cljs.core.type.call(null,body);
if(cljs.core.truth_(pred__25371.call(null,peli.svg_adaptor.Block,expr__25372))){
return peli.engine.collide_solid.call(null,this$__$1,body);
} else {
if(cljs.core.truth_(pred__25371.call(null,peli.play.BadGuy,expr__25372))){
return peli.engine.collide_action.call(null,this$__$1,body,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),((function (pred__25371,expr__25372,this$__$1){
return (function (p1__25366_SHARP_){
return cljs.core.assoc.call(null,p1__25366_SHARP_,new cljs.core.Keyword(null,"vy","vy",-2018509997),(5));
});})(pred__25371,expr__25372,this$__$1))
], null));
} else {
return this$__$1;
}
}
});

peli.play.Hero.prototype.peli$engine$Gravity$ = true;

peli.play.Hero.prototype.peli$engine$Gravity$gravity$arity$3 = (function (this$,game,ch){
var self__ = this;
var this$__$1 = this;
return peli.engine.apply_gravity.call(null,this$__$1);
});

peli.play.Hero.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16953__auto__,k__16954__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"vx","vx",-1685168462),null,new cljs.core.Keyword(null,"vy","vy",-2018509997),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"x","x",2099068185),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),k__16954__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16953__auto____$1),self__.__meta),k__16954__auto__);
} else {
return (new peli.play.Hero(self__.id,self__.width,self__.height,self__.x,self__.y,self__.vx,self__.vy,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16954__auto__)),null));
}
});

peli.play.Hero.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16951__auto__,k__16952__auto__,G__25367){
var self__ = this;
var this__16951__auto____$1 = this;
var pred__25374 = cljs.core.keyword_identical_QMARK_;
var expr__25375 = k__16952__auto__;
if(cljs.core.truth_(pred__25374.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__25375))){
return (new peli.play.Hero(G__25367,self__.width,self__.height,self__.x,self__.y,self__.vx,self__.vy,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25374.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__25375))){
return (new peli.play.Hero(self__.id,G__25367,self__.height,self__.x,self__.y,self__.vx,self__.vy,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25374.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__25375))){
return (new peli.play.Hero(self__.id,self__.width,G__25367,self__.x,self__.y,self__.vx,self__.vy,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25374.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__25375))){
return (new peli.play.Hero(self__.id,self__.width,self__.height,G__25367,self__.y,self__.vx,self__.vy,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25374.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__25375))){
return (new peli.play.Hero(self__.id,self__.width,self__.height,self__.x,G__25367,self__.vx,self__.vy,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25374.call(null,new cljs.core.Keyword(null,"vx","vx",-1685168462),expr__25375))){
return (new peli.play.Hero(self__.id,self__.width,self__.height,self__.x,self__.y,G__25367,self__.vy,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25374.call(null,new cljs.core.Keyword(null,"vy","vy",-2018509997),expr__25375))){
return (new peli.play.Hero(self__.id,self__.width,self__.height,self__.x,self__.y,self__.vx,G__25367,self__.__meta,self__.__extmap,null));
} else {
return (new peli.play.Hero(self__.id,self__.width,self__.height,self__.x,self__.y,self__.vx,self__.vy,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16952__auto__,G__25367),null));
}
}
}
}
}
}
}
});

peli.play.Hero.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vx","vx",-1685168462),self__.vx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vy","vy",-2018509997),self__.vy],null))], null),self__.__extmap));
});

peli.play.Hero.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16943__auto__,G__25367){
var self__ = this;
var this__16943__auto____$1 = this;
return (new peli.play.Hero(self__.id,self__.width,self__.height,self__.x,self__.y,self__.vx,self__.vy,G__25367,self__.__extmap,self__.__hash));
});

peli.play.Hero.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16949__auto__,entry__16950__auto__){
var self__ = this;
var this__16949__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16950__auto__)){
return cljs.core._assoc.call(null,this__16949__auto____$1,cljs.core._nth.call(null,entry__16950__auto__,(0)),cljs.core._nth.call(null,entry__16950__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16949__auto____$1,entry__16950__auto__);
}
});

peli.play.Hero.prototype.peli$engine$Pen$ = true;

peli.play.Hero.prototype.peli$engine$Pen$draw$arity$3 = (function (this$,game,ch){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),self__.x,new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,new cljs.core.Keyword(null,"width","width",-384071477),self__.width,new cljs.core.Keyword(null,"height","height",1025178622),self__.height,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),[cljs.core.str("url(#"),cljs.core.str(peli.play.hero_img.call(null,this$__$1)),cljs.core.str(")")].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(peli.engine.frame.call(null,game)) + (20)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(peli.engine.frame.call(null,game)) + (20)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font","font",-1506159249),"12px Arial",new cljs.core.Keyword(null,"font-color","font-color",-2019660285),"black"], null)], null),[cljs.core.str("coins: "),cljs.core.str(new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(peli.engine.state.call(null,game)))].join('')], null)], null);
});

peli.play.Hero.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"vx","vx",-44636935,null),new cljs.core.Symbol(null,"vy","vy",-377978470,null)], null);
});

peli.play.Hero.cljs$lang$type = true;

peli.play.Hero.cljs$lang$ctorPrSeq = (function (this__16978__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"peli.play/Hero");
});

peli.play.Hero.cljs$lang$ctorPrWriter = (function (this__16978__auto__,writer__16979__auto__){
return cljs.core._write.call(null,writer__16979__auto__,"peli.play/Hero");
});

peli.play.__GT_Hero = (function peli$play$__GT_Hero(id,width,height,x,y,vx,vy){
return (new peli.play.Hero(id,width,height,x,y,vx,vy,null,null,null));
});

peli.play.map__GT_Hero = (function peli$play$map__GT_Hero(G__25369){
return (new peli.play.Hero(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__25369),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__25369),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__25369),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__25369),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__25369),new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(G__25369),new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(G__25369),null,cljs.core.dissoc.call(null,G__25369,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"vx","vx",-1685168462),new cljs.core.Keyword(null,"vy","vy",-2018509997)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {peli.engine.Gravity}
 * @implements {cljs.core.ICounted}
 * @implements {peli.engine.Pen}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {peli.engine.Physics}
 * @implements {peli.engine.Collision}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
peli.play.BadGuy = (function (id,width,height,x,y,vx,vy,__meta,__extmap,__hash){
this.id = id;
this.width = width;
this.height = height;
this.x = x;
this.y = y;
this.vx = vx;
this.vy = vy;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
peli.play.BadGuy.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16944__auto__,k__16945__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return cljs.core._lookup.call(null,this__16944__auto____$1,k__16945__auto__,null);
});

peli.play.BadGuy.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16946__auto__,k25381,else__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
var G__25383 = (((k25381 instanceof cljs.core.Keyword))?k25381.fqn:null);
switch (G__25383) {
case "id":
return self__.id;

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
case "vx":
return self__.vx;

break;
case "vy":
return self__.vy;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25381,else__16947__auto__);

}
});

peli.play.BadGuy.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16958__auto__,writer__16959__auto__,opts__16960__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
var pr_pair__16961__auto__ = ((function (this__16958__auto____$1){
return (function (keyval__16962__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16959__auto__,cljs.core.pr_writer,""," ","",opts__16960__auto__,keyval__16962__auto__);
});})(this__16958__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16959__auto__,pr_pair__16961__auto__,"#peli.play.BadGuy{",", ","}",opts__16960__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vx","vx",-1685168462),self__.vx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vy","vy",-2018509997),self__.vy],null))], null),self__.__extmap));
});

peli.play.BadGuy.prototype.peli$engine$Physics$ = true;

peli.play.BadGuy.prototype.peli$engine$Physics$physics$arity$4 = (function (this$,time_diff,game,ch){
var self__ = this;
var this$__$1 = this;
return peli.engine.apply_physics.call(null,this$__$1,game);
});

peli.play.BadGuy.prototype.cljs$core$IIterable$ = true;

peli.play.BadGuy.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25380){
var self__ = this;
var G__25380__$1 = this;
return (new cljs.core.RecordIter((0),G__25380__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"vx","vx",-1685168462),new cljs.core.Keyword(null,"vy","vy",-2018509997)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

peli.play.BadGuy.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16942__auto__){
var self__ = this;
var this__16942__auto____$1 = this;
return self__.__meta;
});

peli.play.BadGuy.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16938__auto__){
var self__ = this;
var this__16938__auto____$1 = this;
return (new peli.play.BadGuy(self__.id,self__.width,self__.height,self__.x,self__.y,self__.vx,self__.vy,self__.__meta,self__.__extmap,self__.__hash));
});

peli.play.BadGuy.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16948__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

peli.play.BadGuy.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16939__auto__){
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

peli.play.BadGuy.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16940__auto__,other__16941__auto__){
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

peli.play.BadGuy.prototype.peli$engine$Collision$ = true;

peli.play.BadGuy.prototype.peli$engine$Collision$collide$arity$4 = (function (this$,body,game,ch){
var self__ = this;
var this$__$1 = this;
var pred__25384 = cljs.core._EQ_;
var expr__25385 = cljs.core.type.call(null,body);
if(cljs.core.truth_(pred__25384.call(null,peli.svg_adaptor.Block,expr__25385))){
return peli.engine.collide_action.call(null,peli.engine.collide_solid.call(null,this$__$1,body),body,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),((function (pred__25384,expr__25385,this$__$1){
return (function (p1__25378_SHARP_){
return cljs.core.assoc.call(null,p1__25378_SHARP_,new cljs.core.Keyword(null,"vx","vx",-1685168462),(new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(p1__25378_SHARP_) * (-1)));
});})(pred__25384,expr__25385,this$__$1))
,new cljs.core.Keyword(null,"right","right",-452581833),((function (pred__25384,expr__25385,this$__$1){
return (function (p1__25379_SHARP_){
return cljs.core.assoc.call(null,p1__25379_SHARP_,new cljs.core.Keyword(null,"vx","vx",-1685168462),(new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(p1__25379_SHARP_) * (-1)));
});})(pred__25384,expr__25385,this$__$1))
], null));
} else {
if(cljs.core.truth_(pred__25384.call(null,peli.play.Hero,expr__25385))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(this$__$1),new cljs.core.Keyword(null,"dead","dead",-1946604091))){
return this$__$1;
} else {
return peli.engine.collide_action.call(null,this$__$1,body,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),peli.play.kill_bad_guy.call(null,ch)], null));
}
} else {
return this$__$1;
}
}
});

peli.play.BadGuy.prototype.peli$engine$Gravity$ = true;

peli.play.BadGuy.prototype.peli$engine$Gravity$gravity$arity$3 = (function (this$,game,ch){
var self__ = this;
var this$__$1 = this;
return peli.engine.apply_gravity.call(null,this$__$1);
});

peli.play.BadGuy.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16953__auto__,k__16954__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"vx","vx",-1685168462),null,new cljs.core.Keyword(null,"vy","vy",-2018509997),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"x","x",2099068185),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),k__16954__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16953__auto____$1),self__.__meta),k__16954__auto__);
} else {
return (new peli.play.BadGuy(self__.id,self__.width,self__.height,self__.x,self__.y,self__.vx,self__.vy,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16954__auto__)),null));
}
});

peli.play.BadGuy.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16951__auto__,k__16952__auto__,G__25380){
var self__ = this;
var this__16951__auto____$1 = this;
var pred__25387 = cljs.core.keyword_identical_QMARK_;
var expr__25388 = k__16952__auto__;
if(cljs.core.truth_(pred__25387.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__25388))){
return (new peli.play.BadGuy(G__25380,self__.width,self__.height,self__.x,self__.y,self__.vx,self__.vy,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25387.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__25388))){
return (new peli.play.BadGuy(self__.id,G__25380,self__.height,self__.x,self__.y,self__.vx,self__.vy,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25387.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__25388))){
return (new peli.play.BadGuy(self__.id,self__.width,G__25380,self__.x,self__.y,self__.vx,self__.vy,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25387.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__25388))){
return (new peli.play.BadGuy(self__.id,self__.width,self__.height,G__25380,self__.y,self__.vx,self__.vy,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25387.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__25388))){
return (new peli.play.BadGuy(self__.id,self__.width,self__.height,self__.x,G__25380,self__.vx,self__.vy,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25387.call(null,new cljs.core.Keyword(null,"vx","vx",-1685168462),expr__25388))){
return (new peli.play.BadGuy(self__.id,self__.width,self__.height,self__.x,self__.y,G__25380,self__.vy,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25387.call(null,new cljs.core.Keyword(null,"vy","vy",-2018509997),expr__25388))){
return (new peli.play.BadGuy(self__.id,self__.width,self__.height,self__.x,self__.y,self__.vx,G__25380,self__.__meta,self__.__extmap,null));
} else {
return (new peli.play.BadGuy(self__.id,self__.width,self__.height,self__.x,self__.y,self__.vx,self__.vy,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16952__auto__,G__25380),null));
}
}
}
}
}
}
}
});

peli.play.BadGuy.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vx","vx",-1685168462),self__.vx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vy","vy",-2018509997),self__.vy],null))], null),self__.__extmap));
});

peli.play.BadGuy.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16943__auto__,G__25380){
var self__ = this;
var this__16943__auto____$1 = this;
return (new peli.play.BadGuy(self__.id,self__.width,self__.height,self__.x,self__.y,self__.vx,self__.vy,G__25380,self__.__extmap,self__.__hash));
});

peli.play.BadGuy.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16949__auto__,entry__16950__auto__){
var self__ = this;
var this__16949__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16950__auto__)){
return cljs.core._assoc.call(null,this__16949__auto____$1,cljs.core._nth.call(null,entry__16950__auto__,(0)),cljs.core._nth.call(null,entry__16950__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16949__auto____$1,entry__16950__auto__);
}
});

peli.play.BadGuy.prototype.peli$engine$Pen$ = true;

peli.play.BadGuy.prototype.peli$engine$Pen$draw$arity$3 = (function (this$,game,ch){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),self__.x,new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,new cljs.core.Keyword(null,"width","width",-384071477),self__.width,new cljs.core.Keyword(null,"height","height",1025178622),self__.height,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"url(#goomba)"], null)], null)], null);
});

peli.play.BadGuy.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"vx","vx",-44636935,null),new cljs.core.Symbol(null,"vy","vy",-377978470,null)], null);
});

peli.play.BadGuy.cljs$lang$type = true;

peli.play.BadGuy.cljs$lang$ctorPrSeq = (function (this__16978__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"peli.play/BadGuy");
});

peli.play.BadGuy.cljs$lang$ctorPrWriter = (function (this__16978__auto__,writer__16979__auto__){
return cljs.core._write.call(null,writer__16979__auto__,"peli.play/BadGuy");
});

peli.play.__GT_BadGuy = (function peli$play$__GT_BadGuy(id,width,height,x,y,vx,vy){
return (new peli.play.BadGuy(id,width,height,x,y,vx,vy,null,null,null));
});

peli.play.map__GT_BadGuy = (function peli$play$map__GT_BadGuy(G__25382){
return (new peli.play.BadGuy(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__25382),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__25382),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__25382),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__25382),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__25382),new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(G__25382),new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(G__25382),null,cljs.core.dissoc.call(null,G__25382,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"vx","vx",-1685168462),new cljs.core.Keyword(null,"vy","vy",-2018509997)),null));
});

peli.play.key_actions = new cljs.core.PersistentArrayMap(null, 6, [(39),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-down","on-down",2037743467),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-entity","update-entity",-2127937836),new cljs.core.Keyword(null,"hero","hero",1983137057),(function (p1__25391_SHARP_){
return cljs.core.assoc.call(null,p1__25391_SHARP_,new cljs.core.Keyword(null,"vx","vx",-1685168462),(2));
})], null)], null),new cljs.core.Keyword(null,"on-up","on-up",-127496699),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-entity","update-entity",-2127937836),new cljs.core.Keyword(null,"hero","hero",1983137057),(function (p1__25392_SHARP_){
return cljs.core.assoc.call(null,p1__25392_SHARP_,new cljs.core.Keyword(null,"vx","vx",-1685168462),(0));
})], null)], null)], null),(37),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-down","on-down",2037743467),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-entity","update-entity",-2127937836),new cljs.core.Keyword(null,"hero","hero",1983137057),(function (p1__25393_SHARP_){
return cljs.core.assoc.call(null,p1__25393_SHARP_,new cljs.core.Keyword(null,"vx","vx",-1685168462),(-2));
})], null)], null),new cljs.core.Keyword(null,"on-up","on-up",-127496699),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-entity","update-entity",-2127937836),new cljs.core.Keyword(null,"hero","hero",1983137057),(function (p1__25394_SHARP_){
return cljs.core.assoc.call(null,p1__25394_SHARP_,new cljs.core.Keyword(null,"vx","vx",-1685168462),(0));
})], null)], null)], null),(32),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-down","on-down",2037743467),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-entity","update-entity",-2127937836),new cljs.core.Keyword(null,"hero","hero",1983137057),(function (p1__25395_SHARP_){
if((new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(p1__25395_SHARP_) === (0))){
peli.engine.play_sound.call(null,"jump");

return cljs.core.assoc.call(null,p1__25395_SHARP_,new cljs.core.Keyword(null,"vy","vy",-2018509997),(7));
} else {
return p1__25395_SHARP_;
}
})], null)], null)], null),(13),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-down","on-down",2037743467),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hide","hide",-596913169),new cljs.core.Keyword(null,"start","start",-355208981)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unpause","unpause",319340103)], null)], null)], null),(27),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-down","on-down",2037743467),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pause","pause",-2095325672)], null)], null)], null),(68),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-down","on-down",2037743467),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debug","debug",-1608172596)], null)], null)], null)], null);
peli.play.world = (new peli.engine.World(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(1000),new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"img","img",1442687358),null,new cljs.core.Keyword(null,"color","color",1011675173),"#72BCD4"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b1","b1",-1270036758),new cljs.core.Keyword(null,"b2","b2",1108940514),new cljs.core.Keyword(null,"b3","b3",1128981270),new cljs.core.Keyword(null,"b4","b4",-1728006924),new cljs.core.Keyword(null,"b6","b6",1762223416),new cljs.core.Keyword(null,"b7","b7",-1868108045),new cljs.core.Keyword(null,"b8","b8",59364940),new cljs.core.Keyword(null,"b9","b9",-1777232298),new cljs.core.Keyword(null,"b10","b10",482733548)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"bad1","bad1",-2013764356),new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"r4","r4",1134323163)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981)], null),new cljs.core.Keyword(null,"hero","hero",1983137057),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),item], null);
}),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new peli.play.Hero(new cljs.core.Keyword(null,"hero","hero",1983137057),(19),(27),(100),(200),(0),(0),null,null,null)),(new peli.svg_adaptor.Block(new cljs.core.Keyword(null,"b1","b1",-1270036758),"#007F00",(200),(100),(0),(300),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10),(0),(0)], null),null,null,null)),(new peli.svg_adaptor.Block(new cljs.core.Keyword(null,"b2","b2",1108940514),"#007F00",(200),(100),(200),(330),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null),null,null,null)),(new peli.svg_adaptor.Block(new cljs.core.Keyword(null,"b3","b3",1128981270),"#007F00",(200),(100),(400),(300),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0),(0),(0)], null),null,null,null)),(new peli.svg_adaptor.Block(new cljs.core.Keyword(null,"b4","b4",-1728006924),"#007F00",(200),(200),(600),(230),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10),(0),(0)], null),null,null,null)),(new peli.svg_adaptor.Block(new cljs.core.Keyword(null,"b5","b5",-1961609154),"#007F00",(100),(50),(450),(250),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10),(0),(0)], null),null,null,null)),(new peli.svg_adaptor.Block(new cljs.core.Keyword(null,"b6","b6",1762223416),"#Af8500",(100),(24),(250),(250),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10),(3),(3)], null),null,null,null)),(new peli.svg_adaptor.Block(new cljs.core.Keyword(null,"b7","b7",-1868108045),"#Af8500",(100),(24),(350),(190),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10),(3),(3)], null),null,null,null)),(new peli.svg_adaptor.Block(new cljs.core.Keyword(null,"b8","b8",59364940),"#007F00",(60),(20),(100),(250),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(3),(3)], null),null,null,null)),(new peli.svg_adaptor.Block(new cljs.core.Keyword(null,"b9","b9",-1777232298),"#007F00",(50),(30),(105),(270),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null),null,null,null)),(new peli.svg_adaptor.Block(new cljs.core.Keyword(null,"b10","b10",482733548),"#007F00",(200),(150),(800),(270),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10),(0),(0)], null),null,null,null)),(new peli.play.Reward(new cljs.core.Keyword(null,"r1","r1",690974900),(12),(16),(400),(120),null,null,null)),(new peli.play.Reward(new cljs.core.Keyword(null,"r2","r2",252844174),(12),(16),(300),(190),null,null,null)),(new peli.play.Reward(new cljs.core.Keyword(null,"r3","r3",-2027148174),(12),(16),(500),(190),null,null,null)),(new peli.play.Reward(new cljs.core.Keyword(null,"r4","r4",1134323163),(12),(16),(900),(190),null,null,null)),(new peli.play.BadGuy(new cljs.core.Keyword(null,"bad1","bad1",-2013764356),(24),(24),(400),(220),-1.5,(0),null,null,null)),(new peli.svg_adaptor.TextPrompt(new cljs.core.Keyword(null,"start","start",-355208981),(100),(50),"Hit Enter",false,cljs.core.PersistentArrayMap.EMPTY,null,null,null))], null))),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"mario-stand-right","mario-stand-right",1995828418),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"img","img",1442687358),"http://funscript.info/samples/mario/mariostandright.gif",new cljs.core.Keyword(null,"width","width",-384071477),(35),new cljs.core.Keyword(null,"height","height",1025178622),(35),new cljs.core.Keyword(null,"x","x",2099068185),(-5),new cljs.core.Keyword(null,"y","y",-1757859776),(-3)], null),new cljs.core.Keyword(null,"mario-jump-right","mario-jump-right",-1886814357),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"img","img",1442687358),"http://funscript.info/samples/mario/mariojumpright.gif",new cljs.core.Keyword(null,"width","width",-384071477),(35),new cljs.core.Keyword(null,"height","height",1025178622),(35),new cljs.core.Keyword(null,"x","x",2099068185),(-5),new cljs.core.Keyword(null,"y","y",-1757859776),(-3)], null),new cljs.core.Keyword(null,"mario-jump-left","mario-jump-left",1665499326),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"img","img",1442687358),"http://funscript.info/samples/mario/mariojumpleft.gif",new cljs.core.Keyword(null,"width","width",-384071477),(35),new cljs.core.Keyword(null,"height","height",1025178622),(35),new cljs.core.Keyword(null,"x","x",2099068185),(-5),new cljs.core.Keyword(null,"y","y",-1757859776),(-3)], null),new cljs.core.Keyword(null,"mario-walk-right","mario-walk-right",295313140),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"img","img",1442687358),"http://funscript.info/samples/mario/mariowalkright.gif",new cljs.core.Keyword(null,"width","width",-384071477),(35),new cljs.core.Keyword(null,"height","height",1025178622),(35),new cljs.core.Keyword(null,"x","x",2099068185),(-5),new cljs.core.Keyword(null,"y","y",-1757859776),(-3)], null),new cljs.core.Keyword(null,"mario-walk-left","mario-walk-left",-1441282938),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"img","img",1442687358),"http://funscript.info/samples/mario/mariowalkleft.gif",new cljs.core.Keyword(null,"width","width",-384071477),(35),new cljs.core.Keyword(null,"height","height",1025178622),(35),new cljs.core.Keyword(null,"x","x",2099068185),(-5),new cljs.core.Keyword(null,"y","y",-1757859776),(-3)], null),new cljs.core.Keyword(null,"goomba","goomba",1839598046),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"img","img",1442687358),"http://www.dan-dare.org/Dan%20Mario/GoombaMediumAni.gif",new cljs.core.Keyword(null,"width","width",-384071477),(24),new cljs.core.Keyword(null,"height","height",1025178622),(24)], null),new cljs.core.Keyword(null,"coin","coin",-227557189),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"img","img",1442687358),"http://themushroomkingdom.net/images/ani/smb3/ani_smb3coin.gif",new cljs.core.Keyword(null,"width","width",-384071477),(14),new cljs.core.Keyword(null,"height","height",1025178622),(16)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"jump","jump",-971319427),"http://themushroomkingdom.net/sounds/wav/smw/smw_jump.wav",new cljs.core.Keyword(null,"stomp","stomp",782009119),"http://themushroomkingdom.net/sounds/wav/smw/smw_stomp.wav",new cljs.core.Keyword(null,"reward","reward",-887240948),"http://themushroomkingdom.net/sounds/wav/smw/smw_coin.wav"], null),peli.play.key_actions,new cljs.core.Keyword(null,"paused","paused",-1710376127),null,null,null));
peli.play.game_config = (new peli.engine.Game(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"world1","world1",-777250234),peli.play.world], null),null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"score","score",-1963588780),(0),new cljs.core.Keyword(null,"health","health",-295520649),(3),new cljs.core.Keyword(null,"lives","lives",845902073),(10)], null),null,null,null));
if(typeof peli.play.game_state !== 'undefined'){
} else {
peli.play.game_state = peli.svg_adaptor.svg_game.call(null,peli.play.game_config);
}
if(typeof peli.play.game !== 'undefined'){
} else {
peli.play.game = peli.engine.init_game.call(null,peli.play.game_state,new cljs.core.Keyword(null,"world1","world1",-777250234),true);
}
peli.engine.render_game.call(null,peli.play.game,"myGameDiv");
peli.time_debugger.init_debugger.call(null,new cljs.core.Keyword(null,"debug-ch","debug-ch",-10280201).cljs$core$IFn$_invoke$arity$1(peli.play.game),peli.play.game_state,"debugger",null);

//# sourceMappingURL=play.js.map?rel=1447099626296