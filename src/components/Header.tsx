const Header = () => {
  return (
    <header className='flex items-center  mt-4 mx-4 justify-between px-6 py-4 bg-[#FFF5EB] shadow-sm rounded-2xl  '>
      <div className='text-orange-600 font-medium'>
        <a href='#'>{'< Fonksiyonlar'}</a>
      </div>

      <div className='absolute left-1/2 transform -translate-x-1/2'>
        <h1 className='text-2xl font-bold text-orange-600 uppercase'>TESTS</h1>
      </div>

      <div className='text-orange-600 font-medium'>
        <a href='#'>{'Polinomlar >'}</a>
      </div>
    </header>
  )
}

export default Header
