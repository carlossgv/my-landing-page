import { Container, createStyles, Title } from "@mantine/core";
import PageData from "../../utils/page-data";
import ReposCarousel from "../ReposCarousel/ReposCarousel";
import TechStack from "../TechStack/TechStack";

const reposData = PageData.repos.reposData;

const useStyles = createStyles((theme) => ({
  root: {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: theme.colors.backgroundPrimary[0],
    display: "flex",
    flexDirection: "column",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      height: "auto",
    },
  },
  reposDiv: {
    background: theme.colors.backgroundPrimary[0],
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: 80,
    width: "100%",
  },
  carouselWrapper: {
    width: "50%",
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      width: "100%",
    },
  },
}));

const ReposAndStack = ({ locale }: { locale: string }) => {
  const { classes } = useStyles();

  // @ts-ignore
  const TITLE = PageData.repos.title[locale];
  // @ts-ignore
  const SUBTITLE = PageData.repos.subtitle[locale];

  return (
    <div id="repos" className={classes.root}>
      <Container size={"xl"} className={classes.reposDiv}>
        <div>
          <Title order={1}>{TITLE}</Title>
          <p>{SUBTITLE}</p>
        </div>
        <div className={classes.carouselWrapper}>
          <ReposCarousel
            locale={locale}
            data={reposData as any[]}
          ></ReposCarousel>
        </div>
      </Container>
      <TechStack locale={locale}></TechStack>
    </div>
  );
};

export default ReposAndStack;
