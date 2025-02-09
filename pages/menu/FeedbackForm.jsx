import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';

export default function FeedbackForm() {
  const [firstName, onChangeFirstName] = useState('');
  const [lastName, onChangeLastName] = useState('');
  const [message, onChangeMessage] = useState('');

  return (
    <View style={{ flex: 1 }}> {/* Added flex: 1 */}
      <Text style={styles.heading}>Feedback Form</Text>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined} // Enable proper behavior
      >
        <ScrollView
          keyboardDismissMode="on-drag"
          contentContainerStyle={{ flexGrow: 1 }} // Ensure ScrollView stretches properly
        >
          <Text style={styles.headingSection}>
            How was your visit to Little Lemon?
          </Text>
          <Text style={styles.infoSection}>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. We
            would love to hear your experience with us!
          </Text>
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={onChangeFirstName}
            placeholder="First Name"
          />
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={onChangeLastName}
            placeholder="Last Name"
          />
          <TextInput
            style={styles.messageInput}
            value={message}
            onChangeText={onChangeMessage}
            placeholder="Your Message"
            multiline
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#F4CE14',
  },
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#F4CE14',
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
    backgroundColor: '#495E57',
  },
  headingSection: {
    fontSize: 28,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
    backgroundColor: '#495E57',
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
});
