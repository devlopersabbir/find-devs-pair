import LayoutProvider from "@/components/layout-provider";
import BaseProvider from "@/providers/base-provider";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
        <BaseProvider>
          <LayoutProvider />
        </BaseProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
