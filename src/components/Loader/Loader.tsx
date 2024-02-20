import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
touch-action: none;
overflow: hidden;
  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: black;

  width: 100%;

  @media (max-width: 48em) {
    svg{
      width: 20vw;
    }
  }

  svg {
    width: 10vw;

    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    g {
      path {
        stroke: #fff;
      }
    }
  }
`;

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      // yoyo: Infinity,
      ease: 'easeInOut',
    },
  },
};
const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      yoyo: Infinity,

      ease: 'easeInOut',
    },
  },
};

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  padding-top: 0.5rem;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};

  }
`;

const Loader = () => {
  return (
    <Container
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 80"
        enableBackground="new 0 0 100 80"
        width="60px"
        height="60px"
        fill="#FBCF26"
      >
        <g>
          <motion.path
            fill="#FBCF26"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M37.774,75.117h-3.64v3.006h3.64V75.117z M51.43,75.118h-3.828v3.006h3.828V75.118z M65.085,75.118h-3.828
            v3.005h3.828V75.118z M78.74,75.119h-3.828v3.005h3.828V75.119z M41.376,81.124h-2.852v2.927h2.852V81.124z M55.032,81.124h-3.828
            v2.927h3.828V81.124z M64.859,84.051h3.827v-2.927h-3.827V84.051z M78.515,81.124v2.927h2.176v-2.927H78.515z M74.912,89.753h3.828
            v-2.701h-3.828V89.753z M54.43,89.753h10.655v-2.701H54.43V89.753z M40.775,89.753h3.826v-2.701h-3.826V89.753z"
          />
        </g>
        <path
          fill="#1A2559"
          d="M85.218,72.118h-51.31c-1.534,0-2.775,1.243-2.775,2.775v15.086c0,1.532,1.241,2.773,2.775,2.773
            l51.31,0.002c1.534-0.002,2.775-1.243,2.775-2.775V74.893C87.994,73.361,86.752,72.118,85.218,72.118z M74.912,75.119l3.828,0v3.004
            h-3.828V75.119z M75.515,81.124v2.927h-3.828v-2.927H75.515z M68.085,75.119h3.828v3.005h-3.828V75.119z M68.686,81.124v2.927
            h-3.827v-2.927H68.686z M61.257,75.118h3.828v3.005h-3.828V75.118z M61.858,81.124v2.927h-3.826v-2.927H61.858z M54.43,75.118h3.827
            v3.005H54.43V75.118z M55.032,81.124v2.927h-3.828v-2.927H55.032z M47.602,75.118h3.828v3.006h-3.828V75.118z M48.204,81.124v2.927
            h-3.827v-2.927H48.204z M40.775,75.117l3.826,0v3.006h-3.826V75.117z M34.133,81.124h1.391v2.927h-1.391V81.124z M37.774,89.753
            h-3.642v-2.701h3.642V89.753z M37.774,78.124h-3.64v-3.006h3.64V78.124z M38.524,81.124h2.852v2.927h-2.852V81.124z M44.601,89.753
            h-3.826v-2.701h3.826V89.753z M51.43,89.753h-3.828v-2.701h3.828V89.753z M65.085,89.753H54.43v-2.701h10.655V89.753z
            M71.913,89.753h-3.828v-2.701h3.828V89.753z M78.74,89.753h-3.828v-2.701h3.828V89.753z M80.691,84.051h-2.176v-2.927h2.176V84.051
            z M84.993,89.753h-3.252v-2.701h3.252V89.753z M84.994,84.051h-1.302v-2.927h1.302V84.051z M84.995,78.124h-3.254v-3.004h3.254
            V78.124z M78.913,26.327H37.737v42.916h41.177V26.327z M75.913,66.243H40.737V29.327h35.177V66.243z"
        />
        <g>
          <g>
            <path
              fill="#FBCF26"
              d="M56.131,51.749l-6.662-2.764v-1.739l6.662-2.768v2.081l-4.049,1.561l4.049,1.561V51.749z"
            />
          </g>
          <g>
            <path
              fill="#FBCF26"
              d="M58.915,43.674h1.218l-2.157,8.883H56.77L58.915,43.674z"
            />
          </g>
          <g>
            <path
              fill="#FBCF26"
              d="M60.731,49.68l4.049-1.561l-4.049-1.561v-2.081l6.662,2.768v1.739l-6.662,2.764V49.68z"
            />
          </g>
        </g>
      </svg>
      <Text variants={textVariants} initial="hidden" animate="visible">
        ISTECode
      </Text>
    </Container>
  );
};

export default Loader;











