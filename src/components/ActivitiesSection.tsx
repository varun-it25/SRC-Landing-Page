import dd_logo from '@/assets/dd_logo.png'
import src_nobg from '@/assets/src_nobg.png'
import ffj_logo from '@/assets/ffj_logo.png'
import girl_home from '@/assets/girl_home.png'
import uba_logo from '@/assets/uba_logo.png'
import { Button } from "./ui/button"
import { Link } from "react-router-dom";


function ActivityCardVertical({ name, full_form, image, from, to, link }) {
    return (
      <div className={`w-full bg-gradient-to-t from-${from} to-${to} border rounded-lg text-white p-4`} style={{ background: `linear-gradient(to top, ${from}, ${to})` }}>
        <p className="text-xl">{name}</p>
        <p className="font-light mb-4">{full_form}</p>
        <div className="mb-6">
          <img className="h-40 rounded-lg" src={image} alt={name} />
        </div>
        <Link to={`/activity/${link}`}><Button className="bg-white text-black hover:bg-zinc-100">See More</Button></Link>
      </div>
    );
  }

function ActivityCardHorizontal({ name, full_form, image, from, to, link }) {
    return (
      <div className={`w-full bg-gradient-to-t gap-4 from-${from} to-${to} border items-center rounded-lg text-white flex justify-between p-4`}  style={{background: `linear-gradient(to top, ${from}, ${to})`}}>
            <div className="w-fit ml-[-0.6rem] md:ml-0">
                <img className="h-44 relative rounded-lg" src={image} alt={name} />
            </div>
            <div className=" w-fit sm:w-1/2">
                <p className="text-xl">{name}</p>
                <p className="font-light mb-8">{full_form}</p>
                <Link to={`/activity/${link}`}><Button className="bg-white text-black hover:bg-zinc-100">See More</Button></Link>
            </div>
      </div>
    );
  }

const ActivitiesSection = () => {
  const india = `https://static.vecteezy.com/system/resources/previews/011/298/961/non_2x/india-map-water-color-illustration-styles-isolated-on-white-background-free-png.png`
  const technology = `https://movate-website-data.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/13100059/elevate-cloud.webp`
  const src = `https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-spiritual-clipart-jaya-vector-png-image_6816926.png`
  const speak = `https://media.licdn.com/dms/image/v2/D5612AQEOmKhfDaDofQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1666111443352?e=2147483647&v=beta&t=6BzvSn63T7YJrWEsc3GhtxQ4AiGe-BvPwxxpQ-ZNa3Q`
  const faculty = `https://static.vecteezy.com/system/resources/previews/023/254/079/non_2x/smiling-male-teacher-character-pointing-free-png.png`

  return (
    <section className="pt-10 sm:pt-12 pb-8 sm:pb-20">
        <p className='text-3xl mb-10 sm:mb-14 whitespace-nowrap sm:whitespace-normal sm:text-4xl font-medium text-zinc-600 text-center'>Our <span className='font text-blue-600'>Initiatives</span></p>
        <div className="w-full px-6 sm:px-24 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full flex flex-col-reverse md:flex-col gap-8">
                <div className="w-full gap-8 grid grid-cols-1 md:grid-cols-2">
                    <ActivityCardVertical name={`FFJ`} full_form={`FruitFul Jaipur`} image={ffj_logo} from={`#73EC8B`} to={`#15B392`} link={`ffj`}  />
                    <ActivityCardVertical name={`UBA`} full_form={`Unnat Bharat Abhyan`} image={uba_logo} from={`#BE3144`} to={`#872341`} link={`uba`}/>
                </div>
                <ActivityCardHorizontal name={`TSP`} full_form={`Techno Spiritual Projects`} image={technology} from={`#3572EF`} to={`#050C9C`} link={`tsp`} />
            </div>
            <div className="w-full flex flex-col gap-8">
                <ActivityCardHorizontal name={`Counseling`} full_form={``} image={src_nobg} from={`#DF9755`} to={`#EB5A3C`} link={`src`} />
                <div className="w-full gap-8 grid grid-cols-1 md:grid-cols-2">
                    <ActivityCardVertical name={`DD`} full_form={`Diverse Dialogue`} image={dd_logo} from={`#73EC8B`} to={`#15B392`} link={`dd`} />
                    <ActivityCardVertical name={`Meditation`} full_form={`Peace of Mind`} image={girl_home} from={`#BE3144`} to={`#872341`} link={`fdp`} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default ActivitiesSection