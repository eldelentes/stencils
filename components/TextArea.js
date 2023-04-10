const TextArea = ({ value, onChange, ...props }) => {
  return (
    <textarea
      className="w-full px-2 text-sm text-white border rounded-md bg-white/5 border-white/5 focus:outline-none focus:ring-1 focus:ring-white/50 focus:border-transparent"
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}

export default TextArea