import * as React from "react";
import { StyleSheet, View, Text, FlatList, ScrollView } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import CrowdModal from "../components/CrowdModal";
import { Context } from "../components/Context";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const timing = [
  "8am-9am",
  "9am-10am",
  "10am-11am",
  "11am-12pm",
  "12pm-1pm",
  "1pm-2pm",
  "2pm-3pm",
  "3pm-4pm",
  "4pm-5pm",
  "5pm-6pm",
  "6pm-7pm",
  "7pm-8pm",
  "8pm-9pm",
  "9pm-10pm",
  "10pm-11pm",
];

export default function CrowdScreen() {
  const dataList = React.useContext(Context);

  const CONTENT = {
    tableHead: [
      "",
      "0800",
      "0900",
      "1000",
      "1100",
      "1200",
      "1300",
      "1400",
      "1500",
      "1600",
      "1700",
      "1800",
      "1900",
      "2000",
      "2100",
      "2200",
    ],
    tableData: [
      dataList.pastMon,
      dataList.pastTue,
      dataList.pastWed,
      dataList.pastThu,
      dataList.pastFri,
      dataList.pastSat,
      dataList.pastSun,
    ],
  };

  const crowd = dataList.currentCrowd;

  const max = dataList.maxCrowd;

  const currPercentage = (crowd / max) * 100;

  let status = "";

  if (currPercentage < 50) {
    status = "Not Crowded";
  } else if (currPercentage < 75) {
    status = "Some Crowd";
  } else {
    status = "Crowded";
  }

  const element = (data, dayIndex, timeIndex) => (
    <CrowdModal
      data={data}
      day={days[dayIndex]}
      time={timing[timeIndex - 1]}
      percentage={(data / max) * 100}
    />
  );

  const day = (day) => (
    <Text style={{ fontSize: 8, textAlign: "center", paddingRight: 3 }}>
      {day}
    </Text>
  );

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ justifyContent: "center" }}
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          paddingBottom: 30,
          paddingTop: 20,
        }}
      >
        <Text style={styles.dataText}>Live Crowd Number:</Text>
        <Text style={styles.crowdText}>{crowd}</Text>
        <Text style={styles.maxText}>(Status: {status})</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: 5,
          marginRight: 10,
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>Legend:</Text>
        <View style={{ marginLeft: 10 }}>
          <View style={styles.notcrowdedcircle} />
          <Text style={{ fontSize: 11, textAlign: "right" }}>
            {"Not Crowded\n(<50%)"}
          </Text>
        </View>
        <View style={{ marginLeft: 10 }}>
          <View style={styles.somecrowdcircle} />
          <Text style={{ fontSize: 11, textAlign: "right" }}>
            {"Some Crowd\n(50%-75%)"}
          </Text>
        </View>
        <View style={{ marginLeft: 10 }}>
          <View style={styles.crowdedcircle} />
          <Text style={{ fontSize: 11, textAlign: "right" }}>
            {"Crowded\n(>75%)"}
          </Text>
        </View>
      </View>

      <Table
        style={{ marginTop: 2, marginBottom: 40 }}
        borderStyle={{ borderColor: "white", borderWidth: 1 }}
      >
        <Row
          data={CONTENT.tableHead}
          style={styles.row}
          textStyle={styles.headerText}
        />
        {CONTENT.tableData.map((rowData, index) => (
          <TableWrapper key={index} style={styles.row}>
            {rowData.map((cellData, cellIndex) => (
              <Cell
                key={cellIndex}
                data={
                  cellIndex == 0
                    ? day(cellData)
                    : element(cellData, index, cellIndex)
                }
              />
            ))}
          </TableWrapper>
        ))}
      </Table>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  dataText: { fontWeight: "bold", fontSize: 25 },
  crowdText: { fontWeight: "bold", fontSize: 40, color: "grey" },
  maxText: { fontSize: 15, color: "grey" },
  headerText: { fontSize: 8, textAlign: "center" },
  row: { flexDirection: "row", backgroundColor: "white", height: 23 },
  legend: { backgroundColor: "black", borderRadius: 60 },
  notcrowdedcircle: {
    width: 10,
    height: 10,
    borderRadius: 100 / 2,
    backgroundColor: "#bbc2b4",
    alignSelf: "flex-end",
  },
  somecrowdcircle: {
    width: 10,
    height: 10,
    borderRadius: 100 / 2,
    backgroundColor: "#7f9c6a",
    alignSelf: "flex-end",
  },
  crowdedcircle: {
    width: 10,
    height: 10,
    borderRadius: 100 / 2,
    backgroundColor: "#5f4bc1",
    alignSelf: "flex-end",
  },
});
