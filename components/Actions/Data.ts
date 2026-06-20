import { Ionicons } from '@expo/vector-icons'

export const FEATURED = [
  {
    title: 'AI Summary',
    desc: 'Instant AI-generated summaries',
    tag: 'AI',
    color: '#6366F1',
    icon: 'sparkles',
  },
  {
    title: 'Chat with PDF',
    desc: 'Ask questions about any document',
    tag: 'RAG',
    color: '#059669',
    icon: 'chatbubble-ellipses',
  },
]


export const TOOL_SECTIONS = [
  {
    title: 'Create & Convert',
    tools: [
      {
        icon: 'camera',
        label: 'Scan Document',
        desc: 'Camera to PDF',
      },
      {
        icon: 'image',
        label: 'Image to PDF',
        desc: 'JPG, PNG → PDF',
      },
      {
        icon: 'document',
        label: 'PDF to Image',
        desc: 'Export pages as images',
      },
      {
        icon: 'scan',
        label: 'OCR Scanner',
        desc: 'Recognize text from images',
        hot: true,
      },
    ],
  },
  {
    title: 'Organize',
    tools: [
      {
        icon: 'git-merge',
        label: 'Merge PDF',
        desc: 'Combine multiple PDFs',
      },
      {
        icon: 'cut',
        label: 'Split PDF',
        desc: 'Split into separate files',
      },
      {
        icon: 'swap-vertical',
        label: 'Reorder Pages',
        desc: 'Rearrange page order',
      },
      {
        icon: 'trash',
        label: 'Delete Pages',
        desc: 'Remove unwanted pages',
      },
    ],
  },
  {
    title: 'Optimize',
    tools: [
      {
        icon: 'archive',
        label: 'Compress PDF',
        desc: 'Reduce file size',
        hot: true,
      },
      {
        icon: 'lock-closed',
        label: 'Protect PDF',
        desc: 'Add password protection',
      },
      {
        icon: 'lock-open',
        label: 'Unlock PDF',
        desc: 'Remove password lock',
      },
      {
        icon: 'text',
        label: 'Extract Text',
        desc: 'Pull text from PDF',
      },
    ],
  },
]

export const RECENT_ACTIVITY = [
  {
    icon: 'archive',
    action: 'Compressed',
    file: 'Web Accessibility.pdf',
    result: '3.5 MB → 1.2 MB',
    time: '2h ago',
  },
  {
    icon: 'git-merge',
    action: 'Merged',
    file: 'Report + Slides.pdf',
    result: '2 files combined',
    time: 'Yesterday',
  },
  {
    icon: 'cut',
    action: 'Split',
    file: 'HTML5 Guide.pdf',
    result: '8 pages → 3 files',
    time: '2 days ago',
  },
]