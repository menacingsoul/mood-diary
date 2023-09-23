const EntryCard = ({ entry }) => {
    const date = new Date(entry.createdAt).toDateString()
    return (
      <div className="divide-y divide-gray-600 overflow-hidden rounded-lg  bg-gray-400 shadow-md  shadow-black">
        <div className="px-4 py-5 sm:px-6">{date}</div>
        <div className="px-4 py-5 sm:p-6">Summary</div>
        <div className="px-4 py-4 sm:px-6">sentiment</div>
      </div>
    )
  }
  
  export default EntryCard