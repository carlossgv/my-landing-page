import { Text, createStyles } from '@mantine/core';
import Image from 'next/image';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imageWrapper: {
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    width: '100%',
    textAlign: 'center',
  },
}));

const TechCard = ({ imageUrl, title }: { imageUrl: string; title: string }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.imageWrapper}>
        <Image src={imageUrl} alt={title} height={100} width={'100%'} />
      </div>
      <Text transform="uppercase" className={classes.text} weight={700}>
        {title}
      </Text>
    </div>
  );
};

export default TechCard;
