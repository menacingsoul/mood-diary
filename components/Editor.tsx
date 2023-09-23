'use client'
import { useState } from 'react'
import { useAutosave } from 'react-autosave'
import Link from 'next/link' 
import { updateEntry } from '@/utils/api'

const Editor = ({ entry }) => {
  const [value, setValue] = useState(entry.content)
  const [isLoading, setIsLoading] = useState(false)

  const [analysis, setAnalysis] = useState(entry.analysis)

  const { mood, summary, color, subject, negative } = analysis
  const analysisData = [
    { name: 'Summary', value: summary },
    { name: 'Subject', value: subject },
    { name: 'Mood', value: mood },
    { name: 'Negative', value: negative ? 'True' : 'False' },
  ]
  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsLoading(true)
      const data = await updateEntry(entry.id, _value)
      setAnalysis(data.analysis)
      setIsLoading(false)
    },
  })
  
 

  const date = new Date(entry.createdAt).toDateString()
  const handleManualSave = async () => {
    setIsLoading(true)
    try {
      const updated = await updateEntry(entry.id, value)
      setIsLoading(false)
      console.log('Entry manually saved successfully!');
    } catch (error) {
      setIsLoading(false)
      console.error('Error manually saving entry:', error)
    }
  }

  return (
    <div className='w-full h-full grid grid-cols-3'>
    <div className="w-full h-full  col-span-2">
      <section className='top-bar flex justify-between items-center'>
        <div className='p-6 font-mono font-semibold'>Dated: {date}</div>
        <div className='p-6'>
          <Link href={`/journal`} >
            <button
              className='bg-green-400 p-2 rounded-lg w-20 font-mono text-lg'
              onClick={handleManualSave}
              disabled={isLoading}
            >
              Save
            </button>
          </Link>
        </div>
      </section>
      {isLoading && <div className='pl-8 text-zinc-600'>...loading</div>}
      <textarea
        className="w-full h-full p-8 text-xl outline-none font-montserrat font-bold flex-grow"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

    </div>
    <div className="border-l border-black/10">
        <div className="px-6 py-10" style={{ backgroundColor: color }}>
          <h2 className="text-4xl font-nunitosans font-extrabold text-gray-900">Analysis</h2>
        </div>
        <div>
          <ul>
            {analysisData.map((item) => (
              <li
                key={item.name}
                className="px-2 py-4 flex items-ceter justify-between border-b border-t border-black/10"
              >
                <span className="text-lg font-semibold">{item.name}</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Editor
