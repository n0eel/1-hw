import Logo from '../assets/images/logo.svg'
import Avatar from '../assets/images/profile.svg'

function Header (){
    const navbarList = [
        {
          id:1,
          title: "Movies",
          path: "#"
        },
        {
          id:2,
          title: "Series",
          path: "#"
        },
        {
          id:3,
          title: "Channels",
          path: "#"
        },
        {
          id:4,
          title: "Music",
          path: "#"
        }
      ]
    return (
        <header className='py-5'>
        <div className='container mx-auto'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center space-x-[56px]'>
              <a href='#'>
                <img src={Logo} width={95} height={51}></img>
              </a>
              <ul className='flex items-center space-x-[44px]'>
                {navbarList.map(item => (
                  <li key={item.id}>
                    <a className='px-[23px] py-[10px] font-medium text-white text-[24px] leading-[27px]' href={`${item.path}`}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex items-center space-x-[19px] '>
              <input className='search-input w-[334px] py-[17px] pl-[52px] rounded-[8px] bg-[rgb(0,0,0,0.7)] outline-none placeholder:text-[2F2F2F] text-white leading-[28px] text-[24px]' placeholder='Search' name='searching'/>
              <button className='text-white text-[24px] leading-[27px] font-medium space-x-[8px] items-center flex'>
                <img src={Avatar} width={24} height={24} />
                <span>Profile</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header