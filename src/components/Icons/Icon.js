import React from "react"

// Set default icon color
//
// To add a new color, create a new case with the value and
// name of the color.

const Logo = props => {
  ColorSwitch(props.color)

  return (
    <a href="/" target="_blank" rel="noreferrer">
      <svg
        width="166"
        height="42"
        viewBox="0 0 166 42"
        xmlns="http://www.w3.org/2000/svg"
        id="fulllogo"
        fill="hsl(0, 0%, 90%)"
      >
        <path d="M162.78 41.108C162.116 41.108 161.516 41.024 160.98 40.856C160.444 40.68 159.98 40.428 159.588 40.1L159.936 39.308C160.344 39.62 160.772 39.852 161.22 40.004C161.668 40.156 162.188 40.232 162.78 40.232C163.5 40.232 164.032 40.1 164.376 39.836C164.728 39.564 164.904 39.208 164.904 38.768C164.904 38.416 164.776 38.136 164.52 37.928C164.272 37.72 163.852 37.556 163.26 37.436L162.012 37.184C161.26 37.024 160.696 36.764 160.32 36.404C159.952 36.036 159.768 35.548 159.768 34.94C159.768 34.436 159.896 33.996 160.152 33.62C160.416 33.244 160.78 32.952 161.244 32.744C161.708 32.536 162.244 32.432 162.852 32.432C163.42 32.432 163.948 32.524 164.436 32.708C164.924 32.884 165.336 33.14 165.672 33.476L165.324 34.244C164.964 33.916 164.584 33.68 164.184 33.536C163.784 33.384 163.336 33.308 162.84 33.308C162.208 33.308 161.704 33.456 161.328 33.752C160.952 34.04 160.764 34.424 160.764 34.904C160.764 35.288 160.88 35.592 161.112 35.816C161.352 36.04 161.74 36.204 162.276 36.308L163.524 36.572C164.332 36.74 164.928 36.996 165.312 37.34C165.704 37.676 165.9 38.136 165.9 38.72C165.9 39.192 165.772 39.608 165.516 39.968C165.268 40.328 164.908 40.608 164.436 40.808C163.972 41.008 163.42 41.108 162.78 41.108Z" />
        <path d="M152.044 41V32.54H153.028V36.38H153.052L157.156 32.54H158.416L154 36.656L158.68 41H157.384L153.052 37.016H153.028V41H152.044Z" />
        <path d="M144.044 41V32.54H147.392C148.304 32.54 149 32.752 149.48 33.176C149.968 33.6 150.212 34.204 150.212 34.988C150.212 35.612 150.04 36.124 149.696 36.524C149.36 36.924 148.88 37.184 148.256 37.304C148.624 37.432 148.94 37.744 149.204 38.24L150.692 41H149.612L148.148 38.288C147.964 37.952 147.752 37.724 147.512 37.604C147.272 37.484 146.956 37.424 146.564 37.424H145.028V41H144.044ZM145.028 36.644H147.248C148.576 36.644 149.24 36.092 149.24 34.988C149.24 33.9 148.576 33.356 147.248 33.356H145.028V36.644Z" />
        <path d="M138.596 41.108C137.812 41.108 137.128 40.932 136.544 40.58C135.968 40.22 135.52 39.716 135.2 39.068C134.888 38.42 134.732 37.652 134.732 36.764C134.732 35.876 134.888 35.108 135.2 34.46C135.512 33.812 135.956 33.312 136.532 32.96C137.116 32.608 137.804 32.432 138.596 32.432C139.396 32.432 140.084 32.608 140.66 32.96C141.244 33.312 141.692 33.812 142.004 34.46C142.324 35.1 142.484 35.864 142.484 36.752C142.484 37.64 142.324 38.412 142.004 39.068C141.684 39.716 141.232 40.22 140.648 40.58C140.072 40.932 139.388 41.108 138.596 41.108ZM138.596 40.232C139.5 40.232 140.2 39.928 140.696 39.32C141.192 38.712 141.44 37.86 141.44 36.764C141.44 35.668 141.192 34.82 140.696 34.22C140.2 33.612 139.5 33.308 138.596 33.308C137.708 33.308 137.016 33.612 136.52 34.22C136.024 34.82 135.776 35.668 135.776 36.764C135.776 37.852 136.024 38.704 136.52 39.32C137.016 39.928 137.708 40.232 138.596 40.232Z" />
        <path d="M124.324 41L121.36 32.54H122.392L124.78 39.56L127.228 32.54H128.02L130.444 39.62L132.88 32.54H133.864L130.9 41H130.024L127.612 34.04L125.176 41H124.324Z" />
        <path d="M158.224 28.004L159.232 31H164.972L156.74 10.28H152.568L144.252 31H149.936L151.028 28.004H158.224ZM154.612 16.72H154.696L156.824 23.804H152.484L154.612 16.72Z" />
        <path d="M124.876 31H130.168V22.712H136.944V31H142.236V10.28H136.944V18.064H130.168V10.28H124.876V31Z" />
        <path d="M105.596 31H112.848C120.716 31 123.516 26.24 123.516 20.584C123.516 18.316 123.04 16.104 121.612 14.144C118.924 10.28 114.78 10.28 112.456 10.28H105.596V31ZM110.888 14.928H113.184C115.536 14.928 116.6 15.908 117.216 16.832C117.972 18.008 118.224 19.492 118.224 20.668C118.224 23.608 117.104 26.352 113.156 26.352H110.888V14.928Z" />
        <path d="M85.876 31H90.944L90.804 18.428L90.86 18.4L98.756 31H103.348V10.28H98.28L98.504 23.244L98.448 23.3L90.44 10.28H85.876V31Z" />
        <path d="M77.224 28.004L78.232 31H83.972L75.74 10.28H71.568L63.252 31H68.936L70.028 28.004H77.224ZM73.612 16.72H73.696L75.824 23.804H71.484L73.612 16.72Z" />
        <path d="M47.876 31H54.456C57.956 31 59.328 30.804 61.232 29.208C62.492 28.172 63.136 26.352 63.136 24.7C63.136 23.832 63.052 21.06 59.72 19.884C61.4 18.932 62.128 17.308 62.128 15.712C62.128 14.508 61.82 13.248 60.896 12.296C59.384 10.616 57.76 10.28 54.26 10.28H47.876V31ZM52.944 14.928H54.82C55.632 14.928 57.06 14.928 57.06 16.496C57.06 18.148 55.548 18.148 54.82 18.148H52.944V14.928ZM52.944 22.572H55.436C56.276 22.572 58.068 22.572 58.068 24.364C58.068 26.352 56.108 26.352 55.436 26.352H52.944V22.572Z" />
        <path d="M38.0886 11.4276C37.8022 10.8286 37.4892 10.2429 37.1495 9.6772C33.6464 3.8802 27.2794 0 20.0067 0C12.7339 0 6.36697 3.8802 2.8638 9.6772C2.52414 10.2429 2.20446 10.8286 1.92474 11.4276C0.68598 14.0233 0 16.9318 0 20C0 22.0166 0.2997 23.9601 0.852481 25.7903H23.0769C25.3347 25.7903 25.3347 24.8053 25.3347 24.2729C25.3347 22.7554 23.8695 22.7554 23.0769 22.7554H13.7596V17.2446H22.2244C23.9827 17.2446 24.2957 16.8453 24.2957 15.7271C24.2957 14.609 23.9827 14.2097 22.2244 14.2097H8.91109V8.69884H22.2244C26.4069 8.69884 29.8102 11.8536 29.8102 15.7271C29.8102 17.0316 29.4106 18.3095 28.678 19.4143C30.0566 20.7188 30.8358 22.4426 30.8358 24.2729C30.8358 28.1464 27.3526 31.3012 23.0636 31.3012H3.48318C3.78954 31.7471 4.11588 32.1797 4.45554 32.599C7.49251 36.3328 11.8482 38.9551 16.8165 39.7471C17.8488 39.9135 18.9144 40 19.9933 40C21.0723 40 22.1379 39.9135 23.1702 39.7471C28.1385 38.9551 32.4942 36.3394 35.5311 32.599C36.5301 31.3677 37.3893 30.0166 38.0753 28.5724C39.314 25.9767 40 23.0682 40 20C40 16.9318 39.3273 14.0233 38.0886 11.4276Z" />
      </svg>
    </a>
  )
}

