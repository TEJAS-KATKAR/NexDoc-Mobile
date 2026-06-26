import React, {
    createContext,
    useContext,
    useEffect,
    useState,
  } from 'react'
  import AsyncStorage from '@react-native-async-storage/async-storage'
  
  const SettingsContext = createContext<any>(null)

  export const THEMES = {
    light: {
      background: '#FFFFFF',
      surface: '#F8F9FC',
      card: '#FFFFFF',
  
      text: '#111827',
      secondaryText: '#6B7280',
  
      border: '#E5E7EB',
  
      accent: '#6366F1',
  
      hero: '#111111',
  
      chip: '#F3F4F6',
      chipActive: '#E5E7EB',
  
      navBackground: '#FFFFFF',
      navActive: '#6366F1',
      navInactive: '#9CA3AF',
    },
  
    dark: {
      background: '#1E1E1E',
      surface: '#252526',
      card: '#2D2D30',
  
      text: '#FFFFFF',
      secondaryText: '#A1A1AA',
  
      border: '#3A3A3A',
  
      accent: '#6366F1',
  
      hero: '#252526',
  
      chip: '#2D2D30',
      chipActive: '#3A3A3D',
  
      navBackground: '#1E1E1E',
      navActive: '#6366F1',
      navInactive: '#9CA3AF',
    },
  
    amoled: {
      background: '#000000',
      surface: '#111111',
      card: '#161616',
  
      text: '#FFFFFF',
      secondaryText: '#A1A1AA',
  
      border: '#262626',
  
      accent: '#6366F1',
  
      hero: '#111111',
  
      chip: '#161616',
      chipActive: '#262626',
  
      navBackground: '#000000',
      navActive: '#6366F1',
      navInactive: '#9CA3AF',
    },
  
    ocean: {
      background: '#F4F8FF',
      surface: '#FFFFFF',
      card: '#FFFFFF',
  
      text: '#1E3A5F',
      secondaryText: '#64748B',
  
      border: '#D6E4FF',
  
      accent: '#60A5FA',
  
      hero: '#2C5282',
  
      chip: '#E8F2FF',
      chipActive: '#CFE4FF',
  
      navBackground: '#FFFFFF',
      navActive: '#60A5FA',
      navInactive: '#94A3B8',
    },
  
    forest: {
      background: '#F5FBF7',
      surface: '#FFFFFF',
      card: '#FFFFFF',
  
      text: '#1F3B2F',
      secondaryText: '#5B6B63',
  
      border: '#D8E8DE',
  
      accent: '#34B27B',
  
      hero: '#256D4A',
  
      chip: '#EAF8F0',
      chipActive: '#D2F1E0',
  
      navBackground: '#FFFFFF',
      navActive: '#34B27B',
      navInactive: '#94A3B8',
    },
  
    royalPurple: {
      background: '#F8F5FF',
      surface: '#FFFFFF',
      card: '#FFFFFF',
  
      text: '#3B246B',
      secondaryText: '#6B5C8A',
  
      border: '#E7DFFF',
  
      accent: '#8B5CF6',
  
      hero: '#5B3AA8',
  
      chip: '#F1EBFF',
      chipActive: '#E5DBFF',
  
      navBackground: '#FFFFFF',
      navActive: '#8B5CF6',
      navInactive: '#94A3B8',
    },
  
    sunsetGold: {
      background: '#FFF9F1',
      surface: '#FFFFFF',
      card: '#FFFFFF',
  
      text: '#5C3B00',
      secondaryText: '#8B6B3E',
  
      border: '#FFE7B8',
  
      accent: '#F59E0B',
  
      hero: '#B7791F',
  
      chip: '#FFF3DB',
      chipActive: '#FFE7B8',
  
      navBackground: '#FFFFFF',
      navActive: '#F59E0B',
      navInactive: '#94A3B8',
    },
  
    graphite: {
      background: '#F3F4F6',
      surface: '#FFFFFF',
      card: '#FFFFFF',
  
      text: '#1F2937',
      secondaryText: '#6B7280',
  
      border: '#D1D5DB',
  
      accent: '#4B5563',
  
      hero: '#374151',
  
      chip: '#E5E7EB',
      chipActive: '#D1D5DB',
  
      navBackground: '#FFFFFF',
      navActive: '#4B5563',
      navInactive: '#9CA3AF',
    },
  }
  
  export function SettingsProvider({
    children,
  }: {
    children: React.ReactNode
  }) {
    const [showCategories, setShowCategories] =
      useState(true)
  
    const [showHero, setShowHero] =
      useState(true)
    
    const [theme, setTheme] =
      useState('light')
  
    useEffect(() => {
      const loadSettings = async () => {
        const savedCategories =
          await AsyncStorage.getItem(
            'showCategories'
          )
  
        const savedHero =
          await AsyncStorage.getItem(
            'showHero'
          )

        const savedTheme =
          await AsyncStorage.getItem(
            'theme'
          )
  
        if (savedCategories !== null) {
          setShowCategories(
            JSON.parse(savedCategories)
          )
        }
  
        if (savedHero !== null) {
          setShowHero(
            JSON.parse(savedHero)
          )
        }

        if (savedTheme) {
            setTheme(savedTheme)
          }
      }
  
      loadSettings()
    }, [])
  
    const toggleCategories = async (
      value: boolean
    ) => {
      setShowCategories(value)
  
      await AsyncStorage.setItem(
        'showCategories',
        JSON.stringify(value)
      )
    }
  
    const toggleHero = async (
      value: boolean
    ) => {
      setShowHero(value)
  
      await AsyncStorage.setItem(
        'showHero',
        JSON.stringify(value)
      )
    }

    const changeTheme = async (
        value: string
      ) => {
        setTheme(value)
      
        await AsyncStorage.setItem(
          'theme',
          value
        )
      }
  
    return (
      <SettingsContext.Provider
        value={{
          showCategories,
          toggleCategories,
          showHero,
          toggleHero,
          theme,
          changeTheme,
        }}
      >
        {children}
      </SettingsContext.Provider>
    )
  }
  
  export const useSettings = () =>
    useContext(SettingsContext)