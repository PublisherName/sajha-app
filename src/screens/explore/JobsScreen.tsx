import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import CategoryScreen from "@/components/CategoryScreen";
import type { RootStackParamList } from "@/types";

export default function JobsScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <CategoryScreen
      title="Jobs"
      subtitle="Find job opportunities in the UK Nepali community."
      category="job"
      navigation={navigation}
    />
  );
}
