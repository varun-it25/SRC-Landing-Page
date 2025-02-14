import { Button } from '@/components/ui/button'
import { ArrowLeft, Home } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const Not_found = () => {
  const nav = useNavigate()

  function back(){
    nav(-1);
  }  

  return (
    <div className='w-full h-full overflow-auto'>
        <div className='w-full flex-col h-full flex justify-center items-center'>
            <img src='https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png' className='w-[32rem]' />
            <div className='flex mt-12 space-x-6'>
                <Button variant={`destructive`} onClick={back}><ArrowLeft />Go Back</Button>
                <Link to={`/`}><Button className='px-5'><Home />Home</Button></Link>
            </div>
        </div>
    </div>

  )
}

export default Not_found