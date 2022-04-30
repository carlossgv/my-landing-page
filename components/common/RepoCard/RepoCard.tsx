import { Text, Card, createStyles } from '@mantine/core';
import Image from 'next/image';

const CARD_WIDTH = 350;

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
  },
  card: {
    width: CARD_WIDTH,
    padding: 0,
    boxShadow: `30px 30px 0 -15px ${theme.colors.accent[3]}`,
    WebkitBoxShadow: `30px 30px 0 -15px ${theme.colors.accent[3]}`,
    display: 'flex',
    flexDirection: 'column',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      boxShadow: `10px 10px 0 -15px ${theme.colors.accent[3]}`,
      WebkitBoxShadow: `10px 10px 0 -5px ${theme.colors.accent[3]}`,
      marginRight: 5,
    },
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
          height={(CARD_WIDTH / 16) * 9}
          src={imageUrl}
          alt={title}
        />
      </Card.Section>
      <div className={classes.info}>
        <Text weight={700}>{title}</Text>
        <Text size="sm">{description}</Text>
      </div>
    </Card>
  );
};

export default RepoCard;
