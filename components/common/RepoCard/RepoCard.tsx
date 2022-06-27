import { Text, createStyles } from '@mantine/core';
import Image from 'next/image';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
  },
  card: {
    maxWidth: 500,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    background: theme.colors.backgroundSecondary[0],
    margin: 'auto',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -8,
    padding: 20,
    color: theme.colors.text[0],
    textDecoration: 'none',
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
    <div className={classes.card}>
      <Image src={imageUrl} alt={title} />
      <div className={classes.info}>
        <Text weight={700}>{title}</Text>
        <Text className={classes.description} size="sm">
          {description}
        </Text>
      </div>
    </div>
  );
};

export default RepoCard;
