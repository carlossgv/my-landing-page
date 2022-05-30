import { Container, createStyles, Title } from '@mantine/core';
import pageData, { techStackData } from '../../utils/page-data';
import TechStackCarousel from '../TechStackCarousel/TechStackCarousel';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    padding: '40px 0px',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 50,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column',
      rowGap: 20,
    },
  },
  logos: {
    width: '60%',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: '80%',
    },
  },
  text: {},
  highlightedText: {
    color: theme.colors.accent[3],
  },
}));

const TechStack = ({ locale }: { locale: string }) => {
  const { classes } = useStyles();

  const FIRST_SENTENCE = pageData.techStack.firstSentence[locale];
  const SECOND_SENTENCE = pageData.techStack.secondSentence[locale];
  const THIRD_SENTENCE = pageData.techStack.thirdSentence[locale];

  return (
    <Container className={classes.root} size={'xl'}>
      <div className={classes.text}>
        <Title order={4}>{FIRST_SENTENCE}</Title>
        <Title order={4} className={classes.highlightedText}>
          {SECOND_SENTENCE}
        </Title>
        <Title order={4}>{THIRD_SENTENCE}</Title>
      </div>
      <div className={classes.logos}>
        <TechStackCarousel logos={techStackData} />
      </div>
    </Container>
  );
};

export default TechStack;
