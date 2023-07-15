import React from 'react'

/*function Profile() {


  return (
    <div>Profile</div>
  )
}

export default Profile*/

class Profile extends React.Component{


  constructor(props){

    super(props);

     //const [count]=usestate(0)
  this.state={
    count:0,
    count1:100,
   
  }

  console.log("constructer");

  }

  componentDidMount () {
    console.log("componentdidmount");

  }



  render(props){

    console.log("render");


    return (

      <div>
       
        {this.state.count}
        <br></br>
        {this.state.count1}
     
        <button onClick={()=>{
          this.setState({

            count:this.state.count+1,
            count1:this.state.count1-10,
          })
        }}>button</button>

        </div>
    )
  }


}

export default Profile