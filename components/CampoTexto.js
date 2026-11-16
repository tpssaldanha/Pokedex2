import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

export default function CampoTexto({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        placeholderTextColor="#777777"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },

  label: {
    color: '#3B4CCA',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#2A75BB',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#1F1F1F',
  },
});