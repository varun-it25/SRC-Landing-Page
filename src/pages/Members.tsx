import Member from '@/components/Member'
import Container from '@/components/Right'
import { Button } from '@/components/ui/button'
import { memberData } from '@/data/members'
import { User } from 'lucide-react'

const Members = () => {
  return (
    <Container>
        <div className='w-full h-fit p-6'>

            <div className='w-full mb-7 flex justify-between items-center'>
                <p className='font-bold text-2xl'>Members</p>
                <Button className='bg-blue-600 hover:bg-blue-500 font-bold'><User />Add New Member</Button>
            </div>

            <div className='grid grid-cols-1 gap-6 sm:grid-cols-4'>
                {
                    memberData.map(({name, desination, image, phone, email}) => {
                        return <Member image={image} name={name} designation={desination} email={email} phone={phone} />
                    })
                }
            </div>

        </div>
    </Container>
  )
}

export default Members