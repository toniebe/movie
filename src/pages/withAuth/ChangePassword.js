import { useContext } from "react";
import { UserContext } from "../../context/UserContex";

const ChangePassword = () => {
  const { input, setInput, fungsi } = useContext(UserContext);
  const { updatePassword } = fungsi;

  const handleChange = (event) => {
    let typeOfValue = event.target.value;
    let name = event.target.name;
    setInput({ ...input, [name]: typeOfValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updatePassword();
    setInput({
      current_password: "",
      new_password: "",
      confirm_new_password: "",
    });
  };
  return (
    <>
      <div className="row">
        <div className="section">
          <h1>Update Password</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="new_password">Current Password: </label>
              <input className="form-control" type="password" value={input.current_password} required={true} name="current_password" id="new_password" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label for="new_password">New password: </label>
              <input className="form-control" type="password" value={input.new_password} required={true} name="new_password" id="new_password" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label for="confirm_new_password">confirm new password: </label>
              <input className="form-control" type="password" value={input.confirm_new_password} required={true} name="confirm_new_password" id="confirm_new_password" onChange={handleChange} />
            </div>

            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
