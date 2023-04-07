import React from "react"
import { Link } from "gatsby"

let fillColor
const ColorSwitch = propColor => {
  switch (propColor) {
    case "green":
      fillColor = "#00FF7F"
      break
    case "white":
      fillColor = "#FFFFFF"
      break
    case "darkGrey":
      fillColor = "hsl(0, 0%, 20%)"
      break
    case "orange":
      fillColor = "#F39E12"
      break
    default:
      fillColor = "#F39E12"
      break
  }
  return fillColor
}

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

const ArrowLeft = props => {
  ColorSwitch(props.color)

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 13.0919L3 13.0919L3 10.0919L23 10.0919L23 13.0919Z"
        fill={fillColor}
      />
      <path
        d="M13 18.9706L10.8787 21.0919L3.45406 13.6673L1.33274 11.546L3.45406 9.42466L10.8787 2.00004L13 4.12136L5.57538 11.546L13 18.9706Z"
        fill={fillColor}
      />
    </svg>
  )
}

const BwSymbol = props => {
  ColorSwitch(props.color)

  return (
    <svg
      width="75"
      height="75"
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M71.4161 21.4268C70.8791 20.3037 70.2922 19.2055 69.6553 18.1448C63.0869 7.27537 51.1489 0 37.5125 0C23.8761 0 11.9381 7.27537 5.36963 18.1448C4.73277 19.2055 4.13337 20.3037 3.60889 21.4268C1.28621 26.2937 0 31.7471 0 37.5C0 41.2812 0.561938 44.9251 1.5984 48.3569H43.2692C47.5025 48.3569 47.5025 46.51 47.5025 45.5116C47.5025 42.6664 44.7552 42.6664 43.2692 42.6664H25.7992V32.3336H41.6708C44.9675 32.3336 45.5544 31.5849 45.5544 29.4884C45.5544 27.3918 44.9675 26.6431 41.6708 26.6431H16.7083V16.3103H41.6708C49.513 16.3103 55.8941 22.2255 55.8941 29.4884C55.8941 31.9343 55.1449 34.3303 53.7712 36.4018C56.3561 38.8478 57.8172 42.0799 57.8172 45.5116C57.8172 52.7745 51.2862 58.6897 43.2443 58.6897H6.53097C7.10539 59.5258 7.71728 60.3369 8.35415 61.1231C14.0485 68.124 22.2153 73.0408 31.531 74.5258C33.4665 74.8378 35.4645 75 37.4875 75C39.5105 75 41.5085 74.8378 43.4441 74.5258C52.7597 73.0408 60.9266 68.1364 66.6209 61.1231C68.494 58.8145 70.1049 56.2812 71.3911 53.5732C73.7138 48.7063 75 43.2529 75 37.5C75 31.7471 73.7388 26.2937 71.4161 21.4268Z"
        fill="white"
      />
    </svg>
  )
}

const ChevronLeft = props => {
  ColorSwitch(props.color)

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6673 4.12132L15.5459 2L8.12132 9.42462L6 11.5459L8.12132 13.6673L15.5459 21.0919L17.6673 18.9706L10.2426 11.5459L17.6673 4.12132Z"
        fill={fillColor}
      />
    </svg>
  )
}

const ChevronDoubleLeft = props => {
  ColorSwitch(props.color)

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 19.8787L10.8787 22L3.45406 14.5754L1.33274 12.4541L3.45406 10.3327L10.8787 2.90812L13 5.02944L5.57538 12.4541L13 19.8787Z"
        fill={fillColor}
      />
      <path
        d="M22 19.8787L19.8787 22L12.4541 14.5754L10.3327 12.4541L12.4541 10.3327L19.8787 2.90812L22 5.02944L14.5754 12.4541L22 19.8787Z"
        fill={fillColor}
      />
    </svg>
  )
}

const ChevronRight = props => {
  ColorSwitch(props.color)

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 4.12132L8.12132 2L15.5459 9.42462L17.6673 11.5459L15.5459 13.6673L8.12132 21.0919L6 18.9706L13.4246 11.5459L6 4.12132Z"
        fill={fillColor}
      />
    </svg>
  )
}

const ChevronDoubleRight = props => {
  ColorSwitch(props.color)

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 4.12132L13.1213 2L20.5459 9.42462L22.6673 11.5459L20.5459 13.6673L13.1213 21.0919L11 18.9706L18.4246 11.5459L11 4.12132Z"
        fill={fillColor}
      />
      <path
        d="M2 4.12132L4.12132 2L11.5459 9.42462L13.6673 11.5459L11.5459 13.6673L4.12132 21.0919L2 18.9706L9.42462 11.5459L2 4.12132Z"
        fill={fillColor}
      />
    </svg>
  )
}

