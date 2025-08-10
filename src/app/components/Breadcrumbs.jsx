'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Breadcrumbs() {
  const pathname = usePathname()
  
  // Don't show breadcrumbs on home page
  if (pathname === '/') return null
  
  const pathSegments = pathname.split('/').filter(Boolean)
  
  const breadcrumbs = [
    { name: 'Home', href: '/', icon: Home }
  ]
  
  // Build breadcrumb trail
  let currentPath = ''
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`
    
    // Convert segment to readable name
    let name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    
    // Custom names for specific routes
    const customNames = {
      'learning-center': 'Learning Center',
      'data-policy': 'Data Policy',
    }
    
    if (customNames[segment]) {
      name = customNames[segment]
    }
    
    breadcrumbs.push({
      name,
      href: currentPath,
      current: index === pathSegments.length - 1
    })
  })
  
  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200/60" aria-label="Breadcrumb">
      <div className="container">
        <ol className="flex items-center space-x-2 py-3 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mr-2" />
              )}
              {crumb.current ? (
                <span className="text-gray-900 font-medium flex items-center">
                  {crumb.icon && <crumb.icon className="w-4 h-4 mr-1" />}
                  {crumb.name}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors flex items-center"
                >
                  {crumb.icon && <crumb.icon className="w-4 h-4 mr-1" />}
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}