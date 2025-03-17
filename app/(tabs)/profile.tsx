import { Image, Text, View, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { IconAlignLeft, IconBan, IconEdit, IconTrash } from "@tabler/icons-react-native";
import {
  BellIcon,
  Mail,
  MessageCircleMore,
  Phone,
  PhoneIncoming,
  PhoneMissed,
  Video,
} from "lucide-react-native";

const profile = () => {
  return (
    <ScrollView className="bg-[#050505] px-3 py-6 flex-1">
      <View className="mt-3">
        <View>
          
        </View>
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
          <Text className="text-white/50 text-lg font-pregular">
            arman.rokni@gmail.com
          </Text>
        </View>
      </View>
      <View className="flex-1 py-5 pl-3">
        <Text className="text-white/80 font-pbold pt-3">Personal Info</Text>
        <View className="gap-5 py-3">
          <View className="flex-1 flex-row justify-between items-end">
            <View className="">
              <Text className="text-white/40 font-plight text-lg">
                Username
              </Text>
              <Text className="text-white/90 font-pregular text-xl tracking-tighter">
                Arman Rokni
              </Text>
            </View>
            <View className="flex-row gap-2">
              <IconEdit color="#FFFFFF80" />
            </View>
          </View>
          <View className="flex-row justify-between items-end">
            <View>
              <Text className="text-white/40 font-plight text-lg">Email</Text>
              <Text className="text-white/90 font-pregular text-xl tracking-tighter">
                arman.rokni@gmail.com
              </Text>
            </View>
            <View className="flex-row gap-2">
              <IconEdit color="#FFFFFF80" />
            </View>
          </View>
          <View className="flex-row justify-between items-end">
            <View>
              <Text className="text-white/40 font-plight text-lg">
                Mobile number
              </Text>
              <Text className="text-white/90 font-pregular text-xl tracking-tighter">
                +250 795 617 693
              </Text>
            </View>
            <View className="flex-row gap-2">
              <IconEdit color="#FFFFFF80" />
            </View>
          </View>
          <View className="flex-row justify-between items-end">
            <View>
              <Text className="text-white/40 font-plight text-lg">
                Location
              </Text>
              <Text className="text-white/90 font-pregular text-xl tracking-tighter">
                Kigali City, Kicukiro
              </Text>
            </View>
            <View className="flex-row gap-2">
              <IconEdit color="#FFFFFF80" />
            </View>
          </View>
        </View>
        <Text className="text-white/80 font-pbold pt-3">More Settings</Text>
        <View>
          <TouchableOpacity className="py-2 rounded-xl flex-row justify-between items-center gap-3">
            <View>
              <Text className="font-plight text-xl text-white/50">
                Block your number
              </Text>
            </View>
            <IconBan size={28} color="#FFFFFF50" />
          </TouchableOpacity>
          <TouchableOpacity className="py-2 rounded-xl flex-row justify-between items-center gap-3">
            <View>
              <Text className="font-plight text-xl text-white/50">
                Delete your number
              </Text>
            </View>
            <IconTrash size={28} color="#FFFFFF50" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default profile;
