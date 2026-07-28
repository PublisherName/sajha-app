import { Ionicons } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";

import type { RootStackParamList } from "@/types";

import { styles } from "./SettingsScreen.styles";

type Props = NativeStackScreenProps<RootStackParamList, "Settings">;

interface SettingItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value?: string;
  onPress?: () => void;
  hasArrow?: boolean;
}

function SettingItem({ icon, label, value, onPress, hasArrow = true }: SettingItemProps) {
  return (
    <TouchableOpacity style={styles.settingItem} onPress={onPress} activeOpacity={onPress ? 0.7 : 1}>
      <View style={styles.settingIcon}>
        <Ionicons name={icon} size={18} color="#E63946" />
      </View>
      <View style={styles.settingContent}>
        <Text style={styles.settingLabel}>{label}</Text>
        {value ? <Text style={styles.settingValue}>{value}</Text> : null}
      </View>
      {hasArrow ? <Ionicons name="chevron-forward" size={16} color="#CCC" /> : null}
    </TouchableOpacity>
  );
}

interface SettingToggleProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  description?: string;
  value: boolean;
  onValueChange: (val: boolean) => void;
}

function SettingToggle({ icon, label, description, value, onValueChange }: SettingToggleProps) {
  return (
    <View style={styles.settingItem}>
      <View style={styles.settingIcon}>
        <Ionicons name={icon} size={18} color="#E63946" />
      </View>
      <View style={styles.settingContent}>
        <Text style={styles.settingLabel}>{label}</Text>
        {description ? <Text style={styles.settingDescription}>{description}</Text> : null}
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: "#E0E0E0", true: "#FFB3B8" }}
        thumbColor={value ? "#E63946" : "#F4F3F4"}
      />
    </View>
  );
}

export default function SettingsScreen({ navigation }: Props) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.section}>
          <SettingItem icon="person-outline" label="Edit Profile" value="Sajha User" />
          <SettingItem icon="mail-outline" label="Email" value="user@sajha.co.uk" />
          <SettingItem icon="call-outline" label="Phone Number" value="+44 7700 900123" />
        </View>

        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.section}>
          <SettingToggle
            icon="notifications-outline"
            label="Push Notifications"
            description="Get notified about new messages and updates"
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
          />
          <SettingToggle
            icon="mail-outline"
            label="Email Alerts"
            description="Receive email notifications for important updates"
            value={emailAlerts}
            onValueChange={setEmailAlerts}
          />
        </View>

        <Text style={styles.sectionTitle}>Privacy</Text>
        <View style={styles.section}>
          <SettingItem icon="lock-closed-outline" label="Change Password" />
          <SettingItem icon="shield-checkmark-outline" label="Two-Factor Authentication" value="Off" />
        </View>

        <Text style={styles.sectionTitle}>Appearance</Text>
        <View style={styles.section}>
          <SettingToggle
            icon="moon-outline"
            label="Dark Mode"
            description="Switch to dark theme"
            value={darkMode}
            onValueChange={setDarkMode}
          />
        </View>

        <Text style={styles.sectionTitle}>Support</Text>
        <View style={styles.section}>
          <SettingItem icon="help-circle-outline" label="Help Centre" />
          <SettingItem icon="chatbubble-outline" label="Contact Support" />
          <SettingItem icon="document-text-outline" label="Terms of Service" />
          <SettingItem icon="shield-outline" label="Privacy Policy" />
        </View>

        <Text style={styles.sectionTitle}>About</Text>
        <View style={styles.section}>
          <SettingItem icon="information-circle-outline" label="App Version" value="1.0.0" hasArrow={false} />
          <SettingItem icon="code-outline" label="Build" value="2026.07" hasArrow={false} />
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
}
