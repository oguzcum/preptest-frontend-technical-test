import React from 'react'

interface DataCardProps {
  title: string
  testNumber: string
  check: boolean
  blur: boolean
}

const DataCard = ({ title, testNumber, check, blur }: DataCardProps) => {
  return (
    <div className='relative bg-[#FFF5EB] shadow-lg rounded-2xl p-6 mx-4 mt-4 flex-grow bg-[url(/key.png)] bg-right bg-no-repeat'>
      {blur && (
        <div className='absolute inset-0 bg-white bg-opacity-50 flex flex-col items-center justify-center rounded-2xl z-20'>
          <img src='/lock.png' alt='lock' className='w-10 h-10 mb-2' />
          <p className='text-gray-800 font-semibold text-center px-4 mx-20'>
            You cannot proceed to the next section until you have completed the tests.
          </p>
          <button className='mt-3 w-36 bg-[#FF7B5D] hover:bg-red-500 text-white py-2 rounded-full text-lg font-medium  opacity-75'>
            Generate
          </button>
        </div>
      )}

      <div className={`relative ${blur ? 'blur-lg pointer-events-none' : ''}`}>
        <div className='flex flex-col md:flex-row justify-between'>
          <div className='flex-1'>
            <div className='mb-4'>
              <div className='flex'>
                <h2 className='text-xl font-bold text-gray-800'>{title}</h2>
                {check && <img src='/check.png' className='ml-2' alt='check' />}
              </div>
              <p className='text-gray-500'>{testNumber}</p>
            </div>

            <div className='grid grid-cols-2 gap-4 mb-4'>
              <div className='flex items-center space-x-2'>
                <p className='text-white text-lg font-bold bg-[#FF7B5D] rounded-2xl px-5'>10</p>
                <p className='text-gray-600 text-sm'>SUBTOPICS</p>
              </div>
              <div className='flex items-center space-x-2'>
                <p className='text-white text-lg font-bold bg-[#FF7B5D] rounded-2xl px-5'>55</p>
                <p className='text-gray-600 text-sm'>QUESTIONS</p>
              </div>
              <div className='flex items-center space-x-2'>
                <p className='text-white text-lg font-bold bg-[#FF7B5D] rounded-2xl px-4'>1hr</p>
                <p className='text-gray-600 text-sm'>TIME</p>
              </div>
              <div className='flex items-center space-x-2'>
                <p className='text-white text-lg font-bold bg-[#FF7B5D] rounded-2xl px-5'>25</p>
                <p className='text-gray-600 text-sm'>DIFFICULTY</p>
              </div>
            </div>

            <button className='w-48 bg-[#6FB2B8] hover:bg-teal-500 text-white py-3 rounded-3xl text-lg font-medium transition duration-300'>
              Start Now {'>'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataCard
