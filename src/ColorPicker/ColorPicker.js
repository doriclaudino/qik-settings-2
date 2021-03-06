import React from "react";
import PropTypes from "prop-types";
import reactCSS from "reactcss";
import merge from "lodash/merge";
import tinycolor from "tinycolor2";
import {
  ColorWrap,
  Saturation,
  Hue,
  Alpha,
  Checkboard
} from "react-color/lib/components/common/index";
import SketchFields from "react-color/lib/components/sketch/SketchFields";
import SketchPresetColors from "react-color/lib/components/sketch/SketchPresetColors";
export const colorPicker = ({
  title,
  width,
  rgb,
  hex,
  hsv,
  hsl,
  onChange,
  onSwatchHover,
  disableAlpha,
  presetColors,
  renderers,
  styles: passedStyles = {}
}) => {
  const styles = reactCSS(
    merge(
      {
        default: {
          title: {
            fontSize: "0.8em",
            padding: "0.1em",
            letterSpacing: "0.1em"
          },
          picker: {
            width,
            padding: "10px 10px 0",
            boxSizing: "initial",
            background: "#fff",
            borderRadius: "4px",
            boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)"
          },
          saturation: {
            width: "100%",
            paddingBottom: "75%",
            position: "relative",
            overflow: "hidden"
          },
          Saturation: {
            radius: "3px",
            shadow:
              "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
          },
          controls: {
            display: "flex"
          },
          sliders: {
            padding: "4px 0",
            flex: "1"
          },
          color: {
            width: "24px",
            height: "40px",
            position: "relative",
            marginTop: "4px",
            marginLeft: "4px",
            borderRadius: "3px"
          },
          activeColor: {
            absolute: "0px 0px 0px 0px",
            borderRadius: "2px",
            background: tinycolor(rgb).toString("prgb"),
            boxShadow:
              "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
          },
          hue: {
            position: "relative",
            height: "10px",
            overflow: "hidden"
          },
          Hue: {
            radius: "2px",
            shadow:
              "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
          },

          alpha: {
            position: "relative",
            height: "10px",
            marginTop: "4px",
            overflow: "hidden"
          },
          Alpha: {
            radius: "2px",
            shadow:
              "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
          },
          ...passedStyles
        },
        disableAlpha: {
          color: {
            height: "10px"
          },
          hue: {
            height: "10px"
          },
          alpha: {
            display: "none"
          }
        }
      },
      passedStyles
    ),
    { disableAlpha }
  );

  return (
    <div style={styles.picker}>
      <div style={styles.title} testid={`color_picker_title_${title}`}>
        {title}
      </div>
      <div style={styles.saturation}>
        <Saturation
          style={styles.Saturation}
          hsl={hsl}
          hsv={hsv}
          onChange={onChange}
        />
      </div>
      <div style={styles.controls}>
        <div style={styles.sliders}>
          <div style={styles.hue}>
            <Hue style={styles.Hue} hsl={hsl} onChange={onChange} />
          </div>
          <div style={styles.alpha}>
            <Alpha
              style={styles.Alpha}
              rgb={rgb}
              hsl={hsl}
              renderers={renderers}
              onChange={onChange}
            />
          </div>
        </div>
        <div style={styles.color}>
          <Checkboard />
          <div style={styles.activeColor} />
        </div>
      </div>

      <SketchFields
        rgb={rgb}
        hsl={hsl}
        hex={hex}
        onChange={onChange}
        disableAlpha={disableAlpha}
        on
      />
      <SketchPresetColors
        colors={presetColors}
        onClick={onChange}
        onSwatchHover={onSwatchHover}
      />
    </div>
  );
};

colorPicker.propTypes = {
  title: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rgb: PropTypes.object,
  hex: PropTypes.string,
  hsv: PropTypes.object,
  hsl: PropTypes.object,
  onChange: PropTypes.func,
  onSwatchHover: PropTypes.func,
  disableAlpha: PropTypes.bool,
  presetColors: PropTypes.arrayOf(PropTypes.string),
  renderers: PropTypes.objectOf(HTMLElement),
  styles: PropTypes.objectOf(StyleSheet),
  className: PropTypes.string
};
colorPicker.defaultProps = {
  title: undefined,
  width: 200,
  rgb: undefined,
  hex: undefined,
  hsv: undefined,
  hsl: undefined,
  onChange: undefined,
  onSwatchHover: undefined,
  disableAlpha: false,
  presetColors: [
    "#D0021B",
    "#F5A623",
    "#F8E71C",
    "#8B572A",
    "#7ED321",
    "#417505",
    "#BD10E0",
    "#9013FE",
    "#4A90E2",
    "#50E3C2",
    "#B8E986",
    "#000000",
    "#4A4A4A",
    "#9B9B9B",
    "#FFFFFF"
  ],
  renderers: undefined,
  styles: undefined,
  className: undefined
};

export default ColorWrap(colorPicker);
