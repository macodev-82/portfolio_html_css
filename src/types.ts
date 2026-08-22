export type Language = 'es' | 'en';
export type Theme = 'light' | 'dark';

export interface ProjectMetric {
  label: { es: string; en: string };
  value: string;
}

export interface ProjectCodeSnippet {
  title: string;
  language: string;
  code: string;
}

export interface ProjectMockup {
  headerTag: string;
  title: string;
  stats?: { label: string; value: string }[];
  elements: { title: string; subtitle: string; tag: string; active?: boolean }[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  badge: { es: string; en: string };
  status: { es: string; en: string };
  accessType: 'private' | 'public' | 'lab';
  category: 'fullstack' | 'backend' | 'learning' | 'lab';
  tagline: { es: string; en: string };
  summary: { es: string; en: string };
  challenge: { es: string; en: string };
  solution: { es: string; en: string };
  architectureNotes: { es: string; en: string };
  keyDeliverables: { es: string[]; en: string[] };
  technologies: string[];
  metrics: ProjectMetric[];
  codeSnippet?: ProjectCodeSnippet;
  mockup: ProjectMockup;
  demoType: 'media_library' | 'exercise_checker' | 'file_explorer';
}

export interface ServiceItem {
  id: string;
  number: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  deliverables: { es: string[]; en: string[] };
  scopeBadge: { es: string; en: string };
  iconName: string;
}

export interface CapabilityItem {
  number: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  tags: string[];
}

export interface ProcessItem {
  number: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  iconName: string;
  deliverable: { es: string; en: string };
}

export interface JourneyItem {
  number: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  keyAspects: string[];
}

export interface ToolItem {
  name: string;
  category: string;
  badge?: string;
  role: { es: string; en: string };
}

export interface ToolkitCategory {
  id: string;
  number: string;
  title: { es: string; en: string };
  subtitle: { es: string; en: string };
  tools: ToolItem[];
}

export interface PrincipleItem {
  key: string;
  value: { es: string; en: string };
  description: { es: string; en: string };
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'project' | 'availability' | 'tech' | 'message';
  link?: string;
}

export interface NotificationPreferences {
  browserPushGranted: boolean;
  projectUpdates: boolean;
  availabilityAlerts: boolean;
  technicalArticles: boolean;
}

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
}
