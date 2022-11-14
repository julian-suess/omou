import React from 'react';
import { motion } from 'framer-motion';

const getRandomNumber = () => {
  const max = 24;
  const min = 6;
  return Math.floor(Math.random() * Math.floor(max)) + min;
};

const Basin = ({ giveMeAThought, ...props }) => {
  let starAnimation = {
    initial: { opacity: 1 },
    animate: { opacity: 0 },
    transition: {
      flip: Infinity,
      duration: 2,
    },
  };

  return (
    <svg
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="omou" clipPath="url(#clip0)">
        <path
          id="sky"
          d="M1965.71 -22.8572H-48.5714V1142.86H1965.71V-22.8572Z"
          fill="url(#gradient)"
        />
        <path
          id="ground"
          d="M1034.29 1668.57C1659.16 1668.57 2165.71 1346.86 2165.71 950C2165.71 553.144 1659.16 231.428 1034.29 231.428C409.415 231.428 -97.1427 553.144 -97.1427 950C-97.1427 1346.86 409.415 1668.57 1034.29 1668.57Z"
          fill="#0F1C2B"
        />
        <path
          id="tree_7"
          d="M424.286 -41.4285L468.571 154.286L405.714 120L407.143 147.143L465.714 235.714L452.857 354.286L458.571 562.857L682.857 502.857L595.714 80.0001V-45.7142L424.286 -41.4285Z"
          fill="#1F3956"
        />
        <path
          id="tree_6"
          d="M778.571 -55.7142L790 128.571L775.714 440L1048.04 592.495L951.429 355.714L918.571 122.857L955.714 57.1429L945.714 35.7143L907.143 78.5715L895.714 -85.7142L778.571 -55.7142Z"
          fill="#1F3956"
        />
        <path
          id="tree_5"
          d="M1191.43 -65.7142L1219.11 191.442L1167.08 156.493L1151.47 184.818L1222.86 277.143L1217.14 572.857L1334.29 591.429L1343.33 324.466L1311.43 117.143L1342.86 -52.8571L1312.86 -57.1428L1271.43 57.1429L1248.57 -45.7142L1191.43 -65.7142Z"
          fill="#1F3956"
        />
        <path
          id="tree_4"
          d="M317.244 444.286L268.673 137.143L290.102 -31.4285H190.102L221.53 224.286L155.816 178.572V222.857L222.959 312.857L174.387 375.714L212.959 484.286L317.244 444.286Z"
          fill="#0F1C2B"
        />
        <path
          id="tree_3"
          d="M1021.01 -82.8571L1036.52 157.143L1035.41 258.572L1018.8 282.857L1073.07 274.286L1085.25 255.714L1091.9 284.286L1137.31 277.143L1135.1 204.286L1104.71 50.5297L1119.59 -74.2856L1021.01 -82.8571Z"
          fill="#0F1C2B"
        />
        <path
          id="tree_2"
          d="M1505 -95.7142L1525 205.714L1507.86 317.143C1507.86 317.143 1622.14 368.571 1623.57 361.429C1625 354.286 1579.29 118.571 1579.29 118.571L1586.43 37.1429L1573.57 -105.714L1505 -95.7142Z"
          fill="#0F1C2B"
        />
        <path
          id="tree_1"
          d="M1780 1225.71L1814.29 371.429L1679.8 208.081L1705.51 170.938L1797.14 237.143L1828.57 108.572L1748.57 -94.2856L2000 -82.8571L2057.14 1257.14L1780 1225.71Z"
          fill="#1F3956"
        />
        <path
          id="tree_8"
          d="M194.286 650L230 428.571L200 358.571L307.143 221.429L292.857 180L180 295.714L150 147.143L160 -50L-48.5714 -22.8571L-17.1428 1117.14L235 1102.86L194.286 650Z"
          fill="#1F3956"
        />
        <g id="basin">
          <path
            id="basin_2"
            d="M979.645 1354.34C1349.09 1354.34 1648.58 1123.13 1648.58 837.911C1648.58 552.694 1349.09 321.48 979.645 321.48C610.204 321.48 310.714 552.694 310.714 837.911C310.714 1123.13 610.204 1354.34 979.645 1354.34Z"
            fill="#D9D9D9"
          />
          <path
            id="water"
            d="M979.645 1204.57C1273.48 1204.57 1511.67 1023.11 1511.67 799.268C1511.67 575.426 1273.48 393.966 979.645 393.966C685.814 393.966 447.618 575.426 447.618 799.268C447.618 1023.11 685.814 1204.57 979.645 1204.57Z"
            fill="white"
          />
          <path
            id="circle_3"
            d="M628.479 593.824C565.987 650.57 531.184 725.598 531.184 803.572C531.184 843.734 540.428 883.503 558.389 920.608C576.349 957.713 602.674 991.428 635.861 1019.83C669.047 1048.23 708.446 1070.75 751.806 1086.12C795.166 1101.49 841.639 1109.4 888.572 1109.4C920.341 1109.4 951.968 1105.78 982.617 1098.62C967.998 1100.09 953.292 1100.83 938.572 1100.83C889.013 1100.83 839.939 1092.48 794.152 1076.25C748.365 1060.02 706.761 1036.23 671.718 1006.24C636.674 976.254 608.876 940.653 589.91 901.471C570.945 862.289 561.183 820.294 561.184 777.884C561.184 712.097 584.663 647.88 628.479 593.824Z"
            fill="#F2F2F2"
          />
          <path
            id="circle_2"
            d="M1048.04 592.495C995.841 592.495 944.951 604.944 902.51 628.095C938.221 614.946 977.372 608.117 1017.04 608.117C1086.83 608.117 1153.77 629.24 1203.13 666.839C1252.49 704.438 1280.21 755.433 1280.21 808.606C1280.21 833.177 1274.28 857.539 1262.72 880.477C1285.82 850.979 1298.01 817.272 1298.01 782.925C1298.01 757.918 1291.55 733.155 1278.98 710.051C1266.42 686.947 1248.01 665.954 1224.8 648.271C1201.58 630.588 1174.03 616.561 1143.7 606.991C1113.37 597.421 1080.87 592.495 1048.04 592.495Z"
            fill="#F7F7F7"
          />
          <path
            id="circle_1"
            d="M972.221 1003.99C1024.42 1003.99 1075.31 991.542 1117.75 968.391C1082.04 981.539 1042.89 988.369 1003.23 988.369C933.427 988.369 866.487 967.246 817.131 929.647C767.776 892.048 740.048 841.053 740.048 787.879C740.048 763.309 745.977 738.947 757.54 716.009C734.443 745.507 722.249 779.214 722.249 813.56C722.249 838.568 728.715 863.331 741.277 886.435C753.839 909.539 772.252 930.532 795.464 948.215C818.676 965.898 846.233 979.925 876.561 989.495C906.889 999.065 939.394 1003.99 972.221 1003.99Z"
            fill="#E5E5E5"
          />
        </g>
        <g id="click" onClick={giveMeAThought}>
          <path
            id="ground_2"
            d="M1848.2 804.735H1564.1C1541.01 804.735 1522.3 823.448 1522.3 846.531V985.125C1522.3 1008.21 1541.01 1026.92 1564.1 1026.92H1848.2C1871.28 1026.92 1890 1008.21 1890 985.125V846.531C1890 823.448 1871.28 804.735 1848.2 804.735Z"
            fill="#D9D9D9"
          />
          <path
            id="circle"
            d="M1760.98 952.626C1770.26 960.533 1784.26 956.98 1791.19 947.795C1800.94 934.87 1795.95 916.442 1783.24 907.562C1766.51 895.884 1743.41 902.396 1732.53 918.831C1718.85 939.488 1726.97 967.463 1747.27 980.392C1771.98 996.124 1805 986.343 1820.02 962.032C1826.14 952.128 1829.1 940.434 1828.62 928.814"
            stroke="white"
            strokeWidth="12"
          />
        </g>
        <g id="logo">
          <path
            id="u"
            d="M227.15 51.5781V57.9336C227.15 64.523 229.004 69.1196 231.941 72.0996C234.879 75.0796 238.964 76.5079 243.672 76.5079C248.38 76.5079 252.463 75.0796 255.4 72.0996C258.338 69.1196 260.191 64.523 260.191 57.9336V51.5781H250.574V58.0742C250.574 61.39 249.804 63.6689 248.484 65.1309C247.164 66.5929 245.36 67.1094 243.672 67.1094C241.984 67.1094 240.178 66.5929 238.857 65.1309C237.537 63.6689 236.77 61.39 236.77 58.0742V51.5781H227.15Z"
            fill="white"
          />
          <path
            id="o"
            d="M197.355 52.5215C189.699 52.5215 183.431 55.0439 178.154 60.2207C172.903 65.397 170.359 71.5251 170.359 79.0078C170.359 86.4089 172.892 92.5248 178.125 97.7578C183.358 102.991 189.482 105.531 196.883 105.531C204.342 105.531 210.473 103.006 215.676 97.8027C220.879 92.5997 223.406 86.4668 223.406 79.0078C223.406 71.6863 220.894 65.5803 215.707 60.3184C210.547 55.0589 204.559 52.5215 197.355 52.5215ZM196.883 64.6719C200.668 64.6719 204.083 66.1459 206.693 68.9023L206.705 68.9099C209.335 71.6376 210.705 75.1306 210.705 79.0075C210.705 82.8917 209.332 86.3958 206.697 89.1501C204.084 91.8837 200.67 93.3357 196.886 93.3357C193.143 93.3357 189.746 91.8608 187.09 89.115H187.078V89.1074C184.446 86.3555 183.063 82.8688 183.063 79.0078C183.063 75.1469 184.446 71.6542 187.078 68.9023C189.712 66.1488 193.115 64.6719 196.881 64.6719H196.883Z"
            fill="white"
          />
          <path
            id="m"
            d="M127.014 67.6621C123.222 67.6621 120.195 68.9583 117.52 71.7519V71.7595H117.508C114.837 74.5254 113.567 77.7253 113.567 81.74V104.181H124.604V84.7888C124.604 83.1466 124.788 81.7754 125.459 80.574C126.131 79.3725 127.569 78.5056 128.952 78.5056C130.286 78.5056 131.779 79.2 132.457 80.4255C133.167 81.6624 133.262 82.9865 133.262 84.7517V104.181H144.297V84.7888C144.297 83.1438 144.486 81.7619 145.168 80.5583C145.851 79.3548 147.303 78.5056 148.69 78.5056C150.033 78.5056 151.539 79.2003 152.211 80.4411C152.879 81.6745 152.957 82.9816 152.957 84.7517V104.181H164V83.408C164 78.321 162.884 74.7182 160.914 72.3728H160.903V72.3652C158.245 69.1664 154.948 67.6621 150.466 67.6621C147.182 67.6621 143.78 69.2077 140.124 72.6894L138.743 73.9961L137.444 72.6153C134.228 69.2043 130.861 67.6621 127.007 67.6621H127.014Z"
            fill="white"
          />
          <path
            id="u_2"
            d="M81.2382 52.5215C73.5822 52.5215 67.3136 55.0439 62.0371 60.2207C56.7861 65.397 54.2422 71.5251 54.2422 79.0078C54.2422 86.4089 56.7748 92.5248 62.0079 97.7578C67.2408 102.991 73.3645 105.531 80.7657 105.531C88.2247 105.531 94.3557 103.006 99.5587 97.8027C104.762 92.5997 107.289 86.4668 107.289 79.0078C107.289 71.6863 104.777 65.5803 99.5899 60.3184C94.43 55.0589 88.4416 52.5215 81.2382 52.5215ZM80.7657 64.6719C84.551 64.6719 87.9579 66.1459 90.5683 68.9023L90.5797 68.9099C93.2101 71.6376 94.5875 75.1306 94.5875 79.0075C94.5875 82.8917 93.2065 86.3958 90.5719 89.1501C87.9585 91.8837 84.553 93.3357 80.7692 93.3357C77.0258 93.3357 73.6227 91.8608 70.9664 89.115L70.9551 89.1074C68.3228 86.3555 66.9472 82.8688 66.9472 79.0078C66.9472 75.1469 68.3228 71.6542 70.9551 68.9023C73.589 66.1488 76.9995 64.6719 80.7657 64.6719Z"
            fill="white"
          />
        </g>

        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M664.036 173.071C668.474 173.071 672.071 169.474 672.071 165.036C672.071 160.598 668.474 157 664.036 157C659.598 157 656 160.598 656 165.036C656 169.474 659.598 173.071 664.036 173.071Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M765.5 55C768.538 55 771 52.5376 771 49.5C771 46.4624 768.538 44 765.5 44C762.462 44 760 46.4624 760 49.5C760 52.5376 762.462 55 765.5 55Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M620 25C621.105 25 622 24.1046 622 23C622 21.8954 621.105 21 620 21C618.895 21 618 21.8954 618 23C618 24.1046 618.895 25 620 25Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M742 127C743.105 127 744 126.105 744 125C744 123.895 743.105 123 742 123C740.895 123 740 123.895 740 125C740 126.105 740.895 127 742 127Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M1003 28C1004.1 28 1005 27.1046 1005 26C1005 24.8954 1004.1 24 1003 24C1001.9 24 1001 24.8954 1001 26C1001 27.1046 1001.9 28 1003 28Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M1467 24C1468.1 24 1469 23.1046 1469 22C1469 20.8954 1468.1 20 1467 20C1465.9 20 1465 20.8954 1465 22C1465 23.1046 1465.9 24 1467 24Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M1489 125C1490.1 125 1491 124.105 1491 123C1491 121.895 1490.1 121 1489 121C1487.9 121 1487 121.895 1487 123C1487 124.105 1487.9 125 1489 125Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M1622 149C1623.1 149 1624 148.105 1624 147C1624 145.895 1623.1 145 1622 145C1620.9 145 1620 145.895 1620 147C1620 148.105 1620.9 149 1622 149Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M1758 336C1759.1 336 1760 335.105 1760 334C1760 332.895 1759.1 332 1758 332C1756.9 332 1756 332.895 1756 334C1756 335.105 1756.9 336 1758 336Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M1777 211C1778.1 211 1779 210.105 1779 209C1779 207.895 1778.1 207 1777 207C1775.9 207 1775 207.895 1775 209C1775 210.105 1775.9 211 1777 211Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M1655 321C1656.1 321 1657 320.105 1657 319C1657 317.895 1656.1 317 1655 317C1653.9 317 1653 317.895 1653 319C1653 320.105 1653.9 321 1655 321Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M1137 28C1138.1 28 1139 27.1046 1139 26C1139 24.8954 1138.1 24 1137 24C1135.9 24 1135 24.8954 1135 26C1135 27.1046 1135.9 28 1137 28Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M1178 63C1179.1 63 1180 62.1046 1180 61C1180 59.8954 1179.1 59 1178 59C1176.9 59 1176 59.8954 1176 61C1176 62.1046 1176.9 63 1178 63Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M957 213C958.105 213 959 212.105 959 211C959 209.895 958.105 209 957 209C955.895 209 955 209.895 955 211C955 212.105 955.895 213 957 213Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M1385 244C1386.1 244 1387 243.105 1387 242C1387 240.895 1386.1 240 1385 240C1383.9 240 1383 240.895 1383 242C1383 243.105 1383.9 244 1385 244Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M1359 181C1360.1 181 1361 180.105 1361 179C1361 177.895 1360.1 177 1359 177C1357.9 177 1357 177.895 1357 179C1357 180.105 1357.9 181 1359 181Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M917 46C918.105 46 919 45.1046 919 44C919 42.8954 918.105 42 917 42C915.895 42 915 42.8954 915 44C915 45.1046 915.895 46 917 46Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M1197 156C1198.1 156 1199 155.105 1199 154C1199 152.895 1198.1 152 1197 152C1195.9 152 1195 152.895 1195 154C1195 155.105 1195.9 156 1197 156Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M760.5 235C762.433 235 764 233.433 764 231.5C764 229.567 762.433 228 760.5 228C758.567 228 757 229.567 757 231.5C757 233.433 758.567 235 760.5 235Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M986.75 157.5C988.821 157.5 990.5 155.821 990.5 153.75C990.5 151.679 988.821 150 986.75 150C984.679 150 983 151.679 983 153.75C983 155.821 984.679 157.5 986.75 157.5Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M1627.75 36.5C1629.82 36.5 1631.5 34.8211 1631.5 32.75C1631.5 30.6789 1629.82 29 1627.75 29C1625.68 29 1624 30.6789 1624 32.75C1624 34.8211 1625.68 36.5 1627.75 36.5Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M1763.75 47.5C1765.82 47.5 1767.5 45.8211 1767.5 43.75C1767.5 41.6789 1765.82 40 1763.75 40C1761.68 40 1760 41.6789 1760 43.75C1760 45.8211 1761.68 47.5 1763.75 47.5Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M1472.75 254.5C1474.82 254.5 1476.5 252.821 1476.5 250.75C1476.5 248.679 1474.82 247 1472.75 247C1470.68 247 1469 248.679 1469 250.75C1469 252.821 1470.68 254.5 1472.75 254.5Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M1138.5 106C1139.88 106 1141 104.881 1141 103.5C1141 102.119 1139.88 101 1138.5 101C1137.12 101 1136 102.119 1136 103.5C1136 104.881 1137.12 106 1138.5 106Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M960.75 104.5C962.821 104.5 964.5 102.821 964.5 100.75C964.5 98.6789 962.821 97 960.75 97C958.679 97 957 98.6789 957 100.75C957 102.821 958.679 104.5 960.75 104.5Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M1399.75 135.5C1401.82 135.5 1403.5 133.821 1403.5 131.75C1403.5 129.679 1401.82 128 1399.75 128C1397.68 128 1396 129.679 1396 131.75C1396 133.821 1397.68 135.5 1399.75 135.5Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M1406.75 43.5C1408.82 43.5 1410.5 41.8211 1410.5 39.75C1410.5 37.6789 1408.82 36 1406.75 36C1404.68 36 1403 37.6789 1403 39.75C1403 41.8211 1404.68 43.5 1406.75 43.5Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M1446.75 201.5C1448.82 201.5 1450.5 199.821 1450.5 197.75C1450.5 195.679 1448.82 194 1446.75 194C1444.68 194 1443 195.679 1443 197.75C1443 199.821 1444.68 201.5 1446.75 201.5Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M1150.75 220.5C1152.82 220.5 1154.5 218.821 1154.5 216.75C1154.5 214.679 1152.82 213 1150.75 213C1148.68 213 1147 214.679 1147 216.75C1147 218.821 1148.68 220.5 1150.75 220.5Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M1339.5 79C1340.88 79 1342 80.1193 1342 81.5C1342 82.8807 1340.88 84 1339.5 84C1338.12 84 1337 82.8807 1337 81.5C1337 80.1193 1338.12 79 1339.5 79Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M378.393 275C382.831 275 386.429 271.402 386.429 266.964C386.429 262.526 382.831 258.929 378.393 258.929C373.955 258.929 370.357 262.526 370.357 266.964C370.357 271.402 373.955 275 378.393 275Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M682.75 67.5C684.821 67.5 686.5 65.8211 686.5 63.75C686.5 61.6789 684.821 60 682.75 60C680.679 60 679 61.6789 679 63.75C679 65.8211 680.679 67.5 682.75 67.5Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M673.5 230C674.881 230 676 228.881 676 227.5C676 226.119 674.881 225 673.5 225C672.119 225 671 226.119 671 227.5C671 228.881 672.119 230 673.5 230Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M298.75 128.5C300.821 128.5 302.5 126.821 302.5 124.75C302.5 122.679 300.821 121 298.75 121C296.679 121 295 122.679 295 124.75C295 126.821 296.679 128.5 298.75 128.5Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M374.5 157C376.433 157 378 155.433 378 153.5C378 151.567 376.433 150 374.5 150C372.567 150 371 151.567 371 153.5C371 155.433 372.567 157 374.5 157Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M349.5 351C353.09 351 356 348.09 356 344.5C356 340.91 353.09 338 349.5 338C345.91 338 343 340.91 343 344.5C343 348.09 345.91 351 349.5 351Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M411.5 52C414.538 52 417 49.5376 417 46.5C417 43.4624 414.538 41 411.5 41C408.462 41 406 43.4624 406 46.5C406 49.5376 408.462 52 411.5 52Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M1657.23 69.6429C1660.14 69.6429 1662.5 67.2844 1662.5 64.375C1662.5 61.4657 1660.14 59.1072 1657.23 59.1072C1654.32 59.1072 1651.96 61.4657 1651.96 64.375C1651.96 67.2844 1654.32 69.6429 1657.23 69.6429Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M1772.27 191.536C1775.18 191.536 1777.54 189.177 1777.54 186.268C1777.54 183.358 1775.18 181 1772.27 181C1769.36 181 1767 183.358 1767 186.268C1767 189.177 1769.36 191.536 1772.27 191.536Z"
          fill="white"
        />
        <motion.path
          {...starAnimation}
          iinitial={{ opacity: Math.random() }}
          transition={{ flip: Infinity, duration: getRandomNumber() }}
          d="M1700.27 273.536C1703.18 273.536 1705.54 271.177 1705.54 268.268C1705.54 265.358 1703.18 263 1700.27 263C1697.36 263 1695 265.358 1695 268.268C1695 271.177 1697.36 273.536 1700.27 273.536Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="1920" height="1080" fill="white" />
        </clipPath>
        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
          <motion.stop
            stopColor="#3F74AF"
            animate={{
              stopColor: [
                'rgb(33, 86, 145)',
                'rgb(63, 116, 175)',
                'rgb(93, 146, 205)',
                'rgb(123, 176, 235)',
              ],
            }}
            transition={{
              flip: Infinity,
              ease: 'linear',
              duration: 12,
            }}
            offset="25%"
          />
          <motion.stop
            stopColor="#FF0000"
            animate={{
              stopColor: ['rgb(255, 0, 0)', 'rgb(225, 0, 0)', 'rgb(195, 0, 0)'],
            }}
            transition={{
              flip: Infinity,
              ease: 'linear',
              duration: 12,
            }}
            offset="75%"
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Basin;