import Drawer from '@/components/Drawer'
import FamilyTree from '@/components/FamilyTree'
import MotherOfGirls from '@/components/MotherOfGirls'
import SearchMember from '@/components/SearchMember'
import SearchRelationship from '@/components/SearchRelationship'
import dbConnect from '@/lib/dbConnect'
import { Button } from '@zendeskgarden/react-buttons'
import { GetServerSideProps } from 'next'
import { Poppins } from 'next/font/google'
import { useEffect, useState } from 'react'

const poppins = Poppins({ subsets: ['latin'], weight: '300' })

export default function Home() {
  // await dbConnect()
  const [isOpen, setIsOpen] = useState(false)

  const showDrawer = () => setIsOpen(true)
  const closeDrawer = () => setIsOpen(false)

  return (
    <main
      className={`bg-white flex min-h-screen flex-col items-center justify-start p-2 ${poppins.className} text-center`}
    >
      <h1 className="text-4xl font-medium mb-10 text-slate-700">Family Tree</h1>
      <div className="max-w-2xl mx-auto mb-8 ">
        <h3 className="text-lg font-semibold text-gray-900 ">
          Welcome to the Shan family tree
        </h3>
        <p className="my-4 text-gray-500">
          Click on any one of the family members to add a child or a spouse.
        </p>
      </div>
      <Button
        isBasic
        onClick={showDrawer}
        title="Search family members"
        aria-label="Search family members"
        className="!mb-8"
      >
        Search family members
      </Button>

      <FamilyTree />
      <Drawer isOpen={isOpen} onClose={closeDrawer}>
        <div className="flex flex-col gap-8">
          <SearchRelationship />
          <span className="w-full mr-4 h-[0.5px] bg-gray-300"></span>
          <SearchMember />
          <span className="w-full mr-4 h-[0.5px] bg-gray-300"></span>
          <MotherOfGirls />
        </div>
      </Drawer>
    </main>
  )
}

// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   await dbConnect()

//   /* find all the data in our database */
//   const result = await Pet.find({})

//   /* Ensures all objectIds and nested objectIds are serialized as JSON data */
//   const pets = result.map((doc) => {
//     const pet = JSON.parse(JSON.stringify(doc))
//     return pet
//   })

//   return { props: { pets: pets } }
// }
