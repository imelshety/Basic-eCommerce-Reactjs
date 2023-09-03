import MyBackgroundImage from '../../../public/hero.webp'
const Carsoul = () => {
  return (
    <div className="pt-5 w-full h-[100%] bg-green-100" >
      <div className='w-full h-[200px] bg-contain bg-no-repeat bg-right lg:h-[300px] flex flex-col items-start justify-around px-4' style={{
        backgroundImage: `url(${MyBackgroundImage})`
      }}>
        <div className="container flex flex-col gap-12"><span className=' block text-base md:text-xl text-slate-700 font-medium'>In this season, find the best 🔥</span>
          <h1 className='font-semibold text-xl md:text-4xl xl:text-6xl 2xl:text-5xl  text-slate-900'>
            Exclusive collection for everyone</h1></div>
      </div>
    </div >
  );
};

export default Carsoul;
