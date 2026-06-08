import React, { forwardRef, useMemo } from 'react'
import { Text, Image, Pressable, View } from 'react-native'
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const More = forwardRef(({ pdf }: any, ref: any) => {

  const snapPoints = useMemo(() => ['65%'], [])
  const renderBackdrop = (props: any) => (
    <BottomSheetBackdrop
      {...props}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      pressBehavior="close"
      opacity={0.4}
    />
  )
  

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
      backgroundStyle={{ backgroundColor: '#ffffff' }}
      handleIndicatorStyle={{ backgroundColor: '#999' }}
      enableOverDrag={false}
    >

      <BottomSheetView style={{ padding: 20 }}>
      <View style={{ flexDirection: 'row', paddingBottom: 20 , }}>
        <Image
        source={{ uri: pdf?.image }}
        style={{width: 60,height: 80,borderRadius: 12,backgroundColor: '#ddd'}}/>

            <View style={{ flex: 1, marginLeft: 12 }}>

                <Text numberOfLines={2} style={{ fontSize: 16, fontWeight: '700' }}>
                    {pdf?.name}
                </Text>

                <Text style={{ color: '#888', marginTop: 6 }}>
                    {pdf?.size} • {pdf?.date}
                </Text>
            </View>
        </View>

        <Pressable
            style={{
                height: 55,
                justifyContent: 'flex-start',
                borderBottomWidth: 1,
                borderColor: '#f1f1f1',
                flexDirection: 'row',
                gap: 12,
                alignItems: 'center',
            }}
            ><FontAwesome name="folder-open-o" size={26} color="black" />
            <Text style={{ fontSize: 18 }}>
                Open
            </Text>
            </Pressable>
            <Pressable
            style={{
                height: 55,
                justifyContent: 'flex-start',
                borderBottomWidth: 1,
                borderColor: '#f1f1f1',
                flexDirection: 'row',
                gap: 12,
                alignItems: 'center',
            }}
            ><MaterialIcons name="favorite" size={26} color="black" />
            <Text style={{ fontSize: 18 }}>
                Favorite
            </Text>
            </Pressable>
            <Pressable
            style={{
                height: 55,
                justifyContent: 'flex-start',
                borderBottomWidth: 1,
                borderColor: '#f1f1f1',
                flexDirection: 'row',
                gap: 12,
                alignItems: 'center',
            }}
            ><Entypo name="share" size={26} color="black" />
            <Text style={{ fontSize: 18 }}>
                Share
            </Text>
            </Pressable>
            <Pressable
            style={{
                height: 55,
                justifyContent: 'flex-start',
                borderBottomWidth: 1,
                borderColor: '#f1f1f1',
                flexDirection: 'row',
                gap: 12,
                alignItems: 'center',
            }}
            ><MaterialIcons name="drive-file-rename-outline" size={26} color="black" />
            <Text style={{ fontSize: 18 }}>
                Rename
            </Text>
            </Pressable>
            <Pressable
            style={{
                height: 55,
                justifyContent: 'flex-start',
                borderBottomWidth: 1,
                borderColor: '#f1f1f1',
                flexDirection: 'row',
                gap: 12,
                alignItems: 'center',
            }}
            ><Octicons name="duplicate" size={26} color="black" />
            <Text style={{ fontSize: 18 }}>
                Duplicate
            </Text>
            </Pressable>
            <Pressable
            style={{
                height: 55,
                justifyContent: 'flex-start',
                borderBottomWidth: 1,
                borderColor: '#f1f1f1',
                flexDirection: 'row',
                gap: 12,
                alignItems: 'center',
            }}
            ><MaterialCommunityIcons name="folder-move-outline" size={26} color="black" />
            <Text style={{ fontSize: 18 }}>
                Move 
            </Text>
            </Pressable>
            <Pressable
            style={{
                height: 55,
                justifyContent: 'flex-start',
                borderBottomWidth: 1,
                borderColor: '#f1f1f1',
                flexDirection: 'row',
                gap: 12,
                alignItems: 'center',
            }}
            ><MaterialIcons name="delete" size={26} color="black" />
            <Text style={{ fontSize: 18 }}>
                Delete
            </Text>
            </Pressable>
            
      </BottomSheetView>

    </BottomSheet>
  )
})

export default More