import React, { useRef, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase.init";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [updateName, setUpdateName] = useState(user.displayName);
  const [updatePhoto, setUpdatePhoto] = useState(user.photoURL);
  const nameElement = useRef();
  const photoElement = useRef();

  const currentUser = {
    name: updateName,
    profilePicture: updatePhoto,
  };
  function handleUpdate(e) {
    e.preventDefault();
    updateProfile(auth.currentUser, {
      displayName: nameElement.current.value,
      photoURL: photoElement.current.value,
    });
    setUpdateName(nameElement.current.value);
    setUpdatePhoto(photoElement.current.value);
  }
  return (
    <div className="hero-content flex lg:flex-col ">
      <div className="text-center lg:text-left">
        <div className="p-1 space-y-6">
          <div className="flex items-center justify-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/20">
              {currentUser.profilePicture && (
                <img
                  src={currentUser.profilePicture}
                  alt={currentUser.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-lg font-medium text-white text-center">
              {currentUser.name}
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleUpdate}>
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your Name"
              name="name"
              ref={nameElement}
            />
            <label className="label">Photo</label>
            <input
              type="text"
              className="input"
              placeholder="Enter Photo URL"
              name="photo"
              ref={photoElement}
            />

            <div className="mt-5"></div>
            <div className="flex flex-col">
              <button className="btn btn-neutral">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
