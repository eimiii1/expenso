import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { router } from 'expo-router';

export default function RegisterScreen() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ justifyContent: 'center', padding: 24, paddingTop: 80, flexGrow: 1 }}>

        <Text style={{ fontSize: 36, fontWeight: 'bold', color: colors.primary }}>Create Account</Text>
        <Text style={{ fontSize: 16, color: colors.secondary, marginTop: 8 }}>
            Join thousands of people taking control of their  finances.
        </Text>

        <TouchableOpacity style={{
          flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
          backgroundColor: colors.card, borderRadius: 12, padding: 16,
          marginTop: 32, gap: 12, borderWidth: 1, borderColor: colors.border
        }}>
          <Ionicons name="logo-google" size={20} color={colors.primary} />
          <Text style={{ color: colors.primary, fontWeight: '600' }}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
          backgroundColor: colors.card, borderRadius: 12, padding: 16,
          marginTop: 12, gap: 12, borderWidth: 1, borderColor: colors.border
        }}>
          <Ionicons name="logo-apple" size={20} color={colors.primary} />
          <Text style={{ color: colors.primary, fontWeight: '600' }}>Apple</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 24, gap: 12 }}>
          <View style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
          <Text style={{ color: colors.secondary }}>or</Text>
          <View style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
        </View>

        <TextInput
          placeholder="Full Name"
          placeholderTextColor={colors.secondary}
          style={{
            backgroundColor: colors.card, color: colors.primary, padding: 16,
            borderRadius: 12, marginTop: 24, borderWidth: 1, borderColor: colors.border,
            height: 48, width: '100%'
          }}
        />

        <TextInput
          placeholder="Email Address"
          placeholderTextColor={colors.secondary}
          keyboardType="email-address"
          autoCapitalize="none"
          style={{
            backgroundColor: colors.card, color: colors.primary, padding: 16,
            borderRadius: 12, marginTop: 12, borderWidth: 1, borderColor: colors.border,
            height: 48, width: '100%'
          }}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor={colors.secondary}
          secureTextEntry
          style={{
            backgroundColor: colors.card, color: colors.primary, padding: 16,
            borderRadius: 12, marginTop: 12, borderWidth: 1, borderColor: colors.border,
            height: 48, width: '100%'
          }}
        />

        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor={colors.secondary}
          secureTextEntry
          style={{
            backgroundColor: colors.card, color: colors.primary, padding: 16,
            borderRadius: 12, marginTop: 12, borderWidth: 1, borderColor: colors.border,
            height: 48, width: '100%'
          }}
        />

        <TouchableOpacity style={{
          backgroundColor: colors.primary, padding: 16, borderRadius: 16,
          alignItems: 'center', marginTop: 24
        }}>
          <Text style={{ color: colors.background, fontWeight: 'bold', fontSize: 16 }}>Sign Up</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 24 }}>
          <Text style={{ color: colors.secondary }}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={{ color: colors.primary, fontWeight: 'bold' }}>Sign In</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}