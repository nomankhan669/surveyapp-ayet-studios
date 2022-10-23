import { useState } from 'react'
import './App.css'
import Survey from './components/Survey'
import { surveyData } from '../data'
import { randomUUID } from './shared/helper'

function App() {

  return (
    <div className="App">
      <div className="container mx-auto md:px-4 lg:w-7/12 pt-10 pb-10">
        <div className="grid md:grid-cols-2 gap-4">
          {surveyData.map(s => (
            <Survey
              key={randomUUID()}
              icon={s.icon}
              title={s.title}
              surveyLefts={s.surveyLefts}
              duration={s.duration}
              qualifications={s.qualifications}
              points={s.points}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
