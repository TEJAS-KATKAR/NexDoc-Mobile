import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

const FilterBar = ({ layout, setLayout, showMenu, openMenu, page, setPage, sortBy, setSortBy, filterBtnRef }: any) => {

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Files</Text>

      <Pressable
        ref={filterBtnRef}
        style={styles.filterBtn}
        onPress={openMenu}
      >
        <Text style={styles.filterText}>Filter</Text>
      </Pressable>

    </View>
  )
}

export default FilterBar

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#e5e5e5',
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
  },

  filterBtn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },

  filterText: {
    fontSize: 15,
    fontWeight: '600',
  },

  menu: {
    position: 'absolute',
    top: 55,
    right: 20,
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    overflow: 'hidden',
    zIndex: 9999,
    elevation: 8,
  },

  item: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },

  backdrop: {
    position: 'absolute',
    top: -1000,
    left: -1000,
    right: -1000,
    bottom: -1000,
    zIndex: 9998,
  },
})