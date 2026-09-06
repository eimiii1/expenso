import { View, TouchableOpacity, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { colors } from "@/constants/colors"
import Svg, { Path } from "react-native-svg"
import { Dimensions } from "react-native"
import { router } from "expo-router"
import { getSplashScreenAnimationFrame } from "expo-router/build/global-state/store"

const { width } = Dimensions.get("window")
const TAB_BAR_HEIGHT = 70
const CURVE_WIDTH = 80

const tabs = [
  { name: "home", icon: "home-outline", activeIcon: "home" },
  { name: "history", icon: "receipt-outline", activeIcon: "receipt" },
  { name: "fab", icon: "", activeIcon: "" },
  { name: "stats", icon: "bar-chart-outline", activeIcon: "bar-chart" },
  { name: "profile", icon: "person-outline", activeIcon: "person" },
]

const TabBar = ({ state }: any) => {
  const activeIndex = state.index

  const getIsAcitve = (tabName: string) => {
    const screenNames = ['home', 'history', 'stats', 'profile']
    return screenNames[activeIndex] === tabName
  }

  return (
    <View style={{ position: "absolute", bottom: 0, width }}>
      <Svg
        width={width}
        height={TAB_BAR_HEIGHT + 30}
        style={{ position: "absolute", top: -30 }}
      >
        <Path
          d={`
                        M0,30
                        L${width / 2 - CURVE_WIDTH / 2},30
                        Q${width / 2 - CURVE_WIDTH / 4},30 ${width / 2 - CURVE_WIDTH / 4},0
                        Q${width / 2},${-20} ${width / 2 + CURVE_WIDTH / 4},0
                        Q${width / 2 + CURVE_WIDTH / 4},30 ${width / 2 + CURVE_WIDTH / 2},30
                        L${width},30
                        L${width},${TAB_BAR_HEIGHT + 30}
                        Z
                        `}
          fill={colors.card}
        />
      </Svg>

      <View
        style={{
          flexDirection: "row",
          backgroundColor: colors.card,
          height: TAB_BAR_HEIGHT,
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        {tabs.map((tab, index) => {
          const isActive = getIsAcitve(tab.name)
          const isFab = tab.name === 'fab'

          if (isFab) {
            return (
              <View key="fab" style={{ flex: 1, alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => router.push("/add" as any)}
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 28,
                    backgroundColor: colors.primary,
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 30,
                    elevation: 5,
                  }}
                >
                  <Ionicons name="add" size={28} color={colors.background} />
                </TouchableOpacity>
              </View>
            )
          }

          const adjustedIndex = index > 1 ? index - 1 : index

          return (
            <TouchableOpacity
              key={tab.name}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => router.push(`/(tabs)/${tab.name}` as any)}
            >
              <Ionicons
                name={(isActive ? tab.activeIcon : tab.icon) as any}
                size={24}
                color={isActive ? colors.primary : colors.secondary}
              />
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}

export default TabBar
