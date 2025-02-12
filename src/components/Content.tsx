import { useState } from 'react'
import TestCard from './TestCard'
import DataCard from './DataCard'
import Header from './Header'

const Content = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const text = `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi voluptatem ad non animi, soluta laborum
    excepturi, earum sit, modi pariatur temporibus accusantium tenetur velit id nihil neque! Iste, autem enim.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perspiciatis a molestias temporibus quisquam.
    Unde voluptatem porro modi inventore placeat quo nulla consequuntur nisi dicta earum, ipsum tempore,
    praesentium at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ullam quam impedit quibusdam
    consectetur, culpa tempore itaque voluptates provident natus, eum quod ea eos placeat! At adipisci explicabo
    omnis reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tempore dolor obcaecati,
    suscipit quia voluptas ut iusto nemo optio inventore, dolorem quas officia quos explicabo veniam atque itaque
    corporis? Nesciunt. 
  `

  return (
    <div className='mx-8 mt-12'>
      <Header />

      <div className='flex items-start justify-between px-6 py-4 bg-[#FFF5EB] shadow-sm rounded-2xl mx-4 mt-[20px]'>
        <img src='/read.jpg' alt='Description' width={100} height={100} className='rounded-lg mr-4' />
        <div className='flex-1'>
          <div className='text-orange-600 text-lg font-medium mb-2'>NOTES: DATA ANALYSIS</div>

          <div
            className={`text-gray-700 overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? 'max-h-[500px]' : 'max-h-[80px]'
            }`}
          >
            {text}
          </div>

          {/* Buton */}
          <div className='flex mt-3' style={{ marginLeft: '65px' }}>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className='text-white text-sm px-6 py-2 hover:bg-[#FF5D3A] rounded-3xl focus:outline-none bg-[#FF7B5D]'
            >
              {isExpanded ? 'Read Less △' : 'Read More ▽'}
            </button>
          </div>
        </div>
      </div>

      <TestCard
        text1='NON-Generated Test'
        text2='These are tests specially prepared by our teachers.'
        color='#FFF5EB'
      />
      <div className='grid grid-cols-1 sm:grid-cols-2  '>
        <DataCard title='Data Analysis-1' testNumber='TEST:1' check={true} blur={false} />
        <DataCard title='Data Analysis-2' testNumber='TEST:2' check={false} blur={false} />
      </div>

      <TestCard
        text1='GENERATED TESTS'
        text2='These are tests automatically created by the system. In order to move on to this part, you need to solve non-generated tests.'
        color='#B5D6D840'
      />

      <div className='grid grid-cols-1 sm:grid-cols-2  '>
        <DataCard title='Data Analysis-1' testNumber='TEST:1' check={true} blur={true} />
        <DataCard title='Data Analysis-2' testNumber='TEST:2' check={false} blur={true} />
      </div>

      <TestCard
        text1='NON-Generated Test'
        text2='These are tests specially prepared by our teachers.'
        color='#FFF5EB'
      />
      <div className='grid grid-cols-1 sm:grid-cols-2  '>
        <DataCard title='Data Analysis-1' testNumber='TEST:1' check={true} blur={false} />
        <DataCard title='Data Analysis-2' testNumber='TEST:2' check={false} blur={false} />
      </div>
      <TestCard
        text1='GENERATED TESTS'
        text2='These are tests automatically created by the system. In order to move on to this part, you need to solve non-generated tests.'
        color='#B5D6D840'
      />
      <div className='grid grid-cols-1 sm:grid-cols-2  '>
        <DataCard title='Data Analysis-1' testNumber='TEST:1' check={true} blur={true} />
        <DataCard title='Data Analysis-2' testNumber='TEST:2' check={false} blur={true} />
      </div>
    </div>
  )
}

export default Content
