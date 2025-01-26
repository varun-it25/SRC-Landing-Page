import '@/App.css'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { IdCard, LucideTableOfContents, Mail, Phone, User } from 'lucide-react';

const Participate = () => {
  return (
    <div className='w-screen h-screen flex flex-col overflow-auto'>
      <div className='flex-1 w-full p-4 sm:p-12'>
          <section className="">
            <div className='w-full h-32 sm:h-40 mb-5 sm:mb-6 rounded-lg sm:rounded-xl'>
                <img src='https://i.ytimg.com/vi/uoIB25f0bTQ/maxresdefault.jpg' className='w-full h-full object-cover rounded-lg' />
            </div>

            <div className='border-t-4 border-zinc-400 border w-full rounded-lg mb-5 sm:mb-6 p-6 sm:p-10'>
                <p className='text-3xl font-semibold mb-6 sm:mb-4 pb-4 sm:pb-6 border-b-2'>Participation Form</p>

                <div className='p-2 sm:p-6 space-y-7'>
                    <div className='flex-col sm:flex-row flex items-center justify-between space-y-6 sm:space-y-0 space-x-0 sm:space-x-6'>
                        <div className='space-y-2 w-full'>
                            <p className='text-sm font-medium flex text-zinc-800 items-center space-x-3'><User size={18} /><span>First Name</span></p>
                            <Input type='text' placeholder='Varun' />
                        </div>
                        <div className='space-y-2 w-full'>
                            <p className='text-sm font-medium flex text-zinc-800 items-center space-x-3'><User size={18} /><span>Last Name</span></p>
                            <Input type='text' placeholder='Kangotra' />
                        </div>
                    </div>


                    <div className='space-y-2'>
                        <p className='text-sm font-medium text-zinc-800 flex items-center space-x-3'><IdCard size={18} /><span>RTU Roll No.</span></p>
                        <Input type='text' placeholder='21EJCIT139' />
                    </div>

                    <div className='space-y-2'>
                        <p className='text-sm font-medium text-zinc-800 flex items-center space-x-3'><LucideTableOfContents size={18} /><span>Choose your role</span></p>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Super Admin">Social Media</SelectItem>
                              <SelectItem value="Admin">Video Editing</SelectItem>
                              <SelectItem value="Moderator">Photography / Videoography</SelectItem>
                              <SelectItem value="Editor">Graphic Design</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>                    

                    <div className='flex-col sm:flex-row flex items-center justify-between space-y-6 sm:space-y-0 space-x-0 sm:space-x-6'>
                        <div className='space-y-2 w-full'>
                            <p className='text-sm font-medium flex text-zinc-800 items-center space-x-3'><Mail size={18} /><span>College Email ID</span></p>
                            <Input type='email' placeholder='varunkangotra@jecrc.ac.in' />
                        </div>
                        <div className='space-y-2 w-full'>
                            <p className='text-sm font-medium flex text-zinc-800 items-center space-x-3'><Mail size={18} /><span>Personal Email ID</span></p>
                            <Input type='email' placeholder='varunkangotra0@gmail.com' />
                        </div>
                    </div>

                    <div className='space-y-2'>
                        <p className='text-sm font-medium flex text-zinc-800 items-center space-x-3'><Phone size={18} /><span>Mobile Mo.</span></p>
                        <Input type='tel' placeholder='+91 92573-07752' />
                    </div>

                </div>
            </div>
            <div className='w-full flex justify-end mb-5 sm:mb-0'>
                <Button className='px-10'>Participate</Button>
            </div>
          </section>
      </div>
    </div>
  )
}

export default Participate;