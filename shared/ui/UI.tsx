import style from './UI.module.scss'

import getStatedButtonIcon from '@/images/icons/Button/get-started.svg'
import emailButtonIcon from '@/images/icons/Button/email.svg'
import seeButtonIcon from '@/images/icons/Button/see.svg'
import userButtonIcon from '@/images/icons/Button/user.svg'

import emailInputIcon from '@/images/icons/input/Email.svg'
import userInputIcon from '@/images/icons/input/User.svg'
import lockKeyInputIcon from '@/images/icons/input/LockKey.svg'

import { useForm, SubmitHandler } from "react-hook-form"

import Image from 'next/image'

export const Button = ({children, icon, mb, padding = 50, bg, type, border, colorText, width, paddingTop}) => {

	const ButtonIcons = {
		getStated: getStatedButtonIcon,
		email: emailButtonIcon,
		see: seeButtonIcon,
		user: userButtonIcon
	}

	return ( 
		<button style={{
			marginBottom: mb,
			paddingLeft: padding,
			paddingRight: padding,
			backgroundColor: bg,
			border: border,
			color: colorText,
			width: width,
			paddingTop: paddingTop,
			paddingBottom: paddingTop
		}} className={style.button}
			type={type}
		>
			{icon && <Image src={ButtonIcons[icon]} alt={children}/>}
			<span>{children}</span>
			</button>
	 );
}

type Inputs = {
  example: string
  exampleRequired: string
}

export const Input = ({
  placeholder = "",
  type = "text",
  icon,
  registerInput = 'inputDefalt',
	isRequired = false,
  btn = false,
  btnIcon,
	regi = {}
}) => {
  const InputIcons = {
    email: emailInputIcon,
    user: userInputIcon,
    lockKey: lockKeyInputIcon,
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <label className={style.input_wrapper + ' ' + ( isRequired && (errors.registerInput ? style.error : null) )}>
      {icon && <Image src={InputIcons[icon]} alt={placeholder} />}
      <input
        type={type}
        placeholder={placeholder}
        className={style.input}
        // {...register(registerInput, {required: isRequired})}
				regi
      />
      {btn && (
        <Button icon={btnIcon} type="submit">
          Subscribe
        </Button>
      )}
    </label>
  );
};

export const Title = ({children, level = 2, fontSize, mb}) => {
	return level == 2 ? (
		<h2 style={{
			fontSize: fontSize,
			marginBottom: mb
		}} className={style.title}>{children}</h2>
	) : (
		<h3 className={style.title+' '+style.title__3}>{children}</h3>
	)
}
export const Text = ({children, t_transform, mb, fontSize, fontWeight}) => {
	return (
		<p style={{
			textTransform: t_transform,
			marginBottom: mb,
			fontSize: fontSize,
			fontWeight: fontWeight
		}} className={style.text}>{children}</p>
	)
}