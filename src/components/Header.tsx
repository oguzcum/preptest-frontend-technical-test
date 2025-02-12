const Header = () => {
  return (
    <header className='flex items-center m-[50px] justify-between px-6 py-4 bg-[#FFF5EB] shadow-sm rounded-2xl '>
      <div className='text-gray-600 font-medium'> {'< Fonksiyonlar'}</div>

      <div className='absolute left-1/2 transform -translate-x-1/2'>
        <h1 className='text-2xl font-bold text-blue-600 uppercase'>TESTS</h1>
      </div>

      <div className='text-gray-600 font-medium'>{' Fonksiyonlar >'}</div>
    </header>
  )
}

export default Header