const Instagram = props => {
  ColorSwitch(props.color)

  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M23.8281 20C23.8281 22.1142 22.1142 23.8281 20 23.8281C17.8858 23.8281 16.1719 22.1142 16.1719 20C16.1719 17.8858 17.8858 16.1719 20 16.1719C22.1142 16.1719 23.8281 17.8858 23.8281 20Z" />
        <path d="M28.9527 13.2269C28.7686 12.7282 28.475 12.2769 28.0936 11.9064C27.7231 11.525 27.2721 11.2314 26.7731 11.0473C26.3685 10.8902 25.7605 10.7031 24.6408 10.6521C23.4296 10.5969 23.0664 10.585 20 10.585C16.9333 10.585 16.5702 10.5966 15.3592 10.6518C14.2396 10.7031 13.6313 10.8902 13.227 11.0473C12.728 11.2314 12.2767 11.525 11.9064 11.9064C11.525 12.2769 11.2314 12.7279 11.0471 13.2269C10.89 13.6315 10.7028 14.2398 10.6519 15.3595C10.5967 16.5704 10.5847 16.9336 10.5847 20.0003C10.5847 23.0667 10.5967 23.4298 10.6519 24.6411C10.7028 25.7607 10.89 26.3687 11.0471 26.7733C11.2314 27.2723 11.5247 27.7233 11.9061 28.0939C12.2767 28.4753 12.7277 28.7689 13.2267 28.9529C13.6313 29.1103 14.2396 29.2975 15.3592 29.3484C16.5702 29.4036 16.933 29.4153 19.9997 29.4153C23.0667 29.4153 23.4299 29.4036 24.6405 29.3484C25.7602 29.2975 26.3685 29.1103 26.7731 28.9529C27.7747 28.5665 28.5663 27.775 28.9527 26.7733C29.1098 26.3687 29.2969 25.7607 29.3482 24.6411C29.4034 23.4298 29.415 23.0667 29.415 20.0003C29.415 16.9336 29.4034 16.5704 29.3482 15.3595C29.2972 14.2398 29.1101 13.6315 28.9527 13.2269ZM20 25.8971C16.7429 25.8971 14.1025 23.2571 14.1025 20C14.1025 16.7429 16.7429 14.1028 20 14.1028C23.2569 14.1028 25.8972 16.7429 25.8972 20C25.8972 23.2571 23.2569 25.8971 20 25.8971ZM26.1304 15.2478C25.3693 15.2478 24.7522 14.6307 24.7522 13.8696C24.7522 13.1085 25.3693 12.4914 26.1304 12.4914C26.8915 12.4914 27.5085 13.1085 27.5085 13.8696C27.5082 14.6307 26.8915 15.2478 26.1304 15.2478Z" />
        <path d="M20 0C8.95602 0 0 8.95602 0 20C0 31.044 8.95602 40 20 40C31.044 40 40 31.044 40 20C40 8.95602 31.044 0 20 0ZM31.4151 24.7348C31.3595 25.9573 31.1652 26.792 30.8813 27.5226C30.2848 29.0652 29.0652 30.2848 27.5226 30.8813C26.7923 31.1652 25.9573 31.3592 24.7351 31.4151C23.5105 31.4709 23.1192 31.4844 20.0003 31.4844C16.8811 31.4844 16.4902 31.4709 15.2652 31.4151C14.043 31.3592 13.208 31.1652 12.4777 30.8813C11.7111 30.593 11.0172 30.141 10.4434 29.5566C9.8593 28.9831 9.40734 28.2889 9.11898 27.5226C8.83516 26.7923 8.64078 25.9573 8.58523 24.7351C8.52875 23.5102 8.51562 23.1189 8.51562 20C8.51562 16.8811 8.52875 16.4898 8.58492 15.2652C8.64047 14.0427 8.83453 13.208 9.11836 12.4774C9.40672 11.7111 9.85898 11.0169 10.4434 10.4434C11.0169 9.85898 11.7111 9.40703 12.4774 9.11867C13.208 8.83484 14.0427 8.64078 15.2652 8.58492C16.4898 8.52906 16.8811 8.51562 20 8.51562C23.1189 8.51562 23.5102 8.52906 24.7348 8.58523C25.9573 8.64078 26.792 8.83484 27.5226 9.11836C28.2889 9.40672 28.9831 9.85898 29.5569 10.4434C30.141 11.0172 30.5933 11.7111 30.8813 12.4774C31.1655 13.208 31.3595 14.0427 31.4154 15.2652C31.4713 16.4898 31.4844 16.8811 31.4844 20C31.4844 23.1189 31.4713 23.5102 31.4151 24.7348Z" />
      </svg>
    </a>
  )
}

const Facebook = props => {
  ColorSwitch(props.color)

  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill={fillColor}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M40 20C40 8.95312 31.0469 0 20 0C8.95312 0 0 8.95312 0 20C0 31.0469 8.95312 40 20 40C20.1172 40 20.2344 40 20.3516 39.9922V24.4297H16.0547V19.4219H20.3516V15.7344C20.3516 11.4609 22.9609 9.13281 26.7734 9.13281C28.6016 9.13281 30.1719 9.26562 30.625 9.32812V13.7969H28C25.9297 13.7969 25.5234 14.7812 25.5234 16.2266V19.4141H30.4844L29.8359 24.4219H25.5234V39.2266C33.8828 36.8281 40 29.1328 40 20Z" />
      </svg>
    </a>
  )
}

