import React from 'react'
import Head from 'next/head'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ashley Lee-Vigneau | Product Manager | Healthcare & Data Platforms</title>
        <meta 
          name="description" 
          content="Experienced Product Manager specializing in healthcare, data platforms, and Azure DevOps. Certified CSPO/CSM & SAFe PO/PM with expertise in Snowflake, Databricks, and LaunchDarkly." 
        />
        <meta name="keywords" content="Product Manager, Healthcare, Data Platforms, Azure DevOps, Snowflake, Databricks, LaunchDarkly, CSPO, CSM, SAFe" />
        <meta name="author" content="Ashley Lee-Vigneau" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ashleylee-vigneau.com/" />
        <meta property="og:title" content="Ashley Lee-Vigneau | Product Manager | Healthcare & Data Platforms" />
        <meta property="og:description" content="Experienced Product Manager specializing in healthcare, data platforms, and Azure DevOps. Certified CSPO/CSM & SAFe PO/PM with expertise in Snowflake, Databricks, and LaunchDarkly." />
        <meta property="og:image" content="https://ashleylee-vigneau.com/assets/img/og-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Ashley Lee-Vigneau - Product Manager Portfolio" />
        <meta property="og:site_name" content="Ashley Lee-Vigneau Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ashleylee-vigneau.com/" />
        <meta property="twitter:title" content="Ashley Lee-Vigneau | Product Manager | Healthcare & Data Platforms" />
        <meta property="twitter:description" content="Experienced Product Manager specializing in healthcare, data platforms, and Azure DevOps. Certified CSPO/CSM & SAFe PO/PM with expertise in Snowflake, Databricks, and LaunchDarkly." />
        <meta property="twitter:image" content="https://ashleylee-vigneau.com/assets/img/og-preview.jpg" />
        <meta property="twitter:image:alt" content="Ashley Lee-Vigneau - Product Manager Portfolio" />
        <meta property="twitter:creator" content="@ashleylee_vigneau" />
        
        {/* Additional Meta */}
        <meta name="theme-color" content="#2238cc" />
        <meta name="msapplication-TileColor" content="#2238cc" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ashley Lee-Vigneau" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ashley Lee-Vigneau",
              "jobTitle": "Product Manager",
              "description": "Experienced Product Manager specializing in healthcare, data platforms, and Azure DevOps",
              "url": "https://ashleylee-vigneau.com",
              "image": "https://ashleylee-vigneau.com/assets/img/headshot.jpg",
              "email": "ashleyloreal.lee@gmail.com",
              "sameAs": [
                "https://www.linkedin.com/in/ashleylee-vigneau",
                "https://github.com/alyrlee"
              ],
              "knowsAbout": [
                "Product Management",
                "Healthcare Technology",
                "Data Platforms",
                "Azure DevOps",
                "Snowflake",
                "Databricks",
                "LaunchDarkly",
                "CI/CD",
                "Microservices"
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "Certified Scrum Product Owner (CSPO)"
                },
                {
                  "@type": "EducationalOccupationalCredential", 
                  "name": "Certified Scrum Master (CSM)"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "SAFe Product Owner/Product Manager (PO/PM)"
                }
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Healthcare & Data Platforms"
              }
            })
          }}
        />
      </Head>

      <main id="main-content" className="min-h-screen">
        <Header />
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
