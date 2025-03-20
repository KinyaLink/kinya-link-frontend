import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import { IconAlignLeft } from "@tabler/icons-react-native";
import { BellIcon } from "lucide-react-native";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { useRouter } from "expo-router";

const Header = () => {
  const router = useRouter();
  const navigation = useNavigation();
  return (
    <View className="flex-row justify-between items-center w-full">
      <View className="flex-row items-center gap-4">
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <View>
            <IconAlignLeft color="#FFFFFF80" size={32} />
          </View>
        </Pressable>
        <View className="w-3/4 self-start">
          <TextInput
            className="bg-[#151515] rounded-full px-6 py-3 placeholder:text-white/50 placeholder:font-pregular"
            placeholder="Shakisha..."
          />
        </View>
      </View>
      <Pressable onPress={() => router.replace("/notifications")}>
        <View>
          <BellIcon color="#FFFFFF80" size={30} />
        </View>
      </Pressable>
    </View>
  );
};

export default Header;
