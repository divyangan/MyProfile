import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Navigation = () => {
  const handleNavigation = (item) => {
    console.log('InNavigation');
    
  };

  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={[styles.buttonContainer]}
        onPress={() => handleNavigation('My Certificates')}
      >
        <Text style={styles.buttonText}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonContainer]}
        onPress={() => handleNavigation('My Profile')}
      >
        <Text style={styles.buttonText}>Experience</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonContainer]}
        onPress={() => handleNavigation('My Badges')}
      >
        <Text style={styles.buttonText}>Education</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonContainer]}
        onPress={() => handleNavigation('My Schedule')}
      >
        <Text style={styles.buttonText}>Hobbies</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: -20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    marginRight: 20,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#1602F7'
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Navigation;