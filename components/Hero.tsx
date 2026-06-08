import { StyleSheet, Text, View, ScrollView, Dimensions, Animated, } from 'react-native'
import React from 'react'
import { useState, useRef } from 'react'; 
const { width } = Dimensions.get('window');

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const animatedIndex = useRef(new Animated.Value(0)).current

  const bannerWidth = width * 0.70
  const spacing = 10
  const sidePadding = (width - bannerWidth) / 6

  const banners = [
    { id: 1, title: 'Continue', subtitle: 'Continue reading your last opened PDF', color: '#111111' },

    { id: 2, title: 'Newest', subtitle: 'Recently added PDFs and documents', color: '#1d1d1d' },

    { id: 3, title: 'More', subtitle: 'Explore more PDF tools and features', color: '#2a2a2a' },
  ]

  const snapOffsets = banners.map((_, i) => i * (bannerWidth + spacing * 2))

  const handleScrollEnd = (event: any) => {

    const scrollX = event.nativeEvent.contentOffset.x

    const index = Math.round(scrollX / (bannerWidth + spacing * 2))

    const clamped = Math.max(0, Math.min(index, banners.length - 1))

    setActiveIndex(clamped)

    Animated.spring(animatedIndex, {
      toValue: clamped,
      useNativeDriver: false,
      speed: 20,
      bounciness: 6,
    }).start()
  }


  return (
    <View style={{ marginBottom: 40 }}>
        <View style={{backgroundColor: '#ffffff', height: 50, width: '100%',justifyContent: 'center', }}>
        <Text style={{color: '#000', fontSize: 32, fontWeight: 'bold', paddingLeft: 20}}>Welcome, Back!</Text>
        </View>

        <View style={{ height: 210, marginTop: 20 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          snapToOffsets={snapOffsets}
          contentContainerStyle={{ paddingHorizontal: sidePadding, alignItems: 'center' }}
          onMomentumScrollEnd={handleScrollEnd}
          scrollEventThrottle={16}
        >

          {banners.map((item, index) => (

            <View
              key={index}
              style={{ width: bannerWidth, height: 170, marginHorizontal: spacing, borderRadius: 28, backgroundColor: item.color, padding: 22, justifyContent: 'flex-end', shadowColor: '#000', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.18, shadowRadius: 16, elevation: 10 }}
            >

              <View style={{ position: 'absolute', top: 18, right: 18, width: 70, height: 90, borderRadius: 12, backgroundColor: '#ffffff15', borderWidth: 1, borderColor: '#ffffff20' }} />

              <Text style={{ color: '#fff', fontSize: 26, fontWeight: '800', marginBottom: 10 }}>
                {item.title}
                <Text style={{ color: '#888' }}> --{'>'}</Text>
              </Text>

              <Text style={{ color: '#d1d1d1', fontSize: 11, lineHeight: 22 }}>
                {item.subtitle}
              </Text>

            </View>

          ))}

        </ScrollView>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>

        {banners.map((_, index) => {

          const dotWidth = animatedIndex.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [8, 24, 8],
            extrapolate: 'clamp',
          })

          const dotColor = animatedIndex.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: ['#d4d4d4', '#111', '#d4d4d4'],
            extrapolate: 'clamp',
          })

          return (
            <Animated.View
              key={index}
              style={{ width: dotWidth, height: 8, borderRadius: 4, marginHorizontal: 4, backgroundColor: dotColor }}
            />
          )
        })}

      </View>

    </View>
  )
}

export default Hero

const styles = StyleSheet.create({})