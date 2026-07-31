import React from 'react'

const Student = () => {
  return (
    <div style={{backgroundColor: 'green',border:'2px solid red', height:'300px',width:'300px'}}>
        <h2 style={{color:'red'}}>Student Info</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKCgzMltNy01S6wokYf9ejBxfyWh2r-YfLTqNoYd5fUNxBQ0VXmEmwkVU&s=10" alt="" height={'150'} width={'150'}/>
        <h3>Student Name: Swastik </h3>
        <h4>B.Tech(DS-A)</h4>
    </div>
  )
}

export default Student