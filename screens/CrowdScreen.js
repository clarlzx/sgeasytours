import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Tooltip } from 'react-native-elements';
import { Table, TableWrapper, Row, Rows, Col, Cell, Cols } from 'react-native-table-component';
//import { DataTable } from 'react-native-paper';
//import Tooltip from "react-native-walkthrough-tooltip";

const CONTENT = {
  //tableHead: ['', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM'],
  tableHead: ['', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', '2000', '2100', '2200'],
  tableTitle: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  tableData: [
    ['Mon', 30, 35, 40, 60, 100, 200, 300, 250, 250, 200, 100, 50, 30, 20, 20],
    ['Tue', 20, 25, 30, 50, 80, 100, 200, 250, 250, 200, 150, 50, 35, 20, 20],
    ['Wed', 30, 35, 40, 60, 100, 200, 300, 250, 250, 200, 100, 50, 30, 20, 20],
    ['Thu', 30, 35, 40, 60, 100, 200, 300, 250, 250, 200, 100, 50, 30, 20, 20],
    ['Fri', 30, 35, 40, 60, 100, 200, 300, 250, 250, 200, 100, 50, 30, 20, 20],
    ['Sat', 30, 35, 40, 60, 100, 200, 300, 250, 250, 200, 100, 50, 30, 20, 20],
    ['Sun', 30, 35, 40, 60, 100, 200, 300, 250, 250, 200, 100, 50, 30, 20, 20]
  ],
};
const crowd = 123;

export default function CrowdScreen() {
  const element = (data) => (
    <Tooltip popover={<Text>{data}</Text>} height={40} width={50}
    >
    <Text></Text>
    </Tooltip>
  );

  const day = (day) => (
    <Text style={{fontSize: 9}}>{day}</Text>
  );

  return (
    <View style={styles.container}>
      <Text>
        Live Crowd Number
      </Text>
      <Text>
        {crowd}
      </Text>
      <Table borderStyle={{borderColor: 'white', borderWidth: 1}}>
        <Row data={CONTENT.tableHead} style={styles.row} textStyle={styles.headerText}/>
          {
            CONTENT.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex == 0 ? day(cellData) : element(cellData)}/>
                  ))
                }
              </TableWrapper>
            ))
          }
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#FFF1C1'},
  headerText: { fontSize: 8 },
  titleText: {margin: 2, fontSize: 7.5 },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  wrapper: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});
// export default function CrowdScreen() {

