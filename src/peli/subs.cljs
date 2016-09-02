(ns peli.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re-frame]))


;; ---------------------------------------------------------------------
;; Subscriptions

(re-frame/register-sub
 :peli/game
 (fn [db _]
   (reaction (get @db :peli/game))))

(re-frame/register-sub
 :peli/frame
 (fn [db _]
   (reaction (get-in @db [:peli/game :active-world :frame]))))

(re-frame/register-sub
 :peli/board
 (fn [db _]
   (reaction (get-in @db [:peli/game :active-world :board]))))

(re-frame/register-sub
 :peli/state
 (fn [db _]
   (reaction (get-in @db [:peli/game :state]))))

(re-frame/register-sub
 :peli/solids
 (fn [db _]
   (reaction (get-in @db [:peli/game :active-world :solids]))))

(re-frame/register-sub
 :peli/framed
 (fn [db _]
   (reaction (get-in @db [:peli/game :active-world :framed]))))

(re-frame/register-sub
 :peli/overlays
 (fn [db _]
   (reaction (get-in @db [:peli/game :active-world :overlays]))))

(re-frame/register-sub
 :peli/entity
 (fn [db [_ id]]
   (reaction (get-in @db [:peli/game :active-world :registry id]))))

(re-frame/register-sub
 :peli/sprites
 (fn [db [_ id]]
   (reaction (get-in @db [:peli/game :active-world :sprites]))))

(re-frame/register-sub
 :peli/characters
 (fn [db [_ id]]
   (reaction (get-in @db [:peli/game :active-world :characters]))))

(re-frame/register-sub
 :peli/sounds
 (fn [db [_ id]]
   (reaction (get-in @db [:peli/game :active-world :sounds]))))

(re-frame/register-sub
 :peli/run-state
 (fn [db [_ id]]
   (reaction (get-in @db [:peli/game :active-world :run-state]))))


(re-frame/register-sub
 :peli-debug/state
 (fn [db _]
   (reaction (get @db :peli/debug))))
