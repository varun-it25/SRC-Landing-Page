import '@/App.css'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { IdCard, Phone, ScanFace, User } from 'lucide-react';

const Feedback = () => {
  return (
    <div className='w-screen h-screen flex flex-col overflow-auto'>
      <div className='flex-1 w-full p-4 sm:p-12'>
          <section>
            <div className='w-full h-32 sm:h-40 mb-5 sm:mb-6 rounded-lg sm:rounded-xl'>
                <img src='https://i.ytimg.com/vi/uoIB25f0bTQ/maxresdefault.jpg' className='w-full h-full object-cover rounded-lg' />
            </div>
            
            <div className='border-t-4 border-zinc-400 border w-full rounded-lg mb-5 sm:mb-6 p-6 sm:p-10'>
                <p className='text-3xl font-semibold mb-6 sm:mb-4 pb-4 sm:pb-5 border-b-2'>Feedback Form</p>

                <div className='p-2 sm:p-6 space-y-7'>                       
                    
                    <div className='space-y-2'>
                        <p className='text-sm font-medium text-zinc-800 flex items-center space-x-3'><User size={18} /><span>Full Name</span></p>
                        <Input type='text' placeholder='Varun kangotra' />
                    </div>

                    <div className='space-y-2'>
                        <p className='text-sm font-medium text-zinc-800 flex items-center space-x-3'><IdCard size={18} /><span>RTU Roll No.</span></p>
                        <Input type='text' placeholder='21EJCIT139' />
                    </div>

                    <div className='space-y-2'>
                        <p className='text-sm font-medium flex text-zinc-800 items-center space-x-3'><Phone size={18} /><span>Mobile Mo.</span></p>
                        <Input type='tel' placeholder='+91 92573-07752' />
                    </div>

                    <div className='space-y-2'>
                        <p className='text-sm font-medium text-zinc-800 flex items-center space-x-3'><ScanFace size={18} /><span>Rate your experience</span></p>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select here" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Super Admin" className='text-green-500'>Amazing</SelectItem>
                              <SelectItem value="Moderator" className='text-blue-500'>Very Good</SelectItem>
                              <SelectItem value="Admin" className='text-purple-500'>Good</SelectItem>
                              <SelectItem value="Editor" className='text-red-500'>Bad</SelectItem>
                            </SelectContent>
                        </Select>
                    </div> 

                </div>
            </div>
            <div className='w-full flex justify-end mb-5 sm:mb-0'>
                <Button className='px-10'>Submit</Button>
            </div>
          </section>
      </div>
    </div>
  )
}

export default Feedback;