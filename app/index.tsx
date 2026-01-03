import { Text, View } from "react-native";
import CookingButton from "../components/CookingButton";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center px-5 bg-white">
      <Text className="text-7xl font-bold mb-2">👨‍🍳 AI Cooking Assistant</Text>
      <Text className="text-base text-center mb-8 text-gray-600">
        I’ll guide you step-by-step while you cook.
      </Text>

      <CookingButton />
    </View>
  );
}
