import { useEffect } from "react";
import { router, Stack } from "expo-router";

const LayoutProvider = () => {
  // const isLogin = true;
  // useEffect(() => {
  //   if (isLogin) return router.replace("/devs");
  //   if (!isLogin) return router.replace("/login");
  // }, [isLogin]);

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default LayoutProvider;
