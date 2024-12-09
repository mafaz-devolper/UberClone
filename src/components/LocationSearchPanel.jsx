/* eslint-disable react/prop-types */
const LocationSearchPanel = (props) => {
  const locations = [
    "24B, Near Kapoor&lsquo;s cafe, Sheriyans Coding School, Bhopal",
    "28B, Near rohona&lsquo;s cafe, Sheriyans Coding School, Bhopal",
    "27B, Near sharma&lsquo;s cafe, Sheriyans Coding School, Bhopal",
    "26B, Near arjun&lsquo;s cafe, Sheriyans Coding School, Bhopal",
  ]
  return (
    <div>
      {
        locations.map(function (elem,idx) {
          return <div key={idx} onClick={()=>{
            props.setvehicalPanel(true)
            props.setpanelOpen(false)
          }} className="active:border-2 p-2 rounded-xl active:border-black flex gap-4 my-4 items-center justify-center">
            <h2 className="bg-white flex items-center justify-center text-xl px-3 py-1 rounded-full ml mr-4">●</h2>
            <h4 className="font-semibold">{elem}</h4>
          </div>
        })
      }


    </div>
  )
}

export default LocationSearchPanel