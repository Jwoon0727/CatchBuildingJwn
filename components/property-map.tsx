'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

interface PropertyMapProps {
  selectedId: number | null
  onMarkerClick: (id: number) => void
}

const propertyLocations = [
  { id: 1, price: '9.2억', lat: 37.5010, lng: 127.0396, title: '근생빌딩' },
  { id: 2, price: '9.2억', lat: 37.4985, lng: 127.0320, title: '오피스텔' },
  { id: 3, price: '9.2억', lat: 37.5025, lng: 127.0450, title: '상가주택' },
  { id: 4, price: '9.2억', lat: 37.4960, lng: 127.0380, title: '단독주택' },
  { id: 5, price: '9.2억', lat: 37.4995, lng: 127.0500, title: '꼬마빌딩' },
]

export default function PropertyMap({ selectedId, onMarkerClick }: PropertyMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [popupData, setPopupData] = useState<{ id: number; title: string; position: { x: number; y: number } } | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !mapRef.current || mapInstanceRef.current) return

    // Dynamically import Leaflet
    const initMap = async () => {
      const L = (await import('leaflet')).default
      await import('leaflet/dist/leaflet.css')

      // Initialize map centered on Gangnam, Seoul
      const map = L.map(mapRef.current!, {
        center: [37.4990, 127.0400],
        zoom: 15,
        zoomControl: false,
      })

      // Add OpenStreetMap tiles (free)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map)

      // Add zoom control to bottom right
      L.control.zoom({ position: 'bottomright' }).addTo(map)

      mapInstanceRef.current = map

      // Create custom markers
      propertyLocations.forEach((location) => {
        const markerIcon = L.divIcon({
          className: 'custom-marker',
          html: `
            <div style="position: relative;">
              <div style="background: #2563eb; color: white; padding: 8px 12px; border-radius: 8px; font-weight: bold; font-size: 14px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); cursor: pointer;">
                ${location.price}
              </div>
              <div style="width: 12px; height: 12px; background: #2563eb; transform: rotate(45deg); margin: -6px auto 0;"></div>
            </div>
          `,
          iconSize: [80, 50],
          iconAnchor: [40, 50],
        })

        L.marker([location.lat, location.lng], { icon: markerIcon })
          .addTo(map)
          .on('click', (e: any) => {
            onMarkerClick(location.id)
            const point = map.latLngToContainerPoint(e.latlng)
            setPopupData({
              id: location.id,
              title: location.title,
              position: { x: point.x, y: point.y }
            })
          })
      })

      setIsLoaded(true)
    }

    initMap()

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [onMarkerClick])

  // Update popup position when selectedId changes
  useEffect(() => {
    if (selectedId && mapInstanceRef.current) {
      const location = propertyLocations.find(l => l.id === selectedId)
      if (location) {
        const point = mapInstanceRef.current.latLngToContainerPoint([location.lat, location.lng])
        setPopupData({
          id: location.id,
          title: location.title,
          position: { x: point.x, y: point.y }
        })
      }
    } else {
      setPopupData(null)
    }
  }, [selectedId])

  return (
    <div className="flex-1 relative bg-gray-100">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-muted-foreground">지도 로딩중...</div>
        </div>
      )}
      <div ref={mapRef} className="absolute inset-0" />
      
      {/* Custom Popup — 지도 위 매물 카드 */}
      {popupData && (
        <div
          className="absolute z-[1000] w-60 max-w-[calc(100vw-2rem)] -translate-x-1/2 transform rounded-2xl rounded-bl-none bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/5"
          style={{
            left: popupData.position.x,
            top: popupData.position.y - 180,
          }}
        >
          <h4 className="text-base font-bold tracking-tight text-neutral-900">{popupData.title}</h4>
          <div className="my-3 h-px bg-neutral-200" aria-hidden />
          <div className="mb-4 space-y-2 text-sm leading-snug text-neutral-900">
            <p>매매 1.25억 ~ 5.6억</p>
            <p>전세 4.2억</p>
            <p>월세 60만 ~ 1.65만</p>
          </div>
          <Link
            href={`/property/${popupData.id}`}
            className="block w-full rounded-lg border border-[#2567E7] bg-transparent py-2 text-center text-md font-bold text-[#2567E7] transition-colors hover:bg-[#2567E7]/5"
          >
            상세보기
          </Link>
        </div>
      )}
    </div>
  )
}
