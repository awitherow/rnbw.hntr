import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import { GameLoop } from "react-native-game-engine";
import { AdMobBanner } from "expo-ads-admob";

import config from "./src/config";

export default function App() {
  const hasPremium = false;
  const [bannerOkay, setBannerOkay] = useState(true);

  const adUnitId = Platform.OS === "android" ? config.ADMOB_BANNER_ANDROID : config.ADMOB_BANNER_IOS;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {hasPremium ||
        (bannerOkay && (
          <AdMobBanner
            adUnitID={adUnitId}
            servePersonalizedAds
            onDidFailToReceiveAdWithError={() => setBannerOkay(false)}
          />
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
