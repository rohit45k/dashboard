import { useContext } from 'react';
import ThemeContext from '../../store/context';
import classes from './NewUser.module.scss';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';

const NewUser = ({ title, inputs }) => {
  const themeCtx = useContext(ThemeContext);

  const [file, setFile] = useState('');

  return (
    <div className={`${classes.new} ${themeCtx.dark && classes.dark}`}>
      <div className={classes.top}>
        <div className={classes.left}>
          <h1>{title}</h1>
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
            }
            alt='icon'
          />
        </div>
        <div className={classes.right}>
          <form>
            <div className={classes.formInput}>
              <label className={classes.imgInput} htmlFor='imgInput'>
                Image : <DriveFolderUploadOutlinedIcon />
              </label>
              <input
                type='file'
                id='imgInput'
                accept='image/*'
                onChange={(e) => setFile(e.target.files[0])}
                hidden
              />
            </div>

            {inputs.map((input) => (
              <div className={classes.formInput} key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
            ))}
            {inputs.length % 2 === 0 && (
              <div className={classes.formInput}></div>
            )}
            <div className={`${classes.formInput} ${classes.submit}`}>
              <input type='submit' value='Submit' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
