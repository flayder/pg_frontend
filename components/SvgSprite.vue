<template>
  <svg display="none">
    <symbol id="home" viewBox="0 0 24 24">
      <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M9 22V12H15V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </symbol>
    <symbol id="hash" viewBox="0 0 24 24">
      <path d="M4 9H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M4 15H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M10 3L8 21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M16 3L14 21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </symbol>
    <symbol id="rotate" viewBox="0 0 24 24">
      <path d="M23 4V10H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M20.4899 15C19.8399 16.8399 18.6094 18.4187 16.984 19.4985C15.3586 20.5783 13.4263 21.1006 11.4783 20.9866C9.53026 20.8726 7.67203 20.1286 6.18363 18.8667C4.69524 17.6047 3.6573 15.8932 3.22625 13.9901C2.79519 12.0869 2.99436 10.0952 3.79374 8.31508C4.59313 6.53496 5.94942 5.06288 7.65823 4.12065C9.36705 3.17843 11.3358 2.81711 13.2678 3.09116C15.1999 3.3652 16.9905 4.25975 18.3699 5.64001L22.9999 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </symbol>
    <symbol id="star" viewBox="0 0 24 24">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </symbol>
    <symbol id="menu" viewBox="0 0 24 24">
      <path d="M3 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M3 6H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </symbol>
    <symbol id="user" viewBox="0 0 24 24">
      <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </symbol>
    <symbol id="search" viewBox="0 0 24 24">
      <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M20.9999 21L16.6499 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </symbol>
    <symbol id="close" viewBox="0 0 24 24">
      <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </symbol>
    <symbol id="eye" viewBox="0 0 24 24">
      <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </symbol>
    <symbol id="like" viewBox="0 0 24 24">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14 5V9H19.66C19.9499 8.99672 20.2371 9.0565 20.5016 9.17522C20.7661 9.29393 21.0016 9.46873 21.1919 9.68751C21.3821 9.90629 21.5225 10.1638 21.6033 10.4423C21.6842 10.7207 21.7035 11.0134 21.66 11.3L20.28 20.3C20.2077 20.7769 19.9654 21.2116 19.5979 21.524C19.2304 21.8364 18.7623 22.0055 18.28 22H8L8 8.75L11 2C11.7956 2 12.5587 2.31607 13.1213 2.87868C13.6839 3.44129 14 4.20435 14 5ZM6 22L6 11H4C3.46957 11 2.96086 11.2107 2.58579 11.5858C2.21071 11.9609 2 12.4696 2 13V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H6Z" fill="currentColor"></path>
    </symbol>
    <symbol id="dislike" viewBox="0 0 24 24">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16 2H5.72003C5.2377 1.99454 4.76965 2.16359 4.40212 2.47599C4.0346 2.78839 3.79235 3.22309 3.72003 3.7L2.34003 12.7C2.29652 12.9866 2.31586 13.2793 2.39669 13.5577C2.47753 13.8362 2.61793 14.0937 2.80817 14.3125C2.99842 14.5313 3.23395 14.7061 3.49846 14.8248C3.76297 14.9435 4.05012 15.0033 4.34003 15H10V19C10 19.7956 10.3161 20.5587 10.8787 21.1213C11.4413 21.6839 12.2044 22 13 22L16 15.2501V2C16 2 16 2 16 2ZM18 13H19.67C20.236 13.01 20.7859 12.8119 21.2154 12.4432C21.645 12.0745 21.9242 11.5609 22 11V4C21.9242 3.43905 21.645 2.9255 21.2154 2.55681C20.7859 2.18813 20.236 1.98999 19.67 2H18C18 2 18 2 18 2V13Z" fill="currentColor"></path>
    </symbol>
    <symbol id="confirm" viewBox="0 0 24 24">
      <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </symbol>
    <symbol id="problem" viewBox="0 0 24 24">
      <path d="M10.29 3.86L1.82002 18C1.64539 18.3024 1.55299 18.6453 1.55201 18.9945C1.55103 19.3437 1.64151 19.6871 1.81445 19.9905C1.98738 20.2939 2.23675 20.5467 2.53773 20.7239C2.83871 20.901 3.18082 20.9962 3.53002 21H20.47C20.8192 20.9962 21.1613 20.901 21.4623 20.7239C21.7633 20.5467 22.0127 20.2939 22.1856 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.4471 18.6453 22.3547 18.3024 22.18 18L13.71 3.86C13.5318 3.56611 13.2807 3.32312 12.9812 3.15448C12.6817 2.98585 12.3438 2.89725 12 2.89725C11.6563 2.89725 11.3184 2.98585 11.0188 3.15448C10.7193 3.32312 10.4683 3.56611 10.29 3.86V3.86Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M12 9V13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M12 17H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </symbol>
    <symbol id="mature" viewBox="0 0 74 74">
      <path d="M60.97 61.0267C56.2237 65.7859 50.1746 69.0283 43.588 70.3436C37.0013 71.6589 30.1731 70.9881 23.9672 68.4159C17.7613 65.8438 12.4567 61.486 8.72442 55.8938C4.99216 50.3016 3 43.7264 3 37C3 30.2736 4.99216 23.6984 8.72442 18.1062C12.4567 12.514 17.7613 8.1562 23.9672 5.58406C30.1731 3.01193 37.0013 2.34109 43.588 3.65641C50.1746 4.97174 56.2237 8.21413 60.97 12.9733M43.1223 37C46.533 37 49.2979 34.231 49.2979 30.8152C49.2979 27.3995 46.533 24.6305 43.1223 24.6305H40.0507C36.6401 24.6305 33.8752 27.3995 33.8752 30.8152C33.8752 34.231 36.6401 37 40.0507 37M43.1223 37H40.0507M43.1223 37C46.533 37 49.2979 39.769 49.2979 43.1848C49.2979 46.6005 46.533 49.3695 43.1223 49.3695H40.0507C36.6401 49.3695 33.8752 46.6005 33.8752 43.1848C33.8752 39.769 36.6401 37 40.0507 37M21.5241 21.5543V49.3695M15.3486 49.3695H27.6997M15.3486 27.7391H24.5957M55.4734 37H74M64.7205 27.7391V46.261" stroke="currentColor" stroke-width="5" stroke-miterlimit="10"></path>
    </symbol>
    <symbol id="fullscreen-open" fill="#fff" viewBox="0 0 490.667 490.667" xml:space="preserve">
      <path d="M173.792 301.792 21.333 454.251v-80.917c0-5.891-4.776-10.667-10.667-10.667-5.89 0-10.666 4.775-10.666 10.666V480c0 5.891 4.776 10.667 10.667 10.667h106.667c5.891 0 10.667-4.776 10.667-10.667s-4.776-10.667-10.667-10.667H36.416l152.459-152.459a10.667 10.667 0 0 0-15.083-15.082zM480 0H373.333c-5.891 0-10.667 4.776-10.667 10.667s4.776 10.667 10.667 10.667h80.917L301.792 173.792c-4.237 4.093-4.354 10.845-.262 15.083 4.093 4.237 10.845 4.354 15.083.262.089-.086.176-.173.262-.262L469.333 36.416v80.917c0 5.891 4.776 10.667 10.667 10.667s10.667-4.776 10.667-10.667V10.667C490.667 4.776 485.891 0 480 0zM36.416 21.333h80.917c5.891 0 10.667-4.776 10.667-10.667C128 4.776 123.224 0 117.333 0H10.667C4.776 0 0 4.776 0 10.667v106.667C0 123.224 4.776 128 10.667 128s10.667-4.776 10.667-10.667V36.416l152.459 152.459c4.237 4.093 10.99 3.975 15.083-.262 3.992-4.134 3.992-10.687 0-14.82L36.416 21.333zM480 362.667c-5.891 0-10.667 4.776-10.667 10.667v80.917L316.875 301.792c-4.237-4.093-10.99-3.976-15.083.261-3.993 4.134-3.993 10.688 0 14.821l152.459 152.459h-80.917c-5.891 0-10.667 4.776-10.667 10.667s4.776 10.667 10.667 10.667H480c5.891 0 10.667-4.776 10.667-10.667V373.333c0-5.891-4.776-10.666-10.667-10.666z"></path>
    </symbol>
    <symbol id="fullscreen-close" fill="#fff" viewBox="0 0 490.667 490.667" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
      <path fill="#fff" d="M173.792,301.792L21.333,454.251v-80.917c0-5.891-4.776-10.667-10.667-10.667C4.776,362.667,0,367.442,0,373.333L0,480c0,5.891,4.776,10.667,10.667,10.667h106.667c5.891,0,10.667-4.776,10.667-10.667s-4.776-10.667-10.667-10.667h-80.918L188.875,316.874c4.093-4.237,3.975-10.99-.262-15.083-4.134-3.992-10.687-3.992-14.821.001Z" transform="translate(298.797814 -298.797119)"></path>
      <path fill="#fff" d="M480,0h-106.667c-5.891,0-10.667,4.776-10.667,10.667s4.776,10.667,10.667,10.667h80.917L301.792,173.792c-4.237,4.093-4.354,10.845-.262,15.083c4.093,4.237,10.845,4.354,15.083.262.089-.086.176-.173.262-.262L469.333,36.416v80.917c0,5.891,4.776,10.667,10.667,10.667s10.667-4.776,10.667-10.667v-106.666C490.667,4.776,485.891,0,480,0Z" transform="translate(-298.536194 298.536186)"></path>
      <path fill="#fff" d="M36.416,21.333h80.917c5.891,0,10.667-4.776,10.667-10.667C128,4.776,123.224,0,117.333,0L10.667,0C4.776,0,0,4.776,0,10.667v106.667C0,123.224,4.776,128,10.667,128s10.667-4.776,10.667-10.667v-80.917L173.793,188.875c4.237,4.093,10.99,3.975,15.083-.262c3.992-4.134,3.992-10.687,0-14.82L36.416,21.333Z" transform="translate(298.797005 298.797615)"></path>
      <path fill="#fff" d="M480,362.667c-5.891,0-10.667,4.776-10.667,10.667v80.917L316.875,301.792c-4.237-4.093-10.99-3.976-15.083.261-3.993,4.134-3.993,10.688,0,14.821L454.251,469.333h-80.917c-5.891,0-10.667,4.776-10.667,10.667s4.776,10.667,10.667,10.667h106.666c5.891,0,10.667-4.776,10.667-10.667v-106.667c0-5.891-4.776-10.666-10.667-10.666Z" transform="translate(-298.797814 -298.797363)"></path>
    </symbol>
    <symbol id="load" viewBox="0 0 24 24">
      <path d="M23 4V10H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M1 20V14H7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M3.51 9C4.01717 7.56678 4.87913 6.2854 6.01547 5.27542C7.1518 4.26543 8.52547 3.55976 10.0083 3.22426C11.4911 2.88875 13.0348 2.93434 14.4952 3.35677C15.9556 3.77921 17.2853 4.56471 18.36 5.64L23 10M1 14L5.64 18.36C6.71475 19.4353 8.04437 20.2208 9.50481 20.6432C10.9652 21.0657 12.5089 21.1112 13.9917 20.7757C15.4745 20.4402 16.8482 19.7346 17.9845 18.7246C19.1209 17.7146 19.9828 16.4332 20.49 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </symbol>
  </svg>
</template>