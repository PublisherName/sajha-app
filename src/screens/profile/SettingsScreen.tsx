import { Ionicons } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { ActivityIndicator, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";

import { useAuth } from "@/context/AuthContext";
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
  const { user, profile, updateProfile, changePassword } = useAuth();
  const [darkMode, setDarkMode] = useState(false);

  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [name, setName] = useState(user?.name ?? "");
  const [phone, setPhone] = useState(user?.phone ?? "");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleSaveName = async () => {
    if (!name.trim()) {
      setError("Name cannot be empty.");
      return;
    }
    setSaving(true);
    setError("");
    const result = await updateProfile({ name: name.trim() });
    setSaving(false);
    if (result.error) {
      setError(result.error);
    } else {
      setIsEditingName(false);
    }
  };

  const handleSavePhone = async () => {
    setSaving(true);
    setError("");
    const result = await updateProfile({ phone: phone.trim() });
    setSaving(false);
    if (result.error) {
      setError(result.error);
    } else {
      setIsEditingPhone(false);
    }
  };

  const handleTogglePushNotifications = async (value: boolean) => {
    await updateProfile({ pushNotifications: value });
  };

  const handleToggleEmailAlerts = async (value: boolean) => {
    await updateProfile({ emailAlerts: value });
  };

  const handleChangePassword = async () => {
    setPasswordError("");
    setPasswordSuccess(false);

    if (!currentPassword.trim() || !newPassword.trim() || !confirmPassword.trim()) {
      setPasswordError("Please fill in all password fields.");
      return;
    }
    if (newPassword.length < 6) {
      setPasswordError("New password must be at least 6 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError("New passwords do not match.");
      return;
    }

    setSaving(true);
    const result = await changePassword(currentPassword, newPassword);
    setSaving(false);

    if (result.error) {
      setPasswordError(result.error);
    } else {
      setPasswordSuccess(true);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setIsChangingPassword(false);
        setPasswordSuccess(false);
      }, 2000);
    }
  };

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
        {error ? (
          <View style={styles.errorRow}>
            <Ionicons name="alert-circle" size={16} color="#E63946" />
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}

        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.section}>
          {isEditingName ? (
            <View style={styles.editRow}>
              <View style={styles.editIcon}>
                <Ionicons name="person-outline" size={18} color="#E63946" />
              </View>
              <TextInput
                style={styles.editInput}
                value={name}
                onChangeText={setName}
                autoFocus
                placeholder="Enter your name"
                placeholderTextColor="#AAA"
              />
              <TouchableOpacity onPress={handleSaveName} disabled={saving}>
                {saving ? (
                  <ActivityIndicator size="small" color="#E63946" />
                ) : (
                  <Ionicons name="checkmark-circle" size={24} color="#E63946" />
                )}
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.settingItem}
              onPress={() => {
                setName(user?.name ?? "");
                setIsEditingName(true);
              }}
            >
              <View style={styles.settingIcon}>
                <Ionicons name="person-outline" size={18} color="#E63946" />
              </View>
              <View style={styles.settingContent}>
                <Text style={styles.settingLabel}>Edit Profile</Text>
                <Text style={styles.settingValue}>{user?.name ?? "Not set"}</Text>
              </View>
              <Ionicons name="create-outline" size={16} color="#E63946" />
            </TouchableOpacity>
          )}

          <SettingItem icon="mail-outline" label="Email" value={user?.email ?? ""} hasArrow={false} />

          {isEditingPhone ? (
            <View style={styles.editRow}>
              <View style={styles.editIcon}>
                <Ionicons name="call-outline" size={18} color="#E63946" />
              </View>
              <TextInput
                style={styles.editInput}
                value={phone}
                onChangeText={setPhone}
                autoFocus
                placeholder="Enter phone number"
                placeholderTextColor="#AAA"
                keyboardType="phone-pad"
              />
              <TouchableOpacity onPress={handleSavePhone} disabled={saving}>
                {saving ? (
                  <ActivityIndicator size="small" color="#E63946" />
                ) : (
                  <Ionicons name="checkmark-circle" size={24} color="#E63946" />
                )}
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.settingItem}
              onPress={() => {
                setPhone(user?.phone ?? "");
                setIsEditingPhone(true);
              }}
            >
              <View style={styles.settingIcon}>
                <Ionicons name="call-outline" size={18} color="#E63946" />
              </View>
              <View style={styles.settingContent}>
                <Text style={styles.settingLabel}>Phone Number</Text>
                <Text style={styles.settingValue}>{user?.phone || "Not set"}</Text>
              </View>
              <Ionicons name="create-outline" size={16} color="#E63946" />
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.section}>
          <SettingToggle
            icon="notifications-outline"
            label="Push Notifications"
            description="Get notified about new messages and updates"
            value={profile?.pushNotifications ?? true}
            onValueChange={handleTogglePushNotifications}
          />
          <SettingToggle
            icon="mail-outline"
            label="Email Alerts"
            description="Receive email notifications for important updates"
            value={profile?.emailAlerts ?? false}
            onValueChange={handleToggleEmailAlerts}
          />
        </View>

        <Text style={styles.sectionTitle}>Privacy</Text>
        <View style={styles.section}>
          {isChangingPassword ? (
            <View style={styles.passwordForm}>
              {passwordError ? (
                <View style={styles.passwordErrorRow}>
                  <Ionicons name="alert-circle" size={14} color="#E63946" />
                  <Text style={styles.passwordErrorText}>{passwordError}</Text>
                </View>
              ) : null}

              <View style={styles.editRow}>
                <View style={styles.editIcon}>
                  <Ionicons name="lock-closed-outline" size={18} color="#E63946" />
                </View>
                <TextInput
                  style={styles.editInput}
                  value={currentPassword}
                  onChangeText={setCurrentPassword}
                  placeholder="Current password"
                  placeholderTextColor="#AAA"
                  secureTextEntry={!showCurrentPassword}
                />
                <TouchableOpacity onPress={() => setShowCurrentPassword(!showCurrentPassword)}>
                  <Ionicons name={showCurrentPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#888" />
                </TouchableOpacity>
              </View>

              <View style={styles.editRow}>
                <View style={styles.editIcon}>
                  <Ionicons name="lock-closed-outline" size={18} color="#E63946" />
                </View>
                <TextInput
                  style={styles.editInput}
                  value={newPassword}
                  onChangeText={setNewPassword}
                  placeholder="New password (min 6 characters)"
                  placeholderTextColor="#AAA"
                  secureTextEntry={!showNewPassword}
                />
                <TouchableOpacity onPress={() => setShowNewPassword(!showNewPassword)}>
                  <Ionicons name={showNewPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#888" />
                </TouchableOpacity>
              </View>

              <View style={styles.editRow}>
                <View style={styles.editIcon}>
                  <Ionicons name="lock-closed-outline" size={18} color="#E63946" />
                </View>
                <TextInput
                  style={styles.editInput}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  placeholder="Confirm new password"
                  placeholderTextColor="#AAA"
                  secureTextEntry
                />
              </View>

              {passwordSuccess ? (
                <View style={styles.successRow}>
                  <Ionicons name="checkmark-circle" size={16} color="#2ECC71" />
                  <Text style={styles.successText}>Password updated successfully!</Text>
                </View>
              ) : null}

              <View style={styles.passwordActions}>
                <TouchableOpacity
                  style={styles.passwordCancelButton}
                  onPress={() => {
                    setIsChangingPassword(false);
                    setPasswordError("");
                    setPasswordSuccess(false);
                    setCurrentPassword("");
                    setNewPassword("");
                    setConfirmPassword("");
                  }}
                >
                  <Text style={styles.passwordCancelText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.passwordSaveButton, saving && { opacity: 0.7 }]}
                  onPress={handleChangePassword}
                  disabled={saving}
                >
                  {saving ? (
                    <ActivityIndicator size="small" color="#FFF" />
                  ) : (
                    <Text style={styles.passwordSaveText}>Update</Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <TouchableOpacity style={styles.settingItem} onPress={() => setIsChangingPassword(true)}>
              <View style={styles.settingIcon}>
                <Ionicons name="lock-closed-outline" size={18} color="#E63946" />
              </View>
              <View style={styles.settingContent}>
                <Text style={styles.settingLabel}>Change Password</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color="#CCC" />
            </TouchableOpacity>
          )}
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
