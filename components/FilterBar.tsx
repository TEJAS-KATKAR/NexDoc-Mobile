import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import Octicons from '@expo/vector-icons/Octicons';
import { useState, useRef} from 'react';
import { Animated } from 'react-native';

const FilterBar = ({ layout, setLayout, showMenu, openMenu, page, setPage, sortBy, setSortBy, filterBtnRef }: any) => {
const [category, setCategory] = useState('recent')
const slideAnim = useRef(new Animated.Value(0)).current
const changeTab = (tab: string, position: number) => {
  setCategory(tab)

  Animated.spring(slideAnim, {
    toValue: position,
    useNativeDriver: false,
  }).start()
}

  return (
    <View style={styles.container}>

      <View style={styles.mainbtn}>
      <Pressable onPress={() => changeTab('recent', 0)} style={styles.tabBtn}>
        <Text style={[styles.tabText, category === 'recent' && styles.activeText]}>
          Recent
        </Text>
      </Pressable>

      <Pressable onPress={() => changeTab('favorites', 1)} style={styles.tabBtn}>
        <Text style={[styles.tabText, category === 'favorites' && styles.activeText]}>
          Favorites
        </Text>
      </Pressable>

      <Pressable onPress={() => changeTab('device', 2)} style={styles.tabBtn}>
        <Text style={[styles.tabText, category === 'device' && styles.activeText]}>
          On Device
        </Text>
      </Pressable>
      <Animated.View
        style={[
          styles.indicator,
          {
            left: slideAnim.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [0, 94, 200],
            }),
          },
        ]}
      />
      </View>

      <Pressable
        ref={filterBtnRef}
        style={styles.filterBtn}
        onPress={openMenu}
      >
        <Octicons name="filter" size={26} color="black" />
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
    backgroundColor: '#ffffff',
  },

  filterText: {
    fontSize: 15,
    fontWeight: '600',
  },


  mainbtn: {
    justifyContent:'flex-start',
    alignItems:'center',
    marginRight:30,
    flexDirection:'row',
    gap:10,
    position: 'relative',
  },

  tabBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#f2f2f2',
    borderWidth:0.3,
    alignItems: 'center',
    minWidth: 70,
    
  },
  
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#8a8a8a',
  },

  activeText: {
    color: '#111',
  },
  
  indicator: {
    position: 'absolute',
    bottom: -10,
    width: 74,
    height: 3,
    borderRadius: 10,
    backgroundColor: '#111',
    marginLeft:2,
  },
  
})