"use client"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageModalProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
}

export function ImageModal({ src, alt, isOpen, onClose }: ImageModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
        >
          <X className="h-6 w-6" />
        </Button>
        <div className="relative w-full h-full">
          <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-contain" crossOrigin="anonymous" />
        </div>
      </div>
    </div>
  )
}
