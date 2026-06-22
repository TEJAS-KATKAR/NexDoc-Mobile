import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native'
import React from 'react'
import { useState, useRef } from 'react'

const { width } = Dimensions.get('window')

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const animatedIndex = useRef(new Animated.Value(0)).current

  const bannerWidth = width * 0.62
  const spacing = 10

  const banners = [
    {
      id: 1,
      type: 'continue',
      title: 'Continue Reading',
      pdf: 'Machine Learning\nFundamentals',
      subtitle: 'Chapter 3 • pg 47',
      progress: 42,
      color: '#111111',
    },

    {
      id: 2,
      type: 'new',
      title: 'New Arrival',
      pdf: 'Web Accessibility\nGuide',
      subtitle: 'Just added',
      color: '#1A1A1A',
    },

    {
      id: 3,
      type: 'new',
      title: 'See More-->',
      pdf: 'More features',
      subtitle: '',
      color: '#1F1F1F',
    },
  ]

  const snapOffsets = banners.map(
    (_, i) => i * (bannerWidth + spacing)
  )

  const handleScrollEnd = (event: any) => {
    const scrollX = event.nativeEvent.contentOffset.x

    const index = Math.round(
      scrollX / (bannerWidth + spacing)
    )

    const clamped = Math.max(
      0,
      Math.min(index, banners.length - 1)
    )

    setActiveIndex(clamped)

    Animated.spring(animatedIndex, {
      toValue: clamped,
      useNativeDriver: false,
    }).start()
  }

  return (
    <View
      style={{
        marginTop: 8,
        marginBottom: 16,
      }}
    >
      {/* Welcome */}

      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: 12,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: '800',
            color: '#111827',
          }}
        >
          Welcome Back!
        </Text>

        <Text
          style={{
            fontSize: 13,
            color: '#9CA3AF',
            marginTop: 2,
          }}
        >
          51 documents · 3 new today
        </Text>
      </View>

      {/* Slider */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToOffsets={snapOffsets}
        contentContainerStyle={{
          paddingLeft: 30,
          paddingRight: 60,
        }}
        onMomentumScrollEnd={handleScrollEnd}
      >
        {banners.map((item) => (
          <View
            key={item.id}
            style={{
              width: bannerWidth,
              height: 152,
              backgroundColor: item.color,
              borderRadius: 18,
              marginRight: spacing,
              padding: 12,
              justifyContent: 'space-between',
            }}
          >
            {/* Thumbnail */}

            <View
              style={{
                position: 'absolute',
                right: 30,
                top: 10,
                width: 92,
                height: 102,
                borderRadius: 12,
                backgroundColor: '#FFFFFF12',
                borderWidth: 1,
                borderColor: '#FFFFFF15',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: '#8A8A8A',
                  fontSize: 18,
                }}
              >
                📄
              </Text>
            </View>

            <View style={{marginTop:10}}>
              <Text
              
                style={{
                  color: '#B9C6FF',
                  fontSize: 12,
                  fontWeight: '500',
                }}
              >
                {item.title}
              </Text>

              <Text
              numberOfLines={2}
                style={{
                  color: '#FFFFFF',
                  fontSize: 13,
                  fontWeight: '700',
                  marginTop: 3,
                  lineHeight: 17,
                }}
              >
                {item.pdf}
              </Text>

              <Text
                style={{
                  color: '#A1A1AA',
                  fontSize: 10,
                  marginTop: 2,
                }}
              >
                {item.subtitle}
              </Text>
            </View>

            {/* Progress only for continue */}

            {item.type === 'continue' && (
              <View>
                <View
                  style={{
                    height: 3,
                    backgroundColor: '#2D2D2D',
                    borderRadius: 999,
                    overflow: 'hidden',
                  }}
                > 
                  
                  <View
                    style={{
                      width: `${item.progress}%`,
                      height: '100%',
                      backgroundColor: '#FFFFFF',
                    }}
                  />
                </View>

                <Text
                  style={{
                    color: '#A1A1AA',
                    fontSize: 9,
                    textAlign: 'right',
                    marginTop: 2,
                  }}
                >
                  {item.progress}%
                </Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>

      {/* Dots */}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 10,
        }}
      >
        {banners.map((_, index) => {
          const dotWidth =
            animatedIndex.interpolate({
              inputRange: [
                index - 1,
                index,
                index + 1,
              ],
              outputRange: [8, 18, 8],
              extrapolate: 'clamp',
            })

          const dotColor =
            animatedIndex.interpolate({
              inputRange: [
                index - 1,
                index,
                index + 1,
              ],
              outputRange: [
                '#D4D4D8',
                '#111111',
                '#D4D4D8',
              ],
              extrapolate: 'clamp',
            })

          return (
            <Animated.View
              key={index}
              style={{
                width: dotWidth,
                height: 8,
                borderRadius: 999,
                marginHorizontal: 3,
                backgroundColor: dotColor,
              }}
            />
          )
        })}
      </View>
    </View>
  )
}

export default Hero

const styles = StyleSheet.create({})