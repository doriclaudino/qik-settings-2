import React from "react";
import propTypes from "prop-types";
import { Typography, Switch } from "@material-ui/core";
import merge from "lodash/merge";

const switchButton = ({ title, styles: passedStyles = {}, ...rest }) => {
  const getTitle = () => `label-for-switch-${title}`;

  const styles = merge(
    {
      container: {
        display: "flex",
        flex: 1,
        alignItems: "center"
      },
      slider: {},
      label: { order: 1 }
    },
    passedStyles
  );
  return (
    <div style={styles.container}>
      {title ? (
        <Typography id={getTitle()} style={styles.label}>
          {title}
        </Typography>
      ) : null}
      <Switch aria-labelledby={getTitle()} {...rest} style={styles.slider} />
    </div>
  );
};

switchButton.propTypes = {
  title: propTypes.string,
  styles: propTypes.oneOfType([
    propTypes.object,
    propTypes.objectOf(StyleSheet)
  ])
};

switchButton.defaultProps = {
  styles: undefined
};

export default switchButton;
