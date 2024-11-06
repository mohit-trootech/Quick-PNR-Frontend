/* eslint-disable jsx-a11y/no-redundant-roles */
/**Update Profile Modal */
import Context from "../../context/Contexts";
import { useContext } from "react";

function UpdateProfile({ user }) {
  /**Update Profile Modal  */
  const { updateUserProfile } = useContext(Context.UserContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    updateUserProfile(new FormData(event.target));
  };

  return (
    <>
      <dialog id="update_profile" className="modal">
        <div className="modal-box" style={{ scrollbarWidth: "none" }}>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute scale-95 transition-all hover:scale-100 hover:rotate-90 right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Update Profile!</h3>
          <div className="py-4">
            <form
              method="post"
              onSubmit={handleSubmit}
              role="form"
              className="w-full mt-5 sm:mt-8"
            >
              <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
                <input
                  type="text"
                  placeholder="Enter Your First Name"
                  name="first_name"
                  defaultValue={user.first_name}
                  className="input input-bordered input-primary w-full"
                />
                <input
                  type="text"
                  placeholder="Enter Your Last Name"
                  name="last_name"
                  defaultValue={user.last_name}
                  className="input input-bordered input-primary w-full"
                />
                <input
                  type="text"
                  placeholder="Enter Your Username"
                  name="username"
                  defaultValue={user.username}
                  className="input input-bordered input-primary w-full"
                />
                <input
                  type="number"
                  placeholder="Enter Your Age"
                  name="age"
                  min={18}
                  max={100}
                  defaultValue={user.age}
                  className="input input-bordered input-primary w-full"
                />
                <textarea
                  className="textarea textarea-primary"
                  placeholder="Enter Address"
                  name="address"
                  id="address"
                >
                  {user.address}
                </textarea>
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                  <button
                    role="button"
                    className="btn btn-outline btn-primary btn-block max-w-[200px]"
                  >
                    Update Address
                  </button>
                  <button
                    type="submit"
                    role="button"
                    className="btn btn-primary btn-block max-w-[200px]"
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default UpdateProfile;
