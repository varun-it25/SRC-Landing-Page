import '@/App.css'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { backendUrl } from '@/lib/links';
import axios from 'axios';
import {  IdCard, Loader2, Mail, Phone, RotateCw, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';

const Loading = () => (
    <div className="flex justify-center items-center h-full space-x-4">
      <Loader2 size={40} className="animate-spin" />
      <p>Registering...</p>
    </div>
);

const Success = () => (
    <div className='w-full h-full flex justify-center items-center'>
      <div className="w-80 sm:w-96 bg-green-200 text-center p-6 rounded-lg">
        <p className="font-semibold text-xl">Registration Successfully!</p>
        <p className="mt-4 text-sm">Redirecting to home...</p>
      </div>
    </div>
);

const Error = ({ message }: { message: string }) => (
    <div className='w-full h-full flex justify-center items-center'>
      <div className="w-80 sm:w-96 bg-red-200 text-center p-6 rounded-lg">
        <p className="font-semibold text-xl">{message}</p>
        <div className='flex space-x-2 justify-center items-center mt-4'>
          <Button size={`sm`} variant={`destructive`} className='px-5' onClick={() => window.location.reload()}>
            <RotateCw />Try Again
          </Button>
        </div>
      </div>
    </div>
);

const Register = () => {
  const { id } = useParams();
  const [firstName, setFirstName] = useState(``);
  const [lastName, setLastName] = useState(``);
  const [RtuRollNo, setRtuRollNo] = useState(``);
  const [collegeEmail, setCollegeEmail] = useState(``);
  const [personalEmail, setPersonalEmail] = useState(``);
  const [mobileNo, setMobileNo] = useState(``);
  const [banner, setBanner] = useState(``);
  const nav = useNavigate();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  let isValidForm = !(firstName && lastName && RtuRollNo && collegeEmail && personalEmail && mobileNo);

  useEffect(() => {
    async function fetchBanner() {
      try {
        const res = await axios.get(`${backendUrl}/event/${id}`);
        setBanner(res.data.event_banner);
      } catch (err) {
        nav(`/`);
      }
    }
    fetchBanner();
  }, [id, nav]);

  
  // Automatically redirect after success
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        nav('/');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [status, nav]);

  async function submit() {
    setLoading(true);
    const formData = {
      event_id: id,
      name: `${firstName} ${lastName}`,
      rtu_roll_no: RtuRollNo, // Fixed to use RtuRollNo correctly
      college_email: collegeEmail,
      personal_email: personalEmail,
      mobile_no: mobileNo,
    };

    try {
      await axios.post(`${backendUrl}/add-registration`, formData);
      setLoading(false);
      setStatus('success');
    } catch (err) {
      setLoading(false);
      setStatus('error');
      setErrorMessage('Registration Failed. Please try again.');
    }
  }

  return (
    <div className='w-screen h-screen flex flex-col overflow-auto'>
      {loading ? (
        <Loading />
      ) : status === 'success' ? (
        <Success />
      ) : status === 'error' ? (
        <Error message={errorMessage} />
      ) : (
        <div className='flex-1 w-full p-4 sm:p-12'>
          <section className="">
            <div className='w-full h-32 sm:h-40 mb-5 sm:mb-6 rounded-lg sm:rounded-xl'>
              <img src={banner} className='w-full h-full object-cover rounded-lg' alt="Event Banner" />
            </div>

            <div className='border-t-4 border-zinc-400 border w-full rounded-lg mb-5 sm:mb-6 p-6 sm:p-10'>
              <p className='text-3xl font-semibold mb-6 sm:mb-4 pb-4 sm:pb-6 border-b-2'>Registration Form</p>

              <div className='p-2 sm:py-8 space-y-10'>
                <div className='flex-col sm:flex-row flex items-center justify-between space-y-10 sm:space-y-0 space-x-0 sm:space-x-6'>
                  <div className='space-y-3 w-full'>
                    <p className='text-sm font-medium flex text-zinc-800 items-center space-x-3'>
                      <User size={18} />
                      <span>First Name</span>
                    </p>
                    <Input type='text' placeholder='Varun' value={firstName} onChange={e => setFirstName(e.target.value)} />
                  </div>
                  <div className='space-y-3 w-full'>
                    <p className='text-sm font-medium flex text-zinc-800 items-center space-x-3'>
                      <User size={18} />
                      <span>Last Name</span>
                    </p>
                    <Input type='text' placeholder='Kangotra' value={lastName} onChange={e => setLastName(e.target.value)} />
                  </div>
                </div>

                <div className='space-y-3'>
                  <p className='text-sm font-medium text-zinc-800 flex items-center space-x-3'>
                    <IdCard size={18} />
                    <span>RTU Roll No.</span>
                  </p>
                  <Input type='text' placeholder='21EJCIT139' value={RtuRollNo} onChange={e => setRtuRollNo(e.target.value)} />
                </div>

                <div className='flex-col sm:flex-row flex items-center justify-between space-y-10 sm:space-y-0 space-x-0 sm:space-x-6'>
                  <div className='space-y-3 w-full'>
                    <p className='text-sm font-medium flex text-zinc-800 items-center space-x-3'>
                      <Mail size={18} />
                      <span>College Email ID</span>
                    </p>
                    <Input type='email' placeholder='varunkangotra@jecrc.ac.in' value={collegeEmail} onChange={e => setCollegeEmail(e.target.value)} />
                  </div>
                  <div className='space-y-3 w-full'>
                    <p className='text-sm font-medium flex text-zinc-800 items-center space-x-3'>
                      <Mail size={18} />
                      <span>Personal Email ID</span>
                    </p>
                    <Input type='email' placeholder='varunkangotra0@gmail.com' value={personalEmail} onChange={e => setPersonalEmail(e.target.value)} />
                  </div>
                </div>

                <div className='space-y-3'>
                  <p className='text-sm font-medium flex text-zinc-800 items-center space-x-3'>
                    <Phone size={18} />
                    <span>Mobile No.</span>
                  </p>
                  <Input type='tel' placeholder='+91 92573-07752' value={mobileNo} onChange={e => setMobileNo(e.target.value)} />
                </div>
              </div>
            </div>
            <div className='w-full flex justify-start mb-5 sm:mb-0'>
              <Button className='px-10' onClick={submit} disabled={isValidForm}>Submit</Button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Register;
