import { Icon, IconProps } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';

export const Logo = (props: IconProps) => {
  const { colorMode } = useColorMode();

  return (
    <Icon viewBox="0 0 512 512" {...props}>
      <circle
        cx="256"
        cy="256"
        fill={colorMode === 'light' ? '#08475e' : '#08475e'}
        r="256"
      />
      <path
        d="M511.276 275.338L303.988 68.05 68.05 303.988l207.288 207.288c125.967-9.409 226.53-109.971 235.938-235.938z"
        fill="#05303d"
      />
      <path
        d="M237.253 236.546L134.988 134.281l.314-3.457 62.774-62.774c29.247-29.247 76.665-29.247 105.912 0s29.247 76.665 0 105.912l-62.774 62.774z"
        fill="#fff"
      />
      <path
        d="M303.984 173.961l-62.77 62.77-3.96-.184-50.883-50.883L303.984 68.051c14.623 14.623 21.934 33.785 21.934 52.948.001 19.177-7.311 38.339-21.934 52.962z"
        fill="#d1fefb"
      />
      <path
        d="M68.05 303.988c-29.247-29.247-29.247-76.665 0-105.912l67.252-67.252 105.912 105.912-67.252 67.252c-29.247 29.247-76.665 29.247-105.912 0z"
        fill="#45f6ff"
      />
      <path
        d="M241.214 236.731l-67.253 67.253c-29.246 29.246-76.664 29.246-105.91 0l120.208-120.208z"
        fill="#5ecbf1"
      />
      <g>
        <path
          d="M274.747 275.454l102.265 102.265-.314 3.457-62.774 62.774c-29.247 29.247-76.665 29.247-105.912 0s-29.247-76.665 0-105.912l62.774-62.774z"
          fill="#fff"
        />
        <path
          d="M376.696 381.179l-62.77 62.77c-29.246 29.246-76.664 29.246-105.91 0l117.613-117.613 51.385 51.385z"
          fill="#d1fefb"
        />
        <path
          d="M443.95 208.012c29.247 29.247 29.247 76.665 0 105.912l-67.252 67.252-105.912-105.912 67.252-67.252c29.247-29.247 76.665-29.247 105.912 0z"
          fill="#ff405c"
        />
        <path
          d="M443.949 313.926l-67.253 67.253-52.955-52.955 120.208-120.208c29.246 29.246 29.246 76.664 0 105.91z"
          fill="#d01273"
        />
      </g>
    </Icon>
  );
};
