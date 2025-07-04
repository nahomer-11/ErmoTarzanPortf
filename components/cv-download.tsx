"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText, Award, GraduationCap } from "lucide-react"

export function CVDownload() {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-amber-200/50 dark:border-amber-800/50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-xl">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                  <FileText className="h-10 w-10 text-white" />
                </div>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Download My CV</h2>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Get my complete professional curriculum vitae including education, training, achievements, and
                professional references.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center mb-3">
                    <Award className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Professional Experience</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    Complete modeling career history and achievements
                  </p>
                </div>

                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center mb-3">
                    <GraduationCap className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Education & Training</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    Academic background and professional certifications
                  </p>
                </div>

                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center mb-3">
                    <FileText className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">References</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    Professional references and contact information
                  </p>
                </div>
              </div>

              <a
                href="/Ermias_Dereje_CV.pdf"  // ✅ Ensure this PDF file exists inside your "public" folder
                download
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 text-lg font-semibold"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download CV
                </Button>
              </a>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                File format: PDF document • Updated: January 2025
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
