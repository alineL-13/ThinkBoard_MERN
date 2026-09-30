import React from 'react'
import Navbar from './Navbar.jsx'
import { Zap } from 'lucide-react'

const RateLimitedUI = () => {
    
  return (
    <div className="max-w-6xl mx-auto mt-5 bg-primary/15 border-primary/30 border rounded flex p-4 gap-4"> 
        <div className="flex items-center justify-center self-center bg-primary/30 p-3 rounded-full">
            <Zap className="text-primary w-8 h-8" />
        </div>
        <div className="w-full">
            <h2 className="text-lg font-bold text-base-content">Rate Limit Reached</h2>
            <p className="text-base-content">Too many requests in a short period. Please wait a moment.</p>
            <p className="text-sm text-base-content/80">Try again in a few seconds for the best experience</p>
        </div>
    </div>
  )
}

export default RateLimitedUI