import { ActionIcon, Container, createStyles, Title } from '@mantine/core';
import GithubIcon from '../../public/assets/icons/github-icon.svg';
import MailIcon from '../../public/assets/icons/mail-icon.svg';
import LinkedinIcon from '../../public/assets/icons/linkedin-icon.svg';
import Image from 'next/image';
import InfoPicture from '../../public/assets/images/personal-info-picture.png';

const useStyles = createStyles((theme) => ({
  mainBackground: {
    height: '100vh',
    width: '100%',
    backgroundColor: theme.colors.backgroundSecondary[4],

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      height: 'auto',
    },
  },
  root: {
    background: theme.colors.backgroundSecondary[4],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    columnGap: 30,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column',
      rowGap: 30,
    },
  },
  pictureDiv: {
    boxShadow: `-15px 15px 0px 0px ${theme.colors.accent[3]}`,
    WebkitBoxShadow: `-15px 15px 0px 0px ${theme.colors.accent[3]}`,
    display: 'flex',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      marginLeft: 15,
      maxWidth: 400,
    },
  },
  picture: {
    maxWidth: '50%',
  },
  info: { maxWidth: 400 },
  subtitle: {
    color: theme.colors.accent[3],
  },
  buttonContainer: {
    display: 'flex',
    columnGap: 18,
  },
  button: {
    background: theme.colors.accent[3],
    height: 60,
    width: 60,
  },
}));

const PersonalInfo = () => {
  const { classes } = useStyles();

  const buttonsData = [
    { icon: GithubIcon, altText: 'Github' },
    { icon: MailIcon, altText: 'Mail' },
    { icon: LinkedinIcon, altText: 'LinkedIn' },
  ];

  const buttons = buttonsData.map((button, index) => {
    return (
      <ActionIcon
        key={index}
        radius="xl"
        variant="filled"
        className={classes.button}
        style={
          button.altText === 'Github'
            ? {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }
            : {}
        }
      >
        <Image src={button.icon} alt={button.altText}></Image>
      </ActionIcon>
    );
  });

  return (
    <div className={classes.mainBackground}>
      <Container size={'xl'} className={classes.root}>
        <div className={classes.pictureDiv}>
          <Image
            className={classes.picture}
            src={InfoPicture}
            alt={'A picture of me'}
          ></Image>
        </div>
        <div className={classes.info}>
          <p className={classes.subtitle}>SOFTWARE DEVELOPER</p>
          <Title order={1}>Carlos Gonzalez</Title>
          <p>
            Non ergo erunt homines deliciis diffluentes audiendi si qua ndo de
            amicitia, quam nec usu nec ratione habent cognidis putabunt. Nam
            quis est, pro deorum fidem atque hominuqu velit, ut neque diligat
            quemquam nec ipse ab ullo diligat circumfluere.{' '}
          </p>
          <p>
            Non ergo erunt homines deliciis diffluentes audiendi si qua ndo de
            amicitia, quam nec usu nec ratione habent cognidis putabunt. Nam
            quis est, pro deorum fidem.{' '}
          </p>
          <div className={classes.buttonContainer}>{buttons}</div>
        </div>
      </Container>
    </div>
  );
};

export default PersonalInfo;