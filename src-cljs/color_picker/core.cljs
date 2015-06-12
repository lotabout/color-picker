(ns color-picker.core
  (:require [domina :as dom]
            [domina.events :as ev]
            [domina.css :as sel]))

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

;;; ================================================================================
;;; Generate all pixel RGB data and assign them to the imageData

#_(defn change-hsla
  "change the value of hsla to a new value"
  [hsla val type]
  (assoc hsla type val))

#_(defn iterate-line
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

#_(defn generate-line-gradient
  [hsla, width, type]
  (iterate-line hsla
                width
                type
                (fn [val]
                  (let [rgba-map (hsl2rgb (change-hsla hsla val type))]
                    [(rgba-map :r) (rgba-map :g) (rgba-map :b) (rgba-map :a)]))))

#_(defn generate-palette
  "generate one 2D palette
  type: [type_horizontal, type_vertical], for example: [:s :v]"
  [hsla, width, height, type]
  (iterate-line hsla height (type 0)
                (fn [col-val]
                  (generate-line-gradient (change-hsla hsla col-val (type 0))
                                          width
                                          (type 1)))))

#_(defn generate-palette-image
  "generate one 2D palette image"
  [imageData, hsla, type]
  (let [width (.-width imageData)
        height (.-height imageData)
        palette (generate-palette hsla width height type)]
    ;(set! (.-data imageData) (js/Uint8ClampedArray. (clj->js palette)))
    (doseq [h (range (-> imageData .-data .-length))]
      (aset (.-data imageData) h
            (nth palette h)))
    ))

;;; ================================================================================
;;; Try to fill the RGB value of every pixel of imageData directly

(defn iterate-2d!
  "iterate over every pixel in the imageData
   func should be (func imageData row col)"
  [imageData, func]
  (let [width (.-width imageData)
        height (.-height imageData)]
    (loop [row 0 col 0]
      (let [next-row (if (= col width) (+ row 1) row)
            next-col (if (= col width) 0 (+ col 1))]
        (when-not (and (>= col width) (>= row height))
          (func imageData row col)
          (recur next-row next-col))))))

(defn get-limit [type]
  (case type
    :h 360
    :s 100
    :l 100
    :a 100
    100))

(defn get-step [length type]
  (/  (get-limit type) length))

(defn generate-draw-palette-func
  "draw a point in the palette"
  [hsla, width, height, type-x, type-y]
  (let [step-x (get-step width type-x)
        step-y (get-step height type-y)]
    #_(.log js/console (clj->js [hsla width height type-x type-y step-x step-y]))
    (fn [imageData row col]
      (let [new-hsla (conj hsla [type-x (* col step-x)] [type-y (* row step-y)])
            start-point (* (+ (* row width) col) 4)
            {:keys [r g b a]} (hsl2rgb new-hsla)]
        #_(.log js/console (clj->js [row col start-point width]))
        (aset (.-data imageData) start-point r)
        (aset (.-data imageData) (+ start-point 1) g)
        (aset (.-data imageData) (+ start-point 2) b)
        (aset (.-data imageData) (+ start-point 3) a)))))

(defn draw-2d-palette!
  "modify the imageData to the palette
   (draw-2d-palette imageData {:h 90 :s 90 :l 90 :a 100} [:s :l])"
  [imageData, hsla, types]
  (let [width (.-width imageData)
        height (.-height imageData)]
    (iterate-2d! imageData
                 (generate-draw-palette-func hsla width height (types 0) (types 1)))))

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

(defn draw-palette-by-pixel [id hsla types]
  (let [canvas (dom/by-id id)
        ctx (.getContext canvas "2d")
        imageData (.getImageData ctx 0 0 (.-width canvas) (.-height canvas))]
    (draw-2d-palette! imageData hsla types)
    (.putImageData ctx imageData, 0, 0)))

;;; ================================================================================
;;; Use linearGradient to generate color.

(defn hsla-map-to-string [hsla]
  (str "hsla(" (str (:h hsla)) ", " (str (:s hsla)) "%, "
       (str (:l hsla)) "%, " (str (/ (:a hsla) 100)) ")"))

(defn rgba-map-to-string [rgba]
  (str "rgba(" (str (:r rgba)) ", " (str (:g rgba)) ", "
       (str (:b rgba)) ", " (str (/ (Math.round (/ (* (:a rgba) 100) 255)) 100)) ")"))

