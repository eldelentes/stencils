const Button = ({
  children,
  variant = 'default',
  fullSize = false,
  as: Component = 'button',
  ...props }) => {
    const variantClass = {
      default: 'bg-white/10 border-white/5 hover:bg-white/20',
      primary: 'bg-teal-500 text-white border-teal-400 hover:bg-teal-600',
    }[variant]

    return (
      <Component className={`inline-flex items-center justify-center px-3 h-[32px] text-xs font-semibold border rounded-md shadow-sm ${variantClass} ${fullSize ? 'w-full' : ''}`} {...props}>
        {children}
      </Component>
    )
  }

export default Button;