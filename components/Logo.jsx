import React from 'react'

function Logo({ width = '437', height = '61' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 437 61'
      id='omenCSS_logo'>
      <path
        fill='#081120'
        d='M0 26.3c.47-3.73 1.6-7.2 3.4-10.4 1.8-3.2 4.07-5.98 6.8-8.35 2.73-2.37 5.88-4.22 9.45-5.55C23.22.67 27 0 31 0s7.78.67 11.35 2c3.57 1.33 6.73 3.18 9.5 5.55 2.77 2.37 5.03 5.15 6.8 8.35 1.77 3.2 2.88 6.67 3.35 10.4H51.5c-.47-2.33-1.32-4.5-2.55-6.5-1.23-2-2.75-3.72-4.55-5.15a21.73 21.73 0 00-6.1-3.4C36.03 10.42 33.6 10 31 10c-2.53 0-4.95.42-7.25 1.25-2.3.83-4.35 1.97-6.15 3.4-1.8 1.43-3.32 3.15-4.55 5.15-1.23 2-2.08 4.17-2.55 6.5H0zm62 7.1c-.47 3.73-1.6 7.2-3.4 10.4-1.8 3.2-4.07 5.97-6.8 8.3-2.73 2.33-5.88 4.18-9.45 5.55C38.78 59.02 35 59.7 31 59.7s-7.78-.68-11.35-2.05c-3.57-1.37-6.72-3.22-9.45-5.55-2.73-2.33-5-5.1-6.8-8.3C1.6 40.6.47 37.13 0 33.4h10.5c.47 2.33 1.32 4.5 2.55 6.5 1.23 2 2.75 3.72 4.55 5.15 1.8 1.43 3.85 2.57 6.15 3.4 2.3.83 4.72 1.25 7.25 1.25 2.53 0 4.95-.42 7.25-1.25 2.3-.83 4.35-1.97 6.15-3.4 1.8-1.43 3.32-3.15 4.55-5.15 1.23-2 2.08-4.17 2.55-6.5H62zM133.1.9v13.7l-10.5 9.9-14.1 13.4-4.7 4.4L85 24.5v34.2H74.5V.9l29.35 27L133.1.9zm-10.5 33.5l10.5-9.9v34.2h-10.5V34.4zM183.2 2.9v8.8h-38.1V2.9h38.1zm-27.6 47h27.5v8.8h-38v-33h36.7V34h-26.2v15.9zM235.6 37.7l10.5 9.7v13.2l-40.4-36.7v34.8h-10.5V1l38.9 35.4 1.5 1.3zm10.5-34.8v34.7L235.6 28V2.9h10.5zM292 48.7c2.87-.53 5.47-1.57 7.8-3.1s4.27-3.43 5.8-5.7L314 45c-2.33 3.6-5.42 6.6-9.25 9-3.83 2.4-8.08 3.87-12.75 4.4-.6.07-1.2.12-1.8.15a33.124 33.124 0 01-3.65 0c-.57-.03-1.15-.08-1.75-.15-3.73-.4-7.23-1.43-10.5-3.1-3.27-1.67-6.1-3.77-8.5-6.3-2.4-2.53-4.28-5.45-5.65-8.75s-2.05-6.78-2.05-10.45c0-3.67.68-7.15 2.05-10.45 1.37-3.3 3.25-6.23 5.65-8.8 2.4-2.57 5.23-4.68 8.5-6.35 3.27-1.67 6.77-2.7 10.5-3.1v9.6c-2.33.4-4.52 1.17-6.55 2.3a19.269 19.269 0 00-5.25 4.25c-1.47 1.7-2.62 3.62-3.45 5.75-.83 2.13-1.25 4.4-1.25 6.8 0 2.33.42 4.57 1.25 6.7a18.98 18.98 0 003.45 5.7c1.47 1.67 3.22 3.07 5.25 4.2a20.53 20.53 0 006.55 2.3c1.2.2 2.4.3 3.6.3 1.26 0 2.46-.1 3.6-.3zm13.6-29.2c-1.53-2.27-3.47-4.17-5.8-5.7-2.33-1.53-4.93-2.57-7.8-3.1V1.2c4.67.53 8.92 1.97 12.75 4.3s6.92 5.3 9.25 8.9l-8.4 5.1zM330.4 42.9c1 1.73 2.5 3.32 4.5 4.75 2 1.43 4.17 2.35 6.5 2.75v9.2c-4.6-.33-8.67-1.67-12.2-4-3.53-2.33-6.27-5.2-8.2-8.6l9.4-4.1zm18.2-17.1c2.33.8 4.55 1.68 6.65 2.65 2.1.97 3.93 2.12 5.5 3.45 1.57 1.33 2.82 2.88 3.75 4.65.93 1.77 1.4 3.78 1.4 6.05 0 4.53-1.62 8.22-4.85 11.05-3.23 2.83-7.38 4.65-12.45 5.45v-9.4c1.93-.53 3.55-1.43 4.85-2.7 1.3-1.27 1.95-2.87 1.95-4.8 0-1.67-.67-3.07-2-4.2-1.33-1.13-2.93-2.07-4.8-2.8-.8-.33-1.63-.63-2.5-.9-.87-.27-1.73-.53-2.6-.8-.33-.07-.68-.15-1.05-.25s-.72-.22-1.05-.35a55.86 55.86 0 01-6.85-2.45c-2.23-.97-4.2-2.08-5.9-3.35-1.7-1.27-3.07-2.7-4.1-4.3-1.03-1.6-1.55-3.4-1.55-5.4 0-2.27.47-4.38 1.4-6.35.93-1.97 2.22-3.72 3.85-5.25 1.63-1.53 3.57-2.78 5.8-3.75 2.23-.97 4.68-1.62 7.35-1.95v9.2c-2.13.47-3.95 1.37-5.45 2.7s-2.25 2.97-2.25 4.9c0 1.67.75 3 2.25 4s3.32 1.87 5.45 2.6c.53.2 1.07.38 1.6.55.53.17 1.07.32 1.6.45.73.2 1.42.4 2.05.6.63.2 1.28.44 1.95.7zm0-25.5c3.8.53 7.05 1.75 9.75 3.65s4.72 4.12 6.05 6.65l-9 4c-1.8-2.53-4.07-4.23-6.8-5.1V.3zM387.39 42.9c1 1.73 2.5 3.32 4.5 4.75 2 1.43 4.17 2.35 6.5 2.75v9.2c-4.6-.33-8.67-1.67-12.2-4-3.53-2.33-6.27-5.2-8.2-8.6l9.4-4.1zm18.2-17.1c2.33.8 4.55 1.68 6.65 2.65 2.1.97 3.93 2.12 5.5 3.45 1.57 1.33 2.82 2.88 3.75 4.65.93 1.77 1.4 3.78 1.4 6.05 0 4.53-1.62 8.22-4.85 11.05-3.23 2.83-7.38 4.65-12.45 5.45v-9.4c1.93-.53 3.55-1.43 4.85-2.7 1.3-1.27 1.95-2.87 1.95-4.8 0-1.67-.67-3.07-2-4.2-1.33-1.13-2.93-2.07-4.8-2.8-.8-.33-1.63-.63-2.5-.9-.87-.27-1.73-.53-2.6-.8-.33-.07-.68-.15-1.05-.25s-.72-.22-1.05-.35a55.86 55.86 0 01-6.85-2.45c-2.23-.97-4.2-2.08-5.9-3.35-1.7-1.27-3.07-2.7-4.1-4.3-1.03-1.6-1.55-3.4-1.55-5.4 0-2.27.47-4.38 1.4-6.35.93-1.97 2.22-3.72 3.85-5.25 1.63-1.53 3.57-2.78 5.8-3.75 2.23-.97 4.68-1.62 7.35-1.95v9.2c-2.13.47-3.95 1.37-5.45 2.7s-2.25 2.97-2.25 4.9c0 1.67.75 3 2.25 4s3.32 1.87 5.45 2.6c.53.2 1.07.38 1.6.55.53.17 1.07.32 1.6.45.73.2 1.42.4 2.05.6.64.2 1.29.44 1.95.7zm0-25.5c3.8.53 7.05 1.75 9.75 3.65s4.72 4.12 6.05 6.65l-9 4c-1.8-2.53-4.07-4.23-6.8-5.1V.3z'></path>
    </svg>
  )
}

export default Logo
