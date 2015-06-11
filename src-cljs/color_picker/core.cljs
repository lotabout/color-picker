(ns color-picker.core
  (:require [domina :as dom]))

(defn hsl2rgb
  "convert H: [0, 360) S: [0 100] V: [0 100] to RGB [0 255]"
  [h s l]
  (let [s (/ s 100)
        l (/ l 100)
        c (* (- 1 (Math.abs (- (* 2 l) 1))) s)
        hh (/ h 60)
        x (* c (- 1 (Math.abs (- (mod hh 2) 1))))]
    (let [[r1 g1 b1]
          (case (int hh)
            0 [c x 0]
            1 [x c 0]
            2 [0 c x]
            3 [0 x c]
            4 [x 0 c]
            5 [c 0 x]
            [c 0 x])
          m (- l (* c 0.5))]
      (map #(int (* % 255)) [(+ r1 m) (+ g1 m) (+ b1 m)]))))

(defn ^:export convert-hsv-to-rgb []
  (let [h (int (dom/value (dom/by-id "h")))
        s (int (dom/value (dom/by-id "s")))
        l (int (dom/value (dom/by-id "l")))
        rgb-value (dom/by-id "RGB-value")
        rgb-preview (dom/by-id "RGB-preview")]
    (when (and (and (>= h 0) (< h 360))
             (and (>= s 0) (<= s 100))
             (and (>= l 0) (<= l 100)))
      (let [[r g b] (hsl2rgb h s l)
            rgb-string (str "rgb(" (str r) ", " (str g) ", " (str b) ")")]
        (dom/set-text! rgb-preview rgb-string)
        (dom/set-styles! rgb-preview {:background-color rgb-string})))))

;; (defn init []
;;   (set! (.-onclick (dom/by-id "hsl2rgb") convert-hsv-to-rgb)))


;; (set! (.-onload js/window) init)
