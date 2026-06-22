import { StyleSheet, Text, View, Image, Pressable} from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const PdfCard = ({ pdf, viewMode, onMorePress }: any) => {
  if (pdf.filler) {
    return <View style={{ flex: 1, margin: 4 }} />
  }

  if (viewMode === 'list') {
    return (
      <Pressable
          onPress={() => router.push({
            pathname: '/viewer',
            params: {
              name: pdf.name,
            },
          })}
          style={{ width: '100%', paddingHorizontal: 14 }}
        >
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderColor: '#e5e5e5' }}>

          <Image
            source={{ uri: pdf.image }}
            style={{ width: 68, height:78, borderRadius: 8, backgroundColor: '#d0d0d0' }}
          />

          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text  ellipsizeMode="middle" style={{ fontSize: 15, fontWeight: '700' }}>
              {pdf.name}
            </Text>

            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Text style={{ fontSize: 12, color: '#888', marginRight: 10 }}>
                {pdf.size}
              </Text>

              <Text style={{ fontSize: 12, color: '#888', marginRight: 10 }}>
                {pdf.date}
              </Text>

              <Text style={{ fontSize: 12, color: '#888' }}>
                {pdf.time}
              </Text>
            </View>
          </View>

          <Pressable
            onPress={() => onMorePress(pdf)}
            style={{ position: 'absolute', top: 10, right: 10, padding: 6, justifyContent:'center',alignItems:'center', width:30, height:80, }}
          >
            <Text style={{ fontSize: 28, color: '#666', }}>⋮</Text>
          </Pressable>

        </View>
        
      </Pressable>
    )
  }

  if (viewMode === 'grid2') {
    return (
      <Pressable
          onPress={() => router.push({
            pathname: '/viewer',
            params: {
              name: pdf.name,
            },
          })}
          style={{ flex:1, margin: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', borderRadius: 4, padding: 8, borderWidth: 1, borderColor: '#e5e5e5' }}
        >
          <View style={{ width: '100%',  }}>
              <View style={{ width: '100%', height: 180, borderRadius: 10, overflow: 'hidden', }}>
              <Pressable
                onPress={() => onMorePress(pdf)}
                style={{ position: 'absolute', top: -5, right: 0, padding: 6, justifyContent:'flex-start',alignItems:'center', width:40, height:60,zIndex:999 }}
              >
                <Text style={{ fontSize: 32, color: '#2c2c2c', }}>⋮</Text>
              </Pressable>
                <Image
                  source={{ uri: pdf.image }}
                  style={{ width: '100%', height: '100%', borderRadius: 6, backgroundColor: '#d0d0d0' }}
                  resizeMode='cover'
                />
              </View>
              <View style={{ marginTop: 4, marginHorizontal: 2 }}>
                <Text numberOfLines={1} ellipsizeMode="middle" style={{ fontSize: 16, fontWeight: '600', marginTop: 6,flexShrink: 1 }}>
                  {pdf.name}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 4, gap: 8, marginLeft: 2 }}>
              <Text numberOfLines={1} style={{ fontSize: 12, color: '#888' }}>
                  {pdf.size}
                </Text>
                <Text numberOfLines={1} style={{ fontSize: 12 , color: '#888' }}>
                  {pdf.date}
                </Text>
                <Text numberOfLines={1} style={{ fontSize: 12, color: '#888', }}>
                  {pdf.time}
                </Text>
              </View>
        </View>
      </Pressable>
    )
  }

  if (viewMode === 'grid3') {
    return (
      <View style={{ flex:1, margin: 2,justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', borderRadius: 4, padding: 8, borderWidth: 1, borderColor: '#e5e5e5' }}>
      <View style={{ width: '100%',  }}>
            <View style={{ width: '100%', height: 120, borderRadius: 10, overflow: 'hidden', }}>
              <Image
                source={{ uri: pdf.image }}
                style={{ width: '100%', height: '100%', borderRadius: 6, backgroundColor: '#d0d0d0' }}
                resizeMode='cover'
              />
            </View>
            <View style={{ marginTop: 4, marginHorizontal: 2 }}>
              <Text numberOfLines={1} ellipsizeMode="middle" style={{ fontSize: 16, fontWeight: '600', marginTop: 6 }}>
                {pdf.name}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 4, gap: 8, marginLeft: 2 }}>
            <Text numberOfLines={1} style={{ fontSize: 12, color: '#888' }}>
                {pdf.size}
              </Text>
              <Text numberOfLines={1} style={{ fontSize: 12 , color: '#888' }}>
                {pdf.date}
              </Text>
            </View>
      </View>
    </View>
    )
  }
  if (viewMode === 'grid4') {
    return (
      <View style={{ flex:1, margin: 2,justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', borderRadius: 4, padding: 8, borderWidth: 1, borderColor: '#e5e5e5' }}>
      <View style={{ width: '100%',  }}>
            <View style={{ width: '100%', height: 90, borderRadius: 10, overflow: 'hidden', }}>
              <Image
                source={{ uri: pdf.image }}
                style={{ width: '100%', height: '100%', borderRadius: 6, backgroundColor: '#d0d0d0' }}
                resizeMode='cover'
              />
            </View>
            <View style={{ marginTop: 4, marginHorizontal: 3 }}>
              <Text numberOfLines={1} ellipsizeMode="middle" style={{ fontSize: 12, fontWeight: '600', marginTop: 2 }}>
                {pdf.name}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 2, gap: 6, paddingHorizontal: 2, }}>
            <Text numberOfLines={1} style={{ fontSize: 10, color: '#888' ,  }}>
                {pdf.date}
              </Text>
              <Text numberOfLines={1} style={{ fontSize: 10 , color: '#888',flexShrink: 1 }}>
                {pdf.time}
              </Text>
            </View>
      </View>
    </View>
    )
  }

  return (
    <View style={{ flex: 1, margin: 3, backgroundColor: '#f5f5f5', borderRadius: 8, padding: 6 }}>
      <View style={{ height: 50, backgroundColor: '#d0d0d0', borderRadius: 4 }} />

      <Text numberOfLines={1} style={{ fontSize: 10, marginTop: 4 }}>
        {pdf.name}
      </Text>
    </View>
  )
}

export default PdfCard

const styles = StyleSheet.create({})