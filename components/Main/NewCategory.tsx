import React, { useState } from 'react'
import {
  Modal,
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const COLORS = [
    {
      bgColor: '#EEF4FF',
      iconColor: '#5B8DEF',
    },
    {
      bgColor: '#F4EEFF',
      iconColor: '#8B6BFF',
    },
    {
      bgColor: '#EEFFF6',
      iconColor: '#34B27B',
    },
    {
      bgColor: '#FFF6EA',
      iconColor: '#F0A53A',
    },
    {
      bgColor: '#FFEFEF',
      iconColor: '#E06262',
    },
    {
      bgColor: '#F3F4F6',
      iconColor: '#4B5563',
    },
  ]

const ICONS = [
  'book-outline',
  'school-outline',
  'briefcase-outline',
  'wallet-outline',
  'heart-outline',
  'home-outline',
  'document-text-outline',
  'create-outline',
  'flask-outline',
  'musical-notes-outline',
]

export default function NewCategory({
  visible,
  onClose,
  onCreate,
}: any) {
  const [name, setName] = useState('')
  const [focused, setFocused] = useState(false)

  const [selectedColor, setSelectedColor] =
    useState(COLORS[0])

  const [selectedIcon, setSelectedIcon] =
    useState('book-outline')

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.4)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Pressable
          onPress={onClose}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />

        <View
          style={{
            width: '92%',
            backgroundColor: '#FFFFFF',
            borderRadius: 24,
            padding: 20,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: '700',
              color: '#111827',
              marginBottom: 20,
            }}
          >
            New Category
          </Text>

          {/* Name */}

          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: '#374151',
              marginBottom: 8,
            }}
          >
            Category Name
          </Text>

          <TextInput
            value={name}
            onChangeText={setName}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Enter category name"
            style={{
              height: 50,
              borderWidth: 2,
              borderColor: focused
                ? '#2563EB'
                : '#E5E7EB',
              borderRadius: 14,
              paddingHorizontal: 14,
              marginBottom: 24,
            }}
          />

          {/* Colors */}

          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: '#374151',
              marginBottom: 12,
            }}
          >
            Color
          </Text>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginBottom: 24,
            }}
          >
            {COLORS.map(color => (
                <Pressable
                    key={color.bgColor}
                    onPress={() => setSelectedColor(color)}
                    style={{
                    width: 42,
                    height: 42,
                    borderRadius: 999,
                    backgroundColor: color.bgColor,
                    marginRight: 12,
                    marginBottom: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth:
                        selectedColor.bgColor === color.bgColor
                        ? 3
                        : 1,
                    borderColor:
                        selectedColor.bgColor === color.bgColor
                        ? '#2563EB'
                        : '#D1D5DB',
                    }}
                >
                    <View
                    style={{
                        width: 20,
                        height: 20,
                        borderRadius: 999,
                        backgroundColor: color.iconColor,
                    }}
                    />
                </Pressable>
                ))}
          </View>

          {/* Icons */}

          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: '#374151',
              marginBottom: 12,
            }}
          >
            Icon
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              marginBottom: 24,
            }}
          >
            {ICONS.map(icon => (
              <Pressable
                key={icon}
                onPress={() =>
                  setSelectedIcon(icon)
                }
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                  borderWidth:
                    selectedIcon === icon
                      ? 2
                      : 1,
                  borderColor:
                    selectedIcon === icon
                      ? '#2563EB'
                      : '#E5E7EB',
                  backgroundColor:
                    selectedIcon === icon
                      ? '#EEF2FF'
                      : '#FFFFFF',
                }}
              >
                <Ionicons
                  name={icon as any}
                  size={22}
                  color="#374151"
                />
              </Pressable>
            ))}
          </ScrollView>

          {/* Preview */}

          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: '#374151',
              marginBottom: 12,
            }}
          >
            Preview
          </Text>

          <View
            style={{
              height: 56,
              backgroundColor: selectedColor.bgColor,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: '#E5E7EB',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 12,
              marginBottom: 24,
            }}
          >
            <View
              style={{
                width: 38,
                height: 38,
                borderRadius: 999,
                backgroundColor: selectedColor.iconColor,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Ionicons
                name={selectedIcon as any}
                size={18}
                color="#FFFFFF"
              />
            </View>

            <Text
              style={{
                marginLeft: 10,
                fontSize: 14,
                fontWeight: '600',
                color: '#111827',
              }}
            >
              {name || 'Category Name'}
            </Text>
          </View>

          {/* Buttons */}

          <View
            style={{
              flexDirection: 'row',
              gap: 12,
            }}
          >
            <Pressable
              onPress={onClose}
              style={{
                flex: 1,
                height: 48,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: '#E5E7EB',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontWeight: '600',
                }}
              >
                Cancel
              </Text>
            </Pressable>

            <Pressable
                onPress={() => {
                    if (!name.trim()) return
                
                    onCreate(
                    name,
                    selectedIcon,
                    selectedColor.bgColor,
                    selectedColor.iconColor,
                    )
                
                    setName('')
                    setSelectedIcon('book-outline')
                    setSelectedColor(COLORS[0])
                }}
              style={{
                flex: 1,
                height: 48,
                borderRadius: 14,
                backgroundColor: '#2563EB',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: '#FFFFFF',
                  fontWeight: '700',
                }}
              >
                Create
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  )
}
