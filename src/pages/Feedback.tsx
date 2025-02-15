import '@/App.css'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { backendUrl } from '@/lib/links';
import axios from 'axios';
import { Home, IdCard, Loader2, Phone, RotateCw, ScanFace, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';


const Loading = () => (
  <div className="flex justify-center items-center h-full space-x-4">
    <Loader2 size={40} className="animate-spin" />
    <p>Feedback sending...</p>
  </div>
)

const Success = () => (
  <div className='w-full h-full flex justify-center items-center'>
    <div className="w-80 sm:w-96 bg-green-200 text-center p-6 rounded-lg">
      <p className="font-semibold text-xl">Feedback Send Successfully!</p>
      <div className='flex space-x-2 justify-center items-center mt-4'>
        <Link to={`/`}><Button size={`sm`} className='bg-white hover:bg-zinc-100 text-black px-5'><Home />Home</Button></Link>
      </div>
    </div>
  </div>
)

const Error = ({ message }: {message: string}) => (
  <div className='w-full h-full flex justify-center items-center'>
    <div className="w-80 sm:w-96 bg-red-200 text-center p-6 rounded-lg">
      <p className="font-semibold text-xl">{message}</p>
      <div className='flex space-x-2 justify-center items-center mt-4'>
        <Button size={`sm`} variant={`destructive`} className='px-5' onClick={() => window.location.reload()}><RotateCw />Try Again</Button>
      </div>
    </div>
  </div>
)


const Feedback = () => {
  const { id } = useParams()
  const [banner, setBanner] = useState('')
  const [fullName, setFullName] = useState('')
  const [RtuRollNo, setRtuRollNo] = useState('')
  const [mobileNo, setMobileNo] = useState('')
  const [experience, setExperience] = useState('')
  const nav = useNavigate()

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'success' | 'error' | null>(null)
  const [errorMessage, setErrorMessage] = useState('')

  let isValidForm = !(fullName &&  RtuRollNo && experience && mobileNo);

  useEffect(()=>{
    async function fetchBanner(){
      try{
        const res = await axios.get(`${backendUrl}/event/${id}`)
          setBanner(res.data.event_banner)
        } catch(err){
          nav(`/`)
        }
    }
    fetchBanner()
  },[])

  async function submit(){
    setLoading(true)

    try{
      await axios.post(`${backendUrl}/add-feedback`, { event_id: id, name: fullName, rtu_roll_no: RtuRollNo, mobile_no: mobileNo, experience: experience })
      setLoading(false)
      setStatus(`success`)
    }
    
    catch(err){
      setLoading(false)
      setStatus(`error`)
      setErrorMessage('Feedback Failed. Please try again.')
    }
  }

  return (
    <div className='w-screen h-screen flex flex-col overflow-auto'>
    {
        loading
          ? (<Loading />)
          :status === 'success'
            ? (<Success />)
            : status === 'error'
              ? (<Error message={errorMessage} />)
              : (
                <div className='flex-1 w-full p-4 sm:p-12'>
          <section>
            <div className='w-full h-32 sm:h-40 mb-5 sm:mb-6 rounded-lg sm:rounded-xl'>
                <img src={banner} className='w-full h-full object-cover rounded-lg' />
            </div>
            
            <div className='border-t-4 border-zinc-400 border w-full rounded-lg mb-5 sm:mb-6 p-6 sm:p-10'>
                <p className='text-3xl font-semibold mb-6 sm:mb-4 pb-4 sm:pb-5 border-b-2'>Feedback Form</p>

                <div className='py-2 sm:py-6 space-y-8'>                       
                    
                    <div className='space-y-3'>
                        <p className='text-sm font-medium text-zinc-800 flex items-center space-x-3'><User size={18} /><span>Full Name</span></p>
                        <Input type='text' value={fullName} onChange={e => setFullName(e.target.value)} placeholder='Varun kangotra' />
                    </div>

                    <div className='space-y-3'>
                        <p className='text-sm font-medium text-zinc-800 flex items-center space-x-3'><IdCard size={18} /><span>RTU Roll No.</span></p>
                        <Input type='text' placeholder='21EJCIT139' value={RtuRollNo} onChange={e => setRtuRollNo(e.target.value)} />
                    </div>

                    <div className='space-y-3'>
                        <p className='text-sm font-medium flex text-zinc-800 items-center space-x-3'><Phone size={18} /><span>Mobile Mo.</span></p>
                        <Input type='tel' placeholder='+91 92573-07752' value={mobileNo} onChange={e => setMobileNo(e.target.value)} />
                    </div>

                    <div className='space-y-3'>
                        <p className='text-sm font-medium text-zinc-800 flex items-center space-x-3'><ScanFace size={18} /><span>Rate your experience</span></p>
                        <Select value={experience} onValueChange={(value) => setExperience(value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select here" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Amazing" className='text-green-500'>Amazing</SelectItem>
                              <SelectItem value="Very Good" className='text-blue-500'>Very Good</SelectItem>
                              <SelectItem value="Good" className='text-purple-500'>Good</SelectItem>
                              <SelectItem value="Bad" className='text-red-500'>Bad</SelectItem>
                            </SelectContent>
                        </Select>
                    </div> 

                </div>
            </div>
            <div className='w-full flex justify-start mb-5 sm:mb-0'>
                <Button className='px-10' onClick={submit} disabled={isValidForm}>Submit</Button>
            </div>
          </section>
      </div>
      )
    }
    </div>
  )
}

export default Feedback;