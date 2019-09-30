import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";

import Row from "../components/Row.js";
import RowsContainer from "../components/RowContainer.js";
import Colors from "../constants/Colors.js";
import Plant from "../components/Plant.js";

const PlantsScreen = props => {
  const [plants, setPlants] = useState([
    {
      id: 1,
      info: "Plantas de la Cocina",
      type: "Cactus",
      ready: false,
      history: []
    },
    {
      // id: 2,
      // info: "Plantas de la Sala",
      // type: "Hojas",
      // ready: false,
      // history: []
    },
    {
      // id: 3,
      // info: "Plantas de la Cocina",
      // type: "Cactus",
      // ready: false,
      // history: []
    },
    {
      // id: 4,
      // info: "Plantas de la Cocina",
      // type: "Cactus",
      // ready: false,
      // history: []
    },
    {
      // id: 5,
      // info: "Plantas de la Cocina",
      // type: "Cactus",
      // ready: false,
      // history: []
    },
    {
      // id: 6,
      // info: "Plantas de la Cocina",
      // type: "Cactus",
      // ready: false,
      // history: []
    }
  ]);

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   console.log(plants);
  // }, [plants]);

  const addPlant = (data, i) => {
    let newPlants = [...plants];
    newPlants[i] = data;
    setPlants(newPlants);
  };

  const consolame = arg => {
    console.log(arg);
  };
  const renderPlants = plants => {
    let firstEmptyIndex = plants.filter(
      plant => Object.entries(plant).length !== 0
    ).length;
    let row_key = 0;
    return plants.map((plant, i) => {
      row_key++;
      if (i === 0 || i % 2 === 0)
        return (
          <Row key={row_key}>
            <Plant
              firstEmpty={firstEmptyIndex === i}
              onPress={
                firstEmptyIndex === i ? addPlant : () => console.log(plants)
              }
              key={i}
              index={i}
              data={plants[i]}
            />
            <Plant
              firstEmpty={firstEmptyIndex === i + 1}
              onPress={
                firstEmptyIndex === i + 1 ? addPlant : () => console.log(plants)
              }
              key={i + 1}
              index={i + 1}
              data={plants[i + 1]}
            />
          </Row>
        );
    });
  };

  return <RowsContainer>{renderPlants(plants)}</RowsContainer>;
};

export default PlantsScreen;
