interface TestCardProps {
  text1: string
  text2: string
  color: string
}

const TestCard = ({ text1, text2, color }: TestCardProps) => {
  return (
    <div>
      <div
        className='flex items-start  justify-between shadow-sm rounded-2xl mx-4 mt-[20px] bg-[url(/casual-lamp.png)] bg-right  bg-no-repeat'
        style={{ backgroundColor: color }}
      >
        <div className='m-4 flex flex-col justify-start'>
          <div className='font-bold  text-lg font-medium mb-2'>{text1}</div>
          <div className='text-gray-500'>{text2}</div>
        </div>
      </div>
    </div>
  )
}

export default TestCard
