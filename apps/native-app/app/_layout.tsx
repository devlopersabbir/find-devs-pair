import LayoutProvider from "@/components/layout-provider";
import BaseProvider from "@/providers/base-provider";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
        <BaseProvider>
          <LayoutProvider />
        </BaseProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
