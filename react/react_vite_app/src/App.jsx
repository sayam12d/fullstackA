import React from 'react'
import Student from './student';
import StudentState from './studentState';
import logo from './images.png'
import UseOfState from './UseOfState';
import Imagemanipulation from './Imagemanipulation';

const App = () => {
  let a = 12;
  const mystyle = {
    backgroundColor: 'red',
    color:"cyan"
  }

  // const studentData = [{
  //   college: "ABES Engineering College",
  //   pic: 'https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png',
  //   name: 'Stuti',
  //   roll: '154',
  //   branch: 'CSE',
  //   section:'A'
  // },
  // {
  //   college: "ABES Engineering College",
  //   pic: 'https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png',
  //   name: 'Tithaye',
  //   roll: '209',
  //   branch: 'CSE',
  //   section:'B'
  //   },
  //   {
  //     college: "ABES Engineering College",
  //     pic: 'https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png',
  //     name: 'Sakshi',
  //     roll: '111',
  //     branch: 'CSE',
  //     section:'C'
  //   }]

  return (
 
    <div>
   <Imagemanipulation/>
    </div>

    // <div style={mystyle}>
    //   ABES Engineering College
    //   <div style={mystyle}>{a}</div>
    //   <div style={{ color: 'blue', backgroundColor: 'cyan', display: 'flex', justifyContent: 'space-evenly' }}>
        
    //     {/* <Student data={studentData[1]}/> */}
    //     {/* <Student college="ABES Engineering College"
    //       pic={<img src={logo} />} name='Stuti' roll='34' branch='CSE' section='A' />
        
    //     <Student
    //       pic={<img src={logo} />} name='Stuti' roll='34' branch='CSE' section='A' />
        
    //     <Student college="ABES Engineering College"
    //       pic={<img src={logo}/>} name='Stuti' roll='34' branch='CSE' section='A' /> */}
    //   </div>
    // </div>
  )
}

export default App