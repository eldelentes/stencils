const Avatar = ({ size, src, initials }) => {
  const sizeClass = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  }[size]

  return (
    <figure className={`relative flex items-center justify-center font-medium text-teal-500 rounded-lg bg-teal-500/20 ${sizeClass}`}>
      {src && ( <img className="object-cover w-full h-full rounded-full" src={src} alt={initials} /> )}
      <span>{initials}</span>
    </figure>
  )
}

export default Avatar