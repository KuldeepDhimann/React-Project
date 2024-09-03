import { MdMessage } from 'react-icons/md'
import styles from './Button.module.css'
const Button = ( { isOutLine, text, icon, ...rest } ) => {
  return (
        <button
        {...rest}
        className={ isOutLine ? styles.outlineBtn : styles.primaryBtn}> 
                {icon}
                {text}

            </button>
  )
}

export default Button