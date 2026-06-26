import React, { useMemo, useState } from 'react'
import { useSettings, THEMES } from '@/contexts/SettingsContext'
import {
  View,
  Text,
  TextInput,
  Pressable,
} from 'react-native'
import { Search, Crown } from 'lucide-react-native'
import LoginSidebar from '@/components/Login/LoginSidebar'

const COLORS = [
  '#6366F1',
  '#8B5CF6',
  '#EC4899',
  '#10B981',
  '#F59E0B',
  '#06B6D4',
]

const USER_NAME = 'Lets Remember'

export default function Topbar() {
  const [showLogin, setShowLogin] = useState(false)

  const userInitial = USER_NAME.charAt(0).toUpperCase()

  const userColor = useMemo(() => {
    const index =
      USER_NAME.charCodeAt(0) % COLORS.length

    return COLORS[index]
  }, [])

  const { theme } = useSettings()

  const colors =
    THEMES[theme as keyof typeof THEMES] ||
    THEMES.light

  const [searchFocused, setSearchFocused] =
    useState(false)

  const [profilePressed, setProfilePressed] =
  useState(false)

  const [premiumPressed, setPremiumPressed] =
  useState(false)

  return (
    <>
      <View
        style={{
          backgroundColor: colors.background,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 18,
          paddingTop: 10,
          marginBottom: 8,
        }}
      >
        <Pressable
          onPress={() => setShowLogin(true)}
          onPressIn={() => setProfilePressed(true)}
          onPressOut={() => setProfilePressed(false)}
          style={{
            width: 40,
            height: 40,
            borderRadius: 999,
            backgroundColor: userColor,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: profilePressed
              ? '#2563EB'
              : colors.border
          }}
        >
          <Text
            style={{
              color: '#FFFFFF',
              fontWeight: '800',
              fontSize: 16,
            }}
          >
            {userInitial}
          </Text>
        </Pressable>

        <View
          style={{
            flex: 1,
            marginHorizontal: 12,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colors.chip,
            borderRadius: 999,
            height: 42,
            paddingHorizontal: 14,
            borderWidth: 1.5,
            borderColor: searchFocused
              ? '#2563EB'
              : colors.border,
          }}
        >
          <Search
            size={16}
            color={colors.secondaryText}
          />

          <TextInput
            placeholder="Search documents..."
            placeholderTextColor={colors.secondaryText}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            style={{
              flex: 1,
              marginLeft: 8,
              color: colors.text,
            }}
          />
        </View>

        <Pressable
        onPressIn={() => setPremiumPressed(true)}
        onPressOut={() => setPremiumPressed(false)}
          style={{
            width: 40,
            height: 40,
            borderRadius: 999,
            borderWidth: 1,
            borderColor: premiumPressed
              ? '#2563EB'
              : colors.accent,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        > 
          <Crown
            size={22}
            color={colors.accent}
          />
        </Pressable>
      </View>

      <LoginSidebar
        visible={showLogin}
        onClose={() => setShowLogin(false)}
        userInitial={userInitial}
        userColor={userColor}
      />
    </>
  )
}