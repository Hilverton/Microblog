import React, { useEffect } from "react";
import { Container, Logo, LoadingIcon } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { apiClient } from "../../services/api";
import colors from "../../styles";
import AsyncStorage from "@react-native-community/async-storage";

import logoTwitter from "../../../assets/splashTwitter.png";

const Preload: React.FC = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = await AsyncStorage.getItem("@token");
        if (!token) return navigation.navigate("Login");
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const response = await apiClient.get("/refresh-token", config);
        if (response.data.token) {
          await AsyncStorage.setItem("@token", response.data.token);
          navigation.reset({ routes: [{ name: "PrivateRoutes" }] });
        }
      } catch (error) {
        console.log(error);
        navigation.navigate("Login");
      }
    };

    verifyToken();
  }, []);

  return (
    <Container>
      <Logo source={logoTwitter} />
      <LoadingIcon size="large" color={colors.primary} />
    </Container>
  );
};

export { Preload };
