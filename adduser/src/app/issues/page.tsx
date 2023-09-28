import {prisma} from "../db";
import Link from 'next/link'


//prisma.user.create({data: {name: "bieke"}})

function getUsers(){
  return prisma.user.findMany()
}

function deleteUser(){
  return prisma.user.deleteMany()
}

export default async function Issuepage() {

    const users = await getUsers()

    //const delUser = await deleteUser()

    console.log(users)

  return (
    <main
    >

      <Link className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
      href="/">
       Back </Link>
      <div className='flex font-sans justify-center  content-center w100'>
      <div
      className='flex-none w-56 relative '
      >
    <h1
      className='w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600'
    >users</h1>
    
    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
      {users.map(user =>
      <li 
      className='pb-3 sm:pb-4 mr-4 hover:underline md:mr-6'
      key={user.id}>
        <p className="text-sm text-gray-900 truncate dark:text-white">{user.name}
        </p>
    
        </li>
        )}
        
    </ul>
    </div>
</div>
</main>
    )
}

