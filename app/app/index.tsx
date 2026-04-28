import { router } from "expo-router";
import { useEffect } from "react";
const Index = () => {
  useEffect(() => {
    router.replace("/onboarding");
  }, []);

  return null;
};

export default Index;