const Fullmoon = props => {
  ColorSwitch(props.color)

  return (
    <Link to="/holdnapok">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={fillColor}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12.0988"
          cy="12.0988"
          r="9"
          transform="rotate(0.632419 12.0988 12.0988)"
          fill={fillColor}
        />
      </svg>
    </Link>
  )
}

const Email = props => {
  ColorSwitch(props.color)

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40ZM23.104 15.968L23.36 14.464H26.688L25.504 21.44C25.44 21.824 25.312 22.656 25.28 22.976C25.248 23.648 25.6 23.904 26.144 23.904C27.328 23.904 28.768 21.44 28.768 18.336C28.768 13.856 25.28 10.72 20.576 10.72C14.912 10.72 11.168 15.456 11.168 20.384C11.168 22.912 12.448 29.6 20.544 29.6C22.848 29.6 25.12 29.216 27.296 28.416L27.968 31.36C24.768 32.512 21.312 32.512 20.544 32.512C11.2 32.512 7.904 25.28 7.904 20.32C7.904 13.952 12.768 7.808 20.448 7.808C27.168 7.808 31.776 12.48 31.776 18.304C31.776 22.944 28.8 26.912 25.504 26.912C23.808 26.912 22.848 25.984 22.368 24.608C21.248 26.432 20.096 26.912 18.56 26.912C15.84 26.912 13.632 24.512 13.632 21.248C13.632 17.92 16.128 14.08 19.872 14.08C21.6 14.08 22.688 14.976 23.04 15.968H23.104ZM19.456 23.904C21.216 23.904 22.4 22.08 22.4 19.68C22.4 18.528 21.888 17.088 20.288 17.088C18.432 17.088 17.056 19.104 17.056 21.12C17.056 23.168 18.368 23.904 19.456 23.904Z"
      />
    </svg>
  )
}

const Messenger = props => {
  ColorSwitch(props.color)

  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.873 16.4227L12.3923 23.2843L18.2902 20.0482L21.3718 23.2843L27.8162 16.4227L21.9837 19.6021L18.873 16.4227Z" />
        <path d="M20 0C8.95599 0 0 8.95599 0 20C0 31.044 8.95599 40 20 40C31.044 40 40 31.044 40 20C40 8.95599 31.044 0 20 0ZM20.1562 30.7059C18.9182 30.7059 17.7231 30.531 16.5988 30.2072L12.5656 32.5V28.1866C9.8642 26.131 8.13904 23.0002 8.13904 19.4937C8.13904 13.3011 13.5193 8.28125 20.1562 8.28125C26.7935 8.28125 32.1735 13.3011 32.1735 19.4937C32.1735 25.6857 26.7935 30.7059 20.1562 30.7059Z" />
      </svg>
    </a>
  )
}

