import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Home() {
  const [cookingItem, setCookingItem] = useState("");
  const router = useRouter();

  const handleStartCooking = () => {
    if (cookingItem.trim()) {
      router.push("/camera");
    }
  };

  return (
    <View className="flex-1 items-center justify-center px-5 bg-white">
      <Text className="text-7xl font-bold mb-2">👨‍🍳 AI Cooking Assistant</Text>
      <Text className="text-base text-center mb-8 text-gray-600">
        I'll guide you step-by-step while you cook.
      </Text>

      <TextInput
        className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 mb-4 text-base"
        placeholder="What are you cooking?"
        value={cookingItem}
        onChangeText={setCookingItem}
        placeholderTextColor="#9CA3AF"
      />

      <TouchableOpacity
        onPress={handleStartCooking}
        disabled={!cookingItem.trim()}
        className={`px-8 py-4 rounded-xl ${
          cookingItem.trim() ? "bg-orange-500" : "bg-gray-400"
        }`}
      >
        <Text className="text-white text-lg font-semibold">
          Start Cooking
        </Text>
      </TouchableOpacity>
    </View>
  );
}