//   const crowd = 123;
//   var someData = [
//     {
//       day: "monday",
//       time: [
//         {id: "8am",crowd: 0},
//         {id: "9am",crowd: 0},
//         {id: "10am",crowd: 0},
//         {id: "11am",crowd: 0},
//         {id: "12pm",crowd: 0},
//         {id: "1pm",crowd: 0},
//         {id: "2pm",crowd: 0},
//         {id: "3pm",crowd: 0},
//         {id: "4pm",crowd: 0},
//         {id: "5pm",crowd: 0},
//         {id: "6pm",crowd: 0},
//         {id: "7pm",crowd: 0},
//         {id: "8pm",crowd: 0},
//         {id: "9pm",crowd: 0},
//         {id: "10pm",crowd: 0}
//       ]
//     },
//     {
//       day: "tuesday",
//       time: [
//         {id: "8am",crowd: 0},
//         {id: "9am",crowd: 0},
//         {id: "10am",crowd: 0},
//         {id: "11am",crowd: 0},
//         {id: "12pm",crowd: 0},
//         {id: "1pm",crowd: 0},
//         {id: "2pm",crowd: 0},
//         {id: "3pm",crowd: 0},
//         {id: "4pm",crowd: 0},
//         {id: "5pm",crowd: 0},
//         {id: "6pm",crowd: 0},
//         {id: "7pm",crowd: 0},
//         {id: "8pm",crowd: 0},
//         {id: "9pm",crowd: 0},
//         {id: "10pm",crowd: 0}
//       ]
//     },
//     {
//       day: "wednesday",
//       time: [
//         {id: "8am",crowd: 0},
//         {id: "9am",crowd: 0},
//         {id: "10am",crowd: 0},
//         {id: "11am",crowd: 0},
//         {id: "12pm",crowd: 0},
//         {id: "1pm",crowd: 0},
//         {id: "2pm",crowd: 0},
//         {id: "3pm",crowd: 0},
//         {id: "4pm",crowd: 0},
//         {id: "5pm",crowd: 0},
//         {id: "6pm",crowd: 0},
//         {id: "7pm",crowd: 0},
//         {id: "8pm",crowd: 0},
//         {id: "9pm",crowd: 0},
//         {id: "10pm",crowd: 0}
//       ]
//     },
//     {
//       day: "thursday",
//       time: [
//         {id: "8am",crowd: 0},
//         {id: "9am",crowd: 0},
//         {id: "10am",crowd: 0},
//         {id: "11am",crowd: 0},
//         {id: "12pm",crowd: 0},
//         {id: "1pm",crowd: 0},
//         {id: "2pm",crowd: 0},
//         {id: "3pm",crowd: 0},
//         {id: "4pm",crowd: 0},
//         {id: "5pm",crowd: 0},
//         {id: "6pm",crowd: 0},
//         {id: "7pm",crowd: 0},
//         {id: "8pm",crowd: 0},
//         {id: "9pm",crowd: 0},
//         {id: "10pm",crowd: 0}
//       ]
//     },
//     {
//       day: "friday",
//       time: [
//         {id: "8am",crowd: 0},
//         {id: "9am",crowd: 0},
//         {id: "10am",crowd: 0},
//         {id: "11am",crowd: 0},
//         {id: "12pm",crowd: 0},
//         {id: "1pm",crowd: 0},
//         {id: "2pm",crowd: 0},
//         {id: "3pm",crowd: 0},
//         {id: "4pm",crowd: 0},
//         {id: "5pm",crowd: 0},
//         {id: "6pm",crowd: 0},
//         {id: "7pm",crowd: 0},
//         {id: "8pm",crowd: 0},
//         {id: "9pm",crowd: 0},
//         {id: "10pm",crowd: 0}
//       ]
//     },
//     {
//       day: "saturday",
//       time: [
//         {id: "8am",crowd: 0},
//         {id: "9am",crowd: 0},
//         {id: "10am",crowd: 0},
//         {id: "11am",crowd: 0},
//         {id: "12pm",crowd: 0},
//         {id: "1pm",crowd: 0},
//         {id: "2pm",crowd: 0},
//         {id: "3pm",crowd: 0},
//         {id: "4pm",crowd: 0},
//         {id: "5pm",crowd: 0},
//         {id: "6pm",crowd: 0},
//         {id: "7pm",crowd: 0},
//         {id: "8pm",crowd: 0},
//         {id: "9pm",crowd: 0},
//         {id: "10pm",crowd: 0}
//       ]
//     },
//     {
//       day: "sunday",
//       time: [
//         {id: "8am",crowd: 0},
//         {id: "9am",crowd: 0},
//         {id: "10am",crowd: 0},
//         {id: "11am",crowd: 0},
//         {id: "12pm",crowd: 0},
//         {id: "1pm",crowd: 0},
//         {id: "2pm",crowd: 0},
//         {id: "3pm",crowd: 0},
//         {id: "4pm",crowd: 0},
//         {id: "5pm",crowd: 0},
//         {id: "6pm",crowd: 0},
//         {id: "7pm",crowd: 0},
//         {id: "8pm",crowd: 0},
//         {id: "9pm",crowd: 0},
//         {id: "10pm",crowd: 0}
//       ]
//     },
//   ];

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "lightblue",
//       }}
//     >
//       <Text>
//         Live Crowd Number
//       </Text>
//       <Text>
//         {crowd}
//       </Text>

//       <DataTable
//         // style={{
//         //   backgroundColor: "white",
//         //   justifyContent: "center",
//         //   padding: 20
//         // }}
//         children={
//           someData.map(data => {
//             return (
//               <DataTable.Row
//                 key={data.day}>
//                   {
//                     data.time.map(timing => {
//                       return (
//                       <DataTable.Cell
//                         key={timing.id}
//                         onPress={}
//                         children={
//                           <Tooltip 
//                             popover={<Text>{timing.crowd}</Text>}
//                           >
//                           <Text>1</Text>
//                           </Tooltip>
//                         }
//                       >
//                       </DataTable.Cell>
//                       )
//                     })
//                   }
//               </DataTable.Row>
//             )
//           })
//         }>
//       </DataTable>
//     </View>
//   );
// }
