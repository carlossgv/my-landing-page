import { Container, createStyles, Title } from '@mantine/core';
import pageData, { techStackData } from '../../utils/page-data';
import TechStackCarousel from '../TechStackCarousel/TechStackCarousel';

const useStyles = createStyles((theme) => ({
  wrapper: {
    background: theme.colors.backgroundSecondary[0],
  },
  root: {
    display: 'flex',
    width: '100%',
    padding: '40px 0px',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 50,
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      flexDirection: 'column',
      rowGap: 40,
    },
  },
  logos: {
    width: '60%',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: '80%',
    },
  },
  highlightedText: {
    color: theme.colors.accent[0],
  },
}));

const TechStack = ({
  locale,
  className,
}: {
  locale: string;
  className?: string;
}) => {
  const { classes } = useStyles();

  const FIRST_SENTENCE = pageData.techStack.firstSentence[locale];
  const SECOND_SENTENCE = pageData.techStack.secondSentence[locale];
  const THIRD_SENTENCE = pageData.techStack.thirdSentence[locale];

  return (
    <div className={classes.wrapper}>
      <Container className={`${classes.root} ${className}`} size={'xl'}>
        <div>
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
    </div>
  );
};

export default TechStack;
