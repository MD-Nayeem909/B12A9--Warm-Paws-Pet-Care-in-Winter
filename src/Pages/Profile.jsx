import React from "react";
import { useState } from "react";
import { Edit, Mail, User, Camera } from "lucide-react";
import userImg from "../assets/demo-app.webp";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Jesse Jones",
    email: "jesse@example.com",
    image: userImg,
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleUpdate = () => {
    setUser(formData);
    setEditMode(false);
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-285px)] bg-base-200">
      <div className="">
        {/* Header Section */}
        <div className="max-w-5xl mx-auto px-6 py-10 ">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">
              Hello, {user.name.split(" ")[0]} 👋
            </h1>
          </div>
          <p className="text-sm opacity-80">
            This is your profile page. You can see your progress and manage your
            information below.
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-base-200 text-gray-800 rounded-2xl shadow-xl max-w-5xl mx-auto py-10 flex flex-col md:flex-row items-center gap-6">
          {/* Left - Image */}
          <div className="flex flex-col w-1/2 items-center">
            <div className="relative">
              <img
                src={user.image}
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
              />
              <label className="absolute bottom-2 right-2 bg-indigo-600 p-2 rounded-full cursor-pointer hover:bg-indigo-700">
                <Camera className="w-5 h-5 text-white" />
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setFormData({ ...formData, image: reader.result });
                        setUser({ ...user, image: reader.result });
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </label>
            </div>
            <h2 className="text-xl text-primary font-semibold mt-4">
              {user.name}
            </h2>
            <p className="text-gray-500">{user.email}</p>
          </div>

          {/* Right - Info */}
          <div className="md:col-span-2">
            {editMode ? (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-primary">
                    Name
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full mt-1"
                    value={formData.name}
                    placeholder="Your Name"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="text-sm text-primary font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    className="input input-bordered w-full mt-1"
                    value={formData.email}
                    placeholder="user@email.com"
                    disabled
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <button
                  onClick={handleUpdate}
                  className="btn btn-primary w-full"
                >
                  Save Changes
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <User className="text-indigo-600" />
                  <p className="text-primary font-medium">{user.name}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="text-indigo-600" />
                  <p className="text-primary font-medium">{user.email}</p>
                </div>
                <button
                  onClick={() => setEditMode(true)}
                  className="btn btn-outline  btn-secondary w-full"
                >
                  Update Profile
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
