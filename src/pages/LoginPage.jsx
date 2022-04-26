import { useDispatch } from 'react-redux';
import { logUser, passUser } from 'Redux/slice/userSlice';
import { useNavigate } from 'react-router-dom';

import styles from '../pages/LoginPage.module.css';

import Title from 'Title';

export const LoginPage = () => { 
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onHandleSubmit = (e) => { 
    e.preventDefault();
    
    const form = e.currentTarget;

    const login = form.elements.login.value;
    const password = form.elements.password.value;
    dispatch(logUser(form.elements.login.value));
    dispatch(passUser(form.elements.password.value));

    if (login === '' || password === '') { 
      alert('error');
      return;
    };
    form.reset();
    navigate('/dashboard', { replace: true });
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={onHandleSubmit}>
        <Title title='User authorization'/>
        <label>Login
          <input type="text" name="login" />
        </label>
        <label>Password
          <input type="password" name="password" />
        </label>
        <button className={styles.btn} type='submit'>Authorization</button>
      </form>
    </div>
  );
}