// Set default icon color
//
// To add a new color, create a new case with the value and
// name of the color.

let fillColor
const ColorSwitch = propColor => {
  switch (propColor) {
    case "green":
      fillColor = "#00FF7F"
      break
    case "white":
      fillColor = "#FFFFFF"
      break
    case "red":
      fillColor = "#FF0055"
      break
    default:
      fillColor = "$logo-color-primary"
      break
  }
  return fillColor
}

// Icons
//
// To add an icon, create an arrow function with the name of the icon,
// give it the input value "props", call the ColorSwitch function at
// the beginning with the value "props.color" and return the svg code.

const Facebook = props => {
  //   ColorSwitch(props.color)

  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <svg
        id="Capa_1"
        enableBackground="new 0 0 512 512"
        height="512"
        viewBox="0 0 512 512"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m512 256c0-141.4-114.6-256-256-256s-256 114.6-256 256 114.6 256 256 256c1.5 0 3 0 4.5-.1v-199.2h-55v-64.1h55v-47.2c0-54.7 33.4-84.5 82.2-84.5 23.4 0 43.5 1.7 49.3 2.5v57.2h-33.6c-26.5 0-31.7 12.6-31.7 31.1v40.8h63.5l-8.3 64.1h-55.2v189.5c107-30.7 185.3-129.2 185.3-246.1z" />
      </svg>
    </a>
  )
}

