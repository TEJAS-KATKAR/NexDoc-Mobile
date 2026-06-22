import React, { useMemo, useState } from 'react'
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

  return (
    <>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 18,
          paddingTop: 10,
          marginBottom: 8,
        }}
      >
        <Pressable
          onPress={() => setShowLogin(true)}
          style={{
            width: 40,
            height: 40,
            borderRadius: 999,
            backgroundColor: userColor,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth:1,
            borderColor:'#dcdcdc'
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
            backgroundColor: '#F5F5F5',
            borderRadius: 999,
            height: 42,
            paddingHorizontal: 14,
            borderWidth:1,
            borderColor:'#dcdcdc'
          }}
        >
          <Search
            size={16}
            color="#9CA3AF"
          />

          <TextInput
            placeholder="Search documents..."
            placeholderTextColor="#9CA3AF"
            style={{
              flex: 1,
              marginLeft: 8,
            }}
          />
        </View>

        <Pressable
          style={{
            width: 40,
            height: 40,
            borderRadius: 999,
            borderWidth: 1,
            borderColor: '#F4D06F',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Crown
            size={22}
            color="#EAB308"
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