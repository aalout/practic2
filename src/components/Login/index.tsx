import { observer } from 'mobx-react-lite';
import authStore from '../../stores/AuthStore';
import { useState } from 'react';
import styles from "./Login.module.scss"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    authStore.login(email, password);
  };

  return (
    <div className={styles.login}>
      <form
        className={styles.login__form}
        onSubmit={handleSubmit}
        style={{
          borderColor: authStore.isAuthorized? 'rgb(126, 217, 245)' : 'rgba(206, 206, 206, 0.5)',
          boxShadow: authStore.isAuthorized? '0 0 20px 20px rgba(126, 217, 245, 0.5)' : '0 0 20px 5px rgba(63, 63, 63, 0.5)',
          transition: 'border-color 0.7s ease-in-out, box-shadow 0.7s ease-in-out',
        }}
      >
        {authStore.isAuthorized ? (
          <p className={styles.success}>Auth success!</p>
        ) : (
          <>
            <h1>Login</h1>
            <label className={styles.login__form__label1}>
              <input
                className={styles.login__form__label__input}
                placeholder='Email'
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <br />
            <label className={styles.login__form__label}>
              <input
                className={styles.login__form__label__input}
                placeholder='Password'
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <br />
            <button className={styles.login__button} type="submit">
              Submit
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default observer(Login);