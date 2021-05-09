import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import lake from '../assets/images/lake.jpg';

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BG = styled.div`
  &:before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;

    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.65),
        rgba(0, 0, 0, 0.65)
      ),
      url(${lake});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #001d3d;
  }
`;

const Hello = styled(motion.div)`
  text-align: center;

  opacity: 0;

  #signature {
    height: 13rem;
    padding-left: 1rem;
    overflow: visible;

    fill: none;
    stroke: #fff;
    stroke-width: 2;
    stroke-dasharray: 2956.22px 2956.22px;
    stroke-dashoffset: 2956.22px;
    animation: brush 3s linear 5s;
    animation-fill-mode: forwards;
  }
  @keyframes brush {
    0% {
      stroke-dashoffset: 2956.22px;
      fill: rgba(255, 255, 255, 0);
    }

    100% {
      stroke-dashoffset: 0;
      fill: rgba(255, 255, 255, 1);
    }
  }
`;

const Title = styled.h1`
  letter-spacing: 0.5rem;
`;

const Greeting = styled.p`
  font-family: 'Lucida Console', 'Courier New', monospace;
  font-size: 1rem;
  color: white;
  background-color: rgba(144, 144, 144, 0.25);
  padding: 0.35rem 0.45rem;
  border-radius: 0.25rem;

  opacity: 0;

  white-space: nowrap;
  overflow: hidden;
  animation: animated-text 2.25s steps(30, end) 2.5s 1 normal both;
  animation-fill-mode: forwards;

  @keyframes animated-text {
    0% {
      width: 0;
      opacity: 1;
    }
    100% {
      width: 62ch;
      opacity: 1;
    }
  }
`;

const SocialButtons = styled(motion.div)`
  opacity: 0;

  margin-top: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: flex;

    svg {
      margin: 0 1rem;
      cursor: pointer;

      fill: ${(props) => props.theme.white};
      transition: fill 0.25s ease-in-out;
    }
    #linkedin {
      padding-bottom: 2px;
    }
    #linkedin:hover {
      fill: #0072b1;
    }
    #github:hover {
      fill: #6e3296;
    }
    #email:hover {
      fill: #ffd700;
    }
  }
`;

