import { Range, getTrackBackground } from "react-range"
import { useState } from "react"

export const RangeSlider = ({
  handler,
  by = 1,
  scale = 10,
  two = true,
  control = "",
}) => {
  const [values, setValues] = useState(two ? [0, scale] : [0])

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Range
        values={values}
        step={by}
        min={0}
        max={scale}
        onChange={(values) => {
          handler()
          setValues(values)
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: two
                    ? [
                        "#ccc",
                        "rgb(var(--tmdbLightBlue, (0, 118, 241)))",
                        "#ccc",
                      ]
                    : ["rgb(var(--tmdbLightBlue, (0, 118, 241)))", "#ccc"],
                  min: 0,
                  max: scale,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            key={props.key}
            style={{
              ...props.style,
              height: "0.75rem",
              width: "0.75rem",
              borderRadius: "50%",
              backgroundColor: "rgb(var(--tmdbLightBlue, (0, 118, 241)))",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
          >
            <div
              style={{
                height: "0.7rem",
                width: "5px",
                backgroundColor: isDragged ? "#548BF4" : "#CCC",
              }}
            />
          </div>
        )}
      />
      <output style={{ marginTop: "30px" }} id="output">
        {values[0].toFixed()}
        {two && ` - ${values[1].toFixed()}`}
      </output>
      <input type="hidden" name={control + ".gte"} value={values[0].toFixed()} />
      {two && (
        <input
          type="hidden"
          name={control + ".lte"}
          value={values[1].toFixed()}
        />
      )}
    </div>
  )
}
