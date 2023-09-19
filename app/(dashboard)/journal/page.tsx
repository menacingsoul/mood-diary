import { prisma } from "@/utils/db";
import { getUserClerkID } from "@/utils/auth";
const getEntries = async () => {
    const user = await getUserClerkID()
    const entries = await prisma.journalEntry
    
}
const JournalPage=()=>
{
    return <div>Journal</div>
}
export default JournalPage;