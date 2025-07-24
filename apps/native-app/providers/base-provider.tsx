import { useRootNavigationState } from "expo-router";
import { ReactNode } from "react";

const BaseProvider = ({ children }: { children: ReactNode }) => {
  const rootNavigationState = useRootNavigationState();
  if (!rootNavigationState.key) return null;

  return <>{children}</>;
};
export default BaseProvider;