const Instagram = props => {
  //   ColorSwitch(props.color)

  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <svg
        width="512"
        height="512"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M305 256C305 283.062 283.062 305 256 305C228.938 305 207 283.062 207 256C207 228.938 228.938 207 256 207C283.062 207 305 228.938 305 256Z" />
        <path d="M370.594 169.305C368.238 162.922 364.48 157.145 359.598 152.402C354.855 147.52 349.082 143.762 342.695 141.406C337.516 139.395 329.734 137 315.402 136.348C299.898 135.641 295.25 135.488 256 135.488C216.746 135.488 212.098 135.637 196.598 136.344C182.266 137 174.48 139.395 169.305 141.406C162.918 143.762 157.141 147.52 152.402 152.402C147.52 157.145 143.762 162.918 141.402 169.305C139.391 174.484 136.996 182.27 136.344 196.602C135.637 212.102 135.484 216.75 135.484 256.004C135.484 295.254 135.637 299.902 136.344 315.406C136.996 329.738 139.391 337.52 141.402 342.699C143.762 349.086 147.516 354.859 152.398 359.602C157.141 364.484 162.914 368.242 169.301 370.598C174.48 372.613 182.266 375.008 196.598 375.66C212.098 376.367 216.742 376.516 255.996 376.516C295.254 376.516 299.902 376.367 315.398 375.66C329.73 375.008 337.516 372.613 342.695 370.598C355.516 365.652 365.648 355.52 370.594 342.699C372.605 337.52 375 329.738 375.656 315.406C376.363 299.902 376.512 295.254 376.512 256.004C376.512 216.75 376.363 212.102 375.656 196.602C375.004 182.27 372.609 174.484 370.594 169.305V169.305ZM256 331.484C214.309 331.484 180.512 297.691 180.512 256C180.512 214.309 214.309 180.516 256 180.516C297.688 180.516 331.484 214.309 331.484 256C331.484 297.691 297.688 331.484 256 331.484ZM334.469 195.172C324.727 195.172 316.828 187.273 316.828 177.531C316.828 167.789 324.727 159.891 334.469 159.891C344.211 159.891 352.109 167.789 352.109 177.531C352.105 187.273 344.211 195.172 334.469 195.172Z" />
        <path d="M256 0C114.637 0 0 114.637 0 256C0 397.363 114.637 512 256 512C397.363 512 512 397.363 512 256C512 114.637 397.363 0 256 0ZM402.113 316.605C401.402 332.254 398.914 342.938 395.281 352.289C387.645 372.035 372.035 387.645 352.289 395.281C342.941 398.914 332.254 401.398 316.609 402.113C300.934 402.828 295.926 403 256.004 403C216.078 403 211.074 402.828 195.395 402.113C179.75 401.398 169.062 398.914 159.715 395.281C149.902 391.59 141.02 385.805 133.676 378.324C126.199 370.984 120.414 362.098 116.723 352.289C113.09 342.941 110.602 332.254 109.891 316.609C109.168 300.93 109 295.922 109 256C109 216.078 109.168 211.07 109.887 195.395C110.598 179.746 113.082 169.062 116.715 159.711C120.406 149.902 126.195 141.016 133.676 133.676C141.016 126.195 149.902 120.41 159.711 116.719C169.062 113.086 179.746 110.602 195.395 109.887C211.07 109.172 216.078 109 256 109C295.922 109 300.93 109.172 316.605 109.891C332.254 110.602 342.938 113.086 352.289 116.715C362.098 120.406 370.984 126.195 378.328 133.676C385.805 141.02 391.594 149.902 395.281 159.711C398.918 169.062 401.402 179.746 402.117 195.395C402.832 211.07 403 216.078 403 256C403 295.922 402.832 300.93 402.113 316.605V316.605Z" />
      </svg>
    </a>
  )
}

