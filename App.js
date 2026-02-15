import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, SafeAreaView, StatusBar } from 'react-native';

const workflows = [
  { id: '1', title: 'Auto PR Reviewer', description: 'AI-powered pull request reviews', price: 29, rating: 4.8, installs: 2341, category: 'Code Review' },
  { id: '2', title: 'Deploy Master', description: 'One-click cloud deployment', price: 49, rating: 4.9, installs: 892, category: 'CI/CD' },
  { id: '3', title: 'Test Suite Pro', description: 'Testing with coverage reports', price: 0, rating: 4.7, installs: 5678, category: 'Testing' },
  { id: '4', title: 'Security Scanner', description: 'Vulnerability detection', price: 29, rating: 4.6, installs: 543, category: 'Security' },
  { id: '5', title: 'Auto Docs Generator', description: 'Auto-generate documentation', price: 15, rating: 4.5, installs: 321, category: 'Docs' },
  { id: '6', title: 'ML Pipeline Runner', description: 'ML pipeline with training', price: 49, rating: 4.9, installs: 654, category: 'AI & ML' },
];

export default function App() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={item.price === 0 ? styles.free : styles.price}>${item.price}</Text>
      </View>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.rating}>★ {item.rating}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0a0a0f" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>⚡ AgentFlow</Text>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.search}
          placeholder="Search workflows..."
          placeholderTextColor="#71717a"
        />
      </View>

      {/* Categories */}
      <View style={styles.categories}>
        {['All', 'CI/CD', 'Testing', 'Security', 'AI & ML'].map((cat, i) => (
          <TouchableOpacity key={i} style={styles.categoryChip}>
            <Text style={styles.categoryText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Workflow List */}
      <FlatList
        data={workflows}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Tab */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>🔍 Browse</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>📦 My Workflows</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>👤 Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0f',
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#27272a',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00d4aa',
  },
  searchContainer: {
    padding: 16,
  },
  search: {
    backgroundColor: '#1a1a24',
    borderRadius: 8,
    padding: 12,
    color: '#f4f4f5',
    fontSize: 16,
  },
  categories: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  categoryChip: {
    backgroundColor: '#1a1a24',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  categoryText: {
    color: '#a1a1aa',
    fontSize: 14,
  },
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: '#12121a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#27272a',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#f4f4f5',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f4f4f5',
  },
  free: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#22c55e',
  },
  description: {
    color: '#71717a',
    marginTop: 8,
    fontSize: 14,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  category: {
    color: '#7c3aed',
    fontSize: 12,
  },
  rating: {
    color: '#f59e0b',
    fontSize: 14,
  },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#27272a',
    paddingVertical: 12,
    backgroundColor: '#12121a',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: '#71717a',
    fontSize: 12,
  },
});