const Minilogo = props => {
  ColorSwitch(props.color)

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

const Namaste = props => {
  ColorSwitch(props.color)

  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 1067 207"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M153.658 18.8271V204.033H115.584L22.3008 28.0738V198.866H37.2587V204.033H0V198.866H14.9579V18.8271H0V13.6599H75.0614L146.315 150.185V18.8271H131.357V13.6599H168.616V18.8271H153.658Z"
        fill="#FEFEFE"
      />
      <path
        d="M239.4 140.122H247.287V119.181C247.287 101.957 246.29 90.4437 244.296 84.6418C242.483 78.6587 238.856 75.6671 233.417 75.6671C230.154 75.6671 227.162 76.5736 224.443 78.3867C221.904 80.0185 220.635 82.3755 220.635 85.4577C220.635 88.3586 221.179 91.3502 222.267 94.4324H229.066C230.516 98.2399 231.242 102.863 231.242 108.302C231.242 113.56 228.975 118.184 224.443 122.172C219.91 125.98 214.199 127.884 207.309 127.884C191.716 127.884 183.92 120.359 183.92 105.311C183.92 83.01 202.867 71.8596 240.76 71.8596C262.336 71.8596 277.203 75.5764 285.362 83.01C293.702 90.2624 297.872 103.679 297.872 123.26V178.468C297.872 187.896 300.501 192.61 305.759 192.61C311.923 192.61 315.55 183.273 316.637 164.598L320.717 164.87C319.992 180.825 317 191.795 311.742 197.778C306.484 203.761 297.872 206.752 285.906 206.752C264.149 206.752 251.639 200.044 248.375 186.627C246.018 193.517 242.483 198.594 237.769 201.857C233.055 205.121 226.165 206.752 217.1 206.752C190.266 206.752 176.849 195.783 176.849 173.845C176.849 160.972 181.926 152.179 192.079 147.465C202.414 142.57 218.187 140.122 239.4 140.122ZM228.522 173.573C228.522 183.001 228.975 189.075 229.882 191.795C230.97 194.514 232.873 195.874 235.593 195.874C238.494 195.874 241.123 193.608 243.48 189.075C246.018 184.361 247.287 177.925 247.287 169.766V144.473H245.384C234.142 144.473 228.522 152.723 228.522 169.222V173.573Z"
        fill="#FEFEFE"
      />
      <path
        d="M323.39 74.5792H388.932V99.5997C394.916 81.1063 408.06 71.8596 428.367 71.8596C448.855 71.8596 461.274 81.6502 465.626 101.231C471.971 81.6502 485.297 71.8596 505.604 71.8596C532.256 71.8596 545.582 86.9988 545.582 117.277V199.138H560.812V204.033H485.479V199.138H494.997V110.75C494.997 96.9707 493.819 88.9025 491.462 86.5455C490.374 85.4577 488.924 84.9138 487.11 84.9138C481.853 84.9138 477.229 88.4493 473.24 95.5203C469.252 102.591 467.257 111.566 467.257 122.444V199.138H477.048V204.033H407.154V199.138H416.672V110.75C416.672 96.9707 415.494 88.9025 413.137 86.5455C412.049 85.4577 410.599 84.9138 408.786 84.9138C403.709 84.9138 399.086 88.8119 394.916 96.6081C390.927 104.223 388.932 113.379 388.932 124.076V199.138H398.723V204.033H323.39V199.138H338.348V79.4745H323.39V74.5792Z"
        fill="#FEFEFE"
      />
      <path
        d="M630.079 140.122H637.966V119.181C637.966 101.957 636.969 90.4437 634.975 84.6418C633.162 78.6587 629.535 75.6671 624.096 75.6671C620.833 75.6671 617.841 76.5736 615.121 78.3867C612.583 80.0185 611.314 82.3755 611.314 85.4577C611.314 88.3586 611.858 91.3502 612.946 94.4324H619.745C621.195 98.2399 621.92 102.863 621.92 108.302C621.92 113.56 619.654 118.184 615.121 122.172C610.589 125.98 604.878 127.884 597.988 127.884C582.395 127.884 574.599 120.359 574.599 105.311C574.599 83.01 593.546 71.8596 631.439 71.8596C653.015 71.8596 667.882 75.5764 676.041 83.01C684.381 90.2624 688.551 103.679 688.551 123.26V178.468C688.551 187.896 691.18 192.61 696.438 192.61C702.602 192.61 706.228 183.273 707.316 164.598L711.396 164.87C710.671 180.825 707.679 191.795 702.421 197.778C697.163 203.761 688.551 206.752 676.585 206.752C654.828 206.752 642.318 200.044 639.054 186.627C636.697 193.517 633.161 198.594 628.448 201.857C623.734 205.121 616.844 206.752 607.778 206.752C580.945 206.752 567.528 195.783 567.528 173.845C567.528 160.972 572.605 152.179 582.758 147.465C593.093 142.57 608.866 140.122 630.079 140.122ZM619.201 173.573C619.201 183.001 619.654 189.075 620.561 191.795C621.648 194.514 623.552 195.874 626.272 195.874C629.173 195.874 631.802 193.608 634.159 189.075C636.697 184.361 637.966 177.925 637.966 169.766V144.473H636.062C624.821 144.473 619.201 152.723 619.201 169.222V173.573Z"
        fill="#FEFEFE"
      />
      <path
        d="M720.324 206.752V158.071H723.587C728.301 173.845 734.647 184.905 742.625 191.251C750.602 197.596 760.574 200.769 772.54 200.769C791.034 200.769 800.28 194.877 800.28 183.092C800.28 178.015 798.014 174.208 793.481 171.669C786.41 167.681 777.345 164.598 766.285 162.423C753.956 159.159 743.622 154.808 735.282 149.369C725.31 142.842 720.324 132.507 720.324 118.365C720.324 104.223 724.675 92.982 733.378 84.6418C742.081 76.1204 753.684 71.8596 768.189 71.8596C777.073 71.8596 786.229 73.9447 795.657 78.1147C799.102 79.5652 801.731 80.2904 803.544 80.2904C805.357 80.2904 806.898 79.6559 808.167 78.3867C809.436 77.1176 810.978 74.7605 812.791 71.3157H815.782V112.926H812.519C803.272 89.3558 788.949 77.5708 769.549 77.5708C761.027 77.5708 754.682 79.1119 750.511 82.1942C746.341 85.0951 744.256 88.8119 744.256 93.3446C744.256 96.0642 744.891 98.2399 746.16 99.8717C747.429 101.322 748.426 102.41 749.152 103.135C749.877 103.86 751.055 104.676 752.687 105.583C754.319 106.308 755.679 106.943 756.767 107.487C757.854 107.849 759.486 108.393 761.662 109.118C764.019 109.844 765.741 110.297 766.829 110.478C779.158 113.56 788.042 116.28 793.481 118.637C798.921 120.813 804.088 123.532 808.983 126.796C818.955 133.686 823.941 144.836 823.941 160.247C823.941 175.477 819.408 187.081 810.343 195.058C801.278 202.854 788.858 206.752 773.084 206.752C761.843 206.752 750.965 204.124 740.449 198.866C738.273 197.415 736.551 196.69 735.282 196.69C731.293 196.69 727.395 200.044 723.587 206.752H720.324Z"
        fill="#FEFEFE"
      />
      <path
        d="M842.932 165.142V79.4745H827.974V74.5792H842.932V39.4962L893.516 26.986V74.5792H928.871V79.4745H893.516V171.126C893.516 179.647 894.332 185.902 895.964 189.891C897.777 193.88 901.403 195.874 906.843 195.874C912.282 195.874 916.996 193.154 920.984 187.715C925.155 182.276 927.874 174.842 929.143 165.414L933.767 165.958C932.316 178.468 928.327 188.44 921.8 195.874C915.273 203.126 904.486 206.752 889.437 206.752C874.388 206.752 862.875 203.761 854.898 197.778C846.92 191.795 842.932 180.916 842.932 165.142Z"
        fill="#FEFEFE"
      />
      <path
        d="M1007.89 206.752C984.502 206.752 966.916 200.769 955.131 188.803C943.527 176.655 937.725 159.884 937.725 138.49C937.725 116.915 944.252 100.416 957.306 88.9932C970.542 77.5708 987.313 71.8596 1007.62 71.8596C1048.78 71.8596 1068.54 92.5287 1066.91 133.867H990.214V144.473C990.214 162.241 992.48 175.658 997.013 184.724C1001.55 193.789 1009.43 198.322 1020.67 198.322C1041.7 198.322 1055.48 187.081 1062.01 164.598L1066.91 165.414C1063.46 178.468 1057.21 188.622 1048.14 195.874C1039.26 203.126 1025.84 206.752 1007.89 206.752ZM1018.5 128.428V115.101C1018.5 100.416 1017.59 90.4437 1015.78 85.1857C1014.15 79.7465 1010.7 77.0269 1005.44 77.0269C1000.37 77.0269 996.559 79.9278 994.021 85.7296C991.664 91.3502 990.486 101.141 990.486 115.101V128.428H1018.5ZM987.494 55.27L1004.63 3.32535L1017.41 0.605734C1023.03 -0.663424 1027.29 0.0618116 1030.19 2.78143C1033.27 5.31974 1034.82 8.85523 1034.82 13.3879C1034.82 17.7393 1032.19 22.272 1026.93 26.986L990.486 57.1737L987.494 55.27Z"
        fill="#FEFEFE"
      />
    </svg>
  )
}

