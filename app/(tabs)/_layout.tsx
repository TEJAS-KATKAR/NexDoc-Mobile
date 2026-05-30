import { Tabs, usePathname, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Platform,
} from 'react-native'
import { useRef, useCallback } from 'react'

const TABS =  [
  {
    name: 'index',
    label: 'Home',
    icon: 'home' as const,
    iconOutline: 'home-outline' as const,
  },
  {
    name: 'Actions',
    label: 'Actions',
    icon: 'grid' as const,
    iconOutline: 'grid-outline' as const,
  },
  {
    name: 'Settings',
    label: 'Settings',
    icon: 'settings' as const,
    iconOutline: 'settings-outline' as const,
  },
]

function TabItem({
  tab,
  focused,
  onPress,
}: {
  tab: (typeof TABS)[0]
  focused: boolean
  onPress: () => void
}) {
  const scale = useRef(new Animated.Value(1)).current
  const bgAnim = useRef(new Animated.Value(focused ? 1 : 0)).current

  // Sync bg animation when focused changes
  Animated.timing(bgAnim, {
    toValue: focused ? 1 : 0,
    duration: 160,
    useNativeDriver: false,
  }).start()

  const onPressIn = useCallback(() => {
    Animated.spring(scale, {
      toValue: 0.88,
      useNativeDriver: true,
      speed: 60,
      bounciness: 2,
    }).start()
  }, [])

  const onPressOut = useCallback(() => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 40,
      bounciness: 5,
    }).start()
  }, [])

  const bgColor = bgAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(17,17,17,0)', 'rgba(17,17,17,1)'],
  })

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      activeOpacity={1}
      style={styles.tabItem}
    >
      <Animated.View style={{ transform: [{ scale }], alignItems: 'center', gap: 4 }}>
        <Animated.View style={[styles.iconPill, { backgroundColor: bgColor }]}>
          <Ionicons
            name={focused ? tab.icon : tab.iconOutline}
            size={22}
            color={focused ? '#ffffff' : '#a0a0a0'}
          />
        </Animated.View>
        <Text style={[styles.label, focused && styles.labelFocused]}>
          {tab.label}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  )
}

function CustomTabBar() {
  const insets = useSafeAreaInsets()
  const router = useRouter()
  const pathname = usePathname()

  // Determine which tab is active
  const getActive = () => {
    if (pathname === '/' || pathname === '/index') return 'index'
    return pathname.replace('/', '')
  }
  const active = getActive()

  // Bottom of the floating bar: above gesture zone
  const barBottom = Platform.OS === 'android'
    ? 12
    : insets.bottom + 8

  // White fill height to cover gesture bar on Android
  const fillHeight = Platform.OS === 'android' ? barBottom : 0

  return (
    <>
      {/* White fill behind Android gesture bar */}
      {fillHeight > 0 && (
        <View
          pointerEvents="none"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: fillHeight + 20, // a bit extra so no gap
            backgroundColor: '#ffffff',
          }}
        />
      )}

      {/* The floating pill navbar */}
      <View style={[styles.tabBar, { bottom: barBottom }]}>
        {TABS.map((tab) => (
          <TabItem
            key={tab.name}
            tab={tab}
            focused={active === tab.name}
            onPress={() => {
              if (tab.name === 'index') {
                router.push('/')
              } else {
                router.push(`/${tab.name}` as any)
              }
            }}
          />
        ))}
      </View>
    </>
  )
}

export default function TabLayout() {
  const insets = useSafeAreaInsets()

  // Extra bottom padding so screen content doesn't hide behind navbar
  const tabBarHeight = 80
  const screenPaddingBottom = Platform.OS === 'android'
    ? tabBarHeight + 12
    : tabBarHeight + insets.bottom + 8

  return (
    <Tabs
      tabBar={() => <CustomTabBar />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="Actions" options={{ title: 'Actions' }} />
      <Tabs.Screen name="Settings" options={{ title: 'Settings' }} />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    left: 16,
    right: 16,
    height: 122,
    backgroundColor: '#ffffff',
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 8, 
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius: 20,
    // Android shadow
    elevation: 16,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '80%',
  },
  iconPill: {
    width: 72,
    height: 44,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 10,
    fontWeight: '500',
    color: '#a0a0a0',
    letterSpacing: 0.2,
  },
  labelFocused: {
    color: '#111111',
  },
})