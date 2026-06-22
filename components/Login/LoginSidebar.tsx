import React from 'react'
import {
  View,
  Text,
  Pressable,
  Animated,
  Dimensions, Modal ,Image
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useState, useRef, useEffect } from 'react'

const { width } = Dimensions.get('window')

export default function LoginSidebar({
    visible,
    onClose,
    userInitial,
    userColor,
  }: any) {
  
    const slideAnim = useRef(
      new Animated.Value(-400)
    ).current
  
    useEffect(() => {
      if (visible) {
        slideAnim.setValue(-400)
  
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }).start()
      }
    }, [visible])
  
    if (!visible) return null
  

  return (
    <Modal
        visible={visible}
        transparent
        animationType="none"
        onRequestClose={onClose}
        >
      <Pressable
        onPress={onClose}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.35)',
          zIndex: 999,
        }}
      />

      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: width * 0.82,
          backgroundColor: '#FFFFFF',
          zIndex: 1000,
          borderTopRightRadius: 28,
          borderBottomRightRadius: 28,
          overflow: 'hidden',
          transform: [
            {
              translateX: slideAnim,
            },
          ],
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            paddingVertical: 18,
            borderBottomWidth: 1,
            borderBottomColor: '#F1F1F1',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >

            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: '#111827',
              }}
            >
              My Account
            </Text>
          </View>

          <Pressable onPress={onClose}>
            <Ionicons
              name="close"
              size={24}
              color="#6B7280"
            />
          </Pressable>
        </View>

        <View
          style={{
            paddingTop:60,
            alignItems: 'center',
            justifyContent:'center'
          }}
        >
          <View style={{width: 70,height: 70,borderRadius: 999,borderWidth:2,borderColor: userColor,justifyContent: 'center',alignItems: 'center',}}>
          <View
            style={{
                width: 60,
                height: 60,
                borderRadius: 999,
                backgroundColor: userColor,
                justifyContent: 'center',
                alignItems: 'center',
                
              }}
          >
            <Text
                style={{
                  color: '#FFFFFF',
                  fontWeight: '800',
                  fontSize: 26,
                }}
              >
                {userInitial}
              </Text>
          </View>
            
          </View>

          <Text
            style={{
              marginTop: 4,
              fontSize: 28,
              fontWeight: '700',
              color: '#111827',
            }}
          >
            Sign in to NexDoc
          </Text>

          <Text
            style={{
              textAlign: 'center',
              color: '#9CA3AF',
              marginTop: 8,
              lineHeight: 22,
              fontSize:12,
            }}
          >
            Sync your documents across devices
            {'\n'}
            and unlock AI features
          </Text>

          <View
            style={{
              width: '90%',
              backgroundColor: '#F8F9FC',
              borderRadius: 20,
              padding: 18,
              marginTop: 24,
            }}
          >
            <Text style={{ marginBottom: 12 }}>
              ✓ Cloud sync across all devices
            </Text>

            <Text style={{ marginBottom: 12 }}>
              ✓ AI summaries & Chat with PDF
            </Text>

            <Text style={{ marginBottom: 12 }}>
              ✓ Bookmark & notes sync
            </Text>

            <Text>
              ✓ Priority customer support
            </Text>
          </View>

          <Pressable
            style={{
              width: '60%',
              backgroundColor: '#2d2d2d',
              borderRadius: 99,
              paddingVertical: 16,
              marginTop: 24,
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: '#FFFFFF',
                fontWeight: '700',
                fontSize: 16,
              }}
            >
              Sign In
            </Text>
          </Pressable>

          <Pressable
            style={{
              width: '70%',
              borderWidth: 1,
              borderColor: '#E5E7EB',
              borderRadius: 16,
              paddingVertical: 16,
              marginTop: 12,
              alignItems: 'center',
              flexDirection:'row',
              
            }}
          >
          <Image
                source={require('../../assets/images/google.png')}
                style={{ width: 30, height: 30, marginHorizontal:10}}
                />
            <Text
              style={{
                fontWeight: '600',
                color: '#111827',
              }}
            >
              Continue with Google
            </Text>
          </Pressable>
        </View>
        </Animated.View>
      </Modal>
  )
}