import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation-auth';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        type="text"
        name="name"
        size="small"
        required
      />

      <TextField
        id="outlined-basic"
        label="email"
        variant="outlined"
        type="email"
        name="email"
        size="small"
        required
      />

      <TextField
        id="outlined-basic"
        label="password"
        variant="outlined"
        type="password"
        name="password"
        size="small"
        required
      />
      <Button variant="contained" size="small" type="submit">
        Register
      </Button>
    </form>
  );
};
