'use client'

import { ChevronLeft, ChevronRight, Calendar, HelpCircle, Filter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Dashboard() {
  return (
    <div className="p-4 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-semibold">Screenshots</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">Every 10 min</Button>
          <Button variant="outline" size="sm">All screenshots</Button>
        </div>
      </div>

      {/* Date Navigation */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Mon, Jan 6, 2025
          </Button>
          <Select defaultValue="IST">
            <SelectTrigger className="w-[80px]">
              <SelectValue placeholder="IST" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="IST">IST</SelectItem>
              <SelectItem value="UTC">UTC</SelectItem>
              <SelectItem value="EST">EST</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <Avatar className="h-6 w-6">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <span className="text-sm">Amit Chauhan</span>
          <Button variant="outline" size="sm" className="ml-2">
            Filters
          </Button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-4 gap-6 mb-8 p-6 border rounded-lg bg-white">
        <div>
          <div className="text-sm text-gray-600 mb-2 flex items-center gap-1">
            WORKED TIME
          </div>
          <div className="text-3xl font-semibold">3:29</div>
        </div>
        <div>
          <div className="text-sm text-gray-600 mb-2">AVG. ACTIVITY</div>
          <div className="text-3xl font-semibold">3%</div>
        </div>
        <div>
          <div className="text-sm text-gray-600 mb-2 flex items-center gap-1">
            FOCUS TIME <HelpCircle className="h-4 w-4" />
          </div>
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-semibold">61%</span>
            </div>
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
                strokeDasharray="61, 100"
              />
            </svg>
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-600 mb-2 flex items-center gap-1">
            WORK TIME CLASSIFICATION <HelpCircle className="h-4 w-4" />
          </div>
          <div className="text-xl font-semibold mb-2">100%</div>
          <div className="text-sm text-gray-600">Core work</div>
          <div className="w-full bg-blue-500 h-2 rounded-full mt-2"></div>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        <div className="text-sm text-gray-600">
          12:00 pm - 1:00 pm • Total time worked: 0:51:50
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border rounded-lg p-4 bg-white">
              <div className="flex justify-between items-center mb-4">
                <span className="text-blue-500">Developers</span>
                <span className="text-gray-500">No birds / jobs</span>
              </div>
              <div className="aspect-video bg-gray-100 rounded-lg mb-4"></div>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>12:00 pm - 12:10 pm</span>
                <span>1 screen</span>
              </div>
              <div className="h-1 bg-blue-100 rounded-full mt-2">
                <div className="h-full w-1/4 bg-blue-500 rounded-full"></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">20% of 1 minutes</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

