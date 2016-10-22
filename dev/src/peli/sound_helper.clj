(ns peli.sound-helper
  (:require [clojure.java.io :as io]
            [clojure.core.async :refer [go]])
  (:import [java.net URL]
           [javax.sound.sampled AudioFormat AudioInputStream AudioSystem DataLine
            LineUnavailableException SourceDataLine UnsupportedAudioFileException]))

(def buffer-size 524288) ;;128k

(defn pipe-stream [uri in out]
  (let [b-array (byte-array buffer-size)]
    (try
      (loop [bytes-read (.read in b-array 0 (alength b-array))]
        (when-not (neg? bytes-read)
          (.write out b-array 0 bytes-read)
          (recur (.read in b-array 0 (alength b-array)))))
      (catch Exception e
        (.printStackTrace e)
        (println "error loading file:" uri))
      (finally
        (.close in)
        (.drain out)
        (.close out)))))

(defn play-sound [uri]
  (go
    (let [in (-> uri
                 io/input-stream
                 AudioSystem/getAudioInputStream)
          fmt (.getFormat in)
          info (javax.sound.sampled.DataLine$Info. SourceDataLine fmt)
          auline (AudioSystem/getLine info)]
      (.open auline fmt)
      (.start auline)
      (pipe-stream uri in auline))))
