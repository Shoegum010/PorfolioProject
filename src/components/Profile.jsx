import React, { useState } from 'react'
import { userProfileDefaultData } from '../Utils/Constants';
import SvgIcon from "@mui/joy/SvgIcon";
import { Button, styled } from "@mui/joy";

export default function Profile() {
    const [profileData, setProfileData]= useState(userProfileDefaultData);
    const tempProfileData= profileData;

    const changeProfileData= (event)=>{
        setProfileData({...tempProfileData})
        event.preventDefault();
    }
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file)
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setProfileData((prevData) => ({...prevData, "Photo": reader.result}))
          };
          reader.readAsDataURL(file);
        }
    };

    const updateProfile = (event, dataType) => {
        const value= event.target.value
        switch(dataType){
            case "date":
                setProfileData((prevData) => ({...prevData, "DOB": value}))
                break;
            case "email":
                tempProfileData["EmailID"]= value
                break;
            case "number":
                tempProfileData["PhoneNo"]= value
                break;
            case "photo":
                handleImageChange(event)
                break;
            default:
                break
        }
    }
    // console.log(profileData)
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });
    
    return (

        <div className="ProfileContainer">
            <div className='ProfileData'>
                <div className="ProfileHeader">
                    <div className="ProfilePicDiv">
                        <img className="profilePic" src={profileData["Photo"]} />
                    </div>
                    <h1 className="userName">{profileData["Name"]}</h1>
                    <div className="BioData">
                        <p className="userData"><b>UserName:</b> {profileData["UserName"]}</p>
                        <p className="userData"><b>EmailID:</b> {profileData["EmailID"]}</p>
                        <p className="userData"><b>Number:</b> {profileData["PhoneNo"]}</p>
                        <p className="userData"><b>Address:</b> {profileData["Address"]}</p>
                        <p className="userData"><b>Description:</b> {profileData["Description"]}</p>
                    </div>
                </div>
                <div className="ProfileBody">
                    <div className="form">
                        <div className="inputDiv">
                            <p className="Tag">DOB</p>
                            <input className="profileInput" type="date" onChange={(event) => updateProfile(event, "date")} />
                        </div>
                        <div className="inputDiv">
                            <p className="Tag">Email</p>
                            <input className="profileInput" placeholder='Enter Email' type="email" onChange={(event) => updateProfile(event, "email")}/>
                        </div>
                        
                        <div className="inputDiv">
                            <p className="Tag">Phone Number</p>
                            <input className="profileInput" placeholder='Enter number'type="number" onChange={(event) => updateProfile(event, "number")}/>
                        </div>
                        
                        <div className="inputFileDiv">
                            <p className="Tag">Photo</p>
                            <div className="FileInputDiv">
                                <input className="profilePicInput" type="file" onChange={(event) => updateProfile(event, "photo")}/>
                                <Button
            component="label"
            role={undefined}
            tabIndex={-1}
            variant="outlined"
            color="neutral"
            startDecorator={
              <SvgIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
              </SvgIcon>
            }
          >
            Upload a file
            <VisuallyHiddenInput type="file" />
          </Button>
                            </div>
                        </div>
                    </div>
                    <div className="ProfileFooter">
                        <button onClick={changeProfileData} className="SubmitBtn" >Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
