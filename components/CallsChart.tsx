import { View, Text } from "react-native";
import React from "react";
import { BarChart } from "react-native-gifted-charts";

const CallsChart = () => {
  return (
    <View>
      <Text className="text-white/50 font-pbold">Calls Chart</Text>
      <BarChart
        data={[
          { label: "Mon", value: 30, frontColor: "#4CD55E" },
          { label: "Tue", value: 300, frontColor: "#ED674D" },
          { label: "Wed", value: 140, frontColor: "#D54CC5" },
          { label: "Thur", value: 300, frontColor: "#4C4CD5" },
          { label: "Sat", value: 230, frontColor: "#D5D34C" },
          { label: "Sun", value: 0, frontColor: "#D5D34C" },
        ]}
        height={200}
        width={400}
        barWidth={50}
        minHeight={10}
        barBorderRadius={5}
        spacing={7}
        noOfSections={4}
        isAnimated
        animationDuration={500}
        dashWidth={4}
        dashGap={3}
        rulesColor="#FFFFFF10"
        initialSpacing={20}
        xAxisColor="#FFFFFF10"
        xAxisThickness={1}
        yAxisThickness={1}
        xAxisLabelTextStyle={{ color: "white", fontFamily: "Poppins-Light" }}
        yAxisTextStyle={{ color: "#FFFFFF00" }}
      />
    </View>
  );
};

export default CallsChart;
