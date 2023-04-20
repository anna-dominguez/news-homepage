import Image from 'next/image'

import Logo from '../../public/images/logo.svg'
import MenuClose from '../../public/images/icon-menu-close.svg'
import MenuOpen from '../../public/images/icon-menu.svg'
import { useState } from 'react'

const menuTitles = ['Home', 'New', 'Popular', 'Trending', 'Categories']

const Header = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <header className="sticky flex justify-between items-center mb-8">
      <Image alt="Logo" src={Logo} />
      <div className="lg:hidden">
        <Image
          onClick={() => setShowModal(true)}
          alt="Sandwich menu"
          src={MenuOpen}
        />
        {showModal && (
          <div
            className="fixed shadow-[0_0_0_50vmax_#00001A50] flex h-screen w-2/3 bg-almostWhite overflow-x-hidden
                       right-0 top-0 z-50"
          >
            <div className="flex flex-col font-headingXS w-full py-7 px-6 space-y-6">
              <Image
                className="self-end pb-20"
                onClick={() => setShowModal(false)}
                alt="Close menu"
                src={MenuClose}
              />
              {menuTitles.map((title, index) => (
                <p
                  className="hover:text-lightVermillon cursor-pointer"
                  key={`${title}-${index}`}
                >
                  {title}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="hidden lg:flex space-x-10 text-gunmetal">
        {menuTitles.map((title, index) => (
          <p
            className="hover:text-lightVermillon cursor-pointer"
            key={`${title}-${index}`}
          >
            {title}
          </p>
        ))}
      </div>
    </header>
  )
}

export default Header
