import useForm from "../../hooks/useForm";
///para  recuparar variables de estado utilizamos useSelector
import { useSelector,useDispatch } from "react-redux";
import { saveFormData, resetFormData } from "../../redux/form/formActions";
import ModalInfo from '../../components/ModalInfo';
import ModalLogout from "../../components/ModalLogout";
import { motion } from "framer-motion";
import { useState } from "react";
import '../../../src/assets/styles/loginForm.css';


const Login = () =>{

const [values, handleChange, resetForm] = useForm({username: '', email:'', password:''});
const [showModalInfo, setShowModalInfo] = useState(false);
const [showModalLogout, setShowModalLogout] = useState(false);
const form = useSelector(state => state.form);
const dispatch = useDispatch();
const [showPass, setShowPass] = useState(false);
const passInput = document.getElementById("password");
const passBtn = document.getElementById("btnShowPass");

const handleSubmit = (event) =>{
  event.preventDefault();
 if(values.password !== form.password){
      setShowModalInfo(true);
  }else{
    dispatch(saveFormData(values));
    if(showPass){
        passBtn.textContent = 'Show';
        passInput.type = "password"; 
        setShowPass(!showPass);   
    }
  }
};

const hideModalInfo = () => {
  setShowModalInfo(false);
};

const hideModalLogout = () => {
    setShowModalLogout(false);
  };

const logOut = () => {
    dispatch(resetFormData());
    setShowModalLogout(false);
    resetForm();
   
}


const showPassword = () => {
    console.log(showPass);
    if (passInput.value.trim() !== ""){
        if(!showPass){
            passBtn.textContent = 'Hide';
            passInput.type = "text"; 
        }else{
            passBtn.textContent = 'Show';
            passInput.type = "password"; 
        }
    }else{
        console.log('el input esta vacio');
    }
    setShowPass(!showPass);   
  }

  const openLogoutModal = () =>{
    if(form.formData.username !=='' && form.formData.email !==''){
    setShowModalLogout(true);
    }else{
        console.log('no se logueo nadie');
    }
  };

 
    return (
      <motion.div 
      initial={{opacity: 0, y: -70}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 1}}
  >
      <ModalInfo
          visible={showModalInfo}
          message="Password Incorrecto"
          onClose={hideModalInfo}
      />
      <ModalLogout
          visible={showModalLogout}
          message="¿Estás seguro que quieres cerrar sesión?"
          onClose={hideModalLogout}
          onCloseReset={logOut}
      />
      <div className="LoginContainer">
          <form onSubmit={handleSubmit}>
              <h2>Login Form</h2>
              <div>
                  <label htmlFor="username">Username</label>
                  <input
                      type="text"
                      id="username"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                  />
              </div>
              <div>
                  <label htmlFor="email">Email</label>
                  <input
                      type="email"
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                  />
              </div>
              <div>
                  <label htmlFor="password">Password</label>
                  <input
                      type="password"
                      id="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                  />
                  <button type="button" id="btnShowPass" onClick={showPassword}>Show</button>
              </div>
              <div className="button-container">
                  <button type="submit">Login</button><a href="#" onClick={openLogoutModal}>Logout</a>
               </div>
          </form>
      </div>
  </motion.div>
      );
};
    
export default Login;