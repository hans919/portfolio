import { createContext, useContext, useState, ReactNode } from 'react'
import initialData from '../data/portfolioData.json'

interface Tech {
  name: string
  icon: string
  category: string
}

interface Project {
  title: string
  description: string
  link: string
  image: string
}

interface ExperienceItem {
  title: string
  company: string
  period: string
  type: 'work' | 'education'
}

interface Certification {
  title: string
  description: string
  link: string
}

interface PersonalInfo {
  name: string
  email: string
  profilePicture: string
  resumePdf: string
  facebook: string
  github: string
}

interface AboutData {
  mainText: string
  expandedText: string
  expertise: string[]
}

interface PortfolioData {
  personalInfo: PersonalInfo
  about: AboutData
  projects: Project[]
  experience: ExperienceItem[]
  certifications: Certification[]
  techStack: Tech[]
}

interface DataContextType {
  data: PortfolioData
  updatePersonalInfo: (personalInfo: PersonalInfo) => void
  updateAbout: (about: AboutData) => void
  updateProjects: (projects: Project[]) => void
  updateExperience: (experience: ExperienceItem[]) => void
  updateCertifications: (certifications: Certification[]) => void
  updateTechStack: (techStack: Tech[]) => void
}

const DataContext = createContext<DataContextType | undefined>(undefined)

const getInitialData = (): PortfolioData => {
  try {
    const savedData = localStorage.getItem('portfolioData')
    if (savedData) {
      return JSON.parse(savedData)
    }
  } catch (error) {
    console.error('Error loading saved data:', error)
  }
  return initialData as PortfolioData
}

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<PortfolioData>(getInitialData)

  const updatePersonalInfo = (personalInfo: PersonalInfo) => {
    setData((prevData) => {
      const newData = { ...prevData, personalInfo }
      localStorage.setItem('portfolioData', JSON.stringify(newData))
      console.log('Personal info updated')
      return newData
    })
  }

  const updateAbout = (about: AboutData) => {
    setData((prevData) => {
      const newData = { ...prevData, about }
      localStorage.setItem('portfolioData', JSON.stringify(newData))
      return newData
    })
  }

  const updateProjects = (projects: Project[]) => {
    setData((prevData) => {
      const newData = { ...prevData, projects }
      localStorage.setItem('portfolioData', JSON.stringify(newData))
      return newData
    })
  }

  const updateExperience = (experience: ExperienceItem[]) => {
    setData((prevData) => {
      const newData = { ...prevData, experience }
      localStorage.setItem('portfolioData', JSON.stringify(newData))
      return newData
    })
  }

  const updateCertifications = (certifications: Certification[]) => {
    setData((prevData) => {
      const newData = { ...prevData, certifications }
      localStorage.setItem('portfolioData', JSON.stringify(newData))
      return newData
    })
  }

  const updateTechStack = (techStack: Tech[]) => {
    setData((prevData) => {
      const newData = { ...prevData, techStack }
      localStorage.setItem('portfolioData', JSON.stringify(newData))
      return newData
    })
  }

  return (
    <DataContext.Provider
      value={{
        data,
        updatePersonalInfo,
        updateAbout,
        updateProjects,
        updateExperience,
        updateCertifications,
        updateTechStack
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within DataProvider')
  }
  return context
}
