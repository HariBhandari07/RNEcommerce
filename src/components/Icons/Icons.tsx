import React from 'react';
import { Svg, Path, G } from 'react-native-svg';

type IconProps = {
  color?: string;
  size?: number;
};

export const HomeIcon: React.FC<IconProps> = () => {
  return (
    <Svg width="22" height="23" viewBox="0 0 22 23" fill="none">
      <Path
        d="M10.9532 22.1164L11 22.1194L11.0468 22.1164L16.279 21.7894C18.6517 21.6411 20.4997 19.6728 20.4983 17.2955L20.4947 11.3105C20.4941 10.1652 20.0566 9.06315 19.2716 8.22908L14.2709 2.91585C12.4942 1.02805 9.4939 1.02805 7.71714 2.91586L2.7231 8.22203C1.93746 9.05677 1.5 10.1599 1.5 11.3062V17.2981C1.5 19.6744 3.34764 21.6411 5.7193 21.7893L10.9532 22.1164Z"
        stroke="#3E4554"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <Path
        d="M10.9532 22.1164L11 22.1194L11.0468 22.1164L16.279 21.7894C18.6517 21.6411 20.4997 19.6728 20.4983 17.2955L20.4947 11.3105C20.4941 10.1652 20.0566 9.06315 19.2716 8.22908L14.2709 2.91585C12.4942 1.02805 9.4939 1.02805 7.71714 2.91586L2.7231 8.22203C1.93746 9.05677 1.5 10.1599 1.5 11.3062V17.2981C1.5 19.6744 3.34764 21.6411 5.7193 21.7893L10.9532 22.1164Z"
        stroke="black"
        stroke-opacity="0.2"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export const FavoriteIcon: React.FC<IconProps> = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.87187 11.5983C1.79887 8.24832 3.05287 4.41932 6.56987 3.28632C8.41987 2.68932 10.4619 3.04132 11.9999 4.19832C13.4549 3.07332 15.5719 2.69332 17.4199 3.28632C20.9369 4.41932 22.1989 8.24832 21.1269 11.5983C19.4569 16.9083 11.9999 20.9983 11.9999 20.9983C11.9999 20.9983 4.59787 16.9703 2.87187 11.5983Z"
        stroke="#3E4554"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.87187 11.5983C1.79887 8.24832 3.05287 4.41932 6.56987 3.28632C8.41987 2.68932 10.4619 3.04132 11.9999 4.19832C13.4549 3.07332 15.5719 2.69332 17.4199 3.28632C20.9369 4.41932 22.1989 8.24832 21.1269 11.5983C19.4569 16.9083 11.9999 20.9983 11.9999 20.9983C11.9999 20.9983 4.59787 16.9703 2.87187 11.5983Z"
        stroke="black"
        stroke-opacity="0.2"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M16 6.70001C17.07 7.04601 17.826 8.00101 17.917 9.12201"
          stroke="#3E4554"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M16 6.70001C17.07 7.04601 17.826 8.00101 17.917 9.12201"
          stroke="black"
          stroke-opacity="0.2"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </Svg>
  );
};

export const CategoryIcon: React.FC<IconProps> = () => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.0004 4.6738C19.0004 6.7024 17.3552 8.3476 15.3266 8.3476C13.298 8.3476 11.6537 6.7024 11.6537 4.6738C11.6537 2.6452 13.298 1 15.3266 1C17.3552 1 19.0004 2.6452 19.0004 4.6738Z"
        stroke="#3E4554"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.0004 4.6738C19.0004 6.7024 17.3552 8.3476 15.3266 8.3476C13.298 8.3476 11.6537 6.7024 11.6537 4.6738C11.6537 2.6452 13.298 1 15.3266 1C17.3552 1 19.0004 2.6452 19.0004 4.6738Z"
        stroke="black"
        stroke-opacity="0.2"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.3467 4.6738C8.3467 6.7024 6.7024 8.3476 4.6729 8.3476C2.6452 8.3476 1 6.7024 1 4.6738C1 2.6452 2.6452 1 4.6729 1C6.7024 1 8.3467 2.6452 8.3467 4.6738Z"
        stroke="#3E4554"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.3467 4.6738C8.3467 6.7024 6.7024 8.3476 4.6729 8.3476C2.6452 8.3476 1 6.7024 1 4.6738C1 2.6452 2.6452 1 4.6729 1C6.7024 1 8.3467 2.6452 8.3467 4.6738Z"
        stroke="black"
        stroke-opacity="0.2"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.0004 15.2619C19.0004 17.2905 17.3552 18.9348 15.3266 18.9348C13.298 18.9348 11.6537 17.2905 11.6537 15.2619C11.6537 13.2333 13.298 11.5881 15.3266 11.5881C17.3552 11.5881 19.0004 13.2333 19.0004 15.2619Z"
        stroke="#3E4554"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.0004 15.2619C19.0004 17.2905 17.3552 18.9348 15.3266 18.9348C13.298 18.9348 11.6537 17.2905 11.6537 15.2619C11.6537 13.2333 13.298 11.5881 15.3266 11.5881C17.3552 11.5881 19.0004 13.2333 19.0004 15.2619Z"
        stroke="black"
        stroke-opacity="0.2"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.3467 15.2619C8.3467 17.2905 6.7024 18.9348 4.6729 18.9348C2.6452 18.9348 1 17.2905 1 15.2619C1 13.2333 2.6452 11.5881 4.6729 11.5881C6.7024 11.5881 8.3467 13.2333 8.3467 15.2619Z"
        stroke="#3E4554"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.3467 15.2619C8.3467 17.2905 6.7024 18.9348 4.6729 18.9348C2.6452 18.9348 1 17.2905 1 15.2619C1 13.2333 2.6452 11.5881 4.6729 11.5881C6.7024 11.5881 8.3467 13.2333 8.3467 15.2619Z"
        stroke="black"
        stroke-opacity="0.2"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const MoreIcon: React.FC<IconProps> = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      // xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18C14 19.1046 13.1046 20 12 20ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14ZM12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6C14 6.53043 13.7893 7.03914 13.4142 7.41421C13.0391 7.78929 12.5304 8 12 8Z"
        fill="#3E4554"
      />
      <Path
        d="M12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18C14 19.1046 13.1046 20 12 20ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14ZM12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6C14 6.53043 13.7893 7.03914 13.4142 7.41421C13.0391 7.78929 12.5304 8 12 8Z"
        fill="black"
        fill-opacity="0.2"
      />
    </Svg>
  );
};
