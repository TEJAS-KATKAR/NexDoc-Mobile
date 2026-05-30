import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const PdfCard = ({ pdf, viewMode }: any) => {

  if (viewMode === 'list') {
    return (
      <View style={{ width: '100%', paddingHorizontal: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderColor: '#e5e5e5' }}>

          <Image
            source={{ uri: pdf.image }}
            style={{ width: 70, height: 80, borderRadius: 8, backgroundColor: '#d0d0d0' }}
          />

          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: '700' }}>
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

        </View>
      </View>
    )
  }

  if (viewMode === 'grid2') {
    return (
      <View style={{ flex: 1, margin: 6, backgroundColor: '#f5f5f5', borderRadius: 12, padding: 10 }}>
        <View style={{ height: 120, backgroundColor: '#d0d0d0', borderRadius: 8 }} />

        <Text numberOfLines={2} style={{ fontSize: 14, fontWeight: '600', marginTop: 8 }}>
          {pdf.name}
        </Text>

        <Text style={{ fontSize: 12, color: '#888', marginTop: 4 }}>
          {pdf.date}
        </Text>
      </View>
    )
  }

  if (viewMode === 'grid3') {
    return (
      <View style={{ flex: 1, margin: 4, backgroundColor: '#f5f5f5', borderRadius: 10, padding: 8 }}>
        <View style={{ height: 80, backgroundColor: '#d0d0d0', borderRadius: 6 }} />

        <Text numberOfLines={1} style={{ fontSize: 12, fontWeight: '600', marginTop: 6 }}>
          {pdf.name}
        </Text>

        <Text style={{ fontSize: 10, color: '#888', marginTop: 2 }}>
          {pdf.date}
        </Text>
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