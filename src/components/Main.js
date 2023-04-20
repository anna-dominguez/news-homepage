import Image from 'next/image'

import Web3Mobile from '../../public/images/image-web-3-mobile.jpg'
import Web3Desktop from '../../public/images/image-web-3-desktop.jpg'
import Gaming from '../../public/images/image-gaming-growth.jpg'
import Laptops from '../../public/images/image-top-laptops.jpg'
import Retro from '../../public/images/image-retro-pcs.jpg'

const Main = () => (
  <main className="grid gap-y-16">
    <div className="grid gap-y-16 lg:gap-x-[30px] lg:grid-cols-3">
      <section className="lg:col-span-2">
        <Image
          className="lg:hidden"
          alt="Image web 3 mobile"
          src={Web3Mobile}
        />
        <Image
          className="hidden lg:flex"
          alt="Image web 3 desktop"
          src={Web3Desktop}
        />
        <div className="lg:grid lg:grid-flow-col lg:gap-8 lg:auto-cols-fr mt-6 ">
          <h1 className="font-extrabold text-headingL lg:text-headingXL mb-4 lg:mb-0">
            The Bright Future of Web 3.0?
          </h1>
          <div className="flex flex-col max-lg:gap-6 lg:justify-between items-start">
            <p className="text-gunmetal text-body">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="uppercase text-body tracking-[4.375px] font-bold text-almostWhite bg-lightVermillon hover:bg-darkSpaceBlue py-3 px-8">
              Read more
            </button>
          </div>
        </div>
      </section>
      <section className="bg-darkSpaceBlue text-almostWhite py-6 px-5 lg:py-8 lg:px-6">
        <h2 className="text-yellow font-bold text-headingM lg:text-headingL mb-[34px]">
          New
        </h2>
        <article className="mb-7">
          <h3 className="font-extrabold text-headingS mb-2">
            Hydrogen VS Electric Cars
          </h3>
          <p className="text-body text-silver">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </article>
        <article className="pb-7 pt-7 border-solid border-gunmetal border-y-[1px]">
          <h3 className="font-extrabold text-headingS mb-2">
            The Downsides of AI Artistry
          </h3>
          <p className="text-body text-silver">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </article>
        <article className="mt-7">
          <h3 className="font-extrabold text-headingS mb-2">
            Is VC Funding Drying Up?
          </h3>
          <p className="text-body text-silver">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </article>
      </section>
    </div>
    <section className="grid gap-8 lg:grid-flow-col">
      <article className="flex gap-6">
        <Image width={100} src={Retro} alt="" />
        <div className="flex flex-col justify-between">
          <h2 className="text-silver font-bold text-headingM">01</h2>
          <h3 className="font-extrabold text-darkSpaceBlue hover:text-lightVermillon cursor-pointer text-[18px]">
            Reviving Retro PCs
          </h3>
          <p className="text-gunmetal text-body">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </article>
      <article className="flex gap-6">
        <Image width={100} src={Laptops} alt="" />
        <div className="flex flex-col justify-between">
          <h2 className="text-silver font-bold text-headingM">02</h2>
          <h3 className="font-extrabold text-darkSpaceBlue hover:text-lightVermillon cursor-pointer text-[18px]">
            Top 10 Laptops of 2022
          </h3>
          <p className="text-gunmetal text-body">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </article>
      <article className="flex gap-6">
        <Image width={100} src={Gaming} alt="" />
        <div className="flex flex-col justify-between">
          <h2 className="text-silver font-bold text-headingM">03</h2>
          <h3 className="font-extrabold text-darkSpaceBlue hover:text-lightVermillon cursor-pointer text-[18px]">
            The Growth of Gaming
          </h3>
          <p className="text-gunmetal text-body">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </article>
    </section>
  </main>
)

export default Main
