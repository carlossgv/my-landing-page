import { Text, Card, createStyles } from '@mantine/core';
import Image from 'next/image';

const CARD_WIDTH = 350;
const IMAGE_HEIGHT = (CARD_WIDTH / 16) * 9;
const MIN_CARD_HEIGHT = 290;
const MIN_INFO_HEIGHT = MIN_CARD_HEIGHT - IMAGE_HEIGHT;

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
  },
  card: {
    width: CARD_WIDTH,
    minHeight: MIN_CARD_HEIGHT,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: MIN_INFO_HEIGHT,
    marginTop: -8,
    padding: '0 20px',
  },
  description: {
    textDecoration: 'none',
  },
}));

const RepoCard = ({
  imageUrl,
  title,
  description,
}: {
  imageUrl: string;
  title: string;
  description: string;
}) => {
  const { classes } = useStyles();

  return (
    <Card className={classes.card}>
      <Card.Section>
        <Image
          width={CARD_WIDTH}
          height={IMAGE_HEIGHT}
          src={imageUrl}
          alt={title}
        />
      </Card.Section>
      <Card.Section className={classes.info}>
        <Text weight={700}>{title}</Text>
        <Text className={classes.description} size="sm">
          {description}
        </Text>
      </Card.Section>
    </Card>
  );
};

export default RepoCard;
