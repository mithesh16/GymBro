import React from 'react'
import { Dumbbell, Save, Calendar, TrendingUp } from "lucide-react";
const Features = () => {
    const features = [
        {
          icon: <Save color='#7B3AED' className="w-6 h-6 bg-transparent" />,
          title: "Save Templates",
          description: "Create and save your favorite workout routines for quick access"
        },
        {
          icon: <Dumbbell color='#7B3AED' className="w-6 h-6 bg-transparent" />,
          title: "Track Workouts",
          description: "Log your exercises, sets, reps, and weights with ease"
        },
        {
          icon: <Calendar color='#7B3AED' className="w-6 h-6 bg-transparent" />,
          title: "Plan Ahead",
          description: "Schedule your workouts and stay consistent with your routine"
        },
        {
          icon: <TrendingUp color='#7B3AED' className="w-6 h-6 bg-transparent " />,
          title: "Track Progress",
          description: "Monitor your improvements and celebrate your achievements"
        }
      ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Everything You Need to <span className="text-violet-500">Succeed</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)]; p-6 rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <div className=" mb-4 bg-transparent">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 bg-transparent">{feature.title}</h3>
              <p className="text-gray-400 bg-transparent">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
