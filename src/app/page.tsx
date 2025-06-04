'use client'

import Header from '@/components/sections/Header'
import HeroSection from '@/components/sections/HeroSection'
import SkillsSection from '@/components/sections/SkillsSection'
import PortfolioShowcase from '@/components/sections/PortfolioShowcase'
import NewsletterSection from '@/components/sections/NewsletterSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <SkillsSection />
      <PortfolioShowcase />
      <NewsletterSection />
      <CTASection />
    </div>
  )
}
