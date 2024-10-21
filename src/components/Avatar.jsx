import React from 'react'

const Avatar = ({ src, alt, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'max-w-[300px] h-90',
  }

  return (
    <div className={`rounded-full overflow-hidden ${sizeClasses[size]}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export default Avatar
