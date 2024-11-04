import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { IconAlignLeft } from "@tabler/icons-react-native";
import {
  BellIcon,
  Mail,
  MessageCircleMore,
  Phone,
  PhoneIncoming,
  PhoneMissed,
  Video,
} from "lucide-react-native";

const RecentCaller = () => {
  return (
    <ScrollView className="bg-[#050505] px-3 py-6 flex-1">
      <View className="mt-3">
        <View className="flex-1 flex-row justify-between items-center w-full">
          <View className="flex-row items-center gap-4">
            <IconAlignLeft color="#FFFFFF80" size={32} />
          </View>
          <View>
            <BellIcon color="#FFFFFF80" size={30} />
          </View>
        </View>
      </View>
      <View className="flex-1 items-center flex-col gap-4">
        <View className="flex-1 bg-[#eeeeee50] overflow-hidden rounded-full justify-center items-center w-36 h-36">
          <Image
            source={require("~/assets/images/profile-image.jpg")}
            resizeMode="contain"
            className="h-full"
          />
        </View>
        <View className="flex-col items-center">
          <Text className="text-white/80 text-3xl tracking-tighter font-psemibold">
            Arman Rokni
          </Text>
          <Text className="text-white/50 font-pregular text-lg">
            +250795617693
          </Text>
          <Text className="text-white/50 text-lg font-pregular">
            arman.rokni@gmail.com
          </Text>
        </View>
      </View>
      <View className="flex-row justify-center gap-6 mt-4">
        <TouchableOpacity>
          <View className="p-4 rounded-full border-2 border-[#202020] bg-[#101010]">
            <Phone color="#FFFFFF90" size={32} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="p-4 rounded-full border-2 border-[#202020] bg-[#101010]">
            <Video color="#FFFFFF90" size={32} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="p-4 rounded-full border-2 border-[#202020] bg-[#101010]">
            <MessageCircleMore color="#FFFFFF90" size={32} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="p-4 rounded-full border-2 border-[#202020] bg-[#101010]">
            <Mail color="#FFFFFF90" size={32} />
          </View>
        </TouchableOpacity>
      </View>
      <Text className="text-white/80 text-lg font-psemibold mt-8 ml-3">
        Today
      </Text>
      <View className="flex-row gap-3">
        <View className="bg-[#151515] w-1/2 rounded-3xl p-3 py-10 justify-center items-center">
          <PhoneMissed color="#FF4F4F" size={30} />
          <Text className="text-white/70 text-lg font-plight mt-3">Last</Text>
          <Text className="text-white/90 leading-tight font-psemibold text-xl">
            Missed Call
          </Text>
          <Text className="text-white/70 text-lg font-plight">11:50 AM</Text>
        </View>
        <View className="bg-[#151515] rounded-3xl flex-1 p-3 justify-center items-center">
          <PhoneIncoming color="#FF4F4F" size={30} />
          <Text className="text-white/70 text-lg font-plight mt-3">Last</Text>
          <Text className="text-white/90 leading-tight font-psemibold text-xl">
            Incoming Call
          </Text>
          <Text className="text-white/70 text-lg font-plight">11:50 AM</Text>
        </View>
      </View>
      <Text className="text-white/80 text-lg font-psemibold mt-8 ml-3">
        More Settings
      </Text>
      <View></View>
    </ScrollView>
  );
};

export default RecentCaller;
