const Label = ({ children, spacing = "true" }) => {
  return (
    <label className={`block text-sm font-medium text-white/70 ${spacing ? 'mb-1' : ''}`}>
      {children}
    </label>
  )
}

export default Label;