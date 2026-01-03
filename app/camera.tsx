import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<CameraType>("back");
  const router = useRouter();

  useEffect(() => {
    if (permission && !permission.granted && !permission.canAskAgain) {
      // Permission denied, could navigate back or show message
    }
  }, [permission]);

  if (!permission) {
    // Camera permissions are still loading
    return (
      <View className="flex-1 items-center justify-center bg-black">
        <ActivityIndicator size="large" color="#fff" />
        <Text className="text-white mt-4">Loading camera...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View className="flex-1 items-center justify-center bg-black px-5">
        <Text className="text-white text-xl font-bold mb-4 text-center">
          Camera Permission Required
        </Text>
        <Text className="text-gray-300 text-center mb-8">
          We need access to your camera to help guide you through cooking.
        </Text>
        <TouchableOpacity
          onPress={requestPermission}
          className="bg-orange-500 px-8 py-4 rounded-xl"
        >
          <Text className="text-white text-lg font-semibold">
            Grant Permission
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-black">
      <CameraView
        style={{ flex: 1 }}
        facing={facing}
        onCameraReady={() => {
          console.log("Camera is ready");
        }}
      >
        <View className="absolute bottom-0 left-0 right-0 pb-10 px-5">
          <View className="flex-row justify-center">
            <TouchableOpacity
              onPress={() => setFacing(facing === "back" ? "front" : "back")}
              className="bg-white/20 px-6 py-3 rounded-full"
            >
              <Text className="text-white font-semibold">Flip Camera</Text>
            </TouchableOpacity>
          </View>
        </View>
      </CameraView>
    </View>
  );
}

