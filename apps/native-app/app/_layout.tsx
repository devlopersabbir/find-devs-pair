import LayoutProvider from "@/providers/layout-provider";
import BaseProvider from "@/providers/base-provider";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { COLORS } from "@/constants";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) throw new Error("Clerk key is required!");
export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey!} tokenCache={tokenCache}>
      <ClerkLoaded>
        <BaseProvider>
          <SafeAreaProvider>
            <SafeAreaView
              style={{ flex: 1, backgroundColor: COLORS.background }}
            >
              <LayoutProvider />
            </SafeAreaView>
          </SafeAreaProvider>
        </BaseProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
