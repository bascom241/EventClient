import React from "react";
import { Stack } from "expo-router";

const OnboardingLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // hide the default header for all onboarding screens
      }}
    />
  );
};

export default OnboardingLayout;
