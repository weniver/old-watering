import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

const TouchableImage = props => {
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get("window").width
  );
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );
  const [plantSideSize, setPlantSideSize] = useState(0);

  useEffect(() => {
    if (availableDeviceWidth / 3 < availableDeviceHeight) {
      setPlantSideSize(availableDeviceWidth / 3);
    } else {
      setPlantSideSize(availableDeviceHeight * 0.8);
    }
  }, [availableDeviceHeight, availableDeviceWidth]);

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceWidth(Dimensions.get("window").width);
      setAvailableDeviceHeight(Dimensions.get("window").height);
    };

    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  const styles = StyleSheet.create({
    image: {
      width: "100%",
      height: "100%"
    },
    imageContainer: {
      width: availableDeviceWidth / 3,
      height: availableDeviceWidth / 3
    }
  });
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ ...styles.imageContainer, ...props.style }}>
        <Image style={styles.image} source={props.source} />
      </View>
    </TouchableOpacity>
  );
};

export default TouchableImage;
