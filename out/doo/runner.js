// Compiled by ClojureScript 1.7.145 {}
goog.provide('doo.runner');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('goog.object');
goog.require('jx.reporter.karma');
cljs.core.enable_console_print_BANG_.call(null);
doo.runner.set_print_fn_BANG_ = (function doo$runner$set_print_fn_BANG_(f){
return cljs.core._STAR_print_fn_STAR_ = f;
});
goog.exportSymbol('doo.runner.set_print_fn_BANG_', doo.runner.set_print_fn_BANG_);
doo.runner.node_QMARK_ = (function doo$runner$node_QMARK_(){
return typeof process !== 'undefined';
});
doo.runner.karma_QMARK_ = (function doo$runner$karma_QMARK_(){
return ((typeof window !== 'undefined') && (typeof goog.object.get(window,"__karma__") !== 'undefined')) || ((typeof global !== 'undefined') && (typeof goog.object.get(global,"__karma__") !== 'undefined'));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null),(function (m){
return cljs.core.println.call(null,"Testing",cljs.core.name.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m)));
}));
doo.runner._STAR_exit_fn_STAR_ = null;
/**
 * Sets the fn to be called when exiting the script.
 * It should take one bool argument: successful?
 */
doo.runner.set_exit_point_BANG_ = (function doo$runner$set_exit_point_BANG_(f){
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return doo.runner._STAR_exit_fn_STAR_ = f;
});
goog.exportSymbol('doo.runner.set_exit_point_BANG_', doo.runner.set_exit_point_BANG_);
doo.runner.exit_BANG_ = (function doo$runner$exit_BANG_(success_QMARK_){
if(cljs.core.truth_(doo.runner.node_QMARK_.call(null))){
var process_exit = goog.object.get(process,"exit");
return process_exit.call(null,(cljs.core.truth_(success_QMARK_)?(0):(1)));
} else {
try{return doo.runner._STAR_exit_fn_STAR_.call(null,success_QMARK_);
}catch (e18558){var e = e18558;
cljs.core.println.call(null,"WARNING: doo's exit function was not properly set");

return cljs.core.println.call(null,e);
}}
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)], null),(function (m){
return doo.runner.exit_BANG_.call(null,cljs.test.successful_QMARK_.call(null,m));
}));
doo.runner.run_BANG_ = (function doo$runner$run_BANG_(a){
try{return cljs.core._STAR_main_cli_fn_STAR_.call(null,a);
}catch (e18560){var e = e18560;
cljs.core.println.call(null,"WARNING: doo's init function was not set");

cljs.core.println.call(null,e);

return doo.runner.exit_BANG_.call(null,false);
}});
goog.exportSymbol('doo.runner.run_BANG_', doo.runner.run_BANG_);
/**
 * Sets the function to be run when starting the script
 */
doo.runner.set_entry_point_BANG_ = (function doo$runner$set_entry_point_BANG_(f){
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return cljs.core._STAR_main_cli_fn_STAR_ = f;
});
