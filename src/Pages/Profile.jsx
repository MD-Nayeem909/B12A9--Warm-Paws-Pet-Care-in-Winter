import React, { useContext } from "react";
import { useState } from "react";
import { Mail, User, Camera } from "lucide-react";
import { AuthContext } from "../Providers/AuthContext";
import toast from "react-hot-toast";
import PopupModal from "../Components/PopupModal";

const Profile = () => {
  const { user, setUser, updateUserData, deleteAccount } =
    useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    email: user?.email || "",
    photoURL: user?.photoURL || "",
  });

  const handleUpdate = async () => {
    try {
      setLoading(true);
      await updateUserData({
        displayName: formData.displayName,
        photoURL: formData.photoURL,
      });
      setUser({
        ...user,
        displayName: formData.displayName,
        photoURL: formData.photoURL,
      });
      toast.success("Profile updated successfully ✅");
      setEditMode(false);
    } catch (error) {
      toast.error("Error updating profile: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteAccount();
      setUser(null);
      toast.success("Account deleted successfully ✅");
    } catch (error) {
      toast.error("Error deleting account: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-300.86px)] bg-base-200">
      <div className="">
        {/* Header Section */}
        <div className="max-w-5xl mx-auto px-6 py-10 ">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">
              Hello, {user?.displayName?.split(" ")[0] || "User"} 👋
            </h1>
          </div>
          <p className="text-sm opacity-80">
            This is your profile page. You can see your progress and manage your
            information below.
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-base-100 rounded-2xl shadow-xl  mx-auto p-10 flex flex-col md:flex-row items-center gap-6">
          {/* Left - Image */}
          <div className="flex flex-col w-1/2 items-center">
            <div className="relative">
              <img
                src={user?.photoURL}
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
                        setFormData({ ...formData, photoURL: reader.result });
                        setUser({ ...user, photoURL: reader.result });
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </label>
            </div>
            <h2 className="text-xl text-primary font-semibold mt-4">
              {user?.displayName}
            </h2>
            <p className="text-gray-500">{user?.email}</p>
          </div>

          {/* Right - Info */}
          <div className="md:col-span-2">
            {editMode ? (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-primary">
                    Display Name
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full mt-1"
                    value={formData.displayName}
                    placeholder="Your Name"
                    onChange={(e) =>
                      setFormData({ ...formData, displayName: e.target.value })
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
                <div className="flex  gap-2">
                  <button onClick={handleUpdate} className="btn btn-primary ">
                    Save Changes
                  </button>
                  <button
                    onClick={() => setEditMode(false)}
                    className="grow btn bg-rose-500 hover:bg-rose-700 text-white"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <User className="text-indigo-600" />
                  <p className="text-primary font-medium">
                    {user?.displayName}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="text-indigo-600" />
                  <p className="text-primary font-medium">{user?.email}</p>
                </div>
                <button
                  onClick={() => setEditMode(true)}
                  className="btn btn-outline rounded-full btn-secondary w-full"
                >
                  Update profile
                </button>
                <button
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                  className="btn bg-rose-500 hover:bg-rose-700 text-white rounded-full w-full"
                >
                  Remove this account
                </button>
              </div>
            )}
          </div>
          <PopupModal text="Are you sure you want to delete your account?" cb={handleDelete}></PopupModal>
        </div>
      </div>
    </div>
  );
};

export default Profile;
