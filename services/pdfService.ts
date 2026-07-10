import * as DocumentPicker from 'expo-document-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY = 'local_pdfs'

export const pickPdf = async () => {
  try {
    const result =
      await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
        multiple: true,
        copyToCacheDirectory: true,
      })

    if (result.canceled) {
      return []
    }

    const newPdfs = result.assets.map(file => ({
      id: Date.now().toString() + Math.random(),
      name: file.name,
      uri: file.uri,
      size: file.size ?? 0,
      sizeBytes: file.size ?? 0,

      sizeText:
        file.size != null
          ? `${(file.size / 1024 / 1024).toFixed(2)} MB`
          : 'Unknown',

      image: null,

      date: new Date().toLocaleDateString(),

      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    }))

    const old =
      await loadPdfs()

    const updated = [...newPdfs, ...old]

    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updated)
    )

    return updated
  } catch (error) {
    console.log(error)
    return []
  }
}

export const loadPdfs = async () => {
  try {
    const data =
      await AsyncStorage.getItem(
        STORAGE_KEY
      )

    if (!data) return []

    return JSON.parse(data)
  } catch {
    return []
  }
}

export const deletePdf = async (
  id: string
) => {
  const pdfs =
    await loadPdfs()

  const updated = pdfs.filter(
    (item: any) => item.id !== id
  )

  await AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  )

  return updated
}