import { ActionIcon, Container, createStyles, Title } from "@mantine/core";
import GithubIcon from "../../public/assets/icons/github-icon.svg";
import MailIcon from "../../public/assets/icons/mail-icon.svg";
import LinkedinIcon from "../../public/assets/icons/linkedin-icon.svg";
import Image from "next/image";
import InfoPicture from "../../public/assets/images/personal-info-picture.png";
import pageData from "../../utils/page-data";

const useStyles = createStyles((theme) => ({
  mainBackground: {
    height: "100vh",
    width: "100%",
    backgroundColor: theme.colors.backgroundSecondary[0],

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      height: "auto",
      paddingTop: 80,
      paddingBottom: 80,
    },
  },
  root: {
    background: theme.colors.backgroundSecondary[0],
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    columnGap: 30,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column",
      rowGap: 30,
    },
  },
  pictureDiv: {
    boxShadow: `-15px 15px 0px 0px ${theme.colors.accent[0]}`,
    WebkitBoxShadow: `-15px 15px 0px 0px ${theme.colors.accent[0]}`,
    display: "flex",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      marginLeft: 15,
      maxWidth: 400,
    },
  },
  picture: {
    maxWidth: "50%",
  },
  info: { maxWidth: 400 },
  subtitle: {
    color: theme.colors.accent[0],
  },
  buttonContainer: {
    display: "flex",
    columnGap: 18,
  },
  button: {
    background: theme.colors.accent[0],
    height: 60,
    width: 60,
  },
  description: {
    whiteSpace: "pre-wrap",
  },
}));

const PersonalInfo = ({ locale }: { locale: string }) => {
  const { classes } = useStyles();
  const ABOUT_ME = pageData.aboutMe.description[locale];

  const buttonsData = [
    {
      icon: GithubIcon,
      altText: "Github",
      link: "https://github.com/carlossgv",
    },
    { icon: MailIcon, altText: "Mail", link: "mailto:carlossgv@gmail.com" },
    {
      icon: LinkedinIcon,
      altText: "LinkedIn",
      link: "https://www.linkedin.com/in/carlossgv/",
    },
  ];

  const buttons = buttonsData.map((button, index) => {
    return (
      <a
        href={button.link}
        target="_blank"
        rel="noopener noreferrer"
        key={index}
      >
        <ActionIcon
          onClick={() => {
            window.open(button.link, "_blank");
          }}
          radius="xl"
          variant="filled"
          className={classes.button}
          style={
            button.altText === "Github"
              ? {
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }
              : {}
          }
        >
          <Image src={button.icon} alt={button.altText}></Image>
        </ActionIcon>
      </a>
    );
  });

  return (
    <a id="personal-info">
      <div className={classes.mainBackground}>
        <Container size={"xl"} className={classes.root}>
          <div className={classes.pictureDiv}>
            <Image
              className={classes.picture}
              src={InfoPicture}
              alt={"A picture of me"}
            ></Image>
          </div>
          <div className={classes.info}>
            <p className={classes.subtitle}>SOFTWARE DEVELOPER</p>
            <Title order={1}>Carlos Gonzalez</Title>
            <p className={classes.description}>{ABOUT_ME}</p>
            <div className={classes.buttonContainer}>{buttons}</div>
          </div>
        </Container>
      </div>
    </a>
  );
};

export default PersonalInfo;
