import { baseURL, COLORS } from "@/constants";
import { styles } from "@/styles/login.style";
import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { useAuth, useSSO, useUser } from "@clerk/clerk-expo";
import axios from "axios";
import { useEffect } from "react";

const Login = () => {
  const { startSSOFlow } = useSSO();
  const router = useRouter();
  const { isLoaded: authLoaded, isSignedIn, userId, getToken } = useAuth();
  const { isLoaded: userLoaded, user } = useUser();

  const googleLogin = async () => {
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: "oauth_google",
      });
      if (setActive && createdSessionId) {
        // setActive({ session: createdSessionId });
        await setActive({ session: createdSessionId });
      }
    } catch (err) {
      alert("fail to sinin");
      console.error(JSON.stringify(err, null, 2));
    }
  };
  const githubLogin = async () => {
    try {
      const { setActive, createdSessionId } = await startSSOFlow({
        strategy: "oauth_github",
      });
      if (setActive && createdSessionId) {
        setActive({ session: createdSessionId });
        console.log(createdSessionId);
        router.replace("/(tabs)/profile");
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  useEffect(() => {
    (async () => {
      if (authLoaded && isSignedIn && userLoaded && user) {
        await getToken();
        const payload = {
          email: user.primaryEmailAddress?.emailAddress,
          fullName: user.fullName,
          avatarUrl: user.imageUrl,
        };

        try {
          const { data } = await axios.post(
            `${baseURL}/users/register`,
            payload
          );
          console.log(data);

          router.replace("/(tabs)/profile");
        } catch (err) {
          console.log(err);
        }
      }
    })();
  }, [authLoaded, isSignedIn, userLoaded, user]);
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
        <View style={styles.continueWrapper}>
          <TouchableOpacity
            style={styles.googleButton}
            activeOpacity={0.9}
            onPress={googleLogin}
          >
            <View style={styles.googleIconContainer}>
              <Ionicons name="logo-google" size={20} color={COLORS.surface} />
            </View>
            <Text style={styles.googleButtonText}>Continue With Goolge</Text>
          </TouchableOpacity>
          {/* <Text
            style={{ fontWeight: "bold", fontSize: 18, color: COLORS.gray }}
          >
            OR
          </Text>
          <TouchableOpacity
            style={styles.googleButton}
            activeOpacity={0.9}
            onPress={githubLogin}
          >
            <View style={styles.googleIconContainer}>
              <Ionicons name="logo-github" size={20} color={COLORS.surface} />
            </View>
            <Text style={styles.googleButtonText}>Continue With Github</Text>
          </TouchableOpacity> */}
        </View>

        <Text style={styles.termsText}>
          By Contributing, you agree to our Terms and Privacy Policy
        </Text>
      </View>
    </View>
  );
};

export default Login;
