import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import CategoryScreen from "@/components/CategoryScreen";
import type { RootStackParamList } from "@/types";

export default function RoomsScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <CategoryScreen
      title="Rooms"
      subtitle="Browse available rooms and flatshares."
      category="room"
      navigation={navigation}
    />
  );
}
