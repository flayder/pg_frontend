<template>
    <svg display="none">
        <symbol id="home" viewBox="0 0 24 24">
            <path
                d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9 22V12H15V22" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
        </symbol>

        <symbol id="hash" viewBox="0 0 24 24">
            <path d="M4 9H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 15H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10 3L8 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            <path d="M16 3L14 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
        </symbol>

        <symbol id="rotate" viewBox="0 0 24 24">
            <path d="M23 4V10H17" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            <path
                d="M20.4899 15C19.8399 16.8399 18.6094 18.4187 16.984 19.4985C15.3586 20.5783 13.4263 21.1006 11.4783 20.9866C9.53026 20.8726 7.67203 20.1286 6.18363 18.8667C4.69524 17.6047 3.6573 15.8932 3.22625 13.9901C2.79519 12.0869 2.99436 10.0952 3.79374 8.31508C4.59313 6.53496 5.94942 5.06288 7.65823 4.12065C9.36705 3.17843 11.3358 2.81711 13.2678 3.09116C15.1999 3.3652 16.9905 4.25975 18.3699 5.64001L22.9999 10"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </symbol>

        <symbol id="star" viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </symbol>

        <symbol id="menu" viewBox="0 0 24 24">
            <path d="M3 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3 6H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </symbol>

        <symbol id="user" viewBox="0 0 24 24">
            <path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </symbol>

        <symbol id="search" viewBox="0 0 24 24">
            <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20.9999 21L16.6499 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
        </symbol>

        <symbol id="close" viewBox="0 0 24 24">
            <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
        </symbol>

        <symbol id="eye" viewBox="0 0 24 24">
            <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </symbol>

        <symbol id="like" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M14 5V9H19.66C19.9499 8.99672 20.2371 9.0565 20.5016 9.17522C20.7661 9.29393 21.0016 9.46873 21.1919 9.68751C21.3821 9.90629 21.5225 10.1638 21.6033 10.4423C21.6842 10.7207 21.7035 11.0134 21.66 11.3L20.28 20.3C20.2077 20.7769 19.9654 21.2116 19.5979 21.524C19.2304 21.8364 18.7623 22.0055 18.28 22H8L8 8.75L11 2C11.7956 2 12.5587 2.31607 13.1213 2.87868C13.6839 3.44129 14 4.20435 14 5ZM6 22L6 11H4C3.46957 11 2.96086 11.2107 2.58579 11.5858C2.21071 11.9609 2 12.4696 2 13V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H6Z"
                fill="currentColor" />
        </symbol>

        <symbol id="dislike" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M16 2H5.72003C5.2377 1.99454 4.76965 2.16359 4.40212 2.47599C4.0346 2.78839 3.79235 3.22309 3.72003 3.7L2.34003 12.7C2.29652 12.9866 2.31586 13.2793 2.39669 13.5577C2.47753 13.8362 2.61793 14.0937 2.80817 14.3125C2.99842 14.5313 3.23395 14.7061 3.49846 14.8248C3.76297 14.9435 4.05012 15.0033 4.34003 15H10V19C10 19.7956 10.3161 20.5587 10.8787 21.1213C11.4413 21.6839 12.2044 22 13 22L16 15.2501V2C16 2 16 2 16 2ZM18 13H19.67C20.236 13.01 20.7859 12.8119 21.2154 12.4432C21.645 12.0745 21.9242 11.5609 22 11V4C21.9242 3.43905 21.645 2.9255 21.2154 2.55681C20.7859 2.18813 20.236 1.98999 19.67 2H18C18 2 18 2 18 2V13Z"
                fill="currentColor" />
        </symbol>

        <symbol id="confirm" viewBox="0 0 24 24">
            <path
                d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
        </symbol>

        <symbol id="problem" viewBox="0 0 24 24">
            <path
                d="M10.29 3.86L1.82002 18C1.64539 18.3024 1.55299 18.6453 1.55201 18.9945C1.55103 19.3437 1.64151 19.6871 1.81445 19.9905C1.98738 20.2939 2.23675 20.5467 2.53773 20.7239C2.83871 20.901 3.18082 20.9962 3.53002 21H20.47C20.8192 20.9962 21.1613 20.901 21.4623 20.7239C21.7633 20.5467 22.0127 20.2939 22.1856 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.4471 18.6453 22.3547 18.3024 22.18 18L13.71 3.86C13.5318 3.56611 13.2807 3.32312 12.9812 3.15448C12.6817 2.98585 12.3438 2.89725 12 2.89725C11.6563 2.89725 11.3184 2.98585 11.0188 3.15448C10.7193 3.32312 10.4683 3.56611 10.29 3.86V3.86Z"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 9V13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 17H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </symbol>


    </svg>
</template>