(defn draw-gradient-column!
  "construct a gradient line with 1px height"
  [context, row, width, hsla, type-x]
  (let [gradient (.createLinearGradient context 0 row (- width 1) row)
        limit (get-limit type-x)]
    (doseq [stop (range 0 1 (/ 1 (/ limit 10)))]
      #_(.log js/console (clj->js [stop (hsla-map-to-string (conj hsla [type-x (* stop limit)]))]))
      (.addColorStop gradient stop (hsla-map-to-string (conj hsla [type-x (* stop limit)]))))
    (set! (.-fillStyle context) gradient)
    (.fillRect context 0 row width 1)))

(defn draw-gradient-row!
  "draw a gradient rect"
  [context, width, height, hsla, types, draw-line-func]
  (let [type-x (types 0)
        type-y (types 1)
        step (get-step height type-y)]
    #_(.log js/console (clj->js [types step width height]))
    (doseq [row (range height)]
      (draw-line-func context row width (conj hsla [type-y (* row step)]) type-x))))

(defn draw-palette-gradient!
  [context hsla types]
  (let [width (-> context .-canvas .-clientWidth)
        height (-> context .-canvas .-clientHeight)]
    (draw-gradient-row! context width height hsla types draw-gradient-column!)))

(defn draw-palette-by-gradient [id hsla types]
  (let [canvas (dom/by-id id)
        ctx (.getContext canvas "2d")
        width (-> ctx .-canvas .-clientWidth)
        height (-> ctx .-canvas .-clientHeight)]
    (.clearRect ctx 0 0 width height)
    (draw-palette-gradient! ctx hsla types)))

;;; ================================================================================
(def left-context (atom (.getContext (dom/by-id "d2") "2d")))
(def right-context (atom (.getContext (dom/by-id "d1") "2d")))

#_(defn refresh-imageData [left-context]
  (let [canvas (dom/by-id "d2")
        ctx (.getContext canvas "2d")]
    (reset! left-context ctx)))

(defn get-current-hsla []
  (let [h (int (dom/value (dom/by-id "h")))
        s (int (dom/value (dom/by-id "s")))
        l (int (dom/value (dom/by-id "l")))
        a (int (dom/value (dom/by-id "a")))]
    {:h (cond (and (>= h 0) (< h 360)) h
              (< h 0) 0
              (> h 360) 359)
     :s (cond (and (>= s 0) (<= s 100)) s
              (< s 0) 0
              (> s 100) 100)
     :l (cond (and (>= l 0) (<= l 100)) l
              (< l 0) 0
              (> l 100) 100)
     :a (cond (and (>= a 0) (<= a 100)) a
              (< a 0) 0
              (> a 100) 100)}))

(defn get-current-types []
  (cond
    (.-checked (dom/by-id "radio_h")) [[:s :l] [:unknown :h]]
    (.-checked (dom/by-id "radio_s")) [[:h :l] [:unknown :s]]
    (.-checked (dom/by-id "radio_l")) [[:h :s] [:unknown :l]]))




(defn canvas-fit-to-container
  [canvas]
  (set! (-> canvas .-style .-height) "100%")
  (set! (-> canvas .-style .-width) "100%")
  (set! (-> canvas .-width) (.-offsetWidth canvas))
  (set! (-> canvas .-height) (.-offsetHeight canvas)))

;; (canvas-fit-to-container (dom/by-id "d2"))
;; (canvas-fit-to-container (dom/by-id "d1"))
(defn pick-color
  "pick color of context at (x, y)"
  [context, x, y]
  (let [imageData (.-data (.getImageData context x y 1 1))]
    {:r (aget imageData 0)
     :g (aget imageData 1)
     :b (aget imageData 2)
     :a (aget imageData 3)}))

(defn pick-color-left
  "pick color from the left context at (x, y) and change the background color of preview"
  [x, y]
  (let [rgb-preview (dom/by-id "RGB-preview")
        rgb-string (rgba-map-to-string (pick-color @left-context x y))]
    (dom/set-text! rgb-preview rgb-string)
    (dom/set-styles! rgb-preview {:background-color rgb-string})))

;;; ================================================================================
(defn left-reset-pointer [context x y]
  (let [horizontal-line (sel/sel "#d2-div > div.horizontal-line")
        vertical-line (sel/sel "#d2-div > div.vertical-line")
        width-of-canvas (-> context .-canvas .-width)
        height-of-canvas (-> context .-canvas .-height)
        x (cond (< x 0) 0 (< x width-of-canvas) x :else width-of-canvas)
        y (cond (< y 0) 0 (< y height-of-canvas) y :else height-of-canvas)
        [left-types right-types] (get-current-types)
        input-box-1 (dom/by-id (name (left-types 0)))
        input-box-2 (dom/by-id (name (left-types 1)))]
    (dom/set-styles! horizontal-line {:top (str (- y 3) "px")})
    (dom/set-styles! vertical-line {:left (str (- x 3) "px")})
    (set! (.-value input-box-1) (str (int (/ (* x (get-limit (left-types 0))) width-of-canvas))))
    (set! (.-value input-box-2) (str (int (/ (* y (get-limit (left-types 1))) height-of-canvas))))
    (if (or (= (left-types 0) :h) (= (left-types 1) :h))
      (draw-palette-by-gradient "d1" (get-current-hsla) right-types))
    (pick-color-left x y)))

