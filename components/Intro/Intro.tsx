import {
  Container,
  createStyles,
  Title,
  Button,
  ActionIcon,
} from '@mantine/core';
import pageData from '../../utils/page-data';
import ArrowIcon from '../../public/assets/icons/down-arrow.svg';
import BackgroundImage from '../../public/assets/images/intro-background-image.png';
import Image from 'next/image';
import { Prism } from '@mantine/prism';
import InternalAnchor from '../InternalAnchor/InternalAnchor';

const useStyles = createStyles((theme) => ({
  mainBackground: {
    width: '100%',
    backgroundColor: theme.colors.backgroundPrimary[4],
  },
  introRoot: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundImage: `url(${BackgroundImage.src})`,
    backgroundSize: '70%',
    backgroundPositionY: 'center',
    backgroundPositionX: 'right',
    backgroundRepeat: 'no-repeat',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      justifyContent: 'center',
      background: 'none',
    },

    '&::before': {
      backgroundColor: 'rgba(0,0,0,0.6)',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  },
  info: {
    maxWidth: 432,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
    zIndex: 1000,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {},
  },
  headText: {
    color: theme.colors.mutedText[0],
  },
  titleDot: {
    color: theme.colors.accent[0],
  },
  button: {
    backgroundColor: theme.colors.accent[0],
    borderRadius: 0,
    marginTop: 30,
    marginBottom: 30,
    '&:hover': {
      backgroundColor: theme.colors.accent[0],
    },
    width: 180,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: '100%',
    },
  },
  icon: {
    width: 15,
  },

  rootCodeBlock: {
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      display: 'none',
    },
  },

  codeBlock: {
    fontSize: 20,
    padding: '50px 50px 50px 50px',
    background:
      theme.fn.linearGradient(
        228,
        'rgba(25, 28, 38, 0.7)',
        'rgba(25, 28, 38, 0.2)'
      ) + '!important',
    backdropFilter: 'blur(10px)',
    borderRadius: 20,
  },
}));

const Intro = ({
  locale,
  navHeight,
}: {
  locale: string;
  navHeight: number;
}) => {
  const { classes } = useStyles();

  const TITLE = pageData.intro.title[locale];
  const DESCRIPTION = pageData.intro.description[locale];
  const BUTTON_TEXT = pageData.intro.button[locale];
  const CODE = `get({ table: "answer", column: "answerid"})
  .then((answer) => {return get({
      table: "question",
      column: "questionid",
      value: answer.answerquestion,
    })`;
  const COPY_CODE = pageData.intro.copyCode[locale];
  const COPIED_CODE = pageData.intro.copiedCode[locale];

  return (
    <div
      className={classes.mainBackground}
      style={{
        height: `calc(100vh - ${navHeight}px)`,
      }}
    >
      <Container className={classes.introRoot} size={'xl'}>
        <div className={classes.info}>
          <p className={classes.headText}>----- SOFTWARE DEVELOPER</p>
          <Title order={2}>
            {TITLE}
            <span className={classes.titleDot}> .</span>
          </Title>
          <p>{DESCRIPTION}</p>
          <InternalAnchor hrefId={'personal-info'}>
            <Button size="lg" uppercase className={classes.button}>
              {BUTTON_TEXT}
            </Button>
          </InternalAnchor>

          <InternalAnchor hrefId={'personal-info'}>
            <ActionIcon>
              <Image
                className={classes.icon}
                src={ArrowIcon}
                alt={'Arrow icon'}
              ></Image>
            </ActionIcon>
          </InternalAnchor>
        </div>
        <Prism
          classNames={{
            root: classes.rootCodeBlock,
            code: classes.codeBlock,
          }}
          language={'javascript'}
          copyLabel={COPY_CODE}
          copiedLabel={COPIED_CODE}
        >
          {CODE}
        </Prism>
      </Container>
    </div>
  );
};

export default Intro;
