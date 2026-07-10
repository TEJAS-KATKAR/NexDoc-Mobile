import { View, Text, FlatList, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import CategoryModal from './CategoryModal'
import NewCategory from './NewCategory'
import HoldCategory from './HoldCategory'


export default function Categories( {
  onPdfAdded,
    }: any) {

    const [categories, setCategories] = useState([
      {
        id: '1',
        name: 'Books',
        icon: 'book-outline',
        bgColor: '#EEF4FF',
        iconColor: '#5B8DEF',
      },
      {
        id: '2',
        name: 'College',
        icon: 'school-outline',
        bgColor: '#F4EEFF',
        iconColor: '#8B6BFF',
      },
      {
        id: '3',
        name: 'Work',
        icon: 'briefcase-outline',
        bgColor: '#EEFFF6',
        iconColor: '#34B27B',
      },
      {
        id: '4',
        name: 'Finance',
        icon: 'wallet-outline',
        bgColor: '#FFF6EA',
        iconColor: '#F0A53A',
      },
    ])
    const [selectedCategory, setSelectedCategory] =
  useState<string | null>(null)

  const [showCategory, setShowCategory] = useState(false)
  const [activeCategory, setActiveCategory] = useState<any>(null)
  const [showNewCategory, setShowNewCategory] = useState(false)
  const [showHoldMenu, setShowHoldMenu] = useState(false)

  const handleCreateCategory = (
    name: string,
    icon: string,
    bgColor: string,
    iconColor: string,
  ) => {
    setCategories(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        name,
        icon,
        bgColor,
        iconColor,
      },
    ])
  
    setShowNewCategory(false)
  }

  const handleColorChange = (
    categoryId: string,
    bgColor: string,
    iconColor: string,
  ) => {
    setCategories(prev =>
      prev.map(category =>
        category.id === categoryId
          ? {
              ...category,
              bgColor,
              iconColor,
            }
          : category
      )
    )
  
    setActiveCategory((prev: any) =>
      prev
        ? {
            ...prev,
            bgColor,
            iconColor,
          }
        : prev
    )
  }

  const handleMoveToFirst = () => {
    if (!activeCategory) return
  
    setCategories(prev => {
      const selected = prev.find(
        category =>
          category.id === activeCategory.id
      )
  
      if (!selected) return prev
  
      const remaining = prev.filter(
        category =>
          category.id !== activeCategory.id
      )
  
      return [selected, ...remaining]
    })
  
    setShowHoldMenu(false)
  }
  
  const handleDelete = () => {
    if (!activeCategory) return
  
    setCategories(prev =>
      prev.filter(
        category =>
          category.id !== activeCategory.id
      )
    )
  
    setShowHoldMenu(false)
  }

  const handleRename = (newName: string) => {
    if (!activeCategory) return
  
    setCategories(prev =>
      prev.map(category =>
        category.id === activeCategory.id
          ? {
              ...category,
              name: newName,
            }
          : category
      )
    )
  
    setActiveCategory((prev: any) =>
      prev
        ? {
            ...prev,
            name: newName,
          }
        : prev
    )
  
    setShowHoldMenu(false)
  }
  
  const handleChangeIcon = (newIcon: string) => {
    if (!activeCategory) return
  
    setCategories(prev =>
      prev.map(category =>
        category.id === activeCategory.id
          ? {
              ...category,
              icon: newIcon,
            }
          : category
      )
    )
  
    setActiveCategory((prev: any) =>
      prev
        ? {
            ...prev,
            icon: newIcon,
          }
        : prev
    )
  
    setShowHoldMenu(false)
  }

  return (
    <View
        style={{
            marginBottom: 24,
            marginLeft: 20,
        }}
        >

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 12,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: '#111827',
          }}
        >
          Categories
        </Text>
      </View>

      <FlatList
        horizontal
        data={[
          ...categories,
          {
            id: 'add',
            name: 'New',
            icon: 'add',
            bgColor: '#FFFFFF',
            iconColor: '#EEF2FF',
          },
        ]}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          
        }}
        
        renderItem={({ item }) => {
          const isAdd = item.id === 'add'
 
          return (
            <Pressable
              onPress={() => {
                if (isAdd) {
                  setShowNewCategory(true)
                  return
                }
              
                setActiveCategory(item)
                setShowCategory(true)
              }}
              onLongPress={() => {
                if (!isAdd) {
                  setActiveCategory(item)
                  setShowHoldMenu(true)
                }
              }}
              style={{
                height: 56,
                minWidth: 140,
                backgroundColor: isAdd
                    ? '#FFFFFF'
                    : item.bgColor,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: isAdd
                    ? '#D8DCE6'
                    : '#E5E7EB',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 12,
                marginRight: 10,
                shadowColor: '#000',
                shadowOpacity: 0.04,
                shadowRadius: 6,
                shadowOffset: { width: 0, height: 2 },
                elevation:1,
                
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 999,
                  backgroundColor: isAdd
                    ? '#EEF2FF'
                    : item.iconColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Ionicons
                  name={item.icon as any}
                  size={20}
                  color={
                    isAdd
                      ? '#6366F1'
                      : '#FFFFFF'
                  }
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
                {item.name}
              </Text>
              
            </Pressable>
          )
        }}
      />
      <CategoryModal
        visible={showCategory}
        category={activeCategory}
        onClose={() => setShowCategory(false)}
        onColorChange={handleColorChange}
        onPdfAdded={onPdfAdded}
      />
      <NewCategory
        visible={showNewCategory}
        onClose={() => setShowNewCategory(false)}
        onCreate={handleCreateCategory}
      />
      <HoldCategory
        visible={showHoldMenu}
        onClose={() => setShowHoldMenu(false)}
        onRename={handleRename}
        onChangeIcon={handleChangeIcon}
        onMoveToFirst={handleMoveToFirst}
        onDelete={handleDelete}
      />
    </View>
  )
}