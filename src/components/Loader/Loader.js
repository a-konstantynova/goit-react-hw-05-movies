import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loader.module.css';

export default function Spinner() {
  return (
    <div className={s.loader}>
      <Loader
        type="Oval"
        color="#e24949"
        height={60}
        width={60}
        timeout={4000} 
      />
    </div>
  );
}