const Messenger = props => {
  //   ColorSwitch(props.color)

  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <svg
        height="512pt"
        viewBox="0 0 512 512"
        width="512pt"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m241.574219 210.210938-82.953125 87.828124 75.492187-41.421874 39.445313 41.421874 82.488281-87.828124-74.65625 40.695312zm0 0" />
        <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm2 393.035156c-15.847656 0-31.144531-2.238281-45.535156-6.382812l-51.625 29.347656v-55.210938c-34.578125-26.3125-56.660156-66.386718-56.660156-111.269531 0-79.265625 68.867187-143.519531 153.820312-143.519531 84.957031 0 153.820312 64.253906 153.820312 143.519531 0 79.257813-68.863281 143.515625-153.820312 143.515625zm0 0" />
      </svg>
    </a>
  )
}

const Minilogo = props => {
  //   ColorSwitch(props.color)

  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.7532 6.85657C23.5813 6.49717 23.3935 6.14576 23.1897 5.80632C21.0878 2.32812 17.2677 0 12.904 0C8.54039 0 4.7202 2.32812 2.61831 5.80632C2.41451 6.14576 2.2227 6.49717 2.05487 6.85657C1.31161 8.41398 0.900024 10.1591 0.900024 12C0.900024 13.21 1.07984 14.376 1.41151 15.4742H14.7462C16.1008 15.4742 16.1008 14.8832 16.1008 14.5637C16.1008 13.6532 15.2217 13.6532 14.7462 13.6532H9.15577V10.3468H14.2347C15.2896 10.3468 15.4774 10.1072 15.4774 9.43627C15.4774 8.76539 15.2896 8.52579 14.2347 8.52579H6.24668V5.2193H14.2347C16.7442 5.2193 18.7861 7.11215 18.7861 9.43627C18.7861 10.219 18.5464 10.9857 18.1068 11.6486C18.934 12.4313 19.4015 13.4656 19.4015 14.5637C19.4015 16.8879 17.3116 18.7807 14.7382 18.7807H2.98993C3.17375 19.0483 3.36955 19.3078 3.57335 19.5594C5.39553 21.7997 8.00892 23.373 10.9899 23.8482C11.6093 23.9481 12.2487 24 12.896 24C13.5434 24 14.1827 23.9481 14.8021 23.8482C17.7831 23.373 20.3965 21.8037 22.2187 19.5594C22.8181 18.8206 23.3336 18.01 23.7452 17.1434C24.4884 15.586 24.9 13.8409 24.9 12C24.9 10.1591 24.4964 8.41398 23.7532 6.85657Z"
        fill="#F39E12"
      />
    </svg>
  )
}

