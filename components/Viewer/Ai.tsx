import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const cards = [
  {
    title: 'Summarize Chapter',
    subtitle: 'AI-generated summary',
    icon: 'file-document-outline',
    iconBg: '#EEF2FF',
    iconColor: '#6366F1',
  },
  {
    title: 'Chat with PDF',
    subtitle: 'RAG-powered Q&A',
    icon: 'chat-processing-outline',
    iconBg: '#F3F0FF',
    iconColor: '#8B5CF6',
    badge: 'New',
  },
  {
    title: 'Explain Selection',
    subtitle: 'Understand any text',
    icon: 'text-box-search-outline',
    iconBg: '#EEF2FF',
    iconColor: '#6366F1',
  },
  {
    title: 'Extract Key Points',
    subtitle: 'Bullet-point insights',
    icon: 'format-list-bulleted',
    iconBg: '#EEF2FF',
    iconColor: '#6366F1',
  },
];

export default function Ai() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        padding: 16,
        paddingBottom: 120,
      }}
      style={{
        flex: 1,
        backgroundColor: '#F8F9FC',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 18,
        }}
      >
        <View
          style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            backgroundColor: '#EEF2FF',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
          }}
        >
          <MaterialCommunityIcons
            name="star-four-points-outline"
            size={18}
            color="#6366F1"
          />
        </View>

        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              color: '#111827',
            }}
          >
            AI Assistant
          </Text>

          <Text
            style={{
              fontSize: 11,
              color: '#9CA3AF',
              marginTop: 2,
            }}
          >
            Powered by Gemini
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#6366F1',
            paddingHorizontal: 8,
            paddingVertical: 3,
            borderRadius: 999,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 9,
              fontWeight: '700',
            }}
          >
            Beta
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {cards.map((item) => (
          <Pressable
            key={item.title}
            android_ripple={{ color: '#E5E7EB' }}
            style={({ pressed }) => ({
              width: '48%',
              backgroundColor: '#FFFFFF',
              borderRadius: 16,
              borderWidth: 1,
              borderColor: '#E8ECF3',
              padding: 12,
              marginBottom: 12,
              opacity: pressed ? 0.8 : 1,
            })}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 10,
                  backgroundColor: item.iconBg,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                }}
              >
                <MaterialCommunityIcons
                  name1={item.icon}
                  size={16}
                  color={item.iconColor}
                />
              </View>

              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    numberOfLines={1}
                    style={{
                      flex: 1,
                      fontSize: 11,
                      fontWeight: '700',
                      color: '#111827',
                    }}
                  >
                    {item.title}
                  </Text>

                  {item.badge && (
                    <View
                      style={{
                        backgroundColor: '#EEF2FF',
                        paddingHorizontal: 6,
                        paddingVertical: 2,
                        borderRadius: 999,
                      }}
                    >
                      <Text
                        style={{
                          color: '#6366F1',
                          fontSize: 8,
                          fontWeight: '700',
                        }}
                      >
                        {item.badge}
                      </Text>
                    </View>
                  )}
                </View>

                <Text
                  style={{
                    marginTop: 4,
                    fontSize: 10,
                    color: '#9CA3AF',
                    lineHeight: 14,
                  }}
                >
                  {item.subtitle}
                </Text>
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}