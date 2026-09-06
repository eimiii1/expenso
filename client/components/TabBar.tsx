import { View, TouchableOpacity } from "react-native"
import { Feather } from "@expo/vector-icons"
import { colors } from "@/constants/colors"
import Svg, { Path } from "react-native-svg"
import { Dimensions } from "react-native"
import { router } from "expo-router"

const { width } = Dimensions.get("window")
const NAV_WIDTH = width - 32
const TAB_BAR_HEIGHT = 80
const CURVE_WIDTH = 90
const CURVE_DEPTH = 35
const EXTRA_HEIGHT = 30
const RADIUS = 30

const tabs = [
  { name: "home", icon: "home", activeIcon: "home" },
  { name: "history", icon: "list", activeIcon: "list" },
  { name: "fab", icon: "", activeIcon: "" },
  { name: "stats", icon: "pie-chart", activeIcon: "pie-chart" },
  { name: "profile", icon: "user", activeIcon: "user" },
]

const TabBar = ({ state }: any) => {
  const activeIndex = state.index

  const getIsActive = (tabName: string) => {
    const screenNames = ["home", "history", "stats", "profile"]
    return screenNames[activeIndex] === tabName
  }

  const center = NAV_WIDTH / 2
  const curveStart = center - CURVE_WIDTH / 2
  const curveEnd = center + CURVE_WIDTH / 2
  const barTop = EXTRA_HEIGHT
  const barBottom = EXTRA_HEIGHT + TAB_BAR_HEIGHT

  return (
    <View style={{
      position: "absolute",
      bottom: 24,
      left: 16,
      right: 16,
      width: NAV_WIDTH,
      height: TAB_BAR_HEIGHT,
      backgroundColor: '#ffffff',
      borderRadius: 30,
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 8,
      shadowColor: colors.border,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 12,
    }}>
      <View style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: TAB_BAR_HEIGHT,
        flexDirection: "row",
        alignItems: "center",
      }}>
        {tabs.map((tab) => {
          const isActive = getIsActive(tab.name)
          const isFab = tab.name === "fab"

          if (isFab) {
            return (
              <View key="fab" style={{
                flex: 1,
                alignItems: "center",
              }}>
                <TouchableOpacity
                  onPress={() => router.push("/add" as any)}
                  activeOpacity={0.8}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    backgroundColor: colors.primary,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Feather name="plus" size={28} color={colors.background} />
                </TouchableOpacity>
              </View>
            )
          }

          return (
            <TouchableOpacity
              key={tab.name}
              activeOpacity={0.7}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => router.push(`/(tabs)/${tab.name}` as any)}
            >
              <Feather
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