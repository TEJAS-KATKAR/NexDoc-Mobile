import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Animated } from 'react-native'
import { useRef } from 'react'

const LOCATIONS = [
  'Downloads',
  'Documents',
  'WhatsApp',
  'Internal Storage',
  'Shared Documents',
]

export default function LoadingState() {
  const [locationIndex, setLocationIndex] =
    useState(0)

  const [dots, setDots] = useState('')
  const fadeAnim = useRef(new Animated.Value(1)).current

  useEffect(() => {
    const locationTimer = setInterval(() => {
      setLocationIndex(prev =>
        (prev + 1) % LOCATIONS.length
      )
    }, 2500)

    return () =>
      clearInterval(locationTimer)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start()
  
      setTimeout(() => {
        setLocationIndex(prev =>
          (prev + 1) % LOCATIONS.length
        )
      }, 250)
  
    }, 2500)
  
    return () => clearInterval(timer)
  }, [])

  return (
    <View
      style={{
        paddingTop: 80,
        paddingHorizontal: 30,
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: 82,
          height: 82,
          borderRadius: 24,
          backgroundColor: '#EEF2FF',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Ionicons
          name="document-text-outline"
          size={42}
          color="#6366F1"
        />
      </View>

      <Text
        style={{
          marginTop: 26,
          fontSize: 24,
          fontWeight: '700',
          color: '#111827',
        }}
      >
        Scanning your PDFs
      </Text>

      <Animated.Text
        style={{
            marginTop: 18,
            fontSize: 16,
            fontWeight: '600',
            color: '#374151',
            opacity: fadeAnim,
        }}
        >
        Looking in {LOCATIONS[locationIndex]}
        {dots}
        </Animated.Text>

      <Text
        style={{
          marginTop: 18,
          textAlign: 'center',
          color: '#9CA3AF',
          fontSize: 13,
          lineHeight: 22,
          paddingHorizontal: 12,
        }}
      >
        Searching your device for PDF
        documents. This usually takes
        only a few seconds.
      </Text>
    </View>
  )
  
}


