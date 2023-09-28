import { prisma } from "./db";
import Link from 'next/link'

async function createUser(data: FormData) {
    "use server"
    const name = data.get("name")?.valueOf()
    if(typeof name !== "string" || name.length === 0){
        throw new Error('Name is required')
}
    await prisma.user.create({data: {name}})
}

export default function HelloWorld() {
  return (
    <main className="flex font-sans justify-center text-center content-center w100">
        <div className='flex-none w-56 relative '>
        <h1 className='w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600'>hello world</h1>
          <div className=''>
            <h2 className='mt-3'>What is your name?</h2>
            <form action={createUser} className="mt-3 flex">
              <input
                className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                type="text"
                name="name"
                placeholder='name'
              />
              <button
                className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
                type="submit"
              >
                Submit
              </button>
            </form>
            <Link 
              className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'

            href="/issues"> Sea all users </Link>

        </div>
        <div>
      </div>
      </div>
    </main>
  );
}

