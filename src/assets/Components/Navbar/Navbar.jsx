import React, {useState} from 'react'
import logo from '../../images/logo.png'

const Navbar = () => {

    let [show, setShow] = useState(true)
    let navClick = ()=>{
    setShow(!show);
    }

    let home = ()=>{
        window.scrollTo({top:0, behavior: 'smooth'})
    }
    let work = ()=>{
        window.scrollTo({top: 800, behavior: 'smooth'})
    }
    let service = ()=>{
        window.scrollTo({top: 800+653+421+196, behavior: 'smooth'})
    }
    let about = ()=>{
        window.scrollTo({top: 800+653+421+196+327+520, behavior: 'smooth'})
    }
    let contact = ()=>{
        window.scrollTo({top: 800+653+421+196+327+520+10000, behavior: 'smooth'})
    }

  return (
    <>
        <section className='py-6 px-3 lg:px-0 bg-transparent absolute top-0 left-0 w-full z-10'>
            <div className='lg:max-w-[95%] 2xl:max-w-container mx-auto flex flex-wrap items-center'>
                <div className='w-full md:w-1/5 flex justify-between'>
                    <div className='w-1/2 lg:w-full'>
                        <a href="#"><img src={logo} alt="Logo" className='max-w-[150px] lg:max-w-[250px]' /></a>
                    </div>
                    <div className='w-1/2 md:hidden flex justify-end'>
                        {
                            show == true? <i onClick={navClick} className="text-p1 text-w text-2xl cursor-pointer md:hidden fa-solid fa-bars-staggered"></i> :
                            <i onClick={navClick} class="text-p1 text-w text-3xl cursor-pointer md:hidden fa-solid fa-xmark"></i>
                        }
                    </div>
                </div>
                <div className='w-full md:w-4/5'>
                    <ul className={`absolute left-0 w-full min-h-fit py-[30px] md:py-0 md:min-h-fit bg-pri md:static md:bg-transparent md:visible md:flex md:justify-end md:items-center transition duration-1000 ease-linear ${show == true ? 'top-[-100vh]' : 'top-[70px]'}`}>
                        <li onClick={home} className='mr-0 md:mr-5 lg:mr-10 text-base text-w font-medium font-mon transition ease-linear hover:text-sec cursor-pointer text-center my-5 lg:my-0'>Home</li>
                        <li onClick={work} className='mr-0 md:mr-5 lg:mr-10 text-base text-w font-medium font-mon transition ease-linear hover:text-sec cursor-pointer text-center my-5 lg:my-0'>Work</li>
                        <li onClick={service} className='mr-0 md:mr-5 lg:mr-10 text-base text-w font-medium font-mon transition ease-linear hover:text-sec cursor-pointer text-center my-5 lg:my-0'>Service</li>
                        <li onClick={about} className='mr-0 md:mr-5 lg:mr-10 text-base text-w font-medium font-mon transition ease-linear hover:text-sec cursor-pointer text-center my-5 lg:my-0'>About Us</li>
                        <li onClick={contact} className='mr-0 md:mr-5 lg:mr-10 text-base text-w font-medium font-mon transition ease-linear hover:text-sec cursor-pointer text-center my-5 lg:my-0'>Contact</li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}

export default Navbar