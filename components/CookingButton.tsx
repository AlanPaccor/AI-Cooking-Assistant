import { Text, TouchableOpacity } from "react-native";
import { getCookingAdvice } from "../services/ai";

export default function CookingButton() {
  const startCooking = async () => {
    const response = await getCookingAdvice("I want to cook chicken");
    alert(response);
  };

  return (
    <TouchableOpacity
    onPress={startCooking}
    className="bg-orange-500 px-8 py-4 rounded-xl">
      <Text
        className="text-white text-lg font-semibold"
      >
        Start Cooking
      </Text>
    </TouchableOpacity>
  );
}
