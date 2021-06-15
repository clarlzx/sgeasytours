import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Tooltip, Text } from 'react-native-elements';
import { DataTable } from 'react-native-paper';

export default function CrowdScreen() {

  const crowd = 123;
  var someData = [
    {
      day: "monday",
      time: [
        {id: "8am",crowd: 0},
        {id: "9am",crowd: 0},
        {id: "10am",crowd: 0},
        {id: "11am",crowd: 0},
        {id: "12pm",crowd: 0},
        {id: "1pm",crowd: 0},
        {id: "2pm",crowd: 0},
        {id: "3pm",crowd: 0},
        {id: "4pm",crowd: 0},
        {id: "5pm",crowd: 0},
        {id: "6pm",crowd: 0},
        {id: "7pm",crowd: 0},
        {id: "8pm",crowd: 0},
        {id: "9pm",crowd: 0},
        {id: "10pm",crowd: 0}
      ]
    },
    {
      day: "tuesday",
      time: [
        {id: "8am",crowd: 0},
        {id: "9am",crowd: 0},
        {id: "10am",crowd: 0},
        {id: "11am",crowd: 0},
        {id: "12pm",crowd: 0},
        {id: "1pm",crowd: 0},
        {id: "2pm",crowd: 0},
        {id: "3pm",crowd: 0},
        {id: "4pm",crowd: 0},
        {id: "5pm",crowd: 0},
        {id: "6pm",crowd: 0},
        {id: "7pm",crowd: 0},
        {id: "8pm",crowd: 0},
        {id: "9pm",crowd: 0},
        {id: "10pm",crowd: 0}
      ]
    },
    {
      day: "wednesday",
      time: [
        {id: "8am",crowd: 0},
        {id: "9am",crowd: 0},
        {id: "10am",crowd: 0},
        {id: "11am",crowd: 0},
        {id: "12pm",crowd: 0},
        {id: "1pm",crowd: 0},
        {id: "2pm",crowd: 0},
        {id: "3pm",crowd: 0},
        {id: "4pm",crowd: 0},
        {id: "5pm",crowd: 0},
        {id: "6pm",crowd: 0},
        {id: "7pm",crowd: 0},
        {id: "8pm",crowd: 0},
        {id: "9pm",crowd: 0},
        {id: "10pm",crowd: 0}
      ]
    },
    {
      day: "thursday",
      time: [
        {id: "8am",crowd: 0},
        {id: "9am",crowd: 0},
        {id: "10am",crowd: 0},
        {id: "11am",crowd: 0},
        {id: "12pm",crowd: 0},
        {id: "1pm",crowd: 0},
        {id: "2pm",crowd: 0},
        {id: "3pm",crowd: 0},
        {id: "4pm",crowd: 0},
        {id: "5pm",crowd: 0},
        {id: "6pm",crowd: 0},
        {id: "7pm",crowd: 0},
        {id: "8pm",crowd: 0},
        {id: "9pm",crowd: 0},
        {id: "10pm",crowd: 0}
      ]
    },
    {
      day: "friday",
      time: [
        {id: "8am",crowd: 0},
        {id: "9am",crowd: 0},
        {id: "10am",crowd: 0},
        {id: "11am",crowd: 0},
        {id: "12pm",crowd: 0},
        {id: "1pm",crowd: 0},
        {id: "2pm",crowd: 0},
        {id: "3pm",crowd: 0},
        {id: "4pm",crowd: 0},
        {id: "5pm",crowd: 0},
        {id: "6pm",crowd: 0},
        {id: "7pm",crowd: 0},
        {id: "8pm",crowd: 0},
        {id: "9pm",crowd: 0},
        {id: "10pm",crowd: 0}
      ]
    },
    {
      day: "saturday",
      time: [
        {id: "8am",crowd: 0},
        {id: "9am",crowd: 0},
        {id: "10am",crowd: 0},
        {id: "11am",crowd: 0},
        {id: "12pm",crowd: 0},
        {id: "1pm",crowd: 0},
        {id: "2pm",crowd: 0},
        {id: "3pm",crowd: 0},
        {id: "4pm",crowd: 0},
        {id: "5pm",crowd: 0},
        {id: "6pm",crowd: 0},
        {id: "7pm",crowd: 0},
        {id: "8pm",crowd: 0},
        {id: "9pm",crowd: 0},
        {id: "10pm",crowd: 0}
      ]
    },
    {
      day: "sunday",
      time: [
        {id: "8am",crowd: 0},
        {id: "9am",crowd: 0},
        {id: "10am",crowd: 0},
        {id: "11am",crowd: 0},
        {id: "12pm",crowd: 0},
        {id: "1pm",crowd: 0},
        {id: "2pm",crowd: 0},
        {id: "3pm",crowd: 0},
        {id: "4pm",crowd: 0},
        {id: "5pm",crowd: 0},
        {id: "6pm",crowd: 0},
        {id: "7pm",crowd: 0},
        {id: "8pm",crowd: 0},
        {id: "9pm",crowd: 0},
        {id: "10pm",crowd: 0}
      ]
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <Text>
        Live Crowd Number
      </Text>
      <Text>
        {crowd}
      </Text>

      <DataTable
        // style={{
        //   backgroundColor: "white",
        //   justifyContent: "center",
        //   padding: 20
        // }}
        children={
          someData.map(data => {
            return (
              <DataTable.Row
                key={data.day}>
                  {
                    data.time.map(timing => {
                      return (
                      <DataTable.Cell
                        key={timing.id}
                        children={
                          <Tooltip 
                            popover={<Text>{timing.crowd}</Text>}
                          >
                          <Text>1</Text>
                          </Tooltip>
                        }
                      >
                      </DataTable.Cell>
                      )
                    })
                  }
              </DataTable.Row>
            )
          })
        }>
      </DataTable>
    </View>
  );
}
