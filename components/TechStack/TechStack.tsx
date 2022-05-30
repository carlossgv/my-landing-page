import { Container, createStyles, Title } from '@mantine/core';
import pageData, { techStackData } from '../../utils/page-data';
import TechStackCarousel from '../TechStackCarousel/TechStackCarousel';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    padding: '40px 0px',
    alignItems: 'center',
  },
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
      <div style={{ width: '30%' }}>
        <Title order={4}>{FIRST_SENTENCE}</Title>
        <Title order={4} className={classes.highlightedText}>
          {SECOND_SENTENCE}
        </Title>
        <Title order={4}>{THIRD_SENTENCE}</Title>
      </div>
      <div style={{ width: '70%' }}>
        <TechStackCarousel logos={techStackData} />
      </div>
    </Container>
  );
};

export default TechStack;
