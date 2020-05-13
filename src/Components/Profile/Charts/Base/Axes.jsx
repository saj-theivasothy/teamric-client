import React from "react";
import * as d3 from "d3";

const AxisHorizontal = ({
  dimensions,
  label,
  formatTick,
  scale,
  type = "numeric",
  ...props
}) => {
  console.log(label, "LABEL");
  if (type !== "numeric") {
    // doSomething
  }

  const numberOfTicks =
    dimensions.boundedWidth < 600
      ? dimensions.boundedWidth / 100
      : dimensions.boundedWidth / 250;

  const ticks = scale.ticks(numberOfTicks);

  return (
    <g
      className="Axis AxisHorizontal"
      transform={`translate(0, ${dimensions.boundedHeight})`}
      {...props}
    >
      <line className="Axis__line" x2={dimensions.boundedWidth} />

      {ticks.map((tick, i) => (
        <text
          key={tick}
          className="Axis__tick"
          transform={`translate(${scale(tick)}, 25)`}
        >
          {formatTick(tick)}
        </text>
      ))}

      {label && (
        <text
          className="Axis__label"
          transform={`translate(${dimensions.boundedWidth / 2}, 60)`}
        >
          {label}
        </text>
      )}
    </g>
  );
};

const AxisVertical = ({
  dimensions,
  label,
  formatTick,
  scale,
  type = "numeric",
  ...props
}) => {
  let ticks;
  let offset = 0;
  if (type !== "numeric") {
    console.log("############");
    console.log(scale.domain());
    console.log(scale.domain().map((x) => scale(x)));
    console.log("############!!!!!");
    // doSomething
    ticks = scale.domain();
    offset = scale.bandwidth() / 2;
  } else {
    const numberOfTicks = dimensions.boundedHeight / 70;
    ticks = scale.ticks(numberOfTicks);
  }

  return (
    <g className="Axis AxisVertical" {...props}>
      <line className="Axis__line" y2={dimensions.boundedHeight} />
      {ticks.map((tick, i) => (
        <text
          style={{ textAnchor: "middle", dominantBaseline: "central" }}
          key={tick}
          className="Axis__tick"
          x={-16}
          y={scale(tick) + offset}
          transform={`rotate(${-90}, ${-16}, ${scale(tick) + offset})`}
        >
          {ticks[i]}
        </text>
      ))}

      {label && (
        <text
          className="Axis__label"
          style={{
            transform: `translate(-56px, ${
              dimensions.boundedHeight / 2
            }px) rotate(-90deg)`,
          }}
        >
          {label}
        </text>
      )}
    </g>
  );
};

export { AxisHorizontal, AxisVertical };