(defn right-reset-pointer [context x y]
  (let [horizontal-line (sel/sel "#d1-div > div.horizontal-line")
        length-of-canvas (-> context .-canvas .-height)
        y (cond (< y 0) 0 (< y length-of-canvas) y :else length-of-canvas)
        [left-types [unknown right-type]] (get-current-types)
        input-box (dom/by-id (name right-type))]
    (dom/set-styles! horizontal-line {:top (str (- y 3) "px")})
    ;; reset the value of inputbox
    (set! (.-value input-box) (str (int (/ (* y (get-limit right-type)) length-of-canvas))))
    (draw-palette-by-gradient "d2" (get-current-hsla) left-types)))

;;; add mouse listener
(ev/listen! (dom/by-id "d2")
            :mousedown
            (fn [evt]
              (this-as this
                       (let [x (:offsetX evt)
                             y (:offsetY evt)]
                         (left-reset-pointer @left-context x y)

                         (ev/listen! js/document :mousemove
                                     (fn [evt]
                                       (let [parent (dom/by-id "d2-div")
                                             offset-left (+ (.-offsetLeft parent) (.-clientLeft parent))
                                             offset-top (+ (.-offsetTop parent) (.-clientTop parent))
                                             x (- (:clientX evt) offset-left)
                                             y (- (:clientY evt) offset-top) ]
                                         (left-reset-pointer @left-context x y))))
                         (ev/listen! js/document :mouseup
                                     (fn [e]
                                       (ev/unlisten! js/document :mousemove)))))))


(ev/listen! (dom/by-id "d1")
            :mousedown
            (fn [evt]
              (this-as this
                       (let [x (:offsetX evt)
                             y (:offsetY evt)]
                         (right-reset-pointer @right-context x y)

                         (ev/listen! js/document :mousemove
                                     (fn [evt]
                                       (let [parent (dom/by-id "d1-div")
                                             offset-left (+ (.-offsetLeft parent) (.-clientLeft parent))
                                             offset-top (+ (.-offsetTop parent) (.-clientTop parent))
                                             x (- (:clientX evt) offset-left)
                                             y (- (:clientY evt) offset-top) ]
                                         (right-reset-pointer @right-context x y))))
                         (ev/listen! js/document :mouseup
                                     (fn [e]
                                       (ev/unlisten! js/document :mousemove)))))))

(defn draw-hsv []
  (let [hsla (get-current-hsla)
        rgb-preview (dom/by-id "RGB-preview")
        [types-left types-right]
        (cond
          (.-checked (dom/by-id "radio_h")) [[:s :l] [:unknown :h]]
          (.-checked (dom/by-id "radio_s")) [[:h :l] [:unknown :s]]
          (.-checked (dom/by-id "radio_l")) [[:h :s] [:unknown :l]])
        width-of-canvas (-> @left-context .-canvas .-width)
        height-of-canvas (-> @left-context .-canvas .-height)
        length-of-canvas (-> @right-context .-canvas .-height)]
    (draw-palette-by-gradient "d2" hsla types-left)
    (draw-palette-by-gradient "d1" hsla types-right)
    (right-reset-pointer @right-context
                         0
                         (int (/ (* (hsla (types-right 1)) length-of-canvas)
                                 (get-limit (types-right 1)))))
    (left-reset-pointer @left-context
                        (int (/ (* (hsla (types-left 0)) width-of-canvas)
                                (get-limit (types-left 0))))
                        (int (/ (* (hsla (types-left 1)) height-of-canvas)
                                (get-limit (types-left 1)))))
    ))

(ev/listen! (dom/by-class "hsl_radio")
            :click
            (fn [evt]
              (draw-hsv)))

;;; ================================================================================
;;; Initialization

;;; change the style of canvas to fit to their parent
(doall (map canvas-fit-to-container (.getElementsByTagName js/document "canvas")))

;;; add cross line.
(dom/append! (dom/by-id "d2-div") "<div class='horizontal-line'></div>")
(dom/append! (dom/by-id "d2-div") "<div class='vertical-line'></div>")

(dom/append! (dom/by-id "d1-div") "<div class='horizontal-line'></div>")

(draw-hsv)
