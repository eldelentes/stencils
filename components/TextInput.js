const TextInput = ({ value, onChange, ...props }) => {
  return (
    <input
      className="rounded-md px-2 bg-white/5 h-[32px] border-white/5 border text-sm text-white w-full focus:outline-none focus:ring-1 focus:ring-white/50 focus:border-transparent"
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}

export default TextInput