const Newmoon = props => {
  ColorSwitch(props.color)

  return (
    <Link to="/holdnapok">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" stroke={fillColor} stroke-width="2" />
      </svg>
    </Link>
  )
}

const Search = props => {
  ColorSwitch(props.color)

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5275 6.59691C12.5275 3.32159 9.87256 0.666668 6.59724 0.666668C3.32192 0.666668 0.666992 3.32159 0.666992 6.59691C0.666992 9.87223 3.32192 12.5272 6.59724 12.5272C7.87382 12.5272 9.05616 12.1238 10.0238 11.4377L13.9772 15.3911L15.3914 13.9769L11.438 10.0235C12.1242 9.05583 12.5275 7.8735 12.5275 6.59691ZM6.59724 2.66667C8.76799 2.66667 10.5275 4.42616 10.5275 6.59691C10.5275 8.76766 8.76799 10.5272 6.59724 10.5272C4.42649 10.5272 2.66699 8.76766 2.66699 6.59691C2.66699 4.42616 4.42649 2.66667 6.59724 2.66667Z"
        fill="white"
      />
    </svg>
  )
}

const Soundcloud = props => {
  ColorSwitch(props.color)

  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.9535 0.102327C14.9861 0.409303 11.6837 1.56279 9.20932 3.1721C7.50699 4.26977 5.60001 5.9907 4.3628 7.53489C2.00932 10.4744 0.474432 14.2791 0.0930364 18.1302C-0.409289 23.2 1.18141 28.5023 4.41862 32.5116C5.18141 33.4605 6.63257 34.9116 7.5349 35.6372C11.507 38.8186 16.8279 40.4 21.9163 39.8977C26.6419 39.4419 30.9302 37.386 34.2512 33.9907C35.8512 32.3628 36.9954 30.7442 37.9535 28.7907C40.2605 24.0558 40.6233 18.7907 38.9768 13.7488C37.5907 9.51627 34.8186 5.86977 31.0791 3.34884C27.3023 0.818605 22.5395 -0.36279 17.9535 0.102327ZM24.3442 14.093C25.3302 14.2791 26.4186 14.8279 27.1814 15.5349C28.1954 16.4558 28.7814 17.4884 29.0698 18.8372C29.1442 19.2093 29.2279 19.386 29.3116 19.3767C29.3861 19.3674 29.6837 19.3209 29.9814 19.2558C31.4512 18.9674 33.1256 19.9256 33.6744 21.3767C33.9535 22.1023 33.9535 23.107 33.6837 23.8326C33.3023 24.8279 32.3349 25.6744 31.2651 25.9163C30.5302 26.093 21.0419 26.1023 20.8093 25.9256C20.6605 25.8232 20.6512 25.3953 20.6698 20.1395L20.6977 14.4744L21.1535 14.307C22.1023 13.9535 23.2093 13.8791 24.3442 14.093ZM20.2977 15.3488C20.3907 16.093 20.4279 24.6977 20.3442 25.3302C20.2884 25.7023 20.214 25.8884 20.093 25.9535C19.8512 26.0837 19.6372 25.9721 19.5535 25.6837C19.5163 25.5535 19.4977 23.107 19.507 20.2512C19.5163 16.2698 19.5442 15.0326 19.6372 14.9209C19.7023 14.8465 19.8605 14.7907 19.9907 14.8093C20.2047 14.8372 20.2419 14.8837 20.2977 15.3488ZM19.0791 15.693C19.1907 15.9907 19.2465 25.2093 19.1349 25.6465C19.0419 25.9907 18.7442 26.1395 18.5489 25.9349C18.3442 25.7302 18.2698 23.2744 18.3442 19.2651C18.3907 16.8279 18.4465 15.6558 18.5209 15.5721C18.6977 15.3581 18.9768 15.4232 19.0791 15.693ZM15.5535 17.0698C15.6558 18.1767 15.6837 24.4 15.6 25.2279C15.5163 25.9628 15.3582 26.1953 15.107 25.9349C14.893 25.7023 14.8 23.0326 14.893 19.6744C14.9489 17.9349 15.0047 16.4558 15.0233 16.3907C15.0512 16.3256 15.1628 16.2791 15.2744 16.2977C15.4698 16.3256 15.4977 16.3907 15.5535 17.0698ZM16.6326 16.4837C16.7907 16.6884 16.9395 22.6512 16.8186 24.3442C16.7256 25.786 16.6605 26.0465 16.4093 26.0465C16.0651 26.0465 16.0465 25.7581 16.0558 21.1442C16.0651 16.5488 16.0837 16.3721 16.4186 16.3721C16.4837 16.3721 16.5768 16.4279 16.6326 16.4837ZM14.2977 16.5767C14.4651 16.7907 14.6047 22.9395 14.4744 24.4837C14.3628 25.8977 14.2605 26.2139 14.0093 25.9535C13.7489 25.693 13.6558 23.1721 13.7675 19.7302C13.8326 18.0093 13.8977 16.5767 13.9163 16.5395C13.9907 16.4279 14.1954 16.4558 14.2977 16.5767ZM17.8512 16.7163C17.9721 16.9488 18.0837 22.5581 18 24.3163C17.9535 25.4046 17.8977 25.8046 17.7954 25.907C17.6372 26.0651 17.5814 26.0744 17.4047 25.9628C17.1907 25.8232 17.0977 23.2186 17.1814 19.786C17.2465 17.2744 17.2837 16.7163 17.3954 16.6512C17.6093 16.5209 17.7488 16.5395 17.8512 16.7163ZM13.3116 19.9814C13.4047 22.2139 13.4047 23.1349 13.3116 24.3535C13.2465 25.2093 13.1628 25.9442 13.1163 25.9907C12.9395 26.1674 12.7721 25.9535 12.7163 25.4698C12.493 23.6279 12.6047 17.1628 12.8651 17.0046C13.1535 16.8279 13.2 17.1721 13.3116 19.9814ZM12.0279 18.1116C12.0558 18.1581 12.1209 19.2465 12.1861 20.5302C12.2791 22.4186 12.2791 23.1721 12.1861 24.3442C12.0744 25.8046 12 26.0744 11.7768 25.9907C11.5349 25.8977 11.414 23.0977 11.5349 20.5581C11.5907 19.3023 11.6558 18.2232 11.6744 18.1581C11.7209 18.0372 11.9628 18 12.0279 18.1116ZM9.72094 19.7302C9.75815 19.7767 9.85118 20.4837 9.9256 21.2837C10.0558 22.6977 10.0186 24.1395 9.79536 25.6C9.72094 26.0837 9.51629 26.0558 9.45118 25.5535C9.20001 23.6465 9.20001 21.8977 9.45118 20.0186C9.49769 19.6372 9.60001 19.5256 9.72094 19.7302ZM8.80932 21.3674C8.94885 22.7535 8.94885 22.9767 8.80932 24.2884C8.66048 25.6186 8.53955 26.0837 8.41862 25.7581C8.40001 25.6837 8.31629 24.9953 8.24187 24.2325C8.13025 23.0325 8.13025 22.6326 8.24187 21.3953C8.31629 20.6046 8.40001 19.8977 8.42792 19.8232C8.53955 19.4884 8.66978 19.9814 8.80932 21.3674ZM10.8651 19.9721C10.9116 20.0651 11.0047 20.8093 11.0698 21.6279C11.1628 22.8651 11.1535 23.3488 11.0419 24.493C10.9675 25.2465 10.8837 25.8884 10.8558 25.9256C10.8279 25.9535 10.7442 25.9535 10.6698 25.9256C10.4558 25.8419 10.2884 23.0139 10.4186 21.4884C10.4744 20.8 10.5395 20.1395 10.5675 20.0186C10.614 19.7767 10.7535 19.7488 10.8651 19.9721ZM7.69304 21.6C7.84187 22.7628 7.84187 22.9488 7.69304 24.093C7.46978 25.8884 7.34885 25.8698 7.16281 24C7.05118 22.8744 7.11629 21.3116 7.31164 20.3814C7.40466 19.9256 7.5442 20.3628 7.69304 21.6ZM6.56746 21.6465C6.59536 21.8977 6.65118 22.2605 6.68839 22.4651C6.7442 22.8 6.56746 24.3535 6.45583 24.4558C6.17676 24.7442 6.02792 22.1395 6.27908 21.3209C6.3628 21.0698 6.50234 21.2372 6.56746 21.6465Z" />
      </svg>
    </a>
  )
}