const Home = () => {
  return (
    <React.Fragment>
      <Section>
        <Hello
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 2 }}
        >
          <motion.svg
            id="signature"
            version="1.1"
            viewBox="0 0 391.38 300.85"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(77.499 16.514)">
              <path d="m14.086 284.15c-12.925-1.3577-33.064-5.5147-40.999-8.463-6.9838-2.5948-16.482-7.7177-22.034-11.885-5.3471-4.013-16.582-15.47-19.561-19.948-3.5829-5.3848-7.1738-13.994-8.4467-20.251-0.72824-3.5797-0.72554-13.415 0.0048-17.274 2.5364-13.404 15.045-36.705 29.106-54.218 8.6242-10.742 22.322-24.736 32.625-33.331 14.105-11.767 34.961-24.936 51.894-32.768 23.321-10.786 52.243-18.809 78.989-21.911 3.2649-0.37868 5.0051-0.73512 5.5704-1.141 0.97653-0.7011 3.5961-5.0027 11.801-19.379 15.268-26.75 18.729-33.638 24.231-48.218 1.1494-3.0459 2.3657-6.6739 2.703-8.0622 0.73205-3.0135 1.4583-3.8801 3.1968-3.8148 2.3709 0.08913 3.047 1.3927 2.3257 4.4845-0.74124 3.1774-1.2978 6.9229-3.3498 22.543-1.0292 7.8345-2.5516 18.976-3.3829 24.758-1.2858 8.9429-2.5386 19.094-3.3915 27.48-0.14408 1.4167-0.0745 2.226 0.22688 2.6382 0.26926 0.36824 3.3382 1.5029 8.0632 2.9811 11.611 3.6327 17.677 6.4493 26.271 12.198 12.574 8.4117 21.5 18.61 28.432 32.487 7.5882 15.188 11.554 32.475 12.615 54.995 0.39365 8.3488-0.82153 24.288-2.7407 35.951-1.1462 6.965-2.4398 12.042-5.0671 19.885-3.3065 9.8709-5.3342 14.19-9.6923 20.645-9.0459 13.398-17.594 18.959-29.132 18.954-3.7265-3e-3 -4.5161-0.10705-6.5259-0.87119-3.6452-1.386-5.8312-2.8986-10.144-7.0196-8.0752-7.7157-11.232-13.251-14.821-25.986-3.0875-10.956-4.2738-19.686-5.3006-39.003-0.66833-12.573-1.2284-58.328-0.82084-67.062 0.80077-17.161 2.2634-39.751 3.2303-49.891 0.3962-4.155 0.44279-5.8113 0.17109-6.083-0.65316-0.65317-5.0868-1.2356-12.423-1.6321-9.2431-0.4995-12.471-0.32249-13.609 0.74623-0.46265 0.43464-2.4628 3.3125-4.4447 6.3952-16.38 25.478-28.031 41.428-48.563 66.484-7.5873 9.2589-9.684 11.715-20.541 24.066-16.163 18.386-23.638 26.215-25.466 26.674-1.6809 0.42188-3.2287-1.4749-2.728-3.3431 0.11248-0.4197 1.2291-1.5262 2.4814-2.4589 3.6182-2.6948 6.4676-5.5304 14.655-14.584 15.047-16.638 25.604-29.038 40.426-47.482 10.907-13.572 16.085-20.753 30.567-42.395l9.0787-13.566-3.1378-0.10496c-3.9111-0.13082-6.1874 0.1868-18.061 2.5201-18.179 3.5724-28.774 6.6317-44.26 12.779-18.706 7.426-27.633 12.027-43.073 22.198-16.318 10.749-22.775 15.878-34.741 27.591-11.021 10.789-16.002 16.464-25.27 28.793-7.6875 10.227-10.843 15.213-15.446 24.404-6.7624 13.505-8.7528 20.352-8.7789 30.2-0.01515 5.7003 0.26312 7.541 1.896 12.542 3.273 10.024 7.4956 16.724 15.618 24.781 7.6112 7.5502 12.972 11.449 21.444 15.597 19.652 9.6212 44.689 13.737 79.702 13.103 6.1557-0.11152 13.329-0.36258 15.94-0.5579 16-1.1967 33.345-2.8969 48.546-4.7588 22.001-2.6949 104.95-14.716 150.88-21.867 34.577-5.3831 55.493-8.1458 52.833-6.9785-2.4504 1.0753-49.083 9.2189-96.414 16.837-67.442 10.855-128.63 18.794-157.83 20.48-5.5061 0.31779-42.503 0.4128-45.325 0.11639zm178.44-25.985c11.327-4.2953 22.672-20.524 28.594-40.904 3.6029-12.398 6.087-31.848 6.09-47.683 3e-3 -12.307-1.2641-22.628-4.224-34.424-7.2973-29.082-21.418-47.393-45.934-59.563-6.106-3.0312-21.057-7.8687-21.851-7.07-0.17927 0.1804-0.48328 1.32-0.67558 2.5325-0.48429 3.0536-2.2982 24.906-2.7167 32.729-1.8061 33.759-1.0354 87.294 1.5331 106.5 1.4915 11.15 4.7804 23.394 8.0088 29.815 3.865 7.687 11.031 15.257 16.719 17.661 4.1678 1.7614 10.428 1.94 14.456 0.41249zm-41.616-194.83c0.41542-2.6202 5.9911-50.187 6.1703-52.64l0.18689-2.5575-1.4224 2.5437c-0.78231 1.399-3.1103 5.5961-5.1732 9.3268-2.063 3.7307-8.1613 14.403-13.552 23.716-5.3905 9.3131-10.093 17.505-10.449 18.203l-0.64817 1.2705 2.1132 0.20923c2.6604 0.26341 17.296 1.0959 20.313 1.1554l2.2595 0.04459z" />
            </g>
          </motion.svg>

          <Title>André Coutinho</Title>
          <Greeting>
            let greeting = isFriend ? &apos;Hi, nice to meet you!&apos; :
            undefined;
          </Greeting>
          <SocialButtons
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 3.125, delay: 7.5 }}
          >
            <a
              href="https://www.linkedin.com/in/arcoutinho"
              target="_blank"
              rel="noreferrer"
            >
              <motion.svg
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                id="linkedin"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 23"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </motion.svg>
            </a>

            <a href="mailto:coutinho.andre@icloud.com" rel="noreferrer">
              <motion.svg
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                id="email"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
              </motion.svg>
            </a>

            <a
              href="https://github.com/andreRcoutinho"
              target="_blank"
              rel="noreferrer"
            >
              <motion.svg
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                id="github"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </motion.svg>
            </a>
          </SocialButtons>
        </Hello>
        <BG></BG>
      </Section>
    </React.Fragment>
  );
};

export default Home;