import Editor from '@/components/Editor'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
const getEntry = async (id) => {
  const user = await getUserByClerkID()
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
    include: {
      analysis: true,
    },
  })

  return entry
}

const EntryPage = async ({ params }) => {
  const entry = await getEntry(params.id);
const analysisData = [
  {
    name:"Summary",value:""
  },
  {
    name:"Subject",value:""
  },
  {
    name:"Mood",value:""
  },
  {
    name:"Negative", value:"False"
  },
]
  
  

  return (
    <div className="h-full w-full ">
      <div >
      <Editor entry={entry} />
      </div>
     
    
    </div>
  )
}

export default EntryPage