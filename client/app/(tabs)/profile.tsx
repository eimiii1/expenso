import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import { colors } from "@/constants/colors"
import { Feather } from "@expo/vector-icons"
import { useAuthStore } from "@/store/useAuthStore"

const ProfileScreen = () => {
  const { user } = useAuthStore()

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      {/* Header */}
      <View
        style={{
          paddingTop: 48,
          paddingHorizontal: 40,
          marginTop: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <Feather
            name="chevron-left"
            size={30}
            color={colors.primary}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: colors.primary,
          }}
        >
          Profile
        </Text>

        {/* Keeps title centered */}
        <View style={{ width: 30 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 32,
          paddingTop: 24,
          paddingBottom: 40,
        }}
      >
        {/* Profile Card */}
        <View
          style={{
            alignItems: "center",
            padding: 24,
            borderRadius: 25,
            backgroundColor: "#ffffff",
            shadowColor: colors.border,
            shadowOffset: {
              width: 1,
              height: 0,
            },
            shadowOpacity: 0.1,
            shadowRadius: 12,
            elevation: 3,
          }}
        >
          {/* Profile Picture */}
          <TouchableOpacity>
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: colors.border,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather
                name="user"
                size={48}
                color={colors.secondary}
              />

              {/* Change photo button */}
              <View
                style={{
                  position: "absolute",
                  right: -2,
                  bottom: -2,
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  backgroundColor: colors.primary,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 3,
                  borderColor: "#ffffff",
                }}
              >
                <Feather
                  name="camera"
                  size={14}
                  color="#ffffff"
                />
              </View>
            </View>
          </TouchableOpacity>

          {/* Name and Email */}
          <View
            style={{
              alignItems: "center",
              marginTop: 4,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: colors.primary,
              }}
            >
              {user?.full_name || "Your Name"}
            </Text>

            <Text
              style={{
                fontSize: 14,
                color: colors.secondary,
                marginTop: 4,
              }}
            >
              {user?.email || "your@email.com"}
            </Text>
          </View>

          {/* Edit Profile */}
          <TouchableOpacity
            style={{
              marginTop: 18,
              paddingHorizontal: 24,
              paddingVertical: 11,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                color: colors.primary,
              }}
            >
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>

        {/* Account */}
        <Text
          style={{
            marginTop: 30,
            marginBottom: 12,
            fontSize: 16,
            fontWeight: "bold",
            color: colors.primary,
          }}
        >
          Account
        </Text>

        <View
          style={{
            backgroundColor: "#ffffff",
            borderRadius: 20,
            overflow: "hidden",
            shadowColor: colors.border,
            shadowOffset: {
              width: 1,
              height: 0,
            },
            shadowOpacity: 0.08,
            shadowRadius: 10,
            elevation: 2,
          }}
        >
          {/* Personal Information */}
          <TouchableOpacity
            style={{
              padding: 18,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderBottomColor: colors.border,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 14,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  backgroundColor: colors.background,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather
                  name="user"
                  size={18}
                  color={colors.primary}
                />
              </View>

              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "600",
                    color: colors.primary,
                  }}
                >
                  Personal Information
                </Text>

                <Text
                  style={{
                    fontSize: 12,
                    color: colors.secondary,
                    marginTop: 3,
                  }}
                >
                  Manage your account details
                </Text>
              </View>
            </View>

            <Feather
              name="chevron-right"
              size={20}
              color={colors.secondary}
            />
          </TouchableOpacity>

          {/* Currency */}
          <TouchableOpacity
            style={{
              padding: 18,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderBottomColor: colors.border,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 14,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  backgroundColor: colors.background,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather
                  name="dollar-sign"
                  size={18}
                  color={colors.primary}
                />
              </View>

              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "600",
                    color: colors.primary,
                  }}
                >
                  Currency
                </Text>

                <Text
                  style={{
                    fontSize: 12,
                    color: colors.secondary,
                    marginTop: 3,
                  }}
                >
                  Philippine Peso (PHP)
                </Text>
              </View>
            </View>

            <Feather
              name="chevron-right"
              size={20}
              color={colors.secondary}
            />
          </TouchableOpacity>

          {/* Budget */}
          <TouchableOpacity
            style={{
              padding: 18,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 14,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  backgroundColor: colors.background,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather
                  name="pie-chart"
                  size={18}
                  color={colors.primary}
                />
              </View>

              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "600",
                    color: colors.primary,
                  }}
                >
                  Budget
                </Text>

                <Text
                  style={{
                    fontSize: 12,
                    color: colors.secondary,
                    marginTop: 3,
                  }}
                >
                  Manage your spending limit
                </Text>
              </View>
            </View>

            <Feather
              name="chevron-right"
              size={20}
              color={colors.secondary}
            />
          </TouchableOpacity>
        </View>

        {/* Your Data */}
        <Text
          style={{
            marginTop: 30,
            marginBottom: 12,
            fontSize: 16,
            fontWeight: "bold",
            color: colors.primary,
          }}
        >
          Your Data
        </Text>

        <View
          style={{
            backgroundColor: "#ffffff",
            borderRadius: 20,
            overflow: "hidden",
            shadowColor: colors.border,
            shadowOffset: {
              width: 1,
              height: 0,
            },
            shadowOpacity: 0.08,
            shadowRadius: 10,
            elevation: 2,
          }}
        >
          {/* Export Expenses */}
          <TouchableOpacity
            style={{
              padding: 18,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderBottomColor: colors.border,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 14,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  backgroundColor: colors.background,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather
                  name="download"
                  size={18}
                  color={colors.primary}
                />
              </View>

              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "600",
                    color: colors.primary,
                  }}
                >
                  Export Expenses
                </Text>

                <Text
                  style={{
                    fontSize: 12,
                    color: colors.secondary,
                    marginTop: 3,
                  }}
                >
                  Download your expense history
                </Text>
              </View>
            </View>

            <Feather
              name="chevron-right"
              size={20}
              color={colors.secondary}
            />
          </TouchableOpacity>

          {/* Expense History */}
          <TouchableOpacity
            style={{
              padding: 18,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 14,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  backgroundColor: colors.background,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather
                  name="list"
                  size={18}
                  color={colors.primary}
                />
              </View>

              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "600",
                    color: colors.primary,
                  }}
                >
                  Expense History
                </Text>

                <Text
                  style={{
                    fontSize: 12,
                    color: colors.secondary,
                    marginTop: 3,
                  }}
                >
                  View all your recorded expenses
                </Text>
              </View>
            </View>

            <Feather
              name="chevron-right"
              size={20}
              color={colors.secondary}
            />
          </TouchableOpacity>
        </View>

        {/* Logout */}
        <TouchableOpacity
          style={{
            marginTop: 30,
            padding: 16,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: "#ffffff",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 8,
          }}
        >
          <Feather
            name="log-out"
            size={18}
            color={colors.danger}
          />

          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: colors.danger,
            }}
          >
            Log Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default ProfileScreen