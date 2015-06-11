(ns color-picker.core
  (:require [domina :as dom]))

(defn hsl2rgb
  "convert H: [0, 360) S: [0 100] V: [0 100] A:[0 100] to RGBA [0 255]"
  [hsla]
  (let [h (hsla :h)
        s (/ (hsla :s) 100)
        l (/ (hsla :l) 100)
        a (/ (hsla :a) 100)
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
            [0 0 0] )
          m (- l (* c 0.5))]
      (into {}
            (for [[k v] {:r (+ r1 m), :g (+ g1 m), :b (+ b1 m), :a a}]
              [k (int (* v 255))])))))

(defn change-hsla
  "change the value of hsla to a new value"
  [hsla val type]
  (assoc hsla type val))

(defn iterate-line
  "generate one line of gradient"
  [hsla, length, type, func]
  (let [limit (case type
                :h 360
                :s 100
                :l 100
                :a 100
                length)
        step (/ limit length)
        value-map (range 0 limit step)]
    (mapcat func value-map)))

(defn generate-line-gradient
  [hsla, width, type]
  (iterate-line hsla
                width
                type
                (fn [val]
                  (let [rgba-map (hsl2rgb (change-hsla hsla val type))]
                    [(rgba-map :r) (rgba-map :g) (rgba-map :b) (rgba-map :a)]))))

(defn generate-pallete
  "generate one 2D palette
  type: [type_horizontal, type_vertical], for example: [:s :v]"
  [hsla, width, height, type]
  (iterate-line hsla height (type 0)
                (fn [col-val]
                  (generate-line-gradient (change-hsla hsla col-val (type 0))
                                          width
                                          (type 1)))))

(defn generate-pallete-image
  "generate one 2D pallete image"
  [imageData, hsla, type]
  (let [width (.-width imageData)
        height (.-height imageData)
        pallete (generate-pallete hsla width height type)]
    ;(set! (.-data imageData) (js/Uint8ClampedArray. (clj->js pallete)))
    ;(.log js/console  (-> imageData .-data .-length))
    (doseq [h (range (-> imageData .-data .-length))]
      (aset (.-data imageData) h
            (nth pallete h)))
    ;(.log js/console imageData)
    ))


#_(defn ^:export convert-hsv-to-rgb []
  (let [h (int (dom/value (dom/by-id "h")))
        s (int (dom/value (dom/by-id "s")))
        l (int (dom/value (dom/by-id "l")))
        rgb-value (dom/by-id "RGB-value")
        rgb-preview (dom/by-id "RGB-preview")]
    (when (and (and (>= h 0) (< h 360))
             (and (>= s 0) (<= s 100))
             (and (>= l 0) (<= l 100)))
      (let [[r g b a] (hsl2rgb h s l 0)
            rgb-string (str "rgb(" (str r) ", " (str g) ", " (str b) ")")]
        (dom/set-text! rgb-preview rgb-string)
        (dom/set-styles! rgb-preview {:background-color rgb-string})))))

(defn draw-2d-pallete []
  (let [canvas-d2 (dom/by-id "d2")
        ctx (.getContext canvas-d2 "2d")
        imageData (.getImageData ctx 0 0 (.-width canvas-d2) (.-height canvas-d2))]
    (generate-pallete-image imageData {:h 90 :s 90 :l 90 :a 90} [:s :l])
    (.putImageData ctx imageData, 0, 0)))

;; (defn init []
;;   (set! (.-onclick (dom/by-id "hsl2rgb") convert-hsv-to-rgb)))


;; (set! (.-onload js/window) init)

;; (.log js/console (generate-pallete [90 90 90 0] 100 [:s :v]))
(draw-2d-pallete)
