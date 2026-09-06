import { AxiosError } from "axios"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { colors } from "@/constants/colors"
import { router } from "expo-router"
import { useState } from "react"
import api from "@/lib/api"
import { useAuthStore } from "@/store/useAuthStore"

export default function LoginScreen() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const setAuth = useAuthStore((state) => state.setAuth)

  const handleLogin = async () => {
    setLoading(true)
    try {
      const res = await api.post("/auth/login", { email, password })
      setAuth(res.data.user, res.data.token)
      router.replace("/(tabs)/home")
    } catch (error) {
      const err = error as AxiosError<{ message: string }>
      setError(err.response?.data?.message || "Something went wrong")
      alert(err.response?.data?.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          padding: 24,
          paddingTop: 80,
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        <Text
          style={{ fontSize: 36, fontWeight: "bold", color: colors.primary }}
        >
          Welcome Back
        </Text>
        <Text style={{ fontSize: 16, color: colors.secondary, marginTop: 0 }}>
          Your financial journey continues here.
        </Text>

        <View
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.card,
              borderRadius: 12,
              padding: 16,
              marginTop: 32,
              gap: 12,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Ionicons name="logo-google" size={20} color={colors.primary} />
            <Text style={{ fontWeight: "bold" }}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.card,
              borderRadius: 12,
              padding: 16,
              marginTop: 12,
              gap: 12,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Ionicons name="logo-apple" size={20} color={colors.primary} />
            <Text style={{ fontWeight: "bold" }}>Apple</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 24,
            gap: 12,
          }}
        >
          <View
            style={{ flex: 1, height: 1, backgroundColor: colors.border }}
          />
          <Text style={{ color: colors.secondary }}>or</Text>
          <View
            style={{ flex: 1, height: 1, backgroundColor: colors.border }}
          />
        </View>

        <View>
          <TextInput
            placeholder="Enter Email Address"
            placeholderTextColor={colors.secondary}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={text => setEmail(text)}
            style={{
              backgroundColor: colors.card,
              color: colors.primary,
              padding: 16,
              borderRadius: 12,
              marginTop: 24,
              height: 48,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={colors.secondary}
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
            style={{
              backgroundColor: colors.card,
              color: colors.primary,
              padding: 16,
              borderRadius: 12,
              marginTop: 12,
              height: 48,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          />
          <TouchableOpacity style={{ alignSelf: "flex-end", marginTop: 12 }}>
            <Text style={{ color: colors.secondary, fontSize: 13 }}>
              Forgot password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignSelf: "center",
              alignItems: "center",
              marginTop: 12,
              backgroundColor: colors.primary,
              padding: 16,
              borderRadius: 16,
              width: "100%",
              opacity: loading ? 0.6 : 1
            }}
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color={colors.background} />
            ) : (
              <Text style={{color: colors.background, fontWeight: 'bold', fontSize: 16}}>Sign In</Text>
            )}
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 24,
          }}
        >
          <Text style={{ color: colors.secondary }}>
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
            <Text style={{ color: colors.primary, fontWeight: "bold" }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