const Soundcloud = props => {
  //   ColorSwitch(props.color)

  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <svg
        width="430"
        height="430"
        viewBox="0 0 430 430"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M193 1.10009C161.1 4.40009 125.6 16.8001 99 34.1001C80.7 45.9001 60.2 64.4001 46.9 81.0001C21.6 112.6 5.09999 153.5 0.999989 194.9C-4.40001 249.4 12.7 306.4 47.5 349.5C55.7 359.7 71.3 375.3 81 383.1C123.7 417.3 180.9 434.3 235.6 428.9C286.4 424 332.5 401.9 368.2 365.4C385.4 347.9 397.7 330.5 408 309.5C432.8 258.6 436.7 202 419 147.8C404.1 102.3 374.3 63.1001 334.1 36.0001C293.5 8.80009 242.3 -3.89991 193 1.10009ZM261.7 151.5C272.3 153.5 284 159.4 292.2 167C303.1 176.9 309.4 188 312.5 202.5C313.3 206.5 314.2 208.4 315.1 208.3C315.9 208.2 319.1 207.7 322.3 207C338.1 203.9 356.1 214.2 362 229.8C365 237.6 365 248.4 362.1 256.2C358 266.9 347.6 276 336.1 278.6C328.2 280.5 226.2 280.6 223.7 278.7C222.1 277.6 222 273 222.2 216.5L222.5 155.6L227.4 153.8C237.6 150 249.5 149.2 261.7 151.5ZM218.2 165C219.2 173 219.6 265.5 218.7 272.3C218.1 276.3 217.3 278.3 216 279C213.4 280.4 211.1 279.2 210.2 276.1C209.8 274.7 209.6 248.4 209.7 217.7C209.8 174.9 210.1 161.6 211.1 160.4C211.8 159.6 213.5 159 214.9 159.2C217.2 159.5 217.6 160 218.2 165ZM205.1 168.7C206.3 171.9 206.9 271 205.7 275.7C204.7 279.4 201.5 281 199.4 278.8C197.2 276.6 196.4 250.2 197.2 207.1C197.7 180.9 198.3 168.3 199.1 167.4C201 165.1 204 165.8 205.1 168.7ZM167.2 183.5C168.3 195.4 168.6 262.3 167.7 271.2C166.8 279.1 165.1 281.6 162.4 278.8C160.1 276.3 159.1 247.6 160.1 211.5C160.7 192.8 161.3 176.9 161.5 176.2C161.8 175.5 163 175 164.2 175.2C166.3 175.5 166.6 176.2 167.2 183.5ZM178.8 177.2C180.5 179.4 182.1 243.5 180.8 261.7C179.8 277.2 179.1 280 176.4 280C172.7 280 172.5 276.9 172.6 227.3C172.7 177.9 172.9 176 176.5 176C177.2 176 178.2 176.6 178.8 177.2ZM153.7 178.2C155.5 180.5 157 246.6 155.6 263.2C154.4 278.4 153.3 281.8 150.6 279C147.8 276.2 146.8 249.1 148 212.1C148.7 193.6 149.4 178.2 149.6 177.8C150.4 176.6 152.6 176.9 153.7 178.2ZM191.9 179.7C193.2 182.2 194.4 242.5 193.5 261.4C193 273.1 192.4 277.4 191.3 278.5C189.6 280.2 189 280.3 187.1 279.1C184.8 277.6 183.8 249.6 184.7 212.7C185.4 185.7 185.8 179.7 187 179C189.3 177.6 190.8 177.8 191.9 179.7ZM143.1 214.8C144.1 238.8 144.1 248.7 143.1 261.8C142.4 271 141.5 278.9 141 279.4C139.1 281.3 137.3 279 136.7 273.8C134.3 254 135.5 184.5 138.3 182.8C141.4 180.9 141.9 184.6 143.1 214.8ZM129.3 194.7C129.6 195.2 130.3 206.9 131 220.7C132 241 132 249.1 131 261.7C129.8 277.4 129 280.3 126.6 279.4C124 278.4 122.7 248.3 124 221C124.6 207.5 125.3 195.9 125.5 195.2C126 193.9 128.6 193.5 129.3 194.7ZM104.5 212.1C104.9 212.6 105.9 220.2 106.7 228.8C108.1 244 107.7 259.5 105.3 275.2C104.5 280.4 102.3 280.1 101.6 274.7C98.9 254.2 98.9 235.4 101.6 215.2C102.1 211.1 103.2 209.9 104.5 212.1ZM94.7 229.7C96.2 244.6 96.2 247 94.7 261.1C93.1 275.4 91.8 280.4 90.5 276.9C90.3 276.1 89.4 268.7 88.6 260.5C87.4 247.6 87.4 243.3 88.6 230C89.4 221.5 90.3 213.9 90.6 213.1C91.8 209.5 93.2 214.8 94.7 229.7ZM116.8 214.7C117.3 215.7 118.3 223.7 119 232.5C120 245.8 119.9 251 118.7 263.3C117.9 271.4 117 278.3 116.7 278.7C116.4 279 115.5 279 114.7 278.7C112.4 277.8 110.6 247.4 112 231C112.6 223.6 113.3 216.5 113.6 215.2C114.1 212.6 115.6 212.3 116.8 214.7ZM82.7 232.2C84.3 244.7 84.3 246.7 82.7 259C80.3 278.3 79 278.1 77 258C75.8 245.9 76.5 229.1 78.6 219.1C79.6 214.2 81.1 218.9 82.7 232.2ZM70.6 232.7C70.9 235.4 71.5 239.3 71.9 241.5C72.5 245.1 70.6 261.8 69.4 262.9C66.4 266 64.8 238 67.5 229.2C68.4 226.5 69.9 228.3 70.6 232.7Z" />
      </svg>
    </a>
  )
}

