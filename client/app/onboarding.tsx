import { colors } from "@/constants/colors";
import LottieView from "lottie-react-native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { Animated } from "react-native";
import { useRef } from "react";

const slides = [
  {
    id: "1",
    animation: require("../assets/animations/wallet.json"),
    title: "Track Your Spending",
    subtitle: "Know where every peso goes",
    button: "Next",
  },
  {
    id: "2",
    animation: require("../assets/animations/chart.json"),
    title: "Set Your Budget",
    subtitle: "Stay on top of your finances",
    button: "Next",
  },
  {
    id: "3",
    animation: require("../assets/animations/savings.json"),
    title: "Reach Your Goals",
    subtitle: "Save more, spend smarter",
    button: "Get Started",
  },
];

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const opacity = useRef(new Animated.Value(1)).current;

  const goToNext = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
        if (currentIndex === slides.length - 1) {
            router.replace('/(auth)/login')
        } else {
            setCurrentIndex(prev => prev + 1)
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }).start()
        }
    }
    )
  };

  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
        padding: 32,
      }}
    >
      <Animated.View style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity
      }}>
        <LottieView
          source={slides[currentIndex].animation}
          autoPlay
          loop
          style={{ width: 250, height: 250 }}
        />
        <Text
          style={{ fontSize: 24, fontWeight: "bold", color: colors.primary }}
        >
          {slides[currentIndex].title}
        </Text>
        <Text style={{ fontStyle: "italic", color: colors.primary }}>
          {slides[currentIndex].subtitle}
        </Text>
      </Animated.View>

      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 0,
          padding: 16,
          marginBottom: 48,
          backgroundColor: colors.primary,
          width: "100%",
          alignItems: "center",
          borderRadius: 16,
        }}

        onPress={() => goToNext()}
      >
        <Text style={{ color: colors.background, fontWeight: "bold" }}>
          {slides[currentIndex].button}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
