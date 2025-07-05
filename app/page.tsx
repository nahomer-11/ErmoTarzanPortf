"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Mail, Phone, Award, GraduationCap, Camera, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { ImageModal } from "@/components/image-modal"
import { CVDownload } from "@/components/cv-download"

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  const events = [
    {
      title: "Wazema Fashion Show",
      date: "December 23, 2023",
      location: "Russian Center for Science and Culture",
      description: "Organized and participated in fashion show, awarded certificate from Pushkin Center",
      type: "Organized",
      image: "https://i.ibb.co/DHm1XR7V/photo-2025-07-04-18-52-55.jpg",
    },
    {
      title: "Second Fashion Show Event",
      date: "January 5, 2024",
      location: "Guenet Hotel, Addis Ababa",
      description: "Organized fashion show event, awarded by Tourism Minister",
      type: "Organized",
      image: "https://i.ibb.co/HkgBNrc/photo-2025-07-04-18-52-33.jpg",
    },
    {
      title: "Pearl Woman-Vigilant Woman",
      date: "March 30, 2024",
      location: "Purpose Black Hall",
      description: "Fashion show organized by Wazema, certificate from Samelos Media and Communication PLC",
      type: "Participated",
      image: "https://i.ibb.co/1JfgZs9b/photo-2025-07-04-18-53-05.jpg",
    },
    {
      title: "International Cultural Exchange",
      date: "June 20-27, 2024",
      location: "Russia",
      description: "Cultural exchange program and fashion representation",
      type: "Participated",
      image: "https://i.ibb.co/27LKmZSR/photo-2025-07-04-18-52-21.jpg",
    },
  ]

  const galleryImages = [
    "https://i.ibb.co/FqX5MjHt/photo-2025-07-04-18-12-24-2.jpg",
    "https://i.ibb.co/tMNZqdDS/photo-2025-07-04-18-12-24.jpg",
    "https://i.ibb.co/35PbFKPz/photo-2025-07-04-18-12-23.jpg",
    "https://i.ibb.co/gLQc9y2F/photo-2025-07-04-18-12-22.jpg",
    "https://i.ibb.co/6chfcy4L/photo-2025-07-04-18-12-21.jpg",
    "https://i.ibb.co/gLDJLQXp/photo-2025-07-04-18-12-20-2.jpg",
    "https://i.ibb.co/JRKZCpDn/photo-2025-07-04-18-12-20.jpg",
    "https://i.ibb.co/YBQv4CNP/photo-2025-07-04-18-12-19.jpg",
    "https://i.ibb.co/XfNFQ0SZ/photo-2025-07-04-18-12-18.jpg",
    "https://i.ibb.co/PG1mvDC5/photo-2025-07-04-18-12-17.jpg",
    "https://i.ibb.co/dRBhgZn/photo-2025-07-04-18-12-16.jpg",
  ]

  const training = [
    {
      title: "Professional Modeling Training",
      institution: "Abyssinia Fine Art and Vocational Training Center",
      duration: "240 hours",
      description: "Occupational standard model certification with comprehensive runway and photo shoot training",
    },
    {
      title: "International Cultural Program",
      institution: "The Linguistics University of Nizhny Novgorod, Russia",
      duration: "60 academic hours",
      description: "Cultural exchange program focusing on modern society and fashion trends",
    },
    {
      title: "Creative Arts Training",
      institution: "ET Andromeda Consultancy and Training Service",
      duration: "July 14 - August 12, 2022",
      description: "Comprehensive training in creative arts and cultural expression",
    },
  ]

  const openImageModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt })
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      {/* Ethiopian Pattern Overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23D97706' fillOpacity='0.4'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 0L0 15v30l15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-amber-200/50 dark:border-gray-700/50 sticky top-0">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Ermias Dereje
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-8">
                <Link
                  href="#about"
                  className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#events"
                  className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  Events
                </Link>
                <Link
                  href="#gallery"
                  className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  Gallery
                </Link>
                <Link
                  href="#cv"
                  className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  CV
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  Contact
                </Link>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="outline"
                  className="border-amber-300 text-amber-700 dark:border-amber-600 dark:text-amber-400"
                >
                  Professional Model
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Ermias Dereje
                  <span className="block text-2xl lg:text-3xl text-amber-600 dark:text-amber-400 font-normal mt-2">
                    G/hanna
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Professional model specializing in fashion shows, runway presentations, and cultural events.
                  Passionate about Ethiopian fashion and contemporary modeling with international experience.
                </p>
              </div>
<div className="flex flex-wrap gap-4">
  <a href="#events">
    <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
      View My Work
    </Button>
  </a>
  <a href="#contact">
    <Button
      variant="outline"
      className="border-amber-300 text-amber-700 hover:bg-amber-50 dark:border-amber-600 dark:text-amber-400 dark:hover:bg-amber-950 bg-transparent"
    >
      Contact Me
    </Button>
  </a>
</div>

              <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Born May 23, 2004</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20">
                <Image
                  src="https://i.ibb.co/GvSv84Yn/photo-2025-07-04-18-53-41.jpg"
                  alt="Ermias Dereje - Professional Model"
                  fill
                  className="object-cover"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Professional model with passion for fashion and cultural expression
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border-amber-200/50 dark:border-amber-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Camera className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Modeling Career</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    Certified professional model with 240 hours of specialized training from Abyssinia Fine Art and
                    Vocational Training Center. Experienced in runway shows, fashion photography, and cultural fashion
                    events with multiple awards and recognitions.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Certified Professional Model</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Multiple Fashion Show Awards</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Camera className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">International Experience</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200/50 dark:border-amber-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <GraduationCap className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Academic Journey</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    Currently pursuing Political Science and International Relations at Addis Ababa University (2nd
                    year). This academic background provides valuable insights into cultural dynamics and global
                    perspectives that enhance my modeling career.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">2nd Year Student at AAU</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">International Cultural Programs</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Languages & Skills */}
            <Card className="mt-12 border-amber-200/50 dark:border-amber-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Professional Skills & Languages
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Languages</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">Amharic</span>
                        <Badge variant="secondary">Native</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">English</span>
                        <Badge variant="secondary">Excellent</Badge>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Modeling Specialties</h4>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <p>• Runway & Fashion Shows</p>
                      <p>• Fashion Photography</p>
                      <p>• Cultural Fashion Events</p>
                      <p>• Event Organization & Coordination</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Events & Achievements
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Professional modeling events and fashion showcases
              </p>
            </div>

            <div className="grid gap-8">
              {events.map((event, index) => (
                <Card
                  key={index}
                  className="border-amber-200/50 dark:border-amber-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <Badge
                            variant={event.type === "Organized" ? "default" : "secondary"}
                            className="bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200"
                          >
                            {event.type}
                          </Badge>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{event.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{event.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">{event.description}</p>
                        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <div className="lg:w-48 h-32 rounded-lg overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          width={192}
                          height={128}
                          className="w-full h-full object-cover"
                          crossOrigin="anonymous"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Training Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Professional Training
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {training.map((item, index) => (
                  <Card
                    key={index}
                    className="border-amber-200/50 dark:border-amber-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
                  >
                    <CardContent className="p-6">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                      <p className="text-sm text-amber-600 dark:text-amber-400 font-medium mb-2">{item.institution}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{item.duration}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Portfolio Gallery</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Professional modeling photos and fashion shoots
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 hover:scale-105 transition-transform cursor-pointer group"
                  onClick={() => openImageModal(image, `Portfolio photo ${index + 1}`)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Portfolio photo ${index + 1}`}
                    fill
                    className="object-cover"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <span className="text-white text-sm font-medium">Click to view</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CV Download Section */}
      <section id="cv">
        <CVDownload />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Ready to work together on your next project</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
<Card className="border-amber-200/50 dark:border-amber-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
  <CardContent className="p-8">
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
    <div className="space-y-6">
      {/* Phone */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center">
          <Phone className="h-6 w-6 text-amber-600 dark:text-amber-400" />
        </div>
        <div>
          <p className="font-medium text-gray-900 dark:text-white">Phone</p>
          <p className="text-gray-600 dark:text-gray-300">+251 942 384 382</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center">
          <Mail className="h-6 w-6 text-amber-600 dark:text-amber-400" />
        </div>
        <div>
          <p className="font-medium text-gray-900 dark:text-white">Email</p>
          <p className="text-gray-600 dark:text-gray-300">ermias1440@gmail.com</p>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center">
          <MapPin className="h-6 w-6 text-amber-600 dark:text-amber-400" />
        </div>
        <div>
          <p className="font-medium text-gray-900 dark:text-white">Location</p>
          <p className="text-gray-600 dark:text-gray-300">Addis Ababa, Ethiopia</p>
        </div>
      </div>

      {/* LinkedIn */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center">
          <svg className="h-6 w-6 text-amber-600 dark:text-amber-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1 4.6 1 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zm.02 4H1V23h4V7.5zM8 7.5v15.5h4v-8.5c0-2.4 3-2.6 3 0v8.5h4v-9.5c0-5.2-6-5-7-2.5V7.5H8z"/>
          </svg>
        </div>
        <div>
          <p className="font-medium text-gray-900 dark:text-white">LinkedIn</p>
          <p className="text-gray-600 dark:text-gray-300">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="underline">
              linkedin.com/in/yourprofile
            </a>
          </p>
        </div>
      </div>

      {/* Instagram */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center">
          <svg className="h-6 w-6 text-amber-600 dark:text-amber-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.88a.88.88 0 110 1.75.88.88 0 010-1.75z"/>
          </svg>
        </div>
        <div>
          <p className="font-medium text-gray-900 dark:text-white">Instagram</p>
          <p className="text-gray-600 dark:text-gray-300">
            <a href="https://www.instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="underline">
              @yourhandle
            </a>
          </p>
        </div>
      </div>

      {/* Telegram */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center">
          <svg className="h-6 w-6 text-amber-600 dark:text-amber-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.036 16.95l-.39 4.186c.56 0 .8-.24 1.1-.53l2.64-2.5 5.48 4.02c1 .56 1.72.26 1.98-.94l3.6-16.8c.3-1.39-.5-1.94-1.45-1.6L1.66 9.2c-1.35.52-1.33 1.25-.23 1.58l5.6 1.75L18.4 5.9c.59-.38 1.13-.17.69.2L9.036 16.95z"/>
          </svg>
        </div>
        <div>
          <p className="font-medium text-gray-900 dark:text-white">Telegram</p>
          <p className="text-gray-600 dark:text-gray-300">
            <a href="https://t.me/yourhandle" target="_blank" rel="noopener noreferrer" className="underline">
              @yourhandle
            </a>
          </p>
        </div>
      </div>
    </div>
  </CardContent>
</Card>



              <Card className="border-amber-200/50 dark:border-amber-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Modeling Services</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Fashion Runway</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Professional runway modeling for fashion shows
                      </p>
                    </div>
                    <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Photo Shoots</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Fashion photography and commercial shoots
                      </p>
                    </div>
                    <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Event Organization</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Fashion show planning and coordination</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-4">
              Ermias Dereje G/hanna
            </div>
            <p className="text-gray-400 mb-6">Professional Model & Fashion Enthusiast</p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>© 2024 Ermias Dereje. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          src={selectedImage.src || "/placeholder.svg"}
          alt={selectedImage.alt}
          isOpen={!!selectedImage}
          onClose={closeImageModal}
        />
      )}
    </div>
  )
}
