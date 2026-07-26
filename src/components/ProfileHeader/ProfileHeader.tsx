import { Text, View } from "react-native";

import { styles } from "./ProfileHeader.styles";

interface ProfileHeaderProps {
  name: string;
  email?: string;
  initials?: string;
}

export default function ProfileHeader({ name, email, initials }: ProfileHeaderProps) {
  const displayInitials =
    initials ??
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{displayInitials}</Text>
      </View>

      <Text style={styles.name}>{name}</Text>
      {email ? <Text style={styles.email}>{email}</Text> : null}
    </View>
  );
}
