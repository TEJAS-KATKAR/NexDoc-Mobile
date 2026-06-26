import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import Octicons from '@expo/vector-icons/Octicons';
import { useState, useRef} from 'react';
import { Animated } from 'react-native';
import { useSettings, THEMES } from '@/contexts/SettingsContext'

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

const { theme } = useSettings()

const colors =
  THEMES[theme as keyof typeof THEMES] ||
  THEMES.light

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          borderColor: colors.border,
        },
      ]}
    >
      <View style={styles.mainbtn}>
        <Pressable
          onPress={() => changeTab('recent', 0)}
          style={[
            styles.tabBtn,
            {
              backgroundColor:
                category === 'recent'
                  ? colors.chipActive
                  : colors.chip,
              borderColor: colors.border,
            },
          ]}
        >
          <Text
            style={[
              styles.tabText,
              {
                color:
                  category === 'recent'
                    ? colors.text
                    : colors.secondaryText,
              },
            ]}
          >
            Recent
          </Text>
        </Pressable>

        <Pressable
          onPress={() => changeTab('favorites', 1)}
          style={[
            styles.tabBtn,
            {
              backgroundColor:
                category === 'favorites'
                  ? colors.chipActive
                  : colors.chip,
              borderColor: colors.border,
            },
          ]}
        >
          <Text
            style={[
              styles.tabText,
              {
                color:
                  category === 'favorites'
                    ? colors.text
                    : colors.secondaryText,
              },
            ]}
          >
            Favorites
          </Text>
        </Pressable>

        <Pressable
          onPress={() => changeTab('device', 2)}
          style={[
            styles.tabBtn,
            {
              backgroundColor:
                category === 'device'
                  ? colors.chipActive
                  : colors.chip,
              borderColor: colors.border,
            },
          ]}
        >
          <Text
            style={[
              styles.tabText,
              {
                color:
                  category === 'device'
                    ? colors.text
                    : colors.secondaryText,
              },
            ]}
          >
            On Device
          </Text>
        </Pressable>

        <Animated.View
          style={[
            styles.indicator,
            {
              backgroundColor: colors.accent,
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
        style={[
          styles.filterBtn,
          
        ]}
        onPress={openMenu}
      >
        <Octicons
          name="filter"
          size={26}
          color={colors.accent}
        />
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
    borderBottomWidth: 1,

  },

  title: {
    fontSize: 24,
    fontWeight: '700',
  },

  filterBtn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    
    
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