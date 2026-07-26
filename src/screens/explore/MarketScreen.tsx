import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import CategoryScreen from "@/components/CategoryScreen";
import type { RootStackParamList } from "@/types";

export default function MarketScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <CategoryScreen
      title="Market"
      subtitle="Buy and sell items within the community."
      category="market"
      navigation={navigation}
    />
  );
}