const Telegram = props => {
  ColorSwitch(props.color)

  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill={fillColor}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 40C31.0483 40 40 31.0483 40 20C40 8.95167 31.0483 0 20 0C8.95167 0 0 8.95167 0 20C0 31.0483 8.95167 40 20 40ZM9.15167 19.5667L28.435 12.1317C29.33 11.8083 30.1117 12.35 29.8217 13.7033L29.8233 13.7017L26.54 29.17C26.2967 30.2667 25.645 30.5333 24.7333 30.0167L19.7333 26.3317L17.3217 28.655C17.055 28.9217 16.83 29.1467 16.3133 29.1467L16.6683 24.0583L25.935 15.6867C26.3383 15.3317 25.845 15.1317 25.3133 15.485L13.8617 22.695L8.925 21.155C7.85333 20.815 7.83 20.0833 9.15167 19.5667Z" />
      </svg>
    </a>
  )
}

const Twitter = props => {
  ColorSwitch(props.color)

  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill={fillColor}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19.1815 0.0569534C14.7153 0.256242 10.5267 1.90037 7.08181 4.80428C6.46616 5.32386 5.32381 6.46621 4.80423 7.08186C2.08893 10.3061 0.533771 14.0214 0.120959 18.274C0.049785 19.0178 0.0391089 20.8612 0.103166 21.5836C0.612063 27.3452 3.30601 32.3096 7.84694 35.8541C8.35939 36.2562 9.53733 37.0392 10.1423 37.3844C14.5729 39.9039 19.8327 40.6335 24.7864 39.4128C27.8149 38.6691 30.5053 37.2954 32.9324 35.2562C33.5302 34.7509 34.7509 33.5303 35.2562 32.9324C35.7473 32.3488 36.2669 31.6548 36.6797 31.032C39.6619 26.5445 40.6939 20.968 39.516 15.6762C38.7117 12.0676 36.9395 8.78293 34.3416 6.11034C30.9608 2.62635 26.4875 0.512468 21.6334 0.110332C21.1388 0.0676279 19.6512 0.0356011 19.1815 0.0569534ZM26.217 9.2598C26.1316 9.41282 25.943 9.57297 25.4235 9.92528C25.2704 10.032 25.1601 10.1246 25.185 10.1317C25.2064 10.1388 25.4377 10.0712 25.701 9.98222C26.8291 9.59076 26.8007 9.59788 27.153 9.58364C27.5516 9.56585 27.7331 9.62991 27.7509 9.79361C27.7864 10.1139 26.9181 10.5267 25.5694 10.8328C25.2562 10.9039 24.943 10.9751 24.8754 10.9929C24.7615 11.0178 24.7686 11.0214 25 11.0463C27.1672 11.2705 28.6014 11.8683 29.7686 13.0427C30.669 13.9466 31.2811 15.0534 31.7615 16.637L31.9466 17.242L32.1886 17.3025C33.096 17.5374 34.548 17.5338 35.3025 17.2989C35.427 17.2598 35.5373 17.2313 35.5409 17.2385C35.5658 17.2598 35.2384 17.6726 35.0925 17.8043C34.5622 18.2812 33.8078 18.5516 32.5622 18.7189L32.0818 18.7794L32.3131 18.8897C32.5978 19.0249 33.032 19.153 33.5053 19.2385C33.7864 19.2918 34.0462 19.3025 34.7402 19.3061H35.6192L35.4875 19.4413C35.1886 19.7473 34.6334 20.0712 34.0996 20.2491C33.5551 20.4306 33.242 20.4769 32.6085 20.4804H32.032L31.9395 20.7829C30.5267 25.4484 27.2206 28.605 22.1957 30.089C19.1886 30.9751 16.2064 31.1851 13.5943 30.6904C10.5053 30.1103 7.90032 28.6868 5.60495 26.331C5.12808 25.8399 4.67256 25.3345 4.75441 25.3808C4.77221 25.395 4.98217 25.5267 5.21705 25.6762C5.77221 26.0356 6.74018 26.5089 7.27754 26.6868C7.79712 26.8577 8.42345 26.9929 8.96438 27.0498C9.47683 27.1032 10.6441 27.0712 11.1032 26.9929C12.701 26.7224 14.0818 26.0214 15.7366 24.6477L16.0818 24.3594L15.6121 24.3381C15.0711 24.3096 14.7509 24.242 14.3807 24.0676C13.8968 23.8399 13.637 23.4555 13.6761 23.0214C13.7117 22.6264 13.9181 22.3772 14.5765 21.9324L14.9893 21.6548L14.3914 21.6335C13.4448 21.5979 12.8327 21.4164 12.1886 20.9858C11.9039 20.7936 11.4839 20.3666 11.2526 20.0249L11.064 19.7509L11.2384 19.5801C11.5658 19.2598 12.1103 19.0463 12.8327 18.9502C13.0569 18.9217 13.2918 18.8968 13.3558 18.8933C13.5089 18.8897 13.4519 18.8683 12.8398 18.6868C12.2989 18.5267 11.7295 18.2954 11.3843 18.0925C10.5551 17.6086 10.0142 16.9217 9.81135 16.0819C9.70815 15.6619 9.70103 15.6833 9.96438 15.6335C10.0925 15.6121 10.5017 15.5552 10.879 15.5125C11.2526 15.4662 11.5551 15.4199 11.548 15.4057C11.5373 15.395 11.3274 15.2385 11.0783 15.0605C9.88253 14.2029 9.31313 13.484 9.0569 12.5089C8.9964 12.274 8.92167 11.6157 8.95014 11.5694C8.98573 11.5054 11.0427 12.3345 12.9003 13.1602C15.8149 14.4555 17 15.0712 17.9893 15.8114C18.4306 16.1388 19 16.6477 19.2277 16.9146C19.3238 17.0285 19.4128 17.1175 19.4306 17.1175C19.4448 17.1175 19.4697 17.0747 19.4804 17.0249C19.4946 16.9751 19.6085 16.6584 19.7402 16.3239C20.6227 14.0249 21.5694 12.2278 22.548 10.9965C22.8825 10.5801 23.4768 9.9929 23.8612 9.70464C24.0356 9.57297 24.1957 9.46621 24.2099 9.46621C24.2277 9.46621 24.1601 9.61923 24.0569 9.80784C23.9573 9.99646 23.879 10.1566 23.8861 10.1602C23.8932 10.1673 24.1601 10.0142 24.4839 9.81852C25.2242 9.37724 25.8398 9.12457 26.2064 9.11389L26.306 9.11033L26.217 9.2598Z" />
      </svg>
    </a>
  )
}

