import * as React from "react";
import { StyleSheet, View, Text, FlatList, ScrollView } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Cell
} from "react-native-table-component";
import CrowdModal from "../components/CrowdModal";
import { Context } from "../components/Context";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const timing = ["8am-9am", "9am-10am", "10am-11am", "11am-12pm", "12pm-1pm", "1pm-2pm", "2pm-3pm", "3pm-4pm", "4pm-5pm", "5pm-6pm", "6pm-7pm", "7pm-8pm", "8pm-9pm", "9pm-10pm", "10pm-11pm"];

export default function CrowdScreen() {

  const dataList = React.useContext(Context);

  const CONTENT = {
    tableHead: ["","0800","0900","1000","1100","1200","1300","1400","1500","1600","1700","1800","1900","2000","2100","2200"],
    tableData: [dataList.pastMon,dataList.pastTue,dataList.pastWed,dataList.pastThu,dataList.pastFri,dataList.pastSat,dataList.pastSun]
  };

  const crowd = dataList.currentCrowd;

  const max = dataList.maxCrowd;

  const element = (data, dayIndex, timeIndex) => (
    <CrowdModal data={data} day={days[dayIndex]} time={timing[timeIndex-1]} percentage={(data/max)*100}/>
  );

  const day = (day) => <Text style={{ fontSize: 9, textAlign: 'center' }}>{day}</Text>;

  return (
    <View
      horizontal={true}
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "lightblue",
        padding: 10
      }}
    >
        <View style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightblue",
          paddingBottom: 40
          }}>
            <Text style={styles.dataText}>Live Crowd Number:</Text>
            <Text style={styles.crowdText}>{crowd}</Text>
            <Text style={styles.maxText}>(Maximum Capacity: {max})</Text>
        </View>

        <Table borderStyle={{borderColor: "white", borderWidth: 1 }}>
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
                  data={cellIndex == 0 ? day(cellData) : element(cellData, index, cellIndex)}
                />
              ))}
          </TableWrapper>
          ))}
        </Table>
        <FlatList
          data={[{status: "not crowded", key: 1} , {status: "some crowd", key: 2}, {status: "crowded", key: 3}]}
          renderItem={({item}) => {
            return (
              <View style={{paddingRight: 10}}>
                <View style={item.key==1?styles.greencircle:item.key==2?styles.pinkcircle:styles.redcircle}/>
                <Text style={{fontSize: 10}}>{item.status}</Text>
              </View>
            );
          }}
          horizontal={true}
          style={{padding: 5, alignSelf:'flex-end'}}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  dataText: { fontWeight: 'bold', fontSize: 25 },
  crowdText: { fontWeight: 'bold', fontSize: 40, color: 'grey' },
  maxText: { fontSize: 15, color: 'grey' },
  headerText: { fontSize: 8, textAlign: 'center' },
  row: { flexDirection: "row", backgroundColor: "lightblue", height: 23 },
  legend: { backgroundColor: "black", borderRadius: 60 },
  greencircle: {width: 10,height: 10,borderRadius: 100 / 2,backgroundColor: "green", alignSelf:'flex-end'},
  pinkcircle: {width: 10,height: 10,borderRadius: 100 / 2,backgroundColor: "pink", alignSelf:'flex-end'},
  redcircle: {width: 10,height: 10,borderRadius: 100 / 2,backgroundColor: "red", alignSelf:'flex-end'},
});