const Telegram = props => {
  //   ColorSwitch(props.color)

  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <svg
        id="Bold"
        enableBackground="new 0 0 24 24"
        height="512"
        viewBox="0 0 24 24"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m12 24c6.629 0 12-5.371 12-12s-5.371-12-12-12-12 5.371-12 12 5.371 12 12 12zm-6.509-12.26 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z" />
      </svg>
    </a>
  )
}

const Twitter = props => {
  //   ColorSwitch(props.color)

  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="1124.000000pt"
        height="1124.000000pt"
        viewBox="0 0 1124.000000 1124.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,1124.000000) scale(0.100000,-0.100000)"
          stroke="none"
        >
          <path
            d="M5390 11224 c-1255 -56 -2432 -518 -3400 -1334 -173 -146 -494 -467
  -640 -640 -763 -906 -1200 -1950 -1316 -3145 -20 -209 -23 -727 -5 -930 143
  -1619 900 -3014 2176 -4010 144 -113 475 -333 645 -430 1245 -708 2723 -913
  4115 -570 851 209 1607 595 2289 1168 168 142 511 485 653 653 138 164 284
  359 400 534 838 1261 1128 2828 797 4315 -226 1014 -724 1937 -1454 2688 -950
  979 -2207 1573 -3571 1686 -139 12 -557 21 -689 15z m1977 -2586 c-24 -43 -77
  -88 -223 -187 -43 -30 -74 -56 -67 -58 6 -2 71 17 145 42 317 110 309 108 408
  112 112 5 163 -13 168 -59 10 -90 -234 -206 -613 -292 -88 -20 -176 -40 -195
  -45 -32 -7 -30 -8 35 -15 609 -63 1012 -231 1340 -561 253 -254 425 -565 560
  -1010 l52 -170 68 -17 c255 -66 663 -65 875 1 35 11 66 19 67 17 7 -6 -85
  -122 -126 -159 -149 -134 -361 -210 -711 -257 l-135 -17 65 -31 c80 -38 202
  -74 335 -98 79 -15 152 -18 347 -19 l247 0 -37 -38 c-84 -86 -240 -177 -390
  -227 -153 -51 -241 -64 -419 -65 l-162 0 -26 -85 c-397 -1311 -1326 -2198
  -2738 -2615 -845 -249 -1683 -308 -2417 -169 -868 163 -1600 563 -2245 1225
  -134 138 -262 280 -239 267 5 -4 64 -41 130 -83 156 -101 428 -234 579 -284
  146 -48 322 -86 474 -102 144 -15 472 -6 601 16 449 76 837 273 1302 659 l97
  81 -132 6 c-152 8 -242 27 -346 76 -136 64 -209 172 -198 294 10 111 68 181
  253 306 l116 78 -168 6 c-266 10 -438 61 -619 182 -80 54 -198 174 -263 270
  l-53 77 49 48 c92 90 245 150 448 177 63 8 129 15 147 16 43 1 27 7 -145 58
  -152 45 -312 110 -409 167 -233 136 -385 329 -442 565 -29 118 -31 112 43 126
  36 6 151 22 257 34 105 13 190 26 188 30 -3 3 -62 47 -132 97 -336 241 -496
  443 -568 717 -17 66 -38 251 -30 264 10 18 588 -215 1110 -447 819 -364 1152
  -537 1430 -745 124 -92 284 -235 348 -310 27 -32 52 -57 57 -57 4 0 11 12 14
  26 4 14 36 103 73 197 248 646 514 1151 789 1497 94 117 261 282 369 363 49
  37 94 67 98 67 5 0 -14 -43 -43 -96 -28 -53 -50 -98 -48 -99 2 -2 77 41 168
  96 208 124 381 195 484 198 l28 1 -25 -42z"
          />
        </g>
      </svg>
    </a>
  )
}

const Icons = {
  Logo,
  Facebook,
  Instagram,
  Messenger,
  Minilogo,
  Soundcloud,
  Telegram,
  Twitter,
}

export default Icons