const Whatsapp = props => {
  ColorSwitch(props.color)

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40ZM25.0154 27.1925C26.0086 26.978 27.254 26.2443 27.5673 25.3574C27.8806 24.4705 27.8806 23.714 27.7883 23.5541C27.6635 23.3343 24.706 21.9608 24.4733 21.8802C24.1288 21.7501 23.7999 21.7959 23.5412 22.1626C23.492 22.2313 23.443 22.3002 23.3942 22.3686C23.0793 22.8107 22.7756 23.237 22.5246 23.5083C22.2958 23.7528 21.9214 23.7831 21.6081 23.6531C21.574 23.6388 21.5349 23.6231 21.4911 23.6054C20.9944 23.4049 19.8928 22.9601 18.5596 21.7723C17.4364 20.7723 16.672 19.5265 16.451 19.152C16.2323 18.7758 16.4213 18.5546 16.5947 18.3519L16.6031 18.342C16.727 18.1881 16.8615 18.0456 16.9912 17.9082C17.437 17.4358 17.8262 17.0235 17.5352 16.4161C17.4671 16.273 17.0215 15.1918 16.6703 14.3398C16.5525 14.0538 16.4452 13.7937 16.3665 13.6035C16.0987 12.9611 15.9193 12.9452 15.1055 12.9452C13.4142 12.9452 12.447 14.8986 12.447 16.5761C12.447 19.8713 17.1062 24.823 20.4615 26.2131C23.4489 27.4511 24.3355 27.3369 25.0154 27.1925ZM19.9961 7H20.0026C27.1695 7 33 12.831 33 20C33 27.169 27.1695 33 20.0026 33C17.3597 33 14.9066 32.2134 12.8513 30.8532L7.85541 32.4497L9.47521 27.6191C7.91651 25.4799 7 22.8427 7 20C7 12.831 12.8292 7 19.9961 7Z"
      />
    </svg>
  )
}

const Icons = {
  ArrowLeft,
  ChevronLeft,
  ChevronDoubleLeft,
  ChevronRight,
  ChevronDoubleRight,
  BwSymbol,
  Email,
  Logo,
  Facebook,
  Instagram,
  Fullmoon,
  Messenger,
  Minilogo,
  Namaste,
  Newmoon,
  Search,
  Soundcloud,
  Telegram,
  Twitter,
  Whatsapp,
}

export default Icons
