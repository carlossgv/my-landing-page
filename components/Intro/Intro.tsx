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

const useStyles = createStyles((theme) => ({
  introRoot: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundImage: `url(${BackgroundImage.src})`,
    backgroundPositionX: 'right',
    backgroundRepeat: 'no-repeat',
    padding: '80px 0px',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      justifyContent: 'center',
    },
  },
  info: {
    maxWidth: 432,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
  },
  headText: {
    color: theme.colors.mutedText[3],
  },
  titleDot: {
    color: theme.colors.accent[3],
  },
  button: {
    backgroundColor: theme.colors.accent[3],
    borderRadius: 0,
    marginTop: 30,
    marginBottom: 30,
    '&:hover': {
      backgroundColor: theme.colors.accent[4],
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
        'rgba(25, 28, 38, 0.9)',
        'rgba(25, 28, 38, 0.5)'
      ) + '!important',
    backdropFilter: 'blur(30px)',
    borderRadius: 20,
  },
}));

const Intro = ({ locale }: { locale: string }) => {
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
    <Container className={classes.introRoot} size={'xl'}>
      <div className={classes.info}>
        <p className={classes.headText}>----- SOFTWARE DEVELOPER</p>
        <Title order={2}>
          {TITLE}
          <span className={classes.titleDot}> .</span>
        </Title>
        <p>{DESCRIPTION}</p>
        <Button size="lg" uppercase className={classes.button}>
          {BUTTON_TEXT}
        </Button>
        <ActionIcon>
          <Image
            className={classes.icon}
            src={ArrowIcon}
            alt={'Arrow icon'}
          ></Image>
        </ActionIcon>
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
  );
};

export default Intro;
