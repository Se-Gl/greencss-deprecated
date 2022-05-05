function ServicePlant({ width = '40', height = '40' }) {
  return (
    <div className='bg-white border-black w-60px p-10px rounded-10px border-1px border-solid'>
      <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 40 40'>
        <mask id='path-1-inside-1_74_1837' fill='#fdfdfd'>
          <path d='M33.043 11.675A5 5 0 0028.333 5a4.945 4.945 0 00-3.01 1.027 6.607 6.607 0 00-10.646 0A4.945 4.945 0 0011.667 5a5 5 0 00-5 5c0 .568.098 1.132.29 1.667a5.003 5.003 0 00-.29 10 4.94 4.94 0 002.085-.474c.59.439 1.333.937 2.1 1.462A23.39 23.39 0 0115 25.833a74.224 74.224 0 01-1.643 8.417.812.812 0 00-.024.22c.042 1.35 2.279 2.035 6.644 2.04h.046c4.365 0 6.602-.69 6.644-2.04a.812.812 0 00-.024-.22 81.17 81.17 0 01-1.656-8.317 18.27 18.27 0 013.81-2.991c.93-.63 1.805-1.225 2.461-1.744.65.305 1.358.465 2.075.469a5 5 0 10-.29-9.992zm-5.181 9.887c-3.149 2.133-4.529 3.181-4.529 4.271a67.961 67.961 0 001.59 8.389c-1.577.557-3.256.77-4.923.623a11.713 11.713 0 01-4.923-.623 67.942 67.942 0 001.59-8.389c0-1.14-1.489-2.265-4.882-4.56-.57-.385-1.11-.753-1.585-1.09a5.018 5.018 0 001.29-2.21c.137.055.28.085.42.127 2.228 2.99 3.94 4.5 5.097 4.5.122 0 .244-.018.361-.055.434-.142.954-.552.965-1.71.024-2.22.017-3.667.009-4.423a6.377 6.377 0 003.316 0c0 .748-.015 2.203.009 4.423.011 1.158.531 1.568.965 1.71.117.037.239.056.361.055 1.157 0 2.869-1.517 5.097-4.5.138-.042.282-.07.417-.125a4.985 4.985 0 001.311 2.228c-.556.41-1.241.874-1.956 1.359zM16.68 17c0 .818 0 2.07-.013 3.792a15.093 15.093 0 01-2.537-2.567A5.166 5.166 0 0016.68 17zm6.653 3.797a251.965 251.965 0 01-.013-3.794 5.184 5.184 0 002.55 1.227 15.163 15.163 0 01-2.537 2.567zm10-.797A3.33 3.33 0 0130 16.647a.833.833 0 00-1.333-.667 3.387 3.387 0 01-5.029-1.28.832.832 0 00-1.166-.38 4.833 4.833 0 01-4.927 0 .835.835 0 00-1.167.38 3.388 3.388 0 01-5.045 1.282.833.833 0 00-1.21.242.85.85 0 00-.123.443 3.333 3.333 0 11-3.333-3.334 3.292 3.292 0 012 .685.833.833 0 001.21-.255.861.861 0 00.035-.82.834.834 0 00-.245-.293 3.318 3.318 0 01.72-5.736 3.32 3.32 0 013.816.953.834.834 0 001.379-.152 4.953 4.953 0 018.833 0 .833.833 0 001.378.152 3.319 3.319 0 114.54 4.785.905.905 0 00-.333.701.833.833 0 001.333.667 3.292 3.292 0 012-.687 3.334 3.334 0 010 6.667z'></path>
        </mask>
        <path
          fill='#3E7A02'
          stroke='#3E7A02'
          strokeWidth='4'
          d='M33.043 11.675A5 5 0 0028.333 5a4.945 4.945 0 00-3.01 1.027 6.607 6.607 0 00-10.646 0A4.945 4.945 0 0011.667 5a5 5 0 00-5 5c0 .568.098 1.132.29 1.667a5.003 5.003 0 00-.29 10 4.94 4.94 0 002.085-.474c.59.439 1.333.937 2.1 1.462A23.39 23.39 0 0115 25.833a74.224 74.224 0 01-1.643 8.417.812.812 0 00-.024.22c.042 1.35 2.279 2.035 6.644 2.04h.046c4.365 0 6.602-.69 6.644-2.04a.812.812 0 00-.024-.22 81.17 81.17 0 01-1.656-8.317 18.27 18.27 0 013.81-2.991c.93-.63 1.805-1.225 2.461-1.744.65.305 1.358.465 2.075.469a5 5 0 10-.29-9.992v0zm-5.181 9.887c-3.149 2.133-4.529 3.181-4.529 4.271a67.961 67.961 0 001.59 8.389c-1.577.557-3.256.77-4.923.623a11.713 11.713 0 01-4.923-.623 67.942 67.942 0 001.59-8.389c0-1.14-1.489-2.265-4.882-4.56-.57-.385-1.11-.753-1.585-1.09a5.018 5.018 0 001.29-2.21c.137.055.28.085.42.127 2.228 2.99 3.94 4.5 5.097 4.5.122 0 .244-.018.361-.055.434-.142.954-.552.965-1.71.024-2.22.017-3.667.009-4.423a6.377 6.377 0 003.316 0c0 .748-.015 2.203.009 4.423.011 1.158.531 1.568.965 1.71.117.037.239.056.361.055 1.157 0 2.869-1.517 5.097-4.5.138-.042.282-.07.417-.125a4.985 4.985 0 001.311 2.228c-.556.41-1.241.874-1.956 1.359v0zM16.68 17c0 .818 0 2.07-.013 3.792a15.093 15.093 0 01-2.537-2.567A5.166 5.166 0 0016.68 17v0zm6.653 3.797a251.965 251.965 0 01-.013-3.794 5.184 5.184 0 002.55 1.227 15.163 15.163 0 01-2.537 2.567v0zm10-.797A3.33 3.33 0 0130 16.647a.833.833 0 00-1.333-.667 3.387 3.387 0 01-5.029-1.28.832.832 0 00-1.166-.38 4.833 4.833 0 01-4.927 0 .835.835 0 00-1.167.38 3.388 3.388 0 01-5.045 1.282.833.833 0 00-1.21.242.85.85 0 00-.123.443 3.333 3.333 0 11-3.333-3.334 3.292 3.292 0 012 .685.833.833 0 001.21-.255.861.861 0 00.035-.82.834.834 0 00-.245-.293 3.318 3.318 0 01.72-5.736 3.32 3.32 0 013.816.953.834.834 0 001.379-.152 4.953 4.953 0 018.833 0 .833.833 0 001.378.152 3.319 3.319 0 114.54 4.785.905.905 0 00-.333.701.833.833 0 001.333.667 3.292 3.292 0 012-.687 3.334 3.334 0 010 6.667z'
          mask='url(#path-1-inside-1_74_1837)'></path>
      </svg>
    </div>
  )
}

export default ServicePlant