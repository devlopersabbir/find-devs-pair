import { useTransition } from "react";
import { COLORS } from "@/constants";
import { styles } from "@/styles/login.style";
import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

const Login = () => {
  const [pending, startTransition] = useTransition();
  const handleLogin = async () => {
    startTransition(async () => {
      setTimeout(() => {
        router.push("/(tabs)/devs");
      }, 2000);
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Ionicons name="leaf" size={32} color={COLORS.primary} />
        </View>
        <Text style={styles.appName}>FindDevs Pair</Text>
        <Text style={styles.tagLine}>Pair with all top devs</Text>
      </View>

      <View style={styles.illustrationContainer}>
        <Image
          source={require("@/assets/images/auth-bg-2.png")}
          alt="auth image"
          style={styles.illustration}
          resizeMode="cover"
        />
      </View>
      <View style={styles.loginSection}>
        <TouchableOpacity
          style={styles.googleButton}
          activeOpacity={0.9}
          onPress={handleLogin}
          disabled={pending}
        >
          <View style={styles.googleIconContainer}>
            <Ionicons name="logo-google" size={20} color={COLORS.surface} />
          </View>
          <Text style={styles.googleButtonText}>Continue With Goolge</Text>
        </TouchableOpacity>
        <Text style={styles.termsText}>
          By Contributing, you agree to our Terms and Privacy Policy
        </Text>
      </View>
    </View>
  );
};

export default Login;
