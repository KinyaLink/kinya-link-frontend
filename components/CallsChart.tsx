import { View, Text } from "react-native";
import React from "react";
import { BarChart } from "react-native-gifted-charts";

const CallsChart = () => {
  return (
    <View className="flex-1 px-4 py-3 bg-[#0F0F0F] mt-3 rounded-3xl ">
      <Text className="text-white/50 text-xl font-pbold">Calls Chart</Text>
      <Text className="text-white/50 font-plight">Icyumweru kimwe</Text>
      <View className="flex-1 w-full mt-5 mb-4">
        <BarChart
          data={[
            { label: "Mbe", value: 30, frontColor: "#4CD55E" },
            { label: "Kab", value: 300, frontColor: "#ED674D" },
            { label: "Gat", value: 140, frontColor: "#D54CC5" },
            { label: "Kane", value: 350, frontColor: "#4C4CD5" },
            { label: "Gat..", value: 230, frontColor: "#D5274C" },
            { label: "Gat..", value: 0, frontColor: "#D5D34C" },
          ]}
          height={200}
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
          xAxisColor="#FFFFFF10"
          yAxisThickness={0}
          xAxisThickness={1}
          xAxisLabelTextStyle={{
            color: "#FFFFFF90",
            fontFamily: "Poppins-Light",
          }}
          yAxisTextStyle={{ color: "#FFFFFF40" }}
        />
      </View>
    </View>
  );
};

export default CallsChart